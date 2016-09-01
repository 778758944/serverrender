/******/ (function(modules) { // webpackBootstrap
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
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-dom\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _components = __webpack_require__(170);

	var _components2 = _interopRequireDefault(_components);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_reactDom2.default.render(_react2.default.createElement(_components2.default, { name: 'messi' }), document.getElementById('react-root')); /**
	                                                                                                                                           * 
	                                                                                                                                           * @authors Your Name (you@example.org)
	                                                                                                                                           * @date    2016-08-29 15:07:54
	                                                                                                                                           * @version $Id$
	                                                                                                                                           */

/***/ },

/***/ 170:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var HelloMessage = _react2.default.createClass({
		displayName: 'HelloMessage',

		handleClick: function handleClick() {
			alert('you clicked');
		},

		componentWillMount: function componentWillMount() {
			// console.log('sdsdsds')
		},

		componentDidMount: function componentDidMount() {
			console.log('did mount');
		},

		render: function render() {
			return _react2.default.createElement(
				'div',
				{ onClick: this.handleClick },
				'Hello ',
				this.props.name
			);
		}
	}); /**
	     * 
	     * @authors Your Name (you@example.org)
	     * @date    2016-08-29 11:11:06
	     * @version $Id$
	     */
	exports.default = HelloMessage;

/***/ }

/******/ });