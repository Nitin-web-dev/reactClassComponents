import React from "react"
export default class Footer extends React.Component {
    constructor(props) {
      super(props)
    }
    render() {
      return (
        <footer>
          <div className='footer-wrapper'>
            <p>Copyright 2020</p>
          </div>
        </footer>
      )
    }
  }