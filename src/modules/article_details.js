import React from 'react';

export default class ArticleDetails extends React.Component{
    constructor(props){
        super();
        this.props = props;
        this.state = {
            article : this.props.article
        }
    }

    handleInput(event){
        let id = event.target.name;
        this.state.article[id] = event.target.value;
    }

    render(){
        return(
            <div>
                <div className='row spaceRow'>
                    <div className='col-md-3'>
                        <input className='form-control' type='text' placeholder='Title' name='title' id='title' onChange={this.handleInput.bind(this)} required/>
                    </div>
                </div>
                <div className='row spaceRow'>
                    <div className='col-md-3'>
                        <input className='form-control' type='text' placeholder='Image' name='articleImage' id='articleImage' onChange={this.handleInput.bind(this)} required/>
                    </div>
                </div>
                <div className='row spaceRow'>
                    <div className='col-md-3'>
                        <input className='form-control descriptionRow' type='textarea' rows='2' placeholder='Description' name='description' id='description' onChange={this.handleInput.bind(this)} required/>
                    </div>
                </div>
                <div className='row spaceRow'>
                    <div className='col-md-5'>
                        <input className='form-control context' type='textarea' rows='6' placeholder='Context' name='context' id='context' onChange={this.handleInput.bind(this)} required/>
                    </div>
                </div>
                <div className='roc spaceRow'>
                    <div className='col-md-1'>
                        <button type="submit" class="btn btn-primary" onClick={()=>{this.props.handleSubmit()}}>Submit</button>
                    </div>
                </div>         
            </div> 
        )
    }
}