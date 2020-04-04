/* eslint-disable */

import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import LineStyle from '@material-ui/icons/LineStyle';
import Fingerprint from '@material-ui/icons/Fingerprint';
import FlightLanding from '@material-ui/icons/FlightLand';
import Person from '@material-ui/icons/Person';

const styles = (theme) => ({
  root: {
    padding: '1em',
    marginTop: '1em',
    paddingBottom: '3em',
    width: '100%',
    maxWidth: '1020px',
  },
  h2: {
    marginTop: '10px',
    marginBottom: '0',
  },
  card: {
    backgroundColor: '#92CD89',
  },
  icon: {
    fontSize: 40,
    marginTop: 10,
  }
});

class PageLinks extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    const { classes } = this.props;
    return (
      <Paper
        className={classes.root}
        elevation={5}
      >
        <h2 className="pageLinkHeader" >
          Check out these pages
        </h2>
        <GridContainer >
          <GridItem className={classes.card, 'card' } xs={12} sm={12} md={6}>
            <Link id="componentsCard" className="cardLink" to="/components">
              <LineStyle className={classes.icon}/>
              <h5>
                Components
              </h5>
            </Link>
          </GridItem>
          <GridItem className={classes.card, 'card' } xs={12} sm={12} md={6}>
            <Link id="loginCard" className="cardLink" to="/login">
              <Fingerprint className={classes.icon}/>
              <h5>
                Login
              </h5>
            </Link>
          </GridItem>
          <GridItem className={classes.card, 'card' } xs={12} sm={12} md={6}>
            <Link id="landingCard" className="cardLink" to="/landing">
              <FlightLanding className={classes.icon}/>
              <h5>
                Landing
              </h5>
            </Link>
          </GridItem>
          <GridItem className={classes.card, 'card' } xs={12} sm={12} md={6}>
            <Link id="profileCard" className="cardLink" to="/profile">
              <Person className={classes.icon}/>
              <h5>
                Profile
              </h5>
            </Link>
          </GridItem>
        </GridContainer>
      </Paper>
    )
  }
}

export default withStyles(styles)(PageLinks);
