import React from 'react';
import { createPortal } from 'react-dom';


export default class User extends React.Component{
    constructor(props){
        super(props);
        this.done = false;
        this.state = {
            id: this.props.id,
            output : null
        }
    }

    fetchData(){
        if(this.done === true){
            return;
        }
        this.done = true;
        fetch(`http://localhost:3000/getuser/${this.props.id}`)
        .then(res => {
            return res.text();
        })
        .then(docs =>{
            console.log(JSON.parse(docs).result);
            let output = this.contructDiv(JSON.parse(docs).result);
            this.setState({
                output : output
            });
        })
        .catch(err =>{
            console.log(err);
        })
    }

    contructDiv(multData){
        let data = multData[0];
        return(
           <div className='row'>
               <div className='col-md-6'>
                    <img src={data.userUrlImage} className='card-img-top imgUserContainer' alt='author'></img>
                    <div className='card-body'>
                        <h2 className='card-title'>{data.name}</h2>
                        <p className='card-text'>
                            Name : {data.name} <br/>
                            Email : {data.email} <br/>
                            Age : {data.age} <br/>
                        </p>
                    </div>
               </div>
               <div className='col-md-6'>
                    {multData.map((smallData, index)=>{
                        return(
                            <div className='row' key={index}>
                                <div className='col-md'>
                                    <a href="#" onClick={()=>{this.props.switchPage(3, smallData._id)}}> {smallData.title}</a>
                                </div>
                            </div>
                        )
                    })}
               </div>
           </div>
       )
    }

    render(){
        this.fetchData();
        return(
            <div>
                {this.state.output}
            </div>
        )
    }
}