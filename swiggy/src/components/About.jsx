import React from 'react'
import User from '../components/User'
import UserClass from './UserClass'
 
const About = () => {
  return (
    <div>
        <h1>This is About Page</h1>
        {/* <User/> */}
        <UserClass name={"Pravin"} location={"Nagpur"}/>
    </div>
  )
}

export default About