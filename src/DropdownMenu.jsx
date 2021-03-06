/** ****************************************************************************
 * DropdownMenu
 *
 * @author       Isaac Suttell <isaac@isaacsuttell.com>
 * @contributor  Sepand Assadi <sepand.assadi@sony.com>
 * @file         Open a dropdown menu upon clicking an icon
 ******************************************************************************/

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import OutsideClick from 'ship-components-outsideclick';

import { hashCode } from './utilities';
import MenuList from './MenuList';
import MenuButton from './MenuButton';

import css from './dropdown-menu.css';

export default class DropdownMenu extends React.Component {

  /**
   * Initialize
   * @param  {Object} props
   */
  constructor(props) {
    super(props);

    this.state = {
      active: props.readOnly ? props.initialActive : false
    };

    this.handleClick = this.handleClick.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.readOnly) {
      this.setState({
        active: nextProps.initialActive
      });
    }
  }

  /**
   * Only update if active or items change
   * @param     {Object}    nextProps    Incoming props
   * @param     {Object}    nextState    Incoming state
   * @return    {Boolean}
   */
  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.active !== nextState.active) {
      return true;
    } else if(this.props.items.length !== nextProps.items.length) {
      return true;
    }

    let PROPS_TO_COMPARE = ['name', 'value'];

    let keysEqual = function(i, key) {
      return this.props.items[i][key] === nextProps.items[i][key];
    };

    for (let i = 0; i < nextProps.items.length; i++) {
      if (PROPS_TO_COMPARE.some(keysEqual.bind(this, i))) {
        return true;
      }
    }

    return false;
  }

  /**
   * Close the entire menu
   */
  handleClose() {
    if(!this.props.readOnly) {
      this.setState({
        active: false
      });
    }
    if (this.props.onClose) {
      this.props.onClose();
    }
  }

  /**
   * Call the user supplied action
   * @param     {function}      action
   * @param     {MouseEvent}    event
   */
  handleClick(action, event) {
    if (action) {
      action(event);
    }
    this.handleClose(event, action);
  }

  /**
   * Either execute a function or do a strict comparison
   * @param  {Element} source
   * @return {Boolean}
   */
  sourceIsContainer(source) {
    if (source === document.body) {
     // Never go higher up the chain than the body
     return true;
    } else if (typeof this.props.container === 'function') {
      // User supplied a function so use that
      return this.props.container.call(this, source);
    } else {
      // Strict compare if we're not passed a function
      return source === this.props.container;
    }
  }

  /**
   * Show or hide the menu
   */
  toggleMenu(event) {
    event.preventDefault();
    event.stopPropagation();

    if (this.props.readOnly) {
      return;
    }

    this.setState({
      active: !this.state.active
    });
  }

  getMenuClasses(){
    return classNames(
      'dropdown-menu',
      this.props.className,
      css.menu,
      {
        [css.active]  : this.state.active
      }
    );
  }

  /**
   * Render it in gold
   *
   * @return    {React}
   */
  render() {
    return (
      <OutsideClick
        ref='container'
        onClick={this.handleClose}
        onContextMenu={this.handleClose}
        className={this.getMenuClasses()}
      >
          {this.props.showMenuButton ?
            <MenuButton
              {...this.props}
              onClick={this.toggleMenu}
              onContextMenu={this.toggleMenu}
            />
          : null}
          <MenuList
            {...this.props}
            isContainer={this.sourceIsContainer.bind(this)}
            items={DropdownMenu.menu(this.props.items)}
            active={this.state.active}
            onClick={this.handleClick}
          />
      </OutsideClick>
    );
  }

}

/**
 * Set some defaults
 * @static
 * @type    {Object}
 */
DropdownMenu.defaultProps = {
  readOnly: false,
  showMenuButton: true,
  menuIconClass: 'icon-cog',
  moreIconClass: 'icon-play_arrow',
  container: document.body,
  offsetMenu: {
    x: 0,
    y: 0
  }
};

/**
 * Validate the prop types
 * @static
 * @type    {Object}
 */
DropdownMenu.propTypes = {
  className: PropTypes.string,
  container: PropTypes.oneOfType([PropTypes.node, PropTypes.func, PropTypes.oneOf([document.body])]),
  direction: PropTypes.string,
  menuIconClass: PropTypes.string,
  moreIconClass: PropTypes.string,
  readOnly: PropTypes.bool,
  initialActive: PropTypes.bool,
  showMenuButton: PropTypes.bool,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  offsetMenu: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  })
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
DropdownMenu.menu = function menu(items = []) {
  return items.map((item) => {
    if (!item.key && item.name) {
      item.key = hashCode(item.name);
    } else if(!item.key) {
      item.key = 'dd' + (_uniqueId++).toString();
    }

    if(item.menu) {
      item.menu = DropdownMenu.menu(item.menu);
    }

    return item;
  });
}
