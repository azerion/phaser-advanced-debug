/*!
 * phaser-advanced-debug - version 1.0.0 
 * Not so simple debug module for phaser
 *
 * Ale Bles <a.bles@orangegames.com>
 * Build at 20-04-2016
 * Released under MIT License 
 */

/*!

 handlebars v4.0.5

Copyright (C) 2011-2015 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

@license
*/
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Handlebars"] = factory();
	else
		root["Handlebars"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireWildcard = __webpack_require__(1)['default'];

	var _interopRequireDefault = __webpack_require__(2)['default'];

	exports.__esModule = true;

	var _handlebarsBase = __webpack_require__(3);

	var base = _interopRequireWildcard(_handlebarsBase);

	// Each of these augment the Handlebars object. No need to setup here.
	// (This is done to easily share code between commonjs and browse envs)

	var _handlebarsSafeString = __webpack_require__(17);

	var _handlebarsSafeString2 = _interopRequireDefault(_handlebarsSafeString);

	var _handlebarsException = __webpack_require__(5);

	var _handlebarsException2 = _interopRequireDefault(_handlebarsException);

	var _handlebarsUtils = __webpack_require__(4);

	var Utils = _interopRequireWildcard(_handlebarsUtils);

	var _handlebarsRuntime = __webpack_require__(18);

	var runtime = _interopRequireWildcard(_handlebarsRuntime);

	var _handlebarsNoConflict = __webpack_require__(19);

	var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict);

	// For compatibility and usage outside of module systems, make the Handlebars object a namespace
	function create() {
	  var hb = new base.HandlebarsEnvironment();

	  Utils.extend(hb, base);
	  hb.SafeString = _handlebarsSafeString2['default'];
	  hb.Exception = _handlebarsException2['default'];
	  hb.Utils = Utils;
	  hb.escapeExpression = Utils.escapeExpression;

	  hb.VM = runtime;
	  hb.template = function (spec) {
	    return runtime.template(spec, hb);
	  };

	  return hb;
	}

	var inst = create();
	inst.create = create;

	_handlebarsNoConflict2['default'](inst);

	inst['default'] = inst;

	exports['default'] = inst;
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	exports["default"] = function (obj) {
	  if (obj && obj.__esModule) {
	    return obj;
	  } else {
	    var newObj = {};

	    if (obj != null) {
	      for (var key in obj) {
	        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
	      }
	    }

	    newObj["default"] = obj;
	    return newObj;
	  }
	};

	exports.__esModule = true;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	};

	exports.__esModule = true;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(2)['default'];

	exports.__esModule = true;
	exports.HandlebarsEnvironment = HandlebarsEnvironment;

	var _utils = __webpack_require__(4);

	var _exception = __webpack_require__(5);

	var _exception2 = _interopRequireDefault(_exception);

	var _helpers = __webpack_require__(6);

	var _decorators = __webpack_require__(14);

	var _logger = __webpack_require__(16);

	var _logger2 = _interopRequireDefault(_logger);

	var VERSION = '4.0.5';
	exports.VERSION = VERSION;
	var COMPILER_REVISION = 7;

	exports.COMPILER_REVISION = COMPILER_REVISION;
	var REVISION_CHANGES = {
	  1: '<= 1.0.rc.2', // 1.0.rc.2 is actually rev2 but doesn't report it
	  2: '== 1.0.0-rc.3',
	  3: '== 1.0.0-rc.4',
	  4: '== 1.x.x',
	  5: '== 2.0.0-alpha.x',
	  6: '>= 2.0.0-beta.1',
	  7: '>= 4.0.0'
	};

	exports.REVISION_CHANGES = REVISION_CHANGES;
	var objectType = '[object Object]';

	function HandlebarsEnvironment(helpers, partials, decorators) {
	  this.helpers = helpers || {};
	  this.partials = partials || {};
	  this.decorators = decorators || {};

	  _helpers.registerDefaultHelpers(this);
	  _decorators.registerDefaultDecorators(this);
	}

	HandlebarsEnvironment.prototype = {
	  constructor: HandlebarsEnvironment,

	  logger: _logger2['default'],
	  log: _logger2['default'].log,

	  registerHelper: function registerHelper(name, fn) {
	    if (_utils.toString.call(name) === objectType) {
	      if (fn) {
	        throw new _exception2['default']('Arg not supported with multiple helpers');
	      }
	      _utils.extend(this.helpers, name);
	    } else {
	      this.helpers[name] = fn;
	    }
	  },
	  unregisterHelper: function unregisterHelper(name) {
	    delete this.helpers[name];
	  },

	  registerPartial: function registerPartial(name, partial) {
	    if (_utils.toString.call(name) === objectType) {
	      _utils.extend(this.partials, name);
	    } else {
	      if (typeof partial === 'undefined') {
	        throw new _exception2['default']('Attempting to register a partial called "' + name + '" as undefined');
	      }
	      this.partials[name] = partial;
	    }
	  },
	  unregisterPartial: function unregisterPartial(name) {
	    delete this.partials[name];
	  },

	  registerDecorator: function registerDecorator(name, fn) {
	    if (_utils.toString.call(name) === objectType) {
	      if (fn) {
	        throw new _exception2['default']('Arg not supported with multiple decorators');
	      }
	      _utils.extend(this.decorators, name);
	    } else {
	      this.decorators[name] = fn;
	    }
	  },
	  unregisterDecorator: function unregisterDecorator(name) {
	    delete this.decorators[name];
	  }
	};

	var log = _logger2['default'].log;

	exports.log = log;
	exports.createFrame = _utils.createFrame;
	exports.logger = _logger2['default'];

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.extend = extend;
	exports.indexOf = indexOf;
	exports.escapeExpression = escapeExpression;
	exports.isEmpty = isEmpty;
	exports.createFrame = createFrame;
	exports.blockParams = blockParams;
	exports.appendContextPath = appendContextPath;
	var escape = {
	  '&': '&amp;',
	  '<': '&lt;',
	  '>': '&gt;',
	  '"': '&quot;',
	  "'": '&#x27;',
	  '`': '&#x60;',
	  '=': '&#x3D;'
	};

	var badChars = /[&<>"'`=]/g,
	    possible = /[&<>"'`=]/;

	function escapeChar(chr) {
	  return escape[chr];
	}

	function extend(obj /* , ...source */) {
	  for (var i = 1; i < arguments.length; i++) {
	    for (var key in arguments[i]) {
	      if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {
	        obj[key] = arguments[i][key];
	      }
	    }
	  }

	  return obj;
	}

	var toString = Object.prototype.toString;

	exports.toString = toString;
	// Sourced from lodash
	// https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
	/* eslint-disable func-style */
	var isFunction = function isFunction(value) {
	  return typeof value === 'function';
	};
	// fallback for older versions of Chrome and Safari
	/* istanbul ignore next */
	if (isFunction(/x/)) {
	  exports.isFunction = isFunction = function (value) {
	    return typeof value === 'function' && toString.call(value) === '[object Function]';
	  };
	}
	exports.isFunction = isFunction;

	/* eslint-enable func-style */

	/* istanbul ignore next */
	var isArray = Array.isArray || function (value) {
	  return value && typeof value === 'object' ? toString.call(value) === '[object Array]' : false;
	};

	exports.isArray = isArray;
	// Older IE versions do not directly support indexOf so we must implement our own, sadly.

	function indexOf(array, value) {
	  for (var i = 0, len = array.length; i < len; i++) {
	    if (array[i] === value) {
	      return i;
	    }
	  }
	  return -1;
	}

	function escapeExpression(string) {
	  if (typeof string !== 'string') {
	    // don't escape SafeStrings, since they're already safe
	    if (string && string.toHTML) {
	      return string.toHTML();
	    } else if (string == null) {
	      return '';
	    } else if (!string) {
	      return string + '';
	    }

	    // Force a string conversion as this will be done by the append regardless and
	    // the regex test will do this transparently behind the scenes, causing issues if
	    // an object's to string has escaped characters in it.
	    string = '' + string;
	  }

	  if (!possible.test(string)) {
	    return string;
	  }
	  return string.replace(badChars, escapeChar);
	}

	function isEmpty(value) {
	  if (!value && value !== 0) {
	    return true;
	  } else if (isArray(value) && value.length === 0) {
	    return true;
	  } else {
	    return false;
	  }
	}

	function createFrame(object) {
	  var frame = extend({}, object);
	  frame._parent = object;
	  return frame;
	}

	function blockParams(params, ids) {
	  params.path = ids;
	  return params;
	}

	function appendContextPath(contextPath, id) {
	  return (contextPath ? contextPath + '.' : '') + id;
	}

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;

	var errorProps = ['description', 'fileName', 'lineNumber', 'message', 'name', 'number', 'stack'];

	function Exception(message, node) {
	  var loc = node && node.loc,
	      line = undefined,
	      column = undefined;
	  if (loc) {
	    line = loc.start.line;
	    column = loc.start.column;

	    message += ' - ' + line + ':' + column;
	  }

	  var tmp = Error.prototype.constructor.call(this, message);

	  // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
	  for (var idx = 0; idx < errorProps.length; idx++) {
	    this[errorProps[idx]] = tmp[errorProps[idx]];
	  }

	  /* istanbul ignore else */
	  if (Error.captureStackTrace) {
	    Error.captureStackTrace(this, Exception);
	  }

	  if (loc) {
	    this.lineNumber = line;
	    this.column = column;
	  }
	}

	Exception.prototype = new Error();

	exports['default'] = Exception;
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(2)['default'];

	exports.__esModule = true;
	exports.registerDefaultHelpers = registerDefaultHelpers;

	var _helpersBlockHelperMissing = __webpack_require__(7);

	var _helpersBlockHelperMissing2 = _interopRequireDefault(_helpersBlockHelperMissing);

	var _helpersEach = __webpack_require__(8);

	var _helpersEach2 = _interopRequireDefault(_helpersEach);

	var _helpersHelperMissing = __webpack_require__(9);

	var _helpersHelperMissing2 = _interopRequireDefault(_helpersHelperMissing);

	var _helpersIf = __webpack_require__(10);

	var _helpersIf2 = _interopRequireDefault(_helpersIf);

	var _helpersLog = __webpack_require__(11);

	var _helpersLog2 = _interopRequireDefault(_helpersLog);

	var _helpersLookup = __webpack_require__(12);

	var _helpersLookup2 = _interopRequireDefault(_helpersLookup);

	var _helpersWith = __webpack_require__(13);

	var _helpersWith2 = _interopRequireDefault(_helpersWith);

	function registerDefaultHelpers(instance) {
	  _helpersBlockHelperMissing2['default'](instance);
	  _helpersEach2['default'](instance);
	  _helpersHelperMissing2['default'](instance);
	  _helpersIf2['default'](instance);
	  _helpersLog2['default'](instance);
	  _helpersLookup2['default'](instance);
	  _helpersWith2['default'](instance);
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(4);

	exports['default'] = function (instance) {
	  instance.registerHelper('blockHelperMissing', function (context, options) {
	    var inverse = options.inverse,
	        fn = options.fn;

	    if (context === true) {
	      return fn(this);
	    } else if (context === false || context == null) {
	      return inverse(this);
	    } else if (_utils.isArray(context)) {
	      if (context.length > 0) {
	        if (options.ids) {
	          options.ids = [options.name];
	        }

	        return instance.helpers.each(context, options);
	      } else {
	        return inverse(this);
	      }
	    } else {
	      if (options.data && options.ids) {
	        var data = _utils.createFrame(options.data);
	        data.contextPath = _utils.appendContextPath(options.data.contextPath, options.name);
	        options = { data: data };
	      }

	      return fn(context, options);
	    }
	  });
	};

	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(2)['default'];

	exports.__esModule = true;

	var _utils = __webpack_require__(4);

	var _exception = __webpack_require__(5);

	var _exception2 = _interopRequireDefault(_exception);

	exports['default'] = function (instance) {
	  instance.registerHelper('each', function (context, options) {
	    if (!options) {
	      throw new _exception2['default']('Must pass iterator to #each');
	    }

	    var fn = options.fn,
	        inverse = options.inverse,
	        i = 0,
	        ret = '',
	        data = undefined,
	        contextPath = undefined;

	    if (options.data && options.ids) {
	      contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]) + '.';
	    }

	    if (_utils.isFunction(context)) {
	      context = context.call(this);
	    }

	    if (options.data) {
	      data = _utils.createFrame(options.data);
	    }

	    function execIteration(field, index, last) {
	      if (data) {
	        data.key = field;
	        data.index = index;
	        data.first = index === 0;
	        data.last = !!last;

	        if (contextPath) {
	          data.contextPath = contextPath + field;
	        }
	      }

	      ret = ret + fn(context[field], {
	        data: data,
	        blockParams: _utils.blockParams([context[field], field], [contextPath + field, null])
	      });
	    }

	    if (context && typeof context === 'object') {
	      if (_utils.isArray(context)) {
	        for (var j = context.length; i < j; i++) {
	          if (i in context) {
	            execIteration(i, i, i === context.length - 1);
	          }
	        }
	      } else {
	        var priorKey = undefined;

	        for (var key in context) {
	          if (context.hasOwnProperty(key)) {
	            // We're running the iterations one step out of sync so we can detect
	            // the last iteration without have to scan the object twice and create
	            // an itermediate keys array.
	            if (priorKey !== undefined) {
	              execIteration(priorKey, i - 1);
	            }
	            priorKey = key;
	            i++;
	          }
	        }
	        if (priorKey !== undefined) {
	          execIteration(priorKey, i - 1, true);
	        }
	      }
	    }

	    if (i === 0) {
	      ret = inverse(this);
	    }

	    return ret;
	  });
	};

	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(2)['default'];

	exports.__esModule = true;

	var _exception = __webpack_require__(5);

	var _exception2 = _interopRequireDefault(_exception);

	exports['default'] = function (instance) {
	  instance.registerHelper('helperMissing', function () /* [args, ]options */{
	    if (arguments.length === 1) {
	      // A missing field in a {{foo}} construct.
	      return undefined;
	    } else {
	      // Someone is actually trying to call something, blow up.
	      throw new _exception2['default']('Missing helper: "' + arguments[arguments.length - 1].name + '"');
	    }
	  });
	};

	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(4);

	exports['default'] = function (instance) {
	  instance.registerHelper('if', function (conditional, options) {
	    if (_utils.isFunction(conditional)) {
	      conditional = conditional.call(this);
	    }

	    // Default behavior is to render the positive path if the value is truthy and not empty.
	    // The `includeZero` option may be set to treat the condtional as purely not empty based on the
	    // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
	    if (!options.hash.includeZero && !conditional || _utils.isEmpty(conditional)) {
	      return options.inverse(this);
	    } else {
	      return options.fn(this);
	    }
	  });

	  instance.registerHelper('unless', function (conditional, options) {
	    return instance.helpers['if'].call(this, conditional, { fn: options.inverse, inverse: options.fn, hash: options.hash });
	  });
	};

	module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;

	exports['default'] = function (instance) {
	  instance.registerHelper('log', function () /* message, options */{
	    var args = [undefined],
	        options = arguments[arguments.length - 1];
	    for (var i = 0; i < arguments.length - 1; i++) {
	      args.push(arguments[i]);
	    }

	    var level = 1;
	    if (options.hash.level != null) {
	      level = options.hash.level;
	    } else if (options.data && options.data.level != null) {
	      level = options.data.level;
	    }
	    args[0] = level;

	    instance.log.apply(instance, args);
	  });
	};

	module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;

	exports['default'] = function (instance) {
	  instance.registerHelper('lookup', function (obj, field) {
	    return obj && obj[field];
	  });
	};

	module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(4);

	exports['default'] = function (instance) {
	  instance.registerHelper('with', function (context, options) {
	    if (_utils.isFunction(context)) {
	      context = context.call(this);
	    }

	    var fn = options.fn;

	    if (!_utils.isEmpty(context)) {
	      var data = options.data;
	      if (options.data && options.ids) {
	        data = _utils.createFrame(options.data);
	        data.contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]);
	      }

	      return fn(context, {
	        data: data,
	        blockParams: _utils.blockParams([context], [data && data.contextPath])
	      });
	    } else {
	      return options.inverse(this);
	    }
	  });
	};

	module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(2)['default'];

	exports.__esModule = true;
	exports.registerDefaultDecorators = registerDefaultDecorators;

	var _decoratorsInline = __webpack_require__(15);

	var _decoratorsInline2 = _interopRequireDefault(_decoratorsInline);

	function registerDefaultDecorators(instance) {
	  _decoratorsInline2['default'](instance);
	}

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(4);

	exports['default'] = function (instance) {
	  instance.registerDecorator('inline', function (fn, props, container, options) {
	    var ret = fn;
	    if (!props.partials) {
	      props.partials = {};
	      ret = function (context, options) {
	        // Create a new partials stack frame prior to exec.
	        var original = container.partials;
	        container.partials = _utils.extend({}, original, props.partials);
	        var ret = fn(context, options);
	        container.partials = original;
	        return ret;
	      };
	    }

	    props.partials[options.args[0]] = options.fn;

	    return ret;
	  });
	};

	module.exports = exports['default'];

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(4);

	var logger = {
	  methodMap: ['debug', 'info', 'warn', 'error'],
	  level: 'info',

	  // Maps a given level value to the `methodMap` indexes above.
	  lookupLevel: function lookupLevel(level) {
	    if (typeof level === 'string') {
	      var levelMap = _utils.indexOf(logger.methodMap, level.toLowerCase());
	      if (levelMap >= 0) {
	        level = levelMap;
	      } else {
	        level = parseInt(level, 10);
	      }
	    }

	    return level;
	  },

	  // Can be overridden in the host environment
	  log: function log(level) {
	    level = logger.lookupLevel(level);

	    if (typeof console !== 'undefined' && logger.lookupLevel(logger.level) <= level) {
	      var method = logger.methodMap[level];
	      if (!console[method]) {
	        // eslint-disable-line no-console
	        method = 'log';
	      }

	      for (var _len = arguments.length, message = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        message[_key - 1] = arguments[_key];
	      }

	      console[method].apply(console, message); // eslint-disable-line no-console
	    }
	  }
	};

	exports['default'] = logger;
	module.exports = exports['default'];

