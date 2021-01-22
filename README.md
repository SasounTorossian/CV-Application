# CV-Application
Cv application page based off the Odin project curriculum. Page allow user to progress through application form, filling in their details. Live demo can be found on github.io [here](https://sasountorossian.github.io/CV-Application/). 

![CV demo](CV.gif)

Project was first attempt at react which slowed down development as I was getting familiar with the framework. Initially chosen to be a multi-page application to make it more interesting, multi-page was implement by saving the page number as a state in the top level App.js, until I discovered Routes as a library and began using that instead.

Styling was considered up front, and it was decided to use Material-UI to make the whole project look nicer. I am happy with the choice as the website looks relatively professional, and it allowed me to experiment with a popular styling library. The three main advantages of Material-UI were how good the form inputs looked, how easy it was to create a grid system to organize the layout, and finally, the ability to add a nav-bar which added to the page's functionality.

Form validation was the hardest aspect of the entire project, having to go through multiple libraries in order to impelment. Initial choice was Formik, but this proved too complicated for me at this time, and I found it interfered with the usual parent-child flow of state. After formik, react-hook-form was used which worked very well, but I wanted the form input to check for errors dynamically on changes, as well as on blur. This proved difficult to accomplish with react-hook-form, as every change in the input's status would overwrite a change in input, meaning that typed inputs would be missed. I eventually decided to not use any form validation library and implement it myself using error message variables and Material-UI input error cases, as below. The code below is simplified for explanation purposes.

Here the email variable is undefined, while the emailError variable is just a space. The emailError variable will contain an error message if needed.

```javascript
  personal: {
    email: "", 
    emailError: " ",
  },
```
Here the change handler is called on any change or blur event. In the event that there is an error message displayed, it will be evaluated into a boolean true through the !! operator. length is also checked so that the error does not fire when first loading the form, allowing the user a chance to fill them in.

```javascript
  <TextField 
      value={values.personal.email} 
      onBlur={handleChange}
      onChange={handleChange}
      error={!!values.personal.emailError && values.personal.emailError.length > 1}
      helperText={values.personal.emailError}
  />
```
This allows for dynamic error checking as below.

![Form demo](Form.gif)

Animations were also used to make the form more aesthetic. Initially used framer-motion which was very fun to play around with, but ultimately did not provide what I wanted, which was a carousel type rotation when pressing the "back" or "next" buttons. This was resolved by using the much simpler react-slide-routes, which necessitated the extraction of the route switcher from App.js (which was a class component) into Switcher.js (which is a functional component) in order to make use of the useLocation() function that the library requires. 

Really good project that exposed me to new frameworks and libraries. Next time would like to implement a more complex project that makes use of more interesting functionality. 
