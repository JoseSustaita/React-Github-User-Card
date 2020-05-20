import React from "react";
import "./App.css";
import UserCard from "./Components/UserCard";
import FollowerCard from "./Components/FollowerCard";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  render() {
    console.log("rendering");
    return (
      <div className="Container">
        <UserCard />
        <FollowerCard />
      </div>
    );
  }
}
export default App;
