import React, {useState } from 'react'
import { TextField } from '@material-ui/core'
import { Link } from 'react-router-dom'

const PersonalDetails = ({values, handleChange}) => {
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(0);
    const [phoneError, setPhoneError] = useState(false);

    const emptyInput = (input) => {return input === "" ? true : false} 

    const validEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const invalidEmailMessage = (emailErrorCode) => {
        return (emailErrorCode === 2 ? "Invalid Email" : 
        emailErrorCode === 1 ? "Required" : "")
    }


    const errorState = (e) => {
        let field = e.target.dataset.fieldType
        let value = e.target.value

        if(field === "name") {
            emptyInput(value) ? setNameError(true) : setNameError(false)
        }
        else if (field === "email") {
            if(emptyInput(value)) setEmailError(1) 
            else if (!validEmail(value)) setEmailError(2) 
            else setEmailError(0)
        }
        else if (field === "phone") {
            emptyInput(value) ? setPhoneError(true) : setPhoneError(false)
        }
        else {
            setNameError(0)
            setEmailError(0)
            setPhoneError(0)
        }
    }

    const handleLocalChange = (e) => {
        e.preventDefault()
        errorState(e)
        handleChange(e)
    }

    return (
        <div>
            <h1>Personal Details</h1>
            <form autoComplete="off">
                <TextField 
                    type="text"
                    label="Name" 
                    value={values.name} 
                    onChange={handleLocalChange}
                    onBlur={errorState}
                    inputProps={{ "data-field-type": "name" }}
                    error={nameError ? true : false}
                    helperText={nameError ? "Required" : ""}
                />

                <br />
                <br />

                <TextField 
                    type="email"
                    label="Email" 
                    value={values.email} 
                    onChange={handleLocalChange}
                    onBlur={errorState}
                    inputProps={{ "data-field-type": "email" }}
                    error={emailError ? true : false}
                    helperText={invalidEmailMessage(emailError)}
                />


                <br />
                <br />

                <TextField 
                    type="text"
                    label="Phone" 
                    name="phone"
                    value={values.phone} 
                    onChange={handleLocalChange}
                    onBlur={errorState}
                    inputProps={{ "data-field-type": "phone" }}
                    error={phoneError ? true : false}
                    helperText={phoneError ? "Required" : ""}
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