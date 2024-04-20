import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

function UpdateEmployee() {
    const [newfirstName, setnewfirstName] = useState("")
    const [newlastName, setnewlastName] = useState("")
    const [newemail, setnewemail] = useState("")
    const Navigate = useNavigate();
    const {id}=useParams();
    
    function saveEmployee() {
        
        let employee = {
            firstName : newfirstName ,
            lastName:newlastName,
            emailID :newemail
        }
        EmployeeService.updateEmployee(employee, id);
        Navigate("/")
        
    }
    useEffect(() => {
      const fetchEmployeeById = async () =>{
        let employeeById = await EmployeeService.getEmployeeById(id)
        setnewfirstName(employeeById.data.firstName)
        setnewlastName(employeeById.data.lastName)
        setnewemail(employeeById.data.emailID)
      }
    
      fetchEmployeeById()
    }, [])
    
    function cancel() {
        Navigate("/")
        
    }
    return (
        <div className="employee-form">
            <h1>Update Employee </h1>
            <form action="">
                <label htmlFor="">First Name</label><br />
                <input type="text"  value={newfirstName}   onChange={(e) => setnewfirstName(e.target.value)}/><br />
                <label htmlFor="">Last Name</label><br />
                <input type="text" value={newlastName} onChange={(e) => setnewlastName(e.target.value)}/><br />
                <label htmlFor="">Email ID</label><br />
                <input type="email" value={newemail} onChange={(e) => setnewemail(e.target.value)}/><br />
                <button style={{background:"#007bff", color:"white"}} onClick={saveEmployee}>Update</button>
                
                <button style={{background:"red", color:"white"}} onClick={cancel}>Cancel</button>
                

            </form>
        </div>
    )
}

export default UpdateEmployee;