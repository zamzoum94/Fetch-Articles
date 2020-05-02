import React from 'react';


export default class Articles extends React.Component{
    fetchData(){
        fetch('http://localhost:3000/getarticles')
        .then(res => {
            return res.text();
        })
        .then(docs =>{
            console.log(JSON.parse(docs));
        })
        .catch(err =>{
            console.log(err);
        })
    }

    render(){
        this.fetchData();
        return(
            <h1>This is Articles</h1>
        )
    }
}