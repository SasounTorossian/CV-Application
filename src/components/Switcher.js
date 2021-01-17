import React from 'react'
import Header from "./Header"
import Introduction from "./Introduction"
import PersonalDetails from "./PersonalDetails"
import EducationDetails from "./EducationDetails"
import ExperienceDetails from "./ExperienceDetails"
import ConfirmDetails from "./ConfirmDetails"
import Success from "./Success"
import {BrowserRouter as Router, Switch, Route, useLocation} from 'react-router-dom'
import { AnimatePresence, motion } from "framer-motion"

const Switcher = ({values, handleChange, addEducation, removeEducation, addExperience, removeExperience}) => {
    return (
        <Router>
          <Route
            path = "/" 
            component={Header}
          />

          <Route
            exact path = "/" 
            component={Introduction}
          />  


          <Switch>
            <Route
                path = "/introduction" 
                render={(props) => (
                  <Introduction 
                    {...props} 
                    handleChange={handleChange} 
                  />
                )} 
            />

            <Route
              path = "/personal" 
              render={(props) => (
                <PersonalDetails 
                  {...props} 
                  values={values}
                  handleChange={handleChange} 
                />
              )} 
            />

            <Route
              path = "/education" 
              render={(props) => (
                <EducationDetails 
                  {...props} 
                  values={values}
                  handleChange = {handleChange}
                  addEdu={addEducation}
                  removeEdu={removeEducation}
                />
              )} 
            />

            <Route
              path = "/experience" 
              render={(props) => (
                <ExperienceDetails 
                  {...props} 
                  values={values}
                  handleChange = {handleChange}
                  addExp={addExperience}
                  removeExp={removeExperience}
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

          <Route
            exact path = "/success" 
            component={Success}
          />  

          </Switch>
      </Router>
    )
} 

export default Switcher