import React, {Component} from 'react'
import Switcher from "./components/Switcher"
import './App.css';

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

  render() {
    return (
      <Switcher 
        values={this.state} 
        handleChange = {this.handleChange}
        addEducation = {this.addEducation}
        removeEducation = {this.removeEducation}
        addExperience = {this.addExperience}
        removeExperience = {this.removeExperience}
      />
    )
  }
}

export default App;
