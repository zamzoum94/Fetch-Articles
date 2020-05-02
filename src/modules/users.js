import React from 'react';
import { createPortal } from 'react-dom';


export default class Users extends React.Component{
    constructor(props){
        super();
        this.props = props;
        this.state = {
            output : null
        }
        this.done = false;
    }


    filterData(data){
        let result = [];
        for(let i = 0; i < data.length; ++i){
            let contains = false;
            for(let j = 0; j < result.length && !contains; ++j){
                if(result[j].name === data[i].name){
                    contains = true;
                }
            }
            if(!contains){
                result.push(data[i]);
            }   
        }
        return result;
    }

    contructDiv(data){
        data = this.filterData(data);
        return(
            <div className='row spaceRow'>
                {data.map((element, index)=>{
                    return(
                        <div className='col-md-4 spaceRow'>
                            <div className = 'card'>
                                <img src={element.userUrlImage} className='card-img-top imgContainer' alt='author'></img>
                                <div className='card-body'>
                                    <h5 className='card-title'>{element.name}</h5>
                                    <p className='card-text'>
                                        Age: {element.age} <br/>
                                        Email: {element.email}
                                    </p>
                                    <a href="#" className="btn btn-primary" onClick={()=>{this.props.switchPage(4, element.name)}}>Check Profile</a>
                                </div>
                            </div>
                        </div>
                    )
                })}
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
                {this.state.output}
            </div>
        )
    }
}