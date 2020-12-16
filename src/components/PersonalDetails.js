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
            <form>
                <label>Name:</label>
                <input 
                    type="text" 
                    onChange = {handleChange("name")}
                    defaultValue={values.name}
                />

                <br />
                
                <label>Email:</label>    
                <input 
                    type="email" 
                    onChange = {handleChange("email")}
                    defaultValue={values.email}
                />

                <br />

                <label>Phone:</label>  
                <input 
                    type="text" 
                    onChange = {handleChange("phone")}
                    defaultValue={values.phone}
                />
            

                <button onClick={this.continue}>Next Page</button>
            </form>
        )
    }
} 

export default PersonalDetails