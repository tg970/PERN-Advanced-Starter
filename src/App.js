/* eslint "react/prop-types": off */

import React, { Component } from "react";
import "./app.css";
import Button from "./components/CustomButtons/Button.jsx";
import ReactImage from "./react.png";
// import List from "./components/List";
// import Form from "./components/Form";
import Header from "./components/Header/Header";
import HeaderLinks from "./components/Header/HeaderLinks";
import Footer from "./components/Footer/Footer";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { greeting: null };
  }

  componentDidMount() {
    fetch("/api/hello")
      .then(res => res.json())
      .then((data) => {
        this.setState({ greeting: data.message });
        console.log(data);
      });
  }

  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          brand="Bud Tender"
          rightLinks={<HeaderLinks />}
          fixed
          color="primary"
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
          {...rest}
        />
        <Button className="hello-btn" color="primary">
          Hello World
        </Button>
        {this.state.greeting ? (
          <h1>
            {this.state.greeting}
          </h1>
        ) : (
          <h1>
            Loading... please wait!
          </h1>
        )}
        <img className="logo" src={ReactImage} alt="react" />
        {/* <div>
          <h2>
            Users
          </h2>
          <List />
        </div>
        <div>
          <h2>
            Add a new user
          </h2>
          <Form />
        </div> */}
        <h3>
          Check out these pages:
        </h3>
        <ul>
          {/* <li><a href="/about">About</a></li> */}
          <li><a href="/login">Login</a></li>
          <li><a href="/components">Components</a></li>
          <li><a href="/landing">Landing</a></li>
          <li><a href="/profile">Profile</a></li>
        </ul>
        <Footer />
      </div>
    );
  }
}
