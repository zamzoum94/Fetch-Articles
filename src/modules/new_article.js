import React from 'react';
import ArticeDetails from './article_details';
import UserDetails from './user_details';

export default class NewArticle extends React.Component{
    constructor(props){
        super();
        this.props = props;
        this.state ={
            form : {
                0 : <UserDetails nextForm={this.nextForm.bind(this)}/>,
                1 : <ArticeDetails switchPage = {props.switchPage.bind(this)}/> 
            },
            currForm : 0
        }
    }

    nextForm(){
        this.setState({
            currForm : 1
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