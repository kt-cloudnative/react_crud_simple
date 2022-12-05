import axios from 'axios';

//const EMPLOYEE_API_BASE_URL = "http://localhost:8081/api/v1/employees";

class EmployeeService {

    getEmployees(){
        return axios.get("/api/v1/employees");
    }

    createEmployee(employee){
        return axios.post("/api/v1/employees", employee);
    }

    getEmployeeById(employeeId){
        return axios.get("/api/v1/employees/" +  employeeId);
    }

    updateEmployee(employee, employeeId){
        return axios.put("/api/v1/employees/" +  employeeId, employee);
    }

    deleteEmployee(employeeId){
        return axios.delete("/api/v1/employees/" + employeeId);
    }
}

export default new EmployeeService()
