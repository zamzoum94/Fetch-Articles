import React from 'react';


export default class UserDetails extends React.Component{
    constructor(props){
        super();
        this.props = props;
    }

    render(){
        return(
            <div>
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
                        <input className='form-control' type='text' placeholder='Age' name='age' id='age' required/>
                    </div>
                </div>
                <div className='row spaceRow'>
                    <div className='col-md-3'>
                        <input className='form-control' type='text' placeholder='Image' name='urlUserImage' id='urlUserImage' required/>
                    </div>
                </div>
                <div className='row spaceRow'>
                    <div className='col-md-1'>
                        <button type="submit" class="btn btn-primary" onClick={()=>{this.props.nextForm()}}>Next</button>
                    </div>
                </div>
            </div>
        )
    }
}