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

  emptyInput = (input) => {return input === "" ? true : false} 

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


  errorState = (e, id=0) => {
      let field = e.target.dataset.fieldType
      let value = e.target.value
      console.log(id);

      // Personal
      if(field === "name") {
          if(this.emptyInput(value)){this.setState({ nameError: true })}
          else {this.setState({ nameError: false })} 
      }
      else if (field === "email") {
          if(this.emptyInput(value)){this.setState({ emailError: 1 })}
          else if (!this.validEmail(value)){this.setState({ emailError: 2 })} 
          else {this.setState({ emailError: 0 })}
      }
      else if (field === "phone") {
          if(this.emptyInput(value)){this.setState({ phoneError: true })}
          else {this.setState({ phoneError: false })} 
      }

      // Education
      else if(field === "school") {
          if(this.emptyInput(this.state.education[id].school)) {
            let education = [...this.state.education]
            education[id]['schoolError'] = true
            this.setState({ education })
          }
          else {
            let education = [...this.state.education]
            education[id]['schoolError'] = false 
            this.setState({ education })
          }
      }
      else if(field === "course") {
          if(this.emptyInput(this.state.education[id].course)) {
            let education = [...this.state.education]
            education[id]['courseError'] = true
            this.setState({ education })
          }
          else {
            let education = [...this.state.education]
            education[id]['courseError'] = false 
            this.setState({ education })
          }
      }
      else if(field === "startDateEdu") {
          if(this.emptyInput(this.state.education[id].startDateEdu)) {
            let education = [...this.state.education]
            education[id]['startDateEduError'] = true
            this.setState({ education })
          }
          else {
            let education = [...this.state.education]
            education[id]['startDateEduError'] = false 
            this.setState({ education })
          }
      }
      else if(field === "endDateEdu") {
          if(this.emptyInput(this.state.education[id].endDateEdu)) {
            let education = [...this.state.education]
            education[id]['endDateEduError'] = true
            this.setState({ education })
          }
          else {
            let education = [...this.state.education]
            education[id]['endDateEduError'] = false 
            this.setState({ education })
          }
      }

      //Experience
      else if(field === "company") {
        if(this.emptyInput(this.state.experience[id].company)) {
          let experience = [...this.state.experience]
          experience[id]['companyError'] = true
          this.setState({ experience })
        }
        else {
          let experience = [...this.state.experience]
          experience[id]['companyError'] = false 
          this.setState({ experience })
        }
      }
      else if(field === "role") {
          if(this.emptyInput(this.state.experience[id].role)) {
            let experience = [...this.state.experience]
            experience[id]['roleError'] = true
            this.setState({ experience })
          }
          else {
            let experience = [...this.state.experience]
            experience[id]['roleError'] = false 
            this.setState({ experience })
          }
      }
      else if(field === "startDateExp") {
          if(this.emptyInput(this.state.experience[id].startDateExp)) {
            let experience = [...this.state.experience]
            experience[id]['startDateExpError'] = true
            this.setState({ experience })
          }
          else {
            let experience = [...this.state.experience]
            experience[id]['startDateExpError'] = false 
            this.setState({ experience })
          }
      }
      else if(field === "endDateExp") {
          if(this.emptyInput(this.state.experience[id].endDateExp)) {
            let experience = [...this.state.experience]
            experience[id]['endDateExpError'] = true
            this.setState({ experience })
          }
          else {
            let experience = [...this.state.experience]
            experience[id]['endDateExpError'] = false 
            this.setState({ experience })
          }
      }
      else if(field === "details") {
        if(this.emptyInput(this.state.experience[id].details)) {
          let experience = [...this.state.experience]
          experience[id]['detailsError'] = true
          this.setState({ experience })
        }
        else {
          let experience = [...this.state.experience]
          experience[id]['detailsError'] = false 
          this.setState({ experience })
        }
    }
    
  }

  handleChange = (e) => {
    let field = e.target.dataset.fieldType
    let id = e.target.dataset.id
    let values = e.target.value
    
    
    if(["name", "email", "phone"].includes(field)) {
      this.setState({ [field]: values }) //Update display. 
    }
    else if(["school", "course", "startDateEdu", "endDateEdu"].includes(field)) {
      let education = [...this.state.education]
      education[id][field] = values
      this.setState({ education })
    }
    else if(["company", "role", "startDateExp", "endDateExp", "details"].includes(field)) {
      let experience = [...this.state.experience]
      experience[id][field] = values
      this.setState({ experience })
    }
    
    this.errorState(e, id)
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
                  errorState={this.errorState}
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
                  errorState={this.errorState}
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
                  errorState={this.errorState}
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
