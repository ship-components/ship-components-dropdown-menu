(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"), require("classnames"), require("react-dom"), require("react-highlight-click"), require("react-outsideclick"));
	else if(typeof define === 'function' && define.amd)
		define(["React", "classnames", "react-dom", "react-highlight-click", "react-outsideclick"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("React"), require("classnames"), require("react-dom"), require("react-highlight-click"), require("react-outsideclick")) : factory(root["React"], root["classnames"], root["react-dom"], root["react-highlight-click"], root["react-outsideclick"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_10__, __WEBPACK_EXTERNAL_MODULE_11__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'
	
	/** ****************************************************************************
	 * DropdownMenu
	 *
	 * @author       Isaac Suttell <isaac_suttell@playstation.sony.com>
	 * @file         Open a dropdown menu upon clicking an icon
	 ******************************************************************************/
	
	;
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _reactOutsideclick = __webpack_require__(11);
	
	var _reactOutsideclick2 = _interopRequireDefault(_reactOutsideclick);
	
	var _utilities = __webpack_require__(7);
	
	var _MenuList = __webpack_require__(6);
	
	var _MenuList2 = _interopRequireDefault(_MenuList);
	
	var _MenuButton = __webpack_require__(4);
	
	var _MenuButton2 = _interopRequireDefault(_MenuButton);
	
	var _dropdownMenu = __webpack_require__(1);
	
	var _dropdownMenu2 = _interopRequireDefault(_dropdownMenu);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var DropdownMenu = (function (_React$Component) {
	  _inherits(DropdownMenu, _React$Component);
	
	  function DropdownMenu(props) {
	    _classCallCheck(this, DropdownMenu);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(DropdownMenu).call(this, props));
	
	    _this.state = {
	      active: false,
	      lastClick: {
	        x: 0,
	        y: 0
	      }
	    };
	
	    _this.handleClick = _this.handleClick.bind(_this);
	    _this.toggleMenu = _this.toggleMenu.bind(_this);
	    _this.handleClose = _this.handleClose.bind(_this);
	    return _this;
	  }
	
	  /**
	   * Only update if active or items change
	   * @param     {Object}    nextProps    Incoming props
	   * @param     {Object}    nextState    Incoming state
	   * @return    {Boolean}
	   */
	
	  _createClass(DropdownMenu, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      if (this.state.active !== nextState.active) {
	        return true;
	      } else if (this.props.items.length !== nextProps.items.length) {
	        return true;
	      }
	
	      var PROPS_TO_COMPARE = ['name', 'value'];
	
	      var keysEqual = function keysEqual(i, key) {
	        return this.props.items[i][key] === nextProps.items[i][key];
	      };
	
	      for (var i = 0; i < nextProps.items.length; i++) {
	        if (PROPS_TO_COMPARE.some(keysEqual.bind(this, i))) {
	          return true;
	        }
	      }
	
	      return false;
	    }
	
	    /**
	     * Close the entire menu
	     */
	
	  }, {
	    key: 'handleClose',
	    value: function handleClose() {
	      this.setState({
	        active: false
	      });
	    }
	
	    /**
	     * Call the user supplied action
	     * @param     {function}      action
	     * @param     {MouseEvent}    event
	     */
	
	  }, {
	    key: 'handleClick',
	    value: function handleClick(action, event) {
	      this.handleClose(event, action);
	      if (action) {
	        action(event);
	      }
	    }
	  }, {
	    key: 'getPositionRelativeToContainer',
	    value: function getPositionRelativeToContainer(event) {
	      var source = event.target;
	      // Search up the tree for the component node
	      while (source.parentNode) {
	        if (source.classList.contains('kards-app') || source === document.body) {
	          break;
	        }
	        source = source.parentNode;
	      }
	
	      var position = {
	        x: event.pageX - (source.offsetLeft || 0),
	        y: event.pageY - (source.offsetTop || 0)
	      };
	
	      return {
	        x: position.x / source.clientWidth,
	        y: position.y / source.clientHeight
	      };
	    }
	
	    /**
	     * Show or hide the menu
	     */
	
	  }, {
	    key: 'toggleMenu',
	    value: function toggleMenu(event) {
	      event.preventDefault();
	      var lastClick = this.getPositionRelativeToContainer(event);
	
	      this.setState({
	        active: !this.state.active,
	        lastClick: lastClick
	      });
	    }
	
	    /**
	     * Render it in gold
	     *
	     * @return    {React}
	     */
	
	  }, {
	    key: 'render',
	    value: function render() {
	      // Calc css styles
	      var menuStyles = (0, _classnames2.default)(this.props.className, _dropdownMenu2.default.menu, _defineProperty({}, _dropdownMenu2.default.active, this.state.active));
	
	      return _react2.default.createElement(
	        _reactOutsideclick2.default,
	        {
	          onClick: this.handleClose,
	          className: menuStyles },
	        _react2.default.createElement(_MenuButton2.default, _extends({}, this.props, {
	          onClick: this.toggleMenu,
	          onContextMenu: this.toggleMenu })),
	        _react2.default.createElement(_MenuList2.default, _extends({}, this.props, {
	          items: DropdownMenu.menu(this.props.items),
	          active: this.state.active,
	          onClick: this.handleClick }))
	      );
	    }
	  }]);
	
	  return DropdownMenu;
	})(_react2.default.Component);
	
	/**
	 * Set some defaults
	 * @static
	 * @type    {Object}
	 */
	
	exports.default = DropdownMenu;
	DropdownMenu.defaultProps = {
	  className: '',
	  customButton: null,
	  menuIconClass: 'icon-cog',
	  moreIconClass: 'icon-play_arrow'
	};
	
	/**
	 * Validate the prop types
	 * @static
	 * @type    {Object}
	 */
	DropdownMenu.propTypes = {
	  className: _react2.default.PropTypes.string,
	  direction: _react2.default.PropTypes.string,
	  menuIconClass: _react2.default.PropTypes.string,
	  items: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.object).isRequired
	};
	
	/**
	 * Internal counter to ensure unique keys
	 * @type    {Number}
	 */
	var _uniqueId = 0;
	
	/**
	 * Deeply search the menu and ensure every item has a unique key
	 * @param  {Array<Object>} items
	 * @return {Array<Object>}
	 */
	DropdownMenu.menu = function menu() {
	  var items = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
	
	  return items.map(function (item) {
	    if (!item.key && item.name) {
	      item.key = (0, _utilities.hashCode)(item.name);
	    } else if (!item.key) {
	      item.key = 'dd' + (_uniqueId++).toString();
	    }
	
	    if (item.menu) {
	      item.menu = DropdownMenu.menu(item.menu);
	    }
	
	    return item;
	  });
	};

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"list":"dropdown-menu--list","label":"dropdown-menu--label","active":"dropdown-menu--active","child":"dropdown-menu--child","menu":"dropdown-menu--menu","item":"dropdown-menu--item","divider":"dropdown-menu--divider","name":"dropdown-menu--name","icon":"dropdown-menu--icon","checkbox":"dropdown-menu--checkbox","control":"dropdown-menu--control"};

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'
	
	/** ****************************************************************************
	 * MenuButton
	 *
	 * @author       Isaac Suttell <isaac@isaacsuttell.com>
	 * @file         Open a dropdown menu upon clicking an icon
	 ******************************************************************************/
	
	;
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _reactHighlightClick = __webpack_require__(10);
	
	var _reactHighlightClick2 = _interopRequireDefault(_reactHighlightClick);
	
	var _objectAssign = __webpack_require__(8);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var _dropdownMenu = __webpack_require__(1);
	
	var _dropdownMenu2 = _interopRequireDefault(_dropdownMenu);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var MenuButton = (function (_React$Component) {
	  _inherits(MenuButton, _React$Component);
	
	  function MenuButton() {
	    _classCallCheck(this, MenuButton);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(MenuButton).apply(this, arguments));
	  }
	
	  _createClass(MenuButton, [{
	    key: 'render',
	    value: function render() {
	
	      var props = {};
	      if (this.props.customButton) {
	        (0, _objectAssign2.default)(props, this.props.customButton.props);
	      } else {
	        (0, _objectAssign2.default)(props, {
	          className: this.props.menuIconClass
	        });
	      }
	
	      props.className = (0, _classnames2.default)(props.className, 'dropdown-menu--control', _dropdownMenu2.default.control);
	
	      this.__component = this.props.customButton ? this.props.customButton.component : 'span';
	
	      return _react2.default.createElement(
	        _reactHighlightClick2.default,
	        null,
	        _react2.default.createElement(this.__component, _extends({}, props, {
	          onContextMenu: this.props.onContextMenu,
	          onClick: this.props.onClick }))
	      );
	    }
	  }]);
	
	  return MenuButton;
	})(_react2.default.Component);
	
	exports.default = MenuButton;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'
	
	/** ****************************************************************************
	 * MenuItem
	 *
	 * @author       Isaac Suttell <isaac@isaacsuttell.com>
	 * @file         Open a dropdown menu upon clicking an icon
	 ******************************************************************************/
	
	;
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _dropdownMenu = __webpack_require__(1);
	
	var _dropdownMenu2 = _interopRequireDefault(_dropdownMenu);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var MenuItem = (function (_React$Component) {
	  _inherits(MenuItem, _React$Component);
	
	  function MenuItem() {
	    _classCallCheck(this, MenuItem);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(MenuItem).apply(this, arguments));
	  }
	
	  _createClass(MenuItem, [{
	    key: 'handleClick',
	
	    /**
	     * Pass the action if we have it
	     * @param     {function}      action    User supplied action
	     * @param     {MouseEvent}    event
	     */
	    value: function handleClick(action, event) {
	      if (action) {
	        this.props.onClick(action, event);
	      }
	    }
	
	    /**
	     * Render a divider
	     * @return    {React}
	     */
	
	  }, {
	    key: 'renderDivider',
	    value: function renderDivider() {
	      return _react2.default.createElement('li', {
	        onMouseOver: this.props.onMouseOver,
	        onMouseOut: this.props.onMouseOut,
	        className: (0, _classnames2.default)('dropdown-menu--item', 'dropdown-menu--divider', _dropdownMenu2.default.divider, _dropdownMenu2.default.item),
	        key: this.props.key });
	    }
	
	    /**
	     * Render a checkbox
	     * @return    {React}
	     */
	
	  }, {
	    key: 'renderCheckbox',
	    value: function renderCheckbox() {
	      return _react2.default.createElement(
	        'li',
	        {
	          onMouseOver: this.props.onMouseOver,
	          onMouseOut: this.props.onMouseOut,
	          className: (0, _classnames2.default)('dropdown-menu--item', _dropdownMenu2.default.item, this.props.className),
	          key: this.props.name,
	          onClick: this.handleClick.bind(this, this.props.action) },
	        _react2.default.createElement(
	          'div',
	          { className: (0, _classnames2.default)('dropdown-menu--icon', _dropdownMenu2.default.icon, this.props.iconClass) },
	          _react2.default.createElement('input', {
	            style: { display: 'none' },
	            type: 'checkbox',
	            className: (0, _classnames2.default)('dropdown-menu--checkbox', _dropdownMenu2.default.checkbox),
	            readOnly: true,
	            checked: this.props.value })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: (0, _classnames2.default)('dropdown-menu--name', _dropdownMenu2.default.name, _defineProperty({}, _dropdownMenu2.default.label, this.props.label)) },
	          this.props.name
	        )
	      );
	    }
	  }, {
	    key: 'renderChildMenu',
	    value: function renderChildMenu() {
	      if (!this.props.menu) {
	        return null;
	      }
	
	      var menu = this.props.menu;
	      if (!this.props.isMouseOver) {
	        menu = null;
	      }
	      return _react2.default.createElement(
	        'div',
	        { className: (0, _classnames2.default)('drop-down-menu--child', _dropdownMenu2.default.child) },
	        this.props.menu ? _react2.default.createElement('div', { className: (0, _classnames2.default)('dropdown-menu--icon', _dropdownMenu2.default.icon, this.props.moreIconClass) }) : null,
	        menu
	      );
	    }
	
	    /**
	     * Default list item
	     * @return    {React}
	     */
	
	  }, {
	    key: 'renderDefault',
	    value: function renderDefault() {
	      var itemClasses = (0, _classnames2.default)('dropdown-menu--item', _dropdownMenu2.default.item, _defineProperty({
	        'dropdown-menu--active': this.props.isMouseOver
	      }, _dropdownMenu2.default.active, this.props.isMouseOver));
	
	      return _react2.default.createElement(
	        'li',
	        {
	          onMouseOver: this.props.onMouseOver,
	          onMouseOut: this.props.onMouseOut,
	          className: itemClasses,
	          key: this.props.name,
	          onClick: this.handleClick.bind(this, this.props.action) },
	        _react2.default.createElement('div', { className: (0, _classnames2.default)('dropdown-menu--icon', _dropdownMenu2.default.icon, this.props.iconClass) }),
	        _react2.default.createElement(
	          'div',
	          { className: (0, _classnames2.default)('dropdown-menu--name', _dropdownMenu2.default.name) },
	          this.props.name
	        ),
	        this.renderChildMenu()
	      );
	    }
	
	    /**
	     * Render a list of menu items
	     *
	     * @return    {React}
	     */
	
	  }, {
	    key: 'render',
	    value: function render() {
	      if (this.props.hidden === true) {
	        return null;
	      } else if (this.props.type === 'divider') {
	        return this.renderDivider();
	      } else if (this.props.type === 'checkbox') {
	        return this.renderCheckbox();
	      } else {
	        return this.renderDefault();
	      }
	    }
	  }]);
	
	  return MenuItem;
	})(_react2.default.Component);
	
	/**
	 * Set some defaults
	 * @static
	 * @type    {Object}
	 */
	
	exports.default = MenuItem;
	MenuItem.defaultProps = {
	  className: '',
	  isMouseOver: false,
	  menu: null,
	  hidden: false,
	  moreIconClass: 'icon-play_arrow',
	  onMouseOut: function onMouseOut() {},
	  onMouseOver: function onMouseOver() {}
	};
	
	/**
	 * Validate the prop types
	 * @static
	 * @type    {Object}
	 */
	MenuItem.propTypes = {
	  className: _react2.default.PropTypes.string,
	  item: _react2.default.PropTypes.object
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'
	
	/** ****************************************************************************
	 * MenuList
	 *
	 * @author       Isaac Suttell <isaac@isaacsuttell.com>
	 * @file         Open a dropdown menu upon clicking an icon
	 ******************************************************************************/
	
	;
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(9);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _MenuItem = __webpack_require__(5);
	
	var _MenuItem2 = _interopRequireDefault(_MenuItem);
	
	var _dropdownMenu = __webpack_require__(1);
	
	var _dropdownMenu2 = _interopRequireDefault(_dropdownMenu);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var MenuList = (function (_React$Component) {
	  _inherits(MenuList, _React$Component);
	
	  /**
	   * Boot it up
	   * @param     {Object}    props
	   */
	
	  function MenuList(props) {
	    _classCallCheck(this, MenuList);
	
	    var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(MenuList).call(this, props));
	
	    _this2.state = {
	      mouseOver: -1,
	      visible: props.items.map(function () {
	        return false;
	      }),
	      offset: {
	        x: 0,
	        y: 0
	      }
	    };
	    _this2.updateOffset = _this2.updateOffset.bind(_this2);
	    return _this2;
	  }
	
	  /**
	   * Setup offsets so we can position the menu dynamically
	   * @return {[type]} [description]
	   */
	
	  _createClass(MenuList, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.updateOffset();
	      window.addEventListener('resize', this.updateOffset);
	    }
	
	    /**
	     * Try to limit when we update
	     * @param  {Object} nextProps
	     * @param  {Object} nextState
	     * @return {Boolean}
	     */
	
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      if (nextState.offset.x !== this.state.offset.x || nextState.offset.y !== this.state.offset.y) {
	        return true;
	      } else if (nextState.mouseOver !== this.state.mouseOver) {
	        return true;
	      } else if (nextProps.active !== this.props.active) {
	        return true;
	      } else {
	        return false;
	      }
	    }
	
	    /**
	     * Cleaup
	     */
	
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      window.removeEventListener('resize', this.updateOffset);
	    }
	
	    /**
	     * Get width of this
	     * @return {Number}
	     */
	
	  }, {
	    key: 'getOuterWidth',
	    value: function getOuterWidth(el) {
	      el = el || _reactDom2.default.findDOMNode(this);
	      return this.calculateOuter(el, [],
	      // ['margin-left', 'margin-right', 'padding-left', 'padding-right', 'border-left-width', 'border-right-width'],
	      el.offsetWidth);
	    }
	
	    /**
	     * Get height of this
	     * @return {Number}
	     */
	
	  }, {
	    key: 'getOuterHeight',
	    value: function getOuterHeight(el) {
	      el = el || _reactDom2.default.findDOMNode(this);
	      return this.calculateOuter(el, [],
	      // ['margin-top', 'margin-top', 'padding-top', 'padding-top', 'border-top-width', 'border-bottom-width'],
	      el.offsetHeight);
	    }
	
	    /**
	     * Try to calculate the absolute width/height of an element so we can position it
	     * @param  {Node}          el
	     * @param  {Array<string>} styleNames
	     * @param  {Number}        initial
	     * @return {Number}
	     */
	
	  }, {
	    key: 'calculateOuter',
	    value: function calculateOuter(el, styleNames) {
	      var initial = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];
	
	      var style = el.currentStyle || window.getComputedStyle(el);
	      return styleNames.map(function (item) {
	        return style[item];
	      }).filter(function (item) {
	        return !!item;
	      }).reduce(function (current, item) {
	        var val = parseInt(item, 10);
	        return current + (isNaN(val) ? 0 : val);
	      }, initial);
	    }
	
	    /**
	     * Calculate how far left we need to move a submenu to always be visible
	     * @param   {Node} el
	     * @return  {Number}
	     */
	
	  }, {
	    key: 'getParentOffset',
	    value: function getParentOffset(el) {
	      var parentWidth = this.getOuterWidth(el);
	      var parentPosition = this.getPositionRelativeToContainer(el);
	      var parentOffset = Math.max(0, parentPosition.right - parentWidth);
	      return parentWidth + parentOffset;
	    }
	
	    /**
	     * Calculate and update offset if need be
	     */
	
	  }, {
	    key: 'updateOffset',
	    value: function updateOffset() {
	      var el = _reactDom2.default.findDOMNode(this);
	
	      // Not mounted yet
	      if (!el) {
	        return;
	      }
	
	      // Get relative positions to edge of container
	      var position = this.getPositionRelativeToContainer(el);
	
	      // Make sure to create a new instance
	      var offset = {
	        x: this.state.offset.x,
	        y: this.state.offset.y
	      };
	
	      // Check to see if we can find a parent
	      var parentList = _reactDom2.default.findDOMNode(this.props.parent);
	
	      // Width
	      if (el.clientWidth > position.right) {
	        offset.x = position.right - this.getOuterWidth() - this.props.scrollbar.width - this.props.overlap;
	
	        // Open the menu to the left of the parent if we have no room
	        if (parentList) {
	          offset.x -= this.getParentOffset(parentList) + this.props.scrollbar.width * 2;
	        }
	      }
	
	      // Height
	      if (el.clientHeight > position.bottom) {
	        offset.y = position.bottom - this.getOuterHeight() - this.props.scrollbar.height - this.props.overlap;
	      }
	
	      this.setState({
	        offset: offset
	      });
	    }
	
	    /**
	     * Calculate and add up the distances to each edge of the container
	     * @param  {Node} el
	     * @return {Object}
	     */
	
	  }, {
	    key: 'getPositionRelativeToContainer',
	    value: function getPositionRelativeToContainer(el) {
	      var source = el.offsetParent;
	
	      var position = {
	        x: 0,
	        y: 0
	      };
	
	      // Search up the tree for the component node
	      while (source.offsetParent) {
	        if (source === document.body) {
	          // Stop at the container
	          break;
	        }
	
	        // Add it all up
	        position.x += source.offsetLeft - source.scrollLeft;
	        position.y += source.offsetTop - source.scrollTop;
	
	        source = source.offsetParent;
	      }
	
	      position.x -= source.scrollLeft;
	      position.y -= source.scrollTop;
	
	      if (source === document.body) {
	        position.right = window.innerWidth - position.x;
	        position.bottom = window.innerHeight - position.y;
	      } else {
	        position.right = source.offsetWidth - position.x;
	        position.bottom = source.offsetHeight - position.y;
	      }
	
	      return position;
	    }
	
	    /**
	     * Get recursive sub menu
	     * @param     {Array<Objects>}    item
	     * @return    {React}
	     */
	
	  }, {
	    key: 'getMenu',
	    value: function getMenu(item) {
	      if (!item.menu) {
	        return null;
	      }
	      return _react2.default.createElement(MenuList, _extends({}, this.props, {
	        parent: this,
	        items: item.menu
	      }));
	    }
	
	    /**
	     * Hover and show when sub menus
	     * @param     {Number}    index
	     */
	
	  }, {
	    key: 'handleMouseOverItem',
	    value: function handleMouseOverItem(index) {
	      var visible = this.state.visible.slice(0);
	
	      // Ensure only one is visible
	      visible = visible.map(function (item, i) {
	        return i === index;
	      });
	
	      clearTimeout(this.menuDelay);
	      this.setState({
	        mouseOver: index,
	        visible: visible
	      });
	    }
	
	    /**
	     * Remove hidden items and duplicate dividers
	     * @return {Array<Objects>}
	     */
	
	  }, {
	    key: 'getItems',
	    value: function getItems() {
	      var _last = undefined;
	      return (this.props.items || []).filter(function (item) {
	        return item.hidden !== true;
	      }).filter(function (item) {
	        if (_last && _last.type === 'divider' && _last.type === item.type) {
	          return false;
	        }
	        _last = item;
	        return true;
	      });
	    }
	
	    /**
	     * Render it in gold
	     *
	     * @return    {React}
	     */
	
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this = this;
	
	      if (!this.props.active) {
	        return null;
	      }
	
	      var styles = {
	        left: this.state.offset.x,
	        top: this.state.offset.y
	      };
	
	      return _react2.default.createElement(
	        'ul',
	        { style: styles,
	          className: (0, _classnames2.default)('dropdown-menu--list', _dropdownMenu2.default.list) },
	        this.getItems().map(function (menuItem, index) {
	          return _react2.default.createElement(_MenuItem2.default, _extends({
	            key: menuItem.key || menuItem.name
	          }, _this.props, menuItem, {
	            menu: _this.getMenu(menuItem),
	            isMouseOver: _this.state.visible[index],
	            onMouseOver: _this.handleMouseOverItem.bind(_this, index)
	          }));
	        })
	      );
	    }
	  }]);
	
	  return MenuList;
	})(_react2.default.Component);
	
	/**
	 * Set some defaults
	 * @static
	 * @type    {Object}
	 */
	
	exports.default = MenuList;
	MenuList.defaultProps = {
	  active: true,
	  scrollbar: {
	    height: 16,
	    width: 16
	  },
	  overlap: 4,
	  className: '',
	  items: []
	};
	
	/**
	 * Validate the prop types
	 * @static
	 * @type    {Object}
	 */
	MenuList.propTypes = {
	  className: _react2.default.PropTypes.string,
	  items: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.object)
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict'
	
	/**
	 * Generate a hash from a string used for shorter keys
	 * @param  {string} str [description]
	 * @return {Number}
	 */
	;
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.hashCode = hashCode;
	function hashCode(str) {
	  var hash = 0;
	  if (str.length === 0) {
	    return hash;
	  }
	  for (var i = 0, len = str.length; i < len; i++) {
	    var chr = str.charCodeAt(i);
	    hash = (hash << 5) - hash + chr;
	    hash |= 0; // Convert to 32bit integer
	  }
	  return hash;
	}

/***/ },
/* 8 */
/***/ function(module, exports) {

	/* eslint-disable no-unused-vars */
	'use strict';
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	
	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}
	
		return Object(val);
	}
	
	module.exports = Object.assign || function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;
	
		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);
	
			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}
	
			if (Object.getOwnPropertySymbols) {
				symbols = Object.getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}
	
		return to;
	};


/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_10__;

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_11__;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=DropdownMenu.js.map