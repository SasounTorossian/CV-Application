import React from 'react'
import { TextField } from '@material-ui/core'
import { Link } from 'react-router-dom'

const PersonalDetails = ({values, handleChange}) => {
    return (
        <div>
            <h1>Personal Details</h1>
            <form noValidate autoComplete="off">
                <TextField 
                    type="text"
                    label="Name" 
                    value={values.name} 
                    onChange={handleChange} 
                    inputProps={{ "data-field-type": "name" }}
                />

                <br />
                <br />

                <TextField 
                    type="email"
                    label="Email" 
                    value={values.email} 
                    onChange={handleChange} 
                    inputProps={{ "data-field-type": "email" }}
                />


                <br />
                <br />

                <TextField 
                    type="text"
                    label="Phone" 
                    value={values.phone} 
                    onChange={handleChange} 
                    inputProps={{ "data-field-type": "phone" }}
                />
            
                <br />
                <br />
            </form>
            <Link to="/education">
                <button>Next Page</button>
            </Link>
        </div>
    )
} 

export default PersonalDetails