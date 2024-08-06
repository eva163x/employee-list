import React, { useEffect, useState } from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

const AddEmployeeComponent = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailID, setEmailID] = useState('');

    const navigate = useNavigate();
    const {id} = useParams();

    const saveOrUpdateEmployee = (e) => {
        e.preventDefault();

        const employee = {firstName, lastName, emailID};

        if (id) { //if id exists, it's a put api so we update

            EmployeeService.updateEmployee(id, employee).then((response) => {

                navigate("/employees")

            }).catch((error) => {
                console.log(error);
            })
        } else {

            EmployeeService.createEmployee(employee).then((response) => {

                console.log(response);
                navigate('/employees');

            }).catch(error => {
                console.log(error);
            });
        }
    };

    useEffect(() => {

        EmployeeService.getEmployeeById(id).then((response) => {
            setFirstName(response.data.firstName);
            setLastName(response.data.lastName);
            setEmailID(response.data.emailID);
        }).catch((error) => {

            console.log(error)

        })

    }, [])

    function title() {
        if (id) {
            return <h2 className='text-center'>Update Employee</h2>
        } else{
            return <h2 className='text-center'>Add Employee</h2>
        }
    }

    return (
        <div>
            <br /> <br />
            <div className='container'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3 offset-md-3'>
                        {
                            title()
                        }
                        <div className='card-body'>
                            <form>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>First Name: </label>
                                    <input
                                        type='text'
                                        placeholder='Enter first name'
                                        name='firstName'
                                        className='form-control'
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />
                                </div>

                                <div className='form-group mb-2'>
                                    <label className='form-label'>Last Name: </label>
                                    <input
                                        type='text'
                                        placeholder='Enter last name'
                                        name='lastName'
                                        className='form-control'
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                    />
                                </div>

                                <div className='form-group mb-2'>
                                    <label className='form-label'>Email ID: </label>
                                    <input
                                        type='email'
                                        placeholder='Enter email ID'
                                        name='emailID'
                                        className='form-control'
                                        value={emailID}
                                        onChange={(e) => setEmailID(e.target.value)}
                                    />
                                </div>

                                <button className='btn btn-success' onClick={(e) => saveOrUpdateEmployee(e)}> Submit </button>
                                <Link to = "/employees" className = "btn btn-danger mb-2"> Cancel </Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddEmployeeComponent;
