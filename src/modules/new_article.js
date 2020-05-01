import React from 'react';


export default class NewArticle extends React.Component{
    render(){
        return(
            <form>
                <div className='form-group'>
                    <div className='row'>
                        <div className='col-md-3'>
                            <input className='form-control' type='text' placeholder='Name' name='nameUser' id='nameUser' required/>
                        </div>
                    </div>
                    <div className='row spaceRow'>
                        <div className='col-md-3'>
                            <input className='form-control' type='email' placeholder='Email' name='email' id='email' required/>
                        </div>
                    </div>
                    <div className='row spaceRow'>
                        <div className='col-md-3'>
                            <input className='form-control' type='text' placeholder='Image' name='urlImage' id='urlImage' required/>
                        </div>
                    </div>
                    <div className='row spaceRow'>
                        <div className='col-md-3'>
                            <input className='form-control' type='text' placeholder='Title' name='title' id='title' required/>
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
                </div>
            </form>
        )
    }
}