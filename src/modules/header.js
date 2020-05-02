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
            <div className='mb-5'>
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <a className="nav-link active" href="#" onClick={()=>{this.props.switchPage(0)}}>Articles</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" onClick={()=>{this.props.switchPage(1)}}>Users</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" onClick={()=>{this.props.switchPage(2)}}>New Article</a>
                    </li>
                </ul>
            </div>
        )
    }
}