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
    if(["name", "email", "phone"].includes(e.target.className)) {
      this.setState({ [e.target.className]: e.target.value }) 
    }
    else if(["school", "course", "startDateEdu", "endDateEdu"].includes(e.target.className)) {
      let education = [...this.state.education]
      education[e.target.dataset.id][e.target.className] = e.target.value
      this.setState({ education })
    }
    else if(["company", "role", "startDateExp", "endDateExp", "details"].includes(e.target.className)) {
      let experience = [...this.state.experience]
      experience[e.target.dataset.id][e.target.className] = e.target.value
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

    // switch(page) {
    //   case 1:
    //     return (
    //         <PersonalDetails
    //           values={values}
    //           nextPage = {this.onNextPage}
    //           handleChange={this.handleChange}
    //         />
    //     )

    //   case 2:
    //     return (
    //         <EducationDetails
    //           values={values}
    //           prevPage = {this.prevPage}
    //           nextPage = {this.onNextPage}
    //           handleChange = {this.handleChange}
    //           addEducation={this.addEducation}
    //         />
    //     )

    //   case 3:
    //     return (
    //       <ExperienceDetails
    //         values={values}
    //         prevPage = {this.prevPage}
    //         nextPage = {this.onNextPage}
    //         handleChange = {this.handleChange}
    //         addExperience={this.addExperience}
    //     />
    //     )

    //   case 4:
    //     return <h1>Confirm</h1>

    //   case 5:
    //     return <h1>Success</h1>

    //   // TODO: Add default case
    // }
  }
}

export default App;