/***/ },
/* 17 */
/***/ function(module, exports) {

	// Build out our basic SafeString type
	'use strict';

	exports.__esModule = true;
	function SafeString(string) {
	  this.string = string;
	}

	SafeString.prototype.toString = SafeString.prototype.toHTML = function () {
	  return '' + this.string;
	};

	exports['default'] = SafeString;
	module.exports = exports['default'];

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireWildcard = __webpack_require__(1)['default'];

	var _interopRequireDefault = __webpack_require__(2)['default'];

	exports.__esModule = true;
	exports.checkRevision = checkRevision;
	exports.template = template;
	exports.wrapProgram = wrapProgram;
	exports.resolvePartial = resolvePartial;
	exports.invokePartial = invokePartial;
	exports.noop = noop;

	var _utils = __webpack_require__(4);

	var Utils = _interopRequireWildcard(_utils);

	var _exception = __webpack_require__(5);

	var _exception2 = _interopRequireDefault(_exception);

	var _base = __webpack_require__(3);

	function checkRevision(compilerInfo) {
	  var compilerRevision = compilerInfo && compilerInfo[0] || 1,
	      currentRevision = _base.COMPILER_REVISION;

	  if (compilerRevision !== currentRevision) {
	    if (compilerRevision < currentRevision) {
	      var runtimeVersions = _base.REVISION_CHANGES[currentRevision],
	          compilerVersions = _base.REVISION_CHANGES[compilerRevision];
	      throw new _exception2['default']('Template was precompiled with an older version of Handlebars than the current runtime. ' + 'Please update your precompiler to a newer version (' + runtimeVersions + ') or downgrade your runtime to an older version (' + compilerVersions + ').');
	    } else {
	      // Use the embedded version info since the runtime doesn't know about this revision yet
	      throw new _exception2['default']('Template was precompiled with a newer version of Handlebars than the current runtime. ' + 'Please update your runtime to a newer version (' + compilerInfo[1] + ').');
	    }
	  }
	}

	function template(templateSpec, env) {
	  /* istanbul ignore next */
	  if (!env) {
	    throw new _exception2['default']('No environment passed to template');
	  }
	  if (!templateSpec || !templateSpec.main) {
	    throw new _exception2['default']('Unknown template object: ' + typeof templateSpec);
	  }

	  templateSpec.main.decorator = templateSpec.main_d;

	  // Note: Using env.VM references rather than local var references throughout this section to allow
	  // for external users to override these as psuedo-supported APIs.
	  env.VM.checkRevision(templateSpec.compiler);

	  function invokePartialWrapper(partial, context, options) {
	    if (options.hash) {
	      context = Utils.extend({}, context, options.hash);
	      if (options.ids) {
	        options.ids[0] = true;
	      }
	    }

	    partial = env.VM.resolvePartial.call(this, partial, context, options);
	    var result = env.VM.invokePartial.call(this, partial, context, options);

	    if (result == null && env.compile) {
	      options.partials[options.name] = env.compile(partial, templateSpec.compilerOptions, env);
	      result = options.partials[options.name](context, options);
	    }
	    if (result != null) {
	      if (options.indent) {
	        var lines = result.split('\n');
	        for (var i = 0, l = lines.length; i < l; i++) {
	          if (!lines[i] && i + 1 === l) {
	            break;
	          }

	          lines[i] = options.indent + lines[i];
	        }
	        result = lines.join('\n');
	      }
	      return result;
	    } else {
	      throw new _exception2['default']('The partial ' + options.name + ' could not be compiled when running in runtime-only mode');
	    }
	  }

	  // Just add water
	  var container = {
	    strict: function strict(obj, name) {
	      if (!(name in obj)) {
	        throw new _exception2['default']('"' + name + '" not defined in ' + obj);
	      }
	      return obj[name];
	    },
	    lookup: function lookup(depths, name) {
	      var len = depths.length;
	      for (var i = 0; i < len; i++) {
	        if (depths[i] && depths[i][name] != null) {
	          return depths[i][name];
	        }
	      }
	    },
	    lambda: function lambda(current, context) {
	      return typeof current === 'function' ? current.call(context) : current;
	    },

	    escapeExpression: Utils.escapeExpression,
	    invokePartial: invokePartialWrapper,

	    fn: function fn(i) {
	      var ret = templateSpec[i];
	      ret.decorator = templateSpec[i + '_d'];
	      return ret;
	    },

	    programs: [],
	    program: function program(i, data, declaredBlockParams, blockParams, depths) {
	      var programWrapper = this.programs[i],
	          fn = this.fn(i);
	      if (data || depths || blockParams || declaredBlockParams) {
	        programWrapper = wrapProgram(this, i, fn, data, declaredBlockParams, blockParams, depths);
	      } else if (!programWrapper) {
	        programWrapper = this.programs[i] = wrapProgram(this, i, fn);
	      }
	      return programWrapper;
	    },

	    data: function data(value, depth) {
	      while (value && depth--) {
	        value = value._parent;
	      }
	      return value;
	    },
	    merge: function merge(param, common) {
	      var obj = param || common;

	      if (param && common && param !== common) {
	        obj = Utils.extend({}, common, param);
	      }

	      return obj;
	    },

	    noop: env.VM.noop,
	    compilerInfo: templateSpec.compiler
	  };

	  function ret(context) {
	    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	    var data = options.data;

	    ret._setup(options);
	    if (!options.partial && templateSpec.useData) {
	      data = initData(context, data);
	    }
	    var depths = undefined,
	        blockParams = templateSpec.useBlockParams ? [] : undefined;
	    if (templateSpec.useDepths) {
	      if (options.depths) {
	        depths = context !== options.depths[0] ? [context].concat(options.depths) : options.depths;
	      } else {
	        depths = [context];
	      }
	    }

	    function main(context /*, options*/) {
	      return '' + templateSpec.main(container, context, container.helpers, container.partials, data, blockParams, depths);
	    }
	    main = executeDecorators(templateSpec.main, main, container, options.depths || [], data, blockParams);
	    return main(context, options);
	  }
	  ret.isTop = true;

	  ret._setup = function (options) {
	    if (!options.partial) {
	      container.helpers = container.merge(options.helpers, env.helpers);

	      if (templateSpec.usePartial) {
	        container.partials = container.merge(options.partials, env.partials);
	      }
	      if (templateSpec.usePartial || templateSpec.useDecorators) {
	        container.decorators = container.merge(options.decorators, env.decorators);
	      }
	    } else {
	      container.helpers = options.helpers;
	      container.partials = options.partials;
	      container.decorators = options.decorators;
	    }
	  };

	  ret._child = function (i, data, blockParams, depths) {
	    if (templateSpec.useBlockParams && !blockParams) {
	      throw new _exception2['default']('must pass block params');
	    }
	    if (templateSpec.useDepths && !depths) {
	      throw new _exception2['default']('must pass parent depths');
	    }

	    return wrapProgram(container, i, templateSpec[i], data, 0, blockParams, depths);
	  };
	  return ret;
	}

	function wrapProgram(container, i, fn, data, declaredBlockParams, blockParams, depths) {
	  function prog(context) {
	    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	    var currentDepths = depths;
	    if (depths && context !== depths[0]) {
	      currentDepths = [context].concat(depths);
	    }

	    return fn(container, context, container.helpers, container.partials, options.data || data, blockParams && [options.blockParams].concat(blockParams), currentDepths);
	  }

	  prog = executeDecorators(fn, prog, container, depths, data, blockParams);

	  prog.program = i;
	  prog.depth = depths ? depths.length : 0;
	  prog.blockParams = declaredBlockParams || 0;
	  return prog;
	}

	function resolvePartial(partial, context, options) {
	  if (!partial) {
	    if (options.name === '@partial-block') {
	      partial = options.data['partial-block'];
	    } else {
	      partial = options.partials[options.name];
	    }
	  } else if (!partial.call && !options.name) {
	    // This is a dynamic partial that returned a string
	    options.name = partial;
	    partial = options.partials[partial];
	  }
	  return partial;
	}

	function invokePartial(partial, context, options) {
	  options.partial = true;
	  if (options.ids) {
	    options.data.contextPath = options.ids[0] || options.data.contextPath;
	  }

	  var partialBlock = undefined;
	  if (options.fn && options.fn !== noop) {
	    options.data = _base.createFrame(options.data);
	    partialBlock = options.data['partial-block'] = options.fn;

	    if (partialBlock.partials) {
	      options.partials = Utils.extend({}, options.partials, partialBlock.partials);
	    }
	  }

	  if (partial === undefined && partialBlock) {
	    partial = partialBlock;
	  }

	  if (partial === undefined) {
	    throw new _exception2['default']('The partial ' + options.name + ' could not be found');
	  } else if (partial instanceof Function) {
	    return partial(context, options);
	  }
	}

	function noop() {
	  return '';
	}

	function initData(context, data) {
	  if (!data || !('root' in data)) {
	    data = data ? _base.createFrame(data) : {};
	    data.root = context;
	  }
	  return data;
	}

	function executeDecorators(fn, prog, container, depths, data, blockParams) {
	  if (fn.decorator) {
	    var props = {};
	    prog = fn.decorator(prog, props, container, depths && depths[0], data, blockParams, depths);
	    Utils.extend(prog, props);
	  }
	  return prog;
	}

/***/ },
/* 19 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/* global window */
	'use strict';

	exports.__esModule = true;

	exports['default'] = function (Handlebars) {
	  /* istanbul ignore next */
	  var root = typeof global !== 'undefined' ? global : window,
	      $Handlebars = root.Handlebars;
	  /* istanbul ignore next */
	  Handlebars.noConflict = function () {
	    if (root.Handlebars === Handlebars) {
	      root.Handlebars = $Handlebars;
	    }
	    return Handlebars;
	  };
	};

	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }
