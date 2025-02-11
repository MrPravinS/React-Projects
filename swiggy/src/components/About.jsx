import React from "react";
import User from "../components/User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    // console.log("Parent Constructor called");

    super(props);
  }
  componentDidMount() {
    // console.log("Parent Did mount call");
  }

  render() {
    // console.log("Parent Render called");

    return (
      <div>
        <h1>This is About Page</h1>
        {/* <User/> */}
        {/* <UserClass/> */}
         <User/>
      </div>
    );
  }
}
// const About = () => {
//   return (
//     <div>
//         <h1>This is About Page</h1>
//         {/* <User/> */}
//         <UserClass name={"Pravin"} location={"Nagpur"}/>
//     </div>
//   )
// }

export default About;
