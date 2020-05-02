import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './modules/header';
import Users from './modules/users'
import NewArticle from './modules/new_article';
import Articles from './modules/articles';
import Article from './modules/article';
import User from './modules/user';

class App extends React.Component {
  constructor(){
    super();
    this.id = null;
    this.state = {
      curr: 0,
      id: null,
    };
  }

  switchPage(id, target){ 
    this.setState({
      curr : id,
      id: target,
    });
  }

  render(){
    return (
      <div className='container'>
        <Header switchPage={this.switchPage.bind(this)}/>
        {
          this.state.curr === 0 ? 
            <Articles switchPage={this.switchPage.bind(this)}/>
          : this.state.curr === 1 ?
            <Users switchPage={this.switchPage.bind(this)}/>
            : this.state.curr === 2 ?
            <NewArticle switchPage={this.switchPage.bind(this)}/>
            : this.state.curr === 3 ?
              <Article switchPage={this.switchPage.bind(this)} id={this.state.id}/>
            : this.state.curr === 4 ?
            <User switchPage={this.switchPage.bind(this)} id={this.state.id}/>
            :
            <div/>
        }
      </div>
    ); 
  }
}

export default App;
