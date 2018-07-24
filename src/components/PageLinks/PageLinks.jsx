/* eslint-disable */

import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import LineStyle from '@material-ui/icons/LineStyle';

const styles = (theme) => ({
  root: {
    padding: '1em',
    marginTop: '1em',
  },
  h2: {
    marginTop: '10px',
    marginBottom: '0',
  },
  icon: {
    fontSize: 40,
  }
});

class PageLinks extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    const { classes } = this.props;
    console.log(classes);
    return (
      <Paper
        className={classes.root}
        elevation={5}
      >
        <h2>
          Check out these pages
        </h2>
        <GridContainer>
          <GridItem xs={6} sm={6} md={3}>
            <LineStyle className={classes.icon}/>
          </GridItem>
        </GridContainer>
      </Paper>
    )
  }
}

export default withStyles(styles)(PageLinks);
