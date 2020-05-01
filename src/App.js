import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './modules/header';
import Users from './modules/users'
import NewArticle from './modules/new_article';
import Articles from './modules/articles';

class App extends React.Component {
  constructor(){
    super();
    this.state ={
      curr: 0,
      active : {
        0 : <Articles/>,
        1 : <Users/>,
        2 : <NewArticle switchPage={this.switchPage.bind(this)}/>
      }
    };
  }

  switchPage(id){
    this.setState({
      curr : id
    });
  }

  render(){
    return (
      <div className='container'>
        <Header switchPage={this.switchPage.bind(this)}/>
        {this.state.active[this.state.curr]}
      </div>
    ); 
  }
}

export default App;
