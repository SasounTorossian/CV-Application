import React from 'react'
import { TextField } from '@material-ui/core'
import { Link } from 'react-router-dom'

const PersonalDetails = ({values, handleChange}) => {
    return (
        <div>
            <h1>Personal Details</h1>
            <form autoComplete="off" onChange={handleChange}>
                <TextField 
                    type="text"
                    label="Name" 
                    value={values.personal.name} 
                    onBlur={handleChange}
                    inputProps={{ "data-field-type": "name" }}
                    error={!!values.personal.nameError}
                    helperText={values.personal.nameError}
                />

                <br />
                <br />

                <TextField 
                    type="email"
                    label="Email" 
                    value={values.personal.email} 
                    onBlur={handleChange}
                    inputProps={{ "data-field-type": "email" }}
                    error={!!values.personal.emailError}
                    helperText={values.personal.emailError}
                />


                <br />
                <br />

                <TextField 
                    type="text"
                    label="Phone" 
                    name="phone"
                    value={values.personal.phone} 
                    onBlur={handleChange}
                    inputProps={{ "data-field-type": "phone" }}
                    error={!!values.personal.phoneError}
                    helperText={values.personal.phoneError}
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