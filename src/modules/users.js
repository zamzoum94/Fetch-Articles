import React from 'react';
import { createPortal } from 'react-dom';


export default class Users extends React.Component{
    constructor(){
        super();
        this.state = {
            output : null
        }
        this.done = false;
    }

    contructDiv(data){
        console.log('constructtttttttttttttttttt ', data)
        return(
            <div>
                {data.map((element, index) =>{
                    if(index % 3 === 0){
                        return(
                            <div className='row'>
                                <div className='col-md-3' key={index}>
                                    {element.name}
                                </div>
                            </div>
                        )
                    } else{
                        return(
                            <div className='col-md-3 offset-md-1' key={index}>
                                {element.name}
                            </div>
                        )
                    }
                })};
            </div>
        )
    }

    fetchData(){
        if(this.done === true){
            return;
        }
        this.done = true;
        fetch('http://localhost:3000/getusers')
        .then(res => {
            return res.text();
        })
        .then(docs =>{
            let output = this.contructDiv(JSON.parse(docs).result);
            this.setState({
                output : output
            });
        })
        .catch(err =>{
            console.log(err);
        })
    }

    render(){
        this.fetchData();
        return(
            <div>
                <h1>This is Users</h1>
                {this.state.output}
            </div>
        )
    }
}