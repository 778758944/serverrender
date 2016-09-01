webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(34);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _components = __webpack_require__(172);

	var _components2 = _interopRequireDefault(_components);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_reactDom2.default.render(_react2.default.createElement(_components2.default, { name: 'messi' }), document.getElementById('react-root')); /**
	                                                                                                                                           * 
	                                                                                                                                           * @authors Your Name (you@example.org)
	                                                                                                                                           * @date    2016-08-29 15:07:54
	                                                                                                                                           * @version $Id$
	                                                                                                                                           */

/***/ },

/***/ 172:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(1);

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

});