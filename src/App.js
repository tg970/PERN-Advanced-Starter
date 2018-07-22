/* eslint "react/prop-types": off */

import React, { Component } from "react";

import Header from "./components/Header/Header";

import "./app.css";
import ReactImage from "./react.png";

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
      <div className="appBody">
        <Header
          brand="PERN Starter App"
          fixed
          color="dark"
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
          {...rest}
        />
        <div className="greeting">
          <img className="logo" src={ReactImage} alt="react" />
          {this.state.greeting ? (
            <h1>
              {this.state.greeting}
            </h1>
          ) : (
            <h1>
              Loading... please wait!
            </h1>
          )}
        </div>
        <h3>
          Check out these pages:
        </h3>
        <ul>
          {/* <li><a href="/about">About</a></li> */}
          <li><a className="homeLink" href="/components">Components</a></li>
          <li><a className="homeLink" href="/login">Login</a></li>
          <li><a className="homeLink" href="/landing">Landing</a></li>
          <li><a className="homeLink" href="/profile">Profile</a></li>
        </ul>
      </div>
    );
  }
}
