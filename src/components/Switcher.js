import React from 'react'
import Introduction from "./Introduction"
import PersonalDetails from "./PersonalDetails"
import EducationDetails from "./EducationDetails"
import ExperienceDetails from "./ExperienceDetails"
import ConfirmDetails from "./ConfirmDetails"
import Success from "./Success"
import {Switch, Route, useLocation} from 'react-router-dom'
import { AnimatePresence } from "framer-motion"

const Switcher = ({values, handleChange, addEducation, removeEducation, addExperience, removeExperience}) => {
    const location = useLocation()

    return (
    <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
            <Route
                exact path="/"
                render={(props) => (
                <Introduction 
                    {...props} 
                    handleChange={handleChange} 
                />
                )} 
            />

            <Route
                path="/introduction"
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
    </AnimatePresence>
    )
} 

export default Switcher