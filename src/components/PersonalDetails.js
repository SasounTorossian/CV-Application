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
                <label>
                    Name:
                    <input 
                        type="text" 
                        onChange = {handleChange("name")}
                        defaultValue={values.name}
                    />
                </label>

                <br />
                
                <label>
                    Email:
                    <input 
                        type="email" 
                        onChange = {handleChange("email")}
                        defaultValue={values.email}
                    />
                </label>

                <br />

                <label>
                    Phone:
                    <input 
                        type="text" 
                        onChange = {handleChange("phone")}
                        defaultValue={values.phone}
                    />
                </label>

                <button onClick={this.continue}>Next Page</button>
            </form>
        )
    }
} 

export default PersonalDetails