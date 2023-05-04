import React, { Component } from 'react'

export default class LoginButton extends Component {
    constructor(props){
        super(props);
    }


  render() {
    return (
        <button style={this.props.style} onClick={this.props.onClick}>
        {this.props.text}
      </button>
    )
  }
}
