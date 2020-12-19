import React, {Component} from 'react'
import PersonalDetails from "./components/PersonalDetails"
import EducationDetails from "./components/EducationDetails"
import ExperienceDetails from "./components/ExperienceDetails"
import Header from "./components/Header"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "",
      email: "",
      phone: "",
      education: [{
        school: "",
        course: "",
        startDateEdu: "",
        endDateEdu: ""
      }],
      experience: [{
        company: "",
        role: "",
        startDateExp: "",
        endDateExp: "",
        details: ""
      }],
    }
  }

  handleChange = (e) => {
    console.log(e.target.dataset)
    //TODO: extract e.target
    if(["name", "email", "phone"].includes(e.target.dataset.fieldType)) {
      this.setState({ [e.target.dataset.fieldType]: e.target.value }) 
    }
    else if(["school", "course", "startDateEdu", "endDateEdu"].includes(e.target.dataset.fieldType)) {
      let education = [...this.state.education]
      education[e.target.dataset.id][e.target.dataset.fieldType] = e.target.value
      this.setState({ education })
    }
    else if(["company", "role", "startDateExp", "endDateExp", "details"].includes(e.target.dataset.fieldType)) {
      let experience = [...this.state.experience]
      experience[e.target.dataset.id][e.target.dataset.fieldType] = e.target.value
      this.setState({ experience })
    }
     
  }

  addEducation = () => {
    const newEdu = { school: "", course: "", startDateEdu: "", endDateEdu: ""}
    this.setState({ education: [...this.state.education, newEdu] })       
  }

  addExperience = () => {
    const newExp = {company: "", role: "", startDateExp: "", endDateExp: "", details: ""}
    this.setState({ experience: [...this.state.experience, newExp] })       
  }

  //TODO: Grid sizing.
  // TODO: Backdrop dimmer for confirmation page.
  render() {
    const {name, email, phone, education, experience} = this.state
    const values = {name, email, phone, education, experience}

    return (
      <Router>
          <Route
            path = "/" 
            component={Header}
          />

          <Switch>
            <Route
              path = "/personal" 
              render={(props) => (
                <PersonalDetails 
                  {...props} 
                  values={values}
                  handleChange={this.handleChange} 
                />
              )} 
            />

            <Route
              path = "/education" 
              render={(props) => (
                <EducationDetails 
                  {...props} 
                  values={values}
                  handleChange = {this.handleChange}
                  addEdu={this.addEducation}
                />
              )} 
            />

            <Route
              path = "/experience" 
              render={(props) => (
                <ExperienceDetails 
                  {...props} 
                  values={values}
                  handleChange = {this.handleChange}
                  addExp={this.addExperience}
                />
              )} 
            />
          </Switch>
      </Router>
    )
  }
}

export default App;
