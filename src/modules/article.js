import React from 'react';
import { createPortal } from 'react-dom';


export default class Article extends React.Component{
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
        fetch(`http://localhost:3000/getarticle/${this.props.id}`)
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

    contructDiv(data){
        return(
            <div>
                <div className="card">
                    <h2 className="card-header text-center">{data.title}</h2>
                        <div className="card-body">
                            <h4 className="card-title">{data.description}</h4>
                            <p className="card-text paragraph">
                                {data.context}
                            </p>
                            <hr/>
                            <h6>
                                This article have been written by 
                                <a href="#" onClick={()=>{this.props.switchPage(4, data.name)}}> {data.name}</a>
                            </h6>
                        </div>
                </div>
            </div>
        )
    }
    
    render(){
        this.fetchData();
        return(
            <h1>
                {this.state.output}
            </h1>
        )
    }
}