import React from 'react';


export default class Articles extends React.Component{
    constructor(){
        super();
        this.state = {
            output : null
        }
        this.done = false;
    }
    
    contructDiv(data){
        console.log(this.state)
        return(
            <div className='row spaceRow'>
                {data.map((element, index)=>{
                    return(
                        <div className='col-md-3 spaceRow'>
                            <div className='card-body'>
                                <h5 className='card-title'>{element.title}</h5>
                                <h6 className='card-subtitle mb-2 text-muted'>{element.description}</h6>
                                <a href="#" className="card-link" onClick={()=>{this.props.switchPage(3, element._id)}}>Check the article</a>
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
        fetch('http://localhost:3000/getarticles')
        .then(res => {
            return res.text();
        })
        .then(docs =>{
            let output = this.contructDiv(JSON.parse(docs).result);
            console.log(output)
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