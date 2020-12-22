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
      name: "", //Put in array or object
      nameError: false,
      email: "",
      emailError: 0,
      phone: "",
      phoneError: false,
      education: [{
        school: "",
        schoolError: false,
        course: "",
        courseError: false,
        startDateEdu: "",
        startDateEduError: false,
        endDateEdu: "",
        endDateEduError: false,      
      }],
      experience: [{
        company: "",
        companyError: false,
        role: "",
        roleError: false,
        startDateExp: "",
        startDateExpError: false,
        endDateExp: "",
        endDateExpError: false,
        details: "",
        detailsError: false,      
      }],
    }
  }

  isEmptyInput = (input) => {return input === "" ? true : false} 

  inputMessage = (inputError) => {return inputError === true ? "Required" : ""} 

  validEmail = (email) => {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
  }

  emailMessage = (emailErrorCode) => {
      if(emailErrorCode === 2) {
        return "Invalid Email" 
      }
      else if(emailErrorCode === 1){
        return "Required" 
      }
      else {
        return ""
      }
  }

  handleChange = (e) => {
    let field = e.target.dataset.fieldType
    let id = e.target.dataset.id
    let value = e.target.value
    
    if(["name", "email", "phone"].includes(field)) {
      let stateError
      if(field === "email") {stateError =  this.isEmptyInput(value) ? 1 : !this.validEmail(value) ? 2 : 0}
      else stateError = this.isEmptyInput(value) ? true : false
      this.setState({ [field]: value })
      this.setState({[field+"Error"]: stateError})
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
    const newEdu = { school: "", course: "", startDateEdu: "", endDateEdu: ""}
    this.setState({ education: [...this.state.education, newEdu] })       
  }

  addExperience = () => {
    const newExp = { company: "", role: "", startDateExp: "", endDateExp: "", details: ""}
    this.setState({ experience: [...this.state.experience, newExp] })       
  }

  //TODO: Grid sizing.
  // TODO: Backdrop dimmer for confirmation page.
  render() {
    const {name, nameError, email, emailError, phone, phoneError, education, experience} = this.state
    const values = {name, nameError, email, emailError, phone, phoneError, education, experience}

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
                  inputMessage={this.inputMessage} 
                  emailMessage={this.emailMessage}
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
                  inputMessage={this.inputMessage} 
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
                  inputMessage={this.inputMessage} 
                />
              )} 
            />
          </Switch>
      </Router>
    )
  }
}

export default App;
