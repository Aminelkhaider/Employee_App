import { useEffect, useState } from "react";
import EmployeeService from '../services/EmployeeService';
import { useNavigate } from "react-router-dom";


function ListEmployee() {
    const [employees, setemployees] = useState([])
    const navigate= useNavigate();
    useEffect(() => {
      const fetchEmployees = async ()=>{
        const data = await EmployeeService.getEmployees();
        setemployees(data.data);
      }
    
      fetchEmployees();
    }, []);
    function addEmployee() {
        navigate("/add-employee")


        
    }
    function UpdateEmployee(id) {
        navigate(`/update-employee/${id}`)
        
    }
    function deleteEmployee(id) {
        EmployeeService.deleteEmployee(id)
        setemployees((prev) => prev.filter((emp) => emp.id != id))
        navigate(`/`)
        
    }

    
    return(
        <div className="employee-list">
            <h2 >Employee List</h2>
            <div>
                <button onClick={addEmployee}>Add Employee</button>
            </div>
            <div >
                <table className="table"style={{border:"1px solid black"}}>
                    <thead>
                        <tr>
                            <th>Employee first name</th>
                            <th>Employee last name</th>
                            <th>Employee Email Id</th>
                            <th>Actions</th>

                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((employee)=>{
                            return <tr key={employee.id}>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.emailID}</td>
                                <td><button onClick={()=> UpdateEmployee(employee.id)}>Update</button>
                                <button onClick={()=> deleteEmployee(employee.id)}>Delete</button></td>

                            </tr>
                        })}

                    </tbody>

                </table>
            </div>
        </div>
    )
}
export default ListEmployee; 