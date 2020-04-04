/* eslint-disable */

import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import Form from "components/Users/Form";
import List from "components/Users/List";
import LoadBtn from "components/Users/LoadBtn";

const styles = (theme) => ({
  root: {
    padding: '1em',
    marginTop: '1em',
    width: '100%',
    maxWidth: '1020px',
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
          Example of post and get API routes:
        </h2>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <h3>
              Add a user:
            </h3>
            <Form />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <h3>
              List of users:
            </h3>
            <List />
            <LoadBtn />
          </GridItem>
        </GridContainer>
      </Paper>
    )
  }
}

export default withStyles(styles)(SecRedux);

// export default SecRedux;
