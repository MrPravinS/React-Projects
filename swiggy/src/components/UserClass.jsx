import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log( "Constructor Call");

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
        avatar_url: "avatardummy.com",
      },
    };
  }

   componentDidMount() {  
    this.timer = setInterval(()=>{
     console.log("Hey React Master");
     
    },1000)
  }

  componentDidUpdate(prevProps,prevState) {
    if(this.state.count !== prevState.count){
       // code
    }
  }

  componentWillUnmount(){
     clearInterval(this.timer) // clear the task on the dom
  }
  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    // const { count } = this.state;
    // console.log(name, "Render Call");

    return (
      <div>
        <img className="h-36 w-36 rounded-full" src={avatar_url} alt="" />
        <h1 className="text-xl font-bold items-center">Name: {name}</h1>
        <h2 className="font-medium">Location: {location}</h2>
      </div>
    );
  }
}

export default UserClass;
