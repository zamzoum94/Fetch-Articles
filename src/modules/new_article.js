import React from 'react';
import ArticeDetails from './article_details';
import UserDetails from './user_details';

export default class NewArticle extends React.Component{
    constructor(props){
        super();
        this.props = props;

        this.newUser = {
            name : null,
            email : null,
            age : null,
            userUrlImage : null
        }

        this.newArticle = {
            title : null,
            description : null,
            context : null
        }

        this.state ={
            form : {
                0 : <UserDetails nextForm={this.nextForm.bind(this)} user={this.newUser}/>,
                1 : <ArticeDetails article={this.newArticle} handleSubmit={this.handleSubmit.bind(this)}/> 
            },
            currForm : 0
        }
    }

    nextForm(){
        this.setState({
            currForm : 1
        });
    }

    handleSubmit(){
        this.props.switchPage(0);
        let user = this.newUser;
        for(let key in this.newArticle){
            user[key] = this.newArticle[key];
        }
        fetch('http://localhost:3000/postarticle', {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(user)
        });
    }

    render(){
        return(
            <form method='POST' method='/postarticle'>
                <div className='form-group'>
                    {this.state.form[this.state.currForm]}
                </div>
            </form>    
        );
    }
}