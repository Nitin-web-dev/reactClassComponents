import React, { Component } from 'react';

export default class Header extends Component {
    constructor(props){
        super(props);
    }
  render() {
    // destructure the props 
    const {welcome, title,subtitle,author,date} = this.props.data;
    return (
        <header>
      
          <h1>{welcome}</h1>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <p>{`${author.firstName} ${author.lastName}`}</p>
          <small>{date}</small>
        
        </header>
    )
  }
}
