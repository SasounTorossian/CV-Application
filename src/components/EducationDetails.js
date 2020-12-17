import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class EducationDetails extends Component {
    addEducation = (e) => { 
        e.preventDefault() 
        this.props.addEducation()
    }

    render() {
        const { values, handleChange} = this.props
        // console.log(values)
        
        return (
            <div>
                <h1>Education Details</h1>
                <form>
                    {
                        values.education.map((val, idx) => {
                            return (
                                <div key={idx}>
                                    <label>{`School #${idx+1}`}</label>
                                    <input
                                        type="text"
                                        data-id={idx}
                                        className="school"
                                        value={values.education[idx].school}
                                        onChange={handleChange}
                                    />    

                                    <label>{`Course #${idx+1}`}</label>
                                    <input
                                        type="text"
                                        data-id={idx}
                                        className="course"
                                        value={values.education[idx].course}
                                        onChange={handleChange}
                                    />    

                                    <label>{`Start Date #${idx+1}`}</label>
                                    <input
                                        type="date"
                                        data-id={idx}
                                        className="startDateEdu"
                                        value={values.education[idx].startDateEdu}
                                        onChange={handleChange}
                                    />   

                                    <label>{`End Date #${idx+1}`}</label>
                                    <input
                                        type="date"
                                        data-id={idx}
                                        className="endDateEdu"
                                        value={values.education[idx].endDateEdu}
                                        onChange={handleChange}
                                    />   
                                </div>
                            )
                        })
                    }
                    <button onClick={this.addEducation}>Add new education</button>
                    <Link to="/personal"><button>Prev Page</button></Link>
                    <Link to="/experience"><button>Next Page</button></Link>
                </form>
            </div>
        )
    }
} 

export default EducationDetails