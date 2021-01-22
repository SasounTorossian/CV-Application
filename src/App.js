import React, {Component} from 'react'
import Header from "./components/Header"
import Switcher from "./components/Switcher"
import {HashRouter as Router, Route} from 'react-router-dom'
import './App.css';

// App component controls the high-level state, as well as the logic of adding/removing/updating detials.
class App extends Component {
  constructor(props) {
    super(props)

    /* State contains all the details, split into personal, education, and experience
    Each variable also as an associated error value to show if variable is in error mode.
    This error variable will be used in the Material UI TextField component for displaying errors.*/
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

  // Checks if the input is empty, and assigns appropriate value to error variable
  isEmptyInput = (input) => { return input === "" ? "Required" : " " } 

  // Checks if the input is valid email or empty, and assigns appropriate value to error variable
  isInvalidEmail = (input) => { return input === "" ? "Required" : !this.validEmail(input) ? "Invalid" : " " }

  // Checks if the input is valid email via regex matching.
  validEmail = (email) => {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
  }

  // Handles all changes from children components by checking dataset field.
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

  // Creates new education object and adds to education array
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

  // Removes education object at index
  removeEducation = (index) => {
    let education = [...this.state.education]
    education.splice(index, 1)
    this.setState({ education: education })       
  }

  // Creates new experience object and adds to experience array
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

  // Removes experience object at index
  removeExperience = (index) => {
    let experience = [...this.state.experience]
    experience.splice(index, 1)
    this.setState({ experience: experience })       
  }

  // Main render. Uses router to switch between between pages. Header is always rendered at the top.
  render() {
    return (
      <Router>
        <Header />
        <Switcher 
          values={this.state} 
          handleChange = {this.handleChange}
          addEducation = {this.addEducation}
          removeEducation = {this.removeEducation}
          addExperience = {this.addExperience}
          removeExperience = {this.removeExperience}
        />
      </Router>
    )
  }
}

export default App;
