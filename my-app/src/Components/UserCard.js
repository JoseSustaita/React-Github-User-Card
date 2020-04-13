import React from "react";

class UserCard extends React.Component {
  constructor() {
    super();
    this.state = {
      avatar: [],
      location: [],
    };
  }
  componentDidMount() {
    console.log("Component did mount");
    fetch("https://api.github.com/users/josesustaita")
      .then((res) => res.json())
      .then((user) => {
        console.log(user);
        this.setState({ avatar: user.avatar_url });
        this.setState({ location: user.location });
      })
      .catch((err) => console.error(err));
  }
  render() {
    console.log("rendering");
    console.log(this.state);
    return (
      <div>
        <div className="Usercard">
          <h1>Hello I'm Jose!</h1>
          <img src={this.props.avatar} alt="User Avatar" />
          <h2>{this.props.location}</h2>
        </div>
      </div>
    );
  }
}
export default UserCard;
