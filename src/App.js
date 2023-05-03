import React, { Component } from 'react'
import './App.css';
// import Header from './components/Header';
// import Main from './components/Main'; 
// import Footer from './components/Footer';
import Count from './components/Count';


export default class App extends Component {
  constructor(props){
    super(props);
  }
  render() {

    const data = {
      welcome: 'Welcome to 30 Days Of React',
      title: 'Getting Started React',
      subtitle: 'JavaScript Library',
      author: {
        firstName: 'sAM',
        lastName: 'sINGH',
      },
      date: 'Oct 7, 2020',
    };

    const techs = ['HTML', 'CSS', 'JavaScript','react'];

    return (
      <div>
         <div className='App'>
        {/* <Header  data = {data}/>
        <Main techlist={techs}/>
        <Footer />  */}
        <Count />
          </div>
        
      </div>
    )
  }
}

