import React from 'react'
import { TextField } from '@material-ui/core'
import { Link } from 'react-router-dom'

const PersonalDetails = ({values, handleChange, errorState, inputMessage, emailMessage}) => {
    return (
        
        <div>
            <h1>Personal Details</h1>
            <form autoComplete="off" onChange={handleChange}>
                <TextField 
                    type="text"
                    label="Name" 
                    value={values.name} 
                    onBlur={errorState}
                    inputProps={{ "data-field-type": "name" }}
                    error={values.nameError}
                    helperText={values.nameError ? "Required" : ""}
                />
                {/* {console.log(values.nameError)} */}

                <br />
                <br />

                <TextField 
                    type="email"
                    label="Email" 
                    value={values.email} 
                    onBlur={errorState}
                    inputProps={{ "data-field-type": "email" }}
                    error={values.emailError ? true : false}
                    helperText={emailMessage(values.emailError)}
                />


                <br />
                <br />

                <TextField 
                    type="text"
                    label="Phone" 
                    name="phone"
                    value={values.phone} 
                    onBlur={errorState}
                    inputProps={{ "data-field-type": "phone" }}
                    error={values.phoneError}
                    helperText={values.phoneError ? "Required" : ""}
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