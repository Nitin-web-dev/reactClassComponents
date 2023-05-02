import React from "react"
import TechList from "./TechList"
export default class Main extends React.Component {
    constructor(props) {
      super(props)
    }
    render() {
        const tchl = this.props.techlist;
      return (
        <main>
          <div className='main-wrapper'>
            <p>Prerequisite to get started react.js:</p>
            <ul>
              <TechList  tchlist = {tchl}/>
            </ul>
          </div>
        </main>
      )
    }
  }