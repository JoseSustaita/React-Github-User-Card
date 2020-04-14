import React from "react";
import "./App.css";
import UserCard from "./Components/UserCard";
import FollowerCard from "./Components/FollowerCard";

class App extends React.Component {
  render() {
    console.log("rendering");
    console.log(this.state);
    return (
      <div className="Container">
        <UserCard />
        <FollowerCard />
      </div>
    );
  }
}
export default App;