/******/ ])
});
;
this["Fabrique"] = this["Fabrique"] || {};
this["Fabrique"]["Debug"] = this["Fabrique"]["Debug"] || {};
this["Fabrique"]["Debug"]["Templates"] = this["Fabrique"]["Debug"]["Templates"] || {};

this["Fabrique"]["Debug"]["Templates"]["ts/Templates/details.hbs"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "    <label>Children:</label>\n    <strong>"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1.length : stack1), depth0))
    + "</strong>\n    <br/>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "    <label>Texture:</label>\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.texture : depth0)) != null ? stack1.baseTexture : stack1)) != null ? stack1.source : stack1)) != null ? stack1.src : stack1),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(6, data, 0),"data":data})) != null ? stack1 : "")
    + "    <br/>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "        <a href=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.texture : depth0)) != null ? stack1.baseTexture : stack1)) != null ? stack1.source : stack1)) != null ? stack1.src : stack1), depth0))
    + "\" target=\"_blank\">"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.texture : depth0)) != null ? stack1.baseTexture : stack1)) != null ? stack1.source : stack1)) != null ? stack1.src : stack1), depth0))
    + "</a>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "        <strong>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.texture : depth0)) != null ? stack1.baseTexture : stack1)) != null ? stack1.source : stack1), depth0))
    + "</strong>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "<br/><br/>\n\n<label>Name:</label>\n<strong>"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</strong>\n<br/>\n\n<label>Type:</label>\n<strong>"
    + alias4(((helper = (helper = helpers.typeString || (depth0 != null ? depth0.typeString : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"typeString","hash":{},"data":data}) : helper)))
    + "</strong>\n<br/>\n\n<label>Position:</label>\n<strong><input type=\"number\" id=\"input-"
    + alias4(((helper = (helper = helpers.getId || (depth0 != null ? depth0.getId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"getId","hash":{},"data":data}) : helper)))
    + "-x\" value=\""
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.position : depth0)) != null ? stack1.x : stack1), depth0))
    + "\" size=\"4\" maxlength=\"4\" onchange=\"Fabrique.Debug.SceneEditor.onPositionChange("
    + alias4(((helper = (helper = helpers.getId || (depth0 != null ? depth0.getId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"getId","hash":{},"data":data}) : helper)))
    + ", 'x')\"/></strong> x\n<strong><input type=\"number\" id=\"input-"
    + alias4(((helper = (helper = helpers.getId || (depth0 != null ? depth0.getId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"getId","hash":{},"data":data}) : helper)))
    + "-y\" value=\""
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.position : depth0)) != null ? stack1.y : stack1), depth0))
    + "\" size=\"4\" maxlength=\"4\" onchange=\"Fabrique.Debug.SceneEditor.onPositionChange("
    + alias4(((helper = (helper = helpers.getId || (depth0 != null ? depth0.getId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"getId","hash":{},"data":data}) : helper)))
    + ", 'y')\"/></strong>\n<br/>\n\n<label>Scale:</label>\n<strong><input type=\"number\" id=\"input-"
    + alias4(((helper = (helper = helpers.getId || (depth0 != null ? depth0.getId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"getId","hash":{},"data":data}) : helper)))
    + "-scale-x\" value=\""
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.scale : depth0)) != null ? stack1.x : stack1), depth0))
    + "\" size=\"4\" maxlength=\"4\" onchange=\"Fabrique.Debug.SceneEditor.onScaleChange("
    + alias4(((helper = (helper = helpers.getId || (depth0 != null ? depth0.getId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"getId","hash":{},"data":data}) : helper)))
    + ", 'x')\"/></strong> x\n<strong><input type=\"number\" id=\"input-"
    + alias4(((helper = (helper = helpers.getId || (depth0 != null ? depth0.getId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"getId","hash":{},"data":data}) : helper)))
    + "-scale-y\" value=\""
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.scale : depth0)) != null ? stack1.y : stack1), depth0))
    + "\" size=\"4\" maxlength=\"4\" onchange=\"Fabrique.Debug.SceneEditor.onScaleChange("
    + alias4(((helper = (helper = helpers.getId || (depth0 != null ? depth0.getId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"getId","hash":{},"data":data}) : helper)))
    + ", 'y')\"/></strong>\n<br/>\n\n<label>Alpha:</label>\n<strong><input type=\"number\" id=\"input-"
    + alias4(((helper = (helper = helpers.getId || (depth0 != null ? depth0.getId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"getId","hash":{},"data":data}) : helper)))
    + "-alpha\" value=\""
    + alias4(((helper = (helper = helpers.alpha || (depth0 != null ? depth0.alpha : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"alpha","hash":{},"data":data}) : helper)))
    + "\" size=\"4\" maxlength=\"4\" onchange=\"Fabrique.Debug.SceneEditor.onAlphaChange("
    + alias4(((helper = (helper = helpers.getId || (depth0 != null ? depth0.getId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"getId","hash":{},"data":data}) : helper)))
    + ")\"/></strong>\n<br/>\n\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.children : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.texture : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});

