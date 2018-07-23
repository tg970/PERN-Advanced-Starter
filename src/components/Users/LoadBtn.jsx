/* eslint "arrow-body-style": off, "react/prop-types": off,
 "no-restricted-syntax": off, "prefer-const": off */

import React, { Component } from "react";
import { connect } from "react-redux";
import { addUser } from "store/actions/index";

import Button from "components/CustomButtons/Button.jsx";

const mapDispatchToProps = (dispatch) => {
  return {
    addUser: user => dispatch(addUser(user))
  };
};

const mapStateToProps = (state) => {
  return { users: state.users };
};

class ConnectedLoadBtn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    fetch('/api/users/all')
      .then(res => res.json())
      .then((data) => {
        data.forEach((user) => {
          for (let i of this.props.users) {
            if (user.id === i.id) return;
          }
          this.props.addUser(user);
        });
        this.setState({ loaded: true });
      });
  }

  render() {
    return (
      <Button
        color="success"
        onClick={this.handleClick}
        disabled={this.state.loaded}
      >
        Load Users
      </Button>
    );
  }
}

const LoadBtn = connect(mapStateToProps, mapDispatchToProps)(ConnectedLoadBtn);

export default LoadBtn;
