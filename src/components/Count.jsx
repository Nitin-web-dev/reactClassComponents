import React, { Component } from 'react'

export default class Count extends Component {
    constructor(props){
        super(props);
    }
  // declaring state
  state = {
    count: 0,
  }
  // method which add one to the state

  addOne = () => {
    this.setState({ count: this.state.count + 1 })
  }

  // method which subtract one to the state
  minusOne = () => {
    this.setState({ count: this.state.count - 1 })
  }
  render() {
      return (

        <div >
        <h1>{this.state.count} </h1>

        <div>
          <button className='btn btn-add' onClick={this.addOne}>
            +1
          </button>
          <button className='btn btn-minus' onClick={this.minusOne}>
            -1
          </button>
        </div>
      </div>


      
    )
  }
}
