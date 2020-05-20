import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

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
          <div className="card-container">
            <div className="card">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={this.state.userData.avatar_url} />
                <Card.Body>
                  <Card.Title>Username: {this.state.userData.login}</Card.Title>
                  <Card.Text>{this.state.userData.bio}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>
                    Followers: {this.state.userData.followers}
                  </ListGroupItem>
                  <ListGroupItem>
                    Location: {this.state.userData.location}
                  </ListGroupItem>
                  <ListGroupItem>
                    Repos: {this.state.userData.public_repos}
                  </ListGroupItem>
                </ListGroup>
                <Card.Body>
                  <Card.Link href={this.state.userData.html_url}>
                    My Github!
                  </Card.Link>
                </Card.Body>
              </Card>
            </div>
          </div>
        </header>
      </div>
    );
  }
}
export default Usercard;
