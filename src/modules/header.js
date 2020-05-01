import React from 'react';

export default class Header extends React.Component{
    constructor(props){
        console.log(props)
        super();
        this.props = props;
    }

    hi(){
        alert('hi')
    }

    render(){
        return(
            <div>
                <ul class="nav justify-content-center">
                    <li class="nav-item">
                        <a class="nav-link active" href="#" onClick={()=>{this.props.switchPage(0)}}>Articles</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" onClick={()=>{this.props.switchPage(1)}}>Users</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" onClick={()=>{this.props.switchPage(2)}}>New Article</a>
                    </li>
                </ul>
            </div>
        )
    }
}