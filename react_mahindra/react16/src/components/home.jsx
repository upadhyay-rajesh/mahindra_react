import React, { Component } from 'react';
class HomeComponent extends React.Component {

    registerEmployee=()=>{
        this.props.history.push(`/register`);
    }
    loginEmployee=()=>{
        this.props.history.push(`/login`);
    }
    displayAllEmployee=()=>{
        this.props.history.push(`/displayAll`);
    }

    render() { 
        return (
        <div>
            <button onClick={()=>this.registerEmployee()}>SignUp</button>
            <button  onClick={()=>this.loginEmployee()}>SignIn</button>
            <button  onClick={()=>this.displayAllEmployee()}>DisplayAll</button>
        </div>
        )
    }
}
 
export default HomeComponent;