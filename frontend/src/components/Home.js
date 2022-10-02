import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

class Home extends React.Component {
  render() {
    return (
      <Container>
        <h1>Home</h1>
        <p>
            <Link to ="/login/">Login</Link>
        </p>
        <p>
            <Link to ="/register">Register</Link>
        </p>
        <p>
            <Link to ="/dashboard">dashboard</Link>
        </p>
      </Container>
    );
  }
}

export default Home;
