import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class ExperienceDetails extends Component {
    addExperience = (e) => { 
        e.preventDefault() 
        this.props.addExperience()
    }

    render() {
        const { values, handleChange } = this.props

        return (
            <div>
            <h1>Experience Details</h1>
            <form>
                {
                    values.experience.map((val, idx) => {
                        return (
                            <div key={idx}>
                                <label>{`Company #${idx+1}`}</label>
                                <input
                                    type="text"
                                    data-id={idx}
                                    className="company"
                                    value={values.experience[idx].company}
                                    onChange={handleChange}
                                />    

                                <label>{`Role #${idx+1}`}</label>
                                <input
                                    type="text"
                                    data-id={idx}
                                    className="role"
                                    value={values.experience[idx].role}
                                    onChange={handleChange}
                                />    

                                <label>{`Start Date #${idx+1}`}</label>
                                <input
                                    type="date"
                                    data-id={idx}
                                    className="startDateExp"
                                    value={values.experience[idx].startDateExp}
                                    onChange={handleChange}
                                />   

                                <label>{`End Date #${idx+1}`}</label>
                                <input
                                    type="date"
                                    data-id={idx}
                                    className="endDateExp"
                                    value={values.experience[idx].endDateExp}
                                    onChange={handleChange}
                                />   

                                <label>{`Details #${idx+1}`}</label>
                                <textarea
                                    type="text"
                                    data-id={idx}
                                    className="details"
                                    value={values.experience[idx].details}
                                    onChange={handleChange}
                                />   
                            </div>
                        )
                    })
                }
                <button onClick={this.addExperience}>Add new experience</button>
                <Link to="/education"><button>Prev Page</button></Link>
                <Link to="/confirm"><button>Next Page</button></Link>
            </form>
        </div>
        )
    }
} 

export default ExperienceDetails