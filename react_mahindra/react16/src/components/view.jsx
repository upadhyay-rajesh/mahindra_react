import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';
class ViewComponent extends Component {

    state={
        empid:this.props.match.params.id,
        name:this.props.match.params.uname,
        employee:{}
    }

    componentDidMount(){
        EmployeeService.getEmployeeRecordById(this.state.empid).then(result=>{
            this.setState({employee:result.data})
        })
    }

    render() { 
        return <div>
           <div>Employee Detail</div>
           <div>
               <label>Name</label>
               <div>{this.state.employee.name}</div>
           </div>
           <div>
               <label>Password</label>
               <div>{this.state.employee.password}</div>
           </div>
           <div>
               <label>Email</label>
               <div>{this.state.employee.email}</div>
           </div>
           <div>
               <label>Address</label>
               <div>{this.state.employee.address}</div>
           </div>
        </div>;
    }
}
 
export default ViewComponent;