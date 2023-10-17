import React, { Component } from 'react';
import EmployeeService from "../services/EmployeeService";
class DisplayAllComponent extends Component {

    state={
        employees:[]
    }

    componentDidMount(){
        EmployeeService.getAllEmployeeRecord().then(result=>{
            console.log(result);
            this.setState({employees:result.data});
        })
    }

    render() { 
        return <div>
            <table border="5">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Password</th>
                        <th>Email</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.employees.map(emp1=>
                            <tr>
                                <td>{emp1.name}</td>
                                <td>{emp1.password}</td>
                                <td>{emp1.email}</td>
                                <td>{emp1.address}</td>
                            </tr>
                            )
                    }
                </tbody>
            </table>
        </div>;
    }
}
 
export default DisplayAllComponent;