
import axios from 'axios';

class EmployeeService{
    getAllEmployeeRecord(){
        return axios.get("http://localhost:10000/displayAll");
    }

    getEmployeeRecordById(empid){
        return axios.get("http://localhost:10000/getById/"+empid);
    }

    deleteEmployeeRecord(empid){
        return axios.delete("http://localhost:10000/deleteById/"+empid);
    }

    createEmployeeRecord(emp){
        return axios.post("http://localhost:10000/createRecord",emp);
    }
    modifyEmployeeRecord(emp,empid){
        return axios.post("http://localhost:10000/editRecord/"+empid,emp);
    }
}

export default new EmployeeService()