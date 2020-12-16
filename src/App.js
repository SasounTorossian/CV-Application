import React, {Component} from 'react'
import PersonalDetails from "./components/PersonalDetails"
import EducationDetails from "./components/EducationDetails"
// import ExperienceDetails from "./components/ExperienceDetails"

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      page: 1,
      name: "",
      email: "",
      phone: "",
      education: [{
        school: "",
        course: "",
        startDate: "",
        endDate: ""
      }],
      experience: [{
        company: "",
        role: "",
        startDate: "",
        endDate: "",
        details: ""
      }],
    }
  }

  nextPage = () => {
    this.setState({
      page: this.state.page + 1
    })
  }

  prevPage = () => {
    this.setState({
      page: this.state.page - 1
    })
  }

  handleChange = (input) => e => {
    // Handle different kind of input from Personal vs. Edu/Exp
    this.setState({
      [input]: e.target.value
    })      
  }

  addEdu = (e) => {
    const newEdu = {
      school: "",
      course: "",
      startDate: "",
      endDate: ""
    }

    this.setState({ 
      education: [...this.state.education, newEdu],
    })       

    console.log(this.state.education)
  }

  render() {
    const { page } = this.state
    const {name, email, phone, education, experience} = this.state
    const values = {name, email, phone, education, experience}

    switch(page) {
      case 1:
        return (
          <div>
            <h1>Personal Details</h1>
            <PersonalDetails
              values={values}
              nextPage = {this.nextPage}
              handleChange={this.handleChange}
            />
          </div>
        )

      case 2:
        return (
          <div>
            <h1>Education Details</h1>
            <EducationDetails
              values={values}
              prevPage = {this.prevPage}
              nextPage = {this.nextPage}
              addEdu={this.addEdu}
            />
          </div>
        )

      case 3:
        return <h1>Experience Details</h1>

      case 4:
        return <h1>Confirm</h1>

      case 5:
        return <h1>Success</h1>
    }
  }
}

export default App;
