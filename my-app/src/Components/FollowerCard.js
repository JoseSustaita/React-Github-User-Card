import React from "react";
class FollowerCard extends React.Component {
  constructor() {
    super();
    this.state = {
      followerData: [],
    };
  }

  componentDidMount() {
    fetch("https://api.github.com/users/josesustaita/followers")
      .then((res) => res.json())
      .then((data) => this.setState({ followerData: data }))
      .catch((error) => console.log(error));
  }
  render() {
    console.log("rendering");
    console.log(this.state);
    return (
      <div className="App">
        <h2>Followers</h2>
        <div className="follower-container">
          {this.state.followerData.map((follower) => {
            return (
              <a href={follower.html_url} className="followerCard">
                <div>
                  <img
                    className="followerCard_avatar"
                    alt="Follower Pic"
                    src={follower.avatar_url}
                  />
                  <h4>{follower.login}</h4>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    );
  }
}
export default FollowerCard;
