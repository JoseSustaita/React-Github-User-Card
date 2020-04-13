import React from "react";
import "./App.css";
import UserCard from "./Components/UserCard";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      followers: [],
      followersText: "",
    };
  }
  componentDidMount() {
    console.log("Component did mount");
    fetch("https://api.github.com/users/josesustaita")
      .then((res) => res.json())
      .then((followers) => {
        console.log(followers);
        this.setState({ avatar: followers.avatar_url });
        this.setState({ location: followers.location });
      })
      .catch((err) => console.error(err));
  }
  render() {
    console.log("rendering");
    console.log(this.state);
    return (
      <div>
        <div className="Usercard">
          <UserCard avatar={this.state.avatar} location={this.state.location} />
        </div>
      </div>
    );
  }
}
export default App;
