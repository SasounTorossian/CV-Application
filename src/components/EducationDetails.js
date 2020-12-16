import React, {Component} from 'react'

class ExperienceDetials extends Component {
    continue = (e) => {
        e.preventDefault()
        this.props.nextPage()
    }

    goback = (e) => {
        e.preventDefault()
        this.props.prevPage()
    }

    addEducation = (e) => { 
        e.preventDefault() 
        this.props.addEdu()
    }

    render() {
        const { values, handleChange} = this.props

        

        return (
            <form>
                <button onClick={this.addEducation}>Add new education</button>
                {
                    values.education.map((val, idx) => {
                        let schoolId = `school-${idx}`
                        let courseId = `course-${idx}`
                        // let startId = `start-${idx}`
                        // let endId = `end-${idx}`

                        return (
                            <div key={idx}>
                                <label htmlFor={schoolId}>{`School #${idx+1}`}</label>
                                <input
                                    type="text"
                                    name={schoolId}
                                    data-id={idx}
                                    id={schoolId}
                                    className="school"
                                />    

                                <label htmlFor={courseId}>{`Course #${idx+1}`}</label>
                                <input
                                    type="text"
                                    name={courseId}
                                    data-id={idx}
                                    id={courseId}
                                    className="course"
                                />    
                            </div>
                        )
                    })
                }
                <input type="submit" value="Submit"></input>
                <button onClick={this.goback}>Prev Page</button>
                <button onClick={this.continue}>Next Page</button>
            </form>
        )
    }
} 

export default ExperienceDetials