/* eslint-disable */

import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import Form from "components/Form";
import List from "components/List";

const styles = theme => ({
  root: {
    padding: '1em',
    marginTop: '1em',
  },
  h2: {
    marginTop: '10px',
    marginBottom: '0',
  }
});

class SecRedux extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    const { classes } = this.props;
    return (
      <Paper
        className={this.props.classes.root}
        elevation={5}
      >
        <h2 className={this.props.classes.h2}>
          Proof of concept for PG-API and Redux
        </h2>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <h3>
              Add a user to via API and Redux:
            </h3>
            <Form />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <h3>
              List of users:
            </h3>
            <List />
          </GridItem>
        </GridContainer>
      </Paper>
    )
  }
}

export default withStyles(styles)(SecRedux);

// export default SecRedux;
