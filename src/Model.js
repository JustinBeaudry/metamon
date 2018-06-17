import {unix} from './utils';
import Serializable from './Serializable';
import uuid from 'uuid';
import _ from 'lodash';
import Enjoi from 'enjoi-browser/lib/enjoi';

const _defaults = Symbol('defaults');
const _schema = Symbol('schema');
const _views = Symbol('views');

/**
 * @extends Serializable
 */
class Model extends Serializable {
  /**
   *
   * A Model is really just sugar over a class(object).
   *
   * Why use it over jut a plain object or class instance?
   * A Metamon Model provides methods for setting default data, defining a schema to validate field properties,
   * setting views (whitelisted or blacklisted) properties on your data.
   *
   * @example
   *
   * // you can define defaults in the defaults option or in the joi schema.
   *
   * class Pokemon extends Model {
   *   constructor(data) {
   *      super(data, {
   *        defaults: {
   *          name: 'Ditto',
   *          level: 1,
   *          type: ''
   *        }
   *        schema: {
   *          name: {
   *            type: 'string',
   *            default: 'Ditto',
   *            required: true // defaults to true
   *          },
   *          level: {
   *            type: 'number',
   *            default: 1
   *          },
   *          type: {
   *            type: 'string',
   *            default: 'normal'
   *          }
   *        },
   *        schemaOptions: {
   *          types: {
   *            thing: Joi.any()
   *            email: {
   *              email: Joi.string().email()
   *            }
   *          },
   *          refineType: (type, format => {
   *            if (type === 'string' && format === 'email') {
   *              return 'email';
   *            }
   *          }
   *        },
   *        views: {
   *          client: {
   *            blacklist: ['age', 'type']
   *          }
   *        }
   *      });
   *    }
   *  }
   *
   * const ditto = new Pokemon({
   *   name: 'Ditto'
   * });
   *
   * @summary
   *
   * A Metamon model is a tool that provides consistency with your data representations
   *
   * @param {Object} data
   * @param {Object} (options) [{
   *    defaults: {
     *    id: {String},
     *    modified: {Number}
     *    created: {Number}
   *    },
   *    schema: {
   *      <String>: {
   *        type: <String>
   *      }
   *    }, - an enjoi JSON schema https://github.com/tlivings/enjoi
   *    views: {
   *      <String>: {
   *        whitelist: Array<String>, // only supports one or the other for each view
   *        blacklist: Array<String>
   *      }
   *    }
   *  }]
   *  @throws {Error}
   */
  constructor(data={}, options={
    defaults: {
      id: uuid.v4(),
      modified: unix(),
      created: unix()
    },
    schema: null,
    schemaOptions: null,
    views: null
  }) {
    super();
    this[_views] = {};
    this[_defaults] = options.defaults;
    if (options.schema) {
      this[_schema] = Enjoi(Object.assign({}, {
        type: 'object',
        properties: options.schema,
        strictMode: true,
      }), Object.assign({}, options.schemaOptions));
    }
    if (options.views) {
      Object.keys(options.views).forEach(name => {
        const view = options.views[name];
        if (!view.blacklist && !view.whitelist) {
          throw new Error('A view is required to have a whitelist or blacklist Array of strings');
        }
        if (view.blacklist && view.whitelist) {
          throw new Error('A view only supports either a blacklist or whitelist');
        }
        if (view.blacklist) {
          this.addView(name, view.blacklist, false);
        }
        if (view.whitelist) {
          this.addView(name, view.whitelist, true);
        }
      });
    }
    this.set(data);
  }
  /**
   *
   * Model.set() is a helper method that's used to set data onto a Model.
   * Using set() over direct Object assignment is advantageous because it aids in providing consistency.
   * By using set() your validating the data (if you're using the schema option). If you're using none of the
   * options for a model than direct assignment is perfectly suitable and set() is not necessary.
   *
   * @summary
   * set model property declarations and runs schema validation and sets defaults
   *
   * @param {Object} data
   */
  set(data) {
    if (this[_schema]) {
      let result = this[_schema].validate(data);
      if (result.error) {
        throw new Error(`${JSON.stringify(data, null, 2)} does not match the schema`);
      }
      data = result.value;
    }
    if (this[_defaults]) {
      Object.assign(this, this[_defaults], data);
    }
    Object.assign(this, data);
  }
  /**
   *
   * Views are a way of creating a white or black lists of fields referable by a unique string name.
   * This allows Model instances to have various representations while still adhering to DRY.
   *
   * @summary
   * adds a view, which is a POJO slice of the data model.
   *
   * @param {String} name - unique name for a view
   * @param {Array<String>} fields - the fields that the view represents
   * @param {Boolean} (isWhitelist) - whitelist instance values
   * @throws Error - throws if a view already exists by the name field
   */
  addView(name, fields, isWhitelist=true) {
    if (this[_views][name]) {
      throw new Error(`View already exists with the name ${name}`);
    }
    this[_views][name] = {
      whitelist: isWhitelist,
      fields: fields
    };
  }
  /**
   *
   * Return a view representation by name.
   *
   * @param {String} name - name of the view to get
   * @returns {null|Object}
   */
  getView(name) {
    if (!this[_views][name]) {
      return null;
    }
    const view = this[_views][name];
    if (view.whitelist) {
      return _.pick(this, view.fields);
    } else {
      return _.omit(this, view.fields);
    }
  }
}

export default Model;
