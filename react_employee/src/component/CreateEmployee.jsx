import { useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

function CreateEmployee() {
    const [newfirstName, setnewfirstName] = useState("")
    const [newlastName, setnewlastName] = useState("")
    const [newemail, setnewemail] = useState("")
    const Navigate = useNavigate();
    function saveEmployee(e) {
        
        let employee = {
            firstName : newfirstName ,
            lastName:newlastName,
            emailID :newemail
        }
        EmployeeService.createEmployee(employee);
        Navigate("/")
        
    }
    function cancel() {
        Navigate("/")
        
    }
    return (
        <div className="employee-form">
            <h1>Employee Form </h1>
            <form action="">
                <label htmlFor="">First Name</label><br />
                <input type="text" onChange={(e) => setnewfirstName(e.target.value)}/><br />
                <label htmlFor="">Last Name</label><br />
                <input type="text" onChange={(e) => setnewlastName(e.target.value)}/><br />
                <label htmlFor="">Email ID</label><br />
                <input type="email" onChange={(e) => setnewemail(e.target.value)}/><br />
                <button style={{background:"#007bff", color:"white"}} onClick={saveEmployee}>Save</button>
                <button style={{background:"red", color:"white"}} onClick={cancel}>Cancel</button>
                

            </form>
        </div>
    )
}

export default CreateEmployee;