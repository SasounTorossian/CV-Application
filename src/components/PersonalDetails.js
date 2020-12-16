import React, {Component} from 'react'
// import moduleName from 'material-ui/styles/MuiThemeProvider'

class PersonalDetails extends Component {
    continue = (e) => {
        e.preventDefault()
        this.props.nextPage()
    }

    render() {
        const { values, handleChange } = this.props

        return (
            <div>
                <h1>Personal Details</h1>
                <form>
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

                    <button onClick={this.continue}>Next Page</button>
                </form>
            </div>
        )
    }
} 

export default PersonalDetails