import React, { Component } from 'react'
import './App.css';
import LoginButton from './components/LoginButton';
// import Header from './components/Header';
// import Main from './components/Main'; 
// import Footer from './components/Footer';
// import Count from './components/Count';


export default class App extends Component {
  constructor(props){
    super(props);
  }
  state = {
    isLogin : false
  }


  handleLogin = () =>{
    this.setState({isLogin: !this.state.isLogin});
  }


  render() {
    // CSS styles in JavaScript Object
      const buttonStyles = {
        backgroundColor: '#61dbfb',
        padding: 10,
        border: 'none',
        borderRadius: 5,
        margin: '3px auto',
        cursor: 'pointer',
        fontSize: 22,
        color: 'white',
      };



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
    
    let status='';
    let text='';
    if (this.state.isLogin) {
      status = <h1>Welcome to 30 Days Of React</h1>
      text = 'Logout'
    } else {
      status = <h3>Please Login</h3>
      text = 'Login'
    }
    
 



    return (
      <div>
         <div className='App'>
        {status}
        <LoginButton  style={buttonStyles} text={text} onClick={this.handleLogin}/>
        {/* <Header  data = {data}/>
        <Main techlist={techs}/>
        <Footer /> 
        <Count /> */}
          </div>
        
      </div>
    )
  }
}

