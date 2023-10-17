import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class RegisterComponent extends Component {
    state={
        name:'',
        password:'',
        email:'',
        address:''
    }

    changeNameHandler=(event)=>{
        this.setState({name:event.target.value});
    }

    changePasswordHandler=(event)=>{
        this.setState({password:event.target.value});
    }

    changeEmailHandler=(event)=>{
        this.setState({email:event.target.value});
    }

    changeAddressHandler=(event)=>{
        this.setState({address:event.target.value});
    }
    createRecord=()=>{
        let employee={name:this.state.name,password:this.state.password,email:this.state.email,address:this.state.address}
        console.log("employee record is "+JSON.stringify(employee));
        EmployeeService.createEmployeeRecord(employee).then(result=>{
            alert("Record created successfully");
        })
    }
    render() { 
        return <div>
           <form>
               Name : <input type="text" value={this.state.name} onChange={this.changeNameHandler}></input><br></br>
               Password : <input type="password" value={this.state.password} onChange={this.changePasswordHandler}></input><br></br>
               Email : <input type="email" value={this.state.email} onChange={this.changeEmailHandler}></input><br></br>
               Address : <input type="text" value={this.state.address} onChange={this.changeAddressHandler}></input><br></br>
               <button type="button" onClick={this.createRecord}>Signup</button>
           </form>
        </div>;
    }
}
 
export default RegisterComponent;