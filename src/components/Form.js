/* eslint-disable */

import React, { Component } from "react";
import { connect } from "react-redux";
import { addUser } from "../store/actions/index";

const mapDispatchToProps = (dispatch) => {
  return {
    addUser: user => dispatch(addUser(user))
  };
};

class ConnectedForm extends Component {
  constructor() {
    super();
    this.state = {
      name: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  postData(url = ``, data = {}) {
    console.log(url);
    return fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify(data)
    })
    .then((response) => {return response.json()}) // parses response to JSON
    .catch(error => console.error(`Fetch Error =\n`, error));
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = this.state;
    this.postData(`/api/users/add`, data)
      .then((response) => {
        this.props.addUser(response);
      });
    this.setState({ name: "" });
  }

  render() {
    const { name } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit" className="btn btn-success btn-lg">
          SAVE
        </button>
      </form>
    );
  }
}

const Form = connect(null, mapDispatchToProps)(ConnectedForm);

export default Form;
