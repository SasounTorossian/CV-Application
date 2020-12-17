import React, {Component} from 'react'
import { Link } from 'react-router-dom'

const PersonalDetails = ({values, handleChange}) => {
    return (
        <div>
            <form noValidate autoComplete="off">
                <label>Name:</label>
                <input 
                    type="text" 
                    onChange = {handleChange}
                    value={values.name}
                    className="name"
                />

                <br />
                <br />
                
                <label>Email:</label>    
                <input 
                    type="email" 
                    onChange = {handleChange}
                    value={values.email}
                    className="email"
                />

                <br />
                <br />

                <label>Phone:</label>  
                <input 
                    type="text" 
                    onChange = {handleChange}
                    value={values.phone}
                    className="phone"
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