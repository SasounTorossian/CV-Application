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
      personal: {
        name: "", 
        email: "",
        phone: "",
        nameError: false,
        emailError: 0,
        phoneError: false,
      },
      education: [{
        school: "",
        course: "",
        startDateEdu: "",
        endDateEdu: "",
        schoolError: false,
        courseError: false,
        startDateEduError: false,
        endDateEduError: false,      
      }],
      experience: [{
        company: "",
        role: "",
        startDateExp: "",
        endDateExp: "",
        details: "",
        companyError: false,
        roleError: false,
        startDateExpError: false,
        endDateExpError: false,
        detailsError: false,      
      }],
    }
  }

  isEmptyInput = (input) => { return input === "" ? true : false } 

  validEmail = (email) => {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
  }

  handleChange = (e) => {
    let field = e.target.dataset.fieldType
    let id = e.target.dataset.id
    let value = e.target.value

    if(["name", "email", "phone"].includes(field)) {
      let stateError
      let personal = {...this.state.personal}
      personal[field] = value

      if(field === "email") { stateError =  this.isEmptyInput(value) ? 1 : !this.validEmail(value) ? 2 : 0 }
      else { stateError = this.isEmptyInput(value) ? true : false }

      personal[field+"Error"] = stateError
      this.setState({ personal })

    }
    else if(["school", "course", "startDateEdu", "endDateEdu"].includes(field)) {
      let education = [...this.state.education]
      education[id][field] = value
      education[id][field+"Error"] = this.isEmptyInput(value)
      this.setState({ education })
    }
    else if(["company", "role", "startDateExp", "endDateExp", "details"].includes(field)) {
      let experience = [...this.state.experience]
      experience[id][field] = value
      experience[id][field+"Error"] = this.isEmptyInput(value)
      this.setState({ experience })
    }
  }

  addEducation = () => {
    const newEdu = {
      school: "",
      course: "",
      startDateEdu: "",
      endDateEdu: "",
      schoolError: false,
      courseError: false,
      startDateEduError: false,
      endDateEduError: false,      
    }
    this.setState({ education: [...this.state.education, newEdu] })       
  }

  addExperience = () => {
    const newExp = {
      company: "",
      role: "",
      startDateExp: "",
      endDateExp: "",
      details: "",
      companyError: false,
      roleError: false,
      startDateExpError: false,
      endDateExpError: false,
      detailsError: false,      
    }
    this.setState({ experience: [...this.state.experience, newExp] })       
  }

  //TODO: Grid sizing.
  // TODO: Backdrop dimmer for confirmation page.
  render() {
    const {personal, education, experience} = this.state
    const values = {personal, education, experience}

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
