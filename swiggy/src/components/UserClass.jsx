import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 3,
    };
  }

  render() {
    const { name, location } = this.props;
    const { count } = this.state;
    return (
      <div>
        <h1 className="text-md font-medium cursor-pointer">Count: {count}</h1>
        <button
          onClick={() => {
            this.setState({
              // user for update the state
              count: this.state.count + 1,
            });
          }}
        >
          Increment
        </button>
        <h1>Name: {name}</h1>
        <h2>Location: {location}</h2>
      </div>
    );
  }
}

export default UserClass;

