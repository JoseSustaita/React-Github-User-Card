import React from "react";

class Usercard extends React.Component {
  constructor() {
    super();
    this.state = {
      userData: [],
    };
  }

  componentDidMount() {
    fetch("https://api.github.com/users/josesustaita")
      .then((res) => res.json())
      .then((data) => this.setState({ userData: data }))
      .catch((error) => console.log(error));
  }
  render() {
    console.log("rendering");
    console.log(this.state);
    return (
      <div className="App">
        <header>
          <h1 className="title">Jose's Github!</h1>
          <div className="container">
            <div className="card">
              <h4>Username: {this.state.userData.login}</h4>
              <p>Followers: {this.state.userData.followers}</p>
              <img
                className="userCard_avatar"
                alt="User Pic"
                src={this.state.userData.avatar_url}
              />
              <p>Location: {this.state.userData.location}</p>
              <a href={this.state.userData.html_url}>My Github</a>
            </div>
          </div>
        </header>
      </div>
    );
  }
}
export default Usercard;
