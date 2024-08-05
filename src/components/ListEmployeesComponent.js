import React from 'react'
import { useState, useEffect } from 'react'
import EmployeeService from '../services/EmployeeService';

const ListEmployeesComponent = () => {

    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        EmployeeService.getAllEmployees().then((response) => {
            setEmployees(response.data)
            console.log(response.data)
        }).catch(error => (
            console.log(error)
        )
        )
    }, [])

  return (
    <div className='container'>
        <h1 className='text-center'>
            List of Employees
        </h1>
        <table className='table table-bordered table-striped'>
            <thead>
                <th>Employee ID</th>
                <th>Employee First Name</th>
                <th>Employee Last Name</th>
                <th>Employee Email ID</th>
            </thead>
            <tbody>
                {
                    employees.map(
                        employee => 
                            <tr key = {employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.emailID}</td>
                            </tr>
                    )
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListEmployeesComponent
