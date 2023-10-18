import {useState,useEffect} from 'react';
import EmployeeService from '../services/EmployeeService';

function StateHooks() {

    const [employee,setEmployee]=useState({
        name:"Ravi",
        password:"abcd",
        email:"abc@yahoo.com",
        address:"Delhi"
    })

    const [name, setName]=useState("Rajesh");
    const [address, setAddress]=useState("Bangalore");

    useEffect(()=>{
        EmployeeService.getAllEmployeeRecord().then(result=>{
           setEmployee({email:result.data.email});
            console.log(result.data);
        })
    }
    )

    return ( 
        <div>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}></input>
            <input type="text" value={address} onChange={(e)=>setAddress(e.target.value)}></input>
           <br></br> {name}  <br></br>
           {address}  <br></br>

           <input type="text" value={employee.email} onChange={(e)=>setEmployee({email:e.target.value})}></input>

           my email is {employee.email}
        </div>
     );
}

export default StateHooks;