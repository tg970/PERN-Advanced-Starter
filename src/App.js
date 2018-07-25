/* eslint "react/prop-types": off */

import React, { Component } from "react";

import Users from "./components/Users/Users";
import PageLinks from "./components/PageLinks/PageLinks";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/HomeFooter";

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
      });
  }

  render() {
    const { classes, ...rest } = this.props;
    return (
      <div className="appBody">
        <Header
          brand="PERN Starter App"
          fixed
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
          home
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
              Loading, please wait...
            </h1>
          )}
        </div>
        <div className="sectionWrap">
          <Users />
          <PageLinks />
        </div>
        <Footer />
      </div>
    );
  }
}
