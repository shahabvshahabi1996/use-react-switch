import React, { Component } from 'react'

import Switch from 'use-react-switch'

export default class App extends Component {

  state = {
    isOpen : false
  }

  changeSwicthHandler = () => {
    return this.setState({isOpen : !this.state.isOpen});
  }

  render () {
    return (
      <div style={{padding : 15}}>
        <Switch
        name="switch" 
        isOpen={false} />
        <br/>
        <Switch
        name="switch" 
        isOpen={true} />
      </div>
    )
  }
}
