var Metamon = (function (exports) {
	'use strict';

	var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function unwrapExports (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var lodash = createCommonjsModule(function (module, exports) {
	(function() {
	  var undefined;
	  var VERSION = '4.17.10';
	  var LARGE_ARRAY_SIZE = 200;
	  var CORE_ERROR_TEXT = 'Unsupported core-js use. Try https://npms.io/search?q=ponyfill.',
	      FUNC_ERROR_TEXT = 'Expected a function';
	  var HASH_UNDEFINED = '__lodash_hash_undefined__';
	  var MAX_MEMOIZE_SIZE = 500;
	  var PLACEHOLDER = '__lodash_placeholder__';
	  var CLONE_DEEP_FLAG = 1,
	      CLONE_FLAT_FLAG = 2,
	      CLONE_SYMBOLS_FLAG = 4;
	  var COMPARE_PARTIAL_FLAG = 1,
	      COMPARE_UNORDERED_FLAG = 2;
	  var WRAP_BIND_FLAG = 1,
	      WRAP_BIND_KEY_FLAG = 2,
	      WRAP_CURRY_BOUND_FLAG = 4,
	      WRAP_CURRY_FLAG = 8,
	      WRAP_CURRY_RIGHT_FLAG = 16,
	      WRAP_PARTIAL_FLAG = 32,
	      WRAP_PARTIAL_RIGHT_FLAG = 64,
	      WRAP_ARY_FLAG = 128,
	      WRAP_REARG_FLAG = 256,
	      WRAP_FLIP_FLAG = 512;
	  var DEFAULT_TRUNC_LENGTH = 30,
	      DEFAULT_TRUNC_OMISSION = '...';
	  var HOT_COUNT = 800,
	      HOT_SPAN = 16;
	  var LAZY_FILTER_FLAG = 1,
	      LAZY_MAP_FLAG = 2,
	      LAZY_WHILE_FLAG = 3;
	  var INFINITY = 1 / 0,
	      MAX_SAFE_INTEGER = 9007199254740991,
	      MAX_INTEGER = 1.7976931348623157e+308,
	      NAN = 0 / 0;
	  var MAX_ARRAY_LENGTH = 4294967295,
	      MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1,
	      HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;
	  var wrapFlags = [
	    ['ary', WRAP_ARY_FLAG],
	    ['bind', WRAP_BIND_FLAG],
	    ['bindKey', WRAP_BIND_KEY_FLAG],
	    ['curry', WRAP_CURRY_FLAG],
	    ['curryRight', WRAP_CURRY_RIGHT_FLAG],
	    ['flip', WRAP_FLIP_FLAG],
	    ['partial', WRAP_PARTIAL_FLAG],
	    ['partialRight', WRAP_PARTIAL_RIGHT_FLAG],
	    ['rearg', WRAP_REARG_FLAG]
	  ];
	  var argsTag = '[object Arguments]',
	      arrayTag = '[object Array]',
	      asyncTag = '[object AsyncFunction]',
	      boolTag = '[object Boolean]',
	      dateTag = '[object Date]',
	      domExcTag = '[object DOMException]',
	      errorTag = '[object Error]',
	      funcTag = '[object Function]',
	      genTag = '[object GeneratorFunction]',
	      mapTag = '[object Map]',
	      numberTag = '[object Number]',
	      nullTag = '[object Null]',
	      objectTag = '[object Object]',
	      promiseTag = '[object Promise]',
	      proxyTag = '[object Proxy]',
	      regexpTag = '[object RegExp]',
	      setTag = '[object Set]',
	      stringTag = '[object String]',
	      symbolTag = '[object Symbol]',
	      undefinedTag = '[object Undefined]',
	      weakMapTag = '[object WeakMap]',
	      weakSetTag = '[object WeakSet]';
	  var arrayBufferTag = '[object ArrayBuffer]',
	      dataViewTag = '[object DataView]',
	      float32Tag = '[object Float32Array]',
	      float64Tag = '[object Float64Array]',
	      int8Tag = '[object Int8Array]',
	      int16Tag = '[object Int16Array]',
	      int32Tag = '[object Int32Array]',
	      uint8Tag = '[object Uint8Array]',
	      uint8ClampedTag = '[object Uint8ClampedArray]',
	      uint16Tag = '[object Uint16Array]',
	      uint32Tag = '[object Uint32Array]';
	  var reEmptyStringLeading = /\b__p \+= '';/g,
	      reEmptyStringMiddle = /\b(__p \+=) '' \+/g,
	      reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;
	  var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g,
	      reUnescapedHtml = /[&<>"']/g,
	      reHasEscapedHtml = RegExp(reEscapedHtml.source),
	      reHasUnescapedHtml = RegExp(reUnescapedHtml.source);
	  var reEscape = /<%-([\s\S]+?)%>/g,
	      reEvaluate = /<%([\s\S]+?)%>/g,
	      reInterpolate = /<%=([\s\S]+?)%>/g;
	  var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
	      reIsPlainProp = /^\w*$/,
	      rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
	  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g,
	      reHasRegExpChar = RegExp(reRegExpChar.source);
	  var reTrim = /^\s+|\s+$/g,
	      reTrimStart = /^\s+/,
	      reTrimEnd = /\s+$/;
	  var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
	      reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/,
	      reSplitDetails = /,? & /;
	  var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
	  var reEscapeChar = /\\(\\)?/g;
	  var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
	  var reFlags = /\w*$/;
	  var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
	  var reIsBinary = /^0b[01]+$/i;
	  var reIsHostCtor = /^\[object .+?Constructor\]$/;
	  var reIsOctal = /^0o[0-7]+$/i;
	  var reIsUint = /^(?:0|[1-9]\d*)$/;
	  var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
	  var reNoMatch = /($^)/;
	  var reUnescapedString = /['\n\r\u2028\u2029\\]/g;
	  var rsAstralRange = '\\ud800-\\udfff',
	      rsComboMarksRange = '\\u0300-\\u036f',
	      reComboHalfMarksRange = '\\ufe20-\\ufe2f',
	      rsComboSymbolsRange = '\\u20d0-\\u20ff',
	      rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
	      rsDingbatRange = '\\u2700-\\u27bf',
	      rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
	      rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
	      rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
	      rsPunctuationRange = '\\u2000-\\u206f',
	      rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
	      rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
	      rsVarRange = '\\ufe0e\\ufe0f',
	      rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
	  var rsApos = "['\u2019]",
	      rsAstral = '[' + rsAstralRange + ']',
	      rsBreak = '[' + rsBreakRange + ']',
	      rsCombo = '[' + rsComboRange + ']',
	      rsDigits = '\\d+',
	      rsDingbat = '[' + rsDingbatRange + ']',
	      rsLower = '[' + rsLowerRange + ']',
	      rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
	      rsFitz = '\\ud83c[\\udffb-\\udfff]',
	      rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
	      rsNonAstral = '[^' + rsAstralRange + ']',
	      rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
	      rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
	      rsUpper = '[' + rsUpperRange + ']',
	      rsZWJ = '\\u200d';
	  var rsMiscLower = '(?:' + rsLower + '|' + rsMisc + ')',
	      rsMiscUpper = '(?:' + rsUpper + '|' + rsMisc + ')',
	      rsOptContrLower = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?',
	      rsOptContrUpper = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?',
	      reOptMod = rsModifier + '?',
	      rsOptVar = '[' + rsVarRange + ']?',
	      rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
	      rsOrdLower = '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
	      rsOrdUpper = '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
	      rsSeq = rsOptVar + reOptMod + rsOptJoin,
	      rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq,
	      rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';
	  var reApos = RegExp(rsApos, 'g');
	  var reComboMark = RegExp(rsCombo, 'g');
	  var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');
	  var reUnicodeWord = RegExp([
	    rsUpper + '?' + rsLower + '+' + rsOptContrLower + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')',
	    rsMiscUpper + '+' + rsOptContrUpper + '(?=' + [rsBreak, rsUpper + rsMiscLower, '$'].join('|') + ')',
	    rsUpper + '?' + rsMiscLower + '+' + rsOptContrLower,
	    rsUpper + '+' + rsOptContrUpper,
	    rsOrdUpper,
	    rsOrdLower,
	    rsDigits,
	    rsEmoji
	  ].join('|'), 'g');
	  var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboRange + rsVarRange + ']');
	  var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
	  var contextProps = [
	    'Array', 'Buffer', 'DataView', 'Date', 'Error', 'Float32Array', 'Float64Array',
	    'Function', 'Int8Array', 'Int16Array', 'Int32Array', 'Map', 'Math', 'Object',
	    'Promise', 'RegExp', 'Set', 'String', 'Symbol', 'TypeError', 'Uint8Array',
	    'Uint8ClampedArray', 'Uint16Array', 'Uint32Array', 'WeakMap',
	    '_', 'clearTimeout', 'isFinite', 'parseInt', 'setTimeout'
	  ];
	  var templateCounter = -1;
	  var typedArrayTags = {};
	  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	  typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	  typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	  typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	  typedArrayTags[uint32Tag] = true;
	  typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	  typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	  typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
	  typedArrayTags[errorTag] = typedArrayTags[funcTag] =
	  typedArrayTags[mapTag] = typedArrayTags[numberTag] =
	  typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
	  typedArrayTags[setTag] = typedArrayTags[stringTag] =
	  typedArrayTags[weakMapTag] = false;
	  var cloneableTags = {};
	  cloneableTags[argsTag] = cloneableTags[arrayTag] =
	  cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
	  cloneableTags[boolTag] = cloneableTags[dateTag] =
	  cloneableTags[float32Tag] = cloneableTags[float64Tag] =
	  cloneableTags[int8Tag] = cloneableTags[int16Tag] =
	  cloneableTags[int32Tag] = cloneableTags[mapTag] =
	  cloneableTags[numberTag] = cloneableTags[objectTag] =
	  cloneableTags[regexpTag] = cloneableTags[setTag] =
	  cloneableTags[stringTag] = cloneableTags[symbolTag] =
	  cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
	  cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
	  cloneableTags[errorTag] = cloneableTags[funcTag] =
	  cloneableTags[weakMapTag] = false;
	  var deburredLetters = {
	    '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
	    '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
	    '\xc7': 'C',  '\xe7': 'c',
	    '\xd0': 'D',  '\xf0': 'd',
	    '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
	    '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
	    '\xcc': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
	    '\xec': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
	    '\xd1': 'N',  '\xf1': 'n',
	    '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
	    '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
	    '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
	    '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
	    '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
	    '\xc6': 'Ae', '\xe6': 'ae',
	    '\xde': 'Th', '\xfe': 'th',
	    '\xdf': 'ss',
	    '\u0100': 'A',  '\u0102': 'A', '\u0104': 'A',
	    '\u0101': 'a',  '\u0103': 'a', '\u0105': 'a',
	    '\u0106': 'C',  '\u0108': 'C', '\u010a': 'C', '\u010c': 'C',
	    '\u0107': 'c',  '\u0109': 'c', '\u010b': 'c', '\u010d': 'c',
	    '\u010e': 'D',  '\u0110': 'D', '\u010f': 'd', '\u0111': 'd',
	    '\u0112': 'E',  '\u0114': 'E', '\u0116': 'E', '\u0118': 'E', '\u011a': 'E',
	    '\u0113': 'e',  '\u0115': 'e', '\u0117': 'e', '\u0119': 'e', '\u011b': 'e',
	    '\u011c': 'G',  '\u011e': 'G', '\u0120': 'G', '\u0122': 'G',
	    '\u011d': 'g',  '\u011f': 'g', '\u0121': 'g', '\u0123': 'g',
	    '\u0124': 'H',  '\u0126': 'H', '\u0125': 'h', '\u0127': 'h',
	    '\u0128': 'I',  '\u012a': 'I', '\u012c': 'I', '\u012e': 'I', '\u0130': 'I',
	    '\u0129': 'i',  '\u012b': 'i', '\u012d': 'i', '\u012f': 'i', '\u0131': 'i',
	    '\u0134': 'J',  '\u0135': 'j',
	    '\u0136': 'K',  '\u0137': 'k', '\u0138': 'k',
	    '\u0139': 'L',  '\u013b': 'L', '\u013d': 'L', '\u013f': 'L', '\u0141': 'L',
	    '\u013a': 'l',  '\u013c': 'l', '\u013e': 'l', '\u0140': 'l', '\u0142': 'l',
	    '\u0143': 'N',  '\u0145': 'N', '\u0147': 'N', '\u014a': 'N',
	    '\u0144': 'n',  '\u0146': 'n', '\u0148': 'n', '\u014b': 'n',
	    '\u014c': 'O',  '\u014e': 'O', '\u0150': 'O',
	    '\u014d': 'o',  '\u014f': 'o', '\u0151': 'o',
	    '\u0154': 'R',  '\u0156': 'R', '\u0158': 'R',
	    '\u0155': 'r',  '\u0157': 'r', '\u0159': 'r',
	    '\u015a': 'S',  '\u015c': 'S', '\u015e': 'S', '\u0160': 'S',
	    '\u015b': 's',  '\u015d': 's', '\u015f': 's', '\u0161': 's',
	    '\u0162': 'T',  '\u0164': 'T', '\u0166': 'T',
	    '\u0163': 't',  '\u0165': 't', '\u0167': 't',
	    '\u0168': 'U',  '\u016a': 'U', '\u016c': 'U', '\u016e': 'U', '\u0170': 'U', '\u0172': 'U',
	    '\u0169': 'u',  '\u016b': 'u', '\u016d': 'u', '\u016f': 'u', '\u0171': 'u', '\u0173': 'u',
	    '\u0174': 'W',  '\u0175': 'w',
	    '\u0176': 'Y',  '\u0177': 'y', '\u0178': 'Y',
	    '\u0179': 'Z',  '\u017b': 'Z', '\u017d': 'Z',
	    '\u017a': 'z',  '\u017c': 'z', '\u017e': 'z',
	    '\u0132': 'IJ', '\u0133': 'ij',
	    '\u0152': 'Oe', '\u0153': 'oe',
	    '\u0149': "'n", '\u017f': 's'
	  };
	  var htmlEscapes = {
	    '&': '&amp;',
	    '<': '&lt;',
	    '>': '&gt;',
	    '"': '&quot;',
	    "'": '&#39;'
	  };
	  var htmlUnescapes = {
	    '&amp;': '&',
	    '&lt;': '<',
	    '&gt;': '>',
	    '&quot;': '"',
	    '&#39;': "'"
	  };
	  var stringEscapes = {
	    '\\': '\\',
	    "'": "'",
	    '\n': 'n',
	    '\r': 'r',
	    '\u2028': 'u2028',
	    '\u2029': 'u2029'
	  };
	  var freeParseFloat = parseFloat,
	      freeParseInt = parseInt;
	  var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
	  var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
	  var root = freeGlobal || freeSelf || Function('return this')();
	  var freeExports = exports && !exports.nodeType && exports;
	  var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;
	  var moduleExports = freeModule && freeModule.exports === freeExports;
	  var freeProcess = moduleExports && freeGlobal.process;
	  var nodeUtil = (function() {
	    try {
	      var types = freeModule && freeModule.require && freeModule.require('util').types;
	      if (types) {
	        return types;
	      }
	      return freeProcess && freeProcess.binding && freeProcess.binding('util');
	    } catch (e) {}
	  }());
	  var nodeIsArrayBuffer = nodeUtil && nodeUtil.isArrayBuffer,
	      nodeIsDate = nodeUtil && nodeUtil.isDate,
	      nodeIsMap = nodeUtil && nodeUtil.isMap,
	      nodeIsRegExp = nodeUtil && nodeUtil.isRegExp,
	      nodeIsSet = nodeUtil && nodeUtil.isSet,
	      nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
	  function apply(func, thisArg, args) {
	    switch (args.length) {
	      case 0: return func.call(thisArg);
	      case 1: return func.call(thisArg, args[0]);
	      case 2: return func.call(thisArg, args[0], args[1]);
	      case 3: return func.call(thisArg, args[0], args[1], args[2]);
	    }
	    return func.apply(thisArg, args);
	  }
	  function arrayAggregator(array, setter, iteratee, accumulator) {
	    var index = -1,
	        length = array == null ? 0 : array.length;
	    while (++index < length) {
	      var value = array[index];
	      setter(accumulator, value, iteratee(value), array);
	    }
	    return accumulator;
	  }
	  function arrayEach(array, iteratee) {
	    var index = -1,
	        length = array == null ? 0 : array.length;
	    while (++index < length) {
	      if (iteratee(array[index], index, array) === false) {
	        break;
	      }
	    }
	    return array;
	  }
	  function arrayEachRight(array, iteratee) {
	    var length = array == null ? 0 : array.length;
	    while (length--) {
	      if (iteratee(array[length], length, array) === false) {
	        break;
	      }
	    }
	    return array;
	  }
	  function arrayEvery(array, predicate) {
	    var index = -1,
	        length = array == null ? 0 : array.length;
	    while (++index < length) {
	      if (!predicate(array[index], index, array)) {
	        return false;
	      }
	    }
	    return true;
	  }
	  function arrayFilter(array, predicate) {
	    var index = -1,
	        length = array == null ? 0 : array.length,
	        resIndex = 0,
	        result = [];
	    while (++index < length) {
	      var value = array[index];
	      if (predicate(value, index, array)) {
	        result[resIndex++] = value;
	      }
	    }
	    return result;
	  }
	  function arrayIncludes(array, value) {
	    var length = array == null ? 0 : array.length;
	    return !!length && baseIndexOf(array, value, 0) > -1;
	  }
	  function arrayIncludesWith(array, value, comparator) {
	    var index = -1,
	        length = array == null ? 0 : array.length;
	    while (++index < length) {
	      if (comparator(value, array[index])) {
	        return true;
	      }
	    }
	    return false;
	  }
	  function arrayMap(array, iteratee) {
	    var index = -1,
	        length = array == null ? 0 : array.length,
	        result = Array(length);
	    while (++index < length) {
	      result[index] = iteratee(array[index], index, array);
	    }
	    return result;
	  }
	  function arrayPush(array, values) {
	    var index = -1,
	        length = values.length,
	        offset = array.length;
	    while (++index < length) {
	      array[offset + index] = values[index];
	    }
	    return array;
	  }
	  function arrayReduce(array, iteratee, accumulator, initAccum) {
	    var index = -1,
	        length = array == null ? 0 : array.length;
	    if (initAccum && length) {
	      accumulator = array[++index];
	    }
	    while (++index < length) {
	      accumulator = iteratee(accumulator, array[index], index, array);
	    }
	    return accumulator;
	  }
	  function arrayReduceRight(array, iteratee, accumulator, initAccum) {
	    var length = array == null ? 0 : array.length;
	    if (initAccum && length) {
	      accumulator = array[--length];
	    }
	    while (length--) {
	      accumulator = iteratee(accumulator, array[length], length, array);
	    }
	    return accumulator;
	  }
	  function arraySome(array, predicate) {
	    var index = -1,
	        length = array == null ? 0 : array.length;
	    while (++index < length) {
	      if (predicate(array[index], index, array)) {
	        return true;
	      }
	    }
	    return false;
	  }
	  var asciiSize = baseProperty('length');
	  function asciiToArray(string) {
	    return string.split('');
	  }
	  function asciiWords(string) {
	    return string.match(reAsciiWord) || [];
	  }
	  function baseFindKey(collection, predicate, eachFunc) {
	    var result;
	    eachFunc(collection, function(value, key, collection) {
	      if (predicate(value, key, collection)) {
	        result = key;
	        return false;
	      }
	    });
	    return result;
	  }
	  function baseFindIndex(array, predicate, fromIndex, fromRight) {
	    var length = array.length,
	        index = fromIndex + (fromRight ? 1 : -1);
	    while ((fromRight ? index-- : ++index < length)) {
	      if (predicate(array[index], index, array)) {
	        return index;
	      }
	    }
	    return -1;
	  }
	  function baseIndexOf(array, value, fromIndex) {
	    return value === value
	      ? strictIndexOf(array, value, fromIndex)
	      : baseFindIndex(array, baseIsNaN, fromIndex);
	  }
	  function baseIndexOfWith(array, value, fromIndex, comparator) {
	    var index = fromIndex - 1,
	        length = array.length;
	    while (++index < length) {
	      if (comparator(array[index], value)) {
	        return index;
	      }
	    }
	    return -1;
	  }
	  function baseIsNaN(value) {
	    return value !== value;
	  }
	  function baseMean(array, iteratee) {
	    var length = array == null ? 0 : array.length;
	    return length ? (baseSum(array, iteratee) / length) : NAN;
	  }
	  function baseProperty(key) {
	    return function(object) {
	      return object == null ? undefined : object[key];
	    };
	  }
	  function basePropertyOf(object) {
	    return function(key) {
	      return object == null ? undefined : object[key];
	    };
	  }
	  function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
	    eachFunc(collection, function(value, index, collection) {
	      accumulator = initAccum
	        ? (initAccum = false, value)
	        : iteratee(accumulator, value, index, collection);
	    });
	    return accumulator;
	  }
	  function baseSortBy(array, comparer) {
	    var length = array.length;
	    array.sort(comparer);
	    while (length--) {
	      array[length] = array[length].value;
	    }
	    return array;
	  }
	  function baseSum(array, iteratee) {
	    var result,
	        index = -1,
	        length = array.length;
	    while (++index < length) {
	      var current = iteratee(array[index]);
	      if (current !== undefined) {
	        result = result === undefined ? current : (result + current);
	      }
	    }
	    return result;
	  }
	  function baseTimes(n, iteratee) {
	    var index = -1,
	        result = Array(n);
	    while (++index < n) {
	      result[index] = iteratee(index);
	    }
	    return result;
	  }
	  function baseToPairs(object, props) {
	    return arrayMap(props, function(key) {
	      return [key, object[key]];
	    });
	  }
	  function baseUnary(func) {
	    return function(value) {
	      return func(value);
	    };
	  }
	  function baseValues(object, props) {
	    return arrayMap(props, function(key) {
	      return object[key];
	    });
	  }
	  function cacheHas(cache, key) {
	    return cache.has(key);
	  }
	  function charsStartIndex(strSymbols, chrSymbols) {
	    var index = -1,
	        length = strSymbols.length;
	    while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
	    return index;
	  }
	  function charsEndIndex(strSymbols, chrSymbols) {
	    var index = strSymbols.length;
	    while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
	    return index;
	  }
	  function countHolders(array, placeholder) {
	    var length = array.length,
	        result = 0;
	    while (length--) {
	      if (array[length] === placeholder) {
	        ++result;
	      }
	    }
	    return result;
	  }
	  var deburrLetter = basePropertyOf(deburredLetters);
	  var escapeHtmlChar = basePropertyOf(htmlEscapes);
	  function escapeStringChar(chr) {
	    return '\\' + stringEscapes[chr];
	  }
	  function getValue(object, key) {
	    return object == null ? undefined : object[key];
	  }
	  function hasUnicode(string) {
	    return reHasUnicode.test(string);
	  }
	  function hasUnicodeWord(string) {
	    return reHasUnicodeWord.test(string);
	  }
	  function iteratorToArray(iterator) {
	    var data,
	        result = [];
	    while (!(data = iterator.next()).done) {
	      result.push(data.value);
	    }
	    return result;
	  }
	  function mapToArray(map) {
	    var index = -1,
	        result = Array(map.size);
	    map.forEach(function(value, key) {
	      result[++index] = [key, value];
	    });
	    return result;
	  }
	  function overArg(func, transform) {
	    return function(arg) {
	      return func(transform(arg));
	    };
	  }
	  function replaceHolders(array, placeholder) {
	    var index = -1,
	        length = array.length,
	        resIndex = 0,
	        result = [];
	    while (++index < length) {
	      var value = array[index];
	      if (value === placeholder || value === PLACEHOLDER) {
	        array[index] = PLACEHOLDER;
	        result[resIndex++] = index;
	      }
	    }
	    return result;
	  }
	  function safeGet(object, key) {
	    return key == '__proto__'
	      ? undefined
	      : object[key];
	  }
	  function setToArray(set) {
	    var index = -1,
	        result = Array(set.size);
	    set.forEach(function(value) {
	      result[++index] = value;
	    });
	    return result;
	  }
	  function setToPairs(set) {
	    var index = -1,
	        result = Array(set.size);
	    set.forEach(function(value) {
	      result[++index] = [value, value];
	    });
	    return result;
	  }
	  function strictIndexOf(array, value, fromIndex) {
	    var index = fromIndex - 1,
	        length = array.length;
	    while (++index < length) {
	      if (array[index] === value) {
	        return index;
	      }
	    }
	    return -1;
	  }
	  function strictLastIndexOf(array, value, fromIndex) {
	    var index = fromIndex + 1;
	    while (index--) {
	      if (array[index] === value) {
	        return index;
	      }
	    }
	    return index;
	  }
	  function stringSize(string) {
	    return hasUnicode(string)
	      ? unicodeSize(string)
	      : asciiSize(string);
	  }
	  function stringToArray(string) {
	    return hasUnicode(string)
	      ? unicodeToArray(string)
	      : asciiToArray(string);
	  }
	  var unescapeHtmlChar = basePropertyOf(htmlUnescapes);
	  function unicodeSize(string) {
	    var result = reUnicode.lastIndex = 0;
	    while (reUnicode.test(string)) {
	      ++result;
	    }
	    return result;
	  }
	  function unicodeToArray(string) {
	    return string.match(reUnicode) || [];
	  }
	  function unicodeWords(string) {
	    return string.match(reUnicodeWord) || [];
	  }
	  var runInContext = (function runInContext(context) {
	    context = context == null ? root : _.defaults(root.Object(), context, _.pick(root, contextProps));
	    var Array = context.Array,
	        Date = context.Date,
	        Error = context.Error,
	        Function = context.Function,
	        Math = context.Math,
	        Object = context.Object,
	        RegExp = context.RegExp,
	        String = context.String,
	        TypeError = context.TypeError;
	    var arrayProto = Array.prototype,
	        funcProto = Function.prototype,
	        objectProto = Object.prototype;
	    var coreJsData = context['__core-js_shared__'];
	    var funcToString = funcProto.toString;
	    var hasOwnProperty = objectProto.hasOwnProperty;
	    var idCounter = 0;
	    var maskSrcKey = (function() {
	      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	      return uid ? ('Symbol(src)_1.' + uid) : '';
	    }());
	    var nativeObjectToString = objectProto.toString;
	    var objectCtorString = funcToString.call(Object);
	    var oldDash = root._;
	    var reIsNative = RegExp('^' +
	      funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	      .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	    );
	    var Buffer = moduleExports ? context.Buffer : undefined,
	        Symbol = context.Symbol,
	        Uint8Array = context.Uint8Array,
	        allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined,
	        getPrototype = overArg(Object.getPrototypeOf, Object),
	        objectCreate = Object.create,
	        propertyIsEnumerable = objectProto.propertyIsEnumerable,
	        splice = arrayProto.splice,
	        spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined,
	        symIterator = Symbol ? Symbol.iterator : undefined,
	        symToStringTag = Symbol ? Symbol.toStringTag : undefined;
	    var defineProperty = (function() {
	      try {
	        var func = getNative(Object, 'defineProperty');
	        func({}, '', {});
	        return func;
	      } catch (e) {}
	    }());
	    var ctxClearTimeout = context.clearTimeout !== root.clearTimeout && context.clearTimeout,
	        ctxNow = Date && Date.now !== root.Date.now && Date.now,
	        ctxSetTimeout = context.setTimeout !== root.setTimeout && context.setTimeout;
	    var nativeCeil = Math.ceil,
	        nativeFloor = Math.floor,
	        nativeGetSymbols = Object.getOwnPropertySymbols,
	        nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
	        nativeIsFinite = context.isFinite,
	        nativeJoin = arrayProto.join,
	        nativeKeys = overArg(Object.keys, Object),
	        nativeMax = Math.max,
	        nativeMin = Math.min,
	        nativeNow = Date.now,
	        nativeParseInt = context.parseInt,
	        nativeRandom = Math.random,
	        nativeReverse = arrayProto.reverse;
	    var DataView = getNative(context, 'DataView'),
	        Map = getNative(context, 'Map'),
	        Promise = getNative(context, 'Promise'),
	        Set = getNative(context, 'Set'),
	        WeakMap = getNative(context, 'WeakMap'),
	        nativeCreate = getNative(Object, 'create');
	    var metaMap = WeakMap && new WeakMap;
	    var realNames = {};
	    var dataViewCtorString = toSource(DataView),
	        mapCtorString = toSource(Map),
	        promiseCtorString = toSource(Promise),
	        setCtorString = toSource(Set),
	        weakMapCtorString = toSource(WeakMap);
	    var symbolProto = Symbol ? Symbol.prototype : undefined,
	        symbolValueOf = symbolProto ? symbolProto.valueOf : undefined,
	        symbolToString = symbolProto ? symbolProto.toString : undefined;
	    function lodash(value) {
	      if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
	        if (value instanceof LodashWrapper) {
	          return value;
	        }
	        if (hasOwnProperty.call(value, '__wrapped__')) {
	          return wrapperClone(value);
	        }
	      }
	      return new LodashWrapper(value);
	    }
	    var baseCreate = (function() {
	      function object() {}
	      return function(proto) {
	        if (!isObject(proto)) {
	          return {};
	        }
	        if (objectCreate) {
	          return objectCreate(proto);
	        }
	        object.prototype = proto;
	        var result = new object;
	        object.prototype = undefined;
	        return result;
	      };
	    }());
	    function baseLodash() {
	    }
	    function LodashWrapper(value, chainAll) {
	      this.__wrapped__ = value;
	      this.__actions__ = [];
	      this.__chain__ = !!chainAll;
	      this.__index__ = 0;
	      this.__values__ = undefined;
	    }
	    lodash.templateSettings = {
	      'escape': reEscape,
	      'evaluate': reEvaluate,
	      'interpolate': reInterpolate,
	      'variable': '',
	      'imports': {
	        '_': lodash
	      }
	    };
	    lodash.prototype = baseLodash.prototype;
	    lodash.prototype.constructor = lodash;
	    LodashWrapper.prototype = baseCreate(baseLodash.prototype);
	    LodashWrapper.prototype.constructor = LodashWrapper;
	    function LazyWrapper(value) {
	      this.__wrapped__ = value;
	      this.__actions__ = [];
	      this.__dir__ = 1;
	      this.__filtered__ = false;
	      this.__iteratees__ = [];
	      this.__takeCount__ = MAX_ARRAY_LENGTH;
	      this.__views__ = [];
	    }
	    function lazyClone() {
	      var result = new LazyWrapper(this.__wrapped__);
	      result.__actions__ = copyArray(this.__actions__);
	      result.__dir__ = this.__dir__;
	      result.__filtered__ = this.__filtered__;
	      result.__iteratees__ = copyArray(this.__iteratees__);
	      result.__takeCount__ = this.__takeCount__;
	      result.__views__ = copyArray(this.__views__);
	      return result;
	    }
	    function lazyReverse() {
	      if (this.__filtered__) {
	        var result = new LazyWrapper(this);
	        result.__dir__ = -1;
	        result.__filtered__ = true;
	      } else {
	        result = this.clone();
	        result.__dir__ *= -1;
	      }
	      return result;
	    }
	    function lazyValue() {
	      var array = this.__wrapped__.value(),
	          dir = this.__dir__,
	          isArr = isArray(array),
	          isRight = dir < 0,
	          arrLength = isArr ? array.length : 0,
	          view = getView(0, arrLength, this.__views__),
	          start = view.start,
	          end = view.end,
	          length = end - start,
	          index = isRight ? end : (start - 1),
	          iteratees = this.__iteratees__,
	          iterLength = iteratees.length,
	          resIndex = 0,
	          takeCount = nativeMin(length, this.__takeCount__);
	      if (!isArr || (!isRight && arrLength == length && takeCount == length)) {
	        return baseWrapperValue(array, this.__actions__);
	      }
	      var result = [];
	      outer:
	      while (length-- && resIndex < takeCount) {
	        index += dir;
	        var iterIndex = -1,
	            value = array[index];
	        while (++iterIndex < iterLength) {
	          var data = iteratees[iterIndex],
	              iteratee = data.iteratee,
	              type = data.type,
	              computed = iteratee(value);
	          if (type == LAZY_MAP_FLAG) {
	            value = computed;
	          } else if (!computed) {
	            if (type == LAZY_FILTER_FLAG) {
	              continue outer;
	            } else {
	              break outer;
	            }
	          }
	        }
	        result[resIndex++] = value;
	      }
	      return result;
	    }
	    LazyWrapper.prototype = baseCreate(baseLodash.prototype);
	    LazyWrapper.prototype.constructor = LazyWrapper;
	    function Hash(entries) {
	      var index = -1,
	          length = entries == null ? 0 : entries.length;
	      this.clear();
	      while (++index < length) {
	        var entry = entries[index];
	        this.set(entry[0], entry[1]);
	      }
	    }
	    function hashClear() {
	      this.__data__ = nativeCreate ? nativeCreate(null) : {};
	      this.size = 0;
	    }
	    function hashDelete(key) {
	      var result = this.has(key) && delete this.__data__[key];
	      this.size -= result ? 1 : 0;
	      return result;
	    }
	    function hashGet(key) {
	      var data = this.__data__;
	      if (nativeCreate) {
	        var result = data[key];
	        return result === HASH_UNDEFINED ? undefined : result;
	      }
	      return hasOwnProperty.call(data, key) ? data[key] : undefined;
	    }
	    function hashHas(key) {
	      var data = this.__data__;
	      return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
	    }
	    function hashSet(key, value) {
	      var data = this.__data__;
	      this.size += this.has(key) ? 0 : 1;
	      data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
	      return this;
	    }
	    Hash.prototype.clear = hashClear;
	    Hash.prototype['delete'] = hashDelete;
	    Hash.prototype.get = hashGet;
	    Hash.prototype.has = hashHas;
	    Hash.prototype.set = hashSet;
	    function ListCache(entries) {
	      var index = -1,
	          length = entries == null ? 0 : entries.length;
	      this.clear();
	      while (++index < length) {
	        var entry = entries[index];
	        this.set(entry[0], entry[1]);
	      }
	    }
	    function listCacheClear() {
	      this.__data__ = [];
	      this.size = 0;
	    }
	    function listCacheDelete(key) {
	      var data = this.__data__,
	          index = assocIndexOf(data, key);
	      if (index < 0) {
	        return false;
	      }
	      var lastIndex = data.length - 1;
	      if (index == lastIndex) {
	        data.pop();
	      } else {
	        splice.call(data, index, 1);
	      }
	      --this.size;
	      return true;
	    }
	    function listCacheGet(key) {
	      var data = this.__data__,
	          index = assocIndexOf(data, key);
	      return index < 0 ? undefined : data[index][1];
	    }
	    function listCacheHas(key) {
	      return assocIndexOf(this.__data__, key) > -1;
	    }
	    function listCacheSet(key, value) {
	      var data = this.__data__,
	          index = assocIndexOf(data, key);
	      if (index < 0) {
	        ++this.size;
	        data.push([key, value]);
	      } else {
	        data[index][1] = value;
	      }
	      return this;
	    }
	    ListCache.prototype.clear = listCacheClear;
	    ListCache.prototype['delete'] = listCacheDelete;
	    ListCache.prototype.get = listCacheGet;
	    ListCache.prototype.has = listCacheHas;
	    ListCache.prototype.set = listCacheSet;
	    function MapCache(entries) {
	      var index = -1,
	          length = entries == null ? 0 : entries.length;
	      this.clear();
	      while (++index < length) {
	        var entry = entries[index];
	        this.set(entry[0], entry[1]);
	      }
	    }
	    function mapCacheClear() {
	      this.size = 0;
	      this.__data__ = {
	        'hash': new Hash,
	        'map': new (Map || ListCache),
	        'string': new Hash
	      };
	    }
	    function mapCacheDelete(key) {
	      var result = getMapData(this, key)['delete'](key);
	      this.size -= result ? 1 : 0;
	      return result;
	    }
	    function mapCacheGet(key) {
	      return getMapData(this, key).get(key);
	    }
	    function mapCacheHas(key) {
	      return getMapData(this, key).has(key);
	    }
	    function mapCacheSet(key, value) {
	      var data = getMapData(this, key),
	          size = data.size;
	      data.set(key, value);
	      this.size += data.size == size ? 0 : 1;
	      return this;
	    }
	    MapCache.prototype.clear = mapCacheClear;
	    MapCache.prototype['delete'] = mapCacheDelete;
	    MapCache.prototype.get = mapCacheGet;
	    MapCache.prototype.has = mapCacheHas;
	    MapCache.prototype.set = mapCacheSet;
	    function SetCache(values) {
	      var index = -1,
	          length = values == null ? 0 : values.length;
	      this.__data__ = new MapCache;
	      while (++index < length) {
	        this.add(values[index]);
	      }
	    }
	    function setCacheAdd(value) {
	      this.__data__.set(value, HASH_UNDEFINED);
	      return this;
	    }
	    function setCacheHas(value) {
	      return this.__data__.has(value);
	    }
	    SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
	    SetCache.prototype.has = setCacheHas;
	    function Stack(entries) {
	      var data = this.__data__ = new ListCache(entries);
	      this.size = data.size;
	    }
	    function stackClear() {
	      this.__data__ = new ListCache;
	      this.size = 0;
	    }
	    function stackDelete(key) {
	      var data = this.__data__,
	          result = data['delete'](key);
	      this.size = data.size;
	      return result;
	    }
	    function stackGet(key) {
	      return this.__data__.get(key);
	    }
	    function stackHas(key) {
	      return this.__data__.has(key);
	    }
	    function stackSet(key, value) {
	      var data = this.__data__;
	      if (data instanceof ListCache) {
	        var pairs = data.__data__;
	        if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
	          pairs.push([key, value]);
	          this.size = ++data.size;
	          return this;
	        }
	        data = this.__data__ = new MapCache(pairs);
	      }
	      data.set(key, value);
	      this.size = data.size;
	      return this;
	    }
	    Stack.prototype.clear = stackClear;
	    Stack.prototype['delete'] = stackDelete;
	    Stack.prototype.get = stackGet;
	    Stack.prototype.has = stackHas;
	    Stack.prototype.set = stackSet;
	    function arrayLikeKeys(value, inherited) {
	      var isArr = isArray(value),
	          isArg = !isArr && isArguments(value),
	          isBuff = !isArr && !isArg && isBuffer(value),
	          isType = !isArr && !isArg && !isBuff && isTypedArray(value),
	          skipIndexes = isArr || isArg || isBuff || isType,
	          result = skipIndexes ? baseTimes(value.length, String) : [],
	          length = result.length;
	      for (var key in value) {
	        if ((inherited || hasOwnProperty.call(value, key)) &&
	            !(skipIndexes && (
	               key == 'length' ||
	               (isBuff && (key == 'offset' || key == 'parent')) ||
	               (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
	               isIndex(key, length)
	            ))) {
	          result.push(key);
	        }
	      }
	      return result;
	    }
	    function arraySample(array) {
	      var length = array.length;
	      return length ? array[baseRandom(0, length - 1)] : undefined;
	    }
	    function arraySampleSize(array, n) {
	      return shuffleSelf(copyArray(array), baseClamp(n, 0, array.length));
	    }
	    function arrayShuffle(array) {
	      return shuffleSelf(copyArray(array));
	    }
	    function assignMergeValue(object, key, value) {
	      if ((value !== undefined && !eq(object[key], value)) ||
	          (value === undefined && !(key in object))) {
	        baseAssignValue(object, key, value);
	      }
	    }
	    function assignValue(object, key, value) {
	      var objValue = object[key];
	      if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
	          (value === undefined && !(key in object))) {
	        baseAssignValue(object, key, value);
	      }
	    }
	    function assocIndexOf(array, key) {
	      var length = array.length;
	      while (length--) {
	        if (eq(array[length][0], key)) {
	          return length;
	        }
	      }
	      return -1;
	    }
	    function baseAggregator(collection, setter, iteratee, accumulator) {
	      baseEach(collection, function(value, key, collection) {
	        setter(accumulator, value, iteratee(value), collection);
	      });
	      return accumulator;
	    }
	    function baseAssign(object, source) {
	      return object && copyObject(source, keys(source), object);
	    }
	    function baseAssignIn(object, source) {
	      return object && copyObject(source, keysIn(source), object);
	    }
	    function baseAssignValue(object, key, value) {
	      if (key == '__proto__' && defineProperty) {
	        defineProperty(object, key, {
	          'configurable': true,
	          'enumerable': true,
	          'value': value,
	          'writable': true
	        });
	      } else {
	        object[key] = value;
	      }
	    }
	    function baseAt(object, paths) {
	      var index = -1,
	          length = paths.length,
	          result = Array(length),
	          skip = object == null;
	      while (++index < length) {
	        result[index] = skip ? undefined : get(object, paths[index]);
	      }
	      return result;
	    }
	    function baseClamp(number, lower, upper) {
	      if (number === number) {
	        if (upper !== undefined) {
	          number = number <= upper ? number : upper;
	        }
	        if (lower !== undefined) {
	          number = number >= lower ? number : lower;
	        }
	      }
	      return number;
	    }
	    function baseClone(value, bitmask, customizer, key, object, stack) {
	      var result,
	          isDeep = bitmask & CLONE_DEEP_FLAG,
	          isFlat = bitmask & CLONE_FLAT_FLAG,
	          isFull = bitmask & CLONE_SYMBOLS_FLAG;
	      if (customizer) {
	        result = object ? customizer(value, key, object, stack) : customizer(value);
	      }
	      if (result !== undefined) {
	        return result;
	      }
	      if (!isObject(value)) {
	        return value;
	      }
	      var isArr = isArray(value);
	      if (isArr) {
	        result = initCloneArray(value);
	        if (!isDeep) {
	          return copyArray(value, result);
	        }
	      } else {
	        var tag = getTag(value),
	            isFunc = tag == funcTag || tag == genTag;
	        if (isBuffer(value)) {
	          return cloneBuffer(value, isDeep);
	        }
	        if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
	          result = (isFlat || isFunc) ? {} : initCloneObject(value);
	          if (!isDeep) {
	            return isFlat
	              ? copySymbolsIn(value, baseAssignIn(result, value))
	              : copySymbols(value, baseAssign(result, value));
	          }
	        } else {
	          if (!cloneableTags[tag]) {
	            return object ? value : {};
	          }
	          result = initCloneByTag(value, tag, isDeep);
	        }
	      }
	      stack || (stack = new Stack);
	      var stacked = stack.get(value);
	      if (stacked) {
	        return stacked;
	      }
	      stack.set(value, result);
	      if (isSet(value)) {
	        value.forEach(function(subValue) {
	          result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
	        });
	        return result;
	      }
	      if (isMap(value)) {
	        value.forEach(function(subValue, key) {
	          result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
	        });
	        return result;
	      }
	      var keysFunc = isFull
	        ? (isFlat ? getAllKeysIn : getAllKeys)
	        : (isFlat ? keysIn : keys);
	      var props = isArr ? undefined : keysFunc(value);
	      arrayEach(props || value, function(subValue, key) {
	        if (props) {
	          key = subValue;
	          subValue = value[key];
	        }
	        assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
	      });
	      return result;
	    }
	    function baseConforms(source) {
	      var props = keys(source);
	      return function(object) {
	        return baseConformsTo(object, source, props);
	      };
	    }
	    function baseConformsTo(object, source, props) {
	      var length = props.length;
	      if (object == null) {
	        return !length;
	      }
	      object = Object(object);
	      while (length--) {
	        var key = props[length],
	            predicate = source[key],
	            value = object[key];
	        if ((value === undefined && !(key in object)) || !predicate(value)) {
	          return false;
	        }
	      }
	      return true;
	    }
	    function baseDelay(func, wait, args) {
	      if (typeof func != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      return setTimeout(function() { func.apply(undefined, args); }, wait);
	    }
	    function baseDifference(array, values, iteratee, comparator) {
	      var index = -1,
	          includes = arrayIncludes,
	          isCommon = true,
	          length = array.length,
	          result = [],
	          valuesLength = values.length;
	      if (!length) {
	        return result;
	      }
	      if (iteratee) {
	        values = arrayMap(values, baseUnary(iteratee));
	      }
	      if (comparator) {
	        includes = arrayIncludesWith;
	        isCommon = false;
	      }
	      else if (values.length >= LARGE_ARRAY_SIZE) {
	        includes = cacheHas;
	        isCommon = false;
	        values = new SetCache(values);
	      }
	      outer:
	      while (++index < length) {
	        var value = array[index],
	            computed = iteratee == null ? value : iteratee(value);
	        value = (comparator || value !== 0) ? value : 0;
	        if (isCommon && computed === computed) {
	          var valuesIndex = valuesLength;
	          while (valuesIndex--) {
	            if (values[valuesIndex] === computed) {
	              continue outer;
	            }
	          }
	          result.push(value);
	        }
	        else if (!includes(values, computed, comparator)) {
	          result.push(value);
	        }
	      }
	      return result;
	    }
	    var baseEach = createBaseEach(baseForOwn);
	    var baseEachRight = createBaseEach(baseForOwnRight, true);
	    function baseEvery(collection, predicate) {
	      var result = true;
	      baseEach(collection, function(value, index, collection) {
	        result = !!predicate(value, index, collection);
	        return result;
	      });
	      return result;
	    }
	    function baseExtremum(array, iteratee, comparator) {
	      var index = -1,
	          length = array.length;
	      while (++index < length) {
	        var value = array[index],
	            current = iteratee(value);
	        if (current != null && (computed === undefined
	              ? (current === current && !isSymbol(current))
	              : comparator(current, computed)
	            )) {
	          var computed = current,
	              result = value;
	        }
	      }
	      return result;
	    }
	    function baseFill(array, value, start, end) {
	      var length = array.length;
	      start = toInteger(start);
	      if (start < 0) {
	        start = -start > length ? 0 : (length + start);
	      }
	      end = (end === undefined || end > length) ? length : toInteger(end);
	      if (end < 0) {
	        end += length;
	      }
	      end = start > end ? 0 : toLength(end);
	      while (start < end) {
	        array[start++] = value;
	      }
	      return array;
	    }
	    function baseFilter(collection, predicate) {
	      var result = [];
	      baseEach(collection, function(value, index, collection) {
	        if (predicate(value, index, collection)) {
	          result.push(value);
	        }
	      });
	      return result;
	    }
	    function baseFlatten(array, depth, predicate, isStrict, result) {
	      var index = -1,
	          length = array.length;
	      predicate || (predicate = isFlattenable);
	      result || (result = []);
	      while (++index < length) {
	        var value = array[index];
	        if (depth > 0 && predicate(value)) {
	          if (depth > 1) {
	            baseFlatten(value, depth - 1, predicate, isStrict, result);
	          } else {
	            arrayPush(result, value);
	          }
	        } else if (!isStrict) {
	          result[result.length] = value;
	        }
	      }
	      return result;
	    }
	    var baseFor = createBaseFor();
	    var baseForRight = createBaseFor(true);
	    function baseForOwn(object, iteratee) {
	      return object && baseFor(object, iteratee, keys);
	    }
	    function baseForOwnRight(object, iteratee) {
	      return object && baseForRight(object, iteratee, keys);
	    }
	    function baseFunctions(object, props) {
	      return arrayFilter(props, function(key) {
	        return isFunction(object[key]);
	      });
	    }
	    function baseGet(object, path) {
	      path = castPath(path, object);
	      var index = 0,
	          length = path.length;
	      while (object != null && index < length) {
	        object = object[toKey(path[index++])];
	      }
	      return (index && index == length) ? object : undefined;
	    }
	    function baseGetAllKeys(object, keysFunc, symbolsFunc) {
	      var result = keysFunc(object);
	      return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
	    }
	    function baseGetTag(value) {
	      if (value == null) {
	        return value === undefined ? undefinedTag : nullTag;
	      }
	      return (symToStringTag && symToStringTag in Object(value))
	        ? getRawTag(value)
	        : objectToString(value);
	    }
	    function baseGt(value, other) {
	      return value > other;
	    }
	    function baseHas(object, key) {
	      return object != null && hasOwnProperty.call(object, key);
	    }
	    function baseHasIn(object, key) {
	      return object != null && key in Object(object);
	    }
	    function baseInRange(number, start, end) {
	      return number >= nativeMin(start, end) && number < nativeMax(start, end);
	    }
	    function baseIntersection(arrays, iteratee, comparator) {
	      var includes = comparator ? arrayIncludesWith : arrayIncludes,
	          length = arrays[0].length,
	          othLength = arrays.length,
	          othIndex = othLength,
	          caches = Array(othLength),
	          maxLength = Infinity,
	          result = [];
	      while (othIndex--) {
	        var array = arrays[othIndex];
	        if (othIndex && iteratee) {
	          array = arrayMap(array, baseUnary(iteratee));
	        }
	        maxLength = nativeMin(array.length, maxLength);
	        caches[othIndex] = !comparator && (iteratee || (length >= 120 && array.length >= 120))
	          ? new SetCache(othIndex && array)
	          : undefined;
	      }
	      array = arrays[0];
	      var index = -1,
	          seen = caches[0];
	      outer:
	      while (++index < length && result.length < maxLength) {
	        var value = array[index],
	            computed = iteratee ? iteratee(value) : value;
	        value = (comparator || value !== 0) ? value : 0;
	        if (!(seen
	              ? cacheHas(seen, computed)
	              : includes(result, computed, comparator)
	            )) {
	          othIndex = othLength;
	          while (--othIndex) {
	            var cache = caches[othIndex];
	            if (!(cache
	                  ? cacheHas(cache, computed)
	                  : includes(arrays[othIndex], computed, comparator))
	                ) {
	              continue outer;
	            }
	          }
	          if (seen) {
	            seen.push(computed);
	          }
	          result.push(value);
	        }
	      }
	      return result;
	    }
	    function baseInverter(object, setter, iteratee, accumulator) {
	      baseForOwn(object, function(value, key, object) {
	        setter(accumulator, iteratee(value), key, object);
	      });
	      return accumulator;
	    }
	    function baseInvoke(object, path, args) {
	      path = castPath(path, object);
	      object = parent(object, path);
	      var func = object == null ? object : object[toKey(last(path))];
	      return func == null ? undefined : apply(func, object, args);
	    }
	    function baseIsArguments(value) {
	      return isObjectLike(value) && baseGetTag(value) == argsTag;
	    }
	    function baseIsArrayBuffer(value) {
	      return isObjectLike(value) && baseGetTag(value) == arrayBufferTag;
	    }
	    function baseIsDate(value) {
	      return isObjectLike(value) && baseGetTag(value) == dateTag;
	    }
	    function baseIsEqual(value, other, bitmask, customizer, stack) {
	      if (value === other) {
	        return true;
	      }
	      if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
	        return value !== value && other !== other;
	      }
	      return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
	    }
	    function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
	      var objIsArr = isArray(object),
	          othIsArr = isArray(other),
	          objTag = objIsArr ? arrayTag : getTag(object),
	          othTag = othIsArr ? arrayTag : getTag(other);
	      objTag = objTag == argsTag ? objectTag : objTag;
	      othTag = othTag == argsTag ? objectTag : othTag;
	      var objIsObj = objTag == objectTag,
	          othIsObj = othTag == objectTag,
	          isSameTag = objTag == othTag;
	      if (isSameTag && isBuffer(object)) {
	        if (!isBuffer(other)) {
	          return false;
	        }
	        objIsArr = true;
	        objIsObj = false;
	      }
	      if (isSameTag && !objIsObj) {
	        stack || (stack = new Stack);
	        return (objIsArr || isTypedArray(object))
	          ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
	          : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
	      }
	      if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
	        var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
	            othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');
	        if (objIsWrapped || othIsWrapped) {
	          var objUnwrapped = objIsWrapped ? object.value() : object,
	              othUnwrapped = othIsWrapped ? other.value() : other;
	          stack || (stack = new Stack);
	          return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
	        }
	      }
	      if (!isSameTag) {
	        return false;
	      }
	      stack || (stack = new Stack);
	      return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
	    }
	    function baseIsMap(value) {
	      return isObjectLike(value) && getTag(value) == mapTag;
	    }
	    function baseIsMatch(object, source, matchData, customizer) {
	      var index = matchData.length,
	          length = index,
	          noCustomizer = !customizer;
	      if (object == null) {
	        return !length;
	      }
	      object = Object(object);
	      while (index--) {
	        var data = matchData[index];
	        if ((noCustomizer && data[2])
	              ? data[1] !== object[data[0]]
	              : !(data[0] in object)
	            ) {
	          return false;
	        }
	      }
	      while (++index < length) {
	        data = matchData[index];
	        var key = data[0],
	            objValue = object[key],
	            srcValue = data[1];
	        if (noCustomizer && data[2]) {
	          if (objValue === undefined && !(key in object)) {
	            return false;
	          }
	        } else {
	          var stack = new Stack;
	          if (customizer) {
	            var result = customizer(objValue, srcValue, key, object, source, stack);
	          }
	          if (!(result === undefined
	                ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
	                : result
	              )) {
	            return false;
	          }
	        }
	      }
	      return true;
	    }
	    function baseIsNative(value) {
	      if (!isObject(value) || isMasked(value)) {
	        return false;
	      }
	      var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
	      return pattern.test(toSource(value));
	    }
	    function baseIsRegExp(value) {
	      return isObjectLike(value) && baseGetTag(value) == regexpTag;
	    }
	    function baseIsSet(value) {
	      return isObjectLike(value) && getTag(value) == setTag;
	    }
	    function baseIsTypedArray(value) {
	      return isObjectLike(value) &&
	        isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
	    }
	    function baseIteratee(value) {
	      if (typeof value == 'function') {
	        return value;
	      }
	      if (value == null) {
	        return identity;
	      }
	      if (typeof value == 'object') {
	        return isArray(value)
	          ? baseMatchesProperty(value[0], value[1])
	          : baseMatches(value);
	      }
	      return property(value);
	    }
	    function baseKeys(object) {
	      if (!isPrototype(object)) {
	        return nativeKeys(object);
	      }
	      var result = [];
	      for (var key in Object(object)) {
	        if (hasOwnProperty.call(object, key) && key != 'constructor') {
	          result.push(key);
	        }
	      }
	      return result;
	    }
	    function baseKeysIn(object) {
	      if (!isObject(object)) {
	        return nativeKeysIn(object);
	      }
	      var isProto = isPrototype(object),
	          result = [];
	      for (var key in object) {
	        if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	          result.push(key);
	        }
	      }
	      return result;
	    }
	    function baseLt(value, other) {
	      return value < other;
	    }
	    function baseMap(collection, iteratee) {
	      var index = -1,
	          result = isArrayLike(collection) ? Array(collection.length) : [];
	      baseEach(collection, function(value, key, collection) {
	        result[++index] = iteratee(value, key, collection);
	      });
	      return result;
	    }
	    function baseMatches(source) {
	      var matchData = getMatchData(source);
	      if (matchData.length == 1 && matchData[0][2]) {
	        return matchesStrictComparable(matchData[0][0], matchData[0][1]);
	      }
	      return function(object) {
	        return object === source || baseIsMatch(object, source, matchData);
	      };
	    }
	    function baseMatchesProperty(path, srcValue) {
	      if (isKey(path) && isStrictComparable(srcValue)) {
	        return matchesStrictComparable(toKey(path), srcValue);
	      }
	      return function(object) {
	        var objValue = get(object, path);
	        return (objValue === undefined && objValue === srcValue)
	          ? hasIn(object, path)
	          : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
	      };
	    }
	    function baseMerge(object, source, srcIndex, customizer, stack) {
	      if (object === source) {
	        return;
	      }
	      baseFor(source, function(srcValue, key) {
	        if (isObject(srcValue)) {
	          stack || (stack = new Stack);
	          baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
	        }
	        else {
	          var newValue = customizer
	            ? customizer(safeGet(object, key), srcValue, (key + ''), object, source, stack)
	            : undefined;
	          if (newValue === undefined) {
	            newValue = srcValue;
	          }
	          assignMergeValue(object, key, newValue);
	        }
	      }, keysIn);
	    }
	    function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
	      var objValue = safeGet(object, key),
	          srcValue = safeGet(source, key),
	          stacked = stack.get(srcValue);
	      if (stacked) {
	        assignMergeValue(object, key, stacked);
	        return;
	      }
	      var newValue = customizer
	        ? customizer(objValue, srcValue, (key + ''), object, source, stack)
	        : undefined;
	      var isCommon = newValue === undefined;
	      if (isCommon) {
	        var isArr = isArray(srcValue),
	            isBuff = !isArr && isBuffer(srcValue),
	            isTyped = !isArr && !isBuff && isTypedArray(srcValue);
	        newValue = srcValue;
	        if (isArr || isBuff || isTyped) {
	          if (isArray(objValue)) {
	            newValue = objValue;
	          }
	          else if (isArrayLikeObject(objValue)) {
	            newValue = copyArray(objValue);
	          }
	          else if (isBuff) {
	            isCommon = false;
	            newValue = cloneBuffer(srcValue, true);
	          }
	          else if (isTyped) {
	            isCommon = false;
	            newValue = cloneTypedArray(srcValue, true);
	          }
	          else {
	            newValue = [];
	          }
	        }
	        else if (isPlainObject(srcValue) || isArguments(srcValue)) {
	          newValue = objValue;
	          if (isArguments(objValue)) {
	            newValue = toPlainObject(objValue);
	          }
	          else if (!isObject(objValue) || (srcIndex && isFunction(objValue))) {
	            newValue = initCloneObject(srcValue);
	          }
	        }
	        else {
	          isCommon = false;
	        }
	      }
	      if (isCommon) {
	        stack.set(srcValue, newValue);
	        mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
	        stack['delete'](srcValue);
	      }
	      assignMergeValue(object, key, newValue);
	    }
	    function baseNth(array, n) {
	      var length = array.length;
	      if (!length) {
	        return;
	      }
	      n += n < 0 ? length : 0;
	      return isIndex(n, length) ? array[n] : undefined;
	    }
	    function baseOrderBy(collection, iteratees, orders) {
	      var index = -1;
	      iteratees = arrayMap(iteratees.length ? iteratees : [identity], baseUnary(getIteratee()));
	      var result = baseMap(collection, function(value, key, collection) {
	        var criteria = arrayMap(iteratees, function(iteratee) {
	          return iteratee(value);
	        });
	        return { 'criteria': criteria, 'index': ++index, 'value': value };
	      });
	      return baseSortBy(result, function(object, other) {
	        return compareMultiple(object, other, orders);
	      });
	    }
	    function basePick(object, paths) {
	      return basePickBy(object, paths, function(value, path) {
	        return hasIn(object, path);
	      });
	    }
	    function basePickBy(object, paths, predicate) {
	      var index = -1,
	          length = paths.length,
	          result = {};
	      while (++index < length) {
	        var path = paths[index],
	            value = baseGet(object, path);
	        if (predicate(value, path)) {
	          baseSet(result, castPath(path, object), value);
	        }
	      }
	      return result;
	    }
	    function basePropertyDeep(path) {
	      return function(object) {
	        return baseGet(object, path);
	      };
	    }
	    function basePullAll(array, values, iteratee, comparator) {
	      var indexOf = comparator ? baseIndexOfWith : baseIndexOf,
	          index = -1,
	          length = values.length,
	          seen = array;
	      if (array === values) {
	        values = copyArray(values);
	      }
	      if (iteratee) {
	        seen = arrayMap(array, baseUnary(iteratee));
	      }
	      while (++index < length) {
	        var fromIndex = 0,
	            value = values[index],
	            computed = iteratee ? iteratee(value) : value;
	        while ((fromIndex = indexOf(seen, computed, fromIndex, comparator)) > -1) {
	          if (seen !== array) {
	            splice.call(seen, fromIndex, 1);
	          }
	          splice.call(array, fromIndex, 1);
	        }
	      }
	      return array;
	    }
	    function basePullAt(array, indexes) {
	      var length = array ? indexes.length : 0,
	          lastIndex = length - 1;
	      while (length--) {
	        var index = indexes[length];
	        if (length == lastIndex || index !== previous) {
	          var previous = index;
	          if (isIndex(index)) {
	            splice.call(array, index, 1);
	          } else {
	            baseUnset(array, index);
	          }
	        }
	      }
	      return array;
	    }
	    function baseRandom(lower, upper) {
	      return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
	    }
	    function baseRange(start, end, step, fromRight) {
	      var index = -1,
	          length = nativeMax(nativeCeil((end - start) / (step || 1)), 0),
	          result = Array(length);
	      while (length--) {
	        result[fromRight ? length : ++index] = start;
	        start += step;
	      }
	      return result;
	    }
	    function baseRepeat(string, n) {
	      var result = '';
	      if (!string || n < 1 || n > MAX_SAFE_INTEGER) {
	        return result;
	      }
	      do {
	        if (n % 2) {
	          result += string;
	        }
	        n = nativeFloor(n / 2);
	        if (n) {
	          string += string;
	        }
	      } while (n);
	      return result;
	    }
	    function baseRest(func, start) {
	      return setToString(overRest(func, start, identity), func + '');
	    }
	    function baseSample(collection) {
	      return arraySample(values(collection));
	    }
	    function baseSampleSize(collection, n) {
	      var array = values(collection);
	      return shuffleSelf(array, baseClamp(n, 0, array.length));
	    }
	    function baseSet(object, path, value, customizer) {
	      if (!isObject(object)) {
	        return object;
	      }
	      path = castPath(path, object);
	      var index = -1,
	          length = path.length,
	          lastIndex = length - 1,
	          nested = object;
	      while (nested != null && ++index < length) {
	        var key = toKey(path[index]),
	            newValue = value;
	        if (index != lastIndex) {
	          var objValue = nested[key];
	          newValue = customizer ? customizer(objValue, key, nested) : undefined;
	          if (newValue === undefined) {
	            newValue = isObject(objValue)
	              ? objValue
	              : (isIndex(path[index + 1]) ? [] : {});
	          }
	        }
	        assignValue(nested, key, newValue);
	        nested = nested[key];
	      }
	      return object;
	    }
	    var baseSetData = !metaMap ? identity : function(func, data) {
	      metaMap.set(func, data);
	      return func;
	    };
	    var baseSetToString = !defineProperty ? identity : function(func, string) {
	      return defineProperty(func, 'toString', {
	        'configurable': true,
	        'enumerable': false,
	        'value': constant(string),
	        'writable': true
	      });
	    };
	    function baseShuffle(collection) {
	      return shuffleSelf(values(collection));
	    }
	    function baseSlice(array, start, end) {
	      var index = -1,
	          length = array.length;
	      if (start < 0) {
	        start = -start > length ? 0 : (length + start);
	      }
	      end = end > length ? length : end;
	      if (end < 0) {
	        end += length;
	      }
	      length = start > end ? 0 : ((end - start) >>> 0);
	      start >>>= 0;
	      var result = Array(length);
	      while (++index < length) {
	        result[index] = array[index + start];
	      }
	      return result;
	    }
	    function baseSome(collection, predicate) {
	      var result;
	      baseEach(collection, function(value, index, collection) {
	        result = predicate(value, index, collection);
	        return !result;
	      });
	      return !!result;
	    }
	    function baseSortedIndex(array, value, retHighest) {
	      var low = 0,
	          high = array == null ? low : array.length;
	      if (typeof value == 'number' && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
	        while (low < high) {
	          var mid = (low + high) >>> 1,
	              computed = array[mid];
	          if (computed !== null && !isSymbol(computed) &&
	              (retHighest ? (computed <= value) : (computed < value))) {
	            low = mid + 1;
	          } else {
	            high = mid;
	          }
	        }
	        return high;
	      }
	      return baseSortedIndexBy(array, value, identity, retHighest);
	    }
	    function baseSortedIndexBy(array, value, iteratee, retHighest) {
	      value = iteratee(value);
	      var low = 0,
	          high = array == null ? 0 : array.length,
	          valIsNaN = value !== value,
	          valIsNull = value === null,
	          valIsSymbol = isSymbol(value),
	          valIsUndefined = value === undefined;
	      while (low < high) {
	        var mid = nativeFloor((low + high) / 2),
	            computed = iteratee(array[mid]),
	            othIsDefined = computed !== undefined,
	            othIsNull = computed === null,
	            othIsReflexive = computed === computed,
	            othIsSymbol = isSymbol(computed);
	        if (valIsNaN) {
	          var setLow = retHighest || othIsReflexive;
	        } else if (valIsUndefined) {
	          setLow = othIsReflexive && (retHighest || othIsDefined);
	        } else if (valIsNull) {
	          setLow = othIsReflexive && othIsDefined && (retHighest || !othIsNull);
	        } else if (valIsSymbol) {
	          setLow = othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol);
	        } else if (othIsNull || othIsSymbol) {
	          setLow = false;
	        } else {
	          setLow = retHighest ? (computed <= value) : (computed < value);
	        }
	        if (setLow) {
	          low = mid + 1;
	        } else {
	          high = mid;
	        }
	      }
	      return nativeMin(high, MAX_ARRAY_INDEX);
	    }
	    function baseSortedUniq(array, iteratee) {
	      var index = -1,
	          length = array.length,
	          resIndex = 0,
	          result = [];
	      while (++index < length) {
	        var value = array[index],
	            computed = iteratee ? iteratee(value) : value;
	        if (!index || !eq(computed, seen)) {
	          var seen = computed;
	          result[resIndex++] = value === 0 ? 0 : value;
	        }
	      }
	      return result;
	    }
	    function baseToNumber(value) {
	      if (typeof value == 'number') {
	        return value;
	      }
	      if (isSymbol(value)) {
	        return NAN;
	      }
	      return +value;
	    }
	    function baseToString(value) {
	      if (typeof value == 'string') {
	        return value;
	      }
	      if (isArray(value)) {
	        return arrayMap(value, baseToString) + '';
	      }
	      if (isSymbol(value)) {
	        return symbolToString ? symbolToString.call(value) : '';
	      }
	      var result = (value + '');
	      return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	    }
	    function baseUniq(array, iteratee, comparator) {
	      var index = -1,
	          includes = arrayIncludes,
	          length = array.length,
	          isCommon = true,
	          result = [],
	          seen = result;
	      if (comparator) {
	        isCommon = false;
	        includes = arrayIncludesWith;
	      }
	      else if (length >= LARGE_ARRAY_SIZE) {
	        var set = iteratee ? null : createSet(array);
	        if (set) {
	          return setToArray(set);
	        }
	        isCommon = false;
	        includes = cacheHas;
	        seen = new SetCache;
	      }
	      else {
	        seen = iteratee ? [] : result;
	      }
	      outer:
	      while (++index < length) {
	        var value = array[index],
	            computed = iteratee ? iteratee(value) : value;
	        value = (comparator || value !== 0) ? value : 0;
	        if (isCommon && computed === computed) {
	          var seenIndex = seen.length;
	          while (seenIndex--) {
	            if (seen[seenIndex] === computed) {
	              continue outer;
	            }
	          }
	          if (iteratee) {
	            seen.push(computed);
	          }
	          result.push(value);
	        }
	        else if (!includes(seen, computed, comparator)) {
	          if (seen !== result) {
	            seen.push(computed);
	          }
	          result.push(value);
	        }
	      }
	      return result;
	    }
	    function baseUnset(object, path) {
	      path = castPath(path, object);
	      object = parent(object, path);
	      return object == null || delete object[toKey(last(path))];
	    }
	    function baseUpdate(object, path, updater, customizer) {
	      return baseSet(object, path, updater(baseGet(object, path)), customizer);
	    }
	    function baseWhile(array, predicate, isDrop, fromRight) {
	      var length = array.length,
	          index = fromRight ? length : -1;
	      while ((fromRight ? index-- : ++index < length) &&
	        predicate(array[index], index, array)) {}
	      return isDrop
	        ? baseSlice(array, (fromRight ? 0 : index), (fromRight ? index + 1 : length))
	        : baseSlice(array, (fromRight ? index + 1 : 0), (fromRight ? length : index));
	    }
	    function baseWrapperValue(value, actions) {
	      var result = value;
	      if (result instanceof LazyWrapper) {
	        result = result.value();
	      }
	      return arrayReduce(actions, function(result, action) {
	        return action.func.apply(action.thisArg, arrayPush([result], action.args));
	      }, result);
	    }
	    function baseXor(arrays, iteratee, comparator) {
	      var length = arrays.length;
	      if (length < 2) {
	        return length ? baseUniq(arrays[0]) : [];
	      }
	      var index = -1,
	          result = Array(length);
	      while (++index < length) {
	        var array = arrays[index],
	            othIndex = -1;
	        while (++othIndex < length) {
	          if (othIndex != index) {
	            result[index] = baseDifference(result[index] || array, arrays[othIndex], iteratee, comparator);
	          }
	        }
	      }
	      return baseUniq(baseFlatten(result, 1), iteratee, comparator);
	    }
	    function baseZipObject(props, values, assignFunc) {
	      var index = -1,
	          length = props.length,
	          valsLength = values.length,
	          result = {};
	      while (++index < length) {
	        var value = index < valsLength ? values[index] : undefined;
	        assignFunc(result, props[index], value);
	      }
	      return result;
	    }
	    function castArrayLikeObject(value) {
	      return isArrayLikeObject(value) ? value : [];
	    }
	    function castFunction(value) {
	      return typeof value == 'function' ? value : identity;
	    }
	    function castPath(value, object) {
	      if (isArray(value)) {
	        return value;
	      }
	      return isKey(value, object) ? [value] : stringToPath(toString(value));
	    }
	    var castRest = baseRest;
	    function castSlice(array, start, end) {
	      var length = array.length;
	      end = end === undefined ? length : end;
	      return (!start && end >= length) ? array : baseSlice(array, start, end);
	    }
	    var clearTimeout = ctxClearTimeout || function(id) {
	      return root.clearTimeout(id);
	    };
	    function cloneBuffer(buffer, isDeep) {
	      if (isDeep) {
	        return buffer.slice();
	      }
	      var length = buffer.length,
	          result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
	      buffer.copy(result);
	      return result;
	    }
	    function cloneArrayBuffer(arrayBuffer) {
	      var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
	      new Uint8Array(result).set(new Uint8Array(arrayBuffer));
	      return result;
	    }
	    function cloneDataView(dataView, isDeep) {
	      var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
	      return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
	    }
	    function cloneRegExp(regexp) {
	      var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
	      result.lastIndex = regexp.lastIndex;
	      return result;
	    }
	    function cloneSymbol(symbol) {
	      return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
	    }
	    function cloneTypedArray(typedArray, isDeep) {
	      var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
	      return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
	    }
	    function compareAscending(value, other) {
	      if (value !== other) {
	        var valIsDefined = value !== undefined,
	            valIsNull = value === null,
	            valIsReflexive = value === value,
	            valIsSymbol = isSymbol(value);
	        var othIsDefined = other !== undefined,
	            othIsNull = other === null,
	            othIsReflexive = other === other,
	            othIsSymbol = isSymbol(other);
	        if ((!othIsNull && !othIsSymbol && !valIsSymbol && value > other) ||
	            (valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol) ||
	            (valIsNull && othIsDefined && othIsReflexive) ||
	            (!valIsDefined && othIsReflexive) ||
	            !valIsReflexive) {
	          return 1;
	        }
	        if ((!valIsNull && !valIsSymbol && !othIsSymbol && value < other) ||
	            (othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol) ||
	            (othIsNull && valIsDefined && valIsReflexive) ||
	            (!othIsDefined && valIsReflexive) ||
	            !othIsReflexive) {
	          return -1;
	        }
	      }
	      return 0;
	    }
	    function compareMultiple(object, other, orders) {
	      var index = -1,
	          objCriteria = object.criteria,
	          othCriteria = other.criteria,
	          length = objCriteria.length,
	          ordersLength = orders.length;
	      while (++index < length) {
	        var result = compareAscending(objCriteria[index], othCriteria[index]);
	        if (result) {
	          if (index >= ordersLength) {
	            return result;
	          }
	          var order = orders[index];
	          return result * (order == 'desc' ? -1 : 1);
	        }
	      }
	      return object.index - other.index;
	    }
	    function composeArgs(args, partials, holders, isCurried) {
	      var argsIndex = -1,
	          argsLength = args.length,
	          holdersLength = holders.length,
	          leftIndex = -1,
	          leftLength = partials.length,
	          rangeLength = nativeMax(argsLength - holdersLength, 0),
	          result = Array(leftLength + rangeLength),
	          isUncurried = !isCurried;
	      while (++leftIndex < leftLength) {
	        result[leftIndex] = partials[leftIndex];
	      }
	      while (++argsIndex < holdersLength) {
	        if (isUncurried || argsIndex < argsLength) {
	          result[holders[argsIndex]] = args[argsIndex];
	        }
	      }
	      while (rangeLength--) {
	        result[leftIndex++] = args[argsIndex++];
	      }
	      return result;
	    }
	    function composeArgsRight(args, partials, holders, isCurried) {
	      var argsIndex = -1,
	          argsLength = args.length,
	          holdersIndex = -1,
	          holdersLength = holders.length,
	          rightIndex = -1,
	          rightLength = partials.length,
	          rangeLength = nativeMax(argsLength - holdersLength, 0),
	          result = Array(rangeLength + rightLength),
	          isUncurried = !isCurried;
	      while (++argsIndex < rangeLength) {
	        result[argsIndex] = args[argsIndex];
	      }
	      var offset = argsIndex;
	      while (++rightIndex < rightLength) {
	        result[offset + rightIndex] = partials[rightIndex];
	      }
	      while (++holdersIndex < holdersLength) {
	        if (isUncurried || argsIndex < argsLength) {
	          result[offset + holders[holdersIndex]] = args[argsIndex++];
	        }
	      }
	      return result;
	    }
	    function copyArray(source, array) {
	      var index = -1,
	          length = source.length;
	      array || (array = Array(length));
	      while (++index < length) {
	        array[index] = source[index];
	      }
	      return array;
	    }
	    function copyObject(source, props, object, customizer) {
	      var isNew = !object;
	      object || (object = {});
	      var index = -1,
	          length = props.length;
	      while (++index < length) {
	        var key = props[index];
	        var newValue = customizer
	          ? customizer(object[key], source[key], key, object, source)
	          : undefined;
	        if (newValue === undefined) {
	          newValue = source[key];
	        }
	        if (isNew) {
	          baseAssignValue(object, key, newValue);
	        } else {
	          assignValue(object, key, newValue);
	        }
	      }
	      return object;
	    }
	    function copySymbols(source, object) {
	      return copyObject(source, getSymbols(source), object);
	    }
	    function copySymbolsIn(source, object) {
	      return copyObject(source, getSymbolsIn(source), object);
	    }
	    function createAggregator(setter, initializer) {
	      return function(collection, iteratee) {
	        var func = isArray(collection) ? arrayAggregator : baseAggregator,
	            accumulator = initializer ? initializer() : {};
	        return func(collection, setter, getIteratee(iteratee, 2), accumulator);
	      };
	    }
	    function createAssigner(assigner) {
	      return baseRest(function(object, sources) {
	        var index = -1,
	            length = sources.length,
	            customizer = length > 1 ? sources[length - 1] : undefined,
	            guard = length > 2 ? sources[2] : undefined;
	        customizer = (assigner.length > 3 && typeof customizer == 'function')
	          ? (length--, customizer)
	          : undefined;
	        if (guard && isIterateeCall(sources[0], sources[1], guard)) {
	          customizer = length < 3 ? undefined : customizer;
	          length = 1;
	        }
	        object = Object(object);
	        while (++index < length) {
	          var source = sources[index];
	          if (source) {
	            assigner(object, source, index, customizer);
	          }
	        }
	        return object;
	      });
	    }
	    function createBaseEach(eachFunc, fromRight) {
	      return function(collection, iteratee) {
	        if (collection == null) {
	          return collection;
	        }
	        if (!isArrayLike(collection)) {
	          return eachFunc(collection, iteratee);
	        }
	        var length = collection.length,
	            index = fromRight ? length : -1,
	            iterable = Object(collection);
	        while ((fromRight ? index-- : ++index < length)) {
	          if (iteratee(iterable[index], index, iterable) === false) {
	            break;
	          }
	        }
	        return collection;
	      };
	    }
	    function createBaseFor(fromRight) {
	      return function(object, iteratee, keysFunc) {
	        var index = -1,
	            iterable = Object(object),
	            props = keysFunc(object),
	            length = props.length;
	        while (length--) {
	          var key = props[fromRight ? length : ++index];
	          if (iteratee(iterable[key], key, iterable) === false) {
	            break;
	          }
	        }
	        return object;
	      };
	    }
	    function createBind(func, bitmask, thisArg) {
	      var isBind = bitmask & WRAP_BIND_FLAG,
	          Ctor = createCtor(func);
	      function wrapper() {
	        var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
	        return fn.apply(isBind ? thisArg : this, arguments);
	      }
	      return wrapper;
	    }
	    function createCaseFirst(methodName) {
	      return function(string) {
	        string = toString(string);
	        var strSymbols = hasUnicode(string)
	          ? stringToArray(string)
	          : undefined;
	        var chr = strSymbols
	          ? strSymbols[0]
	          : string.charAt(0);
	        var trailing = strSymbols
	          ? castSlice(strSymbols, 1).join('')
	          : string.slice(1);
	        return chr[methodName]() + trailing;
	      };
	    }
	    function createCompounder(callback) {
	      return function(string) {
	        return arrayReduce(words(deburr(string).replace(reApos, '')), callback, '');
	      };
	    }
	    function createCtor(Ctor) {
	      return function() {
	        var args = arguments;
	        switch (args.length) {
	          case 0: return new Ctor;
	          case 1: return new Ctor(args[0]);
	          case 2: return new Ctor(args[0], args[1]);
	          case 3: return new Ctor(args[0], args[1], args[2]);
	          case 4: return new Ctor(args[0], args[1], args[2], args[3]);
	          case 5: return new Ctor(args[0], args[1], args[2], args[3], args[4]);
	          case 6: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
	          case 7: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
	        }
	        var thisBinding = baseCreate(Ctor.prototype),
	            result = Ctor.apply(thisBinding, args);
	        return isObject(result) ? result : thisBinding;
	      };
	    }
	    function createCurry(func, bitmask, arity) {
	      var Ctor = createCtor(func);
	      function wrapper() {
	        var length = arguments.length,
	            args = Array(length),
	            index = length,
	            placeholder = getHolder(wrapper);
	        while (index--) {
	          args[index] = arguments[index];
	        }
	        var holders = (length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder)
	          ? []
	          : replaceHolders(args, placeholder);
	        length -= holders.length;
	        if (length < arity) {
	          return createRecurry(
	            func, bitmask, createHybrid, wrapper.placeholder, undefined,
	            args, holders, undefined, undefined, arity - length);
	        }
	        var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
	        return apply(fn, this, args);
	      }
	      return wrapper;
	    }
	    function createFind(findIndexFunc) {
	      return function(collection, predicate, fromIndex) {
	        var iterable = Object(collection);
	        if (!isArrayLike(collection)) {
	          var iteratee = getIteratee(predicate, 3);
	          collection = keys(collection);
	          predicate = function(key) { return iteratee(iterable[key], key, iterable); };
	        }
	        var index = findIndexFunc(collection, predicate, fromIndex);
	        return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
	      };
	    }
	    function createFlow(fromRight) {
	      return flatRest(function(funcs) {
	        var length = funcs.length,
	            index = length,
	            prereq = LodashWrapper.prototype.thru;
	        if (fromRight) {
	          funcs.reverse();
	        }
	        while (index--) {
	          var func = funcs[index];
	          if (typeof func != 'function') {
	            throw new TypeError(FUNC_ERROR_TEXT);
	          }
	          if (prereq && !wrapper && getFuncName(func) == 'wrapper') {
	            var wrapper = new LodashWrapper([], true);
	          }
	        }
	        index = wrapper ? index : length;
	        while (++index < length) {
	          func = funcs[index];
	          var funcName = getFuncName(func),
	              data = funcName == 'wrapper' ? getData(func) : undefined;
	          if (data && isLaziable(data[0]) &&
	                data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) &&
	                !data[4].length && data[9] == 1
	              ) {
	            wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
	          } else {
	            wrapper = (func.length == 1 && isLaziable(func))
	              ? wrapper[funcName]()
	              : wrapper.thru(func);
	          }
	        }
	        return function() {
	          var args = arguments,
	              value = args[0];
	          if (wrapper && args.length == 1 && isArray(value)) {
	            return wrapper.plant(value).value();
	          }
	          var index = 0,
	              result = length ? funcs[index].apply(this, args) : value;
	          while (++index < length) {
	            result = funcs[index].call(this, result);
	          }
	          return result;
	        };
	      });
	    }
	    function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
	      var isAry = bitmask & WRAP_ARY_FLAG,
	          isBind = bitmask & WRAP_BIND_FLAG,
	          isBindKey = bitmask & WRAP_BIND_KEY_FLAG,
	          isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG),
	          isFlip = bitmask & WRAP_FLIP_FLAG,
	          Ctor = isBindKey ? undefined : createCtor(func);
	      function wrapper() {
	        var length = arguments.length,
	            args = Array(length),
	            index = length;
	        while (index--) {
	          args[index] = arguments[index];
	        }
	        if (isCurried) {
	          var placeholder = getHolder(wrapper),
	              holdersCount = countHolders(args, placeholder);
	        }
	        if (partials) {
	          args = composeArgs(args, partials, holders, isCurried);
	        }
	        if (partialsRight) {
	          args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
	        }
	        length -= holdersCount;
	        if (isCurried && length < arity) {
	          var newHolders = replaceHolders(args, placeholder);
	          return createRecurry(
	            func, bitmask, createHybrid, wrapper.placeholder, thisArg,
	            args, newHolders, argPos, ary, arity - length
	          );
	        }
	        var thisBinding = isBind ? thisArg : this,
	            fn = isBindKey ? thisBinding[func] : func;
	        length = args.length;
	        if (argPos) {
	          args = reorder(args, argPos);
	        } else if (isFlip && length > 1) {
	          args.reverse();
	        }
	        if (isAry && ary < length) {
	          args.length = ary;
	        }
	        if (this && this !== root && this instanceof wrapper) {
	          fn = Ctor || createCtor(fn);
	        }
	        return fn.apply(thisBinding, args);
	      }
	      return wrapper;
	    }
	    function createInverter(setter, toIteratee) {
	      return function(object, iteratee) {
	        return baseInverter(object, setter, toIteratee(iteratee), {});
	      };
	    }
	    function createMathOperation(operator, defaultValue) {
	      return function(value, other) {
	        var result;
	        if (value === undefined && other === undefined) {
	          return defaultValue;
	        }
	        if (value !== undefined) {
	          result = value;
	        }
	        if (other !== undefined) {
	          if (result === undefined) {
	            return other;
	          }
	          if (typeof value == 'string' || typeof other == 'string') {
	            value = baseToString(value);
	            other = baseToString(other);
	          } else {
	            value = baseToNumber(value);
	            other = baseToNumber(other);
	          }
	          result = operator(value, other);
	        }
	        return result;
	      };
	    }
	    function createOver(arrayFunc) {
	      return flatRest(function(iteratees) {
	        iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
	        return baseRest(function(args) {
	          var thisArg = this;
	          return arrayFunc(iteratees, function(iteratee) {
	            return apply(iteratee, thisArg, args);
	          });
	        });
	      });
	    }
	    function createPadding(length, chars) {
	      chars = chars === undefined ? ' ' : baseToString(chars);
	      var charsLength = chars.length;
	      if (charsLength < 2) {
	        return charsLength ? baseRepeat(chars, length) : chars;
	      }
	      var result = baseRepeat(chars, nativeCeil(length / stringSize(chars)));
	      return hasUnicode(chars)
	        ? castSlice(stringToArray(result), 0, length).join('')
	        : result.slice(0, length);
	    }
	    function createPartial(func, bitmask, thisArg, partials) {
	      var isBind = bitmask & WRAP_BIND_FLAG,
	          Ctor = createCtor(func);
	      function wrapper() {
	        var argsIndex = -1,
	            argsLength = arguments.length,
	            leftIndex = -1,
	            leftLength = partials.length,
	            args = Array(leftLength + argsLength),
	            fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
	        while (++leftIndex < leftLength) {
	          args[leftIndex] = partials[leftIndex];
	        }
	        while (argsLength--) {
	          args[leftIndex++] = arguments[++argsIndex];
	        }
	        return apply(fn, isBind ? thisArg : this, args);
	      }
	      return wrapper;
	    }
	    function createRange(fromRight) {
	      return function(start, end, step) {
	        if (step && typeof step != 'number' && isIterateeCall(start, end, step)) {
	          end = step = undefined;
	        }
	        start = toFinite(start);
	        if (end === undefined) {
	          end = start;
	          start = 0;
	        } else {
	          end = toFinite(end);
	        }
	        step = step === undefined ? (start < end ? 1 : -1) : toFinite(step);
	        return baseRange(start, end, step, fromRight);
	      };
	    }
	    function createRelationalOperation(operator) {
	      return function(value, other) {
	        if (!(typeof value == 'string' && typeof other == 'string')) {
	          value = toNumber(value);
	          other = toNumber(other);
	        }
	        return operator(value, other);
	      };
	    }
	    function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary, arity) {
	      var isCurry = bitmask & WRAP_CURRY_FLAG,
	          newHolders = isCurry ? holders : undefined,
	          newHoldersRight = isCurry ? undefined : holders,
	          newPartials = isCurry ? partials : undefined,
	          newPartialsRight = isCurry ? undefined : partials;
	      bitmask |= (isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG);
	      bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);
	      if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
	        bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
	      }
	      var newData = [
	        func, bitmask, thisArg, newPartials, newHolders, newPartialsRight,
	        newHoldersRight, argPos, ary, arity
	      ];
	      var result = wrapFunc.apply(undefined, newData);
	      if (isLaziable(func)) {
	        setData(result, newData);
	      }
	      result.placeholder = placeholder;
	      return setWrapToString(result, func, bitmask);
	    }
	    function createRound(methodName) {
	      var func = Math[methodName];
	      return function(number, precision) {
	        number = toNumber(number);
	        precision = precision == null ? 0 : nativeMin(toInteger(precision), 292);
	        if (precision) {
	          var pair = (toString(number) + 'e').split('e'),
	              value = func(pair[0] + 'e' + (+pair[1] + precision));
	          pair = (toString(value) + 'e').split('e');
	          return +(pair[0] + 'e' + (+pair[1] - precision));
	        }
	        return func(number);
	      };
	    }
	    var createSet = !(Set && (1 / setToArray(new Set([,-0]))[1]) == INFINITY) ? noop : function(values) {
	      return new Set(values);
	    };
	    function createToPairs(keysFunc) {
	      return function(object) {
	        var tag = getTag(object);
	        if (tag == mapTag) {
	          return mapToArray(object);
	        }
	        if (tag == setTag) {
	          return setToPairs(object);
	        }
	        return baseToPairs(object, keysFunc(object));
	      };
	    }
	    function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
	      var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
	      if (!isBindKey && typeof func != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      var length = partials ? partials.length : 0;
	      if (!length) {
	        bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
	        partials = holders = undefined;
	      }
	      ary = ary === undefined ? ary : nativeMax(toInteger(ary), 0);
	      arity = arity === undefined ? arity : toInteger(arity);
	      length -= holders ? holders.length : 0;
	      if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
	        var partialsRight = partials,
	            holdersRight = holders;
	        partials = holders = undefined;
	      }
	      var data = isBindKey ? undefined : getData(func);
	      var newData = [
	        func, bitmask, thisArg, partials, holders, partialsRight, holdersRight,
	        argPos, ary, arity
	      ];
	      if (data) {
	        mergeData(newData, data);
	      }
	      func = newData[0];
	      bitmask = newData[1];
	      thisArg = newData[2];
	      partials = newData[3];
	      holders = newData[4];
	      arity = newData[9] = newData[9] === undefined
	        ? (isBindKey ? 0 : func.length)
	        : nativeMax(newData[9] - length, 0);
	      if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
	        bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
	      }
	      if (!bitmask || bitmask == WRAP_BIND_FLAG) {
	        var result = createBind(func, bitmask, thisArg);
	      } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
	        result = createCurry(func, bitmask, arity);
	      } else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
	        result = createPartial(func, bitmask, thisArg, partials);
	      } else {
	        result = createHybrid.apply(undefined, newData);
	      }
	      var setter = data ? baseSetData : setData;
	      return setWrapToString(setter(result, newData), func, bitmask);
	    }
	    function customDefaultsAssignIn(objValue, srcValue, key, object) {
	      if (objValue === undefined ||
	          (eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key))) {
	        return srcValue;
	      }
	      return objValue;
	    }
	    function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
	      if (isObject(objValue) && isObject(srcValue)) {
	        stack.set(srcValue, objValue);
	        baseMerge(objValue, srcValue, undefined, customDefaultsMerge, stack);
	        stack['delete'](srcValue);
	      }
	      return objValue;
	    }
	    function customOmitClone(value) {
	      return isPlainObject(value) ? undefined : value;
	    }
	    function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
	      var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
	          arrLength = array.length,
	          othLength = other.length;
	      if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
	        return false;
	      }
	      var stacked = stack.get(array);
	      if (stacked && stack.get(other)) {
	        return stacked == other;
	      }
	      var index = -1,
	          result = true,
	          seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;
	      stack.set(array, other);
	      stack.set(other, array);
	      while (++index < arrLength) {
	        var arrValue = array[index],
	            othValue = other[index];
	        if (customizer) {
	          var compared = isPartial
	            ? customizer(othValue, arrValue, index, other, array, stack)
	            : customizer(arrValue, othValue, index, array, other, stack);
	        }
	        if (compared !== undefined) {
	          if (compared) {
	            continue;
	          }
	          result = false;
	          break;
	        }
	        if (seen) {
	          if (!arraySome(other, function(othValue, othIndex) {
	                if (!cacheHas(seen, othIndex) &&
	                    (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
	                  return seen.push(othIndex);
	                }
	              })) {
	            result = false;
	            break;
	          }
	        } else if (!(
	              arrValue === othValue ||
	                equalFunc(arrValue, othValue, bitmask, customizer, stack)
	            )) {
	          result = false;
	          break;
	        }
	      }
	      stack['delete'](array);
	      stack['delete'](other);
	      return result;
	    }
	    function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
	      switch (tag) {
	        case dataViewTag:
	          if ((object.byteLength != other.byteLength) ||
	              (object.byteOffset != other.byteOffset)) {
	            return false;
	          }
	          object = object.buffer;
	          other = other.buffer;
	        case arrayBufferTag:
	          if ((object.byteLength != other.byteLength) ||
	              !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
	            return false;
	          }
	          return true;
	        case boolTag:
	        case dateTag:
	        case numberTag:
	          return eq(+object, +other);
	        case errorTag:
	          return object.name == other.name && object.message == other.message;
	        case regexpTag:
	        case stringTag:
	          return object == (other + '');
	        case mapTag:
	          var convert = mapToArray;
	        case setTag:
	          var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
	          convert || (convert = setToArray);
	          if (object.size != other.size && !isPartial) {
	            return false;
	          }
	          var stacked = stack.get(object);
	          if (stacked) {
	            return stacked == other;
	          }
	          bitmask |= COMPARE_UNORDERED_FLAG;
	          stack.set(object, other);
	          var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
	          stack['delete'](object);
	          return result;
	        case symbolTag:
	          if (symbolValueOf) {
	            return symbolValueOf.call(object) == symbolValueOf.call(other);
	          }
	      }
	      return false;
	    }
	    function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
	      var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
	          objProps = getAllKeys(object),
	          objLength = objProps.length,
	          othProps = getAllKeys(other),
	          othLength = othProps.length;
	      if (objLength != othLength && !isPartial) {
	        return false;
	      }
	      var index = objLength;
	      while (index--) {
	        var key = objProps[index];
	        if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
	          return false;
	        }
	      }
	      var stacked = stack.get(object);
	      if (stacked && stack.get(other)) {
	        return stacked == other;
	      }
	      var result = true;
	      stack.set(object, other);
	      stack.set(other, object);
	      var skipCtor = isPartial;
	      while (++index < objLength) {
	        key = objProps[index];
	        var objValue = object[key],
	            othValue = other[key];
	        if (customizer) {
	          var compared = isPartial
	            ? customizer(othValue, objValue, key, other, object, stack)
	            : customizer(objValue, othValue, key, object, other, stack);
	        }
	        if (!(compared === undefined
	              ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
	              : compared
	            )) {
	          result = false;
	          break;
	        }
	        skipCtor || (skipCtor = key == 'constructor');
	      }
	      if (result && !skipCtor) {
	        var objCtor = object.constructor,
	            othCtor = other.constructor;
	        if (objCtor != othCtor &&
	            ('constructor' in object && 'constructor' in other) &&
	            !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
	              typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	          result = false;
	        }
	      }
	      stack['delete'](object);
	      stack['delete'](other);
	      return result;
	    }
	    function flatRest(func) {
	      return setToString(overRest(func, undefined, flatten), func + '');
	    }
	    function getAllKeys(object) {
	      return baseGetAllKeys(object, keys, getSymbols);
	    }
	    function getAllKeysIn(object) {
	      return baseGetAllKeys(object, keysIn, getSymbolsIn);
	    }
	    var getData = !metaMap ? noop : function(func) {
	      return metaMap.get(func);
	    };
	    function getFuncName(func) {
	      var result = (func.name + ''),
	          array = realNames[result],
	          length = hasOwnProperty.call(realNames, result) ? array.length : 0;
	      while (length--) {
	        var data = array[length],
	            otherFunc = data.func;
	        if (otherFunc == null || otherFunc == func) {
	          return data.name;
	        }
	      }
	      return result;
	    }
	    function getHolder(func) {
	      var object = hasOwnProperty.call(lodash, 'placeholder') ? lodash : func;
	      return object.placeholder;
	    }
	    function getIteratee() {
	      var result = lodash.iteratee || iteratee;
	      result = result === iteratee ? baseIteratee : result;
	      return arguments.length ? result(arguments[0], arguments[1]) : result;
	    }
	    function getMapData(map, key) {
	      var data = map.__data__;
	      return isKeyable(key)
	        ? data[typeof key == 'string' ? 'string' : 'hash']
	        : data.map;
	    }
	    function getMatchData(object) {
	      var result = keys(object),
	          length = result.length;
	      while (length--) {
	        var key = result[length],
	            value = object[key];
	        result[length] = [key, value, isStrictComparable(value)];
	      }
	      return result;
	    }
	    function getNative(object, key) {
	      var value = getValue(object, key);
	      return baseIsNative(value) ? value : undefined;
	    }
	    function getRawTag(value) {
	      var isOwn = hasOwnProperty.call(value, symToStringTag),
	          tag = value[symToStringTag];
	      try {
	        value[symToStringTag] = undefined;
	      } catch (e) {}
	      var result = nativeObjectToString.call(value);
	      {
	        if (isOwn) {
	          value[symToStringTag] = tag;
	        } else {
	          delete value[symToStringTag];
	        }
	      }
	      return result;
	    }
	    var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
	      if (object == null) {
	        return [];
	      }
	      object = Object(object);
	      return arrayFilter(nativeGetSymbols(object), function(symbol) {
	        return propertyIsEnumerable.call(object, symbol);
	      });
	    };
	    var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
	      var result = [];
	      while (object) {
	        arrayPush(result, getSymbols(object));
	        object = getPrototype(object);
	      }
	      return result;
	    };
	    var getTag = baseGetTag;
	    if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
	        (Map && getTag(new Map) != mapTag) ||
	        (Promise && getTag(Promise.resolve()) != promiseTag) ||
	        (Set && getTag(new Set) != setTag) ||
	        (WeakMap && getTag(new WeakMap) != weakMapTag)) {
	      getTag = function(value) {
	        var result = baseGetTag(value),
	            Ctor = result == objectTag ? value.constructor : undefined,
	            ctorString = Ctor ? toSource(Ctor) : '';
	        if (ctorString) {
	          switch (ctorString) {
	            case dataViewCtorString: return dataViewTag;
	            case mapCtorString: return mapTag;
	            case promiseCtorString: return promiseTag;
	            case setCtorString: return setTag;
	            case weakMapCtorString: return weakMapTag;
	          }
	        }
	        return result;
	      };
	    }
	    function getView(start, end, transforms) {
	      var index = -1,
	          length = transforms.length;
	      while (++index < length) {
	        var data = transforms[index],
	            size = data.size;
	        switch (data.type) {
	          case 'drop':      start += size; break;
	          case 'dropRight': end -= size; break;
	          case 'take':      end = nativeMin(end, start + size); break;
	          case 'takeRight': start = nativeMax(start, end - size); break;
	        }
	      }
	      return { 'start': start, 'end': end };
	    }
	    function getWrapDetails(source) {
	      var match = source.match(reWrapDetails);
	      return match ? match[1].split(reSplitDetails) : [];
	    }
	    function hasPath(object, path, hasFunc) {
	      path = castPath(path, object);
	      var index = -1,
	          length = path.length,
	          result = false;
	      while (++index < length) {
	        var key = toKey(path[index]);
	        if (!(result = object != null && hasFunc(object, key))) {
	          break;
	        }
	        object = object[key];
	      }
	      if (result || ++index != length) {
	        return result;
	      }
	      length = object == null ? 0 : object.length;
	      return !!length && isLength(length) && isIndex(key, length) &&
	        (isArray(object) || isArguments(object));
	    }
	    function initCloneArray(array) {
	      var length = array.length,
	          result = new array.constructor(length);
	      if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
	        result.index = array.index;
	        result.input = array.input;
	      }
	      return result;
	    }
	    function initCloneObject(object) {
	      return (typeof object.constructor == 'function' && !isPrototype(object))
	        ? baseCreate(getPrototype(object))
	        : {};
	    }
	    function initCloneByTag(object, tag, isDeep) {
	      var Ctor = object.constructor;
	      switch (tag) {
	        case arrayBufferTag:
	          return cloneArrayBuffer(object);
	        case boolTag:
	        case dateTag:
	          return new Ctor(+object);
	        case dataViewTag:
	          return cloneDataView(object, isDeep);
	        case float32Tag: case float64Tag:
	        case int8Tag: case int16Tag: case int32Tag:
	        case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
	          return cloneTypedArray(object, isDeep);
	        case mapTag:
	          return new Ctor;
	        case numberTag:
	        case stringTag:
	          return new Ctor(object);
	        case regexpTag:
	          return cloneRegExp(object);
	        case setTag:
	          return new Ctor;
	        case symbolTag:
	          return cloneSymbol(object);
	      }
	    }
	    function insertWrapDetails(source, details) {
	      var length = details.length;
	      if (!length) {
	        return source;
	      }
	      var lastIndex = length - 1;
	      details[lastIndex] = (length > 1 ? '& ' : '') + details[lastIndex];
	      details = details.join(length > 2 ? ', ' : ' ');
	      return source.replace(reWrapComment, '{\n/* [wrapped with ' + details + '] */\n');
	    }
	    function isFlattenable(value) {
	      return isArray(value) || isArguments(value) ||
	        !!(spreadableSymbol && value && value[spreadableSymbol]);
	    }
	    function isIndex(value, length) {
	      var type = typeof value;
	      length = length == null ? MAX_SAFE_INTEGER : length;
	      return !!length &&
	        (type == 'number' ||
	          (type != 'symbol' && reIsUint.test(value))) &&
	            (value > -1 && value % 1 == 0 && value < length);
	    }
	    function isIterateeCall(value, index, object) {
	      if (!isObject(object)) {
	        return false;
	      }
	      var type = typeof index;
	      if (type == 'number'
	            ? (isArrayLike(object) && isIndex(index, object.length))
	            : (type == 'string' && index in object)
	          ) {
	        return eq(object[index], value);
	      }
	      return false;
	    }
	    function isKey(value, object) {
	      if (isArray(value)) {
	        return false;
	      }
	      var type = typeof value;
	      if (type == 'number' || type == 'symbol' || type == 'boolean' ||
	          value == null || isSymbol(value)) {
	        return true;
	      }
	      return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
	        (object != null && value in Object(object));
	    }
	    function isKeyable(value) {
	      var type = typeof value;
	      return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	        ? (value !== '__proto__')
	        : (value === null);
	    }
	    function isLaziable(func) {
	      var funcName = getFuncName(func),
	          other = lodash[funcName];
	      if (typeof other != 'function' || !(funcName in LazyWrapper.prototype)) {
	        return false;
	      }
	      if (func === other) {
	        return true;
	      }
	      var data = getData(other);
	      return !!data && func === data[0];
	    }
	    function isMasked(func) {
	      return !!maskSrcKey && (maskSrcKey in func);
	    }
	    var isMaskable = coreJsData ? isFunction : stubFalse;
	    function isPrototype(value) {
	      var Ctor = value && value.constructor,
	          proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;
	      return value === proto;
	    }
	    function isStrictComparable(value) {
	      return value === value && !isObject(value);
	    }
	    function matchesStrictComparable(key, srcValue) {
	      return function(object) {
	        if (object == null) {
	          return false;
	        }
	        return object[key] === srcValue &&
	          (srcValue !== undefined || (key in Object(object)));
	      };
	    }
	    function memoizeCapped(func) {
	      var result = memoize(func, function(key) {
	        if (cache.size === MAX_MEMOIZE_SIZE) {
	          cache.clear();
	        }
	        return key;
	      });
	      var cache = result.cache;
	      return result;
	    }
	    function mergeData(data, source) {
	      var bitmask = data[1],
	          srcBitmask = source[1],
	          newBitmask = bitmask | srcBitmask,
	          isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);
	      var isCombo =
	        ((srcBitmask == WRAP_ARY_FLAG) && (bitmask == WRAP_CURRY_FLAG)) ||
	        ((srcBitmask == WRAP_ARY_FLAG) && (bitmask == WRAP_REARG_FLAG) && (data[7].length <= source[8])) ||
	        ((srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG)) && (source[7].length <= source[8]) && (bitmask == WRAP_CURRY_FLAG));
	      if (!(isCommon || isCombo)) {
	        return data;
	      }
	      if (srcBitmask & WRAP_BIND_FLAG) {
	        data[2] = source[2];
	        newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
	      }
	      var value = source[3];
	      if (value) {
	        var partials = data[3];
	        data[3] = partials ? composeArgs(partials, value, source[4]) : value;
	        data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
	      }
	      value = source[5];
	      if (value) {
	        partials = data[5];
	        data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
	        data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
	      }
	      value = source[7];
	      if (value) {
	        data[7] = value;
	      }
	      if (srcBitmask & WRAP_ARY_FLAG) {
	        data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
	      }
	      if (data[9] == null) {
	        data[9] = source[9];
	      }
	      data[0] = source[0];
	      data[1] = newBitmask;
	      return data;
	    }
	    function nativeKeysIn(object) {
	      var result = [];
	      if (object != null) {
	        for (var key in Object(object)) {
	          result.push(key);
	        }
	      }
	      return result;
	    }
	    function objectToString(value) {
	      return nativeObjectToString.call(value);
	    }
	    function overRest(func, start, transform) {
	      start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
	      return function() {
	        var args = arguments,
	            index = -1,
	            length = nativeMax(args.length - start, 0),
	            array = Array(length);
	        while (++index < length) {
	          array[index] = args[start + index];
	        }
	        index = -1;
	        var otherArgs = Array(start + 1);
	        while (++index < start) {
	          otherArgs[index] = args[index];
	        }
	        otherArgs[start] = transform(array);
	        return apply(func, this, otherArgs);
	      };
	    }
	    function parent(object, path) {
	      return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
	    }
	    function reorder(array, indexes) {
	      var arrLength = array.length,
	          length = nativeMin(indexes.length, arrLength),
	          oldArray = copyArray(array);
	      while (length--) {
	        var index = indexes[length];
	        array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined;
	      }
	      return array;
	    }
	    var setData = shortOut(baseSetData);
	    var setTimeout = ctxSetTimeout || function(func, wait) {
	      return root.setTimeout(func, wait);
	    };
	    var setToString = shortOut(baseSetToString);
	    function setWrapToString(wrapper, reference, bitmask) {
	      var source = (reference + '');
	      return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
	    }
	    function shortOut(func) {
	      var count = 0,
	          lastCalled = 0;
	      return function() {
	        var stamp = nativeNow(),
	            remaining = HOT_SPAN - (stamp - lastCalled);
	        lastCalled = stamp;
	        if (remaining > 0) {
	          if (++count >= HOT_COUNT) {
	            return arguments[0];
	          }
	        } else {
	          count = 0;
	        }
	        return func.apply(undefined, arguments);
	      };
	    }
	    function shuffleSelf(array, size) {
	      var index = -1,
	          length = array.length,
	          lastIndex = length - 1;
	      size = size === undefined ? length : size;
	      while (++index < size) {
	        var rand = baseRandom(index, lastIndex),
	            value = array[rand];
	        array[rand] = array[index];
	        array[index] = value;
	      }
	      array.length = size;
	      return array;
	    }
	    var stringToPath = memoizeCapped(function(string) {
	      var result = [];
	      if (string.charCodeAt(0) === 46        ) {
	        result.push('');
	      }
	      string.replace(rePropName, function(match, number, quote, subString) {
	        result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
	      });
	      return result;
	    });
	    function toKey(value) {
	      if (typeof value == 'string' || isSymbol(value)) {
	        return value;
	      }
	      var result = (value + '');
	      return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	    }
	    function toSource(func) {
	      if (func != null) {
	        try {
	          return funcToString.call(func);
	        } catch (e) {}
	        try {
	          return (func + '');
	        } catch (e) {}
	      }
	      return '';
	    }
	    function updateWrapDetails(details, bitmask) {
	      arrayEach(wrapFlags, function(pair) {
	        var value = '_.' + pair[0];
	        if ((bitmask & pair[1]) && !arrayIncludes(details, value)) {
	          details.push(value);
	        }
	      });
	      return details.sort();
	    }
	    function wrapperClone(wrapper) {
	      if (wrapper instanceof LazyWrapper) {
	        return wrapper.clone();
	      }
	      var result = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
	      result.__actions__ = copyArray(wrapper.__actions__);
	      result.__index__  = wrapper.__index__;
	      result.__values__ = wrapper.__values__;
	      return result;
	    }
	    function chunk(array, size, guard) {
	      if ((guard ? isIterateeCall(array, size, guard) : size === undefined)) {
	        size = 1;
	      } else {
	        size = nativeMax(toInteger(size), 0);
	      }
	      var length = array == null ? 0 : array.length;
	      if (!length || size < 1) {
	        return [];
	      }
	      var index = 0,
	          resIndex = 0,
	          result = Array(nativeCeil(length / size));
	      while (index < length) {
	        result[resIndex++] = baseSlice(array, index, (index += size));
	      }
	      return result;
	    }
	    function compact(array) {
	      var index = -1,
	          length = array == null ? 0 : array.length,
	          resIndex = 0,
	          result = [];
	      while (++index < length) {
	        var value = array[index];
	        if (value) {
	          result[resIndex++] = value;
	        }
	      }
	      return result;
	    }
	    function concat() {
	      var length = arguments.length;
	      if (!length) {
	        return [];
	      }
	      var args = Array(length - 1),
	          array = arguments[0],
	          index = length;
	      while (index--) {
	        args[index - 1] = arguments[index];
	      }
	      return arrayPush(isArray(array) ? copyArray(array) : [array], baseFlatten(args, 1));
	    }
	    var difference = baseRest(function(array, values) {
	      return isArrayLikeObject(array)
	        ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true))
	        : [];
	    });
	    var differenceBy = baseRest(function(array, values) {
	      var iteratee = last(values);
	      if (isArrayLikeObject(iteratee)) {
	        iteratee = undefined;
	      }
	      return isArrayLikeObject(array)
	        ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), getIteratee(iteratee, 2))
	        : [];
	    });
	    var differenceWith = baseRest(function(array, values) {
	      var comparator = last(values);
	      if (isArrayLikeObject(comparator)) {
	        comparator = undefined;
	      }
	      return isArrayLikeObject(array)
	        ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), undefined, comparator)
	        : [];
	    });
	    function drop(array, n, guard) {
	      var length = array == null ? 0 : array.length;
	      if (!length) {
	        return [];
	      }
	      n = (guard || n === undefined) ? 1 : toInteger(n);
	      return baseSlice(array, n < 0 ? 0 : n, length);
	    }
	    function dropRight(array, n, guard) {
	      var length = array == null ? 0 : array.length;
	      if (!length) {
	        return [];
	      }
	      n = (guard || n === undefined) ? 1 : toInteger(n);
	      n = length - n;
	      return baseSlice(array, 0, n < 0 ? 0 : n);
	    }
	    function dropRightWhile(array, predicate) {
	      return (array && array.length)
	        ? baseWhile(array, getIteratee(predicate, 3), true, true)
	        : [];
	    }
	    function dropWhile(array, predicate) {
	      return (array && array.length)
	        ? baseWhile(array, getIteratee(predicate, 3), true)
	        : [];
	    }
	    function fill(array, value, start, end) {
	      var length = array == null ? 0 : array.length;
	      if (!length) {
	        return [];
	      }
	      if (start && typeof start != 'number' && isIterateeCall(array, value, start)) {
	        start = 0;
	        end = length;
	      }
	      return baseFill(array, value, start, end);
	    }
	    function findIndex(array, predicate, fromIndex) {
	      var length = array == null ? 0 : array.length;
	      if (!length) {
	        return -1;
	      }
	      var index = fromIndex == null ? 0 : toInteger(fromIndex);
	      if (index < 0) {
	        index = nativeMax(length + index, 0);
	      }
	      return baseFindIndex(array, getIteratee(predicate, 3), index);
	    }
	    function findLastIndex(array, predicate, fromIndex) {
	      var length = array == null ? 0 : array.length;
	      if (!length) {
	        return -1;
	      }
	      var index = length - 1;
	      if (fromIndex !== undefined) {
	        index = toInteger(fromIndex);
	        index = fromIndex < 0
	          ? nativeMax(length + index, 0)
	          : nativeMin(index, length - 1);
	      }
	      return baseFindIndex(array, getIteratee(predicate, 3), index, true);
	    }
	    function flatten(array) {
	      var length = array == null ? 0 : array.length;
	      return length ? baseFlatten(array, 1) : [];
	    }
	    function flattenDeep(array) {
	      var length = array == null ? 0 : array.length;
	      return length ? baseFlatten(array, INFINITY) : [];
	    }
	    function flattenDepth(array, depth) {
	      var length = array == null ? 0 : array.length;
	      if (!length) {
	        return [];
	      }
	      depth = depth === undefined ? 1 : toInteger(depth);
	      return baseFlatten(array, depth);
	    }
	    function fromPairs(pairs) {
	      var index = -1,
	          length = pairs == null ? 0 : pairs.length,
	          result = {};
	      while (++index < length) {
	        var pair = pairs[index];
	        result[pair[0]] = pair[1];
	      }
	      return result;
	    }
	    function head(array) {
	      return (array && array.length) ? array[0] : undefined;
	    }
	    function indexOf(array, value, fromIndex) {
	      var length = array == null ? 0 : array.length;
	      if (!length) {
	        return -1;
	      }
	      var index = fromIndex == null ? 0 : toInteger(fromIndex);
	      if (index < 0) {
	        index = nativeMax(length + index, 0);
	      }
	      return baseIndexOf(array, value, index);
	    }
	    function initial(array) {
	      var length = array == null ? 0 : array.length;
	      return length ? baseSlice(array, 0, -1) : [];
	    }
	    var intersection = baseRest(function(arrays) {
	      var mapped = arrayMap(arrays, castArrayLikeObject);
	      return (mapped.length && mapped[0] === arrays[0])
	        ? baseIntersection(mapped)
	        : [];
	    });
	    var intersectionBy = baseRest(function(arrays) {
	      var iteratee = last(arrays),
	          mapped = arrayMap(arrays, castArrayLikeObject);
	      if (iteratee === last(mapped)) {
	        iteratee = undefined;
	      } else {
	        mapped.pop();
	      }
	      return (mapped.length && mapped[0] === arrays[0])
	        ? baseIntersection(mapped, getIteratee(iteratee, 2))
	        : [];
	    });
	    var intersectionWith = baseRest(function(arrays) {
	      var comparator = last(arrays),
	          mapped = arrayMap(arrays, castArrayLikeObject);
	      comparator = typeof comparator == 'function' ? comparator : undefined;
	      if (comparator) {
	        mapped.pop();
	      }
	      return (mapped.length && mapped[0] === arrays[0])
	        ? baseIntersection(mapped, undefined, comparator)
	        : [];
	    });
	    function join(array, separator) {
	      return array == null ? '' : nativeJoin.call(array, separator);
	    }
	    function last(array) {
	      var length = array == null ? 0 : array.length;
	      return length ? array[length - 1] : undefined;
	    }
	    function lastIndexOf(array, value, fromIndex) {
	      var length = array == null ? 0 : array.length;
	      if (!length) {
	        return -1;
	      }
	      var index = length;
	      if (fromIndex !== undefined) {
	        index = toInteger(fromIndex);
	        index = index < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
	      }
	      return value === value
	        ? strictLastIndexOf(array, value, index)
	        : baseFindIndex(array, baseIsNaN, index, true);
	    }
	    function nth(array, n) {
	      return (array && array.length) ? baseNth(array, toInteger(n)) : undefined;
	    }
	    var pull = baseRest(pullAll);
	    function pullAll(array, values) {
	      return (array && array.length && values && values.length)
	        ? basePullAll(array, values)
	        : array;
	    }
	    function pullAllBy(array, values, iteratee) {
	      return (array && array.length && values && values.length)
	        ? basePullAll(array, values, getIteratee(iteratee, 2))
	        : array;
	    }
	    function pullAllWith(array, values, comparator) {
	      return (array && array.length && values && values.length)
	        ? basePullAll(array, values, undefined, comparator)
	        : array;
	    }
	    var pullAt = flatRest(function(array, indexes) {
	      var length = array == null ? 0 : array.length,
	          result = baseAt(array, indexes);
	      basePullAt(array, arrayMap(indexes, function(index) {
	        return isIndex(index, length) ? +index : index;
	      }).sort(compareAscending));
	      return result;
	    });
	    function remove(array, predicate) {
	      var result = [];
	      if (!(array && array.length)) {
	        return result;
	      }
	      var index = -1,
	          indexes = [],
	          length = array.length;
	      predicate = getIteratee(predicate, 3);
	      while (++index < length) {
	        var value = array[index];
	        if (predicate(value, index, array)) {
	          result.push(value);
	          indexes.push(index);
	        }
	      }
	      basePullAt(array, indexes);
	      return result;
	    }
	    function reverse(array) {
	      return array == null ? array : nativeReverse.call(array);
	    }
	    function slice(array, start, end) {
	      var length = array == null ? 0 : array.length;
	      if (!length) {
	        return [];
	      }
	      if (end && typeof end != 'number' && isIterateeCall(array, start, end)) {
	        start = 0;
	        end = length;
	      }
	      else {
	        start = start == null ? 0 : toInteger(start);
	        end = end === undefined ? length : toInteger(end);
	      }
	      return baseSlice(array, start, end);
	    }
	    function sortedIndex(array, value) {
	      return baseSortedIndex(array, value);
	    }
	    function sortedIndexBy(array, value, iteratee) {
	      return baseSortedIndexBy(array, value, getIteratee(iteratee, 2));
	    }
	    function sortedIndexOf(array, value) {
	      var length = array == null ? 0 : array.length;
	      if (length) {
	        var index = baseSortedIndex(array, value);
	        if (index < length && eq(array[index], value)) {
	          return index;
	        }
	      }
	      return -1;
	    }
	    function sortedLastIndex(array, value) {
	      return baseSortedIndex(array, value, true);
	    }
	    function sortedLastIndexBy(array, value, iteratee) {
	      return baseSortedIndexBy(array, value, getIteratee(iteratee, 2), true);
	    }
	    function sortedLastIndexOf(array, value) {
	      var length = array == null ? 0 : array.length;
	      if (length) {
	        var index = baseSortedIndex(array, value, true) - 1;
	        if (eq(array[index], value)) {
	          return index;
	        }
	      }
	      return -1;
	    }
	    function sortedUniq(array) {
	      return (array && array.length)
	        ? baseSortedUniq(array)
	        : [];
	    }
	    function sortedUniqBy(array, iteratee) {
	      return (array && array.length)
	        ? baseSortedUniq(array, getIteratee(iteratee, 2))
	        : [];
	    }
	    function tail(array) {
	      var length = array == null ? 0 : array.length;
	      return length ? baseSlice(array, 1, length) : [];
	    }
	    function take(array, n, guard) {
	      if (!(array && array.length)) {
	        return [];
	      }
	      n = (guard || n === undefined) ? 1 : toInteger(n);
	      return baseSlice(array, 0, n < 0 ? 0 : n);
	    }
	    function takeRight(array, n, guard) {
	      var length = array == null ? 0 : array.length;
	      if (!length) {
	        return [];
	      }
	      n = (guard || n === undefined) ? 1 : toInteger(n);
	      n = length - n;
	      return baseSlice(array, n < 0 ? 0 : n, length);
	    }
	    function takeRightWhile(array, predicate) {
	      return (array && array.length)
	        ? baseWhile(array, getIteratee(predicate, 3), false, true)
	        : [];
	    }
	    function takeWhile(array, predicate) {
	      return (array && array.length)
	        ? baseWhile(array, getIteratee(predicate, 3))
	        : [];
	    }
	    var union = baseRest(function(arrays) {
	      return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
	    });
	    var unionBy = baseRest(function(arrays) {
	      var iteratee = last(arrays);
	      if (isArrayLikeObject(iteratee)) {
	        iteratee = undefined;
	      }
	      return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), getIteratee(iteratee, 2));
	    });
	    var unionWith = baseRest(function(arrays) {
	      var comparator = last(arrays);
	      comparator = typeof comparator == 'function' ? comparator : undefined;
	      return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), undefined, comparator);
	    });
	    function uniq(array) {
	      return (array && array.length) ? baseUniq(array) : [];
	    }
	    function uniqBy(array, iteratee) {
	      return (array && array.length) ? baseUniq(array, getIteratee(iteratee, 2)) : [];
	    }
	    function uniqWith(array, comparator) {
	      comparator = typeof comparator == 'function' ? comparator : undefined;
	      return (array && array.length) ? baseUniq(array, undefined, comparator) : [];
	    }
	    function unzip(array) {
	      if (!(array && array.length)) {
	        return [];
	      }
	      var length = 0;
	      array = arrayFilter(array, function(group) {
	        if (isArrayLikeObject(group)) {
	          length = nativeMax(group.length, length);
	          return true;
	        }
	      });
	      return baseTimes(length, function(index) {
	        return arrayMap(array, baseProperty(index));
	      });
	    }
	    function unzipWith(array, iteratee) {
	      if (!(array && array.length)) {
	        return [];
	      }
	      var result = unzip(array);
	      if (iteratee == null) {
	        return result;
	      }
	      return arrayMap(result, function(group) {
	        return apply(iteratee, undefined, group);
	      });
	    }
	    var without = baseRest(function(array, values) {
	      return isArrayLikeObject(array)
	        ? baseDifference(array, values)
	        : [];
	    });
	    var xor = baseRest(function(arrays) {
	      return baseXor(arrayFilter(arrays, isArrayLikeObject));
	    });
	    var xorBy = baseRest(function(arrays) {
	      var iteratee = last(arrays);
	      if (isArrayLikeObject(iteratee)) {
	        iteratee = undefined;
	      }
	      return baseXor(arrayFilter(arrays, isArrayLikeObject), getIteratee(iteratee, 2));
	    });
	    var xorWith = baseRest(function(arrays) {
	      var comparator = last(arrays);
	      comparator = typeof comparator == 'function' ? comparator : undefined;
	      return baseXor(arrayFilter(arrays, isArrayLikeObject), undefined, comparator);
	    });
	    var zip = baseRest(unzip);
	    function zipObject(props, values) {
	      return baseZipObject(props || [], values || [], assignValue);
	    }
	    function zipObjectDeep(props, values) {
	      return baseZipObject(props || [], values || [], baseSet);
	    }
	    var zipWith = baseRest(function(arrays) {
	      var length = arrays.length,
	          iteratee = length > 1 ? arrays[length - 1] : undefined;
	      iteratee = typeof iteratee == 'function' ? (arrays.pop(), iteratee) : undefined;
	      return unzipWith(arrays, iteratee);
	    });
	    function chain(value) {
	      var result = lodash(value);
	      result.__chain__ = true;
	      return result;
	    }
	    function tap(value, interceptor) {
	      interceptor(value);
	      return value;
	    }
	    function thru(value, interceptor) {
	      return interceptor(value);
	    }
	    var wrapperAt = flatRest(function(paths) {
	      var length = paths.length,
	          start = length ? paths[0] : 0,
	          value = this.__wrapped__,
	          interceptor = function(object) { return baseAt(object, paths); };
	      if (length > 1 || this.__actions__.length ||
	          !(value instanceof LazyWrapper) || !isIndex(start)) {
	        return this.thru(interceptor);
	      }
	      value = value.slice(start, +start + (length ? 1 : 0));
	      value.__actions__.push({
	        'func': thru,
	        'args': [interceptor],
	        'thisArg': undefined
	      });
	      return new LodashWrapper(value, this.__chain__).thru(function(array) {
	        if (length && !array.length) {
	          array.push(undefined);
	        }
	        return array;
	      });
	    });
	    function wrapperChain() {
	      return chain(this);
	    }
	    function wrapperCommit() {
	      return new LodashWrapper(this.value(), this.__chain__);
	    }
	    function wrapperNext() {
	      if (this.__values__ === undefined) {
	        this.__values__ = toArray(this.value());
	      }
	      var done = this.__index__ >= this.__values__.length,
	          value = done ? undefined : this.__values__[this.__index__++];
	      return { 'done': done, 'value': value };
	    }
	    function wrapperToIterator() {
	      return this;
	    }
	    function wrapperPlant(value) {
	      var result,
	          parent = this;
	      while (parent instanceof baseLodash) {
	        var clone = wrapperClone(parent);
	        clone.__index__ = 0;
	        clone.__values__ = undefined;
	        if (result) {
	          previous.__wrapped__ = clone;
	        } else {
	          result = clone;
	        }
	        var previous = clone;
	        parent = parent.__wrapped__;
	      }
	      previous.__wrapped__ = value;
	      return result;
	    }
	    function wrapperReverse() {
	      var value = this.__wrapped__;
	      if (value instanceof LazyWrapper) {
	        var wrapped = value;
	        if (this.__actions__.length) {
	          wrapped = new LazyWrapper(this);
	        }
	        wrapped = wrapped.reverse();
	        wrapped.__actions__.push({
	          'func': thru,
	          'args': [reverse],
	          'thisArg': undefined
	        });
	        return new LodashWrapper(wrapped, this.__chain__);
	      }
	      return this.thru(reverse);
	    }
	    function wrapperValue() {
	      return baseWrapperValue(this.__wrapped__, this.__actions__);
	    }
	    var countBy = createAggregator(function(result, value, key) {
	      if (hasOwnProperty.call(result, key)) {
	        ++result[key];
	      } else {
	        baseAssignValue(result, key, 1);
	      }
	    });
	    function every(collection, predicate, guard) {
	      var func = isArray(collection) ? arrayEvery : baseEvery;
	      if (guard && isIterateeCall(collection, predicate, guard)) {
	        predicate = undefined;
	      }
	      return func(collection, getIteratee(predicate, 3));
	    }
	    function filter(collection, predicate) {
	      var func = isArray(collection) ? arrayFilter : baseFilter;
	      return func(collection, getIteratee(predicate, 3));
	    }
	    var find = createFind(findIndex);
	    var findLast = createFind(findLastIndex);
	    function flatMap(collection, iteratee) {
	      return baseFlatten(map(collection, iteratee), 1);
	    }
	    function flatMapDeep(collection, iteratee) {
	      return baseFlatten(map(collection, iteratee), INFINITY);
	    }
	    function flatMapDepth(collection, iteratee, depth) {
	      depth = depth === undefined ? 1 : toInteger(depth);
	      return baseFlatten(map(collection, iteratee), depth);
	    }
	    function forEach(collection, iteratee) {
	      var func = isArray(collection) ? arrayEach : baseEach;
	      return func(collection, getIteratee(iteratee, 3));
	    }
	    function forEachRight(collection, iteratee) {
	      var func = isArray(collection) ? arrayEachRight : baseEachRight;
	      return func(collection, getIteratee(iteratee, 3));
	    }
	    var groupBy = createAggregator(function(result, value, key) {
	      if (hasOwnProperty.call(result, key)) {
	        result[key].push(value);
	      } else {
	        baseAssignValue(result, key, [value]);
	      }
	    });
	    function includes(collection, value, fromIndex, guard) {
	      collection = isArrayLike(collection) ? collection : values(collection);
	      fromIndex = (fromIndex && !guard) ? toInteger(fromIndex) : 0;
	      var length = collection.length;
	      if (fromIndex < 0) {
	        fromIndex = nativeMax(length + fromIndex, 0);
	      }
	      return isString(collection)
	        ? (fromIndex <= length && collection.indexOf(value, fromIndex) > -1)
	        : (!!length && baseIndexOf(collection, value, fromIndex) > -1);
	    }
	    var invokeMap = baseRest(function(collection, path, args) {
	      var index = -1,
	          isFunc = typeof path == 'function',
	          result = isArrayLike(collection) ? Array(collection.length) : [];
	      baseEach(collection, function(value) {
	        result[++index] = isFunc ? apply(path, value, args) : baseInvoke(value, path, args);
	      });
	      return result;
	    });
	    var keyBy = createAggregator(function(result, value, key) {
	      baseAssignValue(result, key, value);
	    });
	    function map(collection, iteratee) {
	      var func = isArray(collection) ? arrayMap : baseMap;
	      return func(collection, getIteratee(iteratee, 3));
	    }
	    function orderBy(collection, iteratees, orders, guard) {
	      if (collection == null) {
	        return [];
	      }
	      if (!isArray(iteratees)) {
	        iteratees = iteratees == null ? [] : [iteratees];
	      }
	      orders = guard ? undefined : orders;
	      if (!isArray(orders)) {
	        orders = orders == null ? [] : [orders];
	      }
	      return baseOrderBy(collection, iteratees, orders);
	    }
	    var partition = createAggregator(function(result, value, key) {
	      result[key ? 0 : 1].push(value);
	    }, function() { return [[], []]; });
	    function reduce(collection, iteratee, accumulator) {
	      var func = isArray(collection) ? arrayReduce : baseReduce,
	          initAccum = arguments.length < 3;
	      return func(collection, getIteratee(iteratee, 4), accumulator, initAccum, baseEach);
	    }
	    function reduceRight(collection, iteratee, accumulator) {
	      var func = isArray(collection) ? arrayReduceRight : baseReduce,
	          initAccum = arguments.length < 3;
	      return func(collection, getIteratee(iteratee, 4), accumulator, initAccum, baseEachRight);
	    }
	    function reject(collection, predicate) {
	      var func = isArray(collection) ? arrayFilter : baseFilter;
	      return func(collection, negate(getIteratee(predicate, 3)));
	    }
	    function sample(collection) {
	      var func = isArray(collection) ? arraySample : baseSample;
	      return func(collection);
	    }
	    function sampleSize(collection, n, guard) {
	      if ((guard ? isIterateeCall(collection, n, guard) : n === undefined)) {
	        n = 1;
	      } else {
	        n = toInteger(n);
	      }
	      var func = isArray(collection) ? arraySampleSize : baseSampleSize;
	      return func(collection, n);
	    }
	    function shuffle(collection) {
	      var func = isArray(collection) ? arrayShuffle : baseShuffle;
	      return func(collection);
	    }
	    function size(collection) {
	      if (collection == null) {
	        return 0;
	      }
	      if (isArrayLike(collection)) {
	        return isString(collection) ? stringSize(collection) : collection.length;
	      }
	      var tag = getTag(collection);
	      if (tag == mapTag || tag == setTag) {
	        return collection.size;
	      }
	      return baseKeys(collection).length;
	    }
	    function some(collection, predicate, guard) {
	      var func = isArray(collection) ? arraySome : baseSome;
	      if (guard && isIterateeCall(collection, predicate, guard)) {
	        predicate = undefined;
	      }
	      return func(collection, getIteratee(predicate, 3));
	    }
	    var sortBy = baseRest(function(collection, iteratees) {
	      if (collection == null) {
	        return [];
	      }
	      var length = iteratees.length;
	      if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
	        iteratees = [];
	      } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
	        iteratees = [iteratees[0]];
	      }
	      return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
	    });
	    var now = ctxNow || function() {
	      return root.Date.now();
	    };
	    function after(n, func) {
	      if (typeof func != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      n = toInteger(n);
	      return function() {
	        if (--n < 1) {
	          return func.apply(this, arguments);
	        }
	      };
	    }
	    function ary(func, n, guard) {
	      n = guard ? undefined : n;
	      n = (func && n == null) ? func.length : n;
	      return createWrap(func, WRAP_ARY_FLAG, undefined, undefined, undefined, undefined, n);
	    }
	    function before(n, func) {
	      var result;
	      if (typeof func != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      n = toInteger(n);
	      return function() {
	        if (--n > 0) {
	          result = func.apply(this, arguments);
	        }
	        if (n <= 1) {
	          func = undefined;
	        }
	        return result;
	      };
	    }
	    var bind = baseRest(function(func, thisArg, partials) {
	      var bitmask = WRAP_BIND_FLAG;
	      if (partials.length) {
	        var holders = replaceHolders(partials, getHolder(bind));
	        bitmask |= WRAP_PARTIAL_FLAG;
	      }
	      return createWrap(func, bitmask, thisArg, partials, holders);
	    });
	    var bindKey = baseRest(function(object, key, partials) {
	      var bitmask = WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG;
	      if (partials.length) {
	        var holders = replaceHolders(partials, getHolder(bindKey));
	        bitmask |= WRAP_PARTIAL_FLAG;
	      }
	      return createWrap(key, bitmask, object, partials, holders);
	    });
	    function curry(func, arity, guard) {
	      arity = guard ? undefined : arity;
	      var result = createWrap(func, WRAP_CURRY_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
	      result.placeholder = curry.placeholder;
	      return result;
	    }
	    function curryRight(func, arity, guard) {
	      arity = guard ? undefined : arity;
	      var result = createWrap(func, WRAP_CURRY_RIGHT_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
	      result.placeholder = curryRight.placeholder;
	      return result;
	    }
	    function debounce(func, wait, options) {
	      var lastArgs,
	          lastThis,
	          maxWait,
	          result,
	          timerId,
	          lastCallTime,
	          lastInvokeTime = 0,
	          leading = false,
	          maxing = false,
	          trailing = true;
	      if (typeof func != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      wait = toNumber(wait) || 0;
	      if (isObject(options)) {
	        leading = !!options.leading;
	        maxing = 'maxWait' in options;
	        maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
	        trailing = 'trailing' in options ? !!options.trailing : trailing;
	      }
	      function invokeFunc(time) {
	        var args = lastArgs,
	            thisArg = lastThis;
	        lastArgs = lastThis = undefined;
	        lastInvokeTime = time;
	        result = func.apply(thisArg, args);
	        return result;
	      }
	      function leadingEdge(time) {
	        lastInvokeTime = time;
	        timerId = setTimeout(timerExpired, wait);
	        return leading ? invokeFunc(time) : result;
	      }
	      function remainingWait(time) {
	        var timeSinceLastCall = time - lastCallTime,
	            timeSinceLastInvoke = time - lastInvokeTime,
	            timeWaiting = wait - timeSinceLastCall;
	        return maxing
	          ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
	          : timeWaiting;
	      }
	      function shouldInvoke(time) {
	        var timeSinceLastCall = time - lastCallTime,
	            timeSinceLastInvoke = time - lastInvokeTime;
	        return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
	          (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
	      }
	      function timerExpired() {
	        var time = now();
	        if (shouldInvoke(time)) {
	          return trailingEdge(time);
	        }
	        timerId = setTimeout(timerExpired, remainingWait(time));
	      }
	      function trailingEdge(time) {
	        timerId = undefined;
	        if (trailing && lastArgs) {
	          return invokeFunc(time);
	        }
	        lastArgs = lastThis = undefined;
	        return result;
	      }
	      function cancel() {
	        if (timerId !== undefined) {
	          clearTimeout(timerId);
	        }
	        lastInvokeTime = 0;
	        lastArgs = lastCallTime = lastThis = timerId = undefined;
	      }
	      function flush() {
	        return timerId === undefined ? result : trailingEdge(now());
	      }
	      function debounced() {
	        var time = now(),
	            isInvoking = shouldInvoke(time);
	        lastArgs = arguments;
	        lastThis = this;
	        lastCallTime = time;
	        if (isInvoking) {
	          if (timerId === undefined) {
	            return leadingEdge(lastCallTime);
	          }
	          if (maxing) {
	            timerId = setTimeout(timerExpired, wait);
	            return invokeFunc(lastCallTime);
	          }
	        }
	        if (timerId === undefined) {
	          timerId = setTimeout(timerExpired, wait);
	        }
	        return result;
	      }
	      debounced.cancel = cancel;
	      debounced.flush = flush;
	      return debounced;
	    }
	    var defer = baseRest(function(func, args) {
	      return baseDelay(func, 1, args);
	    });
	    var delay = baseRest(function(func, wait, args) {
	      return baseDelay(func, toNumber(wait) || 0, args);
	    });
	    function flip(func) {
	      return createWrap(func, WRAP_FLIP_FLAG);
	    }
	    function memoize(func, resolver) {
	      if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      var memoized = function() {
	        var args = arguments,
	            key = resolver ? resolver.apply(this, args) : args[0],
	            cache = memoized.cache;
	        if (cache.has(key)) {
	          return cache.get(key);
	        }
	        var result = func.apply(this, args);
	        memoized.cache = cache.set(key, result) || cache;
	        return result;
	      };
	      memoized.cache = new (memoize.Cache || MapCache);
	      return memoized;
	    }
	    memoize.Cache = MapCache;
	    function negate(predicate) {
	      if (typeof predicate != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      return function() {
	        var args = arguments;
	        switch (args.length) {
	          case 0: return !predicate.call(this);
	          case 1: return !predicate.call(this, args[0]);
	          case 2: return !predicate.call(this, args[0], args[1]);
	          case 3: return !predicate.call(this, args[0], args[1], args[2]);
	        }
	        return !predicate.apply(this, args);
	      };
	    }
	    function once(func) {
	      return before(2, func);
	    }
	    var overArgs = castRest(function(func, transforms) {
	      transforms = (transforms.length == 1 && isArray(transforms[0]))
	        ? arrayMap(transforms[0], baseUnary(getIteratee()))
	        : arrayMap(baseFlatten(transforms, 1), baseUnary(getIteratee()));
	      var funcsLength = transforms.length;
	      return baseRest(function(args) {
	        var index = -1,
	            length = nativeMin(args.length, funcsLength);
	        while (++index < length) {
	          args[index] = transforms[index].call(this, args[index]);
	        }
	        return apply(func, this, args);
	      });
	    });
	    var partial = baseRest(function(func, partials) {
	      var holders = replaceHolders(partials, getHolder(partial));
	      return createWrap(func, WRAP_PARTIAL_FLAG, undefined, partials, holders);
	    });
	    var partialRight = baseRest(function(func, partials) {
	      var holders = replaceHolders(partials, getHolder(partialRight));
	      return createWrap(func, WRAP_PARTIAL_RIGHT_FLAG, undefined, partials, holders);
	    });
	    var rearg = flatRest(function(func, indexes) {
	      return createWrap(func, WRAP_REARG_FLAG, undefined, undefined, undefined, indexes);
	    });
	    function rest(func, start) {
	      if (typeof func != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      start = start === undefined ? start : toInteger(start);
	      return baseRest(func, start);
	    }
	    function spread(func, start) {
	      if (typeof func != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      start = start == null ? 0 : nativeMax(toInteger(start), 0);
	      return baseRest(function(args) {
	        var array = args[start],
	            otherArgs = castSlice(args, 0, start);
	        if (array) {
	          arrayPush(otherArgs, array);
	        }
	        return apply(func, this, otherArgs);
	      });
	    }
	    function throttle(func, wait, options) {
	      var leading = true,
	          trailing = true;
	      if (typeof func != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      if (isObject(options)) {
	        leading = 'leading' in options ? !!options.leading : leading;
	        trailing = 'trailing' in options ? !!options.trailing : trailing;
	      }
	      return debounce(func, wait, {
	        'leading': leading,
	        'maxWait': wait,
	        'trailing': trailing
	      });
	    }
	    function unary(func) {
	      return ary(func, 1);
	    }
	    function wrap(value, wrapper) {
	      return partial(castFunction(wrapper), value);
	    }
	    function castArray() {
	      if (!arguments.length) {
	        return [];
	      }
	      var value = arguments[0];
	      return isArray(value) ? value : [value];
	    }
	    function clone(value) {
	      return baseClone(value, CLONE_SYMBOLS_FLAG);
	    }
	    function cloneWith(value, customizer) {
	      customizer = typeof customizer == 'function' ? customizer : undefined;
	      return baseClone(value, CLONE_SYMBOLS_FLAG, customizer);
	    }
	    function cloneDeep(value) {
	      return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
	    }
	    function cloneDeepWith(value, customizer) {
	      customizer = typeof customizer == 'function' ? customizer : undefined;
	      return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG, customizer);
	    }
	    function conformsTo(object, source) {
	      return source == null || baseConformsTo(object, source, keys(source));
	    }
	    function eq(value, other) {
	      return value === other || (value !== value && other !== other);
	    }
	    var gt = createRelationalOperation(baseGt);
	    var gte = createRelationalOperation(function(value, other) {
	      return value >= other;
	    });
	    var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
	      return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
	        !propertyIsEnumerable.call(value, 'callee');
	    };
	    var isArray = Array.isArray;
	    var isArrayBuffer = nodeIsArrayBuffer ? baseUnary(nodeIsArrayBuffer) : baseIsArrayBuffer;
	    function isArrayLike(value) {
	      return value != null && isLength(value.length) && !isFunction(value);
	    }
	    function isArrayLikeObject(value) {
	      return isObjectLike(value) && isArrayLike(value);
	    }
	    function isBoolean(value) {
	      return value === true || value === false ||
	        (isObjectLike(value) && baseGetTag(value) == boolTag);
	    }
	    var isBuffer = nativeIsBuffer || stubFalse;
	    var isDate = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate;
	    function isElement(value) {
	      return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value);
	    }
	    function isEmpty(value) {
	      if (value == null) {
	        return true;
	      }
	      if (isArrayLike(value) &&
	          (isArray(value) || typeof value == 'string' || typeof value.splice == 'function' ||
	            isBuffer(value) || isTypedArray(value) || isArguments(value))) {
	        return !value.length;
	      }
	      var tag = getTag(value);
	      if (tag == mapTag || tag == setTag) {
	        return !value.size;
	      }
	      if (isPrototype(value)) {
	        return !baseKeys(value).length;
	      }
	      for (var key in value) {
	        if (hasOwnProperty.call(value, key)) {
	          return false;
	        }
	      }
	      return true;
	    }
	    function isEqual(value, other) {
	      return baseIsEqual(value, other);
	    }
	    function isEqualWith(value, other, customizer) {
	      customizer = typeof customizer == 'function' ? customizer : undefined;
	      var result = customizer ? customizer(value, other) : undefined;
	      return result === undefined ? baseIsEqual(value, other, undefined, customizer) : !!result;
	    }
	    function isError(value) {
	      if (!isObjectLike(value)) {
	        return false;
	      }
	      var tag = baseGetTag(value);
	      return tag == errorTag || tag == domExcTag ||
	        (typeof value.message == 'string' && typeof value.name == 'string' && !isPlainObject(value));
	    }
	    function isFinite(value) {
	      return typeof value == 'number' && nativeIsFinite(value);
	    }
	    function isFunction(value) {
	      if (!isObject(value)) {
	        return false;
	      }
	      var tag = baseGetTag(value);
	      return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
	    }
	    function isInteger(value) {
	      return typeof value == 'number' && value == toInteger(value);
	    }
	    function isLength(value) {
	      return typeof value == 'number' &&
	        value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	    }
	    function isObject(value) {
	      var type = typeof value;
	      return value != null && (type == 'object' || type == 'function');
	    }
	    function isObjectLike(value) {
	      return value != null && typeof value == 'object';
	    }
	    var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
	    function isMatch(object, source) {
	      return object === source || baseIsMatch(object, source, getMatchData(source));
	    }
	    function isMatchWith(object, source, customizer) {
	      customizer = typeof customizer == 'function' ? customizer : undefined;
	      return baseIsMatch(object, source, getMatchData(source), customizer);
	    }
	    function isNaN(value) {
	      return isNumber(value) && value != +value;
	    }
	    function isNative(value) {
	      if (isMaskable(value)) {
	        throw new Error(CORE_ERROR_TEXT);
	      }
	      return baseIsNative(value);
	    }
	    function isNull(value) {
	      return value === null;
	    }
	    function isNil(value) {
	      return value == null;
	    }
	    function isNumber(value) {
	      return typeof value == 'number' ||
	        (isObjectLike(value) && baseGetTag(value) == numberTag);
	    }
	    function isPlainObject(value) {
	      if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
	        return false;
	      }
	      var proto = getPrototype(value);
	      if (proto === null) {
	        return true;
	      }
	      var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	      return typeof Ctor == 'function' && Ctor instanceof Ctor &&
	        funcToString.call(Ctor) == objectCtorString;
	    }
	    var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;
	    function isSafeInteger(value) {
	      return isInteger(value) && value >= -MAX_SAFE_INTEGER && value <= MAX_SAFE_INTEGER;
	    }
	    var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
	    function isString(value) {
	      return typeof value == 'string' ||
	        (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
	    }
	    function isSymbol(value) {
	      return typeof value == 'symbol' ||
	        (isObjectLike(value) && baseGetTag(value) == symbolTag);
	    }
	    var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
	    function isUndefined(value) {
	      return value === undefined;
	    }
	    function isWeakMap(value) {
	      return isObjectLike(value) && getTag(value) == weakMapTag;
	    }
	    function isWeakSet(value) {
	      return isObjectLike(value) && baseGetTag(value) == weakSetTag;
	    }
	    var lt = createRelationalOperation(baseLt);
	    var lte = createRelationalOperation(function(value, other) {
	      return value <= other;
	    });
	    function toArray(value) {
	      if (!value) {
	        return [];
	      }
	      if (isArrayLike(value)) {
	        return isString(value) ? stringToArray(value) : copyArray(value);
	      }
	      if (symIterator && value[symIterator]) {
	        return iteratorToArray(value[symIterator]());
	      }
	      var tag = getTag(value),
	          func = tag == mapTag ? mapToArray : (tag == setTag ? setToArray : values);
	      return func(value);
	    }
	    function toFinite(value) {
	      if (!value) {
	        return value === 0 ? value : 0;
	      }
	      value = toNumber(value);
	      if (value === INFINITY || value === -INFINITY) {
	        var sign = (value < 0 ? -1 : 1);
	        return sign * MAX_INTEGER;
	      }
	      return value === value ? value : 0;
	    }
	    function toInteger(value) {
	      var result = toFinite(value),
	          remainder = result % 1;
	      return result === result ? (remainder ? result - remainder : result) : 0;
	    }
	    function toLength(value) {
	      return value ? baseClamp(toInteger(value), 0, MAX_ARRAY_LENGTH) : 0;
	    }
	    function toNumber(value) {
	      if (typeof value == 'number') {
	        return value;
	      }
	      if (isSymbol(value)) {
	        return NAN;
	      }
	      if (isObject(value)) {
	        var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
	        value = isObject(other) ? (other + '') : other;
	      }
	      if (typeof value != 'string') {
	        return value === 0 ? value : +value;
	      }
	      value = value.replace(reTrim, '');
	      var isBinary = reIsBinary.test(value);
	      return (isBinary || reIsOctal.test(value))
	        ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	        : (reIsBadHex.test(value) ? NAN : +value);
	    }
	    function toPlainObject(value) {
	      return copyObject(value, keysIn(value));
	    }
	    function toSafeInteger(value) {
	      return value
	        ? baseClamp(toInteger(value), -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER)
	        : (value === 0 ? value : 0);
	    }
	    function toString(value) {
	      return value == null ? '' : baseToString(value);
	    }
	    var assign = createAssigner(function(object, source) {
	      if (isPrototype(source) || isArrayLike(source)) {
	        copyObject(source, keys(source), object);
	        return;
	      }
	      for (var key in source) {
	        if (hasOwnProperty.call(source, key)) {
	          assignValue(object, key, source[key]);
	        }
	      }
	    });
	    var assignIn = createAssigner(function(object, source) {
	      copyObject(source, keysIn(source), object);
	    });
	    var assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
	      copyObject(source, keysIn(source), object, customizer);
	    });
	    var assignWith = createAssigner(function(object, source, srcIndex, customizer) {
	      copyObject(source, keys(source), object, customizer);
	    });
	    var at = flatRest(baseAt);
	    function create(prototype, properties) {
	      var result = baseCreate(prototype);
	      return properties == null ? result : baseAssign(result, properties);
	    }
	    var defaults = baseRest(function(object, sources) {
	      object = Object(object);
	      var index = -1;
	      var length = sources.length;
	      var guard = length > 2 ? sources[2] : undefined;
	      if (guard && isIterateeCall(sources[0], sources[1], guard)) {
	        length = 1;
	      }
	      while (++index < length) {
	        var source = sources[index];
	        var props = keysIn(source);
	        var propsIndex = -1;
	        var propsLength = props.length;
	        while (++propsIndex < propsLength) {
	          var key = props[propsIndex];
	          var value = object[key];
	          if (value === undefined ||
	              (eq(value, objectProto[key]) && !hasOwnProperty.call(object, key))) {
	            object[key] = source[key];
	          }
	        }
	      }
	      return object;
	    });
	    var defaultsDeep = baseRest(function(args) {
	      args.push(undefined, customDefaultsMerge);
	      return apply(mergeWith, undefined, args);
	    });
	    function findKey(object, predicate) {
	      return baseFindKey(object, getIteratee(predicate, 3), baseForOwn);
	    }
	    function findLastKey(object, predicate) {
	      return baseFindKey(object, getIteratee(predicate, 3), baseForOwnRight);
	    }
	    function forIn(object, iteratee) {
	      return object == null
	        ? object
	        : baseFor(object, getIteratee(iteratee, 3), keysIn);
	    }
	    function forInRight(object, iteratee) {
	      return object == null
	        ? object
	        : baseForRight(object, getIteratee(iteratee, 3), keysIn);
	    }
	    function forOwn(object, iteratee) {
	      return object && baseForOwn(object, getIteratee(iteratee, 3));
	    }
	    function forOwnRight(object, iteratee) {
	      return object && baseForOwnRight(object, getIteratee(iteratee, 3));
	    }
	    function functions(object) {
	      return object == null ? [] : baseFunctions(object, keys(object));
	    }
	    function functionsIn(object) {
	      return object == null ? [] : baseFunctions(object, keysIn(object));
	    }
	    function get(object, path, defaultValue) {
	      var result = object == null ? undefined : baseGet(object, path);
	      return result === undefined ? defaultValue : result;
	    }
	    function has(object, path) {
	      return object != null && hasPath(object, path, baseHas);
	    }
	    function hasIn(object, path) {
	      return object != null && hasPath(object, path, baseHasIn);
	    }
	    var invert = createInverter(function(result, value, key) {
	      if (value != null &&
	          typeof value.toString != 'function') {
	        value = nativeObjectToString.call(value);
	      }
	      result[value] = key;
	    }, constant(identity));
	    var invertBy = createInverter(function(result, value, key) {
	      if (value != null &&
	          typeof value.toString != 'function') {
	        value = nativeObjectToString.call(value);
	      }
	      if (hasOwnProperty.call(result, value)) {
	        result[value].push(key);
	      } else {
	        result[value] = [key];
	      }
	    }, getIteratee);
	    var invoke = baseRest(baseInvoke);
	    function keys(object) {
	      return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
	    }
	    function keysIn(object) {
	      return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
	    }
	    function mapKeys(object, iteratee) {
	      var result = {};
	      iteratee = getIteratee(iteratee, 3);
	      baseForOwn(object, function(value, key, object) {
	        baseAssignValue(result, iteratee(value, key, object), value);
	      });
	      return result;
	    }
	    function mapValues(object, iteratee) {
	      var result = {};
	      iteratee = getIteratee(iteratee, 3);
	      baseForOwn(object, function(value, key, object) {
	        baseAssignValue(result, key, iteratee(value, key, object));
	      });
	      return result;
	    }
	    var merge = createAssigner(function(object, source, srcIndex) {
	      baseMerge(object, source, srcIndex);
	    });
	    var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
	      baseMerge(object, source, srcIndex, customizer);
	    });
	    var omit = flatRest(function(object, paths) {
	      var result = {};
	      if (object == null) {
	        return result;
	      }
	      var isDeep = false;
	      paths = arrayMap(paths, function(path) {
	        path = castPath(path, object);
	        isDeep || (isDeep = path.length > 1);
	        return path;
	      });
	      copyObject(object, getAllKeysIn(object), result);
	      if (isDeep) {
	        result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
	      }
	      var length = paths.length;
	      while (length--) {
	        baseUnset(result, paths[length]);
	      }
	      return result;
	    });
	    function omitBy(object, predicate) {
	      return pickBy(object, negate(getIteratee(predicate)));
	    }
	    var pick = flatRest(function(object, paths) {
	      return object == null ? {} : basePick(object, paths);
	    });
	    function pickBy(object, predicate) {
	      if (object == null) {
	        return {};
	      }
	      var props = arrayMap(getAllKeysIn(object), function(prop) {
	        return [prop];
	      });
	      predicate = getIteratee(predicate);
	      return basePickBy(object, props, function(value, path) {
	        return predicate(value, path[0]);
	      });
	    }
	    function result(object, path, defaultValue) {
	      path = castPath(path, object);
	      var index = -1,
	          length = path.length;
	      if (!length) {
	        length = 1;
	        object = undefined;
	      }
	      while (++index < length) {
	        var value = object == null ? undefined : object[toKey(path[index])];
	        if (value === undefined) {
	          index = length;
	          value = defaultValue;
	        }
	        object = isFunction(value) ? value.call(object) : value;
	      }
	      return object;
	    }
	    function set(object, path, value) {
	      return object == null ? object : baseSet(object, path, value);
	    }
	    function setWith(object, path, value, customizer) {
	      customizer = typeof customizer == 'function' ? customizer : undefined;
	      return object == null ? object : baseSet(object, path, value, customizer);
	    }
	    var toPairs = createToPairs(keys);
	    var toPairsIn = createToPairs(keysIn);
	    function transform(object, iteratee, accumulator) {
	      var isArr = isArray(object),
	          isArrLike = isArr || isBuffer(object) || isTypedArray(object);
	      iteratee = getIteratee(iteratee, 4);
	      if (accumulator == null) {
	        var Ctor = object && object.constructor;
	        if (isArrLike) {
	          accumulator = isArr ? new Ctor : [];
	        }
	        else if (isObject(object)) {
	          accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};
	        }
	        else {
	          accumulator = {};
	        }
	      }
	      (isArrLike ? arrayEach : baseForOwn)(object, function(value, index, object) {
	        return iteratee(accumulator, value, index, object);
	      });
	      return accumulator;
	    }
	    function unset(object, path) {
	      return object == null ? true : baseUnset(object, path);
	    }
	    function update(object, path, updater) {
	      return object == null ? object : baseUpdate(object, path, castFunction(updater));
	    }
	    function updateWith(object, path, updater, customizer) {
	      customizer = typeof customizer == 'function' ? customizer : undefined;
	      return object == null ? object : baseUpdate(object, path, castFunction(updater), customizer);
	    }
	    function values(object) {
	      return object == null ? [] : baseValues(object, keys(object));
	    }
	    function valuesIn(object) {
	      return object == null ? [] : baseValues(object, keysIn(object));
	    }
	    function clamp(number, lower, upper) {
	      if (upper === undefined) {
	        upper = lower;
	        lower = undefined;
	      }
	      if (upper !== undefined) {
	        upper = toNumber(upper);
	        upper = upper === upper ? upper : 0;
	      }
	      if (lower !== undefined) {
	        lower = toNumber(lower);
	        lower = lower === lower ? lower : 0;
	      }
	      return baseClamp(toNumber(number), lower, upper);
	    }
	    function inRange(number, start, end) {
	      start = toFinite(start);
	      if (end === undefined) {
	        end = start;
	        start = 0;
	      } else {
	        end = toFinite(end);
	      }
	      number = toNumber(number);
	      return baseInRange(number, start, end);
	    }
	    function random(lower, upper, floating) {
	      if (floating && typeof floating != 'boolean' && isIterateeCall(lower, upper, floating)) {
	        upper = floating = undefined;
	      }
	      if (floating === undefined) {
	        if (typeof upper == 'boolean') {
	          floating = upper;
	          upper = undefined;
	        }
	        else if (typeof lower == 'boolean') {
	          floating = lower;
	          lower = undefined;
	        }
	      }
	      if (lower === undefined && upper === undefined) {
	        lower = 0;
	        upper = 1;
	      }
	      else {
	        lower = toFinite(lower);
	        if (upper === undefined) {
	          upper = lower;
	          lower = 0;
	        } else {
	          upper = toFinite(upper);
	        }
	      }
	      if (lower > upper) {
	        var temp = lower;
	        lower = upper;
	        upper = temp;
	      }
	      if (floating || lower % 1 || upper % 1) {
	        var rand = nativeRandom();
	        return nativeMin(lower + (rand * (upper - lower + freeParseFloat('1e-' + ((rand + '').length - 1)))), upper);
	      }
	      return baseRandom(lower, upper);
	    }
	    var camelCase = createCompounder(function(result, word, index) {
	      word = word.toLowerCase();
	      return result + (index ? capitalize(word) : word);
	    });
	    function capitalize(string) {
	      return upperFirst(toString(string).toLowerCase());
	    }
	    function deburr(string) {
	      string = toString(string);
	      return string && string.replace(reLatin, deburrLetter).replace(reComboMark, '');
	    }
	    function endsWith(string, target, position) {
	      string = toString(string);
	      target = baseToString(target);
	      var length = string.length;
	      position = position === undefined
	        ? length
	        : baseClamp(toInteger(position), 0, length);
	      var end = position;
	      position -= target.length;
	      return position >= 0 && string.slice(position, end) == target;
	    }
	    function escape(string) {
	      string = toString(string);
	      return (string && reHasUnescapedHtml.test(string))
	        ? string.replace(reUnescapedHtml, escapeHtmlChar)
	        : string;
	    }
	    function escapeRegExp(string) {
	      string = toString(string);
	      return (string && reHasRegExpChar.test(string))
	        ? string.replace(reRegExpChar, '\\$&')
	        : string;
	    }
	    var kebabCase = createCompounder(function(result, word, index) {
	      return result + (index ? '-' : '') + word.toLowerCase();
	    });
	    var lowerCase = createCompounder(function(result, word, index) {
	      return result + (index ? ' ' : '') + word.toLowerCase();
	    });
	    var lowerFirst = createCaseFirst('toLowerCase');
	    function pad(string, length, chars) {
	      string = toString(string);
	      length = toInteger(length);
	      var strLength = length ? stringSize(string) : 0;
	      if (!length || strLength >= length) {
	        return string;
	      }
	      var mid = (length - strLength) / 2;
	      return (
	        createPadding(nativeFloor(mid), chars) +
	        string +
	        createPadding(nativeCeil(mid), chars)
	      );
	    }
	    function padEnd(string, length, chars) {
	      string = toString(string);
	      length = toInteger(length);
	      var strLength = length ? stringSize(string) : 0;
	      return (length && strLength < length)
	        ? (string + createPadding(length - strLength, chars))
	        : string;
	    }
	    function padStart(string, length, chars) {
	      string = toString(string);
	      length = toInteger(length);
	      var strLength = length ? stringSize(string) : 0;
	      return (length && strLength < length)
	        ? (createPadding(length - strLength, chars) + string)
	        : string;
	    }
	    function parseInt(string, radix, guard) {
	      if (guard || radix == null) {
	        radix = 0;
	      } else if (radix) {
	        radix = +radix;
	      }
	      return nativeParseInt(toString(string).replace(reTrimStart, ''), radix || 0);
	    }
	    function repeat(string, n, guard) {
	      if ((guard ? isIterateeCall(string, n, guard) : n === undefined)) {
	        n = 1;
	      } else {
	        n = toInteger(n);
	      }
	      return baseRepeat(toString(string), n);
	    }
	    function replace() {
	      var args = arguments,
	          string = toString(args[0]);
	      return args.length < 3 ? string : string.replace(args[1], args[2]);
	    }
	    var snakeCase = createCompounder(function(result, word, index) {
	      return result + (index ? '_' : '') + word.toLowerCase();
	    });
	    function split(string, separator, limit) {
	      if (limit && typeof limit != 'number' && isIterateeCall(string, separator, limit)) {
	        separator = limit = undefined;
	      }
	      limit = limit === undefined ? MAX_ARRAY_LENGTH : limit >>> 0;
	      if (!limit) {
	        return [];
	      }
	      string = toString(string);
	      if (string && (
	            typeof separator == 'string' ||
	            (separator != null && !isRegExp(separator))
	          )) {
	        separator = baseToString(separator);
	        if (!separator && hasUnicode(string)) {
	          return castSlice(stringToArray(string), 0, limit);
	        }
	      }
	      return string.split(separator, limit);
	    }
	    var startCase = createCompounder(function(result, word, index) {
	      return result + (index ? ' ' : '') + upperFirst(word);
	    });
	    function startsWith(string, target, position) {
	      string = toString(string);
	      position = position == null
	        ? 0
	        : baseClamp(toInteger(position), 0, string.length);
	      target = baseToString(target);
	      return string.slice(position, position + target.length) == target;
	    }
	    function template(string, options, guard) {
	      var settings = lodash.templateSettings;
	      if (guard && isIterateeCall(string, options, guard)) {
	        options = undefined;
	      }
	      string = toString(string);
	      options = assignInWith({}, options, settings, customDefaultsAssignIn);
	      var imports = assignInWith({}, options.imports, settings.imports, customDefaultsAssignIn),
	          importsKeys = keys(imports),
	          importsValues = baseValues(imports, importsKeys);
	      var isEscaping,
	          isEvaluating,
	          index = 0,
	          interpolate = options.interpolate || reNoMatch,
	          source = "__p += '";
	      var reDelimiters = RegExp(
	        (options.escape || reNoMatch).source + '|' +
	        interpolate.source + '|' +
	        (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + '|' +
	        (options.evaluate || reNoMatch).source + '|$'
	      , 'g');
	      var sourceURL = '//# sourceURL=' +
	        ('sourceURL' in options
	          ? options.sourceURL
	          : ('lodash.templateSources[' + (++templateCounter) + ']')
	        ) + '\n';
	      string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
	        interpolateValue || (interpolateValue = esTemplateValue);
	        source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar);
	        if (escapeValue) {
	          isEscaping = true;
	          source += "' +\n__e(" + escapeValue + ") +\n'";
	        }
	        if (evaluateValue) {
	          isEvaluating = true;
	          source += "';\n" + evaluateValue + ";\n__p += '";
	        }
	        if (interpolateValue) {
	          source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
	        }
	        index = offset + match.length;
	        return match;
	      });
	      source += "';\n";
	      var variable = options.variable;
	      if (!variable) {
	        source = 'with (obj) {\n' + source + '\n}\n';
	      }
	      source = (isEvaluating ? source.replace(reEmptyStringLeading, '') : source)
	        .replace(reEmptyStringMiddle, '$1')
	        .replace(reEmptyStringTrailing, '$1;');
	      source = 'function(' + (variable || 'obj') + ') {\n' +
	        (variable
	          ? ''
	          : 'obj || (obj = {});\n'
	        ) +
	        "var __t, __p = ''" +
	        (isEscaping
	           ? ', __e = _.escape'
	           : ''
	        ) +
	        (isEvaluating
	          ? ', __j = Array.prototype.join;\n' +
	            "function print() { __p += __j.call(arguments, '') }\n"
	          : ';\n'
	        ) +
	        source +
	        'return __p\n}';
	      var result = attempt(function() {
	        return Function(importsKeys, sourceURL + 'return ' + source)
	          .apply(undefined, importsValues);
	      });
	      result.source = source;
	      if (isError(result)) {
	        throw result;
	      }
	      return result;
	    }
	    function toLower(value) {
	      return toString(value).toLowerCase();
	    }
	    function toUpper(value) {
	      return toString(value).toUpperCase();
	    }
	    function trim(string, chars, guard) {
	      string = toString(string);
	      if (string && (guard || chars === undefined)) {
	        return string.replace(reTrim, '');
	      }
	      if (!string || !(chars = baseToString(chars))) {
	        return string;
	      }
	      var strSymbols = stringToArray(string),
	          chrSymbols = stringToArray(chars),
	          start = charsStartIndex(strSymbols, chrSymbols),
	          end = charsEndIndex(strSymbols, chrSymbols) + 1;
	      return castSlice(strSymbols, start, end).join('');
	    }
	    function trimEnd(string, chars, guard) {
	      string = toString(string);
	      if (string && (guard || chars === undefined)) {
	        return string.replace(reTrimEnd, '');
	      }
	      if (!string || !(chars = baseToString(chars))) {
	        return string;
	      }
	      var strSymbols = stringToArray(string),
	          end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;
	      return castSlice(strSymbols, 0, end).join('');
	    }
	    function trimStart(string, chars, guard) {
	      string = toString(string);
	      if (string && (guard || chars === undefined)) {
	        return string.replace(reTrimStart, '');
	      }
	      if (!string || !(chars = baseToString(chars))) {
	        return string;
	      }
	      var strSymbols = stringToArray(string),
	          start = charsStartIndex(strSymbols, stringToArray(chars));
	      return castSlice(strSymbols, start).join('');
	    }
	    function truncate(string, options) {
	      var length = DEFAULT_TRUNC_LENGTH,
	          omission = DEFAULT_TRUNC_OMISSION;
	      if (isObject(options)) {
	        var separator = 'separator' in options ? options.separator : separator;
	        length = 'length' in options ? toInteger(options.length) : length;
	        omission = 'omission' in options ? baseToString(options.omission) : omission;
	      }
	      string = toString(string);
	      var strLength = string.length;
	      if (hasUnicode(string)) {
	        var strSymbols = stringToArray(string);
	        strLength = strSymbols.length;
	      }
	      if (length >= strLength) {
	        return string;
	      }
	      var end = length - stringSize(omission);
	      if (end < 1) {
	        return omission;
	      }
	      var result = strSymbols
	        ? castSlice(strSymbols, 0, end).join('')
	        : string.slice(0, end);
	      if (separator === undefined) {
	        return result + omission;
	      }
	      if (strSymbols) {
	        end += (result.length - end);
	      }
	      if (isRegExp(separator)) {
	        if (string.slice(end).search(separator)) {
	          var match,
	              substring = result;
	          if (!separator.global) {
	            separator = RegExp(separator.source, toString(reFlags.exec(separator)) + 'g');
	          }
	          separator.lastIndex = 0;
	          while ((match = separator.exec(substring))) {
	            var newEnd = match.index;
	          }
	          result = result.slice(0, newEnd === undefined ? end : newEnd);
	        }
	      } else if (string.indexOf(baseToString(separator), end) != end) {
	        var index = result.lastIndexOf(separator);
	        if (index > -1) {
	          result = result.slice(0, index);
	        }
	      }
	      return result + omission;
	    }
	    function unescape(string) {
	      string = toString(string);
	      return (string && reHasEscapedHtml.test(string))
	        ? string.replace(reEscapedHtml, unescapeHtmlChar)
	        : string;
	    }
	    var upperCase = createCompounder(function(result, word, index) {
	      return result + (index ? ' ' : '') + word.toUpperCase();
	    });
	    var upperFirst = createCaseFirst('toUpperCase');
	    function words(string, pattern, guard) {
	      string = toString(string);
	      pattern = guard ? undefined : pattern;
	      if (pattern === undefined) {
	        return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
	      }
	      return string.match(pattern) || [];
	    }
	    var attempt = baseRest(function(func, args) {
	      try {
	        return apply(func, undefined, args);
	      } catch (e) {
	        return isError(e) ? e : new Error(e);
	      }
	    });
	    var bindAll = flatRest(function(object, methodNames) {
	      arrayEach(methodNames, function(key) {
	        key = toKey(key);
	        baseAssignValue(object, key, bind(object[key], object));
	      });
	      return object;
	    });
	    function cond(pairs) {
	      var length = pairs == null ? 0 : pairs.length,
	          toIteratee = getIteratee();
	      pairs = !length ? [] : arrayMap(pairs, function(pair) {
	        if (typeof pair[1] != 'function') {
	          throw new TypeError(FUNC_ERROR_TEXT);
	        }
	        return [toIteratee(pair[0]), pair[1]];
	      });
	      return baseRest(function(args) {
	        var index = -1;
	        while (++index < length) {
	          var pair = pairs[index];
	          if (apply(pair[0], this, args)) {
	            return apply(pair[1], this, args);
	          }
	        }
	      });
	    }
	    function conforms(source) {
	      return baseConforms(baseClone(source, CLONE_DEEP_FLAG));
	    }
	    function constant(value) {
	      return function() {
	        return value;
	      };
	    }
	    function defaultTo(value, defaultValue) {
	      return (value == null || value !== value) ? defaultValue : value;
	    }
	    var flow = createFlow();
	    var flowRight = createFlow(true);
	    function identity(value) {
	      return value;
	    }
	    function iteratee(func) {
	      return baseIteratee(typeof func == 'function' ? func : baseClone(func, CLONE_DEEP_FLAG));
	    }
	    function matches(source) {
	      return baseMatches(baseClone(source, CLONE_DEEP_FLAG));
	    }
	    function matchesProperty(path, srcValue) {
	      return baseMatchesProperty(path, baseClone(srcValue, CLONE_DEEP_FLAG));
	    }
	    var method = baseRest(function(path, args) {
	      return function(object) {
	        return baseInvoke(object, path, args);
	      };
	    });
	    var methodOf = baseRest(function(object, args) {
	      return function(path) {
	        return baseInvoke(object, path, args);
	      };
	    });
	    function mixin(object, source, options) {
	      var props = keys(source),
	          methodNames = baseFunctions(source, props);
	      if (options == null &&
	          !(isObject(source) && (methodNames.length || !props.length))) {
	        options = source;
	        source = object;
	        object = this;
	        methodNames = baseFunctions(source, keys(source));
	      }
	      var chain = !(isObject(options) && 'chain' in options) || !!options.chain,
	          isFunc = isFunction(object);
	      arrayEach(methodNames, function(methodName) {
	        var func = source[methodName];
	        object[methodName] = func;
	        if (isFunc) {
	          object.prototype[methodName] = function() {
	            var chainAll = this.__chain__;
	            if (chain || chainAll) {
	              var result = object(this.__wrapped__),
	                  actions = result.__actions__ = copyArray(this.__actions__);
	              actions.push({ 'func': func, 'args': arguments, 'thisArg': object });
	              result.__chain__ = chainAll;
	              return result;
	            }
	            return func.apply(object, arrayPush([this.value()], arguments));
	          };
	        }
	      });
	      return object;
	    }
	    function noConflict() {
	      if (root._ === this) {
	        root._ = oldDash;
	      }
	      return this;
	    }
	    function noop() {
	    }
	    function nthArg(n) {
	      n = toInteger(n);
	      return baseRest(function(args) {
	        return baseNth(args, n);
	      });
	    }
	    var over = createOver(arrayMap);
	    var overEvery = createOver(arrayEvery);
	    var overSome = createOver(arraySome);
	    function property(path) {
	      return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
	    }
	    function propertyOf(object) {
	      return function(path) {
	        return object == null ? undefined : baseGet(object, path);
	      };
	    }
	    var range = createRange();
	    var rangeRight = createRange(true);
	    function stubArray() {
	      return [];
	    }
	    function stubFalse() {
	      return false;
	    }
	    function stubObject() {
	      return {};
	    }
	    function stubString() {
	      return '';
	    }
	    function stubTrue() {
	      return true;
	    }
	    function times(n, iteratee) {
	      n = toInteger(n);
	      if (n < 1 || n > MAX_SAFE_INTEGER) {
	        return [];
	      }
	      var index = MAX_ARRAY_LENGTH,
	          length = nativeMin(n, MAX_ARRAY_LENGTH);
	      iteratee = getIteratee(iteratee);
	      n -= MAX_ARRAY_LENGTH;
	      var result = baseTimes(length, iteratee);
	      while (++index < n) {
	        iteratee(index);
	      }
	      return result;
	    }
	    function toPath(value) {
	      if (isArray(value)) {
	        return arrayMap(value, toKey);
	      }
	      return isSymbol(value) ? [value] : copyArray(stringToPath(toString(value)));
	    }
	    function uniqueId(prefix) {
	      var id = ++idCounter;
	      return toString(prefix) + id;
	    }
	    var add = createMathOperation(function(augend, addend) {
	      return augend + addend;
	    }, 0);
	    var ceil = createRound('ceil');
	    var divide = createMathOperation(function(dividend, divisor) {
	      return dividend / divisor;
	    }, 1);
	    var floor = createRound('floor');
	    function max(array) {
	      return (array && array.length)
	        ? baseExtremum(array, identity, baseGt)
	        : undefined;
	    }
	    function maxBy(array, iteratee) {
	      return (array && array.length)
	        ? baseExtremum(array, getIteratee(iteratee, 2), baseGt)
	        : undefined;
	    }
	    function mean(array) {
	      return baseMean(array, identity);
	    }
	    function meanBy(array, iteratee) {
	      return baseMean(array, getIteratee(iteratee, 2));
	    }
	    function min(array) {
	      return (array && array.length)
	        ? baseExtremum(array, identity, baseLt)
	        : undefined;
	    }
	    function minBy(array, iteratee) {
	      return (array && array.length)
	        ? baseExtremum(array, getIteratee(iteratee, 2), baseLt)
	        : undefined;
	    }
	    var multiply = createMathOperation(function(multiplier, multiplicand) {
	      return multiplier * multiplicand;
	    }, 1);
	    var round = createRound('round');
	    var subtract = createMathOperation(function(minuend, subtrahend) {
	      return minuend - subtrahend;
	    }, 0);
	    function sum(array) {
	      return (array && array.length)
	        ? baseSum(array, identity)
	        : 0;
	    }
	    function sumBy(array, iteratee) {
	      return (array && array.length)
	        ? baseSum(array, getIteratee(iteratee, 2))
	        : 0;
	    }
	    lodash.after = after;
	    lodash.ary = ary;
	    lodash.assign = assign;
	    lodash.assignIn = assignIn;
	    lodash.assignInWith = assignInWith;
	    lodash.assignWith = assignWith;
	    lodash.at = at;
	    lodash.before = before;
	    lodash.bind = bind;
	    lodash.bindAll = bindAll;
	    lodash.bindKey = bindKey;
	    lodash.castArray = castArray;
	    lodash.chain = chain;
	    lodash.chunk = chunk;
	    lodash.compact = compact;
	    lodash.concat = concat;
	    lodash.cond = cond;
	    lodash.conforms = conforms;
	    lodash.constant = constant;
	    lodash.countBy = countBy;
	    lodash.create = create;
	    lodash.curry = curry;
	    lodash.curryRight = curryRight;
	    lodash.debounce = debounce;
	    lodash.defaults = defaults;
	    lodash.defaultsDeep = defaultsDeep;
	    lodash.defer = defer;
	    lodash.delay = delay;
	    lodash.difference = difference;
	    lodash.differenceBy = differenceBy;
	    lodash.differenceWith = differenceWith;
	    lodash.drop = drop;
	    lodash.dropRight = dropRight;
	    lodash.dropRightWhile = dropRightWhile;
	    lodash.dropWhile = dropWhile;
	    lodash.fill = fill;
	    lodash.filter = filter;
	    lodash.flatMap = flatMap;
	    lodash.flatMapDeep = flatMapDeep;
	    lodash.flatMapDepth = flatMapDepth;
	    lodash.flatten = flatten;
	    lodash.flattenDeep = flattenDeep;
	    lodash.flattenDepth = flattenDepth;
	    lodash.flip = flip;
	    lodash.flow = flow;
	    lodash.flowRight = flowRight;
	    lodash.fromPairs = fromPairs;
	    lodash.functions = functions;
	    lodash.functionsIn = functionsIn;
	    lodash.groupBy = groupBy;
	    lodash.initial = initial;
	    lodash.intersection = intersection;
	    lodash.intersectionBy = intersectionBy;
	    lodash.intersectionWith = intersectionWith;
	    lodash.invert = invert;
	    lodash.invertBy = invertBy;
	    lodash.invokeMap = invokeMap;
	    lodash.iteratee = iteratee;
	    lodash.keyBy = keyBy;
	    lodash.keys = keys;
	    lodash.keysIn = keysIn;
	    lodash.map = map;
	    lodash.mapKeys = mapKeys;
	    lodash.mapValues = mapValues;
	    lodash.matches = matches;
	    lodash.matchesProperty = matchesProperty;
	    lodash.memoize = memoize;
	    lodash.merge = merge;
	    lodash.mergeWith = mergeWith;
	    lodash.method = method;
	    lodash.methodOf = methodOf;
	    lodash.mixin = mixin;
	    lodash.negate = negate;
	    lodash.nthArg = nthArg;
	    lodash.omit = omit;
	    lodash.omitBy = omitBy;
	    lodash.once = once;
	    lodash.orderBy = orderBy;
	    lodash.over = over;
	    lodash.overArgs = overArgs;
	    lodash.overEvery = overEvery;
	    lodash.overSome = overSome;
	    lodash.partial = partial;
	    lodash.partialRight = partialRight;
	    lodash.partition = partition;
	    lodash.pick = pick;
	    lodash.pickBy = pickBy;
	    lodash.property = property;
	    lodash.propertyOf = propertyOf;
	    lodash.pull = pull;
	    lodash.pullAll = pullAll;
	    lodash.pullAllBy = pullAllBy;
	    lodash.pullAllWith = pullAllWith;
	    lodash.pullAt = pullAt;
	    lodash.range = range;
	    lodash.rangeRight = rangeRight;
	    lodash.rearg = rearg;
	    lodash.reject = reject;
	    lodash.remove = remove;
	    lodash.rest = rest;
	    lodash.reverse = reverse;
	    lodash.sampleSize = sampleSize;
	    lodash.set = set;
	    lodash.setWith = setWith;
	    lodash.shuffle = shuffle;
	    lodash.slice = slice;
	    lodash.sortBy = sortBy;
	    lodash.sortedUniq = sortedUniq;
	    lodash.sortedUniqBy = sortedUniqBy;
	    lodash.split = split;
	    lodash.spread = spread;
	    lodash.tail = tail;
	    lodash.take = take;
	    lodash.takeRight = takeRight;
	    lodash.takeRightWhile = takeRightWhile;
	    lodash.takeWhile = takeWhile;
	    lodash.tap = tap;
	    lodash.throttle = throttle;
	    lodash.thru = thru;
	    lodash.toArray = toArray;
	    lodash.toPairs = toPairs;
	    lodash.toPairsIn = toPairsIn;
	    lodash.toPath = toPath;
	    lodash.toPlainObject = toPlainObject;
	    lodash.transform = transform;
	    lodash.unary = unary;
	    lodash.union = union;
	    lodash.unionBy = unionBy;
	    lodash.unionWith = unionWith;
	    lodash.uniq = uniq;
	    lodash.uniqBy = uniqBy;
	    lodash.uniqWith = uniqWith;
	    lodash.unset = unset;
	    lodash.unzip = unzip;
	    lodash.unzipWith = unzipWith;
	    lodash.update = update;
	    lodash.updateWith = updateWith;
	    lodash.values = values;
	    lodash.valuesIn = valuesIn;
	    lodash.without = without;
	    lodash.words = words;
	    lodash.wrap = wrap;
	    lodash.xor = xor;
	    lodash.xorBy = xorBy;
	    lodash.xorWith = xorWith;
	    lodash.zip = zip;
	    lodash.zipObject = zipObject;
	    lodash.zipObjectDeep = zipObjectDeep;
	    lodash.zipWith = zipWith;
	    lodash.entries = toPairs;
	    lodash.entriesIn = toPairsIn;
	    lodash.extend = assignIn;
	    lodash.extendWith = assignInWith;
	    mixin(lodash, lodash);
	    lodash.add = add;
	    lodash.attempt = attempt;
	    lodash.camelCase = camelCase;
	    lodash.capitalize = capitalize;
	    lodash.ceil = ceil;
	    lodash.clamp = clamp;
	    lodash.clone = clone;
	    lodash.cloneDeep = cloneDeep;
	    lodash.cloneDeepWith = cloneDeepWith;
	    lodash.cloneWith = cloneWith;
	    lodash.conformsTo = conformsTo;
	    lodash.deburr = deburr;
	    lodash.defaultTo = defaultTo;
	    lodash.divide = divide;
	    lodash.endsWith = endsWith;
	    lodash.eq = eq;
	    lodash.escape = escape;
	    lodash.escapeRegExp = escapeRegExp;
	    lodash.every = every;
	    lodash.find = find;
	    lodash.findIndex = findIndex;
	    lodash.findKey = findKey;
	    lodash.findLast = findLast;
	    lodash.findLastIndex = findLastIndex;
	    lodash.findLastKey = findLastKey;
	    lodash.floor = floor;
	    lodash.forEach = forEach;
	    lodash.forEachRight = forEachRight;
	    lodash.forIn = forIn;
	    lodash.forInRight = forInRight;
	    lodash.forOwn = forOwn;
	    lodash.forOwnRight = forOwnRight;
	    lodash.get = get;
	    lodash.gt = gt;
	    lodash.gte = gte;
	    lodash.has = has;
	    lodash.hasIn = hasIn;
	    lodash.head = head;
	    lodash.identity = identity;
	    lodash.includes = includes;
	    lodash.indexOf = indexOf;
	    lodash.inRange = inRange;
	    lodash.invoke = invoke;
	    lodash.isArguments = isArguments;
	    lodash.isArray = isArray;
	    lodash.isArrayBuffer = isArrayBuffer;
	    lodash.isArrayLike = isArrayLike;
	    lodash.isArrayLikeObject = isArrayLikeObject;
	    lodash.isBoolean = isBoolean;
	    lodash.isBuffer = isBuffer;
	    lodash.isDate = isDate;
	    lodash.isElement = isElement;
	    lodash.isEmpty = isEmpty;
	    lodash.isEqual = isEqual;
	    lodash.isEqualWith = isEqualWith;
	    lodash.isError = isError;
	    lodash.isFinite = isFinite;
	    lodash.isFunction = isFunction;
	    lodash.isInteger = isInteger;
	    lodash.isLength = isLength;
	    lodash.isMap = isMap;
	    lodash.isMatch = isMatch;
	    lodash.isMatchWith = isMatchWith;
	    lodash.isNaN = isNaN;
	    lodash.isNative = isNative;
	    lodash.isNil = isNil;
	    lodash.isNull = isNull;
	    lodash.isNumber = isNumber;
	    lodash.isObject = isObject;
	    lodash.isObjectLike = isObjectLike;
	    lodash.isPlainObject = isPlainObject;
	    lodash.isRegExp = isRegExp;
	    lodash.isSafeInteger = isSafeInteger;
	    lodash.isSet = isSet;
	    lodash.isString = isString;
	    lodash.isSymbol = isSymbol;
	    lodash.isTypedArray = isTypedArray;
	    lodash.isUndefined = isUndefined;
	    lodash.isWeakMap = isWeakMap;
	    lodash.isWeakSet = isWeakSet;
	    lodash.join = join;
	    lodash.kebabCase = kebabCase;
	    lodash.last = last;
	    lodash.lastIndexOf = lastIndexOf;
	    lodash.lowerCase = lowerCase;
	    lodash.lowerFirst = lowerFirst;
	    lodash.lt = lt;
	    lodash.lte = lte;
	    lodash.max = max;
	    lodash.maxBy = maxBy;
	    lodash.mean = mean;
	    lodash.meanBy = meanBy;
	    lodash.min = min;
	    lodash.minBy = minBy;
	    lodash.stubArray = stubArray;
	    lodash.stubFalse = stubFalse;
	    lodash.stubObject = stubObject;
	    lodash.stubString = stubString;
	    lodash.stubTrue = stubTrue;
	    lodash.multiply = multiply;
	    lodash.nth = nth;
	    lodash.noConflict = noConflict;
	    lodash.noop = noop;
	    lodash.now = now;
	    lodash.pad = pad;
	    lodash.padEnd = padEnd;
	    lodash.padStart = padStart;
	    lodash.parseInt = parseInt;
	    lodash.random = random;
	    lodash.reduce = reduce;
	    lodash.reduceRight = reduceRight;
	    lodash.repeat = repeat;
	    lodash.replace = replace;
	    lodash.result = result;
	    lodash.round = round;
	    lodash.runInContext = runInContext;
	    lodash.sample = sample;
	    lodash.size = size;
	    lodash.snakeCase = snakeCase;
	    lodash.some = some;
	    lodash.sortedIndex = sortedIndex;
	    lodash.sortedIndexBy = sortedIndexBy;
	    lodash.sortedIndexOf = sortedIndexOf;
	    lodash.sortedLastIndex = sortedLastIndex;
	    lodash.sortedLastIndexBy = sortedLastIndexBy;
	    lodash.sortedLastIndexOf = sortedLastIndexOf;
	    lodash.startCase = startCase;
	    lodash.startsWith = startsWith;
	    lodash.subtract = subtract;
	    lodash.sum = sum;
	    lodash.sumBy = sumBy;
	    lodash.template = template;
	    lodash.times = times;
	    lodash.toFinite = toFinite;
	    lodash.toInteger = toInteger;
	    lodash.toLength = toLength;
	    lodash.toLower = toLower;
	    lodash.toNumber = toNumber;
	    lodash.toSafeInteger = toSafeInteger;
	    lodash.toString = toString;
	    lodash.toUpper = toUpper;
	    lodash.trim = trim;
	    lodash.trimEnd = trimEnd;
	    lodash.trimStart = trimStart;
	    lodash.truncate = truncate;
	    lodash.unescape = unescape;
	    lodash.uniqueId = uniqueId;
	    lodash.upperCase = upperCase;
	    lodash.upperFirst = upperFirst;
	    lodash.each = forEach;
	    lodash.eachRight = forEachRight;
	    lodash.first = head;
	    mixin(lodash, (function() {
	      var source = {};
	      baseForOwn(lodash, function(func, methodName) {
	        if (!hasOwnProperty.call(lodash.prototype, methodName)) {
	          source[methodName] = func;
	        }
	      });
	      return source;
	    }()), { 'chain': false });
	    lodash.VERSION = VERSION;
	    arrayEach(['bind', 'bindKey', 'curry', 'curryRight', 'partial', 'partialRight'], function(methodName) {
	      lodash[methodName].placeholder = lodash;
	    });
	    arrayEach(['drop', 'take'], function(methodName, index) {
	      LazyWrapper.prototype[methodName] = function(n) {
	        n = n === undefined ? 1 : nativeMax(toInteger(n), 0);
	        var result = (this.__filtered__ && !index)
	          ? new LazyWrapper(this)
	          : this.clone();
	        if (result.__filtered__) {
	          result.__takeCount__ = nativeMin(n, result.__takeCount__);
	        } else {
	          result.__views__.push({
	            'size': nativeMin(n, MAX_ARRAY_LENGTH),
	            'type': methodName + (result.__dir__ < 0 ? 'Right' : '')
	          });
	        }
	        return result;
	      };
	      LazyWrapper.prototype[methodName + 'Right'] = function(n) {
	        return this.reverse()[methodName](n).reverse();
	      };
	    });
	    arrayEach(['filter', 'map', 'takeWhile'], function(methodName, index) {
	      var type = index + 1,
	          isFilter = type == LAZY_FILTER_FLAG || type == LAZY_WHILE_FLAG;
	      LazyWrapper.prototype[methodName] = function(iteratee) {
	        var result = this.clone();
	        result.__iteratees__.push({
	          'iteratee': getIteratee(iteratee, 3),
	          'type': type
	        });
	        result.__filtered__ = result.__filtered__ || isFilter;
	        return result;
	      };
	    });
	    arrayEach(['head', 'last'], function(methodName, index) {
	      var takeName = 'take' + (index ? 'Right' : '');
	      LazyWrapper.prototype[methodName] = function() {
	        return this[takeName](1).value()[0];
	      };
	    });
	    arrayEach(['initial', 'tail'], function(methodName, index) {
	      var dropName = 'drop' + (index ? '' : 'Right');
	      LazyWrapper.prototype[methodName] = function() {
	        return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
	      };
	    });
	    LazyWrapper.prototype.compact = function() {
	      return this.filter(identity);
	    };
	    LazyWrapper.prototype.find = function(predicate) {
	      return this.filter(predicate).head();
	    };
	    LazyWrapper.prototype.findLast = function(predicate) {
	      return this.reverse().find(predicate);
	    };
	    LazyWrapper.prototype.invokeMap = baseRest(function(path, args) {
	      if (typeof path == 'function') {
	        return new LazyWrapper(this);
	      }
	      return this.map(function(value) {
	        return baseInvoke(value, path, args);
	      });
	    });
	    LazyWrapper.prototype.reject = function(predicate) {
	      return this.filter(negate(getIteratee(predicate)));
	    };
	    LazyWrapper.prototype.slice = function(start, end) {
	      start = toInteger(start);
	      var result = this;
	      if (result.__filtered__ && (start > 0 || end < 0)) {
	        return new LazyWrapper(result);
	      }
	      if (start < 0) {
	        result = result.takeRight(-start);
	      } else if (start) {
	        result = result.drop(start);
	      }
	      if (end !== undefined) {
	        end = toInteger(end);
	        result = end < 0 ? result.dropRight(-end) : result.take(end - start);
	      }
	      return result;
	    };
	    LazyWrapper.prototype.takeRightWhile = function(predicate) {
	      return this.reverse().takeWhile(predicate).reverse();
	    };
	    LazyWrapper.prototype.toArray = function() {
	      return this.take(MAX_ARRAY_LENGTH);
	    };
	    baseForOwn(LazyWrapper.prototype, function(func, methodName) {
	      var checkIteratee = /^(?:filter|find|map|reject)|While$/.test(methodName),
	          isTaker = /^(?:head|last)$/.test(methodName),
	          lodashFunc = lodash[isTaker ? ('take' + (methodName == 'last' ? 'Right' : '')) : methodName],
	          retUnwrapped = isTaker || /^find/.test(methodName);
	      if (!lodashFunc) {
	        return;
	      }
	      lodash.prototype[methodName] = function() {
	        var value = this.__wrapped__,
	            args = isTaker ? [1] : arguments,
	            isLazy = value instanceof LazyWrapper,
	            iteratee = args[0],
	            useLazy = isLazy || isArray(value);
	        var interceptor = function(value) {
	          var result = lodashFunc.apply(lodash, arrayPush([value], args));
	          return (isTaker && chainAll) ? result[0] : result;
	        };
	        if (useLazy && checkIteratee && typeof iteratee == 'function' && iteratee.length != 1) {
	          isLazy = useLazy = false;
	        }
	        var chainAll = this.__chain__,
	            isHybrid = !!this.__actions__.length,
	            isUnwrapped = retUnwrapped && !chainAll,
	            onlyLazy = isLazy && !isHybrid;
	        if (!retUnwrapped && useLazy) {
	          value = onlyLazy ? value : new LazyWrapper(this);
	          var result = func.apply(value, args);
	          result.__actions__.push({ 'func': thru, 'args': [interceptor], 'thisArg': undefined });
	          return new LodashWrapper(result, chainAll);
	        }
	        if (isUnwrapped && onlyLazy) {
	          return func.apply(this, args);
	        }
	        result = this.thru(interceptor);
	        return isUnwrapped ? (isTaker ? result.value()[0] : result.value()) : result;
	      };
	    });
	    arrayEach(['pop', 'push', 'shift', 'sort', 'splice', 'unshift'], function(methodName) {
	      var func = arrayProto[methodName],
	          chainName = /^(?:push|sort|unshift)$/.test(methodName) ? 'tap' : 'thru',
	          retUnwrapped = /^(?:pop|shift)$/.test(methodName);
	      lodash.prototype[methodName] = function() {
	        var args = arguments;
	        if (retUnwrapped && !this.__chain__) {
	          var value = this.value();
	          return func.apply(isArray(value) ? value : [], args);
	        }
	        return this[chainName](function(value) {
	          return func.apply(isArray(value) ? value : [], args);
	        });
	      };
	    });
	    baseForOwn(LazyWrapper.prototype, function(func, methodName) {
	      var lodashFunc = lodash[methodName];
	      if (lodashFunc) {
	        var key = (lodashFunc.name + ''),
	            names = realNames[key] || (realNames[key] = []);
	        names.push({ 'name': methodName, 'func': lodashFunc });
	      }
	    });
	    realNames[createHybrid(undefined, WRAP_BIND_KEY_FLAG).name] = [{
	      'name': 'wrapper',
	      'func': undefined
	    }];
	    LazyWrapper.prototype.clone = lazyClone;
	    LazyWrapper.prototype.reverse = lazyReverse;
	    LazyWrapper.prototype.value = lazyValue;
	    lodash.prototype.at = wrapperAt;
	    lodash.prototype.chain = wrapperChain;
	    lodash.prototype.commit = wrapperCommit;
	    lodash.prototype.next = wrapperNext;
	    lodash.prototype.plant = wrapperPlant;
	    lodash.prototype.reverse = wrapperReverse;
	    lodash.prototype.toJSON = lodash.prototype.valueOf = lodash.prototype.value = wrapperValue;
	    lodash.prototype.first = lodash.prototype.head;
	    if (symIterator) {
	      lodash.prototype[symIterator] = wrapperToIterator;
	    }
	    return lodash;
	  });
	  var _ = runInContext();
	  if (typeof undefined == 'function' && typeof undefined.amd == 'object' && undefined.amd) {
	    root._ = _;
	    undefined(function() {
	      return _;
	    });
	  }
	  else if (freeModule) {
	    (freeModule.exports = _)._ = _;
	    freeExports._ = _;
	  }
	  else {
	    root._ = _;
	  }
	}.call(commonjsGlobal));
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
	  return typeof obj;
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	};

	var classCallCheck = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

	var createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

	var defineProperty = function (obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	};

	var inherits = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	  }

	  subClass.prototype = Object.create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	};

	var possibleConstructorReturn = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return call && (typeof call === "object" || typeof call === "function") ? call : self;
	};

	function unix() {
	  return Math.floor(Date.now() / 1000);
	}
	function toJSON(data) {
	  return JSON.stringify(data, null, 2);
	}
	function getType(values) {
	  if (lodash.isFunction(values && values.then)) {
	    return 'promise';
	  } else if (lodash.isArray(values)) {
	    return 'array';
	  } else if (lodash.isNull(values)) {
	    return 'null';
	  } else if (lodash.isUndefined(values)) {
	    return 'undefined';
	  } else {
	    return typeof values === 'undefined' ? 'undefined' : _typeof(values);
	  }
	}

	var Serializable = function () {
	  function Serializable() {
	    classCallCheck(this, Serializable);
	  }
	  createClass(Serializable, [{
	    key: 'toObject',
	    value: function toObject() {
	      return Object.assign({}, this);
	    }
	  }, {
	    key: 'toJSON',
	    value: function toJSON$$1() {
	      return toJSON(this.toObject());
	    }
	  }]);
	  return Serializable;
	}();

	var rngBrowser = createCommonjsModule(function (module) {
	var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues.bind(crypto)) ||
	                      (typeof(msCrypto) != 'undefined' && msCrypto.getRandomValues.bind(msCrypto));
	if (getRandomValues) {
	  var rnds8 = new Uint8Array(16);
	  module.exports = function whatwgRNG() {
	    getRandomValues(rnds8);
	    return rnds8;
	  };
	} else {
	  var rnds = new Array(16);
	  module.exports = function mathRNG() {
	    for (var i = 0, r; i < 16; i++) {
	      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
	      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
	    }
	    return rnds;
	  };
	}
	});

	var rngBrowser$1 = /*#__PURE__*/Object.freeze({
		default: rngBrowser,
		__moduleExports: rngBrowser
	});

	var byteToHex = [];
	for (var i = 0; i < 256; ++i) {
	  byteToHex[i] = (i + 0x100).toString(16).substr(1);
	}
	function bytesToUuid(buf, offset) {
	  var i = offset || 0;
	  var bth = byteToHex;
	  return bth[buf[i++]] + bth[buf[i++]] +
	          bth[buf[i++]] + bth[buf[i++]] + '-' +
	          bth[buf[i++]] + bth[buf[i++]] + '-' +
	          bth[buf[i++]] + bth[buf[i++]] + '-' +
	          bth[buf[i++]] + bth[buf[i++]] + '-' +
	          bth[buf[i++]] + bth[buf[i++]] +
	          bth[buf[i++]] + bth[buf[i++]] +
	          bth[buf[i++]] + bth[buf[i++]];
	}
	var bytesToUuid_1 = bytesToUuid;

	var bytesToUuid$1 = /*#__PURE__*/Object.freeze({
		default: bytesToUuid_1,
		__moduleExports: bytesToUuid_1
	});

	var rng = ( rngBrowser$1 && rngBrowser ) || rngBrowser$1;

	var bytesToUuid$2 = ( bytesToUuid$1 && bytesToUuid_1 ) || bytesToUuid$1;

	var _nodeId;
	var _clockseq;
	var _lastMSecs = 0;
	var _lastNSecs = 0;
	function v1(options, buf, offset) {
	  var i = buf && offset || 0;
	  var b = buf || [];
	  options = options || {};
	  var node = options.node || _nodeId;
	  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;
	  if (node == null || clockseq == null) {
	    var seedBytes = rng();
	    if (node == null) {
	      node = _nodeId = [
	        seedBytes[0] | 0x01,
	        seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]
	      ];
	    }
	    if (clockseq == null) {
	      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
	    }
	  }
	  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();
	  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;
	  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;
	  if (dt < 0 && options.clockseq === undefined) {
	    clockseq = clockseq + 1 & 0x3fff;
	  }
	  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
	    nsecs = 0;
	  }
	  if (nsecs >= 10000) {
	    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
	  }
	  _lastMSecs = msecs;
	  _lastNSecs = nsecs;
	  _clockseq = clockseq;
	  msecs += 12219292800000;
	  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
	  b[i++] = tl >>> 24 & 0xff;
	  b[i++] = tl >>> 16 & 0xff;
	  b[i++] = tl >>> 8 & 0xff;
	  b[i++] = tl & 0xff;
	  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
	  b[i++] = tmh >>> 8 & 0xff;
	  b[i++] = tmh & 0xff;
	  b[i++] = tmh >>> 24 & 0xf | 0x10;
	  b[i++] = tmh >>> 16 & 0xff;
	  b[i++] = clockseq >>> 8 | 0x80;
	  b[i++] = clockseq & 0xff;
	  for (var n = 0; n < 6; ++n) {
	    b[i + n] = node[n];
	  }
	  return buf ? buf : bytesToUuid$2(b);
	}
	var v1_1 = v1;

	var v1$1 = /*#__PURE__*/Object.freeze({
		default: v1_1,
		__moduleExports: v1_1
	});

	function v4(options, buf, offset) {
	  var i = buf && offset || 0;
	  if (typeof(options) == 'string') {
	    buf = options === 'binary' ? new Array(16) : null;
	    options = null;
	  }
	  options = options || {};
	  var rnds = options.random || (options.rng || rng)();
	  rnds[6] = (rnds[6] & 0x0f) | 0x40;
	  rnds[8] = (rnds[8] & 0x3f) | 0x80;
	  if (buf) {
	    for (var ii = 0; ii < 16; ++ii) {
	      buf[i + ii] = rnds[ii];
	    }
	  }
	  return buf || bytesToUuid$2(rnds);
	}
	var v4_1 = v4;

	var v4$1 = /*#__PURE__*/Object.freeze({
		default: v4_1,
		__moduleExports: v4_1
	});

	var v1$2 = ( v1$1 && v1_1 ) || v1$1;

	var v4$2 = ( v4$1 && v4_1 ) || v4$1;

	var uuid = v4$2;
	uuid.v1 = v1$2;
	uuid.v4 = v4$2;
	var uuid_1 = uuid;

	var joiBrowser = createCommonjsModule(function (module, exports) {
	(function webpackUniversalModuleDefinition(root, factory) {
		module.exports = factory();
	})(commonjsGlobal, function() {
	return          (function(modules) {
	         	var installedModules = {};
	         	function __webpack_require__(moduleId) {
	         		if(installedModules[moduleId]) {
	         			return installedModules[moduleId].exports;
	         		}
	         		var module = installedModules[moduleId] = {
	         			i: moduleId,
	         			l: false,
	         			exports: {}
	         		};
	         		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	         		module.l = true;
	         		return module.exports;
	         	}
	         	__webpack_require__.m = modules;
	         	__webpack_require__.c = installedModules;
	         	__webpack_require__.i = function(value) { return value; };
	         	__webpack_require__.d = function(exports, name, getter) {
	         		if(!__webpack_require__.o(exports, name)) {
	         			Object.defineProperty(exports, name, {
	         				configurable: false,
	         				enumerable: true,
	         				get: getter
	         			});
	         		}
	         	};
	         	__webpack_require__.n = function(module) {
	         		var getter = module && module.__esModule ?
	         			function getDefault() { return module['default']; } :
	         			function getModuleExports() { return module; };
	         		__webpack_require__.d(getter, 'a', getter);
	         		return getter;
	         	};
	         	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
	         	__webpack_require__.p = "";
	         	return __webpack_require__(__webpack_require__.s = 29);
	         })
	         ([
	      (function(module, exports, __webpack_require__) {
	                           (function(Buffer, process) {
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	var Crypto = __webpack_require__(14);
	var Path = __webpack_require__(34);
	var Util = __webpack_require__(38);
	var Escape = __webpack_require__(15);
	var internals = {};
	exports.clone = function (obj, seen) {
	    if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object' || obj === null) {
	        return obj;
	    }
	    seen = seen || new Map();
	    var lookup = seen.get(obj);
	    if (lookup) {
	        return lookup;
	    }
	    var newObj = void 0;
	    var cloneDeep = false;
	    if (!Array.isArray(obj)) {
	        if (Buffer.isBuffer(obj)) {
	            newObj = new Buffer(obj);
	        } else if (obj instanceof Date) {
	            newObj = new Date(obj.getTime());
	        } else if (obj instanceof RegExp) {
	            newObj = new RegExp(obj);
	        } else {
	            var proto = Object.getPrototypeOf(obj);
	            if (proto && proto.isImmutable) {
	                newObj = obj;
	            } else {
	                newObj = Object.create(proto);
	                cloneDeep = true;
	            }
	        }
	    } else {
	        newObj = [];
	        cloneDeep = true;
	    }
	    seen.set(obj, newObj);
	    if (cloneDeep) {
	        var keys = Object.getOwnPropertyNames(obj);
	        for (var i = 0; i < keys.length; ++i) {
	            var key = keys[i];
	            var descriptor = Object.getOwnPropertyDescriptor(obj, key);
	            if (descriptor && (descriptor.get || descriptor.set)) {
	                Object.defineProperty(newObj, key, descriptor);
	            } else {
	                newObj[key] = exports.clone(obj[key], seen);
	            }
	        }
	    }
	    return newObj;
	};
	exports.merge = function (target, source, isNullOverride             , isMergeArrays             ) {
	    exports.assert(target && (typeof target === 'undefined' ? 'undefined' : _typeof(target)) === 'object', 'Invalid target value: must be an object');
	    exports.assert(source === null || source === undefined || (typeof source === 'undefined' ? 'undefined' : _typeof(source)) === 'object', 'Invalid source value: must be null, undefined, or an object');
	    if (!source) {
	        return target;
	    }
	    if (Array.isArray(source)) {
	        exports.assert(Array.isArray(target), 'Cannot merge array onto an object');
	        if (isMergeArrays === false) {
	            target.length = 0;
	        }
	        for (var i = 0; i < source.length; ++i) {
	            target.push(exports.clone(source[i]));
	        }
	        return target;
	    }
	    var keys = Object.keys(source);
	    for (var _i = 0; _i < keys.length; ++_i) {
	        var key = keys[_i];
	        var value = source[key];
	        if (value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
	            if (!target[key] || _typeof(target[key]) !== 'object' || Array.isArray(target[key]) !== Array.isArray(value) || value instanceof Date || Buffer.isBuffer(value) || value instanceof RegExp) {
	                target[key] = exports.clone(value);
	            } else {
	                exports.merge(target[key], value, isNullOverride, isMergeArrays);
	            }
	        } else {
	            if (value !== null && value !== undefined) {
	                target[key] = value;
	            } else if (isNullOverride !== false) {
	                target[key] = value;
	            }
	        }
	    }
	    return target;
	};
	exports.applyToDefaults = function (defaults, options, isNullOverride) {
	    exports.assert(defaults && (typeof defaults === 'undefined' ? 'undefined' : _typeof(defaults)) === 'object', 'Invalid defaults value: must be an object');
	    exports.assert(!options || options === true || (typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object', 'Invalid options value: must be true, falsy or an object');
	    if (!options) {
	        return null;
	    }
	    var copy = exports.clone(defaults);
	    if (options === true) {
	        return copy;
	    }
	    return exports.merge(copy, options, isNullOverride === true, false);
	};
	exports.cloneWithShallow = function (source, keys) {
	    if (!source || (typeof source === 'undefined' ? 'undefined' : _typeof(source)) !== 'object') {
	        return source;
	    }
	    var storage = internals.store(source, keys);
	    var copy = exports.clone(source);
	    internals.restore(copy, source, storage);
	    return copy;
	};
	internals.store = function (source, keys) {
	    var storage = {};
	    for (var i = 0; i < keys.length; ++i) {
	        var key = keys[i];
	        var value = exports.reach(source, key);
	        if (value !== undefined) {
	            storage[key] = value;
	            internals.reachSet(source, key, undefined);
	        }
	    }
	    return storage;
	};
	internals.restore = function (copy, source, storage) {
	    var keys = Object.keys(storage);
	    for (var i = 0; i < keys.length; ++i) {
	        var key = keys[i];
	        internals.reachSet(copy, key, storage[key]);
	        internals.reachSet(source, key, storage[key]);
	    }
	};
	internals.reachSet = function (obj, key, value) {
	    var path = key.split('.');
	    var ref = obj;
	    for (var i = 0; i < path.length; ++i) {
	        var segment = path[i];
	        if (i + 1 === path.length) {
	            ref[segment] = value;
	        }
	        ref = ref[segment];
	    }
	};
	exports.applyToDefaultsWithShallow = function (defaults, options, keys) {
	    exports.assert(defaults && (typeof defaults === 'undefined' ? 'undefined' : _typeof(defaults)) === 'object', 'Invalid defaults value: must be an object');
	    exports.assert(!options || options === true || (typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object', 'Invalid options value: must be true, falsy or an object');
	    exports.assert(keys && Array.isArray(keys), 'Invalid keys');
	    if (!options) {
	        return null;
	    }
	    var copy = exports.cloneWithShallow(defaults, keys);
	    if (options === true) {
	        return copy;
	    }
	    var storage = internals.store(options, keys);
	    exports.merge(copy, options, false, false);
	    internals.restore(copy, options, storage);
	    return copy;
	};
	exports.deepEqual = function (obj, ref, options, seen) {
	    options = options || { prototype: true };
	    var type = typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
	    if (type !== (typeof ref === 'undefined' ? 'undefined' : _typeof(ref))) {
	        return false;
	    }
	    if (type !== 'object' || obj === null || ref === null) {
	        if (obj === ref) {
	            return obj !== 0 || 1 / obj === 1 / ref;
	        }
	        return obj !== obj && ref !== ref;
	    }
	    seen = seen || [];
	    if (seen.indexOf(obj) !== -1) {
	        return true;
	    }
	    seen.push(obj);
	    if (Array.isArray(obj)) {
	        if (!Array.isArray(ref)) {
	            return false;
	        }
	        if (!options.part && obj.length !== ref.length) {
	            return false;
	        }
	        for (var i = 0; i < obj.length; ++i) {
	            if (options.part) {
	                var found = false;
	                for (var j = 0; j < ref.length; ++j) {
	                    if (exports.deepEqual(obj[i], ref[j], options)) {
	                        found = true;
	                        break;
	                    }
	                }
	                return found;
	            }
	            if (!exports.deepEqual(obj[i], ref[i], options)) {
	                return false;
	            }
	        }
	        return true;
	    }
	    if (Buffer.isBuffer(obj)) {
	        if (!Buffer.isBuffer(ref)) {
	            return false;
	        }
	        if (obj.length !== ref.length) {
	            return false;
	        }
	        for (var _i2 = 0; _i2 < obj.length; ++_i2) {
	            if (obj[_i2] !== ref[_i2]) {
	                return false;
	            }
	        }
	        return true;
	    }
	    if (obj instanceof Date) {
	        return ref instanceof Date && obj.getTime() === ref.getTime();
	    }
	    if (obj instanceof RegExp) {
	        return ref instanceof RegExp && obj.toString() === ref.toString();
	    }
	    if (options.prototype) {
	        if (Object.getPrototypeOf(obj) !== Object.getPrototypeOf(ref)) {
	            return false;
	        }
	    }
	    var keys = Object.getOwnPropertyNames(obj);
	    if (!options.part && keys.length !== Object.getOwnPropertyNames(ref).length) {
	        return false;
	    }
	    for (var _i3 = 0; _i3 < keys.length; ++_i3) {
	        var key = keys[_i3];
	        var descriptor = Object.getOwnPropertyDescriptor(obj, key);
	        if (descriptor.get) {
	            if (!exports.deepEqual(descriptor, Object.getOwnPropertyDescriptor(ref, key), options, seen)) {
	                return false;
	            }
	        } else if (!exports.deepEqual(obj[key], ref[key], options, seen)) {
	            return false;
	        }
	    }
	    return true;
	};
	exports.unique = function (array, key) {
	    var result = void 0;
	    if (key) {
	        result = [];
	        var index = new Set();
	        array.forEach(function (item) {
	            var identifier = item[key];
	            if (!index.has(identifier)) {
	                index.add(identifier);
	                result.push(item);
	            }
	        });
	    } else {
	        result = Array.from(new Set(array));
	    }
	    return result;
	};
	exports.mapToObject = function (array, key) {
	    if (!array) {
	        return null;
	    }
	    var obj = {};
	    for (var i = 0; i < array.length; ++i) {
	        if (key) {
	            if (array[i][key]) {
	                obj[array[i][key]] = true;
	            }
	        } else {
	            obj[array[i]] = true;
	        }
	    }
	    return obj;
	};
	exports.intersect = function (array1, array2, justFirst) {
	    if (!array1 || !array2) {
	        return [];
	    }
	    var common = [];
	    var hash = Array.isArray(array1) ? exports.mapToObject(array1) : array1;
	    var found = {};
	    for (var i = 0; i < array2.length; ++i) {
	        if (hash[array2[i]] && !found[array2[i]]) {
	            if (justFirst) {
	                return array2[i];
	            }
	            common.push(array2[i]);
	            found[array2[i]] = true;
	        }
	    }
	    return justFirst ? null : common;
	};
	exports.contain = function (ref, values, options) {
	    var valuePairs = null;
	    if ((typeof ref === 'undefined' ? 'undefined' : _typeof(ref)) === 'object' && (typeof values === 'undefined' ? 'undefined' : _typeof(values)) === 'object' && !Array.isArray(ref) && !Array.isArray(values)) {
	        valuePairs = values;
	        values = Object.keys(values);
	    } else {
	        values = [].concat(values);
	    }
	    options = options || {};
	    exports.assert(typeof ref === 'string' || (typeof ref === 'undefined' ? 'undefined' : _typeof(ref)) === 'object', 'Reference must be string or an object');
	    exports.assert(values.length, 'Values array cannot be empty');
	    var compare = void 0;
	    var compareFlags = void 0;
	    if (options.deep) {
	        compare = exports.deepEqual;
	        var hasOnly = options.hasOwnProperty('only');
	        var hasPart = options.hasOwnProperty('part');
	        compareFlags = {
	            prototype: hasOnly ? options.only : hasPart ? !options.part : false,
	            part: hasOnly ? !options.only : hasPart ? options.part : true
	        };
	    } else {
	        compare = function compare(a, b) {
	            return a === b;
	        };
	    }
	    var misses = false;
	    var matches = new Array(values.length);
	    for (var i = 0; i < matches.length; ++i) {
	        matches[i] = 0;
	    }
	    if (typeof ref === 'string') {
	        var pattern = '(';
	        for (var _i4 = 0; _i4 < values.length; ++_i4) {
	            var value = values[_i4];
	            exports.assert(typeof value === 'string', 'Cannot compare string reference to non-string value');
	            pattern += (_i4 ? '|' : '') + exports.escapeRegex(value);
	        }
	        var regex = new RegExp(pattern + ')', 'g');
	        var leftovers = ref.replace(regex, function ($0, $1) {
	            var index = values.indexOf($1);
	            ++matches[index];
	            return '';
	        });
	        misses = !!leftovers;
	    } else if (Array.isArray(ref)) {
	        for (var _i5 = 0; _i5 < ref.length; ++_i5) {
	            var matched = false;
	            for (var j = 0; j < values.length && matched === false; ++j) {
	                matched = compare(values[j], ref[_i5], compareFlags) && j;
	            }
	            if (matched !== false) {
	                ++matches[matched];
	            } else {
	                misses = true;
	            }
	        }
	    } else {
	        var keys = Object.getOwnPropertyNames(ref);
	        for (var _i6 = 0; _i6 < keys.length; ++_i6) {
	            var key = keys[_i6];
	            var pos = values.indexOf(key);
	            if (pos !== -1) {
	                if (valuePairs && !compare(valuePairs[key], ref[key], compareFlags)) {
	                    return false;
	                }
	                ++matches[pos];
	            } else {
	                misses = true;
	            }
	        }
	    }
	    var result = false;
	    for (var _i7 = 0; _i7 < matches.length; ++_i7) {
	        result = result || !!matches[_i7];
	        if (options.once && matches[_i7] > 1 || !options.part && !matches[_i7]) {
	            return false;
	        }
	    }
	    if (options.only && misses) {
	        return false;
	    }
	    return result;
	};
	exports.flatten = function (array, target) {
	    var result = target || [];
	    for (var i = 0; i < array.length; ++i) {
	        if (Array.isArray(array[i])) {
	            exports.flatten(array[i], result);
	        } else {
	            result.push(array[i]);
	        }
	    }
	    return result;
	};
	exports.reach = function (obj, chain, options) {
	    if (chain === false || chain === null || typeof chain === 'undefined') {
	        return obj;
	    }
	    options = options || {};
	    if (typeof options === 'string') {
	        options = { separator: options };
	    }
	    var path = chain.split(options.separator || '.');
	    var ref = obj;
	    for (var i = 0; i < path.length; ++i) {
	        var key = path[i];
	        if (key[0] === '-' && Array.isArray(ref)) {
	            key = key.slice(1, key.length);
	            key = ref.length - key;
	        }
	        if (!ref || !(((typeof ref === 'undefined' ? 'undefined' : _typeof(ref)) === 'object' || typeof ref === 'function') && key in ref) || (typeof ref === 'undefined' ? 'undefined' : _typeof(ref)) !== 'object' && options.functions === false) {
	            exports.assert(!options.strict || i + 1 === path.length, 'Missing segment', key, 'in reach path ', chain);
	            exports.assert((typeof ref === 'undefined' ? 'undefined' : _typeof(ref)) === 'object' || options.functions === true || typeof ref !== 'function', 'Invalid segment', key, 'in reach path ', chain);
	            ref = options.default;
	            break;
	        }
	        ref = ref[key];
	    }
	    return ref;
	};
	exports.reachTemplate = function (obj, template, options) {
	    return template.replace(/{([^}]+)}/g, function ($0, chain) {
	        var value = exports.reach(obj, chain, options);
	        return value === undefined || value === null ? '' : value;
	    });
	};
	exports.formatStack = function (stack) {
	    var trace = [];
	    for (var i = 0; i < stack.length; ++i) {
	        var item = stack[i];
	        trace.push([item.getFileName(), item.getLineNumber(), item.getColumnNumber(), item.getFunctionName(), item.isConstructor()]);
	    }
	    return trace;
	};
	exports.formatTrace = function (trace) {
	    var display = [];
	    for (var i = 0; i < trace.length; ++i) {
	        var row = trace[i];
	        display.push((row[4] ? 'new ' : '') + row[3] + ' (' + row[0] + ':' + row[1] + ':' + row[2] + ')');
	    }
	    return display;
	};
	exports.callStack = function (slice) {
	    var v8 = Error.prepareStackTrace;
	    Error.prepareStackTrace = function (_, stack) {
	        return stack;
	    };
	    var capture = {};
	    Error.captureStackTrace(capture, this);
	    var stack = capture.stack;
	    Error.prepareStackTrace = v8;
	    var trace = exports.formatStack(stack);
	    return trace.slice(1 + slice);
	};
	exports.displayStack = function (slice) {
	    var trace = exports.callStack(slice === undefined ? 1 : slice + 1);
	    return exports.formatTrace(trace);
	};
	exports.abortThrow = false;
	exports.abort = function (message, hideStack) {
	    if (process.env.NODE_ENV === 'test' || exports.abortThrow === true) {
	        throw new Error(message || 'Unknown error');
	    }
	    var stack = '';
	    if (!hideStack) {
	        stack = exports.displayStack(1).join('\n\t');
	    }
	    console.log('ABORT: ' + message + '\n\t' + stack);
	    process.exit(1);
	};
	exports.assert = function (condition) {
	    if (condition) {
	        return;
	    }
	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	    }
	    if (args.length === 1 && args[0] instanceof Error) {
	        throw args[0];
	    }
	    var msgs = args.filter(function (arg) {
	        return arg !== '';
	    }).map(function (arg) {
	        return typeof arg === 'string' ? arg : arg instanceof Error ? arg.message : exports.stringify(arg);
	    });
	    throw new Error(msgs.join(' ') || 'Unknown error');
	};
	exports.Bench = function () {
	    this.ts = 0;
	    this.reset();
	};
	exports.Bench.prototype.reset = function () {
	    this.ts = exports.Bench.now();
	};
	exports.Bench.prototype.elapsed = function () {
	    return exports.Bench.now() - this.ts;
	};
	exports.Bench.now = function () {
	    var ts = process.hrtime();
	    return ts[0] * 1e3 + ts[1] / 1e6;
	};
	exports.escapeRegex = function (string) {
	    return string.replace(/[\^\$\.\*\+\-\?\=\!\:\|\\\/\(\)\[\]\{\}\,]/g, '\\$&');
	};
	exports.base64urlEncode = function (value, encoding) {
	    exports.assert(typeof value === 'string' || Buffer.isBuffer(value), 'value must be string or buffer');
	    var buf = Buffer.isBuffer(value) ? value : new Buffer(value, encoding || 'binary');
	    return buf.toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/\=/g, '');
	};
	exports.base64urlDecode = function (value, encoding) {
	    if (typeof value !== 'string') {
	        throw new Error('Value not a string');
	    }
	    if (!/^[\w\-]*$/.test(value)) {
	        throw new Error('Invalid character');
	    }
	    var buf = new Buffer(value, 'base64');
	    return encoding === 'buffer' ? buf : buf.toString(encoding || 'binary');
	};
	exports.escapeHeaderAttribute = function (attribute) {
	    exports.assert(/^[ \w\!#\$%&'\(\)\*\+,\-\.\/\:;<\=>\?@\[\]\^`\{\|\}~\"\\]*$/.test(attribute), 'Bad attribute value (' + attribute + ')');
	    return attribute.replace(/\\/g, '\\\\').replace(/\"/g, '\\"');
	};
	exports.escapeHtml = function (string) {
	    return Escape.escapeHtml(string);
	};
	exports.escapeJavaScript = function (string) {
	    return Escape.escapeJavaScript(string);
	};
	exports.escapeJson = function (string) {
	    return Escape.escapeJson(string);
	};
	exports.once = function (method) {
	    if (method._hoekOnce) {
	        return method;
	    }
	    var once = false;
	    var wrapped = function wrapped() {
	        if (!once) {
	            once = true;
	            for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	                args[_key2] = arguments[_key2];
	            }
	            method.apply(null, args);
	        }
	    };
	    wrapped._hoekOnce = true;
	    return wrapped;
	};
	exports.isInteger = Number.isSafeInteger;
	exports.ignore = function () {};
	exports.inherits = Util.inherits;
	exports.format = Util.format;
	exports.transform = function (source, transform, options) {
	    exports.assert(source === null || source === undefined || (typeof source === 'undefined' ? 'undefined' : _typeof(source)) === 'object' || Array.isArray(source), 'Invalid source object: must be null, undefined, an object, or an array');
	    var separator = (typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object' && options !== null ? options.separator || '.' : '.';
	    if (Array.isArray(source)) {
	        var results = [];
	        for (var i = 0; i < source.length; ++i) {
	            results.push(exports.transform(source[i], transform, options));
	        }
	        return results;
	    }
	    var result = {};
	    var keys = Object.keys(transform);
	    for (var _i8 = 0; _i8 < keys.length; ++_i8) {
	        var key = keys[_i8];
	        var path = key.split(separator);
	        var sourcePath = transform[key];
	        exports.assert(typeof sourcePath === 'string', 'All mappings must be "." delineated strings');
	        var segment = void 0;
	        var res = result;
	        while (path.length > 1) {
	            segment = path.shift();
	            if (!res[segment]) {
	                res[segment] = {};
	            }
	            res = res[segment];
	        }
	        segment = path.shift();
	        res[segment] = exports.reach(source, sourcePath, options);
	    }
	    return result;
	};
	exports.uniqueFilename = function (path, extension) {
	    if (extension) {
	        extension = extension[0] !== '.' ? '.' + extension : extension;
	    } else {
	        extension = '';
	    }
	    path = Path.resolve(path);
	    var name = [Date.now(), process.pid, Crypto.randomBytes(8).toString('hex')].join('-') + extension;
	    return Path.join(path, name);
	};
	exports.stringify = function () {
	    try {
	        for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	            args[_key3] = arguments[_key3];
	        }
	        return JSON.stringify.apply(null, args);
	    } catch (err) {
	        return '[Cannot display object: ' + err.message + ']';
	    }
	};
	exports.shallow = function (source) {
	    var target = {};
	    var keys = Object.keys(source);
	    for (var i = 0; i < keys.length; ++i) {
	        var key = keys[i];
	        target[key] = source[key];
	    }
	    return target;
	};
	exports.wait = function (timeout) {
	    return new Promise(function (resolve) {
	        return setTimeout(resolve, timeout);
	    });
	};
	exports.block = function () {
	    return new Promise(exports.ignore);
	};
	                           }.call(exports, __webpack_require__(3).Buffer, __webpack_require__(5)));
	      }),
	      (function(module, exports, __webpack_require__) {
	var Hoek = __webpack_require__(0);
	exports.create = function (key, options) {
	    Hoek.assert(typeof key === 'string', 'Invalid reference key:', key);
	    var settings = Hoek.clone(options);
	    var ref = function ref(value, validationOptions) {
	        return Hoek.reach(ref.isContext ? validationOptions.context : value, ref.key, settings);
	    };
	    ref.isContext = key[0] === (settings && settings.contextPrefix || '$');
	    ref.key = ref.isContext ? key.slice(1) : key;
	    ref.path = ref.key.split(settings && settings.separator || '.');
	    ref.depth = ref.path.length;
	    ref.root = ref.path[0];
	    ref.isJoi = true;
	    ref.toString = function () {
	        return (ref.isContext ? 'context:' : 'ref:') + ref.key;
	    };
	    return ref;
	};
	exports.isRef = function (ref) {
	    return typeof ref === 'function' && ref.isJoi;
	};
	exports.push = function (array, ref) {
	    if (exports.isRef(ref) && !ref.isContext) {
	        array.push(ref.root);
	    }
	};
	      }),
	      (function(module, exports, __webpack_require__) {
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	var Hoek = __webpack_require__(0);
	var Ref = __webpack_require__(1);
	var Errors = __webpack_require__(6);
	var Alternatives = null;
	var Cast = null;
	var internals = {
	    Set: __webpack_require__(9)
	};
	internals.defaults = {
	    abortEarly: true,
	    convert: true,
	    allowUnknown: false,
	    skipFunctions: false,
	    stripUnknown: false,
	    language: {},
	    presence: 'optional',
	    strip: false,
	    noDefaults: false,
	    escapeHtml: false
	};
	module.exports = internals.Any = function () {
	    function _class() {
	        _classCallCheck(this, _class);
	        Cast = Cast || __webpack_require__(4);
	        this.isJoi = true;
	        this._type = 'any';
	        this._settings = null;
	        this._valids = new internals.Set();
	        this._invalids = new internals.Set();
	        this._tests = [];
	        this._refs = [];
	        this._flags = {
	        };
	        this._description = null;
	        this._unit = null;
	        this._notes = [];
	        this._tags = [];
	        this._examples = [];
	        this._meta = [];
	        this._inner = {};
	    }
	    _class.prototype.createError = function createError(type, context, state, options) {
	        var flags = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : this._flags;
	        return Errors.create(type, context, state, options, flags);
	    };
	    _class.prototype.createOverrideError = function createOverrideError(type, context, state, options, message, template) {
	        return Errors.create(type, context, state, options, this._flags, message, template);
	    };
	    _class.prototype.checkOptions = function checkOptions(options) {
	        var Schemas = __webpack_require__(18);
	        var result = Schemas.options.validate(options);
	        if (result.error) {
	            throw new Error(result.error.details[0].message);
	        }
	    };
	    _class.prototype.clone = function clone() {
	        var obj = Object.create(Object.getPrototypeOf(this));
	        obj.isJoi = true;
	        obj._currentJoi = this._currentJoi;
	        obj._type = this._type;
	        obj._settings = internals.concatSettings(this._settings);
	        obj._baseType = this._baseType;
	        obj._valids = Hoek.clone(this._valids);
	        obj._invalids = Hoek.clone(this._invalids);
	        obj._tests = this._tests.slice();
	        obj._refs = this._refs.slice();
	        obj._flags = Hoek.clone(this._flags);
	        obj._description = this._description;
	        obj._unit = this._unit;
	        obj._notes = this._notes.slice();
	        obj._tags = this._tags.slice();
	        obj._examples = this._examples.slice();
	        obj._meta = this._meta.slice();
	        obj._inner = {};
	        var inners = Object.keys(this._inner);
	        for (var i = 0; i < inners.length; ++i) {
	            var key = inners[i];
	            obj._inner[key] = this._inner[key] ? this._inner[key].slice() : null;
	        }
	        return obj;
	    };
	    _class.prototype.concat = function concat(schema) {
	        Hoek.assert(schema instanceof internals.Any, 'Invalid schema object');
	        Hoek.assert(this._type === 'any' || schema._type === 'any' || schema._type === this._type, 'Cannot merge type', this._type, 'with another type:', schema._type);
	        var obj = this.clone();
	        if (this._type === 'any' && schema._type !== 'any') {
	            var tmpObj = schema.clone();
	            var keysToRestore = ['_settings', '_valids', '_invalids', '_tests', '_refs', '_flags', '_description', '_unit', '_notes', '_tags', '_examples', '_meta', '_inner'];
	            for (var i = 0; i < keysToRestore.length; ++i) {
	                tmpObj[keysToRestore[i]] = obj[keysToRestore[i]];
	            }
	            obj = tmpObj;
	        }
	        obj._settings = obj._settings ? internals.concatSettings(obj._settings, schema._settings) : schema._settings;
	        obj._valids.merge(schema._valids, schema._invalids);
	        obj._invalids.merge(schema._invalids, schema._valids);
	        obj._tests = obj._tests.concat(schema._tests);
	        obj._refs = obj._refs.concat(schema._refs);
	        Hoek.merge(obj._flags, schema._flags);
	        obj._description = schema._description || obj._description;
	        obj._unit = schema._unit || obj._unit;
	        obj._notes = obj._notes.concat(schema._notes);
	        obj._tags = obj._tags.concat(schema._tags);
	        obj._examples = obj._examples.concat(schema._examples);
	        obj._meta = obj._meta.concat(schema._meta);
	        var inners = Object.keys(schema._inner);
	        var isObject = obj._type === 'object';
	        for (var _i = 0; _i < inners.length; ++_i) {
	            var key = inners[_i];
	            var source = schema._inner[key];
	            if (source) {
	                var target = obj._inner[key];
	                if (target) {
	                    if (isObject && key === 'children') {
	                        var keys = {};
	                        for (var j = 0; j < target.length; ++j) {
	                            keys[target[j].key] = j;
	                        }
	                        for (var _j = 0; _j < source.length; ++_j) {
	                            var sourceKey = source[_j].key;
	                            if (keys[sourceKey] >= 0) {
	                                target[keys[sourceKey]] = {
	                                    key: sourceKey,
	                                    schema: target[keys[sourceKey]].schema.concat(source[_j].schema)
	                                };
	                            } else {
	                                target.push(source[_j]);
	                            }
	                        }
	                    } else {
	                        obj._inner[key] = obj._inner[key].concat(source);
	                    }
	                } else {
	                    obj._inner[key] = source.slice();
	                }
	            }
	        }
	        return obj;
	    };
	    _class.prototype._test = function _test(name, arg, func, options) {
	        var obj = this.clone();
	        obj._tests.push({ func: func, name: name, arg: arg, options: options });
	        return obj;
	    };
	    _class.prototype.options = function options(_options) {
	        Hoek.assert(!_options.context, 'Cannot override context');
	        this.checkOptions(_options);
	        var obj = this.clone();
	        obj._settings = internals.concatSettings(obj._settings, _options);
	        return obj;
	    };
	    _class.prototype.strict = function strict(isStrict) {
	        var obj = this.clone();
	        obj._settings = obj._settings || {};
	        obj._settings.convert = isStrict === undefined ? false : !isStrict;
	        return obj;
	    };
	    _class.prototype.raw = function raw(isRaw) {
	        var value = isRaw === undefined ? true : isRaw;
	        if (this._flags.raw === value) {
	            return this;
	        }
	        var obj = this.clone();
	        obj._flags.raw = value;
	        return obj;
	    };
	    _class.prototype.error = function error(err) {
	        Hoek.assert(err && (err instanceof Error || typeof err === 'function'), 'Must provide a valid Error object or a function');
	        var obj = this.clone();
	        obj._flags.error = err;
	        return obj;
	    };
	    _class.prototype.allow = function allow() {
	        for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
	            values[_key] = arguments[_key];
	        }
	        var obj = this.clone();
	        values = Hoek.flatten(values);
	        for (var i = 0; i < values.length; ++i) {
	            var value = values[i];
	            Hoek.assert(value !== undefined, 'Cannot call allow/valid/invalid with undefined');
	            obj._invalids.remove(value);
	            obj._valids.add(value, obj._refs);
	        }
	        return obj;
	    };
	    _class.prototype.valid = function valid() {
	        var obj = this.allow.apply(this, arguments);
	        obj._flags.allowOnly = true;
	        return obj;
	    };
	    _class.prototype.invalid = function invalid() {
	        for (var _len2 = arguments.length, values = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	            values[_key2] = arguments[_key2];
	        }
	        var obj = this.clone();
	        values = Hoek.flatten(values);
	        for (var i = 0; i < values.length; ++i) {
	            var value = values[i];
	            Hoek.assert(value !== undefined, 'Cannot call allow/valid/invalid with undefined');
	            obj._valids.remove(value);
	            obj._invalids.add(value, obj._refs);
	        }
	        return obj;
	    };
	    _class.prototype.required = function required() {
	        if (this._flags.presence === 'required') {
	            return this;
	        }
	        var obj = this.clone();
	        obj._flags.presence = 'required';
	        return obj;
	    };
	    _class.prototype.optional = function optional() {
	        if (this._flags.presence === 'optional') {
	            return this;
	        }
	        var obj = this.clone();
	        obj._flags.presence = 'optional';
	        return obj;
	    };
	    _class.prototype.forbidden = function forbidden() {
	        if (this._flags.presence === 'forbidden') {
	            return this;
	        }
	        var obj = this.clone();
	        obj._flags.presence = 'forbidden';
	        return obj;
	    };
	    _class.prototype.strip = function strip() {
	        if (this._flags.strip) {
	            return this;
	        }
	        var obj = this.clone();
	        obj._flags.strip = true;
	        return obj;
	    };
	    _class.prototype.applyFunctionToChildren = function applyFunctionToChildren(children, fn, args, root) {
	        children = [].concat(children);
	        if (children.length !== 1 || children[0] !== '') {
	            root = root ? root + '.' : '';
	            var extraChildren = (children[0] === '' ? children.slice(1) : children).map(function (child) {
	                return root + child;
	            });
	            throw new Error('unknown key(s) ' + extraChildren.join(', '));
	        }
	        return this[fn].apply(this, args);
	    };
	    _class.prototype.default = function _default(value, description) {
	        if (typeof value === 'function' && !Ref.isRef(value)) {
	            if (!value.description && description) {
	                value.description = description;
	            }
	            if (!this._flags.func) {
	                Hoek.assert(typeof value.description === 'string' && value.description.length > 0, 'description must be provided when default value is a function');
	            }
	        }
	        var obj = this.clone();
	        obj._flags.default = value;
	        Ref.push(obj._refs, value);
	        return obj;
	    };
	    _class.prototype.empty = function empty(schema) {
	        var obj = this.clone();
	        if (schema === undefined) {
	            delete obj._flags.empty;
	        } else {
	            obj._flags.empty = Cast.schema(this._currentJoi, schema);
	        }
	        return obj;
	    };
	    _class.prototype.when = function when(condition, options) {
	        Hoek.assert(options && (typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object', 'Invalid options');
	        Hoek.assert(options.then !== undefined || options.otherwise !== undefined, 'options must have at least one of "then" or "otherwise"');
	        var then = options.hasOwnProperty('then') ? this.concat(Cast.schema(this._currentJoi, options.then)) : undefined;
	        var otherwise = options.hasOwnProperty('otherwise') ? this.concat(Cast.schema(this._currentJoi, options.otherwise)) : undefined;
	        Alternatives = Alternatives || __webpack_require__(10);
	        var alternativeOptions = { then: then, otherwise: otherwise };
	        if (Object.prototype.hasOwnProperty.call(options, 'is')) {
	            alternativeOptions.is = options.is;
	        }
	        var obj = Alternatives.when(condition, alternativeOptions);
	        obj._flags.presence = 'ignore';
	        obj._baseType = this;
	        return obj;
	    };
	    _class.prototype.description = function description(desc) {
	        Hoek.assert(desc && typeof desc === 'string', 'Description must be a non-empty string');
	        var obj = this.clone();
	        obj._description = desc;
	        return obj;
	    };
	    _class.prototype.notes = function notes(_notes) {
	        Hoek.assert(_notes && (typeof _notes === 'string' || Array.isArray(_notes)), 'Notes must be a non-empty string or array');
	        var obj = this.clone();
	        obj._notes = obj._notes.concat(_notes);
	        return obj;
	    };
	    _class.prototype.tags = function tags(_tags) {
	        Hoek.assert(_tags && (typeof _tags === 'string' || Array.isArray(_tags)), 'Tags must be a non-empty string or array');
	        var obj = this.clone();
	        obj._tags = obj._tags.concat(_tags);
	        return obj;
	    };
	    _class.prototype.meta = function meta(_meta) {
	        Hoek.assert(_meta !== undefined, 'Meta cannot be undefined');
	        var obj = this.clone();
	        obj._meta = obj._meta.concat(_meta);
	        return obj;
	    };
	    _class.prototype.example = function example() {
	        Hoek.assert(arguments.length === 1, 'Missing example');
	        var value = arguments.length <= 0 ? undefined : arguments[0];
	        var result = this._validate(value, null, internals.defaults);
	        Hoek.assert(!result.errors, 'Bad example:', result.errors && Errors.process(result.errors, value));
	        var obj = this.clone();
	        obj._examples.push(value);
	        return obj;
	    };
	    _class.prototype.unit = function unit(name) {
	        Hoek.assert(name && typeof name === 'string', 'Unit name must be a non-empty string');
	        var obj = this.clone();
	        obj._unit = name;
	        return obj;
	    };
	    _class.prototype._prepareEmptyValue = function _prepareEmptyValue(value) {
	        if (typeof value === 'string' && this._flags.trim) {
	            return value.trim();
	        }
	        return value;
	    };
	    _class.prototype._validate = function _validate(value, state, options, reference) {
	        var _this = this;
	        var originalValue = value;
	        state = state || { key: '', path: [], parent: null, reference: reference };
	        if (this._settings) {
	            options = internals.concatSettings(options, this._settings);
	        }
	        var errors = [];
	        var finish = function finish() {
	            var finalValue = void 0;
	            if (value !== undefined) {
	                finalValue = _this._flags.raw ? originalValue : value;
	            } else if (options.noDefaults) {
	                finalValue = value;
	            } else if (Ref.isRef(_this._flags.default)) {
	                finalValue = _this._flags.default(state.parent, options);
	            } else if (typeof _this._flags.default === 'function' && !(_this._flags.func && !_this._flags.default.description)) {
	                var args = void 0;
	                if (state.parent !== null && _this._flags.default.length > 0) {
	                    args = [Hoek.clone(state.parent), options];
	                }
	                var defaultValue = internals._try(_this._flags.default, args);
	                finalValue = defaultValue.value;
	                if (defaultValue.error) {
	                    errors.push(_this.createError('any.default', { error: defaultValue.error }, state, options));
	                }
	            } else {
	                finalValue = Hoek.clone(_this._flags.default);
	            }
	            if (errors.length && typeof _this._flags.error === 'function') {
	                var change = _this._flags.error.call(_this, errors);
	                if (typeof change === 'string') {
	                    errors = [_this.createOverrideError('override', { reason: errors }, state, options, change)];
	                } else {
	                    errors = [].concat(change).map(function (err) {
	                        return err instanceof Error ? err : _this.createOverrideError(err.type || 'override', err.context, state, options, err.message, err.template);
	                    });
	                }
	            }
	            return {
	                value: _this._flags.strip ? undefined : finalValue,
	                finalValue: finalValue,
	                errors: errors.length ? errors : null
	            };
	        };
	        if (this._coerce) {
	            var coerced = this._coerce.call(this, value, state, options);
	            if (coerced.errors) {
	                value = coerced.value;
	                errors = errors.concat(coerced.errors);
	                return finish();
	            }
	            value = coerced.value;
	        }
	        if (this._flags.empty && !this._flags.empty._validate(this._prepareEmptyValue(value), null, internals.defaults).errors) {
	            value = undefined;
	        }
	        var presence = this._flags.presence || options.presence;
	        if (presence === 'optional') {
	            if (value === undefined) {
	                var isDeepDefault = this._flags.hasOwnProperty('default') && this._flags.default === undefined;
	                if (isDeepDefault && this._type === 'object') {
	                    value = {};
	                } else {
	                    return finish();
	                }
	            }
	        } else if (presence === 'required' && value === undefined) {
	            errors.push(this.createError('any.required', null, state, options));
	            return finish();
	        } else if (presence === 'forbidden') {
	            if (value === undefined) {
	                return finish();
	            }
	            errors.push(this.createError('any.unknown', null, state, options));
	            return finish();
	        }
	        if (this._valids.has(value, state, options, this._flags.insensitive)) {
	            return finish();
	        }
	        if (this._invalids.has(value, state, options, this._flags.insensitive)) {
	            errors.push(this.createError(value === '' ? 'any.empty' : 'any.invalid', null, state, options));
	            if (options.abortEarly || value === undefined) {
	                return finish();
	            }
	        }
	        if (this._base) {
	            var base = this._base.call(this, value, state, options);
	            if (base.errors) {
	                value = base.value;
	                errors = errors.concat(base.errors);
	                return finish();
	            }
	            if (base.value !== value) {
	                value = base.value;
	                if (this._valids.has(value, state, options, this._flags.insensitive)) {
	                    return finish();
	                }
	                if (this._invalids.has(value, state, options, this._flags.insensitive)) {
	                    errors.push(this.createError(value === '' ? 'any.empty' : 'any.invalid', null, state, options));
	                    if (options.abortEarly) {
	                        return finish();
	                    }
	                }
	            }
	        }
	        if (this._flags.allowOnly) {
	            errors.push(this.createError('any.allowOnly', { valids: this._valids.values({ stripUndefined: true }) }, state, options));
	            if (options.abortEarly) {
	                return finish();
	            }
	        }
	        for (var i = 0; i < this._tests.length; ++i) {
	            var test = this._tests[i];
	            var ret = test.func.call(this, value, state, options);
	            if (ret instanceof Errors.Err) {
	                errors.push(ret);
	                if (options.abortEarly) {
	                    return finish();
	                }
	            } else {
	                value = ret;
	            }
	        }
	        return finish();
	    };
	    _class.prototype._validateWithOptions = function _validateWithOptions(value, options, callback) {
	        if (options) {
	            this.checkOptions(options);
	        }
	        var settings = internals.concatSettings(internals.defaults, options);
	        var result = this._validate(value, null, settings);
	        var errors = Errors.process(result.errors, value);
	        if (callback) {
	            return callback(errors, result.value);
	        }
	        return {
	            error: errors,
	            value: result.value,
	            then: function then(resolve, reject) {
	                if (errors) {
	                    return Promise.reject(errors).catch(reject);
	                }
	                return Promise.resolve(result.value).then(resolve);
	            },
	            catch: function _catch(reject) {
	                if (errors) {
	                    return Promise.reject(errors).catch(reject);
	                }
	                return Promise.resolve(result.value);
	            }
	        };
	    };
	    _class.prototype.validate = function validate(value, options, callback) {
	        if (typeof options === 'function') {
	            return this._validateWithOptions(value, null, options);
	        }
	        return this._validateWithOptions(value, options, callback);
	    };
	    _class.prototype.describe = function describe() {
	        var _this2 = this;
	        var description = {
	            type: this._type
	        };
	        var flags = Object.keys(this._flags);
	        if (flags.length) {
	            if (['empty', 'default', 'lazy', 'label'].some(function (flag) {
	                return _this2._flags.hasOwnProperty(flag);
	            })) {
	                description.flags = {};
	                for (var i = 0; i < flags.length; ++i) {
	                    var flag = flags[i];
	                    if (flag === 'empty') {
	                        description.flags[flag] = this._flags[flag].describe();
	                    } else if (flag === 'default') {
	                        if (Ref.isRef(this._flags[flag])) {
	                            description.flags[flag] = this._flags[flag].toString();
	                        } else if (typeof this._flags[flag] === 'function') {
	                            description.flags[flag] = {
	                                description: this._flags[flag].description,
	                                function: this._flags[flag]
	                            };
	                        } else {
	                            description.flags[flag] = this._flags[flag];
	                        }
	                    } else if (flag === 'lazy' || flag === 'label') ; else {
	                        description.flags[flag] = this._flags[flag];
	                    }
	                }
	            } else {
	                description.flags = this._flags;
	            }
	        }
	        if (this._settings) {
	            description.options = Hoek.clone(this._settings);
	        }
	        if (this._baseType) {
	            description.base = this._baseType.describe();
	        }
	        if (this._description) {
	            description.description = this._description;
	        }
	        if (this._notes.length) {
	            description.notes = this._notes;
	        }
	        if (this._tags.length) {
	            description.tags = this._tags;
	        }
	        if (this._meta.length) {
	            description.meta = this._meta;
	        }
	        if (this._examples.length) {
	            description.examples = this._examples;
	        }
	        if (this._unit) {
	            description.unit = this._unit;
	        }
	        var valids = this._valids.values();
	        if (valids.length) {
	            description.valids = valids.map(function (v) {
	                return Ref.isRef(v) ? v.toString() : v;
	            });
	        }
	        var invalids = this._invalids.values();
	        if (invalids.length) {
	            description.invalids = invalids.map(function (v) {
	                return Ref.isRef(v) ? v.toString() : v;
	            });
	        }
	        description.rules = [];
	        for (var _i2 = 0; _i2 < this._tests.length; ++_i2) {
	            var validator = this._tests[_i2];
	            var item = { name: validator.name };
	            if (validator.arg !== void 0) {
	                item.arg = Ref.isRef(validator.arg) ? validator.arg.toString() : validator.arg;
	            }
	            var options = validator.options;
	            if (options) {
	                if (options.hasRef) {
	                    item.arg = {};
	                    var keys = Object.keys(validator.arg);
	                    for (var j = 0; j < keys.length; ++j) {
	                        var key = keys[j];
	                        var value = validator.arg[key];
	                        item.arg[key] = Ref.isRef(value) ? value.toString() : value;
	                    }
	                }
	                if (typeof options.description === 'string') {
	                    item.description = options.description;
	                } else if (typeof options.description === 'function') {
	                    item.description = options.description(item.arg);
	                }
	            }
	            description.rules.push(item);
	        }
	        if (!description.rules.length) {
	            delete description.rules;
	        }
	        var label = this._getLabel();
	        if (label) {
	            description.label = label;
	        }
	        return description;
	    };
	    _class.prototype.label = function label(name) {
	        Hoek.assert(name && typeof name === 'string', 'Label name must be a non-empty string');
	        var obj = this.clone();
	        obj._flags.label = name;
	        return obj;
	    };
	    _class.prototype._getLabel = function _getLabel(def) {
	        return this._flags.label || def;
	    };
	    _createClass(_class, [{
	        key: 'schemaType',
	        get: function get() {
	            return this._type;
	        }
	    }]);
	    return _class;
	}();
	internals.Any.prototype.isImmutable = true;
	internals.Any.prototype.only = internals.Any.prototype.equal = internals.Any.prototype.valid;
	internals.Any.prototype.disallow = internals.Any.prototype.not = internals.Any.prototype.invalid;
	internals.Any.prototype.exist = internals.Any.prototype.required;
	internals._try = function (fn, args) {
	    var err = void 0;
	    var result = void 0;
	    try {
	        result = fn.apply(null, args);
	    } catch (e) {
	        err = e;
	    }
	    return {
	        value: result,
	        error: err
	    };
	};
	internals.concatSettings = function (target, source) {
	    if (!target && !source) {
	        return null;
	    }
	    var obj = _extends({}, target);
	    if (source) {
	        var sKeys = Object.keys(source);
	        for (var i = 0; i < sKeys.length; ++i) {
	            var key = sKeys[i];
	            if (key !== 'language' || !obj.hasOwnProperty(key)) {
	                obj[key] = source[key];
	            } else {
	                obj[key] = Hoek.applyToDefaults(obj[key], source[key]);
	            }
	        }
	    }
	    return obj;
	};
	      }),
	      (function(module, exports, __webpack_require__) {
	                           (function(global) {/*!
	 * The buffer module from node.js, for the browser.
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */
	var base64 = __webpack_require__(30);
	var ieee754 = __webpack_require__(31);
	var isArray = __webpack_require__(32);
	exports.Buffer = Buffer;
	exports.SlowBuffer = SlowBuffer;
	exports.INSPECT_MAX_BYTES = 50;
	Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
	  ? global.TYPED_ARRAY_SUPPORT
	  : typedArraySupport();
	exports.kMaxLength = kMaxLength();
	function typedArraySupport () {
	  try {
	    var arr = new Uint8Array(1);
	    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }};
	    return arr.foo() === 42 &&
	        typeof arr.subarray === 'function' &&
	        arr.subarray(1, 1).byteLength === 0
	  } catch (e) {
	    return false
	  }
	}
	function kMaxLength () {
	  return Buffer.TYPED_ARRAY_SUPPORT
	    ? 0x7fffffff
	    : 0x3fffffff
	}
	function createBuffer (that, length) {
	  if (kMaxLength() < length) {
	    throw new RangeError('Invalid typed array length')
	  }
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    that = new Uint8Array(length);
	    that.__proto__ = Buffer.prototype;
	  } else {
	    if (that === null) {
	      that = new Buffer(length);
	    }
	    that.length = length;
	  }
	  return that
	}
	function Buffer (arg, encodingOrOffset, length) {
	  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
	    return new Buffer(arg, encodingOrOffset, length)
	  }
	  if (typeof arg === 'number') {
	    if (typeof encodingOrOffset === 'string') {
	      throw new Error(
	        'If encoding is specified then the first argument must be a string'
	      )
	    }
	    return allocUnsafe(this, arg)
	  }
	  return from(this, arg, encodingOrOffset, length)
	}
	Buffer.poolSize = 8192;
	Buffer._augment = function (arr) {
	  arr.__proto__ = Buffer.prototype;
	  return arr
	};
	function from (that, value, encodingOrOffset, length) {
	  if (typeof value === 'number') {
	    throw new TypeError('"value" argument must not be a number')
	  }
	  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
	    return fromArrayBuffer(that, value, encodingOrOffset, length)
	  }
	  if (typeof value === 'string') {
	    return fromString(that, value, encodingOrOffset)
	  }
	  return fromObject(that, value)
	}
	Buffer.from = function (value, encodingOrOffset, length) {
	  return from(null, value, encodingOrOffset, length)
	};
	if (Buffer.TYPED_ARRAY_SUPPORT) {
	  Buffer.prototype.__proto__ = Uint8Array.prototype;
	  Buffer.__proto__ = Uint8Array;
	  if (typeof Symbol !== 'undefined' && Symbol.species &&
	      Buffer[Symbol.species] === Buffer) {
	    Object.defineProperty(Buffer, Symbol.species, {
	      value: null,
	      configurable: true
	    });
	  }
	}
	function assertSize (size) {
	  if (typeof size !== 'number') {
	    throw new TypeError('"size" argument must be a number')
	  } else if (size < 0) {
	    throw new RangeError('"size" argument must not be negative')
	  }
	}
	function alloc (that, size, fill, encoding) {
	  assertSize(size);
	  if (size <= 0) {
	    return createBuffer(that, size)
	  }
	  if (fill !== undefined) {
	    return typeof encoding === 'string'
	      ? createBuffer(that, size).fill(fill, encoding)
	      : createBuffer(that, size).fill(fill)
	  }
	  return createBuffer(that, size)
	}
	Buffer.alloc = function (size, fill, encoding) {
	  return alloc(null, size, fill, encoding)
	};
	function allocUnsafe (that, size) {
	  assertSize(size);
	  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0);
	  if (!Buffer.TYPED_ARRAY_SUPPORT) {
	    for (var i = 0; i < size; ++i) {
	      that[i] = 0;
	    }
	  }
	  return that
	}
	Buffer.allocUnsafe = function (size) {
	  return allocUnsafe(null, size)
	};
	Buffer.allocUnsafeSlow = function (size) {
	  return allocUnsafe(null, size)
	};
	function fromString (that, string, encoding) {
	  if (typeof encoding !== 'string' || encoding === '') {
	    encoding = 'utf8';
	  }
	  if (!Buffer.isEncoding(encoding)) {
	    throw new TypeError('"encoding" must be a valid string encoding')
	  }
	  var length = byteLength(string, encoding) | 0;
	  that = createBuffer(that, length);
	  var actual = that.write(string, encoding);
	  if (actual !== length) {
	    that = that.slice(0, actual);
	  }
	  return that
	}
	function fromArrayLike (that, array) {
	  var length = array.length < 0 ? 0 : checked(array.length) | 0;
	  that = createBuffer(that, length);
	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255;
	  }
	  return that
	}
	function fromArrayBuffer (that, array, byteOffset, length) {
	  array.byteLength;
	  if (byteOffset < 0 || array.byteLength < byteOffset) {
	    throw new RangeError('\'offset\' is out of bounds')
	  }
	  if (array.byteLength < byteOffset + (length || 0)) {
	    throw new RangeError('\'length\' is out of bounds')
	  }
	  if (byteOffset === undefined && length === undefined) {
	    array = new Uint8Array(array);
	  } else if (length === undefined) {
	    array = new Uint8Array(array, byteOffset);
	  } else {
	    array = new Uint8Array(array, byteOffset, length);
	  }
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    that = array;
	    that.__proto__ = Buffer.prototype;
	  } else {
	    that = fromArrayLike(that, array);
	  }
	  return that
	}
	function fromObject (that, obj) {
	  if (Buffer.isBuffer(obj)) {
	    var len = checked(obj.length) | 0;
	    that = createBuffer(that, len);
	    if (that.length === 0) {
	      return that
	    }
	    obj.copy(that, 0, 0, len);
	    return that
	  }
	  if (obj) {
	    if ((typeof ArrayBuffer !== 'undefined' &&
	        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
	      if (typeof obj.length !== 'number' || isnan(obj.length)) {
	        return createBuffer(that, 0)
	      }
	      return fromArrayLike(that, obj)
	    }
	    if (obj.type === 'Buffer' && isArray(obj.data)) {
	      return fromArrayLike(that, obj.data)
	    }
	  }
	  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
	}
	function checked (length) {
	  if (length >= kMaxLength()) {
	    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
	                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
	  }
	  return length | 0
	}
	function SlowBuffer (length) {
	  if (+length != length) {
	    length = 0;
	  }
	  return Buffer.alloc(+length)
	}
	Buffer.isBuffer = function isBuffer (b) {
	  return !!(b != null && b._isBuffer)
	};
	Buffer.compare = function compare (a, b) {
	  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
	    throw new TypeError('Arguments must be Buffers')
	  }
	  if (a === b) return 0
	  var x = a.length;
	  var y = b.length;
	  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
	    if (a[i] !== b[i]) {
	      x = a[i];
	      y = b[i];
	      break
	    }
	  }
	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	};
	Buffer.isEncoding = function isEncoding (encoding) {
	  switch (String(encoding).toLowerCase()) {
	    case 'hex':
	    case 'utf8':
	    case 'utf-8':
	    case 'ascii':
	    case 'latin1':
	    case 'binary':
	    case 'base64':
	    case 'ucs2':
	    case 'ucs-2':
	    case 'utf16le':
	    case 'utf-16le':
	      return true
	    default:
	      return false
	  }
	};
	Buffer.concat = function concat (list, length) {
	  if (!isArray(list)) {
	    throw new TypeError('"list" argument must be an Array of Buffers')
	  }
	  if (list.length === 0) {
	    return Buffer.alloc(0)
	  }
	  var i;
	  if (length === undefined) {
	    length = 0;
	    for (i = 0; i < list.length; ++i) {
	      length += list[i].length;
	    }
	  }
	  var buffer = Buffer.allocUnsafe(length);
	  var pos = 0;
	  for (i = 0; i < list.length; ++i) {
	    var buf = list[i];
	    if (!Buffer.isBuffer(buf)) {
	      throw new TypeError('"list" argument must be an Array of Buffers')
	    }
	    buf.copy(buffer, pos);
	    pos += buf.length;
	  }
	  return buffer
	};
	function byteLength (string, encoding) {
	  if (Buffer.isBuffer(string)) {
	    return string.length
	  }
	  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
	      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
	    return string.byteLength
	  }
	  if (typeof string !== 'string') {
	    string = '' + string;
	  }
	  var len = string.length;
	  if (len === 0) return 0
	  var loweredCase = false;
	  for (;;) {
	    switch (encoding) {
	      case 'ascii':
	      case 'latin1':
	      case 'binary':
	        return len
	      case 'utf8':
	      case 'utf-8':
	      case undefined:
	        return utf8ToBytes(string).length
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return len * 2
	      case 'hex':
	        return len >>> 1
	      case 'base64':
	        return base64ToBytes(string).length
	      default:
	        if (loweredCase) return utf8ToBytes(string).length
	        encoding = ('' + encoding).toLowerCase();
	        loweredCase = true;
	    }
	  }
	}
	Buffer.byteLength = byteLength;
	function slowToString (encoding, start, end) {
	  var loweredCase = false;
	  if (start === undefined || start < 0) {
	    start = 0;
	  }
	  if (start > this.length) {
	    return ''
	  }
	  if (end === undefined || end > this.length) {
	    end = this.length;
	  }
	  if (end <= 0) {
	    return ''
	  }
	  end >>>= 0;
	  start >>>= 0;
	  if (end <= start) {
	    return ''
	  }
	  if (!encoding) encoding = 'utf8';
	  while (true) {
	    switch (encoding) {
	      case 'hex':
	        return hexSlice(this, start, end)
	      case 'utf8':
	      case 'utf-8':
	        return utf8Slice(this, start, end)
	      case 'ascii':
	        return asciiSlice(this, start, end)
	      case 'latin1':
	      case 'binary':
	        return latin1Slice(this, start, end)
	      case 'base64':
	        return base64Slice(this, start, end)
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return utf16leSlice(this, start, end)
	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = (encoding + '').toLowerCase();
	        loweredCase = true;
	    }
	  }
	}
	Buffer.prototype._isBuffer = true;
	function swap (b, n, m) {
	  var i = b[n];
	  b[n] = b[m];
	  b[m] = i;
	}
	Buffer.prototype.swap16 = function swap16 () {
	  var len = this.length;
	  if (len % 2 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 16-bits')
	  }
	  for (var i = 0; i < len; i += 2) {
	    swap(this, i, i + 1);
	  }
	  return this
	};
	Buffer.prototype.swap32 = function swap32 () {
	  var len = this.length;
	  if (len % 4 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 32-bits')
	  }
	  for (var i = 0; i < len; i += 4) {
	    swap(this, i, i + 3);
	    swap(this, i + 1, i + 2);
	  }
	  return this
	};
	Buffer.prototype.swap64 = function swap64 () {
	  var len = this.length;
	  if (len % 8 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 64-bits')
	  }
	  for (var i = 0; i < len; i += 8) {
	    swap(this, i, i + 7);
	    swap(this, i + 1, i + 6);
	    swap(this, i + 2, i + 5);
	    swap(this, i + 3, i + 4);
	  }
	  return this
	};
	Buffer.prototype.toString = function toString () {
	  var length = this.length | 0;
	  if (length === 0) return ''
	  if (arguments.length === 0) return utf8Slice(this, 0, length)
	  return slowToString.apply(this, arguments)
	};
	Buffer.prototype.equals = function equals (b) {
	  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
	  if (this === b) return true
	  return Buffer.compare(this, b) === 0
	};
	Buffer.prototype.inspect = function inspect () {
	  var str = '';
	  var max = exports.INSPECT_MAX_BYTES;
	  if (this.length > 0) {
	    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ');
	    if (this.length > max) str += ' ... ';
	  }
	  return '<Buffer ' + str + '>'
	};
	Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
	  if (!Buffer.isBuffer(target)) {
	    throw new TypeError('Argument must be a Buffer')
	  }
	  if (start === undefined) {
	    start = 0;
	  }
	  if (end === undefined) {
	    end = target ? target.length : 0;
	  }
	  if (thisStart === undefined) {
	    thisStart = 0;
	  }
	  if (thisEnd === undefined) {
	    thisEnd = this.length;
	  }
	  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
	    throw new RangeError('out of range index')
	  }
	  if (thisStart >= thisEnd && start >= end) {
	    return 0
	  }
	  if (thisStart >= thisEnd) {
	    return -1
	  }
	  if (start >= end) {
	    return 1
	  }
	  start >>>= 0;
	  end >>>= 0;
	  thisStart >>>= 0;
	  thisEnd >>>= 0;
	  if (this === target) return 0
	  var x = thisEnd - thisStart;
	  var y = end - start;
	  var len = Math.min(x, y);
	  var thisCopy = this.slice(thisStart, thisEnd);
	  var targetCopy = target.slice(start, end);
	  for (var i = 0; i < len; ++i) {
	    if (thisCopy[i] !== targetCopy[i]) {
	      x = thisCopy[i];
	      y = targetCopy[i];
	      break
	    }
	  }
	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	};
	function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
	  if (buffer.length === 0) return -1
	  if (typeof byteOffset === 'string') {
	    encoding = byteOffset;
	    byteOffset = 0;
	  } else if (byteOffset > 0x7fffffff) {
	    byteOffset = 0x7fffffff;
	  } else if (byteOffset < -0x80000000) {
	    byteOffset = -0x80000000;
	  }
	  byteOffset = +byteOffset;
	  if (isNaN(byteOffset)) {
	    byteOffset = dir ? 0 : (buffer.length - 1);
	  }
	  if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
	  if (byteOffset >= buffer.length) {
	    if (dir) return -1
	    else byteOffset = buffer.length - 1;
	  } else if (byteOffset < 0) {
	    if (dir) byteOffset = 0;
	    else return -1
	  }
	  if (typeof val === 'string') {
	    val = Buffer.from(val, encoding);
	  }
	  if (Buffer.isBuffer(val)) {
	    if (val.length === 0) {
	      return -1
	    }
	    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
	  } else if (typeof val === 'number') {
	    val = val & 0xFF;
	    if (Buffer.TYPED_ARRAY_SUPPORT &&
	        typeof Uint8Array.prototype.indexOf === 'function') {
	      if (dir) {
	        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
	      } else {
	        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
	      }
	    }
	    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
	  }
	  throw new TypeError('val must be string, number or Buffer')
	}
	function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
	  var indexSize = 1;
	  var arrLength = arr.length;
	  var valLength = val.length;
	  if (encoding !== undefined) {
	    encoding = String(encoding).toLowerCase();
	    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
	        encoding === 'utf16le' || encoding === 'utf-16le') {
	      if (arr.length < 2 || val.length < 2) {
	        return -1
	      }
	      indexSize = 2;
	      arrLength /= 2;
	      valLength /= 2;
	      byteOffset /= 2;
	    }
	  }
	  function read (buf, i) {
	    if (indexSize === 1) {
	      return buf[i]
	    } else {
	      return buf.readUInt16BE(i * indexSize)
	    }
	  }
	  var i;
	  if (dir) {
	    var foundIndex = -1;
	    for (i = byteOffset; i < arrLength; i++) {
	      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
	        if (foundIndex === -1) foundIndex = i;
	        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
	      } else {
	        if (foundIndex !== -1) i -= i - foundIndex;
	        foundIndex = -1;
	      }
	    }
	  } else {
	    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
	    for (i = byteOffset; i >= 0; i--) {
	      var found = true;
	      for (var j = 0; j < valLength; j++) {
	        if (read(arr, i + j) !== read(val, j)) {
	          found = false;
	          break
	        }
	      }
	      if (found) return i
	    }
	  }
	  return -1
	}
	Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
	  return this.indexOf(val, byteOffset, encoding) !== -1
	};
	Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
	};
	Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
	};
	function hexWrite (buf, string, offset, length) {
	  offset = Number(offset) || 0;
	  var remaining = buf.length - offset;
	  if (!length) {
	    length = remaining;
	  } else {
	    length = Number(length);
	    if (length > remaining) {
	      length = remaining;
	    }
	  }
	  var strLen = string.length;
	  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')
	  if (length > strLen / 2) {
	    length = strLen / 2;
	  }
	  for (var i = 0; i < length; ++i) {
	    var parsed = parseInt(string.substr(i * 2, 2), 16);
	    if (isNaN(parsed)) return i
	    buf[offset + i] = parsed;
	  }
	  return i
	}
	function utf8Write (buf, string, offset, length) {
	  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
	}
	function asciiWrite (buf, string, offset, length) {
	  return blitBuffer(asciiToBytes(string), buf, offset, length)
	}
	function latin1Write (buf, string, offset, length) {
	  return asciiWrite(buf, string, offset, length)
	}
	function base64Write (buf, string, offset, length) {
	  return blitBuffer(base64ToBytes(string), buf, offset, length)
	}
	function ucs2Write (buf, string, offset, length) {
	  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
	}
	Buffer.prototype.write = function write (string, offset, length, encoding) {
	  if (offset === undefined) {
	    encoding = 'utf8';
	    length = this.length;
	    offset = 0;
	  } else if (length === undefined && typeof offset === 'string') {
	    encoding = offset;
	    length = this.length;
	    offset = 0;
	  } else if (isFinite(offset)) {
	    offset = offset | 0;
	    if (isFinite(length)) {
	      length = length | 0;
	      if (encoding === undefined) encoding = 'utf8';
	    } else {
	      encoding = length;
	      length = undefined;
	    }
	  } else {
	    throw new Error(
	      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
	    )
	  }
	  var remaining = this.length - offset;
	  if (length === undefined || length > remaining) length = remaining;
	  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
	    throw new RangeError('Attempt to write outside buffer bounds')
	  }
	  if (!encoding) encoding = 'utf8';
	  var loweredCase = false;
	  for (;;) {
	    switch (encoding) {
	      case 'hex':
	        return hexWrite(this, string, offset, length)
	      case 'utf8':
	      case 'utf-8':
	        return utf8Write(this, string, offset, length)
	      case 'ascii':
	        return asciiWrite(this, string, offset, length)
	      case 'latin1':
	      case 'binary':
	        return latin1Write(this, string, offset, length)
	      case 'base64':
	        return base64Write(this, string, offset, length)
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return ucs2Write(this, string, offset, length)
	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = ('' + encoding).toLowerCase();
	        loweredCase = true;
	    }
	  }
	};
	Buffer.prototype.toJSON = function toJSON () {
	  return {
	    type: 'Buffer',
	    data: Array.prototype.slice.call(this._arr || this, 0)
	  }
	};
	function base64Slice (buf, start, end) {
	  if (start === 0 && end === buf.length) {
	    return base64.fromByteArray(buf)
	  } else {
	    return base64.fromByteArray(buf.slice(start, end))
	  }
	}
	function utf8Slice (buf, start, end) {
	  end = Math.min(buf.length, end);
	  var res = [];
	  var i = start;
	  while (i < end) {
	    var firstByte = buf[i];
	    var codePoint = null;
	    var bytesPerSequence = (firstByte > 0xEF) ? 4
	      : (firstByte > 0xDF) ? 3
	      : (firstByte > 0xBF) ? 2
	      : 1;
	    if (i + bytesPerSequence <= end) {
	      var secondByte, thirdByte, fourthByte, tempCodePoint;
	      switch (bytesPerSequence) {
	        case 1:
	          if (firstByte < 0x80) {
	            codePoint = firstByte;
	          }
	          break
	        case 2:
	          secondByte = buf[i + 1];
	          if ((secondByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F);
	            if (tempCodePoint > 0x7F) {
	              codePoint = tempCodePoint;
	            }
	          }
	          break
	        case 3:
	          secondByte = buf[i + 1];
	          thirdByte = buf[i + 2];
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F);
	            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
	              codePoint = tempCodePoint;
	            }
	          }
	          break
	        case 4:
	          secondByte = buf[i + 1];
	          thirdByte = buf[i + 2];
	          fourthByte = buf[i + 3];
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F);
	            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
	              codePoint = tempCodePoint;
	            }
	          }
	      }
	    }
	    if (codePoint === null) {
	      codePoint = 0xFFFD;
	      bytesPerSequence = 1;
	    } else if (codePoint > 0xFFFF) {
	      codePoint -= 0x10000;
	      res.push(codePoint >>> 10 & 0x3FF | 0xD800);
	      codePoint = 0xDC00 | codePoint & 0x3FF;
	    }
	    res.push(codePoint);
	    i += bytesPerSequence;
	  }
	  return decodeCodePointsArray(res)
	}
	var MAX_ARGUMENTS_LENGTH = 0x1000;
	function decodeCodePointsArray (codePoints) {
	  var len = codePoints.length;
	  if (len <= MAX_ARGUMENTS_LENGTH) {
	    return String.fromCharCode.apply(String, codePoints)
	  }
	  var res = '';
	  var i = 0;
	  while (i < len) {
	    res += String.fromCharCode.apply(
	      String,
	      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
	    );
	  }
	  return res
	}
	function asciiSlice (buf, start, end) {
	  var ret = '';
	  end = Math.min(buf.length, end);
	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i] & 0x7F);
	  }
	  return ret
	}
	function latin1Slice (buf, start, end) {
	  var ret = '';
	  end = Math.min(buf.length, end);
	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i]);
	  }
	  return ret
	}
	function hexSlice (buf, start, end) {
	  var len = buf.length;
	  if (!start || start < 0) start = 0;
	  if (!end || end < 0 || end > len) end = len;
	  var out = '';
	  for (var i = start; i < end; ++i) {
	    out += toHex(buf[i]);
	  }
	  return out
	}
	function utf16leSlice (buf, start, end) {
	  var bytes = buf.slice(start, end);
	  var res = '';
	  for (var i = 0; i < bytes.length; i += 2) {
	    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
	  }
	  return res
	}
	Buffer.prototype.slice = function slice (start, end) {
	  var len = this.length;
	  start = ~~start;
	  end = end === undefined ? len : ~~end;
	  if (start < 0) {
	    start += len;
	    if (start < 0) start = 0;
	  } else if (start > len) {
	    start = len;
	  }
	  if (end < 0) {
	    end += len;
	    if (end < 0) end = 0;
	  } else if (end > len) {
	    end = len;
	  }
	  if (end < start) end = start;
	  var newBuf;
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    newBuf = this.subarray(start, end);
	    newBuf.__proto__ = Buffer.prototype;
	  } else {
	    var sliceLen = end - start;
	    newBuf = new Buffer(sliceLen, undefined);
	    for (var i = 0; i < sliceLen; ++i) {
	      newBuf[i] = this[i + start];
	    }
	  }
	  return newBuf
	};
	function checkOffset (offset, ext, length) {
	  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
	  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
	}
	Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0;
	  byteLength = byteLength | 0;
	  if (!noAssert) checkOffset(offset, byteLength, this.length);
	  var val = this[offset];
	  var mul = 1;
	  var i = 0;
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul;
	  }
	  return val
	};
	Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0;
	  byteLength = byteLength | 0;
	  if (!noAssert) {
	    checkOffset(offset, byteLength, this.length);
	  }
	  var val = this[offset + --byteLength];
	  var mul = 1;
	  while (byteLength > 0 && (mul *= 0x100)) {
	    val += this[offset + --byteLength] * mul;
	  }
	  return val
	};
	Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length);
	  return this[offset]
	};
	Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length);
	  return this[offset] | (this[offset + 1] << 8)
	};
	Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length);
	  return (this[offset] << 8) | this[offset + 1]
	};
	Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length);
	  return ((this[offset]) |
	      (this[offset + 1] << 8) |
	      (this[offset + 2] << 16)) +
	      (this[offset + 3] * 0x1000000)
	};
	Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length);
	  return (this[offset] * 0x1000000) +
	    ((this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    this[offset + 3])
	};
	Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0;
	  byteLength = byteLength | 0;
	  if (!noAssert) checkOffset(offset, byteLength, this.length);
	  var val = this[offset];
	  var mul = 1;
	  var i = 0;
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul;
	  }
	  mul *= 0x80;
	  if (val >= mul) val -= Math.pow(2, 8 * byteLength);
	  return val
	};
	Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0;
	  byteLength = byteLength | 0;
	  if (!noAssert) checkOffset(offset, byteLength, this.length);
	  var i = byteLength;
	  var mul = 1;
	  var val = this[offset + --i];
	  while (i > 0 && (mul *= 0x100)) {
	    val += this[offset + --i] * mul;
	  }
	  mul *= 0x80;
	  if (val >= mul) val -= Math.pow(2, 8 * byteLength);
	  return val
	};
	Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length);
	  if (!(this[offset] & 0x80)) return (this[offset])
	  return ((0xff - this[offset] + 1) * -1)
	};
	Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length);
	  var val = this[offset] | (this[offset + 1] << 8);
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	};
	Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length);
	  var val = this[offset + 1] | (this[offset] << 8);
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	};
	Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length);
	  return (this[offset]) |
	    (this[offset + 1] << 8) |
	    (this[offset + 2] << 16) |
	    (this[offset + 3] << 24)
	};
	Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length);
	  return (this[offset] << 24) |
	    (this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    (this[offset + 3])
	};
	Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length);
	  return ieee754.read(this, offset, true, 23, 4)
	};
	Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length);
	  return ieee754.read(this, offset, false, 23, 4)
	};
	Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length);
	  return ieee754.read(this, offset, true, 52, 8)
	};
	Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length);
	  return ieee754.read(this, offset, false, 52, 8)
	};
	function checkInt (buf, value, offset, ext, max, min) {
	  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
	  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
	  if (offset + ext > buf.length) throw new RangeError('Index out of range')
	}
	Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  byteLength = byteLength | 0;
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
	    checkInt(this, value, offset, byteLength, maxBytes, 0);
	  }
	  var mul = 1;
	  var i = 0;
	  this[offset] = value & 0xFF;
	  while (++i < byteLength && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF;
	  }
	  return offset + byteLength
	};
	Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  byteLength = byteLength | 0;
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
	    checkInt(this, value, offset, byteLength, maxBytes, 0);
	  }
	  var i = byteLength - 1;
	  var mul = 1;
	  this[offset + i] = value & 0xFF;
	  while (--i >= 0 && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF;
	  }
	  return offset + byteLength
	};
	Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
	  this[offset] = (value & 0xff);
	  return offset + 1
	};
	function objectWriteUInt16 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffff + value + 1;
	  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
	    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
	      (littleEndian ? i : 1 - i) * 8;
	  }
	}
	Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff);
	    this[offset + 1] = (value >>> 8);
	  } else {
	    objectWriteUInt16(this, value, offset, true);
	  }
	  return offset + 2
	};
	Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8);
	    this[offset + 1] = (value & 0xff);
	  } else {
	    objectWriteUInt16(this, value, offset, false);
	  }
	  return offset + 2
	};
	function objectWriteUInt32 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffffffff + value + 1;
	  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
	    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff;
	  }
	}
	Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset + 3] = (value >>> 24);
	    this[offset + 2] = (value >>> 16);
	    this[offset + 1] = (value >>> 8);
	    this[offset] = (value & 0xff);
	  } else {
	    objectWriteUInt32(this, value, offset, true);
	  }
	  return offset + 4
	};
	Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24);
	    this[offset + 1] = (value >>> 16);
	    this[offset + 2] = (value >>> 8);
	    this[offset + 3] = (value & 0xff);
	  } else {
	    objectWriteUInt32(this, value, offset, false);
	  }
	  return offset + 4
	};
	Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1);
	    checkInt(this, value, offset, byteLength, limit - 1, -limit);
	  }
	  var i = 0;
	  var mul = 1;
	  var sub = 0;
	  this[offset] = value & 0xFF;
	  while (++i < byteLength && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
	      sub = 1;
	    }
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF;
	  }
	  return offset + byteLength
	};
	Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1);
	    checkInt(this, value, offset, byteLength, limit - 1, -limit);
	  }
	  var i = byteLength - 1;
	  var mul = 1;
	  var sub = 0;
	  this[offset + i] = value & 0xFF;
	  while (--i >= 0 && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
	      sub = 1;
	    }
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF;
	  }
	  return offset + byteLength
	};
	Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
	  if (value < 0) value = 0xff + value + 1;
	  this[offset] = (value & 0xff);
	  return offset + 1
	};
	Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff);
	    this[offset + 1] = (value >>> 8);
	  } else {
	    objectWriteUInt16(this, value, offset, true);
	  }
	  return offset + 2
	};
	Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8);
	    this[offset + 1] = (value & 0xff);
	  } else {
	    objectWriteUInt16(this, value, offset, false);
	  }
	  return offset + 2
	};
	Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff);
	    this[offset + 1] = (value >>> 8);
	    this[offset + 2] = (value >>> 16);
	    this[offset + 3] = (value >>> 24);
	  } else {
	    objectWriteUInt32(this, value, offset, true);
	  }
	  return offset + 4
	};
	Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
	  if (value < 0) value = 0xffffffff + value + 1;
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24);
	    this[offset + 1] = (value >>> 16);
	    this[offset + 2] = (value >>> 8);
	    this[offset + 3] = (value & 0xff);
	  } else {
	    objectWriteUInt32(this, value, offset, false);
	  }
	  return offset + 4
	};
	function checkIEEE754 (buf, value, offset, ext, max, min) {
	  if (offset + ext > buf.length) throw new RangeError('Index out of range')
	  if (offset < 0) throw new RangeError('Index out of range')
	}
	function writeFloat (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38);
	  }
	  ieee754.write(buf, value, offset, littleEndian, 23, 4);
	  return offset + 4
	}
	Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, true, noAssert)
	};
	Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, false, noAssert)
	};
	function writeDouble (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308);
	  }
	  ieee754.write(buf, value, offset, littleEndian, 52, 8);
	  return offset + 8
	}
	Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, true, noAssert)
	};
	Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, false, noAssert)
	};
	Buffer.prototype.copy = function copy (target, targetStart, start, end) {
	  if (!start) start = 0;
	  if (!end && end !== 0) end = this.length;
	  if (targetStart >= target.length) targetStart = target.length;
	  if (!targetStart) targetStart = 0;
	  if (end > 0 && end < start) end = start;
	  if (end === start) return 0
	  if (target.length === 0 || this.length === 0) return 0
	  if (targetStart < 0) {
	    throw new RangeError('targetStart out of bounds')
	  }
	  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
	  if (end < 0) throw new RangeError('sourceEnd out of bounds')
	  if (end > this.length) end = this.length;
	  if (target.length - targetStart < end - start) {
	    end = target.length - targetStart + start;
	  }
	  var len = end - start;
	  var i;
	  if (this === target && start < targetStart && targetStart < end) {
	    for (i = len - 1; i >= 0; --i) {
	      target[i + targetStart] = this[i + start];
	    }
	  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
	    for (i = 0; i < len; ++i) {
	      target[i + targetStart] = this[i + start];
	    }
	  } else {
	    Uint8Array.prototype.set.call(
	      target,
	      this.subarray(start, start + len),
	      targetStart
	    );
	  }
	  return len
	};
	Buffer.prototype.fill = function fill (val, start, end, encoding) {
	  if (typeof val === 'string') {
	    if (typeof start === 'string') {
	      encoding = start;
	      start = 0;
	      end = this.length;
	    } else if (typeof end === 'string') {
	      encoding = end;
	      end = this.length;
	    }
	    if (val.length === 1) {
	      var code = val.charCodeAt(0);
	      if (code < 256) {
	        val = code;
	      }
	    }
	    if (encoding !== undefined && typeof encoding !== 'string') {
	      throw new TypeError('encoding must be a string')
	    }
	    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
	      throw new TypeError('Unknown encoding: ' + encoding)
	    }
	  } else if (typeof val === 'number') {
	    val = val & 255;
	  }
	  if (start < 0 || this.length < start || this.length < end) {
	    throw new RangeError('Out of range index')
	  }
	  if (end <= start) {
	    return this
	  }
	  start = start >>> 0;
	  end = end === undefined ? this.length : end >>> 0;
	  if (!val) val = 0;
	  var i;
	  if (typeof val === 'number') {
	    for (i = start; i < end; ++i) {
	      this[i] = val;
	    }
	  } else {
	    var bytes = Buffer.isBuffer(val)
	      ? val
	      : utf8ToBytes(new Buffer(val, encoding).toString());
	    var len = bytes.length;
	    for (i = 0; i < end - start; ++i) {
	      this[i + start] = bytes[i % len];
	    }
	  }
	  return this
	};
	var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;
	function base64clean (str) {
	  str = stringtrim(str).replace(INVALID_BASE64_RE, '');
	  if (str.length < 2) return ''
	  while (str.length % 4 !== 0) {
	    str = str + '=';
	  }
	  return str
	}
	function stringtrim (str) {
	  if (str.trim) return str.trim()
	  return str.replace(/^\s+|\s+$/g, '')
	}
	function toHex (n) {
	  if (n < 16) return '0' + n.toString(16)
	  return n.toString(16)
	}
	function utf8ToBytes (string, units) {
	  units = units || Infinity;
	  var codePoint;
	  var length = string.length;
	  var leadSurrogate = null;
	  var bytes = [];
	  for (var i = 0; i < length; ++i) {
	    codePoint = string.charCodeAt(i);
	    if (codePoint > 0xD7FF && codePoint < 0xE000) {
	      if (!leadSurrogate) {
	        if (codePoint > 0xDBFF) {
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
	          continue
	        } else if (i + 1 === length) {
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
	          continue
	        }
	        leadSurrogate = codePoint;
	        continue
	      }
	      if (codePoint < 0xDC00) {
	        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
	        leadSurrogate = codePoint;
	        continue
	      }
	      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
	    } else if (leadSurrogate) {
	      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
	    }
	    leadSurrogate = null;
	    if (codePoint < 0x80) {
	      if ((units -= 1) < 0) break
	      bytes.push(codePoint);
	    } else if (codePoint < 0x800) {
	      if ((units -= 2) < 0) break
	      bytes.push(
	        codePoint >> 0x6 | 0xC0,
	        codePoint & 0x3F | 0x80
	      );
	    } else if (codePoint < 0x10000) {
	      if ((units -= 3) < 0) break
	      bytes.push(
	        codePoint >> 0xC | 0xE0,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      );
	    } else if (codePoint < 0x110000) {
	      if ((units -= 4) < 0) break
	      bytes.push(
	        codePoint >> 0x12 | 0xF0,
	        codePoint >> 0xC & 0x3F | 0x80,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      );
	    } else {
	      throw new Error('Invalid code point')
	    }
	  }
	  return bytes
	}
	function asciiToBytes (str) {
	  var byteArray = [];
	  for (var i = 0; i < str.length; ++i) {
	    byteArray.push(str.charCodeAt(i) & 0xFF);
	  }
	  return byteArray
	}
	function utf16leToBytes (str, units) {
	  var c, hi, lo;
	  var byteArray = [];
	  for (var i = 0; i < str.length; ++i) {
	    if ((units -= 2) < 0) break
	    c = str.charCodeAt(i);
	    hi = c >> 8;
	    lo = c % 256;
	    byteArray.push(lo);
	    byteArray.push(hi);
	  }
	  return byteArray
	}
	function base64ToBytes (str) {
	  return base64.toByteArray(base64clean(str))
	}
	function blitBuffer (src, dst, offset, length) {
	  for (var i = 0; i < length; ++i) {
	    if ((i + offset >= dst.length) || (i >= src.length)) break
	    dst[i + offset] = src[i];
	  }
	  return i
	}
	function isnan (val) {
	  return val !== val
	}
	                           }.call(exports, __webpack_require__(7)));
	      }),
	      (function(module, exports, __webpack_require__) {
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	var Hoek = __webpack_require__(0);
	var Ref = __webpack_require__(1);
	exports.schema = function (Joi, config) {
	    if (config !== undefined && config !== null && (typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object') {
	        if (config.isJoi) {
	            return config;
	        }
	        if (Array.isArray(config)) {
	            return Joi.alternatives().try(config);
	        }
	        if (config instanceof RegExp) {
	            return Joi.string().regex(config);
	        }
	        if (config instanceof Date) {
	            return Joi.date().valid(config);
	        }
	        return Joi.object().keys(config);
	    }
	    if (typeof config === 'string') {
	        return Joi.string().valid(config);
	    }
	    if (typeof config === 'number') {
	        return Joi.number().valid(config);
	    }
	    if (typeof config === 'boolean') {
	        return Joi.boolean().valid(config);
	    }
	    if (Ref.isRef(config)) {
	        return Joi.valid(config);
	    }
	    Hoek.assert(config === null, 'Invalid schema content:', config);
	    return Joi.valid(null);
	};
	exports.ref = function (id) {
	    return Ref.isRef(id) ? id : Ref.create(id);
	};
	      }),
	      (function(module, exports) {
	var process = module.exports = {};
	var cachedSetTimeout;
	var cachedClearTimeout;
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ());
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        return setTimeout(fun, 0);
	    }
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        return clearTimeout(marker);
	    }
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = '';
	process.versions = {};
	function noop() {}
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;
	process.listeners = function (name) { return [] };
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };
	      }),
	      (function(module, exports, __webpack_require__) {
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	var Hoek = __webpack_require__(0);
	var Language = __webpack_require__(17);
	var internals = {
	    annotations: Symbol('joi-annotations')
	};
	internals.stringify = function (value, wrapArrays) {
	    var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
	    if (value === null) {
	        return 'null';
	    }
	    if (type === 'string') {
	        return value;
	    }
	    if (value instanceof exports.Err || type === 'function' || type === 'symbol') {
	        return value.toString();
	    }
	    if (type === 'object') {
	        if (Array.isArray(value)) {
	            var partial = '';
	            for (var i = 0; i < value.length; ++i) {
	                partial = partial + (partial.length ? ', ' : '') + internals.stringify(value[i], wrapArrays);
	            }
	            return wrapArrays ? '[' + partial + ']' : partial;
	        }
	        return value.toString();
	    }
	    return JSON.stringify(value);
	};
	exports.Err = function () {
	    function _class(type, context, state, options, flags, message, template) {
	        _classCallCheck(this, _class);
	        this.isJoi = true;
	        this.type = type;
	        this.context = context || {};
	        this.context.key = state.path[state.path.length - 1];
	        this.context.label = state.key;
	        this.path = state.path;
	        this.options = options;
	        this.flags = flags;
	        this.message = message;
	        this.template = template;
	        var localized = this.options.language;
	        if (this.flags.label) {
	            this.context.label = this.flags.label;
	        } else if (localized && (
	        this.context.label === '' || this.context.label === null)) {
	            this.context.label = localized.root || Language.errors.root;
	        }
	    }
	    _class.prototype.toString = function toString() {
	        var _this = this;
	        if (this.message) {
	            return this.message;
	        }
	        var format = void 0;
	        if (this.template) {
	            format = this.template;
	        }
	        var localized = this.options.language;
	        format = format || Hoek.reach(localized, this.type) || Hoek.reach(Language.errors, this.type);
	        if (format === undefined) {
	            return 'Error code "' + this.type + '" is not defined, your custom type is missing the correct language definition';
	        }
	        var wrapArrays = Hoek.reach(localized, 'messages.wrapArrays');
	        if (typeof wrapArrays !== 'boolean') {
	            wrapArrays = Language.errors.messages.wrapArrays;
	        }
	        if (format === null) {
	            var childrenString = internals.stringify(this.context.reason, wrapArrays);
	            if (wrapArrays) {
	                return childrenString.slice(1, -1);
	            }
	            return childrenString;
	        }
	        var hasKey = /\{\{\!?label\}\}/.test(format);
	        var skipKey = format.length > 2 && format[0] === '!' && format[1] === '!';
	        if (skipKey) {
	            format = format.slice(2);
	        }
	        if (!hasKey && !skipKey) {
	            var localizedKey = Hoek.reach(localized, 'key');
	            if (typeof localizedKey === 'string') {
	                format = localizedKey + format;
	            } else {
	                format = Hoek.reach(Language.errors, 'key') + format;
	            }
	        }
	        return format.replace(/\{\{(\!?)([^}]+)\}\}/g, function ($0, isSecure, name) {
	            var value = Hoek.reach(_this.context, name);
	            var normalized = internals.stringify(value, wrapArrays);
	            return isSecure && _this.options.escapeHtml ? Hoek.escapeHtml(normalized) : normalized;
	        });
	    };
	    return _class;
	}();
	exports.create = function (type, context, state, options, flags, message, template) {
	    return new exports.Err(type, context, state, options, flags, message, template);
	};
	exports.process = function (errors, object) {
	    if (!errors || !errors.length) {
	        return null;
	    }
	    var message = '';
	    var details = [];
	    var processErrors = function processErrors(localErrors, parent) {
	        for (var i = 0; i < localErrors.length; ++i) {
	            var item = localErrors[i];
	            if (item instanceof Error) {
	                return item;
	            }
	            if (item.flags.error && typeof item.flags.error !== 'function') {
	                return item.flags.error;
	            }
	            var itemMessage = void 0;
	            if (parent === undefined) {
	                itemMessage = item.toString();
	                message = message + (message ? '. ' : '') + itemMessage;
	            }
	            if (item.context.reason && item.context.reason.length) {
	                var _override = processErrors(item.context.reason, item.path);
	                if (_override) {
	                    return _override;
	                }
	            } else {
	                details.push({
	                    message: itemMessage || item.toString(),
	                    path: item.path,
	                    type: item.type,
	                    context: item.context
	                });
	            }
	        }
	    };
	    var override = processErrors(errors);
	    if (override) {
	        return override;
	    }
	    var error = new Error(message);
	    error.isJoi = true;
	    error.name = 'ValidationError';
	    error.details = details;
	    error._object = object;
	    error.annotate = internals.annotate;
	    return error;
	};
	internals.safeStringify = function (obj, spaces) {
	    return JSON.stringify(obj, internals.serializer(), spaces);
	};
	internals.serializer = function () {
	    var keys = [];
	    var stack = [];
	    var cycleReplacer = function cycleReplacer(key, value) {
	        if (stack[0] === value) {
	            return '[Circular ~]';
	        }
	        return '[Circular ~.' + keys.slice(0, stack.indexOf(value)).join('.') + ']';
	    };
	    return function (key, value) {
	        if (stack.length > 0) {
	            var thisPos = stack.indexOf(this);
	            if (~thisPos) {
	                stack.length = thisPos + 1;
	                keys.length = thisPos + 1;
	                keys[thisPos] = key;
	            } else {
	                stack.push(this);
	                keys.push(key);
	            }
	            if (~stack.indexOf(value)) {
	                value = cycleReplacer.call(this, key, value);
	            }
	        } else {
	            stack.push(value);
	        }
	        if (value) {
	            var annotations = value[internals.annotations];
	            if (annotations) {
	                if (Array.isArray(value)) {
	                    var annotated = [];
	                    for (var i = 0; i < value.length; ++i) {
	                        if (annotations.errors[i]) {
	                            annotated.push('_$idx$_' + annotations.errors[i].sort().join(', ') + '_$end$_');
	                        }
	                        annotated.push(value[i]);
	                    }
	                    value = annotated;
	                } else {
	                    var errorKeys = Object.keys(annotations.errors);
	                    for (var _i = 0; _i < errorKeys.length; ++_i) {
	                        var errorKey = errorKeys[_i];
	                        value[errorKey + '_$key$_' + annotations.errors[errorKey].sort().join(', ') + '_$end$_'] = value[errorKey];
	                        value[errorKey] = undefined;
	                    }
	                    var missingKeys = Object.keys(annotations.missing);
	                    for (var _i2 = 0; _i2 < missingKeys.length; ++_i2) {
	                        var missingKey = missingKeys[_i2];
	                        value['_$miss$_' + missingKey + '|' + annotations.missing[missingKey] + '_$end$_'] = '__missing__';
	                    }
	                }
	                return value;
	            }
	        }
	        if (value === Infinity || value === -Infinity || Number.isNaN(value) || typeof value === 'function' || (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'symbol') {
	            return '[' + value.toString() + ']';
	        }
	        return value;
	    };
	};
	internals.annotate = function (stripColorCodes) {
	    var redFgEscape = stripColorCodes ? '' : '\x1B[31m';
	    var redBgEscape = stripColorCodes ? '' : '\x1B[41m';
	    var endColor = stripColorCodes ? '' : '\x1B[0m';
	    if (_typeof(this._object) !== 'object') {
	        return this.details[0].message;
	    }
	    var obj = Hoek.clone(this._object || {});
	    for (var i = this.details.length - 1; i >= 0; --i) {
	        var pos = i + 1;
	        var error = this.details[i];
	        var path = error.path;
	        var ref = obj;
	        for (var j = 0;; ++j) {
	            var seg = path[j];
	            if (ref.isImmutable) {
	                ref = ref.clone();
	            }
	            if (j + 1 < path.length && ref[seg] && typeof ref[seg] !== 'string') {
	                ref = ref[seg];
	            } else {
	                var refAnnotations = ref[internals.annotations] = ref[internals.annotations] || { errors: {}, missing: {} };
	                var value = ref[seg];
	                var cacheKey = seg || error.context.label;
	                if (value !== undefined) {
	                    refAnnotations.errors[cacheKey] = refAnnotations.errors[cacheKey] || [];
	                    refAnnotations.errors[cacheKey].push(pos);
	                } else {
	                    refAnnotations.missing[cacheKey] = pos;
	                }
	                break;
	            }
	        }
	    }
	    var replacers = {
	        key: /_\$key\$_([, \d]+)_\$end\$_\"/g,
	        missing: /\"_\$miss\$_([^\|]+)\|(\d+)_\$end\$_\"\: \"__missing__\"/g,
	        arrayIndex: /\s*\"_\$idx\$_([, \d]+)_\$end\$_\",?\n(.*)/g,
	        specials: /"\[(NaN|Symbol.*|-?Infinity|function.*|\(.*)\]"/g
	    };
	    var message = internals.safeStringify(obj, 2).replace(replacers.key, function ($0, $1) {
	        return '" ' + redFgEscape + '[' + $1 + ']' + endColor;
	    }).replace(replacers.missing, function ($0, $1, $2) {
	        return redBgEscape + '"' + $1 + '"' + endColor + redFgEscape + ' [' + $2 + ']: -- missing --' + endColor;
	    }).replace(replacers.arrayIndex, function ($0, $1, $2) {
	        return '\n' + $2 + ' ' + redFgEscape + '[' + $1 + ']' + endColor;
	    }).replace(replacers.specials, function ($0, $1) {
	        return $1;
	    });
	    message = message + '\n' + redFgEscape;
	    for (var _i3 = 0; _i3 < this.details.length; ++_i3) {
	        var _pos = _i3 + 1;
	        message = message + '\n[' + _pos + '] ' + this.details[_i3].message;
	    }
	    message = message + endColor;
	    return message;
	};
	      }),
	      (function(module, exports) {
	var g;
	g = (function() {
		return this;
	})();
	try {
		g = g || Function("return this")() || (0, eval)("this");
	} catch(e) {
		if(typeof window === "object")
			g = window;
	}
	module.exports = g;
	      }),
	      (function(module, exports, __webpack_require__) {
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	var Hoek = __webpack_require__(0);
	var Any = __webpack_require__(2);
	var Cast = __webpack_require__(4);
	var Errors = __webpack_require__(6);
	var Lazy = __webpack_require__(23);
	var Ref = __webpack_require__(1);
	var internals = {
	    alternatives: __webpack_require__(10),
	    array: __webpack_require__(19),
	    boolean: __webpack_require__(21),
	    binary: __webpack_require__(20),
	    date: __webpack_require__(11),
	    func: __webpack_require__(22),
	    number: __webpack_require__(24),
	    object: __webpack_require__(12),
	    string: __webpack_require__(25)
	};
	internals.applyDefaults = function (schema) {
	    Hoek.assert(this, 'Must be invoked on a Joi instance.');
	    if (this._defaults) {
	        schema = this._defaults(schema);
	    }
	    schema._currentJoi = this;
	    return schema;
	};
	internals.root = function () {
	    var any = new Any();
	    var root = any.clone();
	    Any.prototype._currentJoi = root;
	    root._currentJoi = root;
	    root.any = function () {
	        Hoek.assert(arguments.length === 0, 'Joi.any() does not allow arguments.');
	        return internals.applyDefaults.call(this, any);
	    };
	    root.alternatives = root.alt = function () {
	        var alternatives = internals.applyDefaults.call(this, internals.alternatives);
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }
	        return args.length ? alternatives.try.apply(alternatives, args) : alternatives;
	    };
	    root.array = function () {
	        Hoek.assert(arguments.length === 0, 'Joi.array() does not allow arguments.');
	        return internals.applyDefaults.call(this, internals.array);
	    };
	    root.boolean = root.bool = function () {
	        Hoek.assert(arguments.length === 0, 'Joi.boolean() does not allow arguments.');
	        return internals.applyDefaults.call(this, internals.boolean);
	    };
	    root.binary = function () {
	        Hoek.assert(arguments.length === 0, 'Joi.binary() does not allow arguments.');
	        return internals.applyDefaults.call(this, internals.binary);
	    };
	    root.date = function () {
	        Hoek.assert(arguments.length === 0, 'Joi.date() does not allow arguments.');
	        return internals.applyDefaults.call(this, internals.date);
	    };
	    root.func = function () {
	        Hoek.assert(arguments.length === 0, 'Joi.func() does not allow arguments.');
	        return internals.applyDefaults.call(this, internals.func);
	    };
	    root.number = function () {
	        Hoek.assert(arguments.length === 0, 'Joi.number() does not allow arguments.');
	        return internals.applyDefaults.call(this, internals.number);
	    };
	    root.object = function () {
	        var object = internals.applyDefaults.call(this, internals.object);
	        return arguments.length ? object.keys.apply(object, arguments) : object;
	    };
	    root.string = function () {
	        Hoek.assert(arguments.length === 0, 'Joi.string() does not allow arguments.');
	        return internals.applyDefaults.call(this, internals.string);
	    };
	    root.ref = function () {
	        return Ref.create.apply(Ref, arguments);
	    };
	    root.isRef = function (ref) {
	        return Ref.isRef(ref);
	    };
	    root.validate = function (value)                                     {
	        var _ref;
	        var last = (_ref = (arguments.length <= 1 ? 0 : arguments.length - 1) - 1 + 1, arguments.length <= _ref ? undefined : arguments[_ref]);
	        var callback = typeof last === 'function' ? last : null;
	        var count = (arguments.length <= 1 ? 0 : arguments.length - 1) - (callback ? 1 : 0);
	        if (count === 0) {
	            return any.validate(value, callback);
	        }
	        var options = count === 2 ? arguments.length <= 2 ? undefined : arguments[2] : {};
	        var schema = root.compile(arguments.length <= 1 ? undefined : arguments[1]);
	        return schema._validateWithOptions(value, options, callback);
	    };
	    root.describe = function () {
	        var schema = arguments.length ? root.compile(arguments.length <= 0 ? undefined : arguments[0]) : any;
	        return schema.describe();
	    };
	    root.compile = function (schema) {
	        try {
	            return Cast.schema(this, schema);
	        } catch (err) {
	            if (err.hasOwnProperty('path')) {
	                err.message = err.message + '(' + err.path + ')';
	            }
	            throw err;
	        }
	    };
	    root.assert = function (value, schema, message) {
	        root.attempt(value, schema, message);
	    };
	    root.attempt = function (value, schema, message) {
	        var result = root.validate(value, schema);
	        var error = result.error;
	        if (error) {
	            if (!message) {
	                if (typeof error.annotate === 'function') {
	                    error.message = error.annotate();
	                }
	                throw error;
	            }
	            if (!(message instanceof Error)) {
	                if (typeof error.annotate === 'function') {
	                    error.message = message + ' ' + error.annotate();
	                }
	                throw error;
	            }
	            throw message;
	        }
	        return result.value;
	    };
	    root.reach = function (schema, path) {
	        Hoek.assert(schema && schema instanceof Any, 'you must provide a joi schema');
	        Hoek.assert(typeof path === 'string', 'path must be a string');
	        if (path === '') {
	            return schema;
	        }
	        var parts = path.split('.');
	        var children = schema._inner.children;
	        if (!children) {
	            return;
	        }
	        var key = parts[0];
	        for (var i = 0; i < children.length; ++i) {
	            var child = children[i];
	            if (child.key === key) {
	                return this.reach(child.schema, path.substr(key.length + 1));
	            }
	        }
	    };
	    root.lazy = function (fn) {
	        return Lazy.set(fn);
	    };
	    root.defaults = function (fn) {
	        var _this = this;
	        Hoek.assert(typeof fn === 'function', 'Defaults must be a function');
	        var joi = Object.create(this.any());
	        joi = fn(joi);
	        Hoek.assert(joi && joi instanceof this.constructor, 'defaults() must return a schema');
	        _extends(joi, this, joi.clone());
	        joi._defaults = function (schema) {
	            if (_this._defaults) {
	                schema = _this._defaults(schema);
	                Hoek.assert(schema instanceof _this.constructor, 'defaults() must return a schema');
	            }
	            schema = fn(schema);
	            Hoek.assert(schema instanceof _this.constructor, 'defaults() must return a schema');
	            return schema;
	        };
	        return joi;
	    };
	    root.extend = function () {
	        var _this2 = this;
	        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	            args[_key2] = arguments[_key2];
	        }
	        var extensions = Hoek.flatten(args);
	        Hoek.assert(extensions.length > 0, 'You need to provide at least one extension');
	        this.assert(extensions, root.extensionsSchema);
	        var joi = Object.create(this.any());
	        _extends(joi, this);
	        var _loop = function _loop(i) {
	            var extension = extensions[i];
	            if (typeof extension === 'function') {
	                extension = extension(joi);
	            }
	            _this2.assert(extension, root.extensionSchema);
	            var base = (extension.base || _this2.any()).clone();
	            var ctor = base.constructor;
	            var type = function (_ctor) {
	                _inherits(type, _ctor);
	                function type() {
	                    _classCallCheck(this, type);
	                    var _this3 = _possibleConstructorReturn(this, _ctor.call(this));
	                    if (extension.base) {
	                        _extends(_this3, base);
	                    }
	                    _this3._type = extension.name;
	                    if (extension.language) {
	                        _this3._settings = _this3._settings || { language: {} };
	                        _this3._settings.language = Hoek.applyToDefaults(_this3._settings.language, _defineProperty({}, extension.name, extension.language));
	                    }
	                    return _this3;
	                }
	                return type;
	            }(ctor);
	            if (extension.coerce) {
	                type.prototype._coerce = function (value, state, options) {
	                    if (ctor.prototype._coerce) {
	                        var baseRet = ctor.prototype._coerce.call(this, value, state, options);
	                        if (baseRet.errors) {
	                            return baseRet;
	                        }
	                        value = baseRet.value;
	                    }
	                    var ret = extension.coerce.call(this, value, state, options);
	                    if (ret instanceof Errors.Err) {
	                        return { value: value, errors: ret };
	                    }
	                    return { value: ret };
	                };
	            }
	            if (extension.pre) {
	                type.prototype._base = function (value, state, options) {
	                    if (ctor.prototype._base) {
	                        var baseRet = ctor.prototype._base.call(this, value, state, options);
	                        if (baseRet.errors) {
	                            return baseRet;
	                        }
	                        value = baseRet.value;
	                    }
	                    var ret = extension.pre.call(this, value, state, options);
	                    if (ret instanceof Errors.Err) {
	                        return { value: value, errors: ret };
	                    }
	                    return { value: ret };
	                };
	            }
	            if (extension.rules) {
	                var _loop2 = function _loop2(j) {
	                    var rule = extension.rules[j];
	                    var ruleArgs = rule.params ? rule.params instanceof Any ? rule.params._inner.children.map(function (k) {
	                        return k.key;
	                    }) : Object.keys(rule.params) : [];
	                    var validateArgs = rule.params ? Cast.schema(_this2, rule.params) : null;
	                    type.prototype[rule.name] = function () {
	                        for (var _len3 = arguments.length, rArgs = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	                            rArgs[_key3] = arguments[_key3];
	                        }
	                        if (rArgs.length > ruleArgs.length) {
	                            throw new Error('Unexpected number of arguments');
	                        }
	                        var hasRef = false;
	                        var arg = {};
	                        for (var k = 0; k < ruleArgs.length; ++k) {
	                            arg[ruleArgs[k]] = rArgs[k];
	                            if (!hasRef && Ref.isRef(rArgs[k])) {
	                                hasRef = true;
	                            }
	                        }
	                        if (validateArgs) {
	                            arg = joi.attempt(arg, validateArgs);
	                        }
	                        var schema = void 0;
	                        if (rule.validate) {
	                            var validate = function validate(value, state, options) {
	                                return rule.validate.call(this, arg, value, state, options);
	                            };
	                            schema = this._test(rule.name, arg, validate, {
	                                description: rule.description,
	                                hasRef: hasRef
	                            });
	                        } else {
	                            schema = this.clone();
	                        }
	                        if (rule.setup) {
	                            var newSchema = rule.setup.call(schema, arg);
	                            if (newSchema !== undefined) {
	                                Hoek.assert(newSchema instanceof Any, 'Setup of extension Joi.' + this._type + '().' + rule.name + '() must return undefined or a Joi object');
	                                schema = newSchema;
	                            }
	                        }
	                        return schema;
	                    };
	                };
	                for (var j = 0; j < extension.rules.length; ++j) {
	                    _loop2(j);
	                }
	            }
	            if (extension.describe) {
	                type.prototype.describe = function () {
	                    var description = ctor.prototype.describe.call(this);
	                    return extension.describe.call(this, description);
	                };
	            }
	            var instance = new type();
	            joi[extension.name] = function () {
	                return internals.applyDefaults.call(this, instance);
	            };
	        };
	        for (var i = 0; i < extensions.length; ++i) {
	            _loop(i);
	        }
	        return joi;
	    };
	    root.extensionSchema = internals.object.keys({
	        base: internals.object.type(Any, 'Joi object'),
	        name: internals.string.required(),
	        coerce: internals.func.arity(3),
	        pre: internals.func.arity(3),
	        language: internals.object,
	        describe: internals.func.arity(1),
	        rules: internals.array.items(internals.object.keys({
	            name: internals.string.required(),
	            setup: internals.func.arity(1),
	            validate: internals.func.arity(4),
	            params: [internals.object.pattern(/.*/, internals.object.type(Any, 'Joi object')), internals.object.type(internals.object.constructor, 'Joi object')],
	            description: [internals.string, internals.func.arity(1)]
	        }).or('setup', 'validate'))
	    }).strict();
	    root.extensionsSchema = internals.array.items([internals.object, internals.func.arity(1)]).strict();
	    root.version = __webpack_require__(33).version;
	    return root;
	};
	module.exports = internals.root();
	      }),
	      (function(module, exports, __webpack_require__) {
	                           (function(Buffer) {
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	var Ref = __webpack_require__(1);
	module.exports = function () {
	    function Set() {
	        _classCallCheck(this, Set);
	        this._set = [];
	    }
	    Set.prototype.add = function add(value, refs) {
	        if (!Ref.isRef(value) && this.has(value, null, null, false)) {
	            return;
	        }
	        if (refs !== undefined) {
	            Ref.push(refs, value);
	        }
	        this._set.push(value);
	        return this;
	    };
	    Set.prototype.merge = function merge(add, remove) {
	        for (var i = 0; i < add._set.length; ++i) {
	            this.add(add._set[i]);
	        }
	        for (var _i = 0; _i < remove._set.length; ++_i) {
	            this.remove(remove._set[_i]);
	        }
	        return this;
	    };
	    Set.prototype.remove = function remove(value) {
	        this._set = this._set.filter(function (item) {
	            return value !== item;
	        });
	        return this;
	    };
	    Set.prototype.has = function has(value, state, options, insensitive) {
	        for (var i = 0; i < this._set.length; ++i) {
	            var items = this._set[i];
	            if (state && Ref.isRef(items)) {
	                items = items(state.reference || state.parent, options);
	            }
	            if (!Array.isArray(items)) {
	                items = [items];
	            }
	            for (var j = 0; j < items.length; ++j) {
	                var item = items[j];
	                if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== (typeof item === 'undefined' ? 'undefined' : _typeof(item))) {
	                    continue;
	                }
	                if (value === item || value instanceof Date && item instanceof Date && value.getTime() === item.getTime() || insensitive && typeof value === 'string' && value.toLowerCase() === item.toLowerCase() || Buffer.isBuffer(value) && Buffer.isBuffer(item) && value.length === item.length && value.toString('binary') === item.toString('binary')) {
	                    return true;
	                }
	            }
	        }
	        return false;
	    };
	    Set.prototype.values = function values(options) {
	        if (options && options.stripUndefined) {
	            var values = [];
	            for (var i = 0; i < this._set.length; ++i) {
	                var item = this._set[i];
	                if (item !== undefined) {
	                    values.push(item);
	                }
	            }
	            return values;
	        }
	        return this._set.slice();
	    };
	    Set.prototype.slice = function slice() {
	        var newSet = new Set();
	        newSet._set = this._set.slice();
	        return newSet;
	    };
	    Set.prototype.concat = function concat(source) {
	        var newSet = new Set();
	        newSet._set = this._set.concat(source._set);
	        return newSet;
	    };
	    return Set;
	}();
	                           }.call(exports, __webpack_require__(3).Buffer));
	      }),
	      (function(module, exports, __webpack_require__) {
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	var Hoek = __webpack_require__(0);
	var Any = __webpack_require__(2);
	var Cast = __webpack_require__(4);
	var Ref = __webpack_require__(1);
	var internals = {};
	internals.Alternatives = function (_Any) {
	    _inherits(_class, _Any);
	    function _class() {
	        _classCallCheck(this, _class);
	        var _this = _possibleConstructorReturn(this, _Any.call(this));
	        _this._type = 'alternatives';
	        _this._invalids.remove(null);
	        _this._inner.matches = [];
	        return _this;
	    }
	    _class.prototype._base = function _base(value, state, options) {
	        var errors = [];
	        var il = this._inner.matches.length;
	        var baseType = this._baseType;
	        for (var i = 0; i < il; ++i) {
	            var item = this._inner.matches[i];
	            if (!item.schema) {
	                var schema = item.peek || item.is;
	                var input = item.is ? item.ref(state.reference || state.parent, options) : value;
	                var failed = schema._validate(input, null, options, state.parent).errors;
	                if (failed) {
	                    if (item.otherwise) {
	                        return item.otherwise._validate(value, state, options);
	                    }
	                } else if (item.then) {
	                    return item.then._validate(value, state, options);
	                }
	                if (i === il - 1 && baseType) {
	                    return baseType._validate(value, state, options);
	                }
	                continue;
	            }
	            var result = item.schema._validate(value, state, options);
	            if (!result.errors) {
	                return result;
	            }
	            errors = errors.concat(result.errors);
	        }
	        if (errors.length) {
	            return { errors: this.createError('alternatives.child', { reason: errors }, state, options) };
	        }
	        return { errors: this.createError('alternatives.base', null, state, options) };
	    };
	    _class.prototype.try = function _try() {
	        for (var _len = arguments.length, schemas = Array(_len), _key = 0; _key < _len; _key++) {
	            schemas[_key] = arguments[_key];
	        }
	        schemas = Hoek.flatten(schemas);
	        Hoek.assert(schemas.length, 'Cannot add other alternatives without at least one schema');
	        var obj = this.clone();
	        for (var i = 0; i < schemas.length; ++i) {
	            var cast = Cast.schema(this._currentJoi, schemas[i]);
	            if (cast._refs.length) {
	                obj._refs = obj._refs.concat(cast._refs);
	            }
	            obj._inner.matches.push({ schema: cast });
	        }
	        return obj;
	    };
	    _class.prototype.when = function when(condition, options) {
	        var schemaCondition = false;
	        Hoek.assert(Ref.isRef(condition) || typeof condition === 'string' || (schemaCondition = condition instanceof Any), 'Invalid condition:', condition);
	        Hoek.assert(options, 'Missing options');
	        Hoek.assert((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object', 'Invalid options');
	        if (schemaCondition) {
	            Hoek.assert(!options.hasOwnProperty('is'), '"is" can not be used with a schema condition');
	        } else {
	            Hoek.assert(options.hasOwnProperty('is'), 'Missing "is" directive');
	        }
	        Hoek.assert(options.then !== undefined || options.otherwise !== undefined, 'options must have at least one of "then" or "otherwise"');
	        var obj = this.clone();
	        var is = void 0;
	        if (!schemaCondition) {
	            is = Cast.schema(this._currentJoi, options.is);
	            if (options.is === null || !(Ref.isRef(options.is) || options.is instanceof Any)) {
	                is = is.required();
	            }
	        }
	        var item = {
	            ref: schemaCondition ? null : Cast.ref(condition),
	            peek: schemaCondition ? condition : null,
	            is: is,
	            then: options.then !== undefined ? Cast.schema(this._currentJoi, options.then) : undefined,
	            otherwise: options.otherwise !== undefined ? Cast.schema(this._currentJoi, options.otherwise) : undefined
	        };
	        if (obj._baseType) {
	            item.then = item.then && obj._baseType.concat(item.then);
	            item.otherwise = item.otherwise && obj._baseType.concat(item.otherwise);
	        }
	        if (!schemaCondition) {
	            Ref.push(obj._refs, item.ref);
	            obj._refs = obj._refs.concat(item.is._refs);
	        }
	        if (item.then && item.then._refs) {
	            obj._refs = obj._refs.concat(item.then._refs);
	        }
	        if (item.otherwise && item.otherwise._refs) {
	            obj._refs = obj._refs.concat(item.otherwise._refs);
	        }
	        obj._inner.matches.push(item);
	        return obj;
	    };
	    _class.prototype.describe = function describe() {
	        var description = Any.prototype.describe.call(this);
	        var alternatives = [];
	        for (var i = 0; i < this._inner.matches.length; ++i) {
	            var item = this._inner.matches[i];
	            if (item.schema) {
	                alternatives.push(item.schema.describe());
	            } else {
	                var when = item.is ? {
	                    ref: item.ref.toString(),
	                    is: item.is.describe()
	                } : {
	                    peek: item.peek.describe()
	                };
	                if (item.then) {
	                    when.then = item.then.describe();
	                }
	                if (item.otherwise) {
	                    when.otherwise = item.otherwise.describe();
	                }
	                alternatives.push(when);
	            }
	        }
	        description.alternatives = alternatives;
	        return description;
	    };
	    return _class;
	}(Any);
	module.exports = new internals.Alternatives();
	      }),
	      (function(module, exports, __webpack_require__) {
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	var Any = __webpack_require__(2);
	var Ref = __webpack_require__(1);
	var Hoek = __webpack_require__(0);
	var internals = {};
	internals.isoDate = /^(?:[-+]\d{2})?(?:\d{4}(?!\d{2}\b))(?:(-?)(?:(?:0[1-9]|1[0-2])(?:\1(?:[12]\d|0[1-9]|3[01]))?|W(?:[0-4]\d|5[0-2])(?:-?[1-7])?|(?:00[1-9]|0[1-9]\d|[12]\d{2}|3(?:[0-5]\d|6[1-6])))(?![T]$|[T][\d]+Z$)(?:[T\s](?:(?:(?:[01]\d|2[0-3])(?:(:?)[0-5]\d)?|24\:?00)(?:[.,]\d+(?!:))?)(?:\2[0-5]\d(?:[.,]\d+)?)?(?:[Z]|(?:[+-])(?:[01]\d|2[0-3])(?::?[0-5]\d)?)?)?)?$/;
	internals.invalidDate = new Date('');
	internals.isIsoDate = function () {
	    var isoString = internals.isoDate.toString();
	    return function (date) {
	        return date && date.toString() === isoString;
	    };
	}();
	internals.Date = function (_Any) {
	    _inherits(_class, _Any);
	    function _class() {
	        _classCallCheck(this, _class);
	        var _this = _possibleConstructorReturn(this, _Any.call(this));
	        _this._type = 'date';
	        return _this;
	    }
	    _class.prototype._base = function _base(value, state, options) {
	        var result = {
	            value: options.convert && internals.Date.toDate(value, this._flags.format, this._flags.timestamp, this._flags.multiplier) || value
	        };
	        if (result.value instanceof Date && !isNaN(result.value.getTime())) {
	            result.errors = null;
	        } else if (!options.convert) {
	            result.errors = this.createError('date.strict', null, state, options);
	        } else {
	            var type = void 0;
	            if (internals.isIsoDate(this._flags.format)) {
	                type = 'isoDate';
	            } else if (this._flags.timestamp) {
	                type = 'timestamp.' + this._flags.timestamp;
	            } else {
	                type = 'base';
	            }
	            result.errors = this.createError('date.' + type, null, state, options);
	        }
	        return result;
	    };
	    _class.toDate = function toDate(value, format, timestamp, multiplier) {
	        if (value instanceof Date) {
	            return value;
	        }
	        if (typeof value === 'string' || typeof value === 'number' && !isNaN(value) && isFinite(value)) {
	            if (typeof value === 'string' && /^[+-]?\d+(\.\d+)?$/.test(value)) {
	                value = parseFloat(value);
	            }
	            var date = void 0;
	            if (format && internals.isIsoDate(format)) {
	                date = format.test(value) ? new Date(value) : internals.invalidDate;
	            } else if (timestamp && multiplier) {
	                date = /^\s*$/.test(value) ? internals.invalidDate : new Date(value * multiplier);
	            } else {
	                date = new Date(value);
	            }
	            if (!isNaN(date.getTime())) {
	                return date;
	            }
	        }
	        return null;
	    };
	    _class.prototype.iso = function iso() {
	        if (this._flags.format === internals.isoDate) {
	            return this;
	        }
	        var obj = this.clone();
	        obj._flags.format = internals.isoDate;
	        return obj;
	    };
	    _class.prototype.timestamp = function timestamp() {
	        var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'javascript';
	        var allowed = ['javascript', 'unix'];
	        Hoek.assert(allowed.includes(type), '"type" must be one of "' + allowed.join('", "') + '"');
	        if (this._flags.timestamp === type) {
	            return this;
	        }
	        var obj = this.clone();
	        obj._flags.timestamp = type;
	        obj._flags.multiplier = type === 'unix' ? 1000 : 1;
	        return obj;
	    };
	    _class.prototype._isIsoDate = function _isIsoDate(value) {
	        return internals.isoDate.test(value);
	    };
	    return _class;
	}(Any);
	internals.compare = function (type, compare) {
	    return function (date) {
	        var isNow = date === 'now';
	        var isRef = Ref.isRef(date);
	        if (!isNow && !isRef) {
	            date = internals.Date.toDate(date);
	        }
	        Hoek.assert(date, 'Invalid date format');
	        return this._test(type, date, function (value, state, options) {
	            var compareTo = void 0;
	            if (isNow) {
	                compareTo = Date.now();
	            } else if (isRef) {
	                compareTo = internals.Date.toDate(date(state.reference || state.parent, options));
	                if (!compareTo) {
	                    return this.createError('date.ref', { ref: date.key }, state, options);
	                }
	                compareTo = compareTo.getTime();
	            } else {
	                compareTo = date.getTime();
	            }
	            if (compare(value.getTime(), compareTo)) {
	                return value;
	            }
	            return this.createError('date.' + type, { limit: new Date(compareTo) }, state, options);
	        });
	    };
	};
	internals.Date.prototype.min = internals.compare('min', function (value, date) {
	    return value >= date;
	});
	internals.Date.prototype.max = internals.compare('max', function (value, date) {
	    return value <= date;
	});
	module.exports = new internals.Date();
	      }),
	      (function(module, exports, __webpack_require__) {
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	var Hoek = __webpack_require__(0);
	var Topo = __webpack_require__(28);
	var Any = __webpack_require__(2);
	var Errors = __webpack_require__(6);
	var Cast = __webpack_require__(4);
	var internals = {};
	internals.Object = function (_Any) {
	    _inherits(_class, _Any);
	    function _class() {
	        _classCallCheck(this, _class);
	        var _this = _possibleConstructorReturn(this, _Any.call(this));
	        _this._type = 'object';
	        _this._inner.children = null;
	        _this._inner.renames = [];
	        _this._inner.dependencies = [];
	        _this._inner.patterns = [];
	        return _this;
	    }
	    _class.prototype._base = function _base(value, state, options) {
	        var target = value;
	        var errors = [];
	        var finish = function finish() {
	            return {
	                value: target,
	                errors: errors.length ? errors : null
	            };
	        };
	        if (typeof value === 'string' && options.convert) {
	            value = internals.safeParse(value);
	        }
	        var type = this._flags.func ? 'function' : 'object';
	        if (!value || (typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== type || Array.isArray(value)) {
	            errors.push(this.createError(type + '.base', null, state, options));
	            return finish();
	        }
	        if (!this._inner.renames.length && !this._inner.dependencies.length && !this._inner.children &&
	        !this._inner.patterns.length) {
	            target = value;
	            return finish();
	        }
	        if (target === value) {
	            if (type === 'object') {
	                target = Object.create(Object.getPrototypeOf(value));
	            } else {
	                target = function target() {
	                    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	                        args[_key] = arguments[_key];
	                    }
	                    return value.apply(this, args);
	                };
	                target.prototype = Hoek.clone(value.prototype);
	            }
	            var valueKeys = Object.keys(value);
	            for (var i = 0; i < valueKeys.length; ++i) {
	                target[valueKeys[i]] = value[valueKeys[i]];
	            }
	        } else {
	            target = value;
	        }
	        var renamed = {};
	        for (var _i = 0; _i < this._inner.renames.length; ++_i) {
	            var rename = this._inner.renames[_i];
	            if (rename.isRegExp) {
	                var targetKeys = Object.keys(target);
	                var matchedTargetKeys = [];
	                for (var j = 0; j < targetKeys.length; ++j) {
	                    if (rename.from.test(targetKeys[j])) {
	                        matchedTargetKeys.push(targetKeys[j]);
	                    }
	                }
	                var allUndefined = matchedTargetKeys.every(function (key) {
	                    return target[key] === undefined;
	                });
	                if (rename.options.ignoreUndefined && allUndefined) {
	                    continue;
	                }
	                if (!rename.options.multiple && renamed[rename.to]) {
	                    errors.push(this.createError('object.rename.regex.multiple', { from: matchedTargetKeys, to: rename.to }, state, options));
	                    if (options.abortEarly) {
	                        return finish();
	                    }
	                }
	                if (Object.prototype.hasOwnProperty.call(target, rename.to) && !rename.options.override && !renamed[rename.to]) {
	                    errors.push(this.createError('object.rename.regex.override', { from: matchedTargetKeys, to: rename.to }, state, options));
	                    if (options.abortEarly) {
	                        return finish();
	                    }
	                }
	                if (allUndefined) {
	                    delete target[rename.to];
	                } else {
	                    target[rename.to] = target[matchedTargetKeys[matchedTargetKeys.length - 1]];
	                }
	                renamed[rename.to] = true;
	                if (!rename.options.alias) {
	                    for (var _j = 0; _j < matchedTargetKeys.length; ++_j) {
	                        delete target[matchedTargetKeys[_j]];
	                    }
	                }
	            } else {
	                if (rename.options.ignoreUndefined && target[rename.from] === undefined) {
	                    continue;
	                }
	                if (!rename.options.multiple && renamed[rename.to]) {
	                    errors.push(this.createError('object.rename.multiple', { from: rename.from, to: rename.to }, state, options));
	                    if (options.abortEarly) {
	                        return finish();
	                    }
	                }
	                if (Object.prototype.hasOwnProperty.call(target, rename.to) && !rename.options.override && !renamed[rename.to]) {
	                    errors.push(this.createError('object.rename.override', { from: rename.from, to: rename.to }, state, options));
	                    if (options.abortEarly) {
	                        return finish();
	                    }
	                }
	                if (target[rename.from] === undefined) {
	                    delete target[rename.to];
	                } else {
	                    target[rename.to] = target[rename.from];
	                }
	                renamed[rename.to] = true;
	                if (!rename.options.alias) {
	                    delete target[rename.from];
	                }
	            }
	        }
	        if (!this._inner.children &&
	        !this._inner.patterns.length && !this._inner.dependencies.length) {
	            return finish();
	        }
	        var unprocessed = Hoek.mapToObject(Object.keys(target));
	        if (this._inner.children) {
	            var stripProps = [];
	            for (var _i2 = 0; _i2 < this._inner.children.length; ++_i2) {
	                var child = this._inner.children[_i2];
	                var key = child.key;
	                var item = target[key];
	                delete unprocessed[key];
	                var localState = { key: key, path: state.path.concat(key), parent: target, reference: state.reference };
	                var result = child.schema._validate(item, localState, options);
	                if (result.errors) {
	                    errors.push(this.createError('object.child', { key: key, child: child.schema._getLabel(key), reason: result.errors }, localState, options));
	                    if (options.abortEarly) {
	                        return finish();
	                    }
	                } else {
	                    if (child.schema._flags.strip || result.value === undefined && result.value !== item) {
	                        stripProps.push(key);
	                        target[key] = result.finalValue;
	                    } else if (result.value !== undefined) {
	                        target[key] = result.value;
	                    }
	                }
	            }
	            for (var _i3 = 0; _i3 < stripProps.length; ++_i3) {
	                delete target[stripProps[_i3]];
	            }
	        }
	        var unprocessedKeys = Object.keys(unprocessed);
	        if (unprocessedKeys.length && this._inner.patterns.length) {
	            for (var _i4 = 0; _i4 < unprocessedKeys.length; ++_i4) {
	                var _key2 = unprocessedKeys[_i4];
	                var _localState = { key: _key2, path: state.path.concat(_key2), parent: target, reference: state.reference };
	                var _item = target[_key2];
	                for (var _j2 = 0; _j2 < this._inner.patterns.length; ++_j2) {
	                    var pattern = this._inner.patterns[_j2];
	                    if (pattern.regex.test(_key2)) {
	                        delete unprocessed[_key2];
	                        var _result = pattern.rule._validate(_item, _localState, options);
	                        if (_result.errors) {
	                            errors.push(this.createError('object.child', { key: _key2, child: pattern.rule._getLabel(_key2), reason: _result.errors }, _localState, options));
	                            if (options.abortEarly) {
	                                return finish();
	                            }
	                        }
	                        if (_result.value !== undefined) {
	                            target[_key2] = _result.value;
	                        }
	                    }
	                }
	            }
	            unprocessedKeys = Object.keys(unprocessed);
	        }
	        if ((this._inner.children || this._inner.patterns.length) && unprocessedKeys.length) {
	            if (options.stripUnknown && this._flags.allowUnknown !== true || options.skipFunctions) {
	                var stripUnknown = options.stripUnknown ? options.stripUnknown === true ? true : !!options.stripUnknown.objects : false;
	                for (var _i5 = 0; _i5 < unprocessedKeys.length; ++_i5) {
	                    var _key3 = unprocessedKeys[_i5];
	                    if (stripUnknown) {
	                        delete target[_key3];
	                        delete unprocessed[_key3];
	                    } else if (typeof target[_key3] === 'function') {
	                        delete unprocessed[_key3];
	                    }
	                }
	                unprocessedKeys = Object.keys(unprocessed);
	            }
	            if (unprocessedKeys.length && (this._flags.allowUnknown !== undefined ? !this._flags.allowUnknown : !options.allowUnknown)) {
	                for (var _i6 = 0; _i6 < unprocessedKeys.length; ++_i6) {
	                    var unprocessedKey = unprocessedKeys[_i6];
	                    errors.push(this.createError('object.allowUnknown', { child: unprocessedKey }, { key: unprocessedKey, path: state.path.concat(unprocessedKey) }, options, {}));
	                }
	            }
	        }
	        for (var _i7 = 0; _i7 < this._inner.dependencies.length; ++_i7) {
	            var dep = this._inner.dependencies[_i7];
	            var err = internals[dep.type].call(this, dep.key !== null && target[dep.key], dep.peers, target, { key: dep.key, path: dep.key === null ? state.path : state.path.concat(dep.key) }, options);
	            if (err instanceof Errors.Err) {
	                errors.push(err);
	                if (options.abortEarly) {
	                    return finish();
	                }
	            }
	        }
	        return finish();
	    };
	    _class.prototype.keys = function keys(schema) {
	        Hoek.assert(schema === null || schema === undefined || (typeof schema === 'undefined' ? 'undefined' : _typeof(schema)) === 'object', 'Object schema must be a valid object');
	        Hoek.assert(!schema || !(schema instanceof Any), 'Object schema cannot be a joi schema');
	        var obj = this.clone();
	        if (!schema) {
	            obj._inner.children = null;
	            return obj;
	        }
	        var children = Object.keys(schema);
	        if (!children.length) {
	            obj._inner.children = [];
	            return obj;
	        }
	        var topo = new Topo();
	        if (obj._inner.children) {
	            for (var i = 0; i < obj._inner.children.length; ++i) {
	                var child = obj._inner.children[i];
	                if (!children.includes(child.key)) {
	                    topo.add(child, { after: child._refs, group: child.key });
	                }
	            }
	        }
	        for (var _i8 = 0; _i8 < children.length; ++_i8) {
	            var key = children[_i8];
	            var _child = schema[key];
	            try {
	                var cast = Cast.schema(this._currentJoi, _child);
	                topo.add({ key: key, schema: cast }, { after: cast._refs, group: key });
	            } catch (castErr) {
	                if (castErr.hasOwnProperty('path')) {
	                    castErr.path = key + '.' + castErr.path;
	                } else {
	                    castErr.path = key;
	                }
	                throw castErr;
	            }
	        }
	        obj._inner.children = topo.nodes;
	        return obj;
	    };
	    _class.prototype.unknown = function unknown(allow) {
	        var value = allow !== false;
	        if (this._flags.allowUnknown === value) {
	            return this;
	        }
	        var obj = this.clone();
	        obj._flags.allowUnknown = value;
	        return obj;
	    };
	    _class.prototype.length = function length(limit) {
	        Hoek.assert(Number.isSafeInteger(limit) && limit >= 0, 'limit must be a positive integer');
	        return this._test('length', limit, function (value, state, options) {
	            if (Object.keys(value).length === limit) {
	                return value;
	            }
	            return this.createError('object.length', { limit: limit }, state, options);
	        });
	    };
	    _class.prototype.min = function min(limit) {
	        Hoek.assert(Number.isSafeInteger(limit) && limit >= 0, 'limit must be a positive integer');
	        return this._test('min', limit, function (value, state, options) {
	            if (Object.keys(value).length >= limit) {
	                return value;
	            }
	            return this.createError('object.min', { limit: limit }, state, options);
	        });
	    };
	    _class.prototype.max = function max(limit) {
	        Hoek.assert(Number.isSafeInteger(limit) && limit >= 0, 'limit must be a positive integer');
	        return this._test('max', limit, function (value, state, options) {
	            if (Object.keys(value).length <= limit) {
	                return value;
	            }
	            return this.createError('object.max', { limit: limit }, state, options);
	        });
	    };
	    _class.prototype.pattern = function pattern(_pattern, schema) {
	        Hoek.assert(_pattern instanceof RegExp, 'Invalid regular expression');
	        Hoek.assert(schema !== undefined, 'Invalid rule');
	        _pattern = new RegExp(_pattern.source, _pattern.ignoreCase ? 'i' : undefined);
	        try {
	            schema = Cast.schema(this._currentJoi, schema);
	        } catch (castErr) {
	            if (castErr.hasOwnProperty('path')) {
	                castErr.message = castErr.message + '(' + castErr.path + ')';
	            }
	            throw castErr;
	        }
	        var obj = this.clone();
	        obj._inner.patterns.push({ regex: _pattern, rule: schema });
	        return obj;
	    };
	    _class.prototype.schema = function schema() {
	        return this._test('schema', null, function (value, state, options) {
	            if (value instanceof Any) {
	                return value;
	            }
	            return this.createError('object.schema', null, state, options);
	        });
	    };
	    _class.prototype.with = function _with(key, peers) {
	        return this._dependency('with', key, peers);
	    };
	    _class.prototype.without = function without(key, peers) {
	        return this._dependency('without', key, peers);
	    };
	    _class.prototype.xor = function xor() {
	        for (var _len2 = arguments.length, peers = Array(_len2), _key4 = 0; _key4 < _len2; _key4++) {
	            peers[_key4] = arguments[_key4];
	        }
	        peers = Hoek.flatten(peers);
	        return this._dependency('xor', null, peers);
	    };
	    _class.prototype.or = function or() {
	        for (var _len3 = arguments.length, peers = Array(_len3), _key5 = 0; _key5 < _len3; _key5++) {
	            peers[_key5] = arguments[_key5];
	        }
	        peers = Hoek.flatten(peers);
	        return this._dependency('or', null, peers);
	    };
	    _class.prototype.and = function and() {
	        for (var _len4 = arguments.length, peers = Array(_len4), _key6 = 0; _key6 < _len4; _key6++) {
	            peers[_key6] = arguments[_key6];
	        }
	        peers = Hoek.flatten(peers);
	        return this._dependency('and', null, peers);
	    };
	    _class.prototype.nand = function nand() {
	        for (var _len5 = arguments.length, peers = Array(_len5), _key7 = 0; _key7 < _len5; _key7++) {
	            peers[_key7] = arguments[_key7];
	        }
	        peers = Hoek.flatten(peers);
	        return this._dependency('nand', null, peers);
	    };
	    _class.prototype.requiredKeys = function requiredKeys() {
	        for (var _len6 = arguments.length, children = Array(_len6), _key8 = 0; _key8 < _len6; _key8++) {
	            children[_key8] = arguments[_key8];
	        }
	        children = Hoek.flatten(children);
	        return this.applyFunctionToChildren(children, 'required');
	    };
	    _class.prototype.optionalKeys = function optionalKeys() {
	        for (var _len7 = arguments.length, children = Array(_len7), _key9 = 0; _key9 < _len7; _key9++) {
	            children[_key9] = arguments[_key9];
	        }
	        children = Hoek.flatten(children);
	        return this.applyFunctionToChildren(children, 'optional');
	    };
	    _class.prototype.forbiddenKeys = function forbiddenKeys() {
	        for (var _len8 = arguments.length, children = Array(_len8), _key10 = 0; _key10 < _len8; _key10++) {
	            children[_key10] = arguments[_key10];
	        }
	        children = Hoek.flatten(children);
	        return this.applyFunctionToChildren(children, 'forbidden');
	    };
	    _class.prototype.rename = function rename(from, to, options) {
	        Hoek.assert(typeof from === 'string' || from instanceof RegExp, 'Rename missing the from argument');
	        Hoek.assert(typeof to === 'string', 'Rename missing the to argument');
	        Hoek.assert(to !== from, 'Cannot rename key to same name:', from);
	        for (var i = 0; i < this._inner.renames.length; ++i) {
	            Hoek.assert(this._inner.renames[i].from !== from, 'Cannot rename the same key multiple times');
	        }
	        var obj = this.clone();
	        obj._inner.renames.push({
	            from: from,
	            to: to,
	            options: Hoek.applyToDefaults(internals.renameDefaults, options || {}),
	            isRegExp: from instanceof RegExp
	        });
	        return obj;
	    };
	    _class.prototype.applyFunctionToChildren = function applyFunctionToChildren(children, fn, args, root) {
	        children = [].concat(children);
	        Hoek.assert(children.length > 0, 'expected at least one children');
	        var groupedChildren = internals.groupChildren(children);
	        var obj = void 0;
	        if ('' in groupedChildren) {
	            obj = this[fn].apply(this, args);
	            delete groupedChildren[''];
	        } else {
	            obj = this.clone();
	        }
	        if (obj._inner.children) {
	            root = root ? root + '.' : '';
	            for (var i = 0; i < obj._inner.children.length; ++i) {
	                var child = obj._inner.children[i];
	                var group = groupedChildren[child.key];
	                if (group) {
	                    obj._inner.children[i] = {
	                        key: child.key,
	                        _refs: child._refs,
	                        schema: child.schema.applyFunctionToChildren(group, fn, args, root + child.key)
	                    };
	                    delete groupedChildren[child.key];
	                }
	            }
	        }
	        var remaining = Object.keys(groupedChildren);
	        Hoek.assert(remaining.length === 0, 'unknown key(s)', remaining.join(', '));
	        return obj;
	    };
	    _class.prototype._dependency = function _dependency(type, key, peers) {
	        peers = [].concat(peers);
	        for (var i = 0; i < peers.length; ++i) {
	            Hoek.assert(typeof peers[i] === 'string', type, 'peers must be a string or array of strings');
	        }
	        var obj = this.clone();
	        obj._inner.dependencies.push({ type: type, key: key, peers: peers });
	        return obj;
	    };
	    _class.prototype.describe = function describe(shallow) {
	        var description = Any.prototype.describe.call(this);
	        if (description.rules) {
	            for (var i = 0; i < description.rules.length; ++i) {
	                var rule = description.rules[i];
	                if (                         rule.arg && _typeof(rule.arg) === 'object' && rule.arg.schema && rule.arg.ref                        ) {
	                        rule.arg = {
	                            schema: rule.arg.schema.describe(),
	                            ref: rule.arg.ref.toString()
	                        };
	                    }
	            }
	        }
	        if (this._inner.children && !shallow) {
	            description.children = {};
	            for (var _i9 = 0; _i9 < this._inner.children.length; ++_i9) {
	                var child = this._inner.children[_i9];
	                description.children[child.key] = child.schema.describe();
	            }
	        }
	        if (this._inner.dependencies.length) {
	            description.dependencies = Hoek.clone(this._inner.dependencies);
	        }
	        if (this._inner.patterns.length) {
	            description.patterns = [];
	            for (var _i10 = 0; _i10 < this._inner.patterns.length; ++_i10) {
	                var pattern = this._inner.patterns[_i10];
	                description.patterns.push({ regex: pattern.regex.toString(), rule: pattern.rule.describe() });
	            }
	        }
	        if (this._inner.renames.length > 0) {
	            description.renames = Hoek.clone(this._inner.renames);
	        }
	        return description;
	    };
	    _class.prototype.assert = function assert(ref, schema, message) {
	        ref = Cast.ref(ref);
	        Hoek.assert(ref.isContext || ref.depth > 1, 'Cannot use assertions for root level references - use direct key rules instead');
	        message = message || 'pass the assertion test';
	        try {
	            schema = Cast.schema(this._currentJoi, schema);
	        } catch (castErr) {
	            if (castErr.hasOwnProperty('path')) {
	                castErr.message = castErr.message + '(' + castErr.path + ')';
	            }
	            throw castErr;
	        }
	        var key = ref.path[ref.path.length - 1];
	        var path = ref.path.join('.');
	        return this._test('assert', { schema: schema, ref: ref }, function (value, state, options) {
	            var result = schema._validate(ref(value), null, options, value);
	            if (!result.errors) {
	                return value;
	            }
	            var localState = Hoek.merge({}, state);
	            localState.key = key;
	            localState.path = ref.path;
	            return this.createError('object.assert', { ref: path, message: message }, localState, options);
	        });
	    };
	    _class.prototype.type = function type(constructor) {
	        var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : constructor.name;
	        Hoek.assert(typeof constructor === 'function', 'type must be a constructor function');
	        var typeData = {
	            name: name,
	            ctor: constructor
	        };
	        return this._test('type', typeData, function (value, state, options) {
	            if (value instanceof constructor) {
	                return value;
	            }
	            return this.createError('object.type', { type: typeData.name }, state, options);
	        });
	    };
	    return _class;
	}(Any);
	internals.safeParse = function (value) {
	    try {
	        return JSON.parse(value);
	    } catch (parseErr) {}
	    return value;
	};
	internals.renameDefaults = {
	    alias: false,
	    multiple: false,
	    override: false
	};
	internals.groupChildren = function (children) {
	    children.sort();
	    var grouped = {};
	    for (var i = 0; i < children.length; ++i) {
	        var child = children[i];
	        Hoek.assert(typeof child === 'string', 'children must be strings');
	        var group = child.split('.')[0];
	        var childGroup = grouped[group] = grouped[group] || [];
	        childGroup.push(child.substring(group.length + 1));
	    }
	    return grouped;
	};
	internals.keysToLabels = function (schema, keys) {
	    var children = schema._inner.children;
	    if (!children) {
	        return keys;
	    }
	    var findLabel = function findLabel(key) {
	        var matchingChild = children.find(function (child) {
	            return child.key === key;
	        });
	        return matchingChild ? matchingChild.schema._getLabel(key) : key;
	    };
	    if (Array.isArray(keys)) {
	        return keys.map(findLabel);
	    }
	    return findLabel(keys);
	};
	internals.with = function (value, peers, parent, state, options) {
	    if (value === undefined) {
	        return value;
	    }
	    for (var i = 0; i < peers.length; ++i) {
	        var peer = peers[i];
	        if (!Object.prototype.hasOwnProperty.call(parent, peer) || parent[peer] === undefined) {
	            return this.createError('object.with', {
	                main: state.key,
	                mainWithLabel: internals.keysToLabels(this, state.key),
	                peer: peer,
	                peerWithLabel: internals.keysToLabels(this, peer)
	            }, state, options);
	        }
	    }
	    return value;
	};
	internals.without = function (value, peers, parent, state, options) {
	    if (value === undefined) {
	        return value;
	    }
	    for (var i = 0; i < peers.length; ++i) {
	        var peer = peers[i];
	        if (Object.prototype.hasOwnProperty.call(parent, peer) && parent[peer] !== undefined) {
	            return this.createError('object.without', {
	                main: state.key,
	                mainWithLabel: internals.keysToLabels(this, state.key),
	                peer: peer,
	                peerWithLabel: internals.keysToLabels(this, peer)
	            }, state, options);
	        }
	    }
	    return value;
	};
	internals.xor = function (value, peers, parent, state, options) {
	    var present = [];
	    for (var i = 0; i < peers.length; ++i) {
	        var peer = peers[i];
	        if (Object.prototype.hasOwnProperty.call(parent, peer) && parent[peer] !== undefined) {
	            present.push(peer);
	        }
	    }
	    if (present.length === 1) {
	        return value;
	    }
	    var context = { peers: peers, peersWithLabels: internals.keysToLabels(this, peers) };
	    if (present.length === 0) {
	        return this.createError('object.missing', context, state, options);
	    }
	    return this.createError('object.xor', context, state, options);
	};
	internals.or = function (value, peers, parent, state, options) {
	    for (var i = 0; i < peers.length; ++i) {
	        var peer = peers[i];
	        if (Object.prototype.hasOwnProperty.call(parent, peer) && parent[peer] !== undefined) {
	            return value;
	        }
	    }
	    return this.createError('object.missing', {
	        peers: peers,
	        peersWithLabels: internals.keysToLabels(this, peers)
	    }, state, options);
	};
	internals.and = function (value, peers, parent, state, options) {
	    var missing = [];
	    var present = [];
	    var count = peers.length;
	    for (var i = 0; i < count; ++i) {
	        var peer = peers[i];
	        if (!Object.prototype.hasOwnProperty.call(parent, peer) || parent[peer] === undefined) {
	            missing.push(peer);
	        } else {
	            present.push(peer);
	        }
	    }
	    var aon = missing.length === count || present.length === count;
	    if (!aon) {
	        return this.createError('object.and', {
	            present: present,
	            presentWithLabels: internals.keysToLabels(this, present),
	            missing: missing,
	            missingWithLabels: internals.keysToLabels(this, missing)
	        }, state, options);
	    }
	};
	internals.nand = function (value, peers, parent, state, options) {
	    var present = [];
	    for (var i = 0; i < peers.length; ++i) {
	        var peer = peers[i];
	        if (Object.prototype.hasOwnProperty.call(parent, peer) && parent[peer] !== undefined) {
	            present.push(peer);
	        }
	    }
	    var values = Hoek.clone(peers);
	    var main = values.splice(0, 1)[0];
	    var allPresent = present.length === peers.length;
	    return allPresent ? this.createError('object.nand', {
	        main: main,
	        mainWithLabel: internals.keysToLabels(this, main),
	        peers: values,
	        peersWithLabels: internals.keysToLabels(this, values)
	    }, state, options) : null;
	};
	module.exports = new internals.Object();
	      }),
	      (function(module, exports, __webpack_require__) {
	var internals = {
	  rfc3986: {}
	};
	internals.generate = function () {
	  var or = '|';
	  var zeroPad = '0?';
	  var digit = '0-9';
	  var digitOnly = '[' + digit + ']';
	  var alpha = 'a-zA-Z';
	  var alphaOnly = '[' + alpha + ']';
	  internals.rfc3986.ipv4Cidr = digitOnly + or + '[1-2]' + digitOnly + or + '3' + '[0-2]';
	  internals.rfc3986.ipv6Cidr = '(?:' + zeroPad + zeroPad + digitOnly + or + zeroPad + '[1-9]' + digitOnly + or + '1' + '[01]' + digitOnly + or + '12[0-8])';
	  var hexDigit = digit + 'A-Fa-f';
	  var hexDigitOnly = '[' + hexDigit + ']';
	  var unreserved = alpha + digit + '-\\._~';
	  var subDelims = '!\\$&\'\\(\\)\\*\\+,;=';
	  var pctEncoded = '%' + hexDigit;
	  var pchar = unreserved + pctEncoded + subDelims + ':@';
	  var pcharOnly = '[' + pchar + ']';
	  var decOctect = '(?:' + zeroPad + zeroPad + digitOnly + or + zeroPad + '[1-9]' + digitOnly + or + '1' + digitOnly + digitOnly + or + '2' + '[0-4]' + digitOnly + or + '25' + '[0-5])';
	  internals.rfc3986.IPv4address = '(?:' + decOctect + '\\.){3}' + decOctect;
	  var h16 = hexDigitOnly + '{1,4}';
	  var ls32 = '(?:' + h16 + ':' + h16 + '|' + internals.rfc3986.IPv4address + ')';
	  var IPv6SixHex = '(?:' + h16 + ':){6}' + ls32;
	  var IPv6FiveHex = '::(?:' + h16 + ':){5}' + ls32;
	  var IPv6FourHex = '(?:' + h16 + ')?::(?:' + h16 + ':){4}' + ls32;
	  var IPv6ThreeHex = '(?:(?:' + h16 + ':){0,1}' + h16 + ')?::(?:' + h16 + ':){3}' + ls32;
	  var IPv6TwoHex = '(?:(?:' + h16 + ':){0,2}' + h16 + ')?::(?:' + h16 + ':){2}' + ls32;
	  var IPv6OneHex = '(?:(?:' + h16 + ':){0,3}' + h16 + ')?::' + h16 + ':' + ls32;
	  var IPv6NoneHex = '(?:(?:' + h16 + ':){0,4}' + h16 + ')?::' + ls32;
	  var IPv6NoneHex2 = '(?:(?:' + h16 + ':){0,5}' + h16 + ')?::' + h16;
	  var IPv6NoneHex3 = '(?:(?:' + h16 + ':){0,6}' + h16 + ')?::';
	  internals.rfc3986.IPv6address = '(?:' + IPv6SixHex + or + IPv6FiveHex + or + IPv6FourHex + or + IPv6ThreeHex + or + IPv6TwoHex + or + IPv6OneHex + or + IPv6NoneHex + or + IPv6NoneHex2 + or + IPv6NoneHex3 + ')';
	  internals.rfc3986.IPvFuture = 'v' + hexDigitOnly + '+\\.[' + unreserved + subDelims + ':]+';
	  internals.rfc3986.scheme = alphaOnly + '[' + alpha + digit + '+-\\.]*';
	  var userinfo = '[' + unreserved + pctEncoded + subDelims + ':]*';
	  var IPLiteral = '\\[(?:' + internals.rfc3986.IPv6address + or + internals.rfc3986.IPvFuture + ')\\]';
	  var regName = '[' + unreserved + pctEncoded + subDelims + ']{0,255}';
	  var host = '(?:' + IPLiteral + or + internals.rfc3986.IPv4address + or + regName + ')';
	  var port = digitOnly + '*';
	  var authority = '(?:' + userinfo + '@)?' + host + '(?::' + port + ')?';
	  var segment = pcharOnly + '*';
	  var segmentNz = pcharOnly + '+';
	  var segmentNzNc = '[' + unreserved + pctEncoded + subDelims + '@' + ']+';
	  var pathEmpty = '';
	  var pathAbEmpty = '(?:\\/' + segment + ')*';
	  var pathAbsolute = '\\/(?:' + segmentNz + pathAbEmpty + ')?';
	  var pathRootless = segmentNz + pathAbEmpty;
	  var pathNoScheme = segmentNzNc + pathAbEmpty;
	  internals.rfc3986.hierPart = '(?:' + '(?:\\/\\/' + authority + pathAbEmpty + ')' + or + pathAbsolute + or + pathRootless + ')';
	  internals.rfc3986.relativeRef = '(?:' + '(?:\\/\\/' + authority + pathAbEmpty + ')' + or + pathAbsolute + or + pathNoScheme + or + pathEmpty + ')';
	  internals.rfc3986.query = '[' + pchar + '\\/\\?]*(?=#|$)';
	  internals.rfc3986.fragment = '[' + pchar + '\\/\\?]*';
	};
	internals.generate();
	module.exports = internals.rfc3986;
	      }),
	      (function(module, exports) {
	      }),
	      (function(module, exports, __webpack_require__) {
	                           (function(Buffer) {
	var internals = {};
	exports.escapeJavaScript = function (input) {
	    if (!input) {
	        return '';
	    }
	    var escaped = '';
	    for (var i = 0; i < input.length; ++i) {
	        var charCode = input.charCodeAt(i);
	        if (internals.isSafe(charCode)) {
	            escaped += input[i];
	        } else {
	            escaped += internals.escapeJavaScriptChar(charCode);
	        }
	    }
	    return escaped;
	};
	exports.escapeHtml = function (input) {
	    if (!input) {
	        return '';
	    }
	    var escaped = '';
	    for (var i = 0; i < input.length; ++i) {
	        var charCode = input.charCodeAt(i);
	        if (internals.isSafe(charCode)) {
	            escaped += input[i];
	        } else {
	            escaped += internals.escapeHtmlChar(charCode);
	        }
	    }
	    return escaped;
	};
	exports.escapeJson = function (input) {
	    if (!input) {
	        return '';
	    }
	    var lessThan = 0x3C;
	    var greaterThan = 0x3E;
	    var andSymbol = 0x26;
	    var lineSeperator = 0x2028;
	    var charCode = void 0;
	    return input.replace(/[<>&\u2028\u2029]/g, function (match) {
	        charCode = match.charCodeAt(0);
	        if (charCode === lessThan) {
	            return '\\u003c';
	        } else if (charCode === greaterThan) {
	            return '\\u003e';
	        } else if (charCode === andSymbol) {
	            return '\\u0026';
	        } else if (charCode === lineSeperator) {
	            return '\\u2028';
	        }
	        return '\\u2029';
	    });
	};
	internals.escapeJavaScriptChar = function (charCode) {
	    if (charCode >= 256) {
	        return '\\u' + internals.padLeft('' + charCode, 4);
	    }
	    var hexValue = new Buffer(String.fromCharCode(charCode), 'ascii').toString('hex');
	    return '\\x' + internals.padLeft(hexValue, 2);
	};
	internals.escapeHtmlChar = function (charCode) {
	    var namedEscape = internals.namedHtml[charCode];
	    if (typeof namedEscape !== 'undefined') {
	        return namedEscape;
	    }
	    if (charCode >= 256) {
	        return '&#' + charCode + ';';
	    }
	    var hexValue = new Buffer(String.fromCharCode(charCode), 'ascii').toString('hex');
	    return '&#x' + internals.padLeft(hexValue, 2) + ';';
	};
	internals.padLeft = function (str, len) {
	    while (str.length < len) {
	        str = '0' + str;
	    }
	    return str;
	};
	internals.isSafe = function (charCode) {
	    return typeof internals.safeCharCodes[charCode] !== 'undefined';
	};
	internals.namedHtml = {
	    '38': '&amp;',
	    '60': '&lt;',
	    '62': '&gt;',
	    '34': '&quot;',
	    '160': '&nbsp;',
	    '162': '&cent;',
	    '163': '&pound;',
	    '164': '&curren;',
	    '169': '&copy;',
	    '174': '&reg;'
	};
	internals.safeCharCodes = function () {
	    var safe = {};
	    for (var i = 32; i < 123; ++i) {
	        if (i >= 97 ||
	        i >= 65 && i <= 90 ||
	        i >= 48 && i <= 57 ||
	        i === 32 ||
	        i === 46 ||
	        i === 44 ||
	        i === 45 ||
	        i === 58 ||
	        i === 95) {
	            safe[i] = null;
	        }
	    }
	    return safe;
	}();
	                           }.call(exports, __webpack_require__(3).Buffer));
	      }),
	      (function(module, exports, __webpack_require__) {
	                           (function(Buffer, process) {
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	var Punycode = __webpack_require__(35);
	var internals = {
	    hasOwn: Object.prototype.hasOwnProperty,
	    indexOf: Array.prototype.indexOf,
	    defaultThreshold: 16,
	    maxIPv6Groups: 8,
	    categories: {
	        valid: 1,
	        dnsWarn: 7,
	        rfc5321: 15,
	        cfws: 31,
	        deprecated: 63,
	        rfc5322: 127,
	        error: 255
	    },
	    diagnoses: {
	        valid: 0,
	        rfc5321TLD: 9,
	        rfc5321TLDNumeric: 10,
	        rfc5321QuotedString: 11,
	        rfc5321AddressLiteral: 12,
	        cfwsComment: 17,
	        cfwsFWS: 18,
	        deprecatedLocalPart: 33,
	        deprecatedFWS: 34,
	        deprecatedQTEXT: 35,
	        deprecatedQP: 36,
	        deprecatedComment: 37,
	        deprecatedCTEXT: 38,
	        deprecatedIPv6: 39,
	        deprecatedCFWSNearAt: 49,
	        rfc5322Domain: 65,
	        rfc5322TooLong: 66,
	        rfc5322LocalTooLong: 67,
	        rfc5322DomainTooLong: 68,
	        rfc5322LabelTooLong: 69,
	        rfc5322DomainLiteral: 70,
	        rfc5322DomainLiteralOBSDText: 71,
	        rfc5322IPv6GroupCount: 72,
	        rfc5322IPv62x2xColon: 73,
	        rfc5322IPv6BadCharacter: 74,
	        rfc5322IPv6MaxGroups: 75,
	        rfc5322IPv6ColonStart: 76,
	        rfc5322IPv6ColonEnd: 77,
	        errExpectingDTEXT: 129,
	        errNoLocalPart: 130,
	        errNoDomain: 131,
	        errConsecutiveDots: 132,
	        errATEXTAfterCFWS: 133,
	        errATEXTAfterQS: 134,
	        errATEXTAfterDomainLiteral: 135,
	        errExpectingQPair: 136,
	        errExpectingATEXT: 137,
	        errExpectingQTEXT: 138,
	        errExpectingCTEXT: 139,
	        errBackslashEnd: 140,
	        errDotStart: 141,
	        errDotEnd: 142,
	        errDomainHyphenStart: 143,
	        errDomainHyphenEnd: 144,
	        errUnclosedQuotedString: 145,
	        errUnclosedComment: 146,
	        errUnclosedDomainLiteral: 147,
	        errFWSCRLFx2: 148,
	        errFWSCRLFEnd: 149,
	        errCRNoLF: 150,
	        errUnknownTLD: 160,
	        errDomainTooShort: 161
	    },
	    components: {
	        localpart: 0,
	        domain: 1,
	        literal: 2,
	        contextComment: 3,
	        contextFWS: 4,
	        contextQuotedString: 5,
	        contextQuotedPair: 6
	    }
	};
	internals.specials = function () {
	    var specials = '()<>[]:;@\\,."';
	    var lookup = new Array(0x100);
	    lookup.fill(false);
	    for (var i = 0; i < specials.length; ++i) {
	        lookup[specials.codePointAt(i)] = true;
	    }
	    return function (code) {
	        return lookup[code];
	    };
	}();
	internals.c0Controls = function () {
	    var lookup = new Array(0x100);
	    lookup.fill(false);
	    for (var i = 0; i < 33; ++i) {
	        lookup[i] = true;
	    }
	    return function (code) {
	        return lookup[code];
	    };
	}();
	internals.c1Controls = function () {
	    var lookup = new Array(0x100);
	    lookup.fill(false);
	    for (var i = 127; i < 160; ++i) {
	        lookup[i] = true;
	    }
	    return function (code) {
	        return lookup[code];
	    };
	}();
	internals.regex = {
	    ipV4: /\b(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/,
	    ipV6: /^[a-fA-F\d]{0,4}$/
	};
	internals.nulNormalize = function (email) {
	    var emailPieces = email.split('\0');
	    emailPieces = emailPieces.map(function (string) {
	        return string.normalize('NFC');
	    });
	    return emailPieces.join('\0');
	};
	internals.checkIpV6 = function (items) {
	    return items.every(function (value) {
	        return internals.regex.ipV6.test(value);
	    });
	};
	internals.validDomain = function (tldAtom, options) {
	    if (options.tldBlacklist) {
	        if (Array.isArray(options.tldBlacklist)) {
	            return internals.indexOf.call(options.tldBlacklist, tldAtom) === -1;
	        }
	        return !internals.hasOwn.call(options.tldBlacklist, tldAtom);
	    }
	    if (Array.isArray(options.tldWhitelist)) {
	        return internals.indexOf.call(options.tldWhitelist, tldAtom) !== -1;
	    }
	    return internals.hasOwn.call(options.tldWhitelist, tldAtom);
	};
	exports.validate = internals.validate = function (email, options, callback) {
	    options = options || {};
	    email = internals.normalize(email);
	    if (typeof options === 'function') {
	        callback = options;
	        options = {};
	    }
	    if (typeof callback !== 'function') {
	        callback = null;
	    }
	    var diagnose = void 0;
	    var threshold = void 0;
	    if (typeof options.errorLevel === 'number') {
	        diagnose = true;
	        threshold = options.errorLevel;
	    } else {
	        diagnose = !!options.errorLevel;
	        threshold = internals.diagnoses.valid;
	    }
	    if (options.tldWhitelist) {
	        if (typeof options.tldWhitelist === 'string') {
	            options.tldWhitelist = [options.tldWhitelist];
	        } else if (_typeof(options.tldWhitelist) !== 'object') {
	            throw new TypeError('expected array or object tldWhitelist');
	        }
	    }
	    if (options.tldBlacklist) {
	        if (typeof options.tldBlacklist === 'string') {
	            options.tldBlacklist = [options.tldBlacklist];
	        } else if (_typeof(options.tldBlacklist) !== 'object') {
	            throw new TypeError('expected array or object tldBlacklist');
	        }
	    }
	    if (options.minDomainAtoms && (options.minDomainAtoms !== (+options.minDomainAtoms | 0) || options.minDomainAtoms < 0)) {
	        throw new TypeError('expected positive integer minDomainAtoms');
	    }
	    var maxResult = internals.diagnoses.valid;
	    var updateResult = function updateResult(value) {
	        if (value > maxResult) {
	            maxResult = value;
	        }
	    };
	    var context = {
	        now: internals.components.localpart,
	        prev: internals.components.localpart,
	        stack: [internals.components.localpart]
	    };
	    var prevToken = '';
	    var parseData = {
	        local: '',
	        domain: ''
	    };
	    var atomData = {
	        locals: [''],
	        domains: ['']
	    };
	    var elementCount = 0;
	    var elementLength = 0;
	    var crlfCount = 0;
	    var charCode = void 0;
	    var hyphenFlag = false;
	    var assertEnd = false;
	    var emailLength = email.length;
	    var token = void 0;
	    for (var i = 0; i < emailLength; i += token.length) {
	        token = String.fromCodePoint(email.codePointAt(i));
	        switch (context.now) {
	            case internals.components.localpart:
	                switch (token) {
	                    case '(':
	                        if (elementLength === 0) {
	                            updateResult(elementCount === 0 ? internals.diagnoses.cfwsComment : internals.diagnoses.deprecatedComment);
	                        } else {
	                            updateResult(internals.diagnoses.cfwsComment);
	                            assertEnd = true;
	                        }
	                        context.stack.push(context.now);
	                        context.now = internals.components.contextComment;
	                        break;
	                    case '.':
	                        if (elementLength === 0) {
	                            updateResult(elementCount === 0 ? internals.diagnoses.errDotStart : internals.diagnoses.errConsecutiveDots);
	                        } else {
	                            if (assertEnd) {
	                                updateResult(internals.diagnoses.deprecatedLocalPart);
	                            }
	                            assertEnd = false;
	                            elementLength = 0;
	                            ++elementCount;
	                            parseData.local += token;
	                            atomData.locals[elementCount] = '';
	                        }
	                        break;
	                    case '"':
	                        if (elementLength === 0) {
	                            updateResult(elementCount === 0 ? internals.diagnoses.rfc5321QuotedString : internals.diagnoses.deprecatedLocalPart);
	                            parseData.local += token;
	                            atomData.locals[elementCount] += token;
	                            elementLength += Buffer.byteLength(token, 'utf8');
	                            assertEnd = true;
	                            context.stack.push(context.now);
	                            context.now = internals.components.contextQuotedString;
	                        } else {
	                            updateResult(internals.diagnoses.errExpectingATEXT);
	                        }
	                        break;
	                    case '\r':
	                        if (emailLength === ++i || email[i] !== '\n') {
	                            updateResult(internals.diagnoses.errCRNoLF);
	                            break;
	                        }
	                    case ' ':
	                    case '\t':
	                        if (elementLength === 0) {
	                            updateResult(elementCount === 0 ? internals.diagnoses.cfwsFWS : internals.diagnoses.deprecatedFWS);
	                        } else {
	                            assertEnd = true;
	                        }
	                        context.stack.push(context.now);
	                        context.now = internals.components.contextFWS;
	                        prevToken = token;
	                        break;
	                    case '@':
	                        if (context.stack.length !== 1) {
	                            throw new Error('unexpected item on context stack');
	                        }
	                        if (parseData.local.length === 0) {
	                            updateResult(internals.diagnoses.errNoLocalPart);
	                        } else if (elementLength === 0) {
	                            updateResult(internals.diagnoses.errDotEnd);
	                        }
	                        else if (Buffer.byteLength(parseData.local, 'utf8') > 64) {
	                                updateResult(internals.diagnoses.rfc5322LocalTooLong);
	                            }
	                            else if (context.prev === internals.components.contextComment || context.prev === internals.components.contextFWS) {
	                                    updateResult(internals.diagnoses.deprecatedCFWSNearAt);
	                                }
	                        context.now = internals.components.domain;
	                        context.stack[0] = internals.components.domain;
	                        elementCount = 0;
	                        elementLength = 0;
	                        assertEnd = false;
	                        break;
	                    default:
	                        if (assertEnd) {
	                            switch (context.prev) {
	                                case internals.components.contextComment:
	                                case internals.components.contextFWS:
	                                    updateResult(internals.diagnoses.errATEXTAfterCFWS);
	                                    break;
	                                case internals.components.contextQuotedString:
	                                    updateResult(internals.diagnoses.errATEXTAfterQS);
	                                    break;
	                                default:
	                                    throw new Error('more atext found where none is allowed, but unrecognized prev context: ' + context.prev);
	                            }
	                        } else {
	                            context.prev = context.now;
	                            charCode = token.codePointAt(0);
	                            if (internals.specials(charCode) || internals.c0Controls(charCode) || internals.c1Controls(charCode)) {
	                                updateResult(internals.diagnoses.errExpectingATEXT);
	                            }
	                            parseData.local += token;
	                            atomData.locals[elementCount] += token;
	                            elementLength += Buffer.byteLength(token, 'utf8');
	                        }
	                }
	                break;
	            case internals.components.domain:
	                switch (token) {
	                    case '(':
	                        if (elementLength === 0) {
	                            updateResult(elementCount === 0 ? internals.diagnoses.deprecatedCFWSNearAt : internals.diagnoses.deprecatedComment);
	                        } else {
	                            assertEnd = true;
	                            updateResult(internals.diagnoses.cfwsComment);
	                        }
	                        context.stack.push(context.now);
	                        context.now = internals.components.contextComment;
	                        break;
	                    case '.':
	                        var punycodeLength = Punycode.encode(atomData.domains[elementCount]).length;
	                        if (elementLength === 0) {
	                            updateResult(elementCount === 0 ? internals.diagnoses.errDotStart : internals.diagnoses.errConsecutiveDots);
	                        } else if (hyphenFlag) {
	                            updateResult(internals.diagnoses.errDomainHyphenEnd);
	                        } else if (punycodeLength > 63) {
	                            updateResult(internals.diagnoses.rfc5322LabelTooLong);
	                        }
	                        assertEnd = false;
	                        elementLength = 0;
	                        ++elementCount;
	                        atomData.domains[elementCount] = '';
	                        parseData.domain += token;
	                        break;
	                    case '[':
	                        if (parseData.domain.length === 0) {
	                            assertEnd = true;
	                            elementLength += Buffer.byteLength(token, 'utf8');
	                            context.stack.push(context.now);
	                            context.now = internals.components.literal;
	                            parseData.domain += token;
	                            atomData.domains[elementCount] += token;
	                            parseData.literal = '';
	                        } else {
	                            updateResult(internals.diagnoses.errExpectingATEXT);
	                        }
	                        break;
	                    case '\r':
	                        if (emailLength === ++i || email[i] !== '\n') {
	                            updateResult(internals.diagnoses.errCRNoLF);
	                            break;
	                        }
	                    case ' ':
	                    case '\t':
	                        if (elementLength === 0) {
	                            updateResult(elementCount === 0 ? internals.diagnoses.deprecatedCFWSNearAt : internals.diagnoses.deprecatedFWS);
	                        } else {
	                            updateResult(internals.diagnoses.cfwsFWS);
	                            assertEnd = true;
	                        }
	                        context.stack.push(context.now);
	                        context.now = internals.components.contextFWS;
	                        prevToken = token;
	                        break;
	                    default:
	                        if (assertEnd) {
	                            switch (context.prev) {
	                                case internals.components.contextComment:
	                                case internals.components.contextFWS:
	                                    updateResult(internals.diagnoses.errATEXTAfterCFWS);
	                                    break;
	                                case internals.components.literal:
	                                    updateResult(internals.diagnoses.errATEXTAfterDomainLiteral);
	                                    break;
	                                default:
	                                    throw new Error('more atext found where none is allowed, but unrecognized prev context: ' + context.prev);
	                            }
	                        }
	                        charCode = token.codePointAt(0);
	                        hyphenFlag = false;
	                        if (internals.specials(charCode) || internals.c0Controls(charCode) || internals.c1Controls(charCode)) {
	                            updateResult(internals.diagnoses.errExpectingATEXT);
	                        } else if (token === '-') {
	                            if (elementLength === 0) {
	                                updateResult(internals.diagnoses.errDomainHyphenStart);
	                            }
	                            hyphenFlag = true;
	                        }
	                        else if (charCode < 48 || charCode > 122 && charCode < 192 || charCode > 57 && charCode < 65 || charCode > 90 && charCode < 97) {
	                                updateResult(internals.diagnoses.rfc5322Domain);
	                            }
	                        parseData.domain += token;
	                        atomData.domains[elementCount] += token;
	                        elementLength += Buffer.byteLength(token, 'utf8');
	                }
	                break;
	            case internals.components.literal:
	                switch (token) {
	                    case ']':
	                        if (maxResult < internals.categories.deprecated) {
	                            var index = -1;
	                            var addressLiteral = parseData.literal;
	                            var matchesIP = internals.regex.ipV4.exec(addressLiteral);
	                            if (matchesIP) {
	                                index = matchesIP.index;
	                                if (index !== 0) {
	                                    addressLiteral = addressLiteral.slice(0, index) + '0:0';
	                                }
	                            }
	                            if (index === 0) {
	                                updateResult(internals.diagnoses.rfc5321AddressLiteral);
	                            } else if (addressLiteral.slice(0, 5).toLowerCase() !== 'ipv6:') {
	                                updateResult(internals.diagnoses.rfc5322DomainLiteral);
	                            } else {
	                                var match = addressLiteral.slice(5);
	                                var maxGroups = internals.maxIPv6Groups;
	                                var groups = match.split(':');
	                                index = match.indexOf('::');
	                                if (!~index) {
	                                    if (groups.length !== maxGroups) {
	                                        updateResult(internals.diagnoses.rfc5322IPv6GroupCount);
	                                    }
	                                } else if (index !== match.lastIndexOf('::')) {
	                                    updateResult(internals.diagnoses.rfc5322IPv62x2xColon);
	                                } else {
	                                    if (index === 0 || index === match.length - 2) {
	                                        ++maxGroups;
	                                    }
	                                    if (groups.length > maxGroups) {
	                                        updateResult(internals.diagnoses.rfc5322IPv6MaxGroups);
	                                    } else if (groups.length === maxGroups) {
	                                        updateResult(internals.diagnoses.deprecatedIPv6);
	                                    }
	                                }
	                                if (match[0] === ':' && match[1] !== ':') {
	                                    updateResult(internals.diagnoses.rfc5322IPv6ColonStart);
	                                } else if (match[match.length - 1] === ':' && match[match.length - 2] !== ':') {
	                                    updateResult(internals.diagnoses.rfc5322IPv6ColonEnd);
	                                } else if (internals.checkIpV6(groups)) {
	                                    updateResult(internals.diagnoses.rfc5321AddressLiteral);
	                                } else {
	                                    updateResult(internals.diagnoses.rfc5322IPv6BadCharacter);
	                                }
	                            }
	                        } else {
	                            updateResult(internals.diagnoses.rfc5322DomainLiteral);
	                        }
	                        parseData.domain += token;
	                        atomData.domains[elementCount] += token;
	                        elementLength += Buffer.byteLength(token, 'utf8');
	                        context.prev = context.now;
	                        context.now = context.stack.pop();
	                        break;
	                    case '\\':
	                        updateResult(internals.diagnoses.rfc5322DomainLiteralOBSDText);
	                        context.stack.push(context.now);
	                        context.now = internals.components.contextQuotedPair;
	                        break;
	                    case '\r':
	                        if (emailLength === ++i || email[i] !== '\n') {
	                            updateResult(internals.diagnoses.errCRNoLF);
	                            break;
	                        }
	                    case ' ':
	                    case '\t':
	                        updateResult(internals.diagnoses.cfwsFWS);
	                        context.stack.push(context.now);
	                        context.now = internals.components.contextFWS;
	                        prevToken = token;
	                        break;
	                    default:
	                        charCode = token.codePointAt(0);
	                        if (charCode !== 127 && internals.c1Controls(charCode) || charCode === 0 || token === '[') {
	                            updateResult(internals.diagnoses.errExpectingDTEXT);
	                            break;
	                        } else if (internals.c0Controls(charCode) || charCode === 127) {
	                            updateResult(internals.diagnoses.rfc5322DomainLiteralOBSDText);
	                        }
	                        parseData.literal += token;
	                        parseData.domain += token;
	                        atomData.domains[elementCount] += token;
	                        elementLength += Buffer.byteLength(token, 'utf8');
	                }
	                break;
	            case internals.components.contextQuotedString:
	                switch (token) {
	                    case '\\':
	                        context.stack.push(context.now);
	                        context.now = internals.components.contextQuotedPair;
	                        break;
	                    case '\r':
	                        if (emailLength === ++i || email[i] !== '\n') {
	                            updateResult(internals.diagnoses.errCRNoLF);
	                            break;
	                        }
	                    case '\t':
	                        parseData.local += ' ';
	                        atomData.locals[elementCount] += ' ';
	                        elementLength += Buffer.byteLength(token, 'utf8');
	                        updateResult(internals.diagnoses.cfwsFWS);
	                        context.stack.push(context.now);
	                        context.now = internals.components.contextFWS;
	                        prevToken = token;
	                        break;
	                    case '"':
	                        parseData.local += token;
	                        atomData.locals[elementCount] += token;
	                        elementLength += Buffer.byteLength(token, 'utf8');
	                        context.prev = context.now;
	                        context.now = context.stack.pop();
	                        break;
	                    default:
	                        charCode = token.codePointAt(0);
	                        if (charCode !== 127 && internals.c1Controls(charCode) || charCode === 0 || charCode === 10) {
	                            updateResult(internals.diagnoses.errExpectingQTEXT);
	                        } else if (internals.c0Controls(charCode) || charCode === 127) {
	                            updateResult(internals.diagnoses.deprecatedQTEXT);
	                        }
	                        parseData.local += token;
	                        atomData.locals[elementCount] += token;
	                        elementLength += Buffer.byteLength(token, 'utf8');
	                }
	                break;
	            case internals.components.contextQuotedPair:
	                charCode = token.codePointAt(0);
	                if (charCode !== 127 && internals.c1Controls(charCode)) {
	                    updateResult(internals.diagnoses.errExpectingQPair);
	                } else if (charCode < 31 && charCode !== 9 || charCode === 127) {
	                    updateResult(internals.diagnoses.deprecatedQP);
	                }
	                context.prev = context.now;
	                context.now = context.stack.pop();
	                var escapeToken = '\\' + token;
	                switch (context.now) {
	                    case internals.components.contextComment:
	                        break;
	                    case internals.components.contextQuotedString:
	                        parseData.local += escapeToken;
	                        atomData.locals[elementCount] += escapeToken;
	                        elementLength += 2;
	                        break;
	                    case internals.components.literal:
	                        parseData.domain += escapeToken;
	                        atomData.domains[elementCount] += escapeToken;
	                        elementLength += 2;
	                        break;
	                    default:
	                        throw new Error('quoted pair logic invoked in an invalid context: ' + context.now);
	                }
	                break;
	            case internals.components.contextComment:
	                switch (token) {
	                    case '(':
	                        context.stack.push(context.now);
	                        context.now = internals.components.contextComment;
	                        break;
	                    case ')':
	                        context.prev = context.now;
	                        context.now = context.stack.pop();
	                        break;
	                    case '\\':
	                        context.stack.push(context.now);
	                        context.now = internals.components.contextQuotedPair;
	                        break;
	                    case '\r':
	                        if (emailLength === ++i || email[i] !== '\n') {
	                            updateResult(internals.diagnoses.errCRNoLF);
	                            break;
	                        }
	                    case ' ':
	                    case '\t':
	                        updateResult(internals.diagnoses.cfwsFWS);
	                        context.stack.push(context.now);
	                        context.now = internals.components.contextFWS;
	                        prevToken = token;
	                        break;
	                    default:
	                        charCode = token.codePointAt(0);
	                        if (charCode === 0 || charCode === 10 || charCode !== 127 && internals.c1Controls(charCode)) {
	                            updateResult(internals.diagnoses.errExpectingCTEXT);
	                            break;
	                        } else if (internals.c0Controls(charCode) || charCode === 127) {
	                            updateResult(internals.diagnoses.deprecatedCTEXT);
	                        }
	                }
	                break;
	            case internals.components.contextFWS:
	                if (prevToken === '\r') {
	                    if (token === '\r') {
	                        updateResult(internals.diagnoses.errFWSCRLFx2);
	                        break;
	                    }
	                    if (++crlfCount > 1) {
	                        updateResult(internals.diagnoses.deprecatedFWS);
	                    } else {
	                        crlfCount = 1;
	                    }
	                }
	                switch (token) {
	                    case '\r':
	                        if (emailLength === ++i || email[i] !== '\n') {
	                            updateResult(internals.diagnoses.errCRNoLF);
	                        }
	                        break;
	                    case ' ':
	                    case '\t':
	                        break;
	                    default:
	                        if (prevToken === '\r') {
	                            updateResult(internals.diagnoses.errFWSCRLFEnd);
	                        }
	                        crlfCount = 0;
	                        context.prev = context.now;
	                        context.now = context.stack.pop();
	                        --i;
	                }
	                prevToken = token;
	                break;
	            default:
	                throw new Error('unknown context: ' + context.now);
	        }
	        if (maxResult > internals.categories.rfc5322) {
	            break;
	        }
	    }
	    if (maxResult < internals.categories.rfc5322) {
	        var _punycodeLength = Punycode.encode(parseData.domain).length;
	        if (context.now === internals.components.contextQuotedString) {
	            updateResult(internals.diagnoses.errUnclosedQuotedString);
	        } else if (context.now === internals.components.contextQuotedPair) {
	            updateResult(internals.diagnoses.errBackslashEnd);
	        } else if (context.now === internals.components.contextComment) {
	            updateResult(internals.diagnoses.errUnclosedComment);
	        } else if (context.now === internals.components.literal) {
	            updateResult(internals.diagnoses.errUnclosedDomainLiteral);
	        } else if (token === '\r') {
	            updateResult(internals.diagnoses.errFWSCRLFEnd);
	        } else if (parseData.domain.length === 0) {
	            updateResult(internals.diagnoses.errNoDomain);
	        } else if (elementLength === 0) {
	            updateResult(internals.diagnoses.errDotEnd);
	        } else if (hyphenFlag) {
	            updateResult(internals.diagnoses.errDomainHyphenEnd);
	        }
	        else if (_punycodeLength > 255) {
	                updateResult(internals.diagnoses.rfc5322DomainTooLong);
	            } else if (Buffer.byteLength(parseData.local, 'utf8') + _punycodeLength +          1 > 254) {
	                updateResult(internals.diagnoses.rfc5322TooLong);
	            } else if (elementLength > 63) {
	                updateResult(internals.diagnoses.rfc5322LabelTooLong);
	            } else if (options.minDomainAtoms && atomData.domains.length < options.minDomainAtoms) {
	                updateResult(internals.diagnoses.errDomainTooShort);
	            } else if (options.tldWhitelist || options.tldBlacklist) {
	                var tldAtom = atomData.domains[elementCount];
	                if (!internals.validDomain(tldAtom, options)) {
	                    updateResult(internals.diagnoses.errUnknownTLD);
	                }
	            }
	    }
	    if (maxResult < internals.categories.dnsWarn) {
	        var code = atomData.domains[elementCount].codePointAt(0);
	        if (code <= 57) {
	            updateResult(internals.diagnoses.rfc5321TLDNumeric);
	        }
	    }
	    if (maxResult < threshold) {
	        maxResult = internals.diagnoses.valid;
	    }
	    var finishResult = diagnose ? maxResult : maxResult < internals.defaultThreshold;
	    if (callback) {
	        callback(finishResult);
	    }
	    return finishResult;
	};
	exports.diagnoses = internals.validate.diagnoses = function () {
	    var diag = {};
	    var keys = Object.keys(internals.diagnoses);
	    for (var i = 0; i < keys.length; ++i) {
	        var key = keys[i];
	        diag[key] = internals.diagnoses[key];
	    }
	    return diag;
	}();
	exports.normalize = internals.normalize = function (email) {
	    if (process.version[1] === '4' && email.indexOf('\0') >= 0) {
	        return internals.nulNormalize(email);
	    }
	    return email.normalize('NFC');
	};
	                           }.call(exports, __webpack_require__(3).Buffer, __webpack_require__(5)));
	      }),
	      (function(module, exports, __webpack_require__) {
	exports.errors = {
	    root: 'value',
	    key: '"{{!label}}" ',
	    messages: {
	        wrapArrays: true
	    },
	    any: {
	        unknown: 'is not allowed',
	        invalid: 'contains an invalid value',
	        empty: 'is not allowed to be empty',
	        required: 'is required',
	        allowOnly: 'must be one of {{valids}}',
	        default: 'threw an error when running default method'
	    },
	    alternatives: {
	        base: 'not matching any of the allowed alternatives',
	        child: null
	    },
	    array: {
	        base: 'must be an array',
	        includes: 'at position {{pos}} does not match any of the allowed types',
	        includesSingle: 'single value of "{{!label}}" does not match any of the allowed types',
	        includesOne: 'at position {{pos}} fails because {{reason}}',
	        includesOneSingle: 'single value of "{{!label}}" fails because {{reason}}',
	        includesRequiredUnknowns: 'does not contain {{unknownMisses}} required value(s)',
	        includesRequiredKnowns: 'does not contain {{knownMisses}}',
	        includesRequiredBoth: 'does not contain {{knownMisses}} and {{unknownMisses}} other required value(s)',
	        excludes: 'at position {{pos}} contains an excluded value',
	        excludesSingle: 'single value of "{{!label}}" contains an excluded value',
	        min: 'must contain at least {{limit}} items',
	        max: 'must contain less than or equal to {{limit}} items',
	        length: 'must contain {{limit}} items',
	        ordered: 'at position {{pos}} fails because {{reason}}',
	        orderedLength: 'at position {{pos}} fails because array must contain at most {{limit}} items',
	        ref: 'references "{{ref}}" which is not a positive integer',
	        sparse: 'must not be a sparse array',
	        unique: 'position {{pos}} contains a duplicate value'
	    },
	    boolean: {
	        base: 'must be a boolean'
	    },
	    binary: {
	        base: 'must be a buffer or a string',
	        min: 'must be at least {{limit}} bytes',
	        max: 'must be less than or equal to {{limit}} bytes',
	        length: 'must be {{limit}} bytes'
	    },
	    date: {
	        base: 'must be a number of milliseconds or valid date string',
	        format: 'must be a string with one of the following formats {{format}}',
	        strict: 'must be a valid date',
	        min: 'must be larger than or equal to "{{limit}}"',
	        max: 'must be less than or equal to "{{limit}}"',
	        isoDate: 'must be a valid ISO 8601 date',
	        timestamp: {
	            javascript: 'must be a valid timestamp or number of milliseconds',
	            unix: 'must be a valid timestamp or number of seconds'
	        },
	        ref: 'references "{{ref}}" which is not a date'
	    },
	    function: {
	        base: 'must be a Function',
	        arity: 'must have an arity of {{n}}',
	        minArity: 'must have an arity greater or equal to {{n}}',
	        maxArity: 'must have an arity lesser or equal to {{n}}',
	        ref: 'must be a Joi reference',
	        class: 'must be a class'
	    },
	    lazy: {
	        base: '!!schema error: lazy schema must be set',
	        schema: '!!schema error: lazy schema function must return a schema'
	    },
	    object: {
	        base: 'must be an object',
	        child: '!!child "{{!child}}" fails because {{reason}}',
	        min: 'must have at least {{limit}} children',
	        max: 'must have less than or equal to {{limit}} children',
	        length: 'must have {{limit}} children',
	        allowUnknown: '!!"{{!child}}" is not allowed',
	        with: '!!"{{mainWithLabel}}" missing required peer "{{peerWithLabel}}"',
	        without: '!!"{{mainWithLabel}}" conflict with forbidden peer "{{peerWithLabel}}"',
	        missing: 'must contain at least one of {{peersWithLabels}}',
	        xor: 'contains a conflict between exclusive peers {{peersWithLabels}}',
	        or: 'must contain at least one of {{peersWithLabels}}',
	        and: 'contains {{presentWithLabels}} without its required peers {{missingWithLabels}}',
	        nand: '!!"{{mainWithLabel}}" must not exist simultaneously with {{peersWithLabels}}',
	        assert: '!!"{{ref}}" validation failed because "{{ref}}" failed to {{message}}',
	        rename: {
	            multiple: 'cannot rename child "{{from}}" because multiple renames are disabled and another key was already renamed to "{{to}}"',
	            override: 'cannot rename child "{{from}}" because override is disabled and target "{{to}}" exists',
	            regex: {
	                multiple: 'cannot rename children {{from}} because multiple renames are disabled and another key was already renamed to "{{to}}"',
	                override: 'cannot rename children {{from}} because override is disabled and target "{{to}}" exists'
	            }
	        },
	        type: 'must be an instance of "{{type}}"',
	        schema: 'must be a Joi instance'
	    },
	    number: {
	        base: 'must be a number',
	        min: 'must be larger than or equal to {{limit}}',
	        max: 'must be less than or equal to {{limit}}',
	        less: 'must be less than {{limit}}',
	        greater: 'must be greater than {{limit}}',
	        float: 'must be a float or double',
	        integer: 'must be an integer',
	        negative: 'must be a negative number',
	        positive: 'must be a positive number',
	        precision: 'must have no more than {{limit}} decimal places',
	        ref: 'references "{{ref}}" which is not a number',
	        multiple: 'must be a multiple of {{multiple}}'
	    },
	    string: {
	        base: 'must be a string',
	        min: 'length must be at least {{limit}} characters long',
	        max: 'length must be less than or equal to {{limit}} characters long',
	        length: 'length must be {{limit}} characters long',
	        alphanum: 'must only contain alpha-numeric characters',
	        token: 'must only contain alpha-numeric and underscore characters',
	        regex: {
	            base: 'with value "{{!value}}" fails to match the required pattern: {{pattern}}',
	            name: 'with value "{{!value}}" fails to match the {{name}} pattern',
	            invert: {
	                base: 'with value "{{!value}}" matches the inverted pattern: {{pattern}}',
	                name: 'with value "{{!value}}" matches the inverted {{name}} pattern'
	            }
	        },
	        email: 'must be a valid email',
	        uri: 'must be a valid uri',
	        uriRelativeOnly: 'must be a valid relative uri',
	        uriCustomScheme: 'must be a valid uri with a scheme matching the {{scheme}} pattern',
	        isoDate: 'must be a valid ISO 8601 date',
	        guid: 'must be a valid GUID',
	        hex: 'must only contain hexadecimal characters',
	        base64: 'must be a valid base64 string',
	        hostname: 'must be a valid hostname',
	        normalize: 'must be unicode normalized in the {{form}} form',
	        lowercase: 'must only contain lowercase characters',
	        uppercase: 'must only contain uppercase characters',
	        trim: 'must not have leading or trailing whitespace',
	        creditCard: 'must be a credit card',
	        ref: 'references "{{ref}}" which is not a number',
	        ip: 'must be a valid ip address with a {{cidr}} CIDR',
	        ipVersion: 'must be a valid ip address of one of the following versions {{version}} with a {{cidr}} CIDR'
	    }
	};
	      }),
	      (function(module, exports, __webpack_require__) {
	var Joi = __webpack_require__(8);
	exports.options = Joi.object({
	    abortEarly: Joi.boolean(),
	    convert: Joi.boolean(),
	    allowUnknown: Joi.boolean(),
	    skipFunctions: Joi.boolean(),
	    stripUnknown: [Joi.boolean(), Joi.object({ arrays: Joi.boolean(), objects: Joi.boolean() }).or('arrays', 'objects')],
	    language: Joi.object(),
	    presence: Joi.string().only('required', 'optional', 'forbidden', 'ignore'),
	    raw: Joi.boolean(),
	    context: Joi.object(),
	    strip: Joi.boolean(),
	    noDefaults: Joi.boolean(),
	    escapeHtml: Joi.boolean()
	}).strict();
	      }),
	      (function(module, exports, __webpack_require__) {
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	var Any = __webpack_require__(2);
	var Cast = __webpack_require__(4);
	var Ref = __webpack_require__(1);
	var Hoek = __webpack_require__(0);
	var internals = {};
	internals.fastSplice = function (arr, i) {
	    var pos = i;
	    while (pos < arr.length) {
	        arr[pos++] = arr[pos];
	    }
	    --arr.length;
	};
	internals.Array = function (_Any) {
	    _inherits(_class, _Any);
	    function _class() {
	        _classCallCheck(this, _class);
	        var _this = _possibleConstructorReturn(this, _Any.call(this));
	        _this._type = 'array';
	        _this._inner.items = [];
	        _this._inner.ordereds = [];
	        _this._inner.inclusions = [];
	        _this._inner.exclusions = [];
	        _this._inner.requireds = [];
	        _this._flags.sparse = false;
	        return _this;
	    }
	    _class.prototype._base = function _base(value, state, options) {
	        var result = {
	            value: value
	        };
	        if (typeof value === 'string' && options.convert) {
	            internals.safeParse(value, result);
	        }
	        var isArray = Array.isArray(result.value);
	        var wasArray = isArray;
	        if (options.convert && this._flags.single && !isArray) {
	            result.value = [result.value];
	            isArray = true;
	        }
	        if (!isArray) {
	            result.errors = this.createError('array.base', null, state, options);
	            return result;
	        }
	        if (this._inner.inclusions.length || this._inner.exclusions.length || this._inner.requireds.length || this._inner.ordereds.length || !this._flags.sparse) {
	            if (wasArray) {
	                result.value = result.value.slice(0);
	            }
	            result.errors = this._checkItems.call(this, result.value, wasArray, state, options);
	            if (result.errors && wasArray && options.convert && this._flags.single) {
	                var previousErrors = result.errors;
	                result.value = [result.value];
	                result.errors = this._checkItems.call(this, result.value, wasArray, state, options);
	                if (result.errors) {
	                    result.errors = previousErrors;
	                    result.value = result.value[0];
	                }
	            }
	        }
	        return result;
	    };
	    _class.prototype._checkItems = function _checkItems(items, wasArray, state, options) {
	        var errors = [];
	        var errored = void 0;
	        var requireds = this._inner.requireds.slice();
	        var ordereds = this._inner.ordereds.slice();
	        var inclusions = this._inner.inclusions.concat(requireds);
	        var il = items.length;
	        for (var i = 0; i < il; ++i) {
	            errored = false;
	            var item = items[i];
	            var isValid = false;
	            var key = wasArray ? i : state.key;
	            var path = wasArray ? state.path.concat(i) : state.path;
	            var localState = { key: key, path: path, parent: state.parent, reference: state.reference };
	            var res = void 0;
	            if (!this._flags.sparse && item === undefined) {
	                errors.push(this.createError('array.sparse', null, { key: state.key, path: localState.path, pos: i }, options));
	                if (options.abortEarly) {
	                    return errors;
	                }
	                continue;
	            }
	            for (var j = 0; j < this._inner.exclusions.length; ++j) {
	                res = this._inner.exclusions[j]._validate(item, localState, {});
	                if (!res.errors) {
	                    errors.push(this.createError(wasArray ? 'array.excludes' : 'array.excludesSingle', { pos: i, value: item }, { key: state.key, path: localState.path }, options));
	                    errored = true;
	                    if (options.abortEarly) {
	                        return errors;
	                    }
	                    break;
	                }
	            }
	            if (errored) {
	                continue;
	            }
	            if (this._inner.ordereds.length) {
	                if (ordereds.length > 0) {
	                    var ordered = ordereds.shift();
	                    res = ordered._validate(item, localState, options);
	                    if (!res.errors) {
	                        if (ordered._flags.strip) {
	                            internals.fastSplice(items, i);
	                            --i;
	                            --il;
	                        } else if (!this._flags.sparse && res.value === undefined) {
	                            errors.push(this.createError('array.sparse', null, { key: state.key, path: localState.path, pos: i }, options));
	                            if (options.abortEarly) {
	                                return errors;
	                            }
	                            continue;
	                        } else {
	                            items[i] = res.value;
	                        }
	                    } else {
	                        errors.push(this.createError('array.ordered', { pos: i, reason: res.errors, value: item }, { key: state.key, path: localState.path }, options));
	                        if (options.abortEarly) {
	                            return errors;
	                        }
	                    }
	                    continue;
	                } else if (!this._inner.items.length) {
	                    errors.push(this.createError('array.orderedLength', { pos: i, limit: this._inner.ordereds.length }, { key: state.key, path: localState.path }, options));
	                    if (options.abortEarly) {
	                        return errors;
	                    }
	                    continue;
	                }
	            }
	            var requiredChecks = [];
	            var jl = requireds.length;
	            for (var _j = 0; _j < jl; ++_j) {
	                res = requiredChecks[_j] = requireds[_j]._validate(item, localState, options);
	                if (!res.errors) {
	                    items[i] = res.value;
	                    isValid = true;
	                    internals.fastSplice(requireds, _j);
	                    --_j;
	                    --jl;
	                    if (!this._flags.sparse && res.value === undefined) {
	                        errors.push(this.createError('array.sparse', null, { key: state.key, path: localState.path, pos: i }, options));
	                        if (options.abortEarly) {
	                            return errors;
	                        }
	                    }
	                    break;
	                }
	            }
	            if (isValid) {
	                continue;
	            }
	            var stripUnknown = options.stripUnknown ? options.stripUnknown === true ? true : !!options.stripUnknown.arrays : false;
	            jl = inclusions.length;
	            for (var _j2 = 0; _j2 < jl; ++_j2) {
	                var inclusion = inclusions[_j2];
	                var previousCheck = requireds.indexOf(inclusion);
	                if (previousCheck !== -1) {
	                    res = requiredChecks[previousCheck];
	                } else {
	                    res = inclusion._validate(item, localState, options);
	                    if (!res.errors) {
	                        if (inclusion._flags.strip) {
	                            internals.fastSplice(items, i);
	                            --i;
	                            --il;
	                        } else if (!this._flags.sparse && res.value === undefined) {
	                            errors.push(this.createError('array.sparse', null, { key: state.key, path: localState.path, pos: i }, options));
	                            errored = true;
	                        } else {
	                            items[i] = res.value;
	                        }
	                        isValid = true;
	                        break;
	                    }
	                }
	                if (jl === 1) {
	                    if (stripUnknown) {
	                        internals.fastSplice(items, i);
	                        --i;
	                        --il;
	                        isValid = true;
	                        break;
	                    }
	                    errors.push(this.createError(wasArray ? 'array.includesOne' : 'array.includesOneSingle', { pos: i, reason: res.errors, value: item }, { key: state.key, path: localState.path }, options));
	                    errored = true;
	                    if (options.abortEarly) {
	                        return errors;
	                    }
	                    break;
	                }
	            }
	            if (errored) {
	                continue;
	            }
	            if (this._inner.inclusions.length && !isValid) {
	                if (stripUnknown) {
	                    internals.fastSplice(items, i);
	                    --i;
	                    --il;
	                    continue;
	                }
	                errors.push(this.createError(wasArray ? 'array.includes' : 'array.includesSingle', { pos: i, value: item }, { key: state.key, path: localState.path }, options));
	                if (options.abortEarly) {
	                    return errors;
	                }
	            }
	        }
	        if (requireds.length) {
	            this._fillMissedErrors.call(this, errors, requireds, state, options);
	        }
	        if (ordereds.length) {
	            this._fillOrderedErrors.call(this, errors, ordereds, state, options);
	        }
	        return errors.length ? errors : null;
	    };
	    _class.prototype.describe = function describe() {
	        var description = Any.prototype.describe.call(this);
	        if (this._inner.ordereds.length) {
	            description.orderedItems = [];
	            for (var i = 0; i < this._inner.ordereds.length; ++i) {
	                description.orderedItems.push(this._inner.ordereds[i].describe());
	            }
	        }
	        if (this._inner.items.length) {
	            description.items = [];
	            for (var _i = 0; _i < this._inner.items.length; ++_i) {
	                description.items.push(this._inner.items[_i].describe());
	            }
	        }
	        return description;
	    };
	    _class.prototype.items = function items() {
	        var _this2 = this;
	        var obj = this.clone();
	        for (var _len = arguments.length, schemas = Array(_len), _key = 0; _key < _len; _key++) {
	            schemas[_key] = arguments[_key];
	        }
	        Hoek.flatten(schemas).forEach(function (type, index) {
	            try {
	                type = Cast.schema(_this2._currentJoi, type);
	            } catch (castErr) {
	                if (castErr.hasOwnProperty('path')) {
	                    castErr.path = index + '.' + castErr.path;
	                } else {
	                    castErr.path = index;
	                }
	                castErr.message = castErr.message + '(' + castErr.path + ')';
	                throw castErr;
	            }
	            obj._inner.items.push(type);
	            if (type._flags.presence === 'required') {
	                obj._inner.requireds.push(type);
	            } else if (type._flags.presence === 'forbidden') {
	                obj._inner.exclusions.push(type.optional());
	            } else {
	                obj._inner.inclusions.push(type);
	            }
	        });
	        return obj;
	    };
	    _class.prototype.ordered = function ordered() {
	        var _this3 = this;
	        var obj = this.clone();
	        for (var _len2 = arguments.length, schemas = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	            schemas[_key2] = arguments[_key2];
	        }
	        Hoek.flatten(schemas).forEach(function (type, index) {
	            try {
	                type = Cast.schema(_this3._currentJoi, type);
	            } catch (castErr) {
	                if (castErr.hasOwnProperty('path')) {
	                    castErr.path = index + '.' + castErr.path;
	                } else {
	                    castErr.path = index;
	                }
	                castErr.message = castErr.message + '(' + castErr.path + ')';
	                throw castErr;
	            }
	            obj._inner.ordereds.push(type);
	        });
	        return obj;
	    };
	    _class.prototype.min = function min(limit) {
	        var isRef = Ref.isRef(limit);
	        Hoek.assert(Number.isSafeInteger(limit) && limit >= 0 || isRef, 'limit must be a positive integer or reference');
	        return this._test('min', limit, function (value, state, options) {
	            var compareTo = void 0;
	            if (isRef) {
	                compareTo = limit(state.reference || state.parent, options);
	                if (!(Number.isSafeInteger(compareTo) && compareTo >= 0)) {
	                    return this.createError('array.ref', { ref: limit.key }, state, options);
	                }
	            } else {
	                compareTo = limit;
	            }
	            if (value.length >= compareTo) {
	                return value;
	            }
	            return this.createError('array.min', { limit: limit, value: value }, state, options);
	        });
	    };
	    _class.prototype.max = function max(limit) {
	        var isRef = Ref.isRef(limit);
	        Hoek.assert(Number.isSafeInteger(limit) && limit >= 0 || isRef, 'limit must be a positive integer or reference');
	        return this._test('max', limit, function (value, state, options) {
	            var compareTo = void 0;
	            if (isRef) {
	                compareTo = limit(state.reference || state.parent, options);
	                if (!(Number.isSafeInteger(compareTo) && compareTo >= 0)) {
	                    return this.createError('array.ref', { ref: limit.key }, state, options);
	                }
	            } else {
	                compareTo = limit;
	            }
	            if (value.length <= compareTo) {
	                return value;
	            }
	            return this.createError('array.max', { limit: limit, value: value }, state, options);
	        });
	    };
	    _class.prototype.length = function length(limit) {
	        var isRef = Ref.isRef(limit);
	        Hoek.assert(Number.isSafeInteger(limit) && limit >= 0 || isRef, 'limit must be a positive integer or reference');
	        return this._test('length', limit, function (value, state, options) {
	            var compareTo = void 0;
	            if (isRef) {
	                compareTo = limit(state.reference || state.parent, options);
	                if (!(Number.isSafeInteger(compareTo) && compareTo >= 0)) {
	                    return this.createError('array.ref', { ref: limit.key }, state, options);
	                }
	            } else {
	                compareTo = limit;
	            }
	            if (value.length === compareTo) {
	                return value;
	            }
	            return this.createError('array.length', { limit: limit, value: value }, state, options);
	        });
	    };
	    _class.prototype.unique = function unique(comparator) {
	        Hoek.assert(comparator === undefined || typeof comparator === 'function' || typeof comparator === 'string', 'comparator must be a function or a string');
	        var settings = {};
	        if (typeof comparator === 'string') {
	            settings.path = comparator;
	        } else if (typeof comparator === 'function') {
	            settings.comparator = comparator;
	        }
	        return this._test('unique', settings, function (value, state, options) {
	            var found = {
	                string: {},
	                number: {},
	                undefined: {},
	                boolean: {},
	                object: new Map(),
	                function: new Map(),
	                custom: new Map()
	            };
	            var compare = settings.comparator || Hoek.deepEqual;
	            for (var i = 0; i < value.length; ++i) {
	                var item = settings.path ? Hoek.reach(value[i], settings.path) : value[i];
	                var records = settings.comparator ? found.custom : found[typeof item === 'undefined' ? 'undefined' : _typeof(item)];
	                if (                         records                        ) {
	                        if (records instanceof Map) {
	                            var entries = records.entries();
	                            var current = void 0;
	                            while (!(current = entries.next()).done) {
	                                if (compare(current.value[0], item)) {
	                                    var localState = {
	                                        key: state.key,
	                                        path: state.path.concat(i),
	                                        parent: state.parent,
	                                        reference: state.reference
	                                    };
	                                    var context = {
	                                        pos: i,
	                                        value: value[i],
	                                        dupePos: current.value[1],
	                                        dupeValue: value[current.value[1]]
	                                    };
	                                    if (settings.path) {
	                                        context.path = settings.path;
	                                    }
	                                    return this.createError('array.unique', context, localState, options);
	                                }
	                            }
	                            records.set(item, i);
	                        } else {
	                            if (records[item] !== undefined) {
	                                var _localState = {
	                                    key: state.key,
	                                    path: state.path.concat(i),
	                                    parent: state.parent,
	                                    reference: state.reference
	                                };
	                                var _context = {
	                                    pos: i,
	                                    value: value[i],
	                                    dupePos: records[item],
	                                    dupeValue: value[records[item]]
	                                };
	                                if (settings.path) {
	                                    _context.path = settings.path;
	                                }
	                                return this.createError('array.unique', _context, _localState, options);
	                            }
	                            records[item] = i;
	                        }
	                    }
	            }
	            return value;
	        });
	    };
	    _class.prototype.sparse = function sparse(enabled) {
	        var value = enabled === undefined ? true : !!enabled;
	        if (this._flags.sparse === value) {
	            return this;
	        }
	        var obj = this.clone();
	        obj._flags.sparse = value;
	        return obj;
	    };
	    _class.prototype.single = function single(enabled) {
	        var value = enabled === undefined ? true : !!enabled;
	        if (this._flags.single === value) {
	            return this;
	        }
	        var obj = this.clone();
	        obj._flags.single = value;
	        return obj;
	    };
	    _class.prototype._fillMissedErrors = function _fillMissedErrors(errors, requireds, state, options) {
	        var knownMisses = [];
	        var unknownMisses = 0;
	        for (var i = 0; i < requireds.length; ++i) {
	            var label = requireds[i]._getLabel();
	            if (label) {
	                knownMisses.push(label);
	            } else {
	                ++unknownMisses;
	            }
	        }
	        if (knownMisses.length) {
	            if (unknownMisses) {
	                errors.push(this.createError('array.includesRequiredBoth', { knownMisses: knownMisses, unknownMisses: unknownMisses }, { key: state.key, path: state.path }, options));
	            } else {
	                errors.push(this.createError('array.includesRequiredKnowns', { knownMisses: knownMisses }, { key: state.key, path: state.path }, options));
	            }
	        } else {
	            errors.push(this.createError('array.includesRequiredUnknowns', { unknownMisses: unknownMisses }, { key: state.key, path: state.path }, options));
	        }
	    };
	    _class.prototype._fillOrderedErrors = function _fillOrderedErrors(errors, ordereds, state, options) {
	        var requiredOrdereds = [];
	        for (var i = 0; i < ordereds.length; ++i) {
	            var presence = Hoek.reach(ordereds[i], '_flags.presence');
	            if (presence === 'required') {
	                requiredOrdereds.push(ordereds[i]);
	            }
	        }
	        if (requiredOrdereds.length) {
	            this._fillMissedErrors.call(this, errors, requiredOrdereds, state, options);
	        }
	    };
	    return _class;
	}(Any);
	internals.safeParse = function (value, result) {
	    try {
	        var converted = JSON.parse(value);
	        if (Array.isArray(converted)) {
	            result.value = converted;
	        }
	    } catch (e) {}
	};
	module.exports = new internals.Array();
	      }),
	      (function(module, exports, __webpack_require__) {
	                           (function(Buffer) {
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	var Any = __webpack_require__(2);
	var Hoek = __webpack_require__(0);
	var internals = {};
	internals.Binary = function (_Any) {
	    _inherits(_class, _Any);
	    function _class() {
	        _classCallCheck(this, _class);
	        var _this = _possibleConstructorReturn(this, _Any.call(this));
	        _this._type = 'binary';
	        return _this;
	    }
	    _class.prototype._base = function _base(value, state, options) {
	        var result = {
	            value: value
	        };
	        if (typeof value === 'string' && options.convert) {
	            try {
	                result.value = new Buffer(value, this._flags.encoding);
	            } catch (e) {}
	        }
	        result.errors = Buffer.isBuffer(result.value) ? null : this.createError('binary.base', null, state, options);
	        return result;
	    };
	    _class.prototype.encoding = function encoding(_encoding) {
	        Hoek.assert(Buffer.isEncoding(_encoding), 'Invalid encoding:', _encoding);
	        if (this._flags.encoding === _encoding) {
	            return this;
	        }
	        var obj = this.clone();
	        obj._flags.encoding = _encoding;
	        return obj;
	    };
	    _class.prototype.min = function min(limit) {
	        Hoek.assert(Number.isSafeInteger(limit) && limit >= 0, 'limit must be a positive integer');
	        return this._test('min', limit, function (value, state, options) {
	            if (value.length >= limit) {
	                return value;
	            }
	            return this.createError('binary.min', { limit: limit, value: value }, state, options);
	        });
	    };
	    _class.prototype.max = function max(limit) {
	        Hoek.assert(Number.isSafeInteger(limit) && limit >= 0, 'limit must be a positive integer');
	        return this._test('max', limit, function (value, state, options) {
	            if (value.length <= limit) {
	                return value;
	            }
	            return this.createError('binary.max', { limit: limit, value: value }, state, options);
	        });
	    };
	    _class.prototype.length = function length(limit) {
	        Hoek.assert(Number.isSafeInteger(limit) && limit >= 0, 'limit must be a positive integer');
	        return this._test('length', limit, function (value, state, options) {
	            if (value.length === limit) {
	                return value;
	            }
	            return this.createError('binary.length', { limit: limit, value: value }, state, options);
	        });
	    };
	    return _class;
	}(Any);
	module.exports = new internals.Binary();
	                           }.call(exports, __webpack_require__(3).Buffer));
	      }),
	      (function(module, exports, __webpack_require__) {
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	var Any = __webpack_require__(2);
	var Hoek = __webpack_require__(0);
	var internals = {
	    Set: __webpack_require__(9)
	};
	internals.Boolean = function (_Any) {
	    _inherits(_class, _Any);
	    function _class() {
	        _classCallCheck(this, _class);
	        var _this = _possibleConstructorReturn(this, _Any.call(this));
	        _this._type = 'boolean';
	        _this._flags.insensitive = true;
	        _this._inner.truthySet = new internals.Set();
	        _this._inner.falsySet = new internals.Set();
	        return _this;
	    }
	    _class.prototype._base = function _base(value, state, options) {
	        var result = {
	            value: value
	        };
	        if (typeof value === 'string' && options.convert) {
	            var normalized = this._flags.insensitive ? value.toLowerCase() : value;
	            result.value = normalized === 'true' ? true : normalized === 'false' ? false : value;
	        }
	        if (typeof result.value !== 'boolean') {
	            result.value = this._inner.truthySet.has(value, null, null, this._flags.insensitive) ? true : this._inner.falsySet.has(value, null, null, this._flags.insensitive) ? false : value;
	        }
	        result.errors = typeof result.value === 'boolean' ? null : this.createError('boolean.base', null, state, options);
	        return result;
	    };
	    _class.prototype.truthy = function truthy() {
	        for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
	            values[_key] = arguments[_key];
	        }
	        var obj = this.clone();
	        values = Hoek.flatten(values);
	        for (var i = 0; i < values.length; ++i) {
	            var value = values[i];
	            Hoek.assert(value !== undefined, 'Cannot call truthy with undefined');
	            obj._inner.truthySet.add(value);
	        }
	        return obj;
	    };
	    _class.prototype.falsy = function falsy() {
	        for (var _len2 = arguments.length, values = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	            values[_key2] = arguments[_key2];
	        }
	        var obj = this.clone();
	        values = Hoek.flatten(values);
	        for (var i = 0; i < values.length; ++i) {
	            var value = values[i];
	            Hoek.assert(value !== undefined, 'Cannot call falsy with undefined');
	            obj._inner.falsySet.add(value);
	        }
	        return obj;
	    };
	    _class.prototype.insensitive = function insensitive(enabled) {
	        var insensitive = enabled === undefined ? true : !!enabled;
	        if (this._flags.insensitive === insensitive) {
	            return this;
	        }
	        var obj = this.clone();
	        obj._flags.insensitive = insensitive;
	        return obj;
	    };
	    _class.prototype.describe = function describe() {
	        var description = Any.prototype.describe.call(this);
	        description.truthy = [true].concat(this._inner.truthySet.values());
	        description.falsy = [false].concat(this._inner.falsySet.values());
	        return description;
	    };
	    return _class;
	}(Any);
	module.exports = new internals.Boolean();
	      }),
	      (function(module, exports, __webpack_require__) {
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	var Hoek = __webpack_require__(0);
	var ObjectType = __webpack_require__(12);
	var Ref = __webpack_require__(1);
	var internals = {};
	internals.Func = function (_ObjectType$construct) {
	    _inherits(_class, _ObjectType$construct);
	    function _class() {
	        _classCallCheck(this, _class);
	        var _this = _possibleConstructorReturn(this, _ObjectType$construct.call(this));
	        _this._flags.func = true;
	        return _this;
	    }
	    _class.prototype.arity = function arity(n) {
	        Hoek.assert(Number.isSafeInteger(n) && n >= 0, 'n must be a positive integer');
	        return this._test('arity', n, function (value, state, options) {
	            if (value.length === n) {
	                return value;
	            }
	            return this.createError('function.arity', { n: n }, state, options);
	        });
	    };
	    _class.prototype.minArity = function minArity(n) {
	        Hoek.assert(Number.isSafeInteger(n) && n > 0, 'n must be a strict positive integer');
	        return this._test('minArity', n, function (value, state, options) {
	            if (value.length >= n) {
	                return value;
	            }
	            return this.createError('function.minArity', { n: n }, state, options);
	        });
	    };
	    _class.prototype.maxArity = function maxArity(n) {
	        Hoek.assert(Number.isSafeInteger(n) && n >= 0, 'n must be a positive integer');
	        return this._test('maxArity', n, function (value, state, options) {
	            if (value.length <= n) {
	                return value;
	            }
	            return this.createError('function.maxArity', { n: n }, state, options);
	        });
	    };
	    _class.prototype.ref = function ref() {
	        return this._test('ref', null, function (value, state, options) {
	            if (Ref.isRef(value)) {
	                return value;
	            }
	            return this.createError('function.ref', null, state, options);
	        });
	    };
	    _class.prototype.class = function _class() {
	        return this._test('class', null, function (value, state, options) {
	            if (/^\s*class\s/.test(value.toString())) {
	                return value;
	            }
	            return this.createError('function.class', null, state, options);
	        });
	    };
	    return _class;
	}(ObjectType.constructor);
	module.exports = new internals.Func();
	      }),
	      (function(module, exports, __webpack_require__) {
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	var Any = __webpack_require__(2);
	var Hoek = __webpack_require__(0);
	var internals = {};
	internals.Lazy = function (_Any) {
	    _inherits(_class, _Any);
	    function _class() {
	        _classCallCheck(this, _class);
	        var _this = _possibleConstructorReturn(this, _Any.call(this));
	        _this._type = 'lazy';
	        return _this;
	    }
	    _class.prototype._base = function _base(value, state, options) {
	        var result = { value: value };
	        var lazy = this._flags.lazy;
	        if (!lazy) {
	            result.errors = this.createError('lazy.base', null, state, options);
	            return result;
	        }
	        var schema = lazy();
	        if (!(schema instanceof Any)) {
	            result.errors = this.createError('lazy.schema', null, state, options);
	            return result;
	        }
	        return schema._validate(value, state, options);
	    };
	    _class.prototype.set = function set(fn) {
	        Hoek.assert(typeof fn === 'function', 'You must provide a function as first argument');
	        var obj = this.clone();
	        obj._flags.lazy = fn;
	        return obj;
	    };
	    return _class;
	}(Any);
	module.exports = new internals.Lazy();
	      }),
	      (function(module, exports, __webpack_require__) {
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	var Any = __webpack_require__(2);
	var Ref = __webpack_require__(1);
	var Hoek = __webpack_require__(0);
	var internals = {
	    precisionRx: /(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/
	};
	internals.Number = function (_Any) {
	    _inherits(_class, _Any);
	    function _class() {
	        _classCallCheck(this, _class);
	        var _this = _possibleConstructorReturn(this, _Any.call(this));
	        _this._type = 'number';
	        _this._invalids.add(Infinity);
	        _this._invalids.add(-Infinity);
	        return _this;
	    }
	    _class.prototype._base = function _base(value, state, options) {
	        var result = {
	            errors: null,
	            value: value
	        };
	        if (typeof value === 'string' && options.convert) {
	            var number = parseFloat(value);
	            result.value = isNaN(number) || !isFinite(value) ? NaN : number;
	        }
	        var isNumber = typeof result.value === 'number' && !isNaN(result.value);
	        if (options.convert && 'precision' in this._flags && isNumber) {
	            var precision = Math.pow(10, this._flags.precision);
	            result.value = Math.round(result.value * precision) / precision;
	        }
	        result.errors = isNumber ? null : this.createError('number.base', null, state, options);
	        return result;
	    };
	    _class.prototype.multiple = function multiple(base) {
	        var isRef = Ref.isRef(base);
	        if (!isRef) {
	            Hoek.assert(typeof base === 'number' && isFinite(base), 'multiple must be a number');
	            Hoek.assert(base > 0, 'multiple must be greater than 0');
	        }
	        return this._test('multiple', base, function (value, state, options) {
	            var divisor = isRef ? base(state.reference || state.parent, options) : base;
	            if (isRef && (typeof divisor !== 'number' || !isFinite(divisor))) {
	                return this.createError('number.ref', { ref: base.key }, state, options);
	            }
	            if (value % divisor === 0) {
	                return value;
	            }
	            return this.createError('number.multiple', { multiple: base, value: value }, state, options);
	        });
	    };
	    _class.prototype.integer = function integer() {
	        return this._test('integer', undefined, function (value, state, options) {
	            return Number.isSafeInteger(value) ? value : this.createError('number.integer', { value: value }, state, options);
	        });
	    };
	    _class.prototype.negative = function negative() {
	        return this._test('negative', undefined, function (value, state, options) {
	            if (value < 0) {
	                return value;
	            }
	            return this.createError('number.negative', { value: value }, state, options);
	        });
	    };
	    _class.prototype.positive = function positive() {
	        return this._test('positive', undefined, function (value, state, options) {
	            if (value > 0) {
	                return value;
	            }
	            return this.createError('number.positive', { value: value }, state, options);
	        });
	    };
	    _class.prototype.precision = function precision(limit) {
	        Hoek.assert(Number.isSafeInteger(limit), 'limit must be an integer');
	        Hoek.assert(!('precision' in this._flags), 'precision already set');
	        var obj = this._test('precision', limit, function (value, state, options) {
	            var places = value.toString().match(internals.precisionRx);
	            var decimals = Math.max((places[1] ? places[1].length : 0) - (places[2] ? parseInt(places[2], 10) : 0), 0);
	            if (decimals <= limit) {
	                return value;
	            }
	            return this.createError('number.precision', { limit: limit, value: value }, state, options);
	        });
	        obj._flags.precision = limit;
	        return obj;
	    };
	    return _class;
	}(Any);
	internals.compare = function (type, compare) {
	    return function (limit) {
	        var isRef = Ref.isRef(limit);
	        var isNumber = typeof limit === 'number' && !isNaN(limit);
	        Hoek.assert(isNumber || isRef, 'limit must be a number or reference');
	        return this._test(type, limit, function (value, state, options) {
	            var compareTo = void 0;
	            if (isRef) {
	                compareTo = limit(state.reference || state.parent, options);
	                if (!(typeof compareTo === 'number' && !isNaN(compareTo))) {
	                    return this.createError('number.ref', { ref: limit.key }, state, options);
	                }
	            } else {
	                compareTo = limit;
	            }
	            if (compare(value, compareTo)) {
	                return value;
	            }
	            return this.createError('number.' + type, { limit: compareTo, value: value }, state, options);
	        });
	    };
	};
	internals.Number.prototype.min = internals.compare('min', function (value, limit) {
	    return value >= limit;
	});
	internals.Number.prototype.max = internals.compare('max', function (value, limit) {
	    return value <= limit;
	});
	internals.Number.prototype.greater = internals.compare('greater', function (value, limit) {
	    return value > limit;
	});
	internals.Number.prototype.less = internals.compare('less', function (value, limit) {
	    return value < limit;
	});
	module.exports = new internals.Number();
	      }),
	      (function(module, exports, __webpack_require__) {
	                           (function(Buffer) {
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	var Net = __webpack_require__(14);
	var Hoek = __webpack_require__(0);
	var Isemail = void 0;
	var Any = __webpack_require__(2);
	var Ref = __webpack_require__(1);
	var JoiDate = __webpack_require__(11);
	var Uri = __webpack_require__(27);
	var Ip = __webpack_require__(26);
	var internals = {
	    uriRegex: Uri.createUriRegex(),
	    ipRegex: Ip.createIpRegex(['ipv4', 'ipv6', 'ipvfuture'], 'optional'),
	    guidBrackets: {
	        '{': '}', '[': ']', '(': ')', '': ''
	    },
	    guidVersions: {
	        uuidv1: '1',
	        uuidv2: '2',
	        uuidv3: '3',
	        uuidv4: '4',
	        uuidv5: '5'
	    },
	    cidrPresences: ['required', 'optional', 'forbidden'],
	    normalizationForms: ['NFC', 'NFD', 'NFKC', 'NFKD']
	};
	internals.String = function (_Any) {
	    _inherits(_class, _Any);
	    function _class() {
	        _classCallCheck(this, _class);
	        var _this = _possibleConstructorReturn(this, _Any.call(this));
	        _this._type = 'string';
	        _this._invalids.add('');
	        return _this;
	    }
	    _class.prototype._base = function _base(value, state, options) {
	        if (typeof value === 'string' && options.convert) {
	            if (this._flags.normalize) {
	                value = value.normalize(this._flags.normalize);
	            }
	            if (this._flags.case) {
	                value = this._flags.case === 'upper' ? value.toLocaleUpperCase() : value.toLocaleLowerCase();
	            }
	            if (this._flags.trim) {
	                value = value.trim();
	            }
	            if (this._inner.replacements) {
	                for (var i = 0; i < this._inner.replacements.length; ++i) {
	                    var replacement = this._inner.replacements[i];
	                    value = value.replace(replacement.pattern, replacement.replacement);
	                }
	            }
	            if (this._flags.truncate) {
	                for (var _i = 0; _i < this._tests.length; ++_i) {
	                    var test = this._tests[_i];
	                    if (test.name === 'max') {
	                        value = value.slice(0, test.arg);
	                        break;
	                    }
	                }
	            }
	        }
	        return {
	            value: value,
	            errors: typeof value === 'string' ? null : this.createError('string.base', { value: value }, state, options)
	        };
	    };
	    _class.prototype.insensitive = function insensitive() {
	        if (this._flags.insensitive) {
	            return this;
	        }
	        var obj = this.clone();
	        obj._flags.insensitive = true;
	        return obj;
	    };
	    _class.prototype.creditCard = function creditCard() {
	        return this._test('creditCard', undefined, function (value, state, options) {
	            var i = value.length;
	            var sum = 0;
	            var mul = 1;
	            while (i--) {
	                var char = value.charAt(i) * mul;
	                sum = sum + (char - (char > 9) * 9);
	                mul = mul ^ 3;
	            }
	            var check = sum % 10 === 0 && sum > 0;
	            return check ? value : this.createError('string.creditCard', { value: value }, state, options);
	        });
	    };
	    _class.prototype.regex = function regex(pattern, patternOptions) {
	        Hoek.assert(pattern instanceof RegExp, 'pattern must be a RegExp');
	        var patternObject = {
	            pattern: new RegExp(pattern.source, pattern.ignoreCase ? 'i' : undefined)
	        };
	        if (typeof patternOptions === 'string') {
	            patternObject.name = patternOptions;
	        } else if ((typeof patternOptions === 'undefined' ? 'undefined' : _typeof(patternOptions)) === 'object') {
	            patternObject.invert = !!patternOptions.invert;
	            if (patternOptions.name) {
	                patternObject.name = patternOptions.name;
	            }
	        }
	        var errorCode = ['string.regex', patternObject.invert ? '.invert' : '', patternObject.name ? '.name' : '.base'].join('');
	        return this._test('regex', patternObject, function (value, state, options) {
	            var patternMatch = patternObject.pattern.test(value);
	            if (patternMatch ^ patternObject.invert) {
	                return value;
	            }
	            return this.createError(errorCode, { name: patternObject.name, pattern: patternObject.pattern, value: value }, state, options);
	        });
	    };
	    _class.prototype.alphanum = function alphanum() {
	        return this._test('alphanum', undefined, function (value, state, options) {
	            if (/^[a-zA-Z0-9]+$/.test(value)) {
	                return value;
	            }
	            return this.createError('string.alphanum', { value: value }, state, options);
	        });
	    };
	    _class.prototype.token = function token() {
	        return this._test('token', undefined, function (value, state, options) {
	            if (/^\w+$/.test(value)) {
	                return value;
	            }
	            return this.createError('string.token', { value: value }, state, options);
	        });
	    };
	    _class.prototype.email = function email(isEmailOptions) {
	        if (isEmailOptions) {
	            Hoek.assert((typeof isEmailOptions === 'undefined' ? 'undefined' : _typeof(isEmailOptions)) === 'object', 'email options must be an object');
	            Hoek.assert(typeof isEmailOptions.checkDNS === 'undefined', 'checkDNS option is not supported');
	            Hoek.assert(typeof isEmailOptions.tldWhitelist === 'undefined' || _typeof(isEmailOptions.tldWhitelist) === 'object', 'tldWhitelist must be an array or object');
	            Hoek.assert(typeof isEmailOptions.minDomainAtoms === 'undefined' || Number.isSafeInteger(isEmailOptions.minDomainAtoms) && isEmailOptions.minDomainAtoms > 0, 'minDomainAtoms must be a positive integer');
	            Hoek.assert(typeof isEmailOptions.errorLevel === 'undefined' || typeof isEmailOptions.errorLevel === 'boolean' || Number.isSafeInteger(isEmailOptions.errorLevel) && isEmailOptions.errorLevel >= 0, 'errorLevel must be a non-negative integer or boolean');
	        }
	        return this._test('email', isEmailOptions, function (value, state, options) {
	            Isemail = Isemail || __webpack_require__(16);
	            try {
	                var result = Isemail.validate(value, isEmailOptions);
	                if (result === true || result === 0) {
	                    return value;
	                }
	            } catch (e) {}
	            return this.createError('string.email', { value: value }, state, options);
	        });
	    };
	    _class.prototype.ip = function ip() {
	        var ipOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	        var regex = internals.ipRegex;
	        Hoek.assert((typeof ipOptions === 'undefined' ? 'undefined' : _typeof(ipOptions)) === 'object', 'options must be an object');
	        if (ipOptions.cidr) {
	            Hoek.assert(typeof ipOptions.cidr === 'string', 'cidr must be a string');
	            ipOptions.cidr = ipOptions.cidr.toLowerCase();
	            Hoek.assert(Hoek.contain(internals.cidrPresences, ipOptions.cidr), 'cidr must be one of ' + internals.cidrPresences.join(', '));
	            if (!ipOptions.version && ipOptions.cidr !== 'optional') {
	                regex = Ip.createIpRegex(['ipv4', 'ipv6', 'ipvfuture'], ipOptions.cidr);
	            }
	        } else {
	            ipOptions.cidr = 'optional';
	        }
	        var versions = void 0;
	        if (ipOptions.version) {
	            if (!Array.isArray(ipOptions.version)) {
	                ipOptions.version = [ipOptions.version];
	            }
	            Hoek.assert(ipOptions.version.length >= 1, 'version must have at least 1 version specified');
	            versions = [];
	            for (var i = 0; i < ipOptions.version.length; ++i) {
	                var version = ipOptions.version[i];
	                Hoek.assert(typeof version === 'string', 'version at position ' + i + ' must be a string');
	                version = version.toLowerCase();
	                Hoek.assert(Ip.versions[version], 'version at position ' + i + ' must be one of ' + Object.keys(Ip.versions).join(', '));
	                versions.push(version);
	            }
	            versions = Hoek.unique(versions);
	            regex = Ip.createIpRegex(versions, ipOptions.cidr);
	        }
	        return this._test('ip', ipOptions, function (value, state, options) {
	            if (regex.test(value)) {
	                return value;
	            }
	            if (versions) {
	                return this.createError('string.ipVersion', { value: value, cidr: ipOptions.cidr, version: versions }, state, options);
	            }
	            return this.createError('string.ip', { value: value, cidr: ipOptions.cidr }, state, options);
	        });
	    };
	    _class.prototype.uri = function uri(uriOptions) {
	        var customScheme = '';
	        var allowRelative = false;
	        var relativeOnly = false;
	        var regex = internals.uriRegex;
	        if (uriOptions) {
	            Hoek.assert((typeof uriOptions === 'undefined' ? 'undefined' : _typeof(uriOptions)) === 'object', 'options must be an object');
	            if (uriOptions.scheme) {
	                Hoek.assert(uriOptions.scheme instanceof RegExp || typeof uriOptions.scheme === 'string' || Array.isArray(uriOptions.scheme), 'scheme must be a RegExp, String, or Array');
	                if (!Array.isArray(uriOptions.scheme)) {
	                    uriOptions.scheme = [uriOptions.scheme];
	                }
	                Hoek.assert(uriOptions.scheme.length >= 1, 'scheme must have at least 1 scheme specified');
	                for (var i = 0; i < uriOptions.scheme.length; ++i) {
	                    var scheme = uriOptions.scheme[i];
	                    Hoek.assert(scheme instanceof RegExp || typeof scheme === 'string', 'scheme at position ' + i + ' must be a RegExp or String');
	                    customScheme = customScheme + (customScheme ? '|' : '');
	                    if (scheme instanceof RegExp) {
	                        customScheme = customScheme + scheme.source;
	                    } else {
	                        Hoek.assert(/[a-zA-Z][a-zA-Z0-9+-\.]*/.test(scheme), 'scheme at position ' + i + ' must be a valid scheme');
	                        customScheme = customScheme + Hoek.escapeRegex(scheme);
	                    }
	                }
	            }
	            if (uriOptions.allowRelative) {
	                allowRelative = true;
	            }
	            if (uriOptions.relativeOnly) {
	                relativeOnly = true;
	            }
	        }
	        if (customScheme || allowRelative || relativeOnly) {
	            regex = Uri.createUriRegex(customScheme, allowRelative, relativeOnly);
	        }
	        return this._test('uri', uriOptions, function (value, state, options) {
	            if (regex.test(value)) {
	                return value;
	            }
	            if (relativeOnly) {
	                return this.createError('string.uriRelativeOnly', { value: value }, state, options);
	            }
	            if (customScheme) {
	                return this.createError('string.uriCustomScheme', { scheme: customScheme, value: value }, state, options);
	            }
	            return this.createError('string.uri', { value: value }, state, options);
	        });
	    };
	    _class.prototype.isoDate = function isoDate() {
	        return this._test('isoDate', undefined, function (value, state, options) {
	            if (JoiDate._isIsoDate(value)) {
	                if (!options.convert) {
	                    return value;
	                }
	                var d = new Date(value);
	                if (!isNaN(d.getTime())) {
	                    return d.toISOString();
	                }
	            }
	            return this.createError('string.isoDate', { value: value }, state, options);
	        });
	    };
	    _class.prototype.guid = function guid(guidOptions) {
	        var versionNumbers = '';
	        if (guidOptions && guidOptions.version) {
	            if (!Array.isArray(guidOptions.version)) {
	                guidOptions.version = [guidOptions.version];
	            }
	            Hoek.assert(guidOptions.version.length >= 1, 'version must have at least 1 valid version specified');
	            var versions = new Set();
	            for (var i = 0; i < guidOptions.version.length; ++i) {
	                var version = guidOptions.version[i];
	                Hoek.assert(typeof version === 'string', 'version at position ' + i + ' must be a string');
	                version = version.toLowerCase();
	                var versionNumber = internals.guidVersions[version];
	                Hoek.assert(versionNumber, 'version at position ' + i + ' must be one of ' + Object.keys(internals.guidVersions).join(', '));
	                Hoek.assert(!versions.has(versionNumber), 'version at position ' + i + ' must not be a duplicate.');
	                versionNumbers += versionNumber;
	                versions.add(versionNumber);
	            }
	        }
	        var guidRegex = new RegExp('^([\\[{\\(]?)[0-9A-F]{8}([:-]?)[0-9A-F]{4}\\2?[' + (versionNumbers || '0-9A-F') + '][0-9A-F]{3}\\2?[' + (versionNumbers ? '89AB' : '0-9A-F') + '][0-9A-F]{3}\\2?[0-9A-F]{12}([\\]}\\)]?)$', 'i');
	        return this._test('guid', guidOptions, function (value, state, options) {
	            var results = guidRegex.exec(value);
	            if (!results) {
	                return this.createError('string.guid', { value: value }, state, options);
	            }
	            if (internals.guidBrackets[results[1]] !== results[results.length - 1]) {
	                return this.createError('string.guid', { value: value }, state, options);
	            }
	            return value;
	        });
	    };
	    _class.prototype.hex = function hex() {
	        var regex = /^[a-f0-9]+$/i;
	        return this._test('hex', regex, function (value, state, options) {
	            if (regex.test(value)) {
	                return value;
	            }
	            return this.createError('string.hex', { value: value }, state, options);
	        });
	    };
	    _class.prototype.base64 = function base64() {
	        var base64Options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	        Hoek.assert((typeof base64Options === 'undefined' ? 'undefined' : _typeof(base64Options)) === 'object', 'base64 options must be an object');
	        Hoek.assert(typeof base64Options.paddingRequired === 'undefined' || typeof base64Options.paddingRequired === 'boolean', 'paddingRequired must be boolean');
	        var paddingRequired = base64Options.paddingRequired === false ? base64Options.paddingRequired : base64Options.paddingRequired || true;
	        var regex = paddingRequired ?
	        /^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/
	        : /^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}(==)?|[A-Za-z0-9+\/]{3}=?)?$/;
	        return this._test('base64', regex, function (value, state, options) {
	            if (regex.test(value)) {
	                return value;
	            }
	            return this.createError('string.base64', { value: value }, state, options);
	        });
	    };
	    _class.prototype.hostname = function hostname() {
	        var regex = /^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\-]*[A-Za-z0-9])$/;
	        return this._test('hostname', undefined, function (value, state, options) {
	            if (value.length <= 255 && regex.test(value) || Net.isIPv6(value)) {
	                return value;
	            }
	            return this.createError('string.hostname', { value: value }, state, options);
	        });
	    };
	    _class.prototype.normalize = function normalize() {
	        var form = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'NFC';
	        Hoek.assert(Hoek.contain(internals.normalizationForms, form), 'normalization form must be one of ' + internals.normalizationForms.join(', '));
	        var obj = this._test('normalize', form, function (value, state, options) {
	            if (options.convert || value === value.normalize(form)) {
	                return value;
	            }
	            return this.createError('string.normalize', { value: value, form: form }, state, options);
	        });
	        obj._flags.normalize = form;
	        return obj;
	    };
	    _class.prototype.lowercase = function lowercase() {
	        var obj = this._test('lowercase', undefined, function (value, state, options) {
	            if (options.convert || value === value.toLocaleLowerCase()) {
	                return value;
	            }
	            return this.createError('string.lowercase', { value: value }, state, options);
	        });
	        obj._flags.case = 'lower';
	        return obj;
	    };
	    _class.prototype.uppercase = function uppercase() {
	        var obj = this._test('uppercase', undefined, function (value, state, options) {
	            if (options.convert || value === value.toLocaleUpperCase()) {
	                return value;
	            }
	            return this.createError('string.uppercase', { value: value }, state, options);
	        });
	        obj._flags.case = 'upper';
	        return obj;
	    };
	    _class.prototype.trim = function trim() {
	        var obj = this._test('trim', undefined, function (value, state, options) {
	            if (options.convert || value === value.trim()) {
	                return value;
	            }
	            return this.createError('string.trim', { value: value }, state, options);
	        });
	        obj._flags.trim = true;
	        return obj;
	    };
	    _class.prototype.replace = function replace(pattern, replacement) {
	        if (typeof pattern === 'string') {
	            pattern = new RegExp(Hoek.escapeRegex(pattern), 'g');
	        }
	        Hoek.assert(pattern instanceof RegExp, 'pattern must be a RegExp');
	        Hoek.assert(typeof replacement === 'string', 'replacement must be a String');
	        var obj = this.clone();
	        if (!obj._inner.replacements) {
	            obj._inner.replacements = [];
	        }
	        obj._inner.replacements.push({
	            pattern: pattern,
	            replacement: replacement
	        });
	        return obj;
	    };
	    _class.prototype.truncate = function truncate(enabled) {
	        var value = enabled === undefined ? true : !!enabled;
	        if (this._flags.truncate === value) {
	            return this;
	        }
	        var obj = this.clone();
	        obj._flags.truncate = value;
	        return obj;
	    };
	    return _class;
	}(Any);
	internals.compare = function (type, compare) {
	    return function (limit, encoding) {
	        var isRef = Ref.isRef(limit);
	        Hoek.assert(Number.isSafeInteger(limit) && limit >= 0 || isRef, 'limit must be a positive integer or reference');
	        Hoek.assert(!encoding || Buffer.isEncoding(encoding), 'Invalid encoding:', encoding);
	        return this._test(type, limit, function (value, state, options) {
	            var compareTo = void 0;
	            if (isRef) {
	                compareTo = limit(state.reference || state.parent, options);
	                if (!Number.isSafeInteger(compareTo)) {
	                    return this.createError('string.ref', { ref: limit.key }, state, options);
	                }
	            } else {
	                compareTo = limit;
	            }
	            if (compare(value, compareTo, encoding)) {
	                return value;
	            }
	            return this.createError('string.' + type, { limit: compareTo, value: value, encoding: encoding }, state, options);
	        });
	    };
	};
	internals.String.prototype.min = internals.compare('min', function (value, limit, encoding) {
	    var length = encoding ? Buffer.byteLength(value, encoding) : value.length;
	    return length >= limit;
	});
	internals.String.prototype.max = internals.compare('max', function (value, limit, encoding) {
	    var length = encoding ? Buffer.byteLength(value, encoding) : value.length;
	    return length <= limit;
	});
	internals.String.prototype.length = internals.compare('length', function (value, limit, encoding) {
	    var length = encoding ? Buffer.byteLength(value, encoding) : value.length;
	    return length === limit;
	});
	internals.String.prototype.uuid = internals.String.prototype.guid;
	module.exports = new internals.String();
	                           }.call(exports, __webpack_require__(3).Buffer));
	      }),
	      (function(module, exports, __webpack_require__) {
	var RFC3986 = __webpack_require__(13);
	var internals = {
	    Ip: {
	        cidrs: {
	            ipv4: {
	                required: '\\/(?:' + RFC3986.ipv4Cidr + ')',
	                optional: '(?:\\/(?:' + RFC3986.ipv4Cidr + '))?',
	                forbidden: ''
	            },
	            ipv6: {
	                required: '\\/' + RFC3986.ipv6Cidr,
	                optional: '(?:\\/' + RFC3986.ipv6Cidr + ')?',
	                forbidden: ''
	            },
	            ipvfuture: {
	                required: '\\/' + RFC3986.ipv6Cidr,
	                optional: '(?:\\/' + RFC3986.ipv6Cidr + ')?',
	                forbidden: ''
	            }
	        },
	        versions: {
	            ipv4: RFC3986.IPv4address,
	            ipv6: RFC3986.IPv6address,
	            ipvfuture: RFC3986.IPvFuture
	        }
	    }
	};
	internals.Ip.createIpRegex = function (versions, cidr) {
	    var regex = void 0;
	    for (var i = 0; i < versions.length; ++i) {
	        var version = versions[i];
	        if (!regex) {
	            regex = '^(?:' + internals.Ip.versions[version] + internals.Ip.cidrs[version][cidr];
	        } else {
	            regex += '|' + internals.Ip.versions[version] + internals.Ip.cidrs[version][cidr];
	        }
	    }
	    return new RegExp(regex + ')$');
	};
	module.exports = internals.Ip;
	      }),
	      (function(module, exports, __webpack_require__) {
	var RFC3986 = __webpack_require__(13);
	var internals = {
	    Uri: {
	        createUriRegex: function createUriRegex(optionalScheme, allowRelative, relativeOnly) {
	            var scheme = RFC3986.scheme;
	            var prefix = void 0;
	            if (relativeOnly) {
	                prefix = '(?:' + RFC3986.relativeRef + ')';
	            } else {
	                if (optionalScheme) {
	                    scheme = '(?:' + optionalScheme + ')';
	                }
	                var withScheme = '(?:' + scheme + ':' + RFC3986.hierPart + ')';
	                prefix = allowRelative ? '(?:' + withScheme + '|' + RFC3986.relativeRef + ')' : withScheme;
	            }
	            return new RegExp('^' + prefix + '(?:\\?' + RFC3986.query + ')?' + '(?:#' + RFC3986.fragment + ')?$');
	        }
	    }
	};
	module.exports = internals.Uri;
	      }),
	      (function(module, exports, __webpack_require__) {
	var Hoek = __webpack_require__(0);
	var internals = {};
	exports = module.exports = internals.Topo = function () {
	    this._items = [];
	    this.nodes = [];
	};
	internals.Topo.prototype.add = function (nodes, options) {
	    var _this = this;
	    options = options || {};
	    var before = [].concat(options.before || []);
	    var after = [].concat(options.after || []);
	    var group = options.group || '?';
	    var sort = options.sort || 0;
	    Hoek.assert(before.indexOf(group) === -1, 'Item cannot come before itself:', group);
	    Hoek.assert(before.indexOf('?') === -1, 'Item cannot come before unassociated items');
	    Hoek.assert(after.indexOf(group) === -1, 'Item cannot come after itself:', group);
	    Hoek.assert(after.indexOf('?') === -1, 'Item cannot come after unassociated items');
	    [].concat(nodes).forEach(function (node, i) {
	        var item = {
	            seq: _this._items.length,
	            sort: sort,
	            before: before,
	            after: after,
	            group: group,
	            node: node
	        };
	        _this._items.push(item);
	    });
	    var error = this._sort();
	    Hoek.assert(!error, 'item', group !== '?' ? 'added into group ' + group : '', 'created a dependencies error');
	    return this.nodes;
	};
	internals.Topo.prototype.merge = function (others) {
	    others = [].concat(others);
	    for (var i = 0; i < others.length; ++i) {
	        var other = others[i];
	        if (other) {
	            for (var j = 0; j < other._items.length; ++j) {
	                var item = Hoek.shallow(other._items[j]);
	                this._items.push(item);
	            }
	        }
	    }
	    this._items.sort(internals.mergeSort);
	    for (var _i = 0; _i < this._items.length; ++_i) {
	        this._items[_i].seq = _i;
	    }
	    var error = this._sort();
	    Hoek.assert(!error, 'merge created a dependencies error');
	    return this.nodes;
	};
	internals.mergeSort = function (a, b) {
	    return a.sort === b.sort ? 0 : a.sort < b.sort ? -1 : 1;
	};
	internals.Topo.prototype._sort = function () {
	    var graph = {};
	    var graphAfters = Object.create(null);
	    var groups = Object.create(null);
	    for (var i = 0; i < this._items.length; ++i) {
	        var item = this._items[i];
	        var seq = item.seq;
	        var group = item.group;
	        groups[group] = groups[group] || [];
	        groups[group].push(seq);
	        graph[seq] = item.before;
	        var after = item.after;
	        for (var j = 0; j < after.length; ++j) {
	            graphAfters[after[j]] = (graphAfters[after[j]] || []).concat(seq);
	        }
	    }
	    var graphNodes = Object.keys(graph);
	    for (var _i2 = 0; _i2 < graphNodes.length; ++_i2) {
	        var node = graphNodes[_i2];
	        var expandedGroups = [];
	        var graphNodeItems = Object.keys(graph[node]);
	        for (var _j = 0; _j < graphNodeItems.length; ++_j) {
	            var _group = graph[node][graphNodeItems[_j]];
	            groups[_group] = groups[_group] || [];
	            for (var k = 0; k < groups[_group].length; ++k) {
	                expandedGroups.push(groups[_group][k]);
	            }
	        }
	        graph[node] = expandedGroups;
	    }
	    var afterNodes = Object.keys(graphAfters);
	    for (var _i3 = 0; _i3 < afterNodes.length; ++_i3) {
	        var _group2 = afterNodes[_i3];
	        if (groups[_group2]) {
	            for (var _j2 = 0; _j2 < groups[_group2].length; ++_j2) {
	                var _node = groups[_group2][_j2];
	                graph[_node] = graph[_node].concat(graphAfters[_group2]);
	            }
	        }
	    }
	    var children = void 0;
	    var ancestors = {};
	    graphNodes = Object.keys(graph);
	    for (var _i4 = 0; _i4 < graphNodes.length; ++_i4) {
	        var _node2 = graphNodes[_i4];
	        children = graph[_node2];
	        for (var _j3 = 0; _j3 < children.length; ++_j3) {
	            ancestors[children[_j3]] = (ancestors[children[_j3]] || []).concat(_node2);
	        }
	    }
	    var visited = {};
	    var sorted = [];
	    for (var _i5 = 0; _i5 < this._items.length; ++_i5) {
	        var next = _i5;
	        if (ancestors[_i5]) {
	            next = null;
	            for (var _j4 = 0; _j4 < this._items.length; ++_j4) {
	                if (visited[_j4] === true) {
	                    continue;
	                }
	                if (!ancestors[_j4]) {
	                    ancestors[_j4] = [];
	                }
	                var shouldSeeCount = ancestors[_j4].length;
	                var seenCount = 0;
	                for (var _k = 0; _k < shouldSeeCount; ++_k) {
	                    if (visited[ancestors[_j4][_k]]) {
	                        ++seenCount;
	                    }
	                }
	                if (seenCount === shouldSeeCount) {
	                    next = _j4;
	                    break;
	                }
	            }
	        }
	        if (next !== null) {
	            visited[next] = true;
	            sorted.push(next);
	        }
	    }
	    if (sorted.length !== this._items.length) {
	        return new Error('Invalid dependencies');
	    }
	    var seqIndex = {};
	    for (var _i6 = 0; _i6 < this._items.length; ++_i6) {
	        var _item = this._items[_i6];
	        seqIndex[_item.seq] = _item;
	    }
	    var sortedNodes = [];
	    this._items = sorted.map(function (value) {
	        var sortedItem = seqIndex[value];
	        sortedNodes.push(sortedItem.node);
	        return sortedItem;
	    });
	    this.nodes = sortedNodes;
	};
	      }),
	      (function(module, exports, __webpack_require__) {
	var Joi = __webpack_require__(8);
	module.exports = Joi;
	      }),
	      (function(module, exports, __webpack_require__) {
	exports.byteLength = byteLength;
	exports.toByteArray = toByteArray;
	exports.fromByteArray = fromByteArray;
	var lookup = [];
	var revLookup = [];
	var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
	var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
	for (var i = 0, len = code.length; i < len; ++i) {
	  lookup[i] = code[i];
	  revLookup[code.charCodeAt(i)] = i;
	}
	revLookup['-'.charCodeAt(0)] = 62;
	revLookup['_'.charCodeAt(0)] = 63;
	function placeHoldersCount (b64) {
	  var len = b64.length;
	  if (len % 4 > 0) {
	    throw new Error('Invalid string. Length must be a multiple of 4')
	  }
	  return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0
	}
	function byteLength (b64) {
	  return (b64.length * 3 / 4) - placeHoldersCount(b64)
	}
	function toByteArray (b64) {
	  var i, l, tmp, placeHolders, arr;
	  var len = b64.length;
	  placeHolders = placeHoldersCount(b64);
	  arr = new Arr((len * 3 / 4) - placeHolders);
	  l = placeHolders > 0 ? len - 4 : len;
	  var L = 0;
	  for (i = 0; i < l; i += 4) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)];
	    arr[L++] = (tmp >> 16) & 0xFF;
	    arr[L++] = (tmp >> 8) & 0xFF;
	    arr[L++] = tmp & 0xFF;
	  }
	  if (placeHolders === 2) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4);
	    arr[L++] = tmp & 0xFF;
	  } else if (placeHolders === 1) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2);
	    arr[L++] = (tmp >> 8) & 0xFF;
	    arr[L++] = tmp & 0xFF;
	  }
	  return arr
	}
	function tripletToBase64 (num) {
	  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
	}
	function encodeChunk (uint8, start, end) {
	  var tmp;
	  var output = [];
	  for (var i = start; i < end; i += 3) {
	    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2]);
	    output.push(tripletToBase64(tmp));
	  }
	  return output.join('')
	}
	function fromByteArray (uint8) {
	  var tmp;
	  var len = uint8.length;
	  var extraBytes = len % 3;
	  var output = '';
	  var parts = [];
	  var maxChunkLength = 16383;
	  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
	    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)));
	  }
	  if (extraBytes === 1) {
	    tmp = uint8[len - 1];
	    output += lookup[tmp >> 2];
	    output += lookup[(tmp << 4) & 0x3F];
	    output += '==';
	  } else if (extraBytes === 2) {
	    tmp = (uint8[len - 2] << 8) + (uint8[len - 1]);
	    output += lookup[tmp >> 10];
	    output += lookup[(tmp >> 4) & 0x3F];
	    output += lookup[(tmp << 2) & 0x3F];
	    output += '=';
	  }
	  parts.push(output);
	  return parts.join('')
	}
	      }),
	      (function(module, exports) {
	exports.read = function (buffer, offset, isLE, mLen, nBytes) {
	  var e, m;
	  var eLen = nBytes * 8 - mLen - 1;
	  var eMax = (1 << eLen) - 1;
	  var eBias = eMax >> 1;
	  var nBits = -7;
	  var i = isLE ? (nBytes - 1) : 0;
	  var d = isLE ? -1 : 1;
	  var s = buffer[offset + i];
	  i += d;
	  e = s & ((1 << (-nBits)) - 1);
	  s >>= (-nBits);
	  nBits += eLen;
	  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}
	  m = e & ((1 << (-nBits)) - 1);
	  e >>= (-nBits);
	  nBits += mLen;
	  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}
	  if (e === 0) {
	    e = 1 - eBias;
	  } else if (e === eMax) {
	    return m ? NaN : ((s ? -1 : 1) * Infinity)
	  } else {
	    m = m + Math.pow(2, mLen);
	    e = e - eBias;
	  }
	  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
	};
	exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
	  var e, m, c;
	  var eLen = nBytes * 8 - mLen - 1;
	  var eMax = (1 << eLen) - 1;
	  var eBias = eMax >> 1;
	  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0);
	  var i = isLE ? 0 : (nBytes - 1);
	  var d = isLE ? 1 : -1;
	  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0;
	  value = Math.abs(value);
	  if (isNaN(value) || value === Infinity) {
	    m = isNaN(value) ? 1 : 0;
	    e = eMax;
	  } else {
	    e = Math.floor(Math.log(value) / Math.LN2);
	    if (value * (c = Math.pow(2, -e)) < 1) {
	      e--;
	      c *= 2;
	    }
	    if (e + eBias >= 1) {
	      value += rt / c;
	    } else {
	      value += rt * Math.pow(2, 1 - eBias);
	    }
	    if (value * c >= 2) {
	      e++;
	      c /= 2;
	    }
	    if (e + eBias >= eMax) {
	      m = 0;
	      e = eMax;
	    } else if (e + eBias >= 1) {
	      m = (value * c - 1) * Math.pow(2, mLen);
	      e = e + eBias;
	    } else {
	      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
	      e = 0;
	    }
	  }
	  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}
	  e = (e << mLen) | m;
	  eLen += mLen;
	  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}
	  buffer[offset + i - d] |= s * 128;
	};
	      }),
	      (function(module, exports) {
	var toString = {}.toString;
	module.exports = Array.isArray || function (arr) {
	  return toString.call(arr) == '[object Array]';
	};
	      }),
	      (function(module, exports) {
	module.exports = {"_args":[["joi@13.0.1","/Users/jeff/projects/joi-browser"]],"_development":true,"_from":"joi@13.0.1","_id":"joi@13.0.1","_inBundle":false,"_integrity":"sha512-ChTMfmbIg5yrN9pUdeaLL8vzylMQhUteXiXa1MWINsMUs3jTQ8I87lUZwR5GdfCLJlpK04U7UgrxgmU8Zp7PhQ==","_location":"/joi","_phantomChildren":{},"_requested":{"type":"version","registry":true,"raw":"joi@13.0.1","name":"joi","escapedName":"joi","rawSpec":"13.0.1","saveSpec":null,"fetchSpec":"13.0.1"},"_requiredBy":["#DEV:/"],"_resolved":"https://registry.npmjs.org/joi/-/joi-13.0.1.tgz","_spec":"13.0.1","_where":"/Users/jeff/projects/joi-browser","bugs":{"url":"https://github.com/hapijs/joi/issues"},"dependencies":{"hoek":"5.x.x","isemail":"3.x.x","topo":"3.x.x"},"description":"Object schema validation","devDependencies":{"hapitoc":"1.x.x","lab":"14.x.x"},"engines":{"node":">=8.3.0"},"homepage":"https://github.com/hapijs/joi","keywords":["hapi","schema","validation"],"license":"BSD-3-Clause","main":"lib/index.js","name":"joi","repository":{"type":"git","url":"git://github.com/hapijs/joi.git"},"scripts":{"test":"lab -t 100 -a code -L","test-cov-html":"lab -r html -o coverage.html -a code","test-debug":"lab -a code","toc":"hapitoc","version":"npm run toc && git add API.md README.md"},"version":"13.0.1"};
	      }),
	      (function(module, exports, __webpack_require__) {
	                           (function(process) {
	function normalizeArray(parts, allowAboveRoot) {
	  var up = 0;
	  for (var i = parts.length - 1; i >= 0; i--) {
	    var last = parts[i];
	    if (last === '.') {
	      parts.splice(i, 1);
	    } else if (last === '..') {
	      parts.splice(i, 1);
	      up++;
	    } else if (up) {
	      parts.splice(i, 1);
	      up--;
	    }
	  }
	  if (allowAboveRoot) {
	    for (; up--; up) {
	      parts.unshift('..');
	    }
	  }
	  return parts;
	}
	var splitPathRe =
	    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
	var splitPath = function(filename) {
	  return splitPathRe.exec(filename).slice(1);
	};
	exports.resolve = function() {
	  var resolvedPath = '',
	      resolvedAbsolute = false;
	  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
	    var path = (i >= 0) ? arguments[i] : process.cwd();
	    if (typeof path !== 'string') {
	      throw new TypeError('Arguments to path.resolve must be strings');
	    } else if (!path) {
	      continue;
	    }
	    resolvedPath = path + '/' + resolvedPath;
	    resolvedAbsolute = path.charAt(0) === '/';
	  }
	  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
	    return !!p;
	  }), !resolvedAbsolute).join('/');
	  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
	};
	exports.normalize = function(path) {
	  var isAbsolute = exports.isAbsolute(path),
	      trailingSlash = substr(path, -1) === '/';
	  path = normalizeArray(filter(path.split('/'), function(p) {
	    return !!p;
	  }), !isAbsolute).join('/');
	  if (!path && !isAbsolute) {
	    path = '.';
	  }
	  if (path && trailingSlash) {
	    path += '/';
	  }
	  return (isAbsolute ? '/' : '') + path;
	};
	exports.isAbsolute = function(path) {
	  return path.charAt(0) === '/';
	};
	exports.join = function() {
	  var paths = Array.prototype.slice.call(arguments, 0);
	  return exports.normalize(filter(paths, function(p, index) {
	    if (typeof p !== 'string') {
	      throw new TypeError('Arguments to path.join must be strings');
	    }
	    return p;
	  }).join('/'));
	};
	exports.relative = function(from, to) {
	  from = exports.resolve(from).substr(1);
	  to = exports.resolve(to).substr(1);
	  function trim(arr) {
	    var start = 0;
	    for (; start < arr.length; start++) {
	      if (arr[start] !== '') break;
	    }
	    var end = arr.length - 1;
	    for (; end >= 0; end--) {
	      if (arr[end] !== '') break;
	    }
	    if (start > end) return [];
	    return arr.slice(start, end - start + 1);
	  }
	  var fromParts = trim(from.split('/'));
	  var toParts = trim(to.split('/'));
	  var length = Math.min(fromParts.length, toParts.length);
	  var samePartsLength = length;
	  for (var i = 0; i < length; i++) {
	    if (fromParts[i] !== toParts[i]) {
	      samePartsLength = i;
	      break;
	    }
	  }
	  var outputParts = [];
	  for (var i = samePartsLength; i < fromParts.length; i++) {
	    outputParts.push('..');
	  }
	  outputParts = outputParts.concat(toParts.slice(samePartsLength));
	  return outputParts.join('/');
	};
	exports.sep = '/';
	exports.delimiter = ':';
	exports.dirname = function(path) {
	  var result = splitPath(path),
	      root = result[0],
	      dir = result[1];
	  if (!root && !dir) {
	    return '.';
	  }
	  if (dir) {
	    dir = dir.substr(0, dir.length - 1);
	  }
	  return root + dir;
	};
	exports.basename = function(path, ext) {
	  var f = splitPath(path)[2];
	  if (ext && f.substr(-1 * ext.length) === ext) {
	    f = f.substr(0, f.length - ext.length);
	  }
	  return f;
	};
	exports.extname = function(path) {
	  return splitPath(path)[3];
	};
	function filter (xs, f) {
	    if (xs.filter) return xs.filter(f);
	    var res = [];
	    for (var i = 0; i < xs.length; i++) {
	        if (f(xs[i], i, xs)) res.push(xs[i]);
	    }
	    return res;
	}
	var substr = 'ab'.substr(-1) === 'b'
	    ? function (str, start, len) { return str.substr(start, len) }
	    : function (str, start, len) {
	        if (start < 0) start = str.length + start;
	        return str.substr(start, len);
	    }
	;
	                           }.call(exports, __webpack_require__(5)));
	      }),
	      (function(module, exports, __webpack_require__) {
	                           (function(module, global) {var __WEBPACK_AMD_DEFINE_RESULT__;
	(function(root) {
		var freeExports = typeof exports == 'object' && exports &&
			!exports.nodeType && exports;
		var freeModule = typeof module == 'object' && module &&
			!module.nodeType && module;
		var freeGlobal = typeof global == 'object' && global;
		if (
			freeGlobal.global === freeGlobal ||
			freeGlobal.window === freeGlobal ||
			freeGlobal.self === freeGlobal
		) {
			root = freeGlobal;
		}
		var punycode,
		maxInt = 2147483647,
		base = 36,
		tMin = 1,
		tMax = 26,
		skew = 38,
		damp = 700,
		initialBias = 72,
		initialN = 128,
		delimiter = '-',
		regexPunycode = /^xn--/,
		regexNonASCII = /[^\x20-\x7E]/,
		regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g,
		errors = {
			'overflow': 'Overflow: input needs wider integers to process',
			'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
			'invalid-input': 'Invalid input'
		},
		baseMinusTMin = base - tMin,
		floor = Math.floor,
		stringFromCharCode = String.fromCharCode;
		function error(type) {
			throw new RangeError(errors[type]);
		}
		function map(array, fn) {
			var length = array.length;
			var result = [];
			while (length--) {
				result[length] = fn(array[length]);
			}
			return result;
		}
		function mapDomain(string, fn) {
			var parts = string.split('@');
			var result = '';
			if (parts.length > 1) {
				result = parts[0] + '@';
				string = parts[1];
			}
			string = string.replace(regexSeparators, '\x2E');
			var labels = string.split('.');
			var encoded = map(labels, fn).join('.');
			return result + encoded;
		}
		function ucs2decode(string) {
			var output = [],
			    counter = 0,
			    length = string.length,
			    value,
			    extra;
			while (counter < length) {
				value = string.charCodeAt(counter++);
				if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
					extra = string.charCodeAt(counter++);
					if ((extra & 0xFC00) == 0xDC00) {
						output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
					} else {
						output.push(value);
						counter--;
					}
				} else {
					output.push(value);
				}
			}
			return output;
		}
		function ucs2encode(array) {
			return map(array, function(value) {
				var output = '';
				if (value > 0xFFFF) {
					value -= 0x10000;
					output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
					value = 0xDC00 | value & 0x3FF;
				}
				output += stringFromCharCode(value);
				return output;
			}).join('');
		}
		function basicToDigit(codePoint) {
			if (codePoint - 48 < 10) {
				return codePoint - 22;
			}
			if (codePoint - 65 < 26) {
				return codePoint - 65;
			}
			if (codePoint - 97 < 26) {
				return codePoint - 97;
			}
			return base;
		}
		function digitToBasic(digit, flag) {
			return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
		}
		function adapt(delta, numPoints, firstTime) {
			var k = 0;
			delta = firstTime ? floor(delta / damp) : delta >> 1;
			delta += floor(delta / numPoints);
			for (                       ; delta > baseMinusTMin * tMax >> 1; k += base) {
				delta = floor(delta / baseMinusTMin);
			}
			return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
		}
		function decode(input) {
			var output = [],
			    inputLength = input.length,
			    out,
			    i = 0,
			    n = initialN,
			    bias = initialBias,
			    basic,
			    j,
			    index,
			    oldi,
			    w,
			    k,
			    digit,
			    t,
			    baseMinusT;
			basic = input.lastIndexOf(delimiter);
			if (basic < 0) {
				basic = 0;
			}
			for (j = 0; j < basic; ++j) {
				if (input.charCodeAt(j) >= 0x80) {
					error('not-basic');
				}
				output.push(input.charCodeAt(j));
			}
			for (index = basic > 0 ? basic + 1 : 0; index < inputLength;                          ) {
				for (oldi = i, w = 1, k = base;                   ; k += base) {
					if (index >= inputLength) {
						error('invalid-input');
					}
					digit = basicToDigit(input.charCodeAt(index++));
					if (digit >= base || digit > floor((maxInt - i) / w)) {
						error('overflow');
					}
					i += digit * w;
					t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
					if (digit < t) {
						break;
					}
					baseMinusT = base - t;
					if (w > floor(maxInt / baseMinusT)) {
						error('overflow');
					}
					w *= baseMinusT;
				}
				out = output.length + 1;
				bias = adapt(i - oldi, out, oldi == 0);
				if (floor(i / out) > maxInt - n) {
					error('overflow');
				}
				n += floor(i / out);
				i %= out;
				output.splice(i++, 0, n);
			}
			return ucs2encode(output);
		}
		function encode(input) {
			var n,
			    delta,
			    handledCPCount,
			    basicLength,
			    bias,
			    j,
			    m,
			    q,
			    k,
			    t,
			    currentValue,
			    output = [],
			    inputLength,
			    handledCPCountPlusOne,
			    baseMinusT,
			    qMinusT;
			input = ucs2decode(input);
			inputLength = input.length;
			n = initialN;
			delta = 0;
			bias = initialBias;
			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue < 0x80) {
					output.push(stringFromCharCode(currentValue));
				}
			}
			handledCPCount = basicLength = output.length;
			if (basicLength) {
				output.push(delimiter);
			}
			while (handledCPCount < inputLength) {
				for (m = maxInt, j = 0; j < inputLength; ++j) {
					currentValue = input[j];
					if (currentValue >= n && currentValue < m) {
						m = currentValue;
					}
				}
				handledCPCountPlusOne = handledCPCount + 1;
				if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
					error('overflow');
				}
				delta += (m - n) * handledCPCountPlusOne;
				n = m;
				for (j = 0; j < inputLength; ++j) {
					currentValue = input[j];
					if (currentValue < n && ++delta > maxInt) {
						error('overflow');
					}
					if (currentValue == n) {
						for (q = delta, k = base;                   ; k += base) {
							t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
							if (q < t) {
								break;
							}
							qMinusT = q - t;
							baseMinusT = base - t;
							output.push(
								stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
							);
							q = floor(qMinusT / baseMinusT);
						}
						output.push(stringFromCharCode(digitToBasic(q, 0)));
						bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
						delta = 0;
						++handledCPCount;
					}
				}
				++delta;
				++n;
			}
			return output.join('');
		}
		function toUnicode(input) {
			return mapDomain(input, function(string) {
				return regexPunycode.test(string)
					? decode(string.slice(4).toLowerCase())
					: string;
			});
		}
		function toASCII(input) {
			return mapDomain(input, function(string) {
				return regexNonASCII.test(string)
					? 'xn--' + encode(string)
					: string;
			});
		}
		punycode = {
			'version': '1.4.1',
			'ucs2': {
				'decode': ucs2decode,
				'encode': ucs2encode
			},
			'decode': decode,
			'encode': encode,
			'toASCII': toASCII,
			'toUnicode': toUnicode
		};
		{
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
				return punycode;
			}.call(exports, __webpack_require__, exports, module),
					__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		}
	}(this));
	                           }.call(exports, __webpack_require__(39)(module), __webpack_require__(7)));
	      }),
	      (function(module, exports) {
	if (typeof Object.create === 'function') {
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor;
	    ctor.prototype = Object.create(superCtor.prototype, {
	      constructor: {
	        value: ctor,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	  };
	} else {
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor;
	    var TempCtor = function () {};
	    TempCtor.prototype = superCtor.prototype;
	    ctor.prototype = new TempCtor();
	    ctor.prototype.constructor = ctor;
	  };
	}
	      }),
	      (function(module, exports) {
	module.exports = function isBuffer(arg) {
	  return arg && typeof arg === 'object'
	    && typeof arg.copy === 'function'
	    && typeof arg.fill === 'function'
	    && typeof arg.readUInt8 === 'function';
	};
	      }),
	      (function(module, exports, __webpack_require__) {
	                           (function(global, process) {
	var formatRegExp = /%[sdj%]/g;
	exports.format = function(f) {
	  if (!isString(f)) {
	    var objects = [];
	    for (var i = 0; i < arguments.length; i++) {
	      objects.push(inspect(arguments[i]));
	    }
	    return objects.join(' ');
	  }
	  var i = 1;
	  var args = arguments;
	  var len = args.length;
	  var str = String(f).replace(formatRegExp, function(x) {
	    if (x === '%%') return '%';
	    if (i >= len) return x;
	    switch (x) {
	      case '%s': return String(args[i++]);
	      case '%d': return Number(args[i++]);
	      case '%j':
	        try {
	          return JSON.stringify(args[i++]);
	        } catch (_) {
	          return '[Circular]';
	        }
	      default:
	        return x;
	    }
	  });
	  for (var x = args[i]; i < len; x = args[++i]) {
	    if (isNull(x) || !isObject(x)) {
	      str += ' ' + x;
	    } else {
	      str += ' ' + inspect(x);
	    }
	  }
	  return str;
	};
	exports.deprecate = function(fn, msg) {
	  if (isUndefined(global.process)) {
	    return function() {
	      return exports.deprecate(fn, msg).apply(this, arguments);
	    };
	  }
	  if (process.noDeprecation === true) {
	    return fn;
	  }
	  var warned = false;
	  function deprecated() {
	    if (!warned) {
	      if (process.throwDeprecation) {
	        throw new Error(msg);
	      } else if (process.traceDeprecation) {
	        console.trace(msg);
	      } else {
	        console.error(msg);
	      }
	      warned = true;
	    }
	    return fn.apply(this, arguments);
	  }
	  return deprecated;
	};
	var debugs = {};
	var debugEnviron;
	exports.debuglog = function(set) {
	  if (isUndefined(debugEnviron))
	    debugEnviron = process.env.NODE_DEBUG || '';
	  set = set.toUpperCase();
	  if (!debugs[set]) {
	    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
	      var pid = process.pid;
	      debugs[set] = function() {
	        var msg = exports.format.apply(exports, arguments);
	        console.error('%s %d: %s', set, pid, msg);
	      };
	    } else {
	      debugs[set] = function() {};
	    }
	  }
	  return debugs[set];
	};
	function inspect(obj, opts) {
	  var ctx = {
	    seen: [],
	    stylize: stylizeNoColor
	  };
	  if (arguments.length >= 3) ctx.depth = arguments[2];
	  if (arguments.length >= 4) ctx.colors = arguments[3];
	  if (isBoolean(opts)) {
	    ctx.showHidden = opts;
	  } else if (opts) {
	    exports._extend(ctx, opts);
	  }
	  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
	  if (isUndefined(ctx.depth)) ctx.depth = 2;
	  if (isUndefined(ctx.colors)) ctx.colors = false;
	  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
	  if (ctx.colors) ctx.stylize = stylizeWithColor;
	  return formatValue(ctx, obj, ctx.depth);
	}
	exports.inspect = inspect;
	inspect.colors = {
	  'bold' : [1, 22],
	  'italic' : [3, 23],
	  'underline' : [4, 24],
	  'inverse' : [7, 27],
	  'white' : [37, 39],
	  'grey' : [90, 39],
	  'black' : [30, 39],
	  'blue' : [34, 39],
	  'cyan' : [36, 39],
	  'green' : [32, 39],
	  'magenta' : [35, 39],
	  'red' : [31, 39],
	  'yellow' : [33, 39]
	};
	inspect.styles = {
	  'special': 'cyan',
	  'number': 'yellow',
	  'boolean': 'yellow',
	  'undefined': 'grey',
	  'null': 'bold',
	  'string': 'green',
	  'date': 'magenta',
	  'regexp': 'red'
	};
	function stylizeWithColor(str, styleType) {
	  var style = inspect.styles[styleType];
	  if (style) {
	    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
	           '\u001b[' + inspect.colors[style][1] + 'm';
	  } else {
	    return str;
	  }
	}
	function stylizeNoColor(str, styleType) {
	  return str;
	}
	function arrayToHash(array) {
	  var hash = {};
	  array.forEach(function(val, idx) {
	    hash[val] = true;
	  });
	  return hash;
	}
	function formatValue(ctx, value, recurseTimes) {
	  if (ctx.customInspect &&
	      value &&
	      isFunction(value.inspect) &&
	      value.inspect !== exports.inspect &&
	      !(value.constructor && value.constructor.prototype === value)) {
	    var ret = value.inspect(recurseTimes, ctx);
	    if (!isString(ret)) {
	      ret = formatValue(ctx, ret, recurseTimes);
	    }
	    return ret;
	  }
	  var primitive = formatPrimitive(ctx, value);
	  if (primitive) {
	    return primitive;
	  }
	  var keys = Object.keys(value);
	  var visibleKeys = arrayToHash(keys);
	  if (ctx.showHidden) {
	    keys = Object.getOwnPropertyNames(value);
	  }
	  if (isError(value)
	      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
	    return formatError(value);
	  }
	  if (keys.length === 0) {
	    if (isFunction(value)) {
	      var name = value.name ? ': ' + value.name : '';
	      return ctx.stylize('[Function' + name + ']', 'special');
	    }
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    }
	    if (isDate(value)) {
	      return ctx.stylize(Date.prototype.toString.call(value), 'date');
	    }
	    if (isError(value)) {
	      return formatError(value);
	    }
	  }
	  var base = '', array = false, braces = ['{', '}'];
	  if (isArray(value)) {
	    array = true;
	    braces = ['[', ']'];
	  }
	  if (isFunction(value)) {
	    var n = value.name ? ': ' + value.name : '';
	    base = ' [Function' + n + ']';
	  }
	  if (isRegExp(value)) {
	    base = ' ' + RegExp.prototype.toString.call(value);
	  }
	  if (isDate(value)) {
	    base = ' ' + Date.prototype.toUTCString.call(value);
	  }
	  if (isError(value)) {
	    base = ' ' + formatError(value);
	  }
	  if (keys.length === 0 && (!array || value.length == 0)) {
	    return braces[0] + base + braces[1];
	  }
	  if (recurseTimes < 0) {
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    } else {
	      return ctx.stylize('[Object]', 'special');
	    }
	  }
	  ctx.seen.push(value);
	  var output;
	  if (array) {
	    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
	  } else {
	    output = keys.map(function(key) {
	      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
	    });
	  }
	  ctx.seen.pop();
	  return reduceToSingleString(output, base, braces);
	}
	function formatPrimitive(ctx, value) {
	  if (isUndefined(value))
	    return ctx.stylize('undefined', 'undefined');
	  if (isString(value)) {
	    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
	                                             .replace(/'/g, "\\'")
	                                             .replace(/\\"/g, '"') + '\'';
	    return ctx.stylize(simple, 'string');
	  }
	  if (isNumber(value))
	    return ctx.stylize('' + value, 'number');
	  if (isBoolean(value))
	    return ctx.stylize('' + value, 'boolean');
	  if (isNull(value))
	    return ctx.stylize('null', 'null');
	}
	function formatError(value) {
	  return '[' + Error.prototype.toString.call(value) + ']';
	}
	function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
	  var output = [];
	  for (var i = 0, l = value.length; i < l; ++i) {
	    if (hasOwnProperty(value, String(i))) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
	          String(i), true));
	    } else {
	      output.push('');
	    }
	  }
	  keys.forEach(function(key) {
	    if (!key.match(/^\d+$/)) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
	          key, true));
	    }
	  });
	  return output;
	}
	function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
	  var name, str, desc;
	  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
	  if (desc.get) {
	    if (desc.set) {
	      str = ctx.stylize('[Getter/Setter]', 'special');
	    } else {
	      str = ctx.stylize('[Getter]', 'special');
	    }
	  } else {
	    if (desc.set) {
	      str = ctx.stylize('[Setter]', 'special');
	    }
	  }
	  if (!hasOwnProperty(visibleKeys, key)) {
	    name = '[' + key + ']';
	  }
	  if (!str) {
	    if (ctx.seen.indexOf(desc.value) < 0) {
	      if (isNull(recurseTimes)) {
	        str = formatValue(ctx, desc.value, null);
	      } else {
	        str = formatValue(ctx, desc.value, recurseTimes - 1);
	      }
	      if (str.indexOf('\n') > -1) {
	        if (array) {
	          str = str.split('\n').map(function(line) {
	            return '  ' + line;
	          }).join('\n').substr(2);
	        } else {
	          str = '\n' + str.split('\n').map(function(line) {
	            return '   ' + line;
	          }).join('\n');
	        }
	      }
	    } else {
	      str = ctx.stylize('[Circular]', 'special');
	    }
	  }
	  if (isUndefined(name)) {
	    if (array && key.match(/^\d+$/)) {
	      return str;
	    }
	    name = JSON.stringify('' + key);
	    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
	      name = name.substr(1, name.length - 2);
	      name = ctx.stylize(name, 'name');
	    } else {
	      name = name.replace(/'/g, "\\'")
	                 .replace(/\\"/g, '"')
	                 .replace(/(^"|"$)/g, "'");
	      name = ctx.stylize(name, 'string');
	    }
	  }
	  return name + ': ' + str;
	}
	function reduceToSingleString(output, base, braces) {
	  var length = output.reduce(function(prev, cur) {
	    if (cur.indexOf('\n') >= 0) ;
	    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
	  }, 0);
	  if (length > 60) {
	    return braces[0] +
	           (base === '' ? '' : base + '\n ') +
	           ' ' +
	           output.join(',\n  ') +
	           ' ' +
	           braces[1];
	  }
	  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
	}
	function isArray(ar) {
	  return Array.isArray(ar);
	}
	exports.isArray = isArray;
	function isBoolean(arg) {
	  return typeof arg === 'boolean';
	}
	exports.isBoolean = isBoolean;
	function isNull(arg) {
	  return arg === null;
	}
	exports.isNull = isNull;
	function isNullOrUndefined(arg) {
	  return arg == null;
	}
	exports.isNullOrUndefined = isNullOrUndefined;
	function isNumber(arg) {
	  return typeof arg === 'number';
	}
	exports.isNumber = isNumber;
	function isString(arg) {
	  return typeof arg === 'string';
	}
	exports.isString = isString;
	function isSymbol(arg) {
	  return typeof arg === 'symbol';
	}
	exports.isSymbol = isSymbol;
	function isUndefined(arg) {
	  return arg === void 0;
	}
	exports.isUndefined = isUndefined;
	function isRegExp(re) {
	  return isObject(re) && objectToString(re) === '[object RegExp]';
	}
	exports.isRegExp = isRegExp;
	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}
	exports.isObject = isObject;
	function isDate(d) {
	  return isObject(d) && objectToString(d) === '[object Date]';
	}
	exports.isDate = isDate;
	function isError(e) {
	  return isObject(e) &&
	      (objectToString(e) === '[object Error]' || e instanceof Error);
	}
	exports.isError = isError;
	function isFunction(arg) {
	  return typeof arg === 'function';
	}
	exports.isFunction = isFunction;
	function isPrimitive(arg) {
	  return arg === null ||
	         typeof arg === 'boolean' ||
	         typeof arg === 'number' ||
	         typeof arg === 'string' ||
	         typeof arg === 'symbol' ||
	         typeof arg === 'undefined';
	}
	exports.isPrimitive = isPrimitive;
	exports.isBuffer = __webpack_require__(37);
	function objectToString(o) {
	  return Object.prototype.toString.call(o);
	}
	function pad(n) {
	  return n < 10 ? '0' + n.toString(10) : n.toString(10);
	}
	var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
	              'Oct', 'Nov', 'Dec'];
	function timestamp() {
	  var d = new Date();
	  var time = [pad(d.getHours()),
	              pad(d.getMinutes()),
	              pad(d.getSeconds())].join(':');
	  return [d.getDate(), months[d.getMonth()], time].join(' ');
	}
	exports.log = function() {
	  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
	};
	exports.inherits = __webpack_require__(36);
	exports._extend = function(origin, add) {
	  if (!add || !isObject(add)) return origin;
	  var keys = Object.keys(add);
	  var i = keys.length;
	  while (i--) {
	    origin[keys[i]] = add[keys[i]];
	  }
	  return origin;
	};
	function hasOwnProperty(obj, prop) {
	  return Object.prototype.hasOwnProperty.call(obj, prop);
	}
	                           }.call(exports, __webpack_require__(7), __webpack_require__(5)));
	      }),
	      (function(module, exports) {
	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			if(!module.children) module.children = [];
			Object.defineProperty(module, "loaded", {
				enumerable: true,
				get: function() {
					return module.l;
				}
			});
			Object.defineProperty(module, "id", {
				enumerable: true,
				get: function() {
					return module.i;
				}
			});
			module.webpackPolyfill = 1;
		}
		return module;
	};
	      })
	         ]);
	});
	});
	var joiBrowser$1 = unwrapExports(joiBrowser);

	var joiBrowser$2 = /*#__PURE__*/Object.freeze({
		default: joiBrowser$1,
		__moduleExports: joiBrowser
	});

	var lookup = [];
	var revLookup = [];
	var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
	var inited = false;
	function init () {
	  inited = true;
	  var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
	  for (var i = 0, len = code.length; i < len; ++i) {
	    lookup[i] = code[i];
	    revLookup[code.charCodeAt(i)] = i;
	  }
	  revLookup['-'.charCodeAt(0)] = 62;
	  revLookup['_'.charCodeAt(0)] = 63;
	}
	function toByteArray (b64) {
	  if (!inited) {
	    init();
	  }
	  var i, j, l, tmp, placeHolders, arr;
	  var len = b64.length;
	  if (len % 4 > 0) {
	    throw new Error('Invalid string. Length must be a multiple of 4')
	  }
	  placeHolders = b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0;
	  arr = new Arr(len * 3 / 4 - placeHolders);
	  l = placeHolders > 0 ? len - 4 : len;
	  var L = 0;
	  for (i = 0, j = 0; i < l; i += 4, j += 3) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)];
	    arr[L++] = (tmp >> 16) & 0xFF;
	    arr[L++] = (tmp >> 8) & 0xFF;
	    arr[L++] = tmp & 0xFF;
	  }
	  if (placeHolders === 2) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4);
	    arr[L++] = tmp & 0xFF;
	  } else if (placeHolders === 1) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2);
	    arr[L++] = (tmp >> 8) & 0xFF;
	    arr[L++] = tmp & 0xFF;
	  }
	  return arr
	}
	function tripletToBase64 (num) {
	  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
	}
	function encodeChunk (uint8, start, end) {
	  var tmp;
	  var output = [];
	  for (var i = start; i < end; i += 3) {
	    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2]);
	    output.push(tripletToBase64(tmp));
	  }
	  return output.join('')
	}
	function fromByteArray (uint8) {
	  if (!inited) {
	    init();
	  }
	  var tmp;
	  var len = uint8.length;
	  var extraBytes = len % 3;
	  var output = '';
	  var parts = [];
	  var maxChunkLength = 16383;
	  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
	    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)));
	  }
	  if (extraBytes === 1) {
	    tmp = uint8[len - 1];
	    output += lookup[tmp >> 2];
	    output += lookup[(tmp << 4) & 0x3F];
	    output += '==';
	  } else if (extraBytes === 2) {
	    tmp = (uint8[len - 2] << 8) + (uint8[len - 1]);
	    output += lookup[tmp >> 10];
	    output += lookup[(tmp >> 4) & 0x3F];
	    output += lookup[(tmp << 2) & 0x3F];
	    output += '=';
	  }
	  parts.push(output);
	  return parts.join('')
	}

	function read (buffer, offset, isLE, mLen, nBytes) {
	  var e, m;
	  var eLen = nBytes * 8 - mLen - 1;
	  var eMax = (1 << eLen) - 1;
	  var eBias = eMax >> 1;
	  var nBits = -7;
	  var i = isLE ? (nBytes - 1) : 0;
	  var d = isLE ? -1 : 1;
	  var s = buffer[offset + i];
	  i += d;
	  e = s & ((1 << (-nBits)) - 1);
	  s >>= (-nBits);
	  nBits += eLen;
	  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}
	  m = e & ((1 << (-nBits)) - 1);
	  e >>= (-nBits);
	  nBits += mLen;
	  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}
	  if (e === 0) {
	    e = 1 - eBias;
	  } else if (e === eMax) {
	    return m ? NaN : ((s ? -1 : 1) * Infinity)
	  } else {
	    m = m + Math.pow(2, mLen);
	    e = e - eBias;
	  }
	  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
	}
	function write (buffer, value, offset, isLE, mLen, nBytes) {
	  var e, m, c;
	  var eLen = nBytes * 8 - mLen - 1;
	  var eMax = (1 << eLen) - 1;
	  var eBias = eMax >> 1;
	  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0);
	  var i = isLE ? 0 : (nBytes - 1);
	  var d = isLE ? 1 : -1;
	  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0;
	  value = Math.abs(value);
	  if (isNaN(value) || value === Infinity) {
	    m = isNaN(value) ? 1 : 0;
	    e = eMax;
	  } else {
	    e = Math.floor(Math.log(value) / Math.LN2);
	    if (value * (c = Math.pow(2, -e)) < 1) {
	      e--;
	      c *= 2;
	    }
	    if (e + eBias >= 1) {
	      value += rt / c;
	    } else {
	      value += rt * Math.pow(2, 1 - eBias);
	    }
	    if (value * c >= 2) {
	      e++;
	      c /= 2;
	    }
	    if (e + eBias >= eMax) {
	      m = 0;
	      e = eMax;
	    } else if (e + eBias >= 1) {
	      m = (value * c - 1) * Math.pow(2, mLen);
	      e = e + eBias;
	    } else {
	      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
	      e = 0;
	    }
	  }
	  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}
	  e = (e << mLen) | m;
	  eLen += mLen;
	  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}
	  buffer[offset + i - d] |= s * 128;
	}

	var toString = {}.toString;
	var isArray = Array.isArray || function (arr) {
	  return toString.call(arr) == '[object Array]';
	};

	/*!
	 * The buffer module from node.js, for the browser.
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */
	var INSPECT_MAX_BYTES = 50;
	Buffer$1.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
	  ? global.TYPED_ARRAY_SUPPORT
	  : true;
	function kMaxLength () {
	  return Buffer$1.TYPED_ARRAY_SUPPORT
	    ? 0x7fffffff
	    : 0x3fffffff
	}
	function createBuffer (that, length) {
	  if (kMaxLength() < length) {
	    throw new RangeError('Invalid typed array length')
	  }
	  if (Buffer$1.TYPED_ARRAY_SUPPORT) {
	    that = new Uint8Array(length);
	    that.__proto__ = Buffer$1.prototype;
	  } else {
	    if (that === null) {
	      that = new Buffer$1(length);
	    }
	    that.length = length;
	  }
	  return that
	}
	function Buffer$1 (arg, encodingOrOffset, length) {
	  if (!Buffer$1.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer$1)) {
	    return new Buffer$1(arg, encodingOrOffset, length)
	  }
	  if (typeof arg === 'number') {
	    if (typeof encodingOrOffset === 'string') {
	      throw new Error(
	        'If encoding is specified then the first argument must be a string'
	      )
	    }
	    return allocUnsafe(this, arg)
	  }
	  return from(this, arg, encodingOrOffset, length)
	}
	Buffer$1.poolSize = 8192;
	Buffer$1._augment = function (arr) {
	  arr.__proto__ = Buffer$1.prototype;
	  return arr
	};
	function from (that, value, encodingOrOffset, length) {
	  if (typeof value === 'number') {
	    throw new TypeError('"value" argument must not be a number')
	  }
	  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
	    return fromArrayBuffer(that, value, encodingOrOffset, length)
	  }
	  if (typeof value === 'string') {
	    return fromString(that, value, encodingOrOffset)
	  }
	  return fromObject(that, value)
	}
	Buffer$1.from = function (value, encodingOrOffset, length) {
	  return from(null, value, encodingOrOffset, length)
	};
	if (Buffer$1.TYPED_ARRAY_SUPPORT) {
	  Buffer$1.prototype.__proto__ = Uint8Array.prototype;
	  Buffer$1.__proto__ = Uint8Array;
	}
	function assertSize (size) {
	  if (typeof size !== 'number') {
	    throw new TypeError('"size" argument must be a number')
	  } else if (size < 0) {
	    throw new RangeError('"size" argument must not be negative')
	  }
	}
	function alloc (that, size, fill, encoding) {
	  assertSize(size);
	  if (size <= 0) {
	    return createBuffer(that, size)
	  }
	  if (fill !== undefined) {
	    return typeof encoding === 'string'
	      ? createBuffer(that, size).fill(fill, encoding)
	      : createBuffer(that, size).fill(fill)
	  }
	  return createBuffer(that, size)
	}
	Buffer$1.alloc = function (size, fill, encoding) {
	  return alloc(null, size, fill, encoding)
	};
	function allocUnsafe (that, size) {
	  assertSize(size);
	  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0);
	  if (!Buffer$1.TYPED_ARRAY_SUPPORT) {
	    for (var i = 0; i < size; ++i) {
	      that[i] = 0;
	    }
	  }
	  return that
	}
	Buffer$1.allocUnsafe = function (size) {
	  return allocUnsafe(null, size)
	};
	Buffer$1.allocUnsafeSlow = function (size) {
	  return allocUnsafe(null, size)
	};
	function fromString (that, string, encoding) {
	  if (typeof encoding !== 'string' || encoding === '') {
	    encoding = 'utf8';
	  }
	  if (!Buffer$1.isEncoding(encoding)) {
	    throw new TypeError('"encoding" must be a valid string encoding')
	  }
	  var length = byteLength(string, encoding) | 0;
	  that = createBuffer(that, length);
	  var actual = that.write(string, encoding);
	  if (actual !== length) {
	    that = that.slice(0, actual);
	  }
	  return that
	}
	function fromArrayLike (that, array) {
	  var length = array.length < 0 ? 0 : checked(array.length) | 0;
	  that = createBuffer(that, length);
	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255;
	  }
	  return that
	}
	function fromArrayBuffer (that, array, byteOffset, length) {
	  array.byteLength;
	  if (byteOffset < 0 || array.byteLength < byteOffset) {
	    throw new RangeError('\'offset\' is out of bounds')
	  }
	  if (array.byteLength < byteOffset + (length || 0)) {
	    throw new RangeError('\'length\' is out of bounds')
	  }
	  if (byteOffset === undefined && length === undefined) {
	    array = new Uint8Array(array);
	  } else if (length === undefined) {
	    array = new Uint8Array(array, byteOffset);
	  } else {
	    array = new Uint8Array(array, byteOffset, length);
	  }
	  if (Buffer$1.TYPED_ARRAY_SUPPORT) {
	    that = array;
	    that.__proto__ = Buffer$1.prototype;
	  } else {
	    that = fromArrayLike(that, array);
	  }
	  return that
	}
	function fromObject (that, obj) {
	  if (internalIsBuffer(obj)) {
	    var len = checked(obj.length) | 0;
	    that = createBuffer(that, len);
	    if (that.length === 0) {
	      return that
	    }
	    obj.copy(that, 0, 0, len);
	    return that
	  }
	  if (obj) {
	    if ((typeof ArrayBuffer !== 'undefined' &&
	        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
	      if (typeof obj.length !== 'number' || isnan(obj.length)) {
	        return createBuffer(that, 0)
	      }
	      return fromArrayLike(that, obj)
	    }
	    if (obj.type === 'Buffer' && isArray(obj.data)) {
	      return fromArrayLike(that, obj.data)
	    }
	  }
	  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
	}
	function checked (length) {
	  if (length >= kMaxLength()) {
	    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
	                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
	  }
	  return length | 0
	}
	Buffer$1.isBuffer = isBuffer;
	function internalIsBuffer (b) {
	  return !!(b != null && b._isBuffer)
	}
	Buffer$1.compare = function compare (a, b) {
	  if (!internalIsBuffer(a) || !internalIsBuffer(b)) {
	    throw new TypeError('Arguments must be Buffers')
	  }
	  if (a === b) return 0
	  var x = a.length;
	  var y = b.length;
	  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
	    if (a[i] !== b[i]) {
	      x = a[i];
	      y = b[i];
	      break
	    }
	  }
	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	};
	Buffer$1.isEncoding = function isEncoding (encoding) {
	  switch (String(encoding).toLowerCase()) {
	    case 'hex':
	    case 'utf8':
	    case 'utf-8':
	    case 'ascii':
	    case 'latin1':
	    case 'binary':
	    case 'base64':
	    case 'ucs2':
	    case 'ucs-2':
	    case 'utf16le':
	    case 'utf-16le':
	      return true
	    default:
	      return false
	  }
	};
	Buffer$1.concat = function concat (list, length) {
	  if (!isArray(list)) {
	    throw new TypeError('"list" argument must be an Array of Buffers')
	  }
	  if (list.length === 0) {
	    return Buffer$1.alloc(0)
	  }
	  var i;
	  if (length === undefined) {
	    length = 0;
	    for (i = 0; i < list.length; ++i) {
	      length += list[i].length;
	    }
	  }
	  var buffer = Buffer$1.allocUnsafe(length);
	  var pos = 0;
	  for (i = 0; i < list.length; ++i) {
	    var buf = list[i];
	    if (!internalIsBuffer(buf)) {
	      throw new TypeError('"list" argument must be an Array of Buffers')
	    }
	    buf.copy(buffer, pos);
	    pos += buf.length;
	  }
	  return buffer
	};
	function byteLength (string, encoding) {
	  if (internalIsBuffer(string)) {
	    return string.length
	  }
	  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
	      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
	    return string.byteLength
	  }
	  if (typeof string !== 'string') {
	    string = '' + string;
	  }
	  var len = string.length;
	  if (len === 0) return 0
	  var loweredCase = false;
	  for (;;) {
	    switch (encoding) {
	      case 'ascii':
	      case 'latin1':
	      case 'binary':
	        return len
	      case 'utf8':
	      case 'utf-8':
	      case undefined:
	        return utf8ToBytes(string).length
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return len * 2
	      case 'hex':
	        return len >>> 1
	      case 'base64':
	        return base64ToBytes(string).length
	      default:
	        if (loweredCase) return utf8ToBytes(string).length
	        encoding = ('' + encoding).toLowerCase();
	        loweredCase = true;
	    }
	  }
	}
	Buffer$1.byteLength = byteLength;
	function slowToString (encoding, start, end) {
	  var loweredCase = false;
	  if (start === undefined || start < 0) {
	    start = 0;
	  }
	  if (start > this.length) {
	    return ''
	  }
	  if (end === undefined || end > this.length) {
	    end = this.length;
	  }
	  if (end <= 0) {
	    return ''
	  }
	  end >>>= 0;
	  start >>>= 0;
	  if (end <= start) {
	    return ''
	  }
	  if (!encoding) encoding = 'utf8';
	  while (true) {
	    switch (encoding) {
	      case 'hex':
	        return hexSlice(this, start, end)
	      case 'utf8':
	      case 'utf-8':
	        return utf8Slice(this, start, end)
	      case 'ascii':
	        return asciiSlice(this, start, end)
	      case 'latin1':
	      case 'binary':
	        return latin1Slice(this, start, end)
	      case 'base64':
	        return base64Slice(this, start, end)
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return utf16leSlice(this, start, end)
	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = (encoding + '').toLowerCase();
	        loweredCase = true;
	    }
	  }
	}
	Buffer$1.prototype._isBuffer = true;
	function swap (b, n, m) {
	  var i = b[n];
	  b[n] = b[m];
	  b[m] = i;
	}
	Buffer$1.prototype.swap16 = function swap16 () {
	  var len = this.length;
	  if (len % 2 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 16-bits')
	  }
	  for (var i = 0; i < len; i += 2) {
	    swap(this, i, i + 1);
	  }
	  return this
	};
	Buffer$1.prototype.swap32 = function swap32 () {
	  var len = this.length;
	  if (len % 4 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 32-bits')
	  }
	  for (var i = 0; i < len; i += 4) {
	    swap(this, i, i + 3);
	    swap(this, i + 1, i + 2);
	  }
	  return this
	};
	Buffer$1.prototype.swap64 = function swap64 () {
	  var len = this.length;
	  if (len % 8 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 64-bits')
	  }
	  for (var i = 0; i < len; i += 8) {
	    swap(this, i, i + 7);
	    swap(this, i + 1, i + 6);
	    swap(this, i + 2, i + 5);
	    swap(this, i + 3, i + 4);
	  }
	  return this
	};
	Buffer$1.prototype.toString = function toString () {
	  var length = this.length | 0;
	  if (length === 0) return ''
	  if (arguments.length === 0) return utf8Slice(this, 0, length)
	  return slowToString.apply(this, arguments)
	};
	Buffer$1.prototype.equals = function equals (b) {
	  if (!internalIsBuffer(b)) throw new TypeError('Argument must be a Buffer')
	  if (this === b) return true
	  return Buffer$1.compare(this, b) === 0
	};
	Buffer$1.prototype.inspect = function inspect () {
	  var str = '';
	  var max = INSPECT_MAX_BYTES;
	  if (this.length > 0) {
	    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ');
	    if (this.length > max) str += ' ... ';
	  }
	  return '<Buffer ' + str + '>'
	};
	Buffer$1.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
	  if (!internalIsBuffer(target)) {
	    throw new TypeError('Argument must be a Buffer')
	  }
	  if (start === undefined) {
	    start = 0;
	  }
	  if (end === undefined) {
	    end = target ? target.length : 0;
	  }
	  if (thisStart === undefined) {
	    thisStart = 0;
	  }
	  if (thisEnd === undefined) {
	    thisEnd = this.length;
	  }
	  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
	    throw new RangeError('out of range index')
	  }
	  if (thisStart >= thisEnd && start >= end) {
	    return 0
	  }
	  if (thisStart >= thisEnd) {
	    return -1
	  }
	  if (start >= end) {
	    return 1
	  }
	  start >>>= 0;
	  end >>>= 0;
	  thisStart >>>= 0;
	  thisEnd >>>= 0;
	  if (this === target) return 0
	  var x = thisEnd - thisStart;
	  var y = end - start;
	  var len = Math.min(x, y);
	  var thisCopy = this.slice(thisStart, thisEnd);
	  var targetCopy = target.slice(start, end);
	  for (var i = 0; i < len; ++i) {
	    if (thisCopy[i] !== targetCopy[i]) {
	      x = thisCopy[i];
	      y = targetCopy[i];
	      break
	    }
	  }
	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	};
	function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
	  if (buffer.length === 0) return -1
	  if (typeof byteOffset === 'string') {
	    encoding = byteOffset;
	    byteOffset = 0;
	  } else if (byteOffset > 0x7fffffff) {
	    byteOffset = 0x7fffffff;
	  } else if (byteOffset < -0x80000000) {
	    byteOffset = -0x80000000;
	  }
	  byteOffset = +byteOffset;
	  if (isNaN(byteOffset)) {
	    byteOffset = dir ? 0 : (buffer.length - 1);
	  }
	  if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
	  if (byteOffset >= buffer.length) {
	    if (dir) return -1
	    else byteOffset = buffer.length - 1;
	  } else if (byteOffset < 0) {
	    if (dir) byteOffset = 0;
	    else return -1
	  }
	  if (typeof val === 'string') {
	    val = Buffer$1.from(val, encoding);
	  }
	  if (internalIsBuffer(val)) {
	    if (val.length === 0) {
	      return -1
	    }
	    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
	  } else if (typeof val === 'number') {
	    val = val & 0xFF;
	    if (Buffer$1.TYPED_ARRAY_SUPPORT &&
	        typeof Uint8Array.prototype.indexOf === 'function') {
	      if (dir) {
	        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
	      } else {
	        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
	      }
	    }
	    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
	  }
	  throw new TypeError('val must be string, number or Buffer')
	}
	function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
	  var indexSize = 1;
	  var arrLength = arr.length;
	  var valLength = val.length;
	  if (encoding !== undefined) {
	    encoding = String(encoding).toLowerCase();
	    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
	        encoding === 'utf16le' || encoding === 'utf-16le') {
	      if (arr.length < 2 || val.length < 2) {
	        return -1
	      }
	      indexSize = 2;
	      arrLength /= 2;
	      valLength /= 2;
	      byteOffset /= 2;
	    }
	  }
	  function read$$1 (buf, i) {
	    if (indexSize === 1) {
	      return buf[i]
	    } else {
	      return buf.readUInt16BE(i * indexSize)
	    }
	  }
	  var i;
	  if (dir) {
	    var foundIndex = -1;
	    for (i = byteOffset; i < arrLength; i++) {
	      if (read$$1(arr, i) === read$$1(val, foundIndex === -1 ? 0 : i - foundIndex)) {
	        if (foundIndex === -1) foundIndex = i;
	        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
	      } else {
	        if (foundIndex !== -1) i -= i - foundIndex;
	        foundIndex = -1;
	      }
	    }
	  } else {
	    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
	    for (i = byteOffset; i >= 0; i--) {
	      var found = true;
	      for (var j = 0; j < valLength; j++) {
	        if (read$$1(arr, i + j) !== read$$1(val, j)) {
	          found = false;
	          break
	        }
	      }
	      if (found) return i
	    }
	  }
	  return -1
	}
	Buffer$1.prototype.includes = function includes (val, byteOffset, encoding) {
	  return this.indexOf(val, byteOffset, encoding) !== -1
	};
	Buffer$1.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
	};
	Buffer$1.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
	};
	function hexWrite (buf, string, offset, length) {
	  offset = Number(offset) || 0;
	  var remaining = buf.length - offset;
	  if (!length) {
	    length = remaining;
	  } else {
	    length = Number(length);
	    if (length > remaining) {
	      length = remaining;
	    }
	  }
	  var strLen = string.length;
	  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')
	  if (length > strLen / 2) {
	    length = strLen / 2;
	  }
	  for (var i = 0; i < length; ++i) {
	    var parsed = parseInt(string.substr(i * 2, 2), 16);
	    if (isNaN(parsed)) return i
	    buf[offset + i] = parsed;
	  }
	  return i
	}
	function utf8Write (buf, string, offset, length) {
	  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
	}
	function asciiWrite (buf, string, offset, length) {
	  return blitBuffer(asciiToBytes(string), buf, offset, length)
	}
	function latin1Write (buf, string, offset, length) {
	  return asciiWrite(buf, string, offset, length)
	}
	function base64Write (buf, string, offset, length) {
	  return blitBuffer(base64ToBytes(string), buf, offset, length)
	}
	function ucs2Write (buf, string, offset, length) {
	  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
	}
	Buffer$1.prototype.write = function write$$1 (string, offset, length, encoding) {
	  if (offset === undefined) {
	    encoding = 'utf8';
	    length = this.length;
	    offset = 0;
	  } else if (length === undefined && typeof offset === 'string') {
	    encoding = offset;
	    length = this.length;
	    offset = 0;
	  } else if (isFinite(offset)) {
	    offset = offset | 0;
	    if (isFinite(length)) {
	      length = length | 0;
	      if (encoding === undefined) encoding = 'utf8';
	    } else {
	      encoding = length;
	      length = undefined;
	    }
	  } else {
	    throw new Error(
	      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
	    )
	  }
	  var remaining = this.length - offset;
	  if (length === undefined || length > remaining) length = remaining;
	  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
	    throw new RangeError('Attempt to write outside buffer bounds')
	  }
	  if (!encoding) encoding = 'utf8';
	  var loweredCase = false;
	  for (;;) {
	    switch (encoding) {
	      case 'hex':
	        return hexWrite(this, string, offset, length)
	      case 'utf8':
	      case 'utf-8':
	        return utf8Write(this, string, offset, length)
	      case 'ascii':
	        return asciiWrite(this, string, offset, length)
	      case 'latin1':
	      case 'binary':
	        return latin1Write(this, string, offset, length)
	      case 'base64':
	        return base64Write(this, string, offset, length)
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return ucs2Write(this, string, offset, length)
	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = ('' + encoding).toLowerCase();
	        loweredCase = true;
	    }
	  }
	};
	Buffer$1.prototype.toJSON = function toJSON () {
	  return {
	    type: 'Buffer',
	    data: Array.prototype.slice.call(this._arr || this, 0)
	  }
	};
	function base64Slice (buf, start, end) {
	  if (start === 0 && end === buf.length) {
	    return fromByteArray(buf)
	  } else {
	    return fromByteArray(buf.slice(start, end))
	  }
	}
	function utf8Slice (buf, start, end) {
	  end = Math.min(buf.length, end);
	  var res = [];
	  var i = start;
	  while (i < end) {
	    var firstByte = buf[i];
	    var codePoint = null;
	    var bytesPerSequence = (firstByte > 0xEF) ? 4
	      : (firstByte > 0xDF) ? 3
	      : (firstByte > 0xBF) ? 2
	      : 1;
	    if (i + bytesPerSequence <= end) {
	      var secondByte, thirdByte, fourthByte, tempCodePoint;
	      switch (bytesPerSequence) {
	        case 1:
	          if (firstByte < 0x80) {
	            codePoint = firstByte;
	          }
	          break
	        case 2:
	          secondByte = buf[i + 1];
	          if ((secondByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F);
	            if (tempCodePoint > 0x7F) {
	              codePoint = tempCodePoint;
	            }
	          }
	          break
	        case 3:
	          secondByte = buf[i + 1];
	          thirdByte = buf[i + 2];
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F);
	            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
	              codePoint = tempCodePoint;
	            }
	          }
	          break
	        case 4:
	          secondByte = buf[i + 1];
	          thirdByte = buf[i + 2];
	          fourthByte = buf[i + 3];
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F);
	            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
	              codePoint = tempCodePoint;
	            }
	          }
	      }
	    }
	    if (codePoint === null) {
	      codePoint = 0xFFFD;
	      bytesPerSequence = 1;
	    } else if (codePoint > 0xFFFF) {
	      codePoint -= 0x10000;
	      res.push(codePoint >>> 10 & 0x3FF | 0xD800);
	      codePoint = 0xDC00 | codePoint & 0x3FF;
	    }
	    res.push(codePoint);
	    i += bytesPerSequence;
	  }
	  return decodeCodePointsArray(res)
	}
	var MAX_ARGUMENTS_LENGTH = 0x1000;
	function decodeCodePointsArray (codePoints) {
	  var len = codePoints.length;
	  if (len <= MAX_ARGUMENTS_LENGTH) {
	    return String.fromCharCode.apply(String, codePoints)
	  }
	  var res = '';
	  var i = 0;
	  while (i < len) {
	    res += String.fromCharCode.apply(
	      String,
	      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
	    );
	  }
	  return res
	}
	function asciiSlice (buf, start, end) {
	  var ret = '';
	  end = Math.min(buf.length, end);
	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i] & 0x7F);
	  }
	  return ret
	}
	function latin1Slice (buf, start, end) {
	  var ret = '';
	  end = Math.min(buf.length, end);
	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i]);
	  }
	  return ret
	}
	function hexSlice (buf, start, end) {
	  var len = buf.length;
	  if (!start || start < 0) start = 0;
	  if (!end || end < 0 || end > len) end = len;
	  var out = '';
	  for (var i = start; i < end; ++i) {
	    out += toHex(buf[i]);
	  }
	  return out
	}
	function utf16leSlice (buf, start, end) {
	  var bytes = buf.slice(start, end);
	  var res = '';
	  for (var i = 0; i < bytes.length; i += 2) {
	    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
	  }
	  return res
	}
	Buffer$1.prototype.slice = function slice (start, end) {
	  var len = this.length;
	  start = ~~start;
	  end = end === undefined ? len : ~~end;
	  if (start < 0) {
	    start += len;
	    if (start < 0) start = 0;
	  } else if (start > len) {
	    start = len;
	  }
	  if (end < 0) {
	    end += len;
	    if (end < 0) end = 0;
	  } else if (end > len) {
	    end = len;
	  }
	  if (end < start) end = start;
	  var newBuf;
	  if (Buffer$1.TYPED_ARRAY_SUPPORT) {
	    newBuf = this.subarray(start, end);
	    newBuf.__proto__ = Buffer$1.prototype;
	  } else {
	    var sliceLen = end - start;
	    newBuf = new Buffer$1(sliceLen, undefined);
	    for (var i = 0; i < sliceLen; ++i) {
	      newBuf[i] = this[i + start];
	    }
	  }
	  return newBuf
	};
	function checkOffset (offset, ext, length) {
	  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
	  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
	}
	Buffer$1.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0;
	  byteLength = byteLength | 0;
	  if (!noAssert) checkOffset(offset, byteLength, this.length);
	  var val = this[offset];
	  var mul = 1;
	  var i = 0;
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul;
	  }
	  return val
	};
	Buffer$1.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0;
	  byteLength = byteLength | 0;
	  if (!noAssert) {
	    checkOffset(offset, byteLength, this.length);
	  }
	  var val = this[offset + --byteLength];
	  var mul = 1;
	  while (byteLength > 0 && (mul *= 0x100)) {
	    val += this[offset + --byteLength] * mul;
	  }
	  return val
	};
	Buffer$1.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length);
	  return this[offset]
	};
	Buffer$1.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length);
	  return this[offset] | (this[offset + 1] << 8)
	};
	Buffer$1.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length);
	  return (this[offset] << 8) | this[offset + 1]
	};
	Buffer$1.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length);
	  return ((this[offset]) |
	      (this[offset + 1] << 8) |
	      (this[offset + 2] << 16)) +
	      (this[offset + 3] * 0x1000000)
	};
	Buffer$1.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length);
	  return (this[offset] * 0x1000000) +
	    ((this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    this[offset + 3])
	};
	Buffer$1.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0;
	  byteLength = byteLength | 0;
	  if (!noAssert) checkOffset(offset, byteLength, this.length);
	  var val = this[offset];
	  var mul = 1;
	  var i = 0;
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul;
	  }
	  mul *= 0x80;
	  if (val >= mul) val -= Math.pow(2, 8 * byteLength);
	  return val
	};
	Buffer$1.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0;
	  byteLength = byteLength | 0;
	  if (!noAssert) checkOffset(offset, byteLength, this.length);
	  var i = byteLength;
	  var mul = 1;
	  var val = this[offset + --i];
	  while (i > 0 && (mul *= 0x100)) {
	    val += this[offset + --i] * mul;
	  }
	  mul *= 0x80;
	  if (val >= mul) val -= Math.pow(2, 8 * byteLength);
	  return val
	};
	Buffer$1.prototype.readInt8 = function readInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length);
	  if (!(this[offset] & 0x80)) return (this[offset])
	  return ((0xff - this[offset] + 1) * -1)
	};
	Buffer$1.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length);
	  var val = this[offset] | (this[offset + 1] << 8);
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	};
	Buffer$1.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length);
	  var val = this[offset + 1] | (this[offset] << 8);
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	};
	Buffer$1.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length);
	  return (this[offset]) |
	    (this[offset + 1] << 8) |
	    (this[offset + 2] << 16) |
	    (this[offset + 3] << 24)
	};
	Buffer$1.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length);
	  return (this[offset] << 24) |
	    (this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    (this[offset + 3])
	};
	Buffer$1.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length);
	  return read(this, offset, true, 23, 4)
	};
	Buffer$1.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length);
	  return read(this, offset, false, 23, 4)
	};
	Buffer$1.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length);
	  return read(this, offset, true, 52, 8)
	};
	Buffer$1.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length);
	  return read(this, offset, false, 52, 8)
	};
	function checkInt (buf, value, offset, ext, max, min) {
	  if (!internalIsBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
	  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
	  if (offset + ext > buf.length) throw new RangeError('Index out of range')
	}
	Buffer$1.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  byteLength = byteLength | 0;
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
	    checkInt(this, value, offset, byteLength, maxBytes, 0);
	  }
	  var mul = 1;
	  var i = 0;
	  this[offset] = value & 0xFF;
	  while (++i < byteLength && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF;
	  }
	  return offset + byteLength
	};
	Buffer$1.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  byteLength = byteLength | 0;
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
	    checkInt(this, value, offset, byteLength, maxBytes, 0);
	  }
	  var i = byteLength - 1;
	  var mul = 1;
	  this[offset + i] = value & 0xFF;
	  while (--i >= 0 && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF;
	  }
	  return offset + byteLength
	};
	Buffer$1.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
	  if (!Buffer$1.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
	  this[offset] = (value & 0xff);
	  return offset + 1
	};
	function objectWriteUInt16 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffff + value + 1;
	  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
	    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
	      (littleEndian ? i : 1 - i) * 8;
	  }
	}
	Buffer$1.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
	  if (Buffer$1.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff);
	    this[offset + 1] = (value >>> 8);
	  } else {
	    objectWriteUInt16(this, value, offset, true);
	  }
	  return offset + 2
	};
	Buffer$1.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
	  if (Buffer$1.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8);
	    this[offset + 1] = (value & 0xff);
	  } else {
	    objectWriteUInt16(this, value, offset, false);
	  }
	  return offset + 2
	};
	function objectWriteUInt32 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffffffff + value + 1;
	  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
	    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff;
	  }
	}
	Buffer$1.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
	  if (Buffer$1.TYPED_ARRAY_SUPPORT) {
	    this[offset + 3] = (value >>> 24);
	    this[offset + 2] = (value >>> 16);
	    this[offset + 1] = (value >>> 8);
	    this[offset] = (value & 0xff);
	  } else {
	    objectWriteUInt32(this, value, offset, true);
	  }
	  return offset + 4
	};
	Buffer$1.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
	  if (Buffer$1.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24);
	    this[offset + 1] = (value >>> 16);
	    this[offset + 2] = (value >>> 8);
	    this[offset + 3] = (value & 0xff);
	  } else {
	    objectWriteUInt32(this, value, offset, false);
	  }
	  return offset + 4
	};
	Buffer$1.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1);
	    checkInt(this, value, offset, byteLength, limit - 1, -limit);
	  }
	  var i = 0;
	  var mul = 1;
	  var sub = 0;
	  this[offset] = value & 0xFF;
	  while (++i < byteLength && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
	      sub = 1;
	    }
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF;
	  }
	  return offset + byteLength
	};
	Buffer$1.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1);
	    checkInt(this, value, offset, byteLength, limit - 1, -limit);
	  }
	  var i = byteLength - 1;
	  var mul = 1;
	  var sub = 0;
	  this[offset + i] = value & 0xFF;
	  while (--i >= 0 && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
	      sub = 1;
	    }
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF;
	  }
	  return offset + byteLength
	};
	Buffer$1.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
	  if (!Buffer$1.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
	  if (value < 0) value = 0xff + value + 1;
	  this[offset] = (value & 0xff);
	  return offset + 1
	};
	Buffer$1.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
	  if (Buffer$1.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff);
	    this[offset + 1] = (value >>> 8);
	  } else {
	    objectWriteUInt16(this, value, offset, true);
	  }
	  return offset + 2
	};
	Buffer$1.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
	  if (Buffer$1.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8);
	    this[offset + 1] = (value & 0xff);
	  } else {
	    objectWriteUInt16(this, value, offset, false);
	  }
	  return offset + 2
	};
	Buffer$1.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
	  if (Buffer$1.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff);
	    this[offset + 1] = (value >>> 8);
	    this[offset + 2] = (value >>> 16);
	    this[offset + 3] = (value >>> 24);
	  } else {
	    objectWriteUInt32(this, value, offset, true);
	  }
	  return offset + 4
	};
	Buffer$1.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
	  if (value < 0) value = 0xffffffff + value + 1;
	  if (Buffer$1.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24);
	    this[offset + 1] = (value >>> 16);
	    this[offset + 2] = (value >>> 8);
	    this[offset + 3] = (value & 0xff);
	  } else {
	    objectWriteUInt32(this, value, offset, false);
	  }
	  return offset + 4
	};
	function checkIEEE754 (buf, value, offset, ext, max, min) {
	  if (offset + ext > buf.length) throw new RangeError('Index out of range')
	  if (offset < 0) throw new RangeError('Index out of range')
	}
	function writeFloat (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38);
	  }
	  write(buf, value, offset, littleEndian, 23, 4);
	  return offset + 4
	}
	Buffer$1.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, true, noAssert)
	};
	Buffer$1.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, false, noAssert)
	};
	function writeDouble (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308);
	  }
	  write(buf, value, offset, littleEndian, 52, 8);
	  return offset + 8
	}
	Buffer$1.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, true, noAssert)
	};
	Buffer$1.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, false, noAssert)
	};
	Buffer$1.prototype.copy = function copy (target, targetStart, start, end) {
	  if (!start) start = 0;
	  if (!end && end !== 0) end = this.length;
	  if (targetStart >= target.length) targetStart = target.length;
	  if (!targetStart) targetStart = 0;
	  if (end > 0 && end < start) end = start;
	  if (end === start) return 0
	  if (target.length === 0 || this.length === 0) return 0
	  if (targetStart < 0) {
	    throw new RangeError('targetStart out of bounds')
	  }
	  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
	  if (end < 0) throw new RangeError('sourceEnd out of bounds')
	  if (end > this.length) end = this.length;
	  if (target.length - targetStart < end - start) {
	    end = target.length - targetStart + start;
	  }
	  var len = end - start;
	  var i;
	  if (this === target && start < targetStart && targetStart < end) {
	    for (i = len - 1; i >= 0; --i) {
	      target[i + targetStart] = this[i + start];
	    }
	  } else if (len < 1000 || !Buffer$1.TYPED_ARRAY_SUPPORT) {
	    for (i = 0; i < len; ++i) {
	      target[i + targetStart] = this[i + start];
	    }
	  } else {
	    Uint8Array.prototype.set.call(
	      target,
	      this.subarray(start, start + len),
	      targetStart
	    );
	  }
	  return len
	};
	Buffer$1.prototype.fill = function fill (val, start, end, encoding) {
	  if (typeof val === 'string') {
	    if (typeof start === 'string') {
	      encoding = start;
	      start = 0;
	      end = this.length;
	    } else if (typeof end === 'string') {
	      encoding = end;
	      end = this.length;
	    }
	    if (val.length === 1) {
	      var code = val.charCodeAt(0);
	      if (code < 256) {
	        val = code;
	      }
	    }
	    if (encoding !== undefined && typeof encoding !== 'string') {
	      throw new TypeError('encoding must be a string')
	    }
	    if (typeof encoding === 'string' && !Buffer$1.isEncoding(encoding)) {
	      throw new TypeError('Unknown encoding: ' + encoding)
	    }
	  } else if (typeof val === 'number') {
	    val = val & 255;
	  }
	  if (start < 0 || this.length < start || this.length < end) {
	    throw new RangeError('Out of range index')
	  }
	  if (end <= start) {
	    return this
	  }
	  start = start >>> 0;
	  end = end === undefined ? this.length : end >>> 0;
	  if (!val) val = 0;
	  var i;
	  if (typeof val === 'number') {
	    for (i = start; i < end; ++i) {
	      this[i] = val;
	    }
	  } else {
	    var bytes = internalIsBuffer(val)
	      ? val
	      : utf8ToBytes(new Buffer$1(val, encoding).toString());
	    var len = bytes.length;
	    for (i = 0; i < end - start; ++i) {
	      this[i + start] = bytes[i % len];
	    }
	  }
	  return this
	};
	var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;
	function base64clean (str) {
	  str = stringtrim(str).replace(INVALID_BASE64_RE, '');
	  if (str.length < 2) return ''
	  while (str.length % 4 !== 0) {
	    str = str + '=';
	  }
	  return str
	}
	function stringtrim (str) {
	  if (str.trim) return str.trim()
	  return str.replace(/^\s+|\s+$/g, '')
	}
	function toHex (n) {
	  if (n < 16) return '0' + n.toString(16)
	  return n.toString(16)
	}
	function utf8ToBytes (string, units) {
	  units = units || Infinity;
	  var codePoint;
	  var length = string.length;
	  var leadSurrogate = null;
	  var bytes = [];
	  for (var i = 0; i < length; ++i) {
	    codePoint = string.charCodeAt(i);
	    if (codePoint > 0xD7FF && codePoint < 0xE000) {
	      if (!leadSurrogate) {
	        if (codePoint > 0xDBFF) {
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
	          continue
	        } else if (i + 1 === length) {
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
	          continue
	        }
	        leadSurrogate = codePoint;
	        continue
	      }
	      if (codePoint < 0xDC00) {
	        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
	        leadSurrogate = codePoint;
	        continue
	      }
	      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
	    } else if (leadSurrogate) {
	      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
	    }
	    leadSurrogate = null;
	    if (codePoint < 0x80) {
	      if ((units -= 1) < 0) break
	      bytes.push(codePoint);
	    } else if (codePoint < 0x800) {
	      if ((units -= 2) < 0) break
	      bytes.push(
	        codePoint >> 0x6 | 0xC0,
	        codePoint & 0x3F | 0x80
	      );
	    } else if (codePoint < 0x10000) {
	      if ((units -= 3) < 0) break
	      bytes.push(
	        codePoint >> 0xC | 0xE0,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      );
	    } else if (codePoint < 0x110000) {
	      if ((units -= 4) < 0) break
	      bytes.push(
	        codePoint >> 0x12 | 0xF0,
	        codePoint >> 0xC & 0x3F | 0x80,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      );
	    } else {
	      throw new Error('Invalid code point')
	    }
	  }
	  return bytes
	}
	function asciiToBytes (str) {
	  var byteArray = [];
	  for (var i = 0; i < str.length; ++i) {
	    byteArray.push(str.charCodeAt(i) & 0xFF);
	  }
	  return byteArray
	}
	function utf16leToBytes (str, units) {
	  var c, hi, lo;
	  var byteArray = [];
	  for (var i = 0; i < str.length; ++i) {
	    if ((units -= 2) < 0) break
	    c = str.charCodeAt(i);
	    hi = c >> 8;
	    lo = c % 256;
	    byteArray.push(lo);
	    byteArray.push(hi);
	  }
	  return byteArray
	}
	function base64ToBytes (str) {
	  return toByteArray(base64clean(str))
	}
	function blitBuffer (src, dst, offset, length) {
	  for (var i = 0; i < length; ++i) {
	    if ((i + offset >= dst.length) || (i >= src.length)) break
	    dst[i + offset] = src[i];
	  }
	  return i
	}
	function isnan (val) {
	  return val !== val
	}
	function isBuffer(obj) {
	  return obj != null && (!!obj._isBuffer || isFastBuffer(obj) || isSlowBuffer(obj))
	}
	function isFastBuffer (obj) {
	  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
	}
	function isSlowBuffer (obj) {
	  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isFastBuffer(obj.slice(0, 0))
	}

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	var cachedSetTimeout = defaultSetTimout;
	var cachedClearTimeout = defaultClearTimeout;
	if (typeof global.setTimeout === 'function') {
	    cachedSetTimeout = setTimeout;
	}
	if (typeof global.clearTimeout === 'function') {
	    cachedClearTimeout = clearTimeout;
	}
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        return setTimeout(fun, 0);
	    }
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        return clearTimeout(marker);
	    }
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	function nextTick(fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	}
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	var title = 'browser';
	var platform = 'browser';
	var browser = true;
	var env = {};
	var argv = [];
	var version = '';
	var versions = {};
	var release = {};
	var config = {};
	function noop() {}
	var on = noop;
	var addListener = noop;
	var once = noop;
	var off = noop;
	var removeListener = noop;
	var removeAllListeners = noop;
	var emit = noop;
	function binding(name) {
	    throw new Error('process.binding is not supported');
	}
	function cwd () { return '/' }
	function chdir (dir) {
	    throw new Error('process.chdir is not supported');
	}function umask() { return 0; }
	var performance = global.performance || {};
	var performanceNow =
	  performance.now        ||
	  performance.mozNow     ||
	  performance.msNow      ||
	  performance.oNow       ||
	  performance.webkitNow  ||
	  function(){ return (new Date()).getTime() };
	function hrtime(previousTimestamp){
	  var clocktime = performanceNow.call(performance)*1e-3;
	  var seconds = Math.floor(clocktime);
	  var nanoseconds = Math.floor((clocktime%1)*1e9);
	  if (previousTimestamp) {
	    seconds = seconds - previousTimestamp[0];
	    nanoseconds = nanoseconds - previousTimestamp[1];
	    if (nanoseconds<0) {
	      seconds--;
	      nanoseconds += 1e9;
	    }
	  }
	  return [seconds,nanoseconds]
	}
	var startTime = new Date();
	function uptime() {
	  var currentTime = new Date();
	  var dif = currentTime - startTime;
	  return dif / 1000;
	}
	var process$1 = {
	  nextTick: nextTick,
	  title: title,
	  browser: browser,
	  env: env,
	  argv: argv,
	  version: version,
	  versions: versions,
	  on: on,
	  addListener: addListener,
	  once: once,
	  off: off,
	  removeListener: removeListener,
	  removeAllListeners: removeAllListeners,
	  emit: emit,
	  binding: binding,
	  cwd: cwd,
	  chdir: chdir,
	  umask: umask,
	  hrtime: hrtime,
	  platform: platform,
	  release: release,
	  config: config,
	  uptime: uptime
	};

	var inherits$1;
	if (typeof Object.create === 'function'){
	  inherits$1 = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor;
	    ctor.prototype = Object.create(superCtor.prototype, {
	      constructor: {
	        value: ctor,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	  };
	} else {
	  inherits$1 = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor;
	    var TempCtor = function () {};
	    TempCtor.prototype = superCtor.prototype;
	    ctor.prototype = new TempCtor();
	    ctor.prototype.constructor = ctor;
	  };
	}
	var inherits$2 = inherits$1;

	var formatRegExp = /%[sdj%]/g;
	function format(f) {
	  if (!isString(f)) {
	    var objects = [];
	    for (var i = 0; i < arguments.length; i++) {
	      objects.push(inspect(arguments[i]));
	    }
	    return objects.join(' ');
	  }
	  var i = 1;
	  var args = arguments;
	  var len = args.length;
	  var str = String(f).replace(formatRegExp, function(x) {
	    if (x === '%%') return '%';
	    if (i >= len) return x;
	    switch (x) {
	      case '%s': return String(args[i++]);
	      case '%d': return Number(args[i++]);
	      case '%j':
	        try {
	          return JSON.stringify(args[i++]);
	        } catch (_) {
	          return '[Circular]';
	        }
	      default:
	        return x;
	    }
	  });
	  for (var x = args[i]; i < len; x = args[++i]) {
	    if (isNull(x) || !isObject(x)) {
	      str += ' ' + x;
	    } else {
	      str += ' ' + inspect(x);
	    }
	  }
	  return str;
	}function deprecate(fn, msg) {
	  if (isUndefined(global.process)) {
	    return function() {
	      return deprecate(fn, msg).apply(this, arguments);
	    };
	  }
	  if (process$1.noDeprecation === true) {
	    return fn;
	  }
	  var warned = false;
	  function deprecated() {
	    if (!warned) {
	      if (process$1.throwDeprecation) {
	        throw new Error(msg);
	      } else if (process$1.traceDeprecation) {
	        console.trace(msg);
	      } else {
	        console.error(msg);
	      }
	      warned = true;
	    }
	    return fn.apply(this, arguments);
	  }
	  return deprecated;
	}var debugs = {};
	var debugEnviron;
	function debuglog(set) {
	  if (isUndefined(debugEnviron))
	    debugEnviron = process$1.env.NODE_DEBUG || '';
	  set = set.toUpperCase();
	  if (!debugs[set]) {
	    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
	      var pid = 0;
	      debugs[set] = function() {
	        var msg = format.apply(null, arguments);
	        console.error('%s %d: %s', set, pid, msg);
	      };
	    } else {
	      debugs[set] = function() {};
	    }
	  }
	  return debugs[set];
	}function inspect(obj, opts) {
	  var ctx = {
	    seen: [],
	    stylize: stylizeNoColor
	  };
	  if (arguments.length >= 3) ctx.depth = arguments[2];
	  if (arguments.length >= 4) ctx.colors = arguments[3];
	  if (isBoolean(opts)) {
	    ctx.showHidden = opts;
	  } else if (opts) {
	    _extend(ctx, opts);
	  }
	  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
	  if (isUndefined(ctx.depth)) ctx.depth = 2;
	  if (isUndefined(ctx.colors)) ctx.colors = false;
	  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
	  if (ctx.colors) ctx.stylize = stylizeWithColor;
	  return formatValue(ctx, obj, ctx.depth);
	}
	inspect.colors = {
	  'bold' : [1, 22],
	  'italic' : [3, 23],
	  'underline' : [4, 24],
	  'inverse' : [7, 27],
	  'white' : [37, 39],
	  'grey' : [90, 39],
	  'black' : [30, 39],
	  'blue' : [34, 39],
	  'cyan' : [36, 39],
	  'green' : [32, 39],
	  'magenta' : [35, 39],
	  'red' : [31, 39],
	  'yellow' : [33, 39]
	};
	inspect.styles = {
	  'special': 'cyan',
	  'number': 'yellow',
	  'boolean': 'yellow',
	  'undefined': 'grey',
	  'null': 'bold',
	  'string': 'green',
	  'date': 'magenta',
	  'regexp': 'red'
	};
	function stylizeWithColor(str, styleType) {
	  var style = inspect.styles[styleType];
	  if (style) {
	    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
	           '\u001b[' + inspect.colors[style][1] + 'm';
	  } else {
	    return str;
	  }
	}
	function stylizeNoColor(str, styleType) {
	  return str;
	}
	function arrayToHash(array) {
	  var hash = {};
	  array.forEach(function(val, idx) {
	    hash[val] = true;
	  });
	  return hash;
	}
	function formatValue(ctx, value, recurseTimes) {
	  if (ctx.customInspect &&
	      value &&
	      isFunction(value.inspect) &&
	      value.inspect !== inspect &&
	      !(value.constructor && value.constructor.prototype === value)) {
	    var ret = value.inspect(recurseTimes, ctx);
	    if (!isString(ret)) {
	      ret = formatValue(ctx, ret, recurseTimes);
	    }
	    return ret;
	  }
	  var primitive = formatPrimitive(ctx, value);
	  if (primitive) {
	    return primitive;
	  }
	  var keys = Object.keys(value);
	  var visibleKeys = arrayToHash(keys);
	  if (ctx.showHidden) {
	    keys = Object.getOwnPropertyNames(value);
	  }
	  if (isError(value)
	      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
	    return formatError(value);
	  }
	  if (keys.length === 0) {
	    if (isFunction(value)) {
	      var name = value.name ? ': ' + value.name : '';
	      return ctx.stylize('[Function' + name + ']', 'special');
	    }
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    }
	    if (isDate(value)) {
	      return ctx.stylize(Date.prototype.toString.call(value), 'date');
	    }
	    if (isError(value)) {
	      return formatError(value);
	    }
	  }
	  var base = '', array = false, braces = ['{', '}'];
	  if (isArray$1(value)) {
	    array = true;
	    braces = ['[', ']'];
	  }
	  if (isFunction(value)) {
	    var n = value.name ? ': ' + value.name : '';
	    base = ' [Function' + n + ']';
	  }
	  if (isRegExp(value)) {
	    base = ' ' + RegExp.prototype.toString.call(value);
	  }
	  if (isDate(value)) {
	    base = ' ' + Date.prototype.toUTCString.call(value);
	  }
	  if (isError(value)) {
	    base = ' ' + formatError(value);
	  }
	  if (keys.length === 0 && (!array || value.length == 0)) {
	    return braces[0] + base + braces[1];
	  }
	  if (recurseTimes < 0) {
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    } else {
	      return ctx.stylize('[Object]', 'special');
	    }
	  }
	  ctx.seen.push(value);
	  var output;
	  if (array) {
	    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
	  } else {
	    output = keys.map(function(key) {
	      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
	    });
	  }
	  ctx.seen.pop();
	  return reduceToSingleString(output, base, braces);
	}
	function formatPrimitive(ctx, value) {
	  if (isUndefined(value))
	    return ctx.stylize('undefined', 'undefined');
	  if (isString(value)) {
	    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
	                                             .replace(/'/g, "\\'")
	                                             .replace(/\\"/g, '"') + '\'';
	    return ctx.stylize(simple, 'string');
	  }
	  if (isNumber(value))
	    return ctx.stylize('' + value, 'number');
	  if (isBoolean(value))
	    return ctx.stylize('' + value, 'boolean');
	  if (isNull(value))
	    return ctx.stylize('null', 'null');
	}
	function formatError(value) {
	  return '[' + Error.prototype.toString.call(value) + ']';
	}
	function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
	  var output = [];
	  for (var i = 0, l = value.length; i < l; ++i) {
	    if (hasOwnProperty(value, String(i))) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
	          String(i), true));
	    } else {
	      output.push('');
	    }
	  }
	  keys.forEach(function(key) {
	    if (!key.match(/^\d+$/)) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
	          key, true));
	    }
	  });
	  return output;
	}
	function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
	  var name, str, desc;
	  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
	  if (desc.get) {
	    if (desc.set) {
	      str = ctx.stylize('[Getter/Setter]', 'special');
	    } else {
	      str = ctx.stylize('[Getter]', 'special');
	    }
	  } else {
	    if (desc.set) {
	      str = ctx.stylize('[Setter]', 'special');
	    }
	  }
	  if (!hasOwnProperty(visibleKeys, key)) {
	    name = '[' + key + ']';
	  }
	  if (!str) {
	    if (ctx.seen.indexOf(desc.value) < 0) {
	      if (isNull(recurseTimes)) {
	        str = formatValue(ctx, desc.value, null);
	      } else {
	        str = formatValue(ctx, desc.value, recurseTimes - 1);
	      }
	      if (str.indexOf('\n') > -1) {
	        if (array) {
	          str = str.split('\n').map(function(line) {
	            return '  ' + line;
	          }).join('\n').substr(2);
	        } else {
	          str = '\n' + str.split('\n').map(function(line) {
	            return '   ' + line;
	          }).join('\n');
	        }
	      }
	    } else {
	      str = ctx.stylize('[Circular]', 'special');
	    }
	  }
	  if (isUndefined(name)) {
	    if (array && key.match(/^\d+$/)) {
	      return str;
	    }
	    name = JSON.stringify('' + key);
	    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
	      name = name.substr(1, name.length - 2);
	      name = ctx.stylize(name, 'name');
	    } else {
	      name = name.replace(/'/g, "\\'")
	                 .replace(/\\"/g, '"')
	                 .replace(/(^"|"$)/g, "'");
	      name = ctx.stylize(name, 'string');
	    }
	  }
	  return name + ': ' + str;
	}
	function reduceToSingleString(output, base, braces) {
	  var length = output.reduce(function(prev, cur) {
	    if (cur.indexOf('\n') >= 0) ;
	    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
	  }, 0);
	  if (length > 60) {
	    return braces[0] +
	           (base === '' ? '' : base + '\n ') +
	           ' ' +
	           output.join(',\n  ') +
	           ' ' +
	           braces[1];
	  }
	  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
	}
	function isArray$1(ar) {
	  return Array.isArray(ar);
	}
	function isBoolean(arg) {
	  return typeof arg === 'boolean';
	}
	function isNull(arg) {
	  return arg === null;
	}
	function isNullOrUndefined(arg) {
	  return arg == null;
	}
	function isNumber(arg) {
	  return typeof arg === 'number';
	}
	function isString(arg) {
	  return typeof arg === 'string';
	}
	function isSymbol(arg) {
	  return typeof arg === 'symbol';
	}
	function isUndefined(arg) {
	  return arg === void 0;
	}
	function isRegExp(re) {
	  return isObject(re) && objectToString(re) === '[object RegExp]';
	}
	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}
	function isDate(d) {
	  return isObject(d) && objectToString(d) === '[object Date]';
	}
	function isError(e) {
	  return isObject(e) &&
	      (objectToString(e) === '[object Error]' || e instanceof Error);
	}
	function isFunction(arg) {
	  return typeof arg === 'function';
	}
	function isPrimitive(arg) {
	  return arg === null ||
	         typeof arg === 'boolean' ||
	         typeof arg === 'number' ||
	         typeof arg === 'string' ||
	         typeof arg === 'symbol' ||
	         typeof arg === 'undefined';
	}
	function isBuffer$1(maybeBuf) {
	  return Buffer.isBuffer(maybeBuf);
	}
	function objectToString(o) {
	  return Object.prototype.toString.call(o);
	}
	function pad(n) {
	  return n < 10 ? '0' + n.toString(10) : n.toString(10);
	}
	var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
	              'Oct', 'Nov', 'Dec'];
	function timestamp() {
	  var d = new Date();
	  var time = [pad(d.getHours()),
	              pad(d.getMinutes()),
	              pad(d.getSeconds())].join(':');
	  return [d.getDate(), months[d.getMonth()], time].join(' ');
	}
	function log() {
	  console.log('%s - %s', timestamp(), format.apply(null, arguments));
	}
	function _extend(origin, add) {
	  if (!add || !isObject(add)) return origin;
	  var keys = Object.keys(add);
	  var i = keys.length;
	  while (i--) {
	    origin[keys[i]] = add[keys[i]];
	  }
	  return origin;
	}function hasOwnProperty(obj, prop) {
	  return Object.prototype.hasOwnProperty.call(obj, prop);
	}
	var util = {
	  inherits: inherits$2,
	  _extend: _extend,
	  log: log,
	  isBuffer: isBuffer$1,
	  isPrimitive: isPrimitive,
	  isFunction: isFunction,
	  isError: isError,
	  isDate: isDate,
	  isObject: isObject,
	  isRegExp: isRegExp,
	  isUndefined: isUndefined,
	  isSymbol: isSymbol,
	  isString: isString,
	  isNumber: isNumber,
	  isNullOrUndefined: isNullOrUndefined,
	  isNull: isNull,
	  isBoolean: isBoolean,
	  isArray: isArray$1,
	  inspect: inspect,
	  deprecate: deprecate,
	  format: format,
	  debuglog: debuglog
	};

	var util$1 = /*#__PURE__*/Object.freeze({
		format: format,
		deprecate: deprecate,
		debuglog: debuglog,
		inspect: inspect,
		isArray: isArray$1,
		isBoolean: isBoolean,
		isNull: isNull,
		isNullOrUndefined: isNullOrUndefined,
		isNumber: isNumber,
		isString: isString,
		isSymbol: isSymbol,
		isUndefined: isUndefined,
		isRegExp: isRegExp,
		isObject: isObject,
		isDate: isDate,
		isError: isError,
		isFunction: isFunction,
		isPrimitive: isPrimitive,
		isBuffer: isBuffer$1,
		log: log,
		inherits: inherits$2,
		_extend: _extend,
		default: util
	});

	function compare(a, b) {
	  if (a === b) {
	    return 0;
	  }
	  var x = a.length;
	  var y = b.length;
	  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
	    if (a[i] !== b[i]) {
	      x = a[i];
	      y = b[i];
	      break;
	    }
	  }
	  if (x < y) {
	    return -1;
	  }
	  if (y < x) {
	    return 1;
	  }
	  return 0;
	}
	var hasOwn = Object.prototype.hasOwnProperty;
	var objectKeys = Object.keys || function (obj) {
	  var keys = [];
	  for (var key in obj) {
	    if (hasOwn.call(obj, key)) keys.push(key);
	  }
	  return keys;
	};
	var pSlice = Array.prototype.slice;
	var _functionsHaveNames;
	function functionsHaveNames() {
	  if (typeof _functionsHaveNames !== 'undefined') {
	    return _functionsHaveNames;
	  }
	  return _functionsHaveNames = (function () {
	    return function foo() {}.name === 'foo';
	  }());
	}
	function pToString (obj) {
	  return Object.prototype.toString.call(obj);
	}
	function isView(arrbuf) {
	  if (isBuffer(arrbuf)) {
	    return false;
	  }
	  if (typeof global.ArrayBuffer !== 'function') {
	    return false;
	  }
	  if (typeof ArrayBuffer.isView === 'function') {
	    return ArrayBuffer.isView(arrbuf);
	  }
	  if (!arrbuf) {
	    return false;
	  }
	  if (arrbuf instanceof DataView) {
	    return true;
	  }
	  if (arrbuf.buffer && arrbuf.buffer instanceof ArrayBuffer) {
	    return true;
	  }
	  return false;
	}
	function assert(value, message) {
	  if (!value) fail(value, true, message, '==', ok);
	}
	var regex = /\s*function\s+([^\(\s]*)\s*/;
	function getName(func) {
	  if (!isFunction(func)) {
	    return;
	  }
	  if (functionsHaveNames()) {
	    return func.name;
	  }
	  var str = func.toString();
	  var match = str.match(regex);
	  return match && match[1];
	}
	assert.AssertionError = AssertionError;
	function AssertionError(options) {
	  this.name = 'AssertionError';
	  this.actual = options.actual;
	  this.expected = options.expected;
	  this.operator = options.operator;
	  if (options.message) {
	    this.message = options.message;
	    this.generatedMessage = false;
	  } else {
	    this.message = getMessage(this);
	    this.generatedMessage = true;
	  }
	  var stackStartFunction = options.stackStartFunction || fail;
	  if (Error.captureStackTrace) {
	    Error.captureStackTrace(this, stackStartFunction);
	  } else {
	    var err = new Error();
	    if (err.stack) {
	      var out = err.stack;
	      var fn_name = getName(stackStartFunction);
	      var idx = out.indexOf('\n' + fn_name);
	      if (idx >= 0) {
	        var next_line = out.indexOf('\n', idx + 1);
	        out = out.substring(next_line + 1);
	      }
	      this.stack = out;
	    }
	  }
	}
	inherits$2(AssertionError, Error);
	function truncate(s, n) {
	  if (typeof s === 'string') {
	    return s.length < n ? s : s.slice(0, n);
	  } else {
	    return s;
	  }
	}
	function inspect$1(something) {
	  if (functionsHaveNames() || !isFunction(something)) {
	    return inspect(something);
	  }
	  var rawname = getName(something);
	  var name = rawname ? ': ' + rawname : '';
	  return '[Function' +  name + ']';
	}
	function getMessage(self) {
	  return truncate(inspect$1(self.actual), 128) + ' ' +
	         self.operator + ' ' +
	         truncate(inspect$1(self.expected), 128);
	}
	function fail(actual, expected, message, operator, stackStartFunction) {
	  throw new AssertionError({
	    message: message,
	    actual: actual,
	    expected: expected,
	    operator: operator,
	    stackStartFunction: stackStartFunction
	  });
	}
	assert.fail = fail;
	function ok(value, message) {
	  if (!value) fail(value, true, message, '==', ok);
	}
	assert.ok = ok;
	assert.equal = equal;
	function equal(actual, expected, message) {
	  if (actual != expected) fail(actual, expected, message, '==', equal);
	}
	assert.notEqual = notEqual;
	function notEqual(actual, expected, message) {
	  if (actual == expected) {
	    fail(actual, expected, message, '!=', notEqual);
	  }
	}
	assert.deepEqual = deepEqual;
	function deepEqual(actual, expected, message) {
	  if (!_deepEqual(actual, expected, false)) {
	    fail(actual, expected, message, 'deepEqual', deepEqual);
	  }
	}
	assert.deepStrictEqual = deepStrictEqual;
	function deepStrictEqual(actual, expected, message) {
	  if (!_deepEqual(actual, expected, true)) {
	    fail(actual, expected, message, 'deepStrictEqual', deepStrictEqual);
	  }
	}
	function _deepEqual(actual, expected, strict, memos) {
	  if (actual === expected) {
	    return true;
	  } else if (isBuffer(actual) && isBuffer(expected)) {
	    return compare(actual, expected) === 0;
	  } else if (isDate(actual) && isDate(expected)) {
	    return actual.getTime() === expected.getTime();
	  } else if (isRegExp(actual) && isRegExp(expected)) {
	    return actual.source === expected.source &&
	           actual.global === expected.global &&
	           actual.multiline === expected.multiline &&
	           actual.lastIndex === expected.lastIndex &&
	           actual.ignoreCase === expected.ignoreCase;
	  } else if ((actual === null || typeof actual !== 'object') &&
	             (expected === null || typeof expected !== 'object')) {
	    return strict ? actual === expected : actual == expected;
	  } else if (isView(actual) && isView(expected) &&
	             pToString(actual) === pToString(expected) &&
	             !(actual instanceof Float32Array ||
	               actual instanceof Float64Array)) {
	    return compare(new Uint8Array(actual.buffer),
	                   new Uint8Array(expected.buffer)) === 0;
	  } else if (isBuffer(actual) !== isBuffer(expected)) {
	    return false;
	  } else {
	    memos = memos || {actual: [], expected: []};
	    var actualIndex = memos.actual.indexOf(actual);
	    if (actualIndex !== -1) {
	      if (actualIndex === memos.expected.indexOf(expected)) {
	        return true;
	      }
	    }
	    memos.actual.push(actual);
	    memos.expected.push(expected);
	    return objEquiv(actual, expected, strict, memos);
	  }
	}
	function isArguments(object) {
	  return Object.prototype.toString.call(object) == '[object Arguments]';
	}
	function objEquiv(a, b, strict, actualVisitedObjects) {
	  if (a === null || a === undefined || b === null || b === undefined)
	    return false;
	  if (isPrimitive(a) || isPrimitive(b))
	    return a === b;
	  if (strict && Object.getPrototypeOf(a) !== Object.getPrototypeOf(b))
	    return false;
	  var aIsArgs = isArguments(a);
	  var bIsArgs = isArguments(b);
	  if ((aIsArgs && !bIsArgs) || (!aIsArgs && bIsArgs))
	    return false;
	  if (aIsArgs) {
	    a = pSlice.call(a);
	    b = pSlice.call(b);
	    return _deepEqual(a, b, strict);
	  }
	  var ka = objectKeys(a);
	  var kb = objectKeys(b);
	  var key, i;
	  if (ka.length !== kb.length)
	    return false;
	  ka.sort();
	  kb.sort();
	  for (i = ka.length - 1; i >= 0; i--) {
	    if (ka[i] !== kb[i])
	      return false;
	  }
	  for (i = ka.length - 1; i >= 0; i--) {
	    key = ka[i];
	    if (!_deepEqual(a[key], b[key], strict, actualVisitedObjects))
	      return false;
	  }
	  return true;
	}
	assert.notDeepEqual = notDeepEqual;
	function notDeepEqual(actual, expected, message) {
	  if (_deepEqual(actual, expected, false)) {
	    fail(actual, expected, message, 'notDeepEqual', notDeepEqual);
	  }
	}
	assert.notDeepStrictEqual = notDeepStrictEqual;
	function notDeepStrictEqual(actual, expected, message) {
	  if (_deepEqual(actual, expected, true)) {
	    fail(actual, expected, message, 'notDeepStrictEqual', notDeepStrictEqual);
	  }
	}
	assert.strictEqual = strictEqual;
	function strictEqual(actual, expected, message) {
	  if (actual !== expected) {
	    fail(actual, expected, message, '===', strictEqual);
	  }
	}
	assert.notStrictEqual = notStrictEqual;
	function notStrictEqual(actual, expected, message) {
	  if (actual === expected) {
	    fail(actual, expected, message, '!==', notStrictEqual);
	  }
	}
	function expectedException(actual, expected) {
	  if (!actual || !expected) {
	    return false;
	  }
	  if (Object.prototype.toString.call(expected) == '[object RegExp]') {
	    return expected.test(actual);
	  }
	  try {
	    if (actual instanceof expected) {
	      return true;
	    }
	  } catch (e) {
	  }
	  if (Error.isPrototypeOf(expected)) {
	    return false;
	  }
	  return expected.call({}, actual) === true;
	}
	function _tryBlock(block) {
	  var error;
	  try {
	    block();
	  } catch (e) {
	    error = e;
	  }
	  return error;
	}
	function _throws(shouldThrow, block, expected, message) {
	  var actual;
	  if (typeof block !== 'function') {
	    throw new TypeError('"block" argument must be a function');
	  }
	  if (typeof expected === 'string') {
	    message = expected;
	    expected = null;
	  }
	  actual = _tryBlock(block);
	  message = (expected && expected.name ? ' (' + expected.name + ').' : '.') +
	            (message ? ' ' + message : '.');
	  if (shouldThrow && !actual) {
	    fail(actual, expected, 'Missing expected exception' + message);
	  }
	  var userProvidedMessage = typeof message === 'string';
	  var isUnwantedException = !shouldThrow && isError(actual);
	  var isUnexpectedException = !shouldThrow && actual && !expected;
	  if ((isUnwantedException &&
	      userProvidedMessage &&
	      expectedException(actual, expected)) ||
	      isUnexpectedException) {
	    fail(actual, expected, 'Got unwanted exception' + message);
	  }
	  if ((shouldThrow && actual && expected &&
	      !expectedException(actual, expected)) || (!shouldThrow && actual)) {
	    throw actual;
	  }
	}
	assert.throws = throws;
	function throws(block,             error,             message) {
	  _throws(true, block, error, message);
	}
	assert.doesNotThrow = doesNotThrow;
	function doesNotThrow(block,             error,             message) {
	  _throws(false, block, error, message);
	}
	assert.ifError = ifError;
	function ifError(err) {
	  if (err) throw err;
	}

	var assert$1 = /*#__PURE__*/Object.freeze({
		default: assert,
		AssertionError: AssertionError,
		fail: fail,
		ok: ok,
		assert: ok,
		equal: equal,
		notEqual: notEqual,
		deepEqual: deepEqual,
		deepStrictEqual: deepStrictEqual,
		notDeepEqual: notDeepEqual,
		notDeepStrictEqual: notDeepStrictEqual,
		strictEqual: strictEqual,
		notStrictEqual: notStrictEqual,
		throws: throws,
		doesNotThrow: doesNotThrow,
		ifError: ifError
	});

	var empty = {};

	var empty$1 = /*#__PURE__*/Object.freeze({
		default: empty
	});

	function normalizeArray(parts, allowAboveRoot) {
	  var up = 0;
	  for (var i = parts.length - 1; i >= 0; i--) {
	    var last = parts[i];
	    if (last === '.') {
	      parts.splice(i, 1);
	    } else if (last === '..') {
	      parts.splice(i, 1);
	      up++;
	    } else if (up) {
	      parts.splice(i, 1);
	      up--;
	    }
	  }
	  if (allowAboveRoot) {
	    for (; up--; up) {
	      parts.unshift('..');
	    }
	  }
	  return parts;
	}
	var splitPathRe =
	    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
	var splitPath = function(filename) {
	  return splitPathRe.exec(filename).slice(1);
	};
	function resolve() {
	  var resolvedPath = '',
	      resolvedAbsolute = false;
	  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
	    var path = (i >= 0) ? arguments[i] : '/';
	    if (typeof path !== 'string') {
	      throw new TypeError('Arguments to path.resolve must be strings');
	    } else if (!path) {
	      continue;
	    }
	    resolvedPath = path + '/' + resolvedPath;
	    resolvedAbsolute = path.charAt(0) === '/';
	  }
	  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
	    return !!p;
	  }), !resolvedAbsolute).join('/');
	  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
	}function normalize(path) {
	  var isPathAbsolute = isAbsolute(path),
	      trailingSlash = substr(path, -1) === '/';
	  path = normalizeArray(filter(path.split('/'), function(p) {
	    return !!p;
	  }), !isPathAbsolute).join('/');
	  if (!path && !isPathAbsolute) {
	    path = '.';
	  }
	  if (path && trailingSlash) {
	    path += '/';
	  }
	  return (isPathAbsolute ? '/' : '') + path;
	}function isAbsolute(path) {
	  return path.charAt(0) === '/';
	}
	function join() {
	  var paths = Array.prototype.slice.call(arguments, 0);
	  return normalize(filter(paths, function(p, index) {
	    if (typeof p !== 'string') {
	      throw new TypeError('Arguments to path.join must be strings');
	    }
	    return p;
	  }).join('/'));
	}
	function relative(from, to) {
	  from = resolve(from).substr(1);
	  to = resolve(to).substr(1);
	  function trim(arr) {
	    var start = 0;
	    for (; start < arr.length; start++) {
	      if (arr[start] !== '') break;
	    }
	    var end = arr.length - 1;
	    for (; end >= 0; end--) {
	      if (arr[end] !== '') break;
	    }
	    if (start > end) return [];
	    return arr.slice(start, end - start + 1);
	  }
	  var fromParts = trim(from.split('/'));
	  var toParts = trim(to.split('/'));
	  var length = Math.min(fromParts.length, toParts.length);
	  var samePartsLength = length;
	  for (var i = 0; i < length; i++) {
	    if (fromParts[i] !== toParts[i]) {
	      samePartsLength = i;
	      break;
	    }
	  }
	  var outputParts = [];
	  for (var i = samePartsLength; i < fromParts.length; i++) {
	    outputParts.push('..');
	  }
	  outputParts = outputParts.concat(toParts.slice(samePartsLength));
	  return outputParts.join('/');
	}
	var sep = '/';
	var delimiter = ':';
	function dirname(path) {
	  var result = splitPath(path),
	      root = result[0],
	      dir = result[1];
	  if (!root && !dir) {
	    return '.';
	  }
	  if (dir) {
	    dir = dir.substr(0, dir.length - 1);
	  }
	  return root + dir;
	}
	function basename(path, ext) {
	  var f = splitPath(path)[2];
	  if (ext && f.substr(-1 * ext.length) === ext) {
	    f = f.substr(0, f.length - ext.length);
	  }
	  return f;
	}
	function extname(path) {
	  return splitPath(path)[3];
	}
	var path = {
	  extname: extname,
	  basename: basename,
	  dirname: dirname,
	  sep: sep,
	  delimiter: delimiter,
	  relative: relative,
	  join: join,
	  isAbsolute: isAbsolute,
	  normalize: normalize,
	  resolve: resolve
	};
	function filter (xs, f) {
	    if (xs.filter) return xs.filter(f);
	    var res = [];
	    for (var i = 0; i < xs.length; i++) {
	        if (f(xs[i], i, xs)) res.push(xs[i]);
	    }
	    return res;
	}
	var substr = 'ab'.substr(-1) === 'b' ?
	    function (str, start, len) { return str.substr(start, len) } :
	    function (str, start, len) {
	        if (start < 0) start = str.length + start;
	        return str.substr(start, len);
	    }
	;

	var path$1 = /*#__PURE__*/Object.freeze({
		resolve: resolve,
		normalize: normalize,
		isAbsolute: isAbsolute,
		join: join,
		relative: relative,
		sep: sep,
		delimiter: delimiter,
		dirname: dirname,
		basename: basename,
		extname: extname,
		default: path
	});

	const internals = {};
	var escapeJavaScript = function (input) {
	    if (!input) {
	        return '';
	    }
	    let escaped = '';
	    for (let i = 0; i < input.length; ++i) {
	        const charCode = input.charCodeAt(i);
	        if (internals.isSafe(charCode)) {
	            escaped += input[i];
	        }
	        else {
	            escaped += internals.escapeJavaScriptChar(charCode);
	        }
	    }
	    return escaped;
	};
	var escapeHtml = function (input) {
	    if (!input) {
	        return '';
	    }
	    let escaped = '';
	    for (let i = 0; i < input.length; ++i) {
	        const charCode = input.charCodeAt(i);
	        if (internals.isSafe(charCode)) {
	            escaped += input[i];
	        }
	        else {
	            escaped += internals.escapeHtmlChar(charCode);
	        }
	    }
	    return escaped;
	};
	var escapeJson = function (input) {
	    if (!input) {
	        return '';
	    }
	    const lessThan = 0x3C;
	    const greaterThan = 0x3E;
	    const andSymbol = 0x26;
	    const lineSeperator = 0x2028;
	    let charCode;
	    return input.replace(/[<>&\u2028\u2029]/g, (match) => {
	        charCode = match.charCodeAt(0);
	        if (charCode === lessThan) {
	            return '\\u003c';
	        }
	        else if (charCode === greaterThan) {
	            return '\\u003e';
	        }
	        else if (charCode === andSymbol) {
	            return '\\u0026';
	        }
	        else if (charCode === lineSeperator) {
	            return '\\u2028';
	        }
	        return '\\u2029';
	    });
	};
	internals.escapeJavaScriptChar = function (charCode) {
	    if (charCode >= 256) {
	        return '\\u' + internals.padLeft('' + charCode, 4);
	    }
	    const hexValue = Buffer.from(String.fromCharCode(charCode), 'ascii').toString('hex');
	    return '\\x' + internals.padLeft(hexValue, 2);
	};
	internals.escapeHtmlChar = function (charCode) {
	    const namedEscape = internals.namedHtml[charCode];
	    if (typeof namedEscape !== 'undefined') {
	        return namedEscape;
	    }
	    if (charCode >= 256) {
	        return '&#' + charCode + ';';
	    }
	    const hexValue = Buffer.from(String.fromCharCode(charCode), 'ascii').toString('hex');
	    return '&#x' + internals.padLeft(hexValue, 2) + ';';
	};
	internals.padLeft = function (str, len) {
	    while (str.length < len) {
	        str = '0' + str;
	    }
	    return str;
	};
	internals.isSafe = function (charCode) {
	    return (typeof internals.safeCharCodes[charCode] !== 'undefined');
	};
	internals.namedHtml = {
	    '38': '&amp;',
	    '60': '&lt;',
	    '62': '&gt;',
	    '34': '&quot;',
	    '160': '&nbsp;',
	    '162': '&cent;',
	    '163': '&pound;',
	    '164': '&curren;',
	    '169': '&copy;',
	    '174': '&reg;'
	};
	internals.safeCharCodes = (function () {
	    const safe = {};
	    for (let i = 32; i < 123; ++i) {
	        if ((i >= 97) ||
	            (i >= 65 && i <= 90) ||
	            (i >= 48 && i <= 57) ||
	            i === 32 ||
	            i === 46 ||
	            i === 44 ||
	            i === 45 ||
	            i === 58 ||
	            i === 95) {
	            safe[i] = null;
	        }
	    }
	    return safe;
	}());
	var _escape = {
		escapeJavaScript: escapeJavaScript,
		escapeHtml: escapeHtml,
		escapeJson: escapeJson
	};

	var _escape$1 = /*#__PURE__*/Object.freeze({
		default: _escape,
		__moduleExports: _escape,
		escapeJavaScript: escapeJavaScript,
		escapeHtml: escapeHtml,
		escapeJson: escapeJson
	});

	var Assert = ( assert$1 && assert ) || assert$1;

	var Crypto = ( empty$1 && empty ) || empty$1;

	var Path = ( path$1 && path ) || path$1;

	var Util = ( util$1 && util ) || util$1;

	var Escape = ( _escape$1 && _escape ) || _escape$1;

	var lib = createCommonjsModule(function (module, exports) {
	const internals = {};
	exports.clone = function (obj, seen) {
	    if (typeof obj !== 'object' ||
	        obj === null) {
	        return obj;
	    }
	    seen = seen || new Map();
	    const lookup = seen.get(obj);
	    if (lookup) {
	        return lookup;
	    }
	    let newObj;
	    let cloneDeep = false;
	    if (!Array.isArray(obj)) {
	        if (Buffer.isBuffer(obj)) {
	            newObj = Buffer.from(obj);
	        }
	        else if (obj instanceof Date) {
	            newObj = new Date(obj.getTime());
	        }
	        else if (obj instanceof RegExp) {
	            newObj = new RegExp(obj);
	        }
	        else {
	            const proto = Object.getPrototypeOf(obj);
	            if (proto &&
	                proto.isImmutable) {
	                newObj = obj;
	            }
	            else {
	                newObj = Object.create(proto);
	                cloneDeep = true;
	            }
	        }
	    }
	    else {
	        newObj = [];
	        cloneDeep = true;
	    }
	    seen.set(obj, newObj);
	    if (cloneDeep) {
	        const keys = Object.getOwnPropertyNames(obj);
	        for (let i = 0; i < keys.length; ++i) {
	            const key = keys[i];
	            const descriptor = Object.getOwnPropertyDescriptor(obj, key);
	            if (descriptor &&
	                (descriptor.get ||
	                    descriptor.set)) {
	                Object.defineProperty(newObj, key, descriptor);
	            }
	            else {
	                newObj[key] = exports.clone(obj[key], seen);
	            }
	        }
	    }
	    return newObj;
	};
	exports.merge = function (target, source, isNullOverride             , isMergeArrays             ) {
	    exports.assert(target && typeof target === 'object', 'Invalid target value: must be an object');
	    exports.assert(source === null || source === undefined || typeof source === 'object', 'Invalid source value: must be null, undefined, or an object');
	    if (!source) {
	        return target;
	    }
	    if (Array.isArray(source)) {
	        exports.assert(Array.isArray(target), 'Cannot merge array onto an object');
	        if (isMergeArrays === false) {
	            target.length = 0;
	        }
	        for (let i = 0; i < source.length; ++i) {
	            target.push(exports.clone(source[i]));
	        }
	        return target;
	    }
	    const keys = Object.keys(source);
	    for (let i = 0; i < keys.length; ++i) {
	        const key = keys[i];
	        if (key === '__proto__') {
	            continue;
	        }
	        const value = source[key];
	        if (value &&
	            typeof value === 'object') {
	            if (!target[key] ||
	                typeof target[key] !== 'object' ||
	                (Array.isArray(target[key]) !== Array.isArray(value)) ||
	                value instanceof Date ||
	                Buffer.isBuffer(value) ||
	                value instanceof RegExp) {
	                target[key] = exports.clone(value);
	            }
	            else {
	                exports.merge(target[key], value, isNullOverride, isMergeArrays);
	            }
	        }
	        else {
	            if (value !== null &&
	                value !== undefined) {
	                target[key] = value;
	            }
	            else if (isNullOverride !== false) {
	                target[key] = value;
	            }
	        }
	    }
	    return target;
	};
	exports.applyToDefaults = function (defaults, options, isNullOverride) {
	    exports.assert(defaults && typeof defaults === 'object', 'Invalid defaults value: must be an object');
	    exports.assert(!options || options === true || typeof options === 'object', 'Invalid options value: must be true, falsy or an object');
	    if (!options) {
	        return null;
	    }
	    const copy = exports.clone(defaults);
	    if (options === true) {
	        return copy;
	    }
	    return exports.merge(copy, options, isNullOverride === true, false);
	};
	exports.cloneWithShallow = function (source, keys) {
	    if (!source ||
	        typeof source !== 'object') {
	        return source;
	    }
	    const storage = internals.store(source, keys);
	    const copy = exports.clone(source);
	    internals.restore(copy, source, storage);
	    return copy;
	};
	internals.store = function (source, keys) {
	    const storage = {};
	    for (let i = 0; i < keys.length; ++i) {
	        const key = keys[i];
	        const value = exports.reach(source, key);
	        if (value !== undefined) {
	            storage[key] = value;
	            internals.reachSet(source, key, undefined);
	        }
	    }
	    return storage;
	};
	internals.restore = function (copy, source, storage) {
	    const keys = Object.keys(storage);
	    for (let i = 0; i < keys.length; ++i) {
	        const key = keys[i];
	        internals.reachSet(copy, key, storage[key]);
	        internals.reachSet(source, key, storage[key]);
	    }
	};
	internals.reachSet = function (obj, key, value) {
	    const path = key.split('.');
	    let ref = obj;
	    for (let i = 0; i < path.length; ++i) {
	        const segment = path[i];
	        if (i + 1 === path.length) {
	            ref[segment] = value;
	        }
	        ref = ref[segment];
	    }
	};
	exports.applyToDefaultsWithShallow = function (defaults, options, keys) {
	    exports.assert(defaults && typeof defaults === 'object', 'Invalid defaults value: must be an object');
	    exports.assert(!options || options === true || typeof options === 'object', 'Invalid options value: must be true, falsy or an object');
	    exports.assert(keys && Array.isArray(keys), 'Invalid keys');
	    if (!options) {
	        return null;
	    }
	    const copy = exports.cloneWithShallow(defaults, keys);
	    if (options === true) {
	        return copy;
	    }
	    const storage = internals.store(options, keys);
	    exports.merge(copy, options, false, false);
	    internals.restore(copy, options, storage);
	    return copy;
	};
	exports.deepEqual = function (obj, ref, options, seen) {
	    options = options || { prototype: true };
	    const type = typeof obj;
	    if (type !== typeof ref) {
	        return false;
	    }
	    if (type !== 'object' ||
	        obj === null ||
	        ref === null) {
	        if (obj === ref) {
	            return obj !== 0 || 1 / obj === 1 / ref;
	        }
	        return obj !== obj && ref !== ref;
	    }
	    seen = seen || [];
	    if (seen.indexOf(obj) !== -1) {
	        return true;
	    }
	    seen.push(obj);
	    if (Array.isArray(obj)) {
	        if (!Array.isArray(ref)) {
	            return false;
	        }
	        if (!options.part && obj.length !== ref.length) {
	            return false;
	        }
	        for (let i = 0; i < obj.length; ++i) {
	            if (options.part) {
	                let found = false;
	                for (let j = 0; j < ref.length; ++j) {
	                    if (exports.deepEqual(obj[i], ref[j], options)) {
	                        found = true;
	                        break;
	                    }
	                }
	                return found;
	            }
	            if (!exports.deepEqual(obj[i], ref[i], options)) {
	                return false;
	            }
	        }
	        return true;
	    }
	    if (Buffer.isBuffer(obj)) {
	        if (!Buffer.isBuffer(ref)) {
	            return false;
	        }
	        if (obj.length !== ref.length) {
	            return false;
	        }
	        for (let i = 0; i < obj.length; ++i) {
	            if (obj[i] !== ref[i]) {
	                return false;
	            }
	        }
	        return true;
	    }
	    if (obj instanceof Date) {
	        return (ref instanceof Date && obj.getTime() === ref.getTime());
	    }
	    if (obj instanceof RegExp) {
	        return (ref instanceof RegExp && obj.toString() === ref.toString());
	    }
	    if (options.prototype) {
	        if (Object.getPrototypeOf(obj) !== Object.getPrototypeOf(ref)) {
	            return false;
	        }
	    }
	    const keys = Object.getOwnPropertyNames(obj);
	    if (!options.part && keys.length !== Object.getOwnPropertyNames(ref).length) {
	        return false;
	    }
	    for (let i = 0; i < keys.length; ++i) {
	        const key = keys[i];
	        const descriptor = Object.getOwnPropertyDescriptor(obj, key);
	        if (descriptor.get) {
	            if (!exports.deepEqual(descriptor, Object.getOwnPropertyDescriptor(ref, key), options, seen)) {
	                return false;
	            }
	        }
	        else if (!exports.deepEqual(obj[key], ref[key], options, seen)) {
	            return false;
	        }
	    }
	    return true;
	};
	exports.unique = (array, key) => {
	    let result;
	    if (key) {
	        result = [];
	        const index = new Set();
	        array.forEach((item) => {
	            const identifier = item[key];
	            if (!index.has(identifier)) {
	                index.add(identifier);
	                result.push(item);
	            }
	        });
	    }
	    else {
	        result = Array.from(new Set(array));
	    }
	    return result;
	};
	exports.mapToObject = function (array, key) {
	    if (!array) {
	        return null;
	    }
	    const obj = {};
	    for (let i = 0; i < array.length; ++i) {
	        if (key) {
	            if (array[i][key]) {
	                obj[array[i][key]] = true;
	            }
	        }
	        else {
	            obj[array[i]] = true;
	        }
	    }
	    return obj;
	};
	exports.intersect = function (array1, array2, justFirst) {
	    if (!array1 || !array2) {
	        return [];
	    }
	    const common = [];
	    const hash = (Array.isArray(array1) ? exports.mapToObject(array1) : array1);
	    const found = {};
	    for (let i = 0; i < array2.length; ++i) {
	        if (hash[array2[i]] && !found[array2[i]]) {
	            if (justFirst) {
	                return array2[i];
	            }
	            common.push(array2[i]);
	            found[array2[i]] = true;
	        }
	    }
	    return (justFirst ? null : common);
	};
	exports.contain = function (ref, values, options) {
	    let valuePairs = null;
	    if (typeof ref === 'object' &&
	        typeof values === 'object' &&
	        !Array.isArray(ref) &&
	        !Array.isArray(values)) {
	        valuePairs = values;
	        values = Object.keys(values);
	    }
	    else {
	        values = [].concat(values);
	    }
	    options = options || {};
	    exports.assert(typeof ref === 'string' || typeof ref === 'object', 'Reference must be string or an object');
	    exports.assert(values.length, 'Values array cannot be empty');
	    let compare;
	    let compareFlags;
	    if (options.deep) {
	        compare = exports.deepEqual;
	        const hasOnly = options.hasOwnProperty('only');
	        const hasPart = options.hasOwnProperty('part');
	        compareFlags = {
	            prototype: hasOnly ? options.only : hasPart ? !options.part : false,
	            part: hasOnly ? !options.only : hasPart ? options.part : true
	        };
	    }
	    else {
	        compare = (a, b) => a === b;
	    }
	    let misses = false;
	    const matches = new Array(values.length);
	    for (let i = 0; i < matches.length; ++i) {
	        matches[i] = 0;
	    }
	    if (typeof ref === 'string') {
	        let pattern = '(';
	        for (let i = 0; i < values.length; ++i) {
	            const value = values[i];
	            exports.assert(typeof value === 'string', 'Cannot compare string reference to non-string value');
	            pattern += (i ? '|' : '') + exports.escapeRegex(value);
	        }
	        const regex = new RegExp(pattern + ')', 'g');
	        const leftovers = ref.replace(regex, ($0, $1) => {
	            const index = values.indexOf($1);
	            ++matches[index];
	            return '';
	        });
	        misses = !!leftovers;
	    }
	    else if (Array.isArray(ref)) {
	        for (let i = 0; i < ref.length; ++i) {
	            let matched = false;
	            for (let j = 0; j < values.length && matched === false; ++j) {
	                matched = compare(values[j], ref[i], compareFlags) && j;
	            }
	            if (matched !== false) {
	                ++matches[matched];
	            }
	            else {
	                misses = true;
	            }
	        }
	    }
	    else {
	        const keys = Object.getOwnPropertyNames(ref);
	        for (let i = 0; i < keys.length; ++i) {
	            const key = keys[i];
	            const pos = values.indexOf(key);
	            if (pos !== -1) {
	                if (valuePairs &&
	                    !compare(valuePairs[key], ref[key], compareFlags)) {
	                    return false;
	                }
	                ++matches[pos];
	            }
	            else {
	                misses = true;
	            }
	        }
	    }
	    let result = false;
	    for (let i = 0; i < matches.length; ++i) {
	        result = result || !!matches[i];
	        if ((options.once && matches[i] > 1) ||
	            (!options.part && !matches[i])) {
	            return false;
	        }
	    }
	    if (options.only &&
	        misses) {
	        return false;
	    }
	    return result;
	};
	exports.flatten = function (array, target) {
	    const result = target || [];
	    for (let i = 0; i < array.length; ++i) {
	        if (Array.isArray(array[i])) {
	            exports.flatten(array[i], result);
	        }
	        else {
	            result.push(array[i]);
	        }
	    }
	    return result;
	};
	exports.reach = function (obj, chain, options) {
	    if (chain === false ||
	        chain === null ||
	        typeof chain === 'undefined') {
	        return obj;
	    }
	    options = options || {};
	    if (typeof options === 'string') {
	        options = { separator: options };
	    }
	    const path = chain.split(options.separator || '.');
	    let ref = obj;
	    for (let i = 0; i < path.length; ++i) {
	        let key = path[i];
	        if (key[0] === '-' && Array.isArray(ref)) {
	            key = key.slice(1, key.length);
	            key = ref.length - key;
	        }
	        if (!ref ||
	            !((typeof ref === 'object' || typeof ref === 'function') && key in ref) ||
	            (typeof ref !== 'object' && options.functions === false)) {
	            exports.assert(!options.strict || i + 1 === path.length, 'Missing segment', key, 'in reach path ', chain);
	            exports.assert(typeof ref === 'object' || options.functions === true || typeof ref !== 'function', 'Invalid segment', key, 'in reach path ', chain);
	            ref = options.default;
	            break;
	        }
	        ref = ref[key];
	    }
	    return ref;
	};
	exports.reachTemplate = function (obj, template, options) {
	    return template.replace(/{([^}]+)}/g, ($0, chain) => {
	        const value = exports.reach(obj, chain, options);
	        return (value === undefined || value === null ? '' : value);
	    });
	};
	exports.formatStack = function (stack) {
	    const trace = [];
	    for (let i = 0; i < stack.length; ++i) {
	        const item = stack[i];
	        trace.push([item.getFileName(), item.getLineNumber(), item.getColumnNumber(), item.getFunctionName(), item.isConstructor()]);
	    }
	    return trace;
	};
	exports.formatTrace = function (trace) {
	    const display = [];
	    for (let i = 0; i < trace.length; ++i) {
	        const row = trace[i];
	        display.push((row[4] ? 'new ' : '') + row[3] + ' (' + row[0] + ':' + row[1] + ':' + row[2] + ')');
	    }
	    return display;
	};
	exports.callStack = function (slice) {
	    const v8 = Error.prepareStackTrace;
	    Error.prepareStackTrace = function (_, stack) {
	        return stack;
	    };
	    const capture = {};
	    Error.captureStackTrace(capture, this);
	    const stack = capture.stack;
	    Error.prepareStackTrace = v8;
	    const trace = exports.formatStack(stack);
	    return trace.slice(1 + slice);
	};
	exports.displayStack = function (slice) {
	    const trace = exports.callStack(slice === undefined ? 1 : slice + 1);
	    return exports.formatTrace(trace);
	};
	exports.abortThrow = false;
	exports.abort = function (message, hideStack) {
	    if (process.env.NODE_ENV === 'test' || exports.abortThrow === true) {
	        throw new Error(message || 'Unknown error');
	    }
	    let stack = '';
	    if (!hideStack) {
	        stack = exports.displayStack(1).join('\n\t');
	    }
	    console.log('ABORT: ' + message + '\n\t' + stack);
	    process.exit(1);
	};
	exports.assert = function (condition, ...args) {
	    if (condition) {
	        return;
	    }
	    if (args.length === 1 && args[0] instanceof Error) {
	        throw args[0];
	    }
	    const msgs = args
	        .filter((arg) => arg !== '')
	        .map((arg) => {
	            return typeof arg === 'string' ? arg : arg instanceof Error ? arg.message : exports.stringify(arg);
	        });
	    throw new Assert.AssertionError({
	        message: msgs.join(' ') || 'Unknown error',
	        actual: false,
	        expected: true,
	        operator: '==',
	        stackStartFunction: exports.assert
	    });
	};
	exports.Bench = function () {
	    this.ts = 0;
	    this.reset();
	};
	exports.Bench.prototype.reset = function () {
	    this.ts = exports.Bench.now();
	};
	exports.Bench.prototype.elapsed = function () {
	    return exports.Bench.now() - this.ts;
	};
	exports.Bench.now = function () {
	    const ts = process.hrtime();
	    return (ts[0] * 1e3) + (ts[1] / 1e6);
	};
	exports.escapeRegex = function (string) {
	    return string.replace(/[\^\$\.\*\+\-\?\=\!\:\|\\\/\(\)\[\]\{\}\,]/g, '\\$&');
	};
	exports.base64urlEncode = function (value, encoding) {
	    exports.assert(typeof value === 'string' || Buffer.isBuffer(value), 'value must be string or buffer');
	    const buf = (Buffer.isBuffer(value) ? value : Buffer.from(value, encoding || 'binary'));
	    return buf.toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/\=/g, '');
	};
	exports.base64urlDecode = function (value, encoding) {
	    if (typeof value !== 'string') {
	        throw new Error('Value not a string');
	    }
	    if (!/^[\w\-]*$/.test(value)) {
	        throw new Error('Invalid character');
	    }
	    const buf = Buffer.from(value, 'base64');
	    return (encoding === 'buffer' ? buf : buf.toString(encoding || 'binary'));
	};
	exports.escapeHeaderAttribute = function (attribute) {
	    exports.assert(/^[ \w\!#\$%&'\(\)\*\+,\-\.\/\:;<\=>\?@\[\]\^`\{\|\}~\"\\]*$/.test(attribute), 'Bad attribute value (' + attribute + ')');
	    return attribute.replace(/\\/g, '\\\\').replace(/\"/g, '\\"');
	};
	exports.escapeHtml = function (string) {
	    return Escape.escapeHtml(string);
	};
	exports.escapeJavaScript = function (string) {
	    return Escape.escapeJavaScript(string);
	};
	exports.escapeJson = function (string) {
	    return Escape.escapeJson(string);
	};
	exports.once = function (method) {
	    if (method._hoekOnce) {
	        return method;
	    }
	    let once = false;
	    const wrapped = function (...args) {
	        if (!once) {
	            once = true;
	            method.apply(null, args);
	        }
	    };
	    wrapped._hoekOnce = true;
	    return wrapped;
	};
	exports.isInteger = Number.isSafeInteger;
	exports.ignore = function () { };
	exports.inherits = Util.inherits;
	exports.format = Util.format;
	exports.transform = function (source, transform, options) {
	    exports.assert(source === null || source === undefined || typeof source === 'object' || Array.isArray(source), 'Invalid source object: must be null, undefined, an object, or an array');
	    const separator = (typeof options === 'object' && options !== null) ? (options.separator || '.') : '.';
	    if (Array.isArray(source)) {
	        const results = [];
	        for (let i = 0; i < source.length; ++i) {
	            results.push(exports.transform(source[i], transform, options));
	        }
	        return results;
	    }
	    const result = {};
	    const keys = Object.keys(transform);
	    for (let i = 0; i < keys.length; ++i) {
	        const key = keys[i];
	        const path = key.split(separator);
	        const sourcePath = transform[key];
	        exports.assert(typeof sourcePath === 'string', 'All mappings must be "." delineated strings');
	        let segment;
	        let res = result;
	        while (path.length > 1) {
	            segment = path.shift();
	            if (!res[segment]) {
	                res[segment] = {};
	            }
	            res = res[segment];
	        }
	        segment = path.shift();
	        res[segment] = exports.reach(source, sourcePath, options);
	    }
	    return result;
	};
	exports.uniqueFilename = function (path, extension) {
	    if (extension) {
	        extension = extension[0] !== '.' ? '.' + extension : extension;
	    }
	    else {
	        extension = '';
	    }
	    path = Path.resolve(path);
	    const name = [Date.now(), process.pid, Crypto.randomBytes(8).toString('hex')].join('-') + extension;
	    return Path.join(path, name);
	};
	exports.stringify = function (...args) {
	    try {
	        return JSON.stringify.apply(null, args);
	    }
	    catch (err) {
	        return '[Cannot display object: ' + err.message + ']';
	    }
	};
	exports.shallow = function (source) {
	    const target = {};
	    const keys = Object.keys(source);
	    for (let i = 0; i < keys.length; ++i) {
	        const key = keys[i];
	        target[key] = source[key];
	    }
	    return target;
	};
	exports.wait = function (timeout) {
	    return new Promise((resolve) => setTimeout(resolve, timeout));
	};
	exports.block = function () {
	    return new Promise(exports.ignore);
	};
	});
	var lib_1 = lib.clone;
	var lib_2 = lib.merge;
	var lib_3 = lib.applyToDefaults;
	var lib_4 = lib.cloneWithShallow;
	var lib_5 = lib.applyToDefaultsWithShallow;
	var lib_6 = lib.deepEqual;
	var lib_7 = lib.unique;
	var lib_8 = lib.mapToObject;
	var lib_9 = lib.intersect;
	var lib_10 = lib.contain;
	var lib_11 = lib.flatten;
	var lib_12 = lib.reach;
	var lib_13 = lib.reachTemplate;
	var lib_14 = lib.formatStack;
	var lib_15 = lib.formatTrace;
	var lib_16 = lib.callStack;
	var lib_17 = lib.displayStack;
	var lib_18 = lib.abortThrow;
	var lib_19 = lib.abort;
	var lib_20 = lib.assert;
	var lib_21 = lib.Bench;
	var lib_22 = lib.escapeRegex;
	var lib_23 = lib.base64urlEncode;
	var lib_24 = lib.base64urlDecode;
	var lib_25 = lib.escapeHeaderAttribute;
	var lib_26 = lib.escapeHtml;
	var lib_27 = lib.escapeJavaScript;
	var lib_28 = lib.escapeJson;
	var lib_29 = lib.once;
	var lib_30 = lib.isInteger;
	var lib_31 = lib.ignore;
	var lib_32 = lib.inherits;
	var lib_33 = lib.format;
	var lib_34 = lib.transform;
	var lib_35 = lib.uniqueFilename;
	var lib_36 = lib.stringify;
	var lib_37 = lib.shallow;
	var lib_38 = lib.wait;
	var lib_39 = lib.block;

	var lib$1 = /*#__PURE__*/Object.freeze({
		default: lib,
		__moduleExports: lib,
		clone: lib_1,
		merge: lib_2,
		applyToDefaults: lib_3,
		cloneWithShallow: lib_4,
		applyToDefaultsWithShallow: lib_5,
		deepEqual: lib_6,
		unique: lib_7,
		mapToObject: lib_8,
		intersect: lib_9,
		contain: lib_10,
		flatten: lib_11,
		reach: lib_12,
		reachTemplate: lib_13,
		formatStack: lib_14,
		formatTrace: lib_15,
		callStack: lib_16,
		displayStack: lib_17,
		abortThrow: lib_18,
		abort: lib_19,
		assert: lib_20,
		Bench: lib_21,
		escapeRegex: lib_22,
		base64urlEncode: lib_23,
		base64urlDecode: lib_24,
		escapeHeaderAttribute: lib_25,
		escapeHtml: lib_26,
		escapeJavaScript: lib_27,
		escapeJson: lib_28,
		once: lib_29,
		isInteger: lib_30,
		ignore: lib_31,
		inherits: lib_32,
		format: lib_33,
		transform: lib_34,
		uniqueFilename: lib_35,
		stringify: lib_36,
		shallow: lib_37,
		wait: lib_38,
		block: lib_39
	});

	var Joi = ( joiBrowser$2 && joiBrowser$1 ) || joiBrowser$2;

	var require$$0 = ( lib$1 && lib ) || lib$1;

	const {assert: assert$2} = require$$0;
	const schemaSchema = Joi.alternatives(Joi.object().unknown(true), Joi.string()).required();
	const optionsSchema = Joi.object({
	  subSchemas: Joi.object().unknown(true).allow(null),
	  types: Joi.object().unknown(true).allow(null),
	  refineType: Joi.func().allow(null),
	  strictMode: Joi.boolean().default(false)
	});
	function enjoi(schema, options = {}) {
	  const validateSchema = Joi.validate(schema, schemaSchema);
	  assert$2(!validateSchema.error, validateSchema.error);
	  const validateOptions = Joi.validate(options, optionsSchema);
	  assert$2(!validateOptions.error, validateOptions.error);
	  const { subSchemas, types, refineType, strictMode } = validateOptions.value;
	  function resolve(current) {
	    if (current.type) {
	      return resolvetype(current);
	    }
	    if (current.anyOf) {
	      return resolveAnyOf(current);
	    }
	    if (current.allOf) {
	      return resolveAllOf(current);
	    }
	    if (current.oneOf) {
	      return resolveOneOf(current);
	    }
	    if (current.not) {
	      return resolveNot(current);
	    }
	    if (current.$ref) {
	      return resolve(resolveref(current.$ref));
	    }
	    if (current.enum) {
	      return Joi.any().valid(current.enum);
	    }
	    if (typeof current === 'string') {
	      return resolvetype({ type: current });
	    }
	    console.warn('WARNING: schema missing a \'type\' or \'$ref\' or \'enum\': %s', JSON.stringify(current));
	    return Joi.any();
	  }
	  function resolveAsArray(value) {
	    if (lodash.isArray(value)) {
	      return value.map(function (v) { return resolve(v); });
	    }
	    return [resolve(value)];
	  }
	  function resolveref(value) {
	    let refschema;
	    const id = value.substr(0, value.indexOf('#') + 1);
	    const path = value.substr(value.indexOf('#') + 1);
	    if (id && subSchemas) {
	      refschema = subSchemas[id] || subSchemas[id.substr(0, id.length - 1)];
	    }
	    if (!refschema) {
	      refschema = schema;
	    }
	    assert$2(refschema, 'Can not find schema reference: ' + value + '.');
	    let fragment = refschema;
	    const paths = path.split('/');
	    for (let i = 1; i < paths.length && fragment; i++) {
	      fragment = typeof fragment === 'object' && fragment[paths[i]];
	    }
	    return fragment;
	  }
	  function resolvetype(current) {
	    let joischema;
	    const typeDefinitionMap = {
	      description: 'description',
	      title: 'label',
	      default: 'default'
	    };
	    function joitype(type, format) {
	      let joischema;
	      if (refineType) {
	        type = refineType(type, format);
	      }
	      switch (type) {
	        case 'array':
	          joischema = array(current);
	          break;
	        case 'boolean':
	          joischema = Joi.boolean();
	          break;
	        case 'integer':
	        case 'number':
	          joischema = number(current);
	          break;
	        case 'object':
	          joischema = object(current);
	          break;
	        case 'string':
	          joischema = string(current);
	          break;
	        case 'null':
	          joischema = Joi.any().valid(null);
	          break;
	        default:
	          if (types) {
	            joischema = types[type];
	          }
	      }
	      assert$2(joischema, 'Could not resolve type: ' + current.type + '.');
	      return joischema.strict(strictMode);
	    }
	    if (lodash.isArray(current.type)) {
	      const schemas = [];
	      for (let i = 0; i < current.type.length; i++) {
	        schemas.push(joitype(current.type[i], current.format));
	      }
	      joischema = Joi.alternatives(schemas);
	    }
	    else {
	      joischema = joitype(current.type, current.format);
	    }
	    Object.keys(typeDefinitionMap).forEach(function (key) {
	      if (current[key]) {
	        joischema = joischema[typeDefinitionMap[key]](current[key]);
	      }
	    });
	    return joischema;
	  }
	  function resolveAnyOf(current) {
	    assert$2(lodash.isArray(current.anyOf), 'Expected anyOf to be an array.');
	    return Joi.alternatives().try(current.anyOf.map(function (schema) {
	      return resolve(schema);
	    }));
	  }
	  function resolveAllOf(current) {
	    assert$2(lodash.isArray(current.allOf), 'Expected allOf to be an array.');
	    const type = getSchemaType(current.allOf[0]);
	    current.allOf.map(function (schema) {
	      const _type = getSchemaType(schema);
	      assert$2((_type === 'array' || _type === 'object') && type === _type,
	        'Expected allOf item to be an array or object.');
	    });
	    if (type === 'object') {
	      return resolve(mergeObject(current.allOf));
	    }
	    else {
	      return resolve(mergeArray(current.allOf));
	    }
	  }
	  function resolveOneOf(current) {
	    assert$2(lodash.isArray(current.oneOf), 'Expected allOf to be an array.');
	    return Joi.alternatives().try(current.oneOf.map(function (schema) {
	      return resolve(schema);
	    })).required();
	  }
	  function resolveNot(current) {
	    assert$2(lodash.isArray(current.not), 'Expected Not to be an array.');
	    return Joi.alternatives().when(Joi.alternatives().try(current.not.map(function (schema) {
	      return resolve(schema);
	    })), {then: Joi.any().forbidden(), otherwise: Joi.any()});
	  }
	  function resolveproperties(current) {
	    const schemas = {};
	    if (!lodash.isObject(current.properties)) {
	      return;
	    }
	    Object.keys(current.properties).forEach(function (key) {
	      const property = current.properties[key];
	      let joischema = resolve(property);
	      if (current.required && !!~current.required.indexOf(key)) {
	        joischema = joischema.required();
	      }
	      schemas[key] = joischema;
	    });
	    return schemas;
	  }
	  function object(current) {
	    let joischema = Joi.object(resolveproperties(current));
	    if (current.additionalProperties === true) {
	      joischema = joischema.unknown(true);
	    }
	    if (lodash.isObject(current.additionalProperties)) {
	      joischema = joischema.pattern(/^/, resolve(current.additionalProperties));
	    }
	    lodash.isNumber(current.minProperties) && (joischema = joischema.min(current.minProperties));
	    lodash.isNumber(current.maxProperties) && (joischema = joischema.max(current.maxProperties));
	    return joischema;
	  }
	  function array(current) {
	    let joischema = Joi.array();
	    let items;
	    if (current.items) {
	      items = resolveAsArray(current.items);
	      joischema = joischema.items(items);
	    }
	    else if (current.ordered) {
	      items = resolveAsArray(current.ordered);
	      joischema = joischema.ordered(items);
	    }
	    if (items && current.additionalItems === false) {
	      joischema = joischema.max(items.length);
	    }
	    lodash.isNumber(current.minItems) && (joischema = joischema.min(current.minItems));
	    lodash.isNumber(current.maxItems) && (joischema = joischema.max(current.maxItems));
	    if (current.uniqueItems) {
	      joischema = joischema.unique();
	    }
	    return joischema;
	  }
	  function number(current) {
	    let joischema = Joi.number();
	    if (current.type === 'integer') {
	      joischema = joischema.integer();
	    }
	    lodash.isNumber(current.minimum) && (joischema = joischema.min(current.minimum));
	    lodash.isNumber(current.maximum) && (joischema = joischema.max(current.maximum));
	    lodash.isNumber(current.exclusiveMinimum) && (joischema = joischema.greater(current.exclusiveMinimum));
	    lodash.isNumber(current.exclusiveMaximum) && (joischema = joischema.less(current.exclusiveMaximum));
	    lodash.isNumber(current.multipleOf) && current.multipleOf !== 0 && (joischema = joischema.multiple(current.multipleOf));
	    return joischema;
	  }
	  function string(current) {
	    let joischema = Joi.string();
	    if (current.enum) {
	      return Joi.any().valid(current.enum);
	    }
	    switch (current.format) {
	      case 'date':
	      case 'date-time':
	        return date(current);
	      case 'binary':
	        return binary(current);
	      case 'email':
	        joischema = joischema.email();
	        break;
	      case 'hostname':
	        joischema = joischema.hostname();
	        break;
	      case 'ipv4':
	        joischema = joischema.ip(['ipv4']);
	        break;
	      case 'ipv6':
	        joischema = joischema.ip(['ipv6']);
	        break;
	      case 'uri':
	        joischema = joischema.uri();
	        break;
	      case 'byte':
	        joischema = joischema.base64();
	        break;
	    }
	    return regularString(current, joischema);
	  }
	  function regularString(current, joischema) {
	    current.pattern && (joischema = joischema.regex(new RegExp(current.pattern)));
	    if (lodash.isUndefined(current.minLength)) {
	      current.minLength = 0;
	    }
	    if (lodash.isNumber(current.minLength)) {
	      if (current.minLength === 0) {
	        joischema = joischema.allow('');
	      }
	      joischema = joischema.min(current.minLength);
	    }
	    lodash.isNumber(current.maxLength) && (joischema = joischema.max(current.maxLength));
	    return joischema;
	  }
	  function date(current) {
	    let joischema = Joi.date();
	    current.minimum && (joischema = joischema.min(current.minimum));
	    current.maximum && (joischema = joischema.max(current.maximum));
	    return joischema;
	  }
	  function binary(current) {
	    let joischema = Joi.binary();
	    current.minLength && (joischema = joischema.min(current.minLength));
	    current.maxLength && (joischema = joischema.max(current.maxLength));
	    return joischema;
	  }
	  function getSchemaType(current) {
	    if (current.type) {
	      return current.type;
	    }
	    if (current.$ref) {
	      return resolveref(current.$ref).type;
	    }
	  }
	  function mergeArray(current) {
	    const result = {type: 'array'};
	    let items = [];
	    let ordered = [];
	    for (let item of current) {
	      if (item.$ref) {
	        item = resolveref(item.$ref);
	      }
	      if (item.items instanceof Array) {
	        items = items.concat(item.items);
	        ordered = ordered.concat(item.ordered || []);
	      } else {
	        items = items.concat([item.items]);
	      }
	    }
	    result.items = items;
	    result.ordered = ordered.length ? ordered : undefined;
	    return result;
	  }
	  function mergeObject(current) {
	    const result = {type: 'object', properties: {}};
	    const properties = result.properties;
	    let required = [];
	    for (let item of current) {
	      if (item.$ref) {
	        item = resolveref(item.$ref);
	      }
	      Object.assign(properties, item.properties);
	      required = required.concat(item.required || []);
	    }
	    result.required = required.length ? required : undefined;
	    return result;
	  }
	  return resolve(schema);
	}
	var enjoi_1 = enjoi;

	var _defaults = Symbol('defaults');
	var _schema = Symbol('schema');
	var _views = Symbol('views');
	var Model = function (_Serializable) {
	  inherits(Model, _Serializable);
	  function Model() {
	    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
	      defaults: {
	        id: uuid_1.v4(),
	        modified: unix(),
	        created: unix()
	      },
	      schema: null,
	      schemaOptions: null,
	      views: null
	    };
	    classCallCheck(this, Model);
	    var _this = possibleConstructorReturn(this, (Model.__proto__ || Object.getPrototypeOf(Model)).call(this));
	    _this[_views] = {};
	    _this[_defaults] = options.defaults;
	    if (options.schema) {
	      _this[_schema] = enjoi_1(Object.assign({}, {
	        type: 'object',
	        properties: options.schema,
	        strictMode: true
	      }), Object.assign({}, options.schemaOptions));
	    }
	    if (options.views) {
	      Object.keys(options.views).forEach(function (name) {
	        var view = options.views[name];
	        if (!view.blacklist && !view.whitelist) {
	          throw new Error('A view is required to have a whitelist or blacklist Array of strings');
	        }
	        if (view.blacklist && view.whitelist) {
	          throw new Error('A view only supports either a blacklist or whitelist');
	        }
	        if (view.blacklist) {
	          _this.addView(name, view.blacklist, false);
	        }
	        if (view.whitelist) {
	          _this.addView(name, view.whitelist, true);
	        }
	      });
	    }
	    _this.set(data);
	    return _this;
	  }
	  createClass(Model, [{
	    key: 'set',
	    value: function set$$1(data) {
	      if (this[_schema]) {
	        var result = this[_schema].validate(data);
	        if (result.error) {
	          throw new Error(JSON.stringify(data, null, 2) + ' does not match the schema');
	        }
	        data = result.value;
	      }
	      if (this[_defaults]) {
	        Object.assign(this, this[_defaults], data);
	      }
	      Object.assign(this, data);
	    }
	  }, {
	    key: 'addView',
	    value: function addView(name, fields) {
	      var isWhitelist = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
	      if (this[_views][name]) {
	        throw new Error('View already exists with the name ' + name);
	      }
	      this[_views][name] = {
	        whitelist: isWhitelist,
	        fields: fields
	      };
	    }
	  }, {
	    key: 'getView',
	    value: function getView(name) {
	      if (!this[_views][name]) {
	        return null;
	      }
	      var view = this[_views][name];
	      if (view.whitelist) {
	        return lodash.pick(this, view.fields);
	      } else {
	        return lodash.omit(this, view.fields);
	      }
	    }
	  }]);
	  return Model;
	}(Serializable);

	function ErrorFactory(message) {
	  var ErrorClass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Error;
	  if (typeof message === 'function') {
	    ErrorClass = message;
	  }
	  return function (_ErrorClass) {
	    inherits(CustomError, _ErrorClass);
	    function CustomError() {
	      var _ref;
	      classCallCheck(this, CustomError);
	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }
	      if (typeof message === 'string') {
	        args.unshift(message);
	      }
	      var _this = possibleConstructorReturn(this, (_ref = CustomError.__proto__ || Object.getPrototypeOf(CustomError)).call.apply(_ref, [this].concat(args)));
	      if (typeof ErrorClass.captureStackTrace === 'function') {
	        ErrorClass.captureStackTrace(_this, CustomError);
	      }
	      return _this;
	    }
	    return CustomError;
	  }(ErrorClass);
	}

	var UnsupportedErrorConstructor = function (_Error) {
	  inherits(UnsupportedErrorConstructor, _Error);
	  function UnsupportedErrorConstructor(value) {
	    classCallCheck(this, UnsupportedErrorConstructor);
	    return possibleConstructorReturn(this, (UnsupportedErrorConstructor.__proto__ || Object.getPrototypeOf(UnsupportedErrorConstructor)).call(this, 'Unsupported value for enum value:  ' + value));
	  }
	  return UnsupportedErrorConstructor;
	}(Error);
	var MissingIndexErrorConstructor = function (_Error2) {
	  inherits(MissingIndexErrorConstructor, _Error2);
	  function MissingIndexErrorConstructor(model, indexBy) {
	    classCallCheck(this, MissingIndexErrorConstructor);
	    return possibleConstructorReturn(this, (MissingIndexErrorConstructor.__proto__ || Object.getPrototypeOf(MissingIndexErrorConstructor)).call(this, 'Model ' + model.toJSON() + ' is missing index ' + indexBy));
	  }
	  return MissingIndexErrorConstructor;
	}(Error);
	var UnsupportedError = ErrorFactory(null, UnsupportedErrorConstructor);
	var MissingIndexError = ErrorFactory(null, MissingIndexErrorConstructor);

	var Collection = function (_Serializable) {
	  inherits(Collection, _Serializable);
	  function Collection(data, model) {
	    var indexBy = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'id';
	    classCallCheck(this, Collection);
	    var _this = possibleConstructorReturn(this, (Collection.__proto__ || Object.getPrototypeOf(Collection)).call(this));
	    if (!model || !(model.prototype instanceof Model)) {
	      throw new Error('A Collection requires a Model, and the Model must inherit from the Model Base Class.');
	    }
	    _this.index = {};
	    _this.indexBy = indexBy;
	    _this.Model = model;
	    if (data) {
	      _this.set(data);
	    }
	    return _this;
	  }
	  createClass(Collection, [{
	    key: 'set',
	    value: function set$$1(data) {
	      var _this2 = this;
	      this.clear();
	      switch (getType(data)) {
	        case 'array':
	          lodash.each(data, function (datum) {
	            return setFromObject.call(_this2, datum);
	          });
	          break;
	        case 'object':
	          setFromObject.call(this, data);
	          break;
	        default:
	          throw new TypeError('Expected data to be of type {Object|Array} and got ' + (typeof data === 'undefined' ? 'undefined' : _typeof(data)));
	      }
	      return this;
	    }
	  }, {
	    key: 'add',
	    value: function add(model) {
	      var convertedModel = convertToModel.call(this, model);
	      var key = convertedModel[this.indexBy];
	      if (this.index[key]) {
	        throw new Error('Model already exists in Collection index. Call update if you wish to update model');
	      }
	      this.index[key] = convertedModel;
	      return this;
	    }
	  }, {
	    key: 'remove',
	    value: function remove(modelId) {
	      var model = this.get(modelId);
	      if (!model) {
	        throw new Error('Model does not exist in Collection index. Call add().');
	      }
	      var convertedModel = convertToModel.call(this, model);
	      var key = convertedModel[this.indexBy];
	      delete this.index[key];
	      return this;
	    }
	  }, {
	    key: 'update',
	    value: function update(model) {
	      var convertedModel = convertToModel.call(this, model);
	      var key = convertedModel[this.indexBy];
	      if (!this.index[key]) {
	        throw new Error('Model to update does not exist in Collection index');
	      }
	      this.index[key] = convertedModel;
	      return this;
	    }
	  }, {
	    key: 'get',
	    value: function get$$1(id) {
	      if (id) {
	        return this.index[id];
	      }
	      return this.toArray();
	    }
	  }, {
	    key: 'contains',
	    value: function contains(id) {
	      var result = this.get(id);
	      if (id) {
	        return !!result;
	      }
	      return result.length > 0;
	    }
	  }, {
	    key: 'clear',
	    value: function clear() {
	      this.index = {};
	      return this;
	    }
	  }, {
	    key: 'toArray',
	    value: function toArray$$1() {
	      var _this3 = this;
	      return lodash.chain(this.index).values().map(function (item) {
	        return convertToModel.call(_this3, item).toObject();
	      }).value();
	    }
	  }, {
	    key: 'toJSON',
	    value: function toJSON$$1() {
	      return toJSON(this.toArray());
	    }
	  }, {
	    key: 'count',
	    get: function get$$1() {
	      return Object.keys(this.index).length;
	    }
	  }]);
	  return Collection;
	}(Serializable);
	function setFromObject(datum) {
	  var model = convertToModel.call(this, datum);
	  var key = model[this.indexBy];
	  if (!key) {
	    throw new MissingIndexError(model, this.indexBy);
	  }
	  this.index[key] = model;
	}
	function convertToModel(model) {
	  if (!(model instanceof this.Model)) {
	    model = new this.Model(model);
	  }
	  return model;
	}

	var Enum = function (_Serializable) {
	  inherits(Enum, _Serializable);
	  function Enum(values) {
	    classCallCheck(this, Enum);
	    var _this = possibleConstructorReturn(this, (Enum.__proto__ || Object.getPrototypeOf(Enum)).call(this));
	    set$1.call(_this, values);
	    Object.freeze(_this);
	    return _this;
	  }
	  return Enum;
	}(Serializable);
	function set$1(values) {
	  switch (getType(values)) {
	    case 'function':
	      throw new UnsupportedError(values.name);
	    case 'promise':
	      throw new UnsupportedError(typeof values === 'undefined' ? 'undefined' : _typeof(values));
	    case 'array':
	      setFromArray.call(this, values);
	      break;
	    case 'object':
	      setFromObject$1.call(this, values);
	      break;
	    case 'string':
	      if (values.indexOf(',') > -1) {
	        setFromArray.call(this, values.split(','));
	      } else {
	        setFromString.call(this, values);
	      }
	      break;
	    default:
	      throw new UnsupportedError(typeof values === 'undefined' ? 'undefined' : _typeof(values));
	  }
	}
	function setFromArray(values) {
	  var _iteratorNormalCompletion = true;
	  var _didIteratorError = false;
	  var _iteratorError = undefined;
	  try {
	    for (var _iterator = values[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	      var value = _step.value;
	      set$1.call(this, value);
	    }
	  } catch (err) {
	    _didIteratorError = true;
	    _iteratorError = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion && _iterator.return) {
	        _iterator.return();
	      }
	    } finally {
	      if (_didIteratorError) {
	        throw _iteratorError;
	      }
	    }
	  }
	}
	function setFromObject$1(values) {
	  var _iteratorNormalCompletion2 = true;
	  var _didIteratorError2 = false;
	  var _iteratorError2 = undefined;
	  try {
	    for (var _iterator2 = Object.keys(values)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	      var key = _step2.value;
	      Object.assign(this, defineProperty({}, key, values[key]));
	    }
	  } catch (err) {
	    _didIteratorError2 = true;
	    _iteratorError2 = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion2 && _iterator2.return) {
	        _iterator2.return();
	      }
	    } finally {
	      if (_didIteratorError2) {
	        throw _iteratorError2;
	      }
	    }
	  }
	}
	function setFromString(value) {
	  value = value.trim();
	  Object.assign(this, defineProperty({}, value, value));
	}

	exports.Model = Model;
	exports.Collection = Collection;
	exports.Enum = Enum;
	exports.Serializable = Serializable;
	exports.ErrorFactory = ErrorFactory;

	return exports;

}({}));
