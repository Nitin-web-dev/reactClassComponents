import React, { Component } from 'react'

export default class TechList extends Component {
    constructor(props){
        super(props);
    }
  render() {
 
    
    const techsFormatted = this.props.tchlist.map((tech,i) => <li key={i}>{tech}</li>)
    return techsFormatted
  }
}
