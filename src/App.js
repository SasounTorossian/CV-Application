import React, {Component} from 'react'
import Introduction from "./components/Introduction"
import PersonalDetails from "./components/PersonalDetails"
import EducationDetails from "./components/EducationDetails"
import ExperienceDetails from "./components/ExperienceDetails"
import ConfirmDetails from "./components/ConfirmDetails"
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
        nameError: " ",
        emailError: " ",
        phoneError: " ",
      },
      education: [{
        school: "",
        course: "",
        startDateEdu: "",
        endDateEdu: "",
        schoolError: " ",
        courseError: " ",
        startDateEduError: " ",
        endDateEduError: " ",      
      }],
      experience: [{
        company: "",
        role: "",
        startDateExp: "",
        endDateExp: "",
        details: "",
        companyError: " ",
        roleError: " ",
        startDateExpError: " ",
        endDateExpError: " ",
        detailsError: " ",      
      }],
    }
  }

  isEmptyInput = (input) => { return input === "" ? "Required" : " " } 

  isInvalidEmail = (input) => { return input === "" ? "Required" : !this.validEmail(input) ? "Invalid" : " " }

  validEmail = (email) => {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
  }

  handleChange = (e) => {
    let field = e.target.dataset.fieldType
    let id = e.target.dataset.id
    let value = e.target.value
    
    if(["name", "email", "phone"].includes(field)) {
      let personal = {...this.state.personal}
      personal[field] = value
      personal[field+"Error"] = (field === "email") ? this.isInvalidEmail(value) : this.isEmptyInput(value)
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
      schoolError: " ",
      courseError: " ",
      startDateEduError: " ",
      endDateEduError: " ",      
    }
    this.setState({ education: [...this.state.education, newEdu] })       
  }

  removeEducation = (index) => {
    let education = [...this.state.education]
    education.splice(index, 1)
    this.setState({ education: education })       
  }

  addExperience = () => {
    const newExp = {
      company: "",
      role: "",
      startDateExp: "",
      endDateExp: "",
      details: "",
      companyError: " ",
      roleError: " ",
      startDateExpError: " ",
      endDateExpError: " ",
      detailsError: " ",      
    }
    this.setState({ experience: [...this.state.experience, newExp] })       
  }

  removeExperience = (index) => {
    let experience = [...this.state.experience]
    experience.splice(index, 1)
    this.setState({ experience: experience })       
  }

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
                path = "/introduction" 
                render={(props) => (
                  <Introduction 
                    {...props} 
                    handleChange={this.handleChange} 
                  />
                )} 
            />

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
                  removeEdu={this.removeEducation}
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
                  removeExp={this.removeExperience}
                />
              )} 
            />

            <Route
              path = "/confirm" 
              render={(props) => (
                <ConfirmDetails 
                  {...props} 
                  values={values}
                />
              )} 
            />
          </Switch>
      </Router>
    )
  }
}

export default App;
