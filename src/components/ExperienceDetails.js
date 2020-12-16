import React, {Component} from 'react'

class ExperienceDetails extends Component {
    continue = (e) => {
        e.preventDefault()
        this.props.nextPage()
    }

    goback = (e) => {
        e.preventDefault()
        this.props.prevPage()
    }


    render() {
        const { values, handleChange } = this.props

        return (
            <form>
                <label>
                    Nameeeee:
                    <input 
                        type="text" 
                        onChange = {handleChange("name")}
                        defaultValue={values.name}
                    />
                </label>

                <br />
                
                <label>
                    Emailllll:
                    <input 
                        type="email" 
                        onChange = {handleChange("email")}
                        defaultValue={values.email}
                    />
                </label>

                <br />

                <label>
                    Phoneeeee:
                    <input 
                        type="text" 
                        onChange = {handleChange("phone")}
                        defaultValue={values.phone}
                    />
                </label>

                <button onClick={this.goback}>Prev Page</button>
                <button onClick={this.continue}>Next Page</button>
            </form>
        )
    }
} 

export default ExperienceDetails