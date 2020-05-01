import React from 'react';


export default class UserDetails extends React.Component{
    constructor(props){
        super();
        this.props = props;
        this.state = {
            user : props.user
        }
    }

    handeInput(event){
        let eventName = event.target.name;
        this.state.user[eventName] = event.target.value;
    }

    render(){
        return(
            <div>
                <div className='row'>
                    <div className='col-md-3'>
                        <input className='form-control' type='text' placeholder='Name' name='name' id='name' onChange={this.handeInput.bind(this)} required/>
                    </div>
                </div>
                <div className='row spaceRow'>
                    <div className='col-md-3'>
                        <input className='form-control' type='email' placeholder='Email' name='email' id='email'  onChange={this.handeInput.bind(this)} required/>
                    </div>
                </div>
                <div className='row spaceRow'>
                    <div className='col-md-3'>
                        <input className='form-control' type='text' placeholder='Age' name='age' id='age'   onChange={this.handeInput.bind(this)}required/>
                    </div>
                </div>
                <div className='row spaceRow'>
                    <div className='col-md-3'>
                        <input className='form-control' type='text' placeholder='Image' name='userUrlImage' id='userUrlImage'  onChange={this.handeInput.bind(this)} required/>
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