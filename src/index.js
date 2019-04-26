import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './styles.css';

export default class Switch extends Component {
  
  static PropTypes = {
    isOpen : PropTypes.bool.isRequired,
    onClick : PropTypes.func,
    containerStyles : PropTypes.object,
    toggleStyles : PropTypes.object,
    name : PropTypes.string,
  }

  constructor() {
    super();
    this.state = {
      active : false
    }
  }

  render() {
      let {active} = this.state;
      return (    
          <div onClick={this.props.onClick} className="switch-wrapper">
              <div style={this.props.containerStyles} className={`switch-body ${this.props.isOpen ? 'switch-active' : ''}`}>
                  <div style={this.props.toggleStyles} className={`switch-toggle ${this.props.isOpen ? 'switch-toggle-active' : ''}`}></div>
              </div>
              <span>{this.props.placeholder}</span>
              <input checked={active} name={this.props.name} type="checkbox" />
          </div>
      )
  }
}
