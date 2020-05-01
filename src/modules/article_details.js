import React from 'react';

export default class ArticleDetails extends React.Component{
    constructor(props){
        super();
        this.props = props;
    }

    render(){
        return(
            <div>
                <div className='row spaceRow'>
                    <div className='col-md-3'>
                        <input className='form-control' type='text' placeholder='Title' name='title' id='title' required/>
                    </div>
                </div>
                <div className='row spaceRow'>
                    <div className='col-md-3'>
                        <input className='form-control' type='text' placeholder='Image' name='urlArticleImage' id='urlUserImage' required/>
                    </div>
                </div>
                <div className='row spaceRow'>
                    <div className='col-md-3'>
                        <input className='form-control descriptionRow' type='textarea' rows='2' placeholder='Description' name='title' id='title' required/>
                    </div>
                </div>
                <div className='row spaceRow'>
                    <div className='col-md-5'>
                        <input className='form-control context' type='textarea' rows='6' placeholder='Context' name='context' id='context' required/>
                    </div>
                </div>
                <div className='roc spaceRow'>
                    <div className='col-md-1'>
                        <button type="submit" class="btn btn-primary" onClick={()=>{this.props.switchPage(0)}}>Submit</button>
                    </div>
                </div>         
            </div> 
        )
    }
}