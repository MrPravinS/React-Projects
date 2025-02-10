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

  async componentDidMount() {
    // console.log( "Child components Did mount Call");
    // make a api call
    const data = await fetch("https://api.github.com/users/MrPravinS");
    const json = await data.json();
    console.log(json);

    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    // const { count } = this.state;
    // console.log(name, "Render Call");

    return (
      <div>
        <img src={avatar_url} alt="" />
        <h1>Name: {name}</h1>
        <h2>Location: {location}</h2>
      </div>
    );
  }
}

export default UserClass;
