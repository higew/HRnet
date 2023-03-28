import React from 'react'
import { Link } from "react-router-dom"
import EmployeeForm from '../../components/employeeForm/EmployeeForm'

function Home() {
    return (
        <div>
            <div className="title">
                <h1>HRnet</h1>
            </div>
            <div className="container">
                <Link to={"/list"}>View Current Employees</Link>
                <h2>Create Employee</h2>
                <EmployeeForm/>
            </div>
            <div id="confirmation" className="modal">Employee Created!</div>
        </div>
    )
}

export default Home