this["Fabrique"]["Debug"]["Templates"]["ts/Templates/panel.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<ul class=\"sidebar\">\n</ul>\n\n<a href=\"#\" class=\"refresh\">refresh</a>\n<div class=\"details\">\n</div>\n";
},"useData":true});

this["Fabrique"]["Debug"]["Templates"]["ts/Templates/tree.hbs"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "        <span class=\"weak\">("
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + ") "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.children : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</span>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "("
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1.length : stack1), depth0))
    + ")";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "        <ul>\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.children : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </ul>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.sceneTree,depth0,{"name":"sceneTree","data":data,"indent":"                ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return alias4(((helper = (helper = helpers.listItemOpen || (depth0 != null ? depth0.listItemOpen : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"listItemOpen","hash":{},"data":data}) : helper)))
    + "\n    "
    + alias4(((helper = (helper = helpers.typeString || (depth0 != null ? depth0.typeString : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"typeString","hash":{},"data":data}) : helper)))
    + "\n\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.name : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.children : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</li>\n";
},"usePartial":true,"useData":true});
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Fabrique;
(function (Fabrique) {
    var Plugins;
    (function (Plugins) {
        var Debug = (function (_super) {
            __extends(Debug, _super);
            function Debug(game, parent) {
                _super.call(this, game, parent);
                this.panels = {
                    performance: null,
                    scene: null,
                    bezier: null
                };
                this.tickTimings = {
                    lastStart: 0,
                    start: 0,
                    ms: 0
                };
                this.timings = {
                    preUpdate: {
                        physics: 0,
                        state: 0,
                        plugins: 0,
                        stage: 0
                    },
                    update: {
                        state: 0,
                        stage: 0,
                        tweens: 0,
                        sound: 0,
                        input: 0,
                        physics: 0,
                        particles: 0,
                        plugins: 0
                    },
                    postUpdate: {
                        stage: 0,
                        plugins: 0
                    },
                    preRender: {
                        state: 0
                    },
                    render: {
                        renderer: 0,
                        plugins: 0,
                        state: 0
                    },
                    postRender: {
                        plugins: 0
                    }
                };
                this.container = null;
                this.bar = null;
                this.stats = {
                    ms: null,
                    fps: null,
                    dpf: null,
                    ent: null
                };
                this.timer = (window.performance ? window.performance : Date);
                // create the panels
                this.panels.performance = new Fabrique.Debug.Performance(this.game, this);
                this.panels.bezier = new Fabrique.Debug.BezierTester(this.game, this);
                this.panels.scene = new Fabrique.Debug.SceneEditor(this.game, this);
                // add elements to the page
                //Ui.addCss(css);
                document.body.appendChild(this.createElement());
                this.bindEvents();
                // wrap each component's update methods so we can time them
                for (var method in this.timings) {
                    for (var comp in this.timings[method]) {
                        this.wrap(this.game, comp, method, comp);
                    }
                }
                // wrap the game update method
                this.wrap(this, 'game', 'update');
                // initialize each panel
                for (var p in this.panels) {
                    if (this.panels[p].init) {
                        this.panels[p].init.apply(this.panels[p], arguments);
                    }
                }
                Fabrique.Ui.addCss('style.css');
            }
            /**
             * Post-Update is called after all the update methods have already been called, but before the render calls.
             * It is only called if active is set to true.
             *
             * @method Phaser.Plugin.Debug#postUpdate
             */
            Debug.prototype.postUpdate = function () {
                for (var p in this.panels) {
                    if (this.panels[p].update && this.panels[p].active) {
                        this.panels[p].update();
                    }
                }
                var fps = Math.round(1000 / (this.tickTimings.start - this.tickTimings.lastStart)), dpf = this.game.renderer.renderSession.drawCount;
                fps = fps > 60 ? 60 : fps;
                // update stats indicators
                Fabrique.Ui.setText(this.stats.dpf.firstElementChild, dpf === undefined ? '(N/A)' : dpf.toString());
                Fabrique.Ui.setText(this.stats.ms.firstElementChild, (Math.round(this.tickTimings.ms)).toString());
                Fabrique.Ui.setText(this.stats.fps.firstElementChild, (Math.round(fps)).toString());
            };
            ;
            /**
             * Marks a point on the performance graph with a label to help you corrolate events and timing on the graph
             *
             * @method Phaser.Plugin.Debug#mark
             */
            Debug.prototype.mark = function (label) {
                if (this.panels.performance) {
                    this.panels.performance.mark(label);
                }
            };
            ;
            Debug.prototype.destroy = function () {
                Phaser.Plugin.prototype.destroy.call(this);
                for (var p in this.panels) {
                    this.panels[p].destroy();
                }
                this.panels = null;
                this.tickTimings = null;
                this.timings = null;
                this.container = null;
                this.bar = null;
                this.stats = null;
                this.timer = null;
            };
            ;
            Debug.prototype.wrap = function (obj, component, method, timingStat) {
                if (!obj[component] || !obj[component][method]) {
                    return;
                }
                obj[component][method] = (function (self, name, method, stat, fn) {
                    var start = 0, end = 0;
                    // special tick capture for game update
                    if (name === 'game' && method === 'update' && !stat) {
                        return function () {
                            start = self.timer.now();
                            self.tickTimings.lastStart = self.tickTimings.start;
                            self.tickTimings.start = start;
                            fn.apply(this, arguments);
                            end = self.timer.now();
                            self.tickTimings.ms = end - start;
                        };
                    }
                    else {
                        return function () {
                            start = self.timer.now();
                            fn.apply(this, arguments);
                            end = self.timer.now();
                            self.timings[method][stat] = end - start;
                        };
                    }
                })(this, component, method, timingStat, obj[component][method]);
            };
            ;
            Debug.prototype.bindEvents = function () {
                var _this = this;
                var activePanel;
                Fabrique.Ui.on(this.bar, 'click', '.pdebug-menu-item', function (e) {
                    e.preventDefault();
                    var panel = _this.panels[e.target.getAttribute('href').replace('#', '')];
                    if (!panel) {
                        return;
                    }
                    if (activePanel) {
                        activePanel.toggle();
                        Fabrique.Ui.removeClass(activePanel.menuItem, 'active');
                        if (activePanel.name === panel.name) {
                            activePanel = null;
                            return;
                        }
                    }
                    Fabrique.Ui.addClass(e.target, 'active');
                    panel.toggle();
                    activePanel = panel;
                });
            };
            ;
            Debug.prototype.createElement = function () {
                var c = this.container = document.createElement('div'), bar = this.bar = document.createElement('div');
                //container
                Fabrique.Ui.addClass(c, 'pdebug');
                c.appendChild(bar);
                //the menu bar
                Fabrique.Ui.addClass(bar, 'pdebug-menu');
                bar.appendChild(this.createMenuHead());
                bar.appendChild(this.createMenuStats());
                //add the panels
                for (var p in this.panels) {
                    bar.appendChild(this.panels[p].createMenuElement());
                    c.appendChild(this.panels[p].createPanelElement());
                }
                return c;
            };
            ;
            Debug.prototype.createMenuHead = function () {
                var div = document.createElement('span'), r = this.game.renderType, type = (r === Phaser.WEBGL ? 'WebGL' : (r === Phaser.HEADLESS ? 'Headless' : 'Canvas'));
                Fabrique.Ui.addClass(div, 'pdebug-head');
                Fabrique.Ui.setText(div, 'Phaser Debug (' + type + '):');
                return div;
            };
            ;
            Debug.prototype.createMenuStats = function () {
                var div = document.createElement('div');
                Fabrique.Ui.addClass(div, 'pdebug-stats');
                this.stats.ms = document.createElement('span');
                this.stats.fps = document.createElement('span');
                this.stats.dpf = document.createElement('span');
                // this.stats.ent = document.createElement('span');
                Fabrique.Ui.addClass(this.stats.ms, 'pdebug-stats-item ms');
                Fabrique.Ui.setHtml(this.stats.ms, '<span>0</span> ms');
                div.appendChild(this.stats.ms);
                Fabrique.Ui.addClass(this.stats.fps, 'pdebug-stats-item fps');
                Fabrique.Ui.setHtml(this.stats.fps, '<span>0</span> fps');
                div.appendChild(this.stats.fps);
                Fabrique.Ui.addClass(this.stats.dpf, 'pdebug-stats-item dpf');
                Fabrique.Ui.setHtml(this.stats.dpf, '<span>0</span> draws');
                div.appendChild(this.stats.dpf);
                // ui.addClass(this.stats.ent, 'pdebug-stats-item ent');
                // ui.setHtml(this.stats.ent, '<span>0</span> entities');
                // div.appendChild(this.stats.ent);
                return div;
            };
            ;
            return Debug;
        })(Phaser.Plugin);
        Plugins.Debug = Debug;
    })(Plugins = Fabrique.Plugins || (Fabrique.Plugins = {}));
})(Fabrique || (Fabrique = {}));
var Fabrique;
(function (Fabrique) {
    var Debug;
    (function (Debug) {
        var Panel = (function () {
            function Panel(game, parent) {
                this.name = '';
                this.title = '';
                this.active = false;
                this.game = game;
                this.parent = parent;
            }
            //builds the html for a panel
            Panel.prototype.createPanelElement = function () {
                var elm = this.panel = document.createElement('div');
                Fabrique.Ui.addClass(elm, 'pdebug-panel ' + this.name);
                return elm;
            };
            ;
            //builds the html for this panels menu item
            Panel.prototype.createMenuElement = function () {
                var elm = this.menuItem = document.createElement('a');
                elm.href = '#' + this.name;
                Fabrique.Ui.addClass(elm, 'pdebug-menu-item ' + this.name);
                Fabrique.Ui.setText(elm, this.title);
                return elm;
            };
            ;
            Panel.prototype.toggle = function () {
                if (this.active) {
                    this.hide();
                }
                else {
                    this.show();
                }
            };
            ;
            Panel.prototype.show = function () {
                this.active = true;
                Fabrique.Ui.setStyle(this.panel, 'display', 'block');
            };
            ;
            Panel.prototype.hide = function () {
                this.active = false;
                Fabrique.Ui.setStyle(this.panel, 'display', 'none');
            };
            ;
            Panel.prototype.destroy = function () {
                this.game = null;
                this.parent = null;
                this.name = null;
                this.title = null;
                this.active = null;
                this.panel = null;
            };
            ;
            return Panel;
        })();
        Debug.Panel = Panel;
    })(Debug = Fabrique.Debug || (Fabrique.Debug = {}));
})(Fabrique || (Fabrique = {}));
/// <reference path="Panel.ts"/>
var Fabrique;
(function (Fabrique) {
    var Debug;
    (function (Debug) {
        var BezierTester = (function (_super) {
            __extends(BezierTester, _super);
            function BezierTester(game, parent) {
                _super.call(this, game, parent);
                this.points = [];
                this.activeTween = null;
                this.originalX = 0;
                this.originalY = 0;
                this.name = 'bezier';
                this.title = 'Bezier Tester';
                var data = new Image();
                data.src = BezierTester.BLANK;
                game.cache.addImage('blank', BezierTester.BLANK, data);
                this.graphics = this.game.add.graphics(0, 0);
            }
            BezierTester.prototype.createPanelElement = function () {
                var elm = Debug.Panel.prototype.createPanelElement.call(this);
                return elm;
            };
            BezierTester.prototype.destroy = function () {
                _super.prototype.destroy.call(this);
            };
            BezierTester.prototype.testObject = function (object, animationSpeed) {
                var _this = this;
                if (animationSpeed === void 0) { animationSpeed = 1500; }
                this.object = object;
                this.originalX = object.x;
                this.originalY = object.y;
                this.animationSpeed = animationSpeed;
                BezierTester.COLORS.forEach(function (color, index) {
                    var g = new Phaser.Graphics(_this.game, 0, 0)
                        .beginFill(color, 0.5)
                        .drawCircle(0, 0, 20);
                    var draggablePoint = _this.game.add.sprite(_this.object.x + BezierTester.POS[index].x, _this.object.y + BezierTester.POS[index].y, 'blank');
                    draggablePoint.addChild(g);
                    draggablePoint.inputEnabled = true;
                    draggablePoint.input.enableDrag();
                    draggablePoint.events.onDragStart.add(function () { return _this.dragStart(); });
                    draggablePoint.events.onDragStop.add(function () { return _this.dragStop(); });
                    draggablePoint.events.onDragUpdate.add(function () { return _this.dragUpdate(); });
                    _this.points[index] = draggablePoint.position;
                    _this.game.add.existing(draggablePoint);
                });
                this.dragUpdate();
                this.dragStop();
            };
            BezierTester.prototype.dragStart = function () {
                if (null !== this.activeTween) {
                    console.log('stipping tween!');
                    this.activeTween.stop();
                    this.activeTween = null;
                    this.object.x = this.originalX;
                    this.object.y = this.originalY;
                }
            };
            BezierTester.prototype.dragStop = function () {
                console.log('new tween!');
                this.activeTween = this.game.add.tween(this.object).to({
                    x: [this.points[0].x, this.points[1].x, this.points[2].x, this.points[3].x],
                    y: [this.points[0].y, this.points[1].y, this.points[2].y, this.points[3].y],
                }, this.animationSpeed, Phaser.Easing.Linear.None, true, 0, -1).interpolation(function (v, k) {
                    return Phaser.Math.bezierInterpolation(v, k);
                });
            };
            BezierTester.prototype.dragUpdate = function () {
                this.graphics.clear()
                    .lineStyle(2, 0x008800, 0.5)
                    .moveTo(this.points[1].x, this.points[1].y)
                    .lineTo(this.points[0].x, this.points[0].y)
                    .lineStyle(2, 0x880000, 0.5)
                    .moveTo(this.points[3].x, this.points[3].y)
                    .lineTo(this.points[2].x, this.points[2].y)
                    .lineStyle(4, 0xffff00, 0.5)
                    .moveTo(this.points[0].x, this.points[0].y);
                for (var i = 0; i < 1; i += 0.01) {
                    var p = {
                        x: Phaser.Math.bezierInterpolation([this.points[0].x, this.points[1].x, this.points[2].x, this.points[3].x], i),
                        y: Phaser.Math.bezierInterpolation([this.points[0].y, this.points[1].y, this.points[2].y, this.points[3].y], i)
                    };
                    this.graphics.lineTo(p.x, p.y);
                }
            };
            BezierTester.BLANK = "data:image/jpeg;base64,/9j/iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjg0MDMzQkZDN0VCNjExRTU4N0RDOEM3QTAwNTRFRkNCIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjg0MDMzQkZEN0VCNjExRTU4N0RDOEM3QTAwNTRFRkNCIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ODQwMzNCRkE3RUI2MTFFNTg3REM4QzdBMDA1NEVGQ0IiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6ODQwMzNCRkI3RUI2MTFFNTg3REM4QzdBMDA1NEVGQ0IiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5KwioFAAAALklEQVR42uzOMQEAAAgDoGn/zjOGDyRg2ubT5pmAgICAgICAgICAgICAgMAJMABAtAM94wpnSQAAAABJRU5ErkJggg==";
            BezierTester.COLORS = [0x00ff00, 0x008800, 0x880000, 0xff0000];
            BezierTester.POS = [
                new Phaser.Point(0, 0),
                new Phaser.Point(0, 50),
                new Phaser.Point(50, 50),
                new Phaser.Point(50, 0),
            ];
            return BezierTester;
        })(Fabrique.Debug.Panel);
        Debug.BezierTester = BezierTester;
    })(Debug = Fabrique.Debug || (Fabrique.Debug = {}));
})(Fabrique || (Fabrique = {}));
var Fabrique;
(function (Fabrique) {
    var Debug;
    (function (Debug) {
        var Performance = (function (_super) {
            __extends(Performance, _super);
            function Performance(game, parent) {
                _super.call(this, game, parent);
                this.eventQueue = [];
                this.name = 'performance';
                this.title = 'Performance';
                this.eventQueue = [];
                this.graph = null;
                this.colorPalettes = {
                    default: [
                        // Colors from: https://github.com/highslide-software/highcharts.com/blob/master/js/themes/grid.js
                        '#058DC7', '#50B432', '#ED561B', '#DDDF00',
                        '#24CBE5', '#64E572', '#FF9655', '#FFF263',
                        '#6AF9C4',
                        // Colors from: https://github.com/highslide-software/highcharts.com/blob/master/js/themes/dark-unica.js
                        '#2b908f', '#90ee7e', '#f45b5b', '#7798BF',
                        '#aaeeee', '#ff0066', '#eeaaee',
                        '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'
                    ]
                };
            }
            Performance.prototype.createPanelElement = function () {
                var elm = Debug.Panel.prototype.createPanelElement.call(this);
                this.graph = new Debug.Graph(elm, window.innerWidth - 20, 256, this.colorPalettes.default);
                return elm;
            };
            Performance.prototype.update = function () {
                this.graph.addData(this.parent.timings, this.eventQueue.shift());
            };
            Performance.prototype.mark = function (label) {
                this.eventQueue.push(label);
            };
            Performance.prototype.destro = function () {
                Debug.Panel.prototype.destroy.call(this);
                this.graph.destroy();
                this.eventQueue = null;
                this.graph = null;
                this.colorPalettes = null;
            };
            return Performance;
        })(Fabrique.Debug.Panel);
        Debug.Performance = Performance;
    })(Debug = Fabrique.Debug || (Fabrique.Debug = {}));
})(Fabrique || (Fabrique = {}));
/// <reference path="Panel.ts"/>
var detailsHtml = Fabrique.Debug.Templates['ts/Templates/details.hbs'];
var panelHtml = Fabrique.Debug.Templates['ts/Templates/panel.hbs'];
var treeHtml = Fabrique.Debug.Templates['ts/Templates/tree.hbs'];
Handlebars.registerPartial('sceneDetails', detailsHtml);
Handlebars.registerPartial('sceneTree', treeHtml);
Handlebars.registerHelper('typeString', typeToString);
Handlebars.registerHelper('listItemOpen', listItemOpen);
Handlebars.registerHelper('getId', getObjectId);
var Fabrique;
(function (Fabrique) {
    var Debug;
    (function (Debug) {
        var SceneEditor = (function (_super) {
            __extends(SceneEditor, _super);
            function SceneEditor(game, parent) {
                var _this = this;
                _super.call(this, game, parent);
                this.name = 'scene';
                this.title = 'Scene Editor';
                this.debugRenderer = new Phaser.Game(game.width, game.height, Phaser.CANVAS, '', { render: function () { return _this.render(); } }, true);
                this.debugRenderer.canvas.id = 'debug-render';
                this.debugRenderer.canvas.style.pointerEvents = 'none';
            }
            SceneEditor.onPositionChange = function (id, axis) {
                var input = document.getElementById('input-' + id + '-' + axis);
                var ele = _cache[id];
                ele[axis] = input.value;
            };
            SceneEditor.onScaleChange = function (id, axis) {
                var input = document.getElementById('input-' + id + '-scale-' + axis);
                var ele = _cache[id];
                ele.scale[axis] = input.value;
            };
            SceneEditor.onAlphaChange = function (id) {
                var input = document.getElementById('input-' + id + '-alpha');
                var ele = _cache[id];
                ele.alpha = parseFloat(input.value);
            };
            SceneEditor.prototype.createPanelElement = function () {
                Debug.Panel.prototype.createPanelElement.call(this);
                this.panel.innerHTML = panelHtml(this.game.stage);
                this.tree = this.panel.querySelector('.sidebar');
                this.details = this.panel.querySelector('.details');
                this.refresh = this.panel.querySelector('.refresh');
                Fabrique.Ui.on(this.tree, 'click', 'li', this._onLiClick.bind(this));
                Fabrique.Ui.on(this.refresh, 'click', '', this._onRefreshClick.bind(this));
                return this.panel;
            };
            SceneEditor.prototype.rebuildTree = function () {
                Fabrique.Ui.empty(this.tree);
                _cache = {};
                this.tree.innerHTML = treeHtml(this.game.stage);
                this.select(this.tree.querySelector('li:first-child'));
                Fabrique.Ui.addClass(this.selected, 'expanded');
                this.reloadDetails();
            };
            SceneEditor.prototype.reloadDetails = function () {
                var id = this.selected.dataset.id;
                this.details.innerHTML = detailsHtml(_cache[id]);
                this.debugItem = _cache[id];
                // this.details.appendChild(this.renderer.view);
                // this.renderer.renderDisplayObject(_cache[id]);
            };
            SceneEditor.prototype.toggle = function () {
                this.debugItem = null;
                _super.prototype.toggle.call(this);
            };
            SceneEditor.prototype.render = function () {
                if (this.debugItem instanceof Phaser.Sprite) {
                    this.debugRenderer.debug.spriteBounds(this.debugItem);
                    this.debugRenderer.debug.spriteInfo(this.debugItem, 10, 10);
                }
                else if (this.debugItem instanceof Phaser.Image) {
                    this.debugRenderer.debug.spriteBounds(this.debugItem);
                    this.debugRenderer.debug.spriteInfo(this.debugItem, 10, 10);
                }
                else {
                    this.debugRenderer.debug.reset();
                }
            };
            SceneEditor.prototype.select = function (li) {
                if (this.selected) {
                    Fabrique.Ui.removeClass(this.selected, 'selected');
                }
                this.selected = li;
                Fabrique.Ui.addClass(this.selected, 'selected');
            };
            SceneEditor.prototype.show = function () {
                this.rebuildTree();
                Debug.Panel.prototype.show.call(this);
            };
            SceneEditor.prototype.destroy = function () {
                _super.prototype.destroy.call(this);
                this.tree = null;
                this.details = null;
                this.refresh = null;
            };
            SceneEditor.prototype._onLiClick = function (e) {
                e.stopPropagation();
                this.select(e.delegateTarget);
                Fabrique.Ui.toggleClass(e.delegateTarget, 'expanded');
                this.reloadDetails();
            };
            SceneEditor.prototype._onRefreshClick = function (e) {
                e.preventDefault();
                e.stopPropagation();
                this.rebuildTree();
            };
            return SceneEditor;
        })(Fabrique.Debug.Panel);
        Debug.SceneEditor = SceneEditor;
    })(Debug = Fabrique.Debug || (Fabrique.Debug = {}));
})(Fabrique || (Fabrique = {}));
//require templates
var _cache = {}, _id = 0;
function listItemOpen() {
    _cache[++_id] = this;
    this._id = _id;
    return new Handlebars.SafeString('<li ' + (this.children && this.children.length ? 'class="has-children" ' : '') + 'data-id="' + _id + '">');
}
function getObjectId() {
    return this._id;
}
function typeToString() {
    var node = this;
    // If no phaser type defined, try to guess
    if (node.type === undefined) {
        // Phaser.Stage does not have its 'type' property defined, so check here.
        if (node instanceof Phaser.Stage) {
            return 'Stage';
        }
        else if (typeof PIXI.Stage !== 'undefined' &&
            node instanceof PIXI.Stage) {
            return 'PIXI Stage';
        }
        else if (node instanceof PIXI.Sprite) {
            return 'PIXI Sprite';
        }
        else if (node instanceof PIXI.DisplayObjectContainer) {
            return 'PIXI DisplayObjectContainer';
        }
        else if (node instanceof PIXI.DisplayObject) {
            return 'PIXI DisplayObject';
        }
        else {
            return 'Unknown';
        }
    }
    else {
        switch (node.type) {
            case Phaser.SPRITE:
                return 'Sprite';
            case Phaser.BUTTON:
                return 'Button';
            case Phaser.IMAGE:
                return 'Image';
            case Phaser.GRAPHICS:
                return 'Graphics';
            case Phaser.TEXT:
                return 'Text';
            case Phaser.TILESPRITE:
                return 'Tile Sprite';
            case Phaser.BITMAPTEXT:
                return 'Bitmap Text';
            case Phaser.GROUP:
                return 'Group';
            case Phaser.RENDERTEXTURE:
                return 'Render Texture';
            case Phaser.TILEMAP:
                return 'Tilemap';
            case Phaser.TILEMAPLAYER:
                return 'Tilemap Layer';
            case Phaser.EMITTER:
                return 'Emitter';
            case Phaser.POLYGON:
                return 'Polygon';
            case Phaser.BITMAPDATA:
                return 'Bitmap Data';
            case Phaser.CANVAS_FILTER:
                return 'Canvas Filter';
            case Phaser.WEBGL_FILTER:
                return 'WebGL Filter';
            case Phaser.ELLIPSE:
                return 'Ellipse';
            case Phaser.SPRITEBATCH:
                return 'Sprite Batch';
            case Phaser.RETROFONT:
                return 'Retro Font';
            case Phaser.POINTER:
                return 'Pointer';
            case Phaser.ROPE:
                return 'Rope';
            default:
                return 'Unknown';
        }
    }
}
var Fabrique;
(function (Fabrique) {
    var Debug;
    (function (Debug) {
        var Graph = (function () {
            function Graph(container, width, height, colors, options) {
                if (options === void 0) { options = {}; }
                this.canvas = null;
                this.ctx = null;
                this.labelStyle = null;
                this.maxValue = null;
                this.padding = null;
                this.dataLineWidth = null;
                this.legendWidth = null;
                this.legendBoxSize = null;
                this.legendIndent = null;
                this.colors = null;
                this.dataCanvas = null;
                this.dctx = null;
                this.dataCanvasBuffer = null;
                this.bctx = null;
                this.canvas = document.createElement('canvas');
                this.canvas.width = width;
                this.canvas.height = height;
                container.appendChild(this.canvas);
                this.ctx = this.canvas.getContext('2d');
                this.labelStyle = 'rgba(200, 200, 200, 0.6)';
                this.maxValue = options.maxValue || 50;
                this.padding = options.labelPadding || 5;
                this.dataLineWidth = options.lineWidth || 1;
                this.legendWidth = 230;
                this.legendBoxSize = 10;
                this.legendIndent = 5;
                this.eventY = this.padding * 2;
                this.colors = colors;
                this.dataCanvas = document.createElement('canvas');
                this.dataCanvas.width = width - this.legendWidth;
                this.dataCanvas.height = height;
                this.dctx = this.dataCanvas.getContext('2d');
                this.dataCanvasBuffer = document.createElement('canvas');
                this.dataCanvasBuffer.width = this.dataCanvas.width - this.dataLineWidth;
                this.dataCanvasBuffer.height = this.dataCanvas.height;
                this.bctx = this.dataCanvasBuffer.getContext('2d');
            }
            Graph.prototype.addData = function (values, events) {
                // clear the main canvas
                this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
                this.drawBg();
                this.drawLegend(values);
                this.drawData(values, event);
            };
            Graph.prototype.drawBg = function () {
                var fps60 = Math.floor(this.canvas.height - (this.canvas.height * (16 / this.maxValue))) + 0.5, fps30 = Math.floor(this.canvas.height - (this.canvas.height * (33 / this.maxValue))) + 0.5;
                this.ctx.strokeStyle = this.ctx.fillStyle = this.labelStyle;
                this.ctx.lineWidth = 1;
                //draw top marker line
                this.ctx.beginPath();
                this.ctx.moveTo(this.legendWidth, fps60);
                this.ctx.lineTo(this.canvas.width, fps60);
                this.ctx.stroke();
                this.ctx.fillText('16ms (60 fps)', this.legendWidth + this.padding, fps60 - this.padding);
                //draw the second marker line
                this.ctx.beginPath();
                this.ctx.moveTo(this.legendWidth, fps30);
                this.ctx.lineTo(this.canvas.width, fps30);
                this.ctx.stroke();
                this.ctx.fillText('33ms (30 fps)', this.legendWidth + this.padding, fps30 - this.padding);
                //draw baseline marker
                this.ctx.beginPath();
                this.ctx.moveTo(this.legendWidth, this.canvas.height - 0.5);
                this.ctx.lineTo(this.canvas.width, this.canvas.height - 0.5);
                this.ctx.stroke();
            };
            Graph.prototype.drawLegend = function (values) {
                var colorIndex = 0, yIndex = 0, x = this.padding, y = 0;
                for (var k in values) {
                    y = (yIndex * this.legendBoxSize) + (this.padding * (yIndex + 1)) + this.padding;
                    // Draw parent label
                    this.ctx.fillStyle = this.labelStyle;
                    this.ctx.fillText(k, x, y);
                    ++yIndex;
                    // Draw children
                    for (var c in values[k]) {
                        y = (yIndex * this.legendBoxSize) + (this.padding * yIndex);
                        this.ctx.fillStyle = this.colors[colorIndex++ % this.colors.length];
                        this.ctx.fillRect(x + this.legendIndent, y, this.legendBoxSize, this.legendBoxSize);
                        this.ctx.fillStyle = this.labelStyle;
                        this.ctx.fillText(Math.round(values[k][c]) + 'ms - ' + c, x + this.legendIndent + this.legendBoxSize + this.padding, y + this.legendBoxSize);
                        ++yIndex;
                        if (yIndex > 16) {
                            x += this.legendWidth / 2;
                            yIndex = 0;
                        }
                    }
                }
            };
            Graph.prototype.drawData = function (values, event) {
                var x = this.dataCanvas.width - this.dataLineWidth + 0.5, y = this.dataCanvas.height - 0.5;
                // clear the buffer
                this.bctx.clearRect(0, 0, this.dataCanvasBuffer.width, this.dataCanvasBuffer.height);
                // draw the data canvas to the buffer, skipping the first line
                this.bctx.drawImage(this.dataCanvas, this.dataLineWidth, 0, x, y, 0, 0, x, y);
                // clear the data canvas
                this.dctx.clearRect(0, 0, this.dataCanvas.width, this.dataCanvas.height);
                // draw the buffer back to the data canvas
                this.dctx.drawImage(this.dataCanvasBuffer, 0, 0);
                // draw event to the new line of the data canvas if there was one
                if (event) {
                    this.dctx.beginPath();
                    this.dctx.strokeStyle = this.dctx.fillStyle = '#ff0000';
                    this.dctx.lineWidth = this.dataLineWidth;
                    this.dctx.moveTo(x, y);
                    this.dctx.lineTo(x, 0);
                    this.dctx.stroke();
                    this.dctx.textAlign = 'right';
                    this.dctx.fillText(event, x - this.padding, this.eventY);
                    this.eventY += (this.padding * 2);
                    if (this.eventY > (this.dataCanvas.height / 2)) {
                        this.eventY = (this.padding * 2);
                    }
                }
                // draws the data values to the new line of the data canvas
                // draw the new data points
                var colorIndex = 0, step = 0;
                for (var k in values) {
                    for (var c in values[k]) {
                        this.dctx.beginPath();
                        this.dctx.strokeStyle = this.dctx.fillStyle = this.colors[colorIndex++ % this.colors.length];
                        this.dctx.lineWidth = this.dataLineWidth;
                        step = ((values[k][c] / this.maxValue) * this.dataCanvas.height);
                        step = step < 0 ? 0 : step;
                        this.dctx.moveTo(x, y);
                        this.dctx.lineTo(x, y -= step);
                        this.dctx.stroke();
                    }
                }
                // draw the data canvas to the main rendered canvas
                this.ctx.drawImage(this.dataCanvas, this.legendWidth, 0);
            };
            Graph.prototype.destroy = function () {
                this.canvas = null;
                this.ctx = null;
                this.labelStyle = null;
                this.maxValue = null;
                this.padding = null;
                this.dataLineWidth = null;
                this.legendWidth = null;
                this.legendBoxSize = null;
                this.legendIndent = null;
                this.colors = null;
                this.dataCanvas = null;
                this.dctx = null;
                this.dataCanvasBuffer = null;
                this.bctx = null;
            };
            return Graph;
        })();
        Debug.Graph = Graph;
    })(Debug = Fabrique.Debug || (Fabrique.Debug = {}));
})(Fabrique || (Fabrique = {}));
var scriptSource = (function () {
    var scripts = document.getElementsByTagName('script'), script = scripts[scripts.length - 1];
    var src;
    if (script.getAttribute.length !== undefined) {
        src = script.src;
    }
    else {
        src = script.getAttribute('src', -1);
    }
    return src.slice(0, src.lastIndexOf('/') + 1);
})();
var Fabrique;
(function (Fabrique) {
    var Ui = (function () {
        function Ui() {
        }
        Ui.addClass = function (dom, cls) {
            var classes = dom.className.split(' ');
            classes.push(cls);
            dom.className = classes.join(' ').trim();
        };
        Ui.setText = function (dom, txt, somehting) {
            dom.textContent = txt;
        };
        Ui.setStyle = function (dom, style, value) {
            if (typeof style === 'string') {
                dom.style[style] = value;
            }
            else {
                for (var key in style) {
                    dom.style[key] = style[key];
                }
            }
        };
        Ui.addCss = function (cssUrl) {
            var link = document.createElement('link');
            link.setAttribute('rel', 'stylesheet');
            link.setAttribute('type', 'text/css');
            link.setAttribute('href', scriptSource + cssUrl);
            document.getElementsByTagName('head')[0].appendChild(link);
        };
        Ui.delegate = function (dom, evt, selector, fn) {
            dom.addEventListener(evt, function (e) {
                var target = e.target;
                window['target'] = target;
                if (e.target && target.matches(selector)) {
                    e.delegateTarget = target;
                    if (fn) {
                        fn(e);
                    }
                }
                else if (target.parentElement && target.parentElement.matches(selector)) {
                    e.delegateTarget = target.parentElement;
                    if (fn) {
                        fn(e);
                    }
                }
            });
        };
        Ui.on = function (dom, evt, delegate, fn) {
            if (delegate) {
                return Ui.delegate(dom, evt, delegate, fn);
            }
            dom.addEventListener(evt, fn);
        };
        Ui.removeClass = function (dom, cls) {
            var classes = dom.className.split(' '), i = classes.indexOf(cls);
            if (i !== -1) {
                classes.splice(i, 1);
                dom.className = classes.join(' ').trim();
            }
        };
        Ui.hasClass = function (dom, cls) {
            return dom.className.split(' ').indexOf(cls) !== -1;
        };
        Ui.toggleClass = function (dom, cls) {
            if (Ui.hasClass(dom, cls)) {
                Ui.removeClass(dom, cls);
            }
            else {
                Ui.addClass(dom, cls);
            }
        };
        Ui.setHtml = function (dom, html) {
            dom.innerHTML = html;
        };
        Ui.empty = function (dom) {
            while (dom.firstChild) {
                dom.removeChild(dom.firstChild);
            }
        };
        Ui.show = function (dom) {
            Ui.setStyle(dom, 'display', 'block');
        };
        Ui.hide = function (dom) {
            Ui.setStyle(dom, 'display', 'none');
        };
        Ui.clear = function () {
            var br = document.createElement('br');
            Ui.setStyle(br, 'clear', 'both');
            return br;
        };
        return Ui;
    })();
    Fabrique.Ui = Ui;
})(Fabrique || (Fabrique = {}));
// polyfill for matchesSelector
if (!HTMLElement.prototype.matches) {
    var htmlprot = HTMLElement.prototype;
    htmlprot.matches =
        htmlprot.matches ||
            htmlprot.webkitMatchesSelector ||
            htmlprot.mozMatchesSelector ||
            htmlprot.msMatchesSelector ||
            htmlprot.oMatchesSelector ||
            function (selector) {
                // poorman's polyfill for matchesSelector
                var elements = this.parentElement.querySelectorAll(selector), element, i = 0;
                while (element = elements[i++]) {
                    if (element === this) {
                        return true;
                    }
                }
                return false;
            };
}
if (Phaser.GAMES.length > 0) {
    //Attach to the first Phaser game there is
    Phaser.Device.whenReady(function () {
        Phaser.GAMES[0].plugins.add(Fabrique.Plugins.Debug);
    });
}
//# sourceMappingURL=phaser-advanced-debug.js.map