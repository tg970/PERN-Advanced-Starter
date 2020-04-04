/* eslint-disable */
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

import landing from "assets/img/landing.jpg";
import profile from "assets/img/profile.jpg";
import login from "assets/img/login.png";
import components from "assets/img/components.png";

import defaultStyles from "assets/jss/material-kit-react/views/componentsSections/exampleStyle.js";
import { title } from "assets/jss/material-kit-react.js";

const styles = {
  ...defaultStyles,
  title: {
    ...title,
    marginBottom: '60px',
    marginTop: '0px',
  },
  card: {
    paddingBottom: '35px',
  }
}

const useStyles = makeStyles(styles);

export default function Examples() {
  const classes = useStyles();

  const examples = [
    { to: "landing", img: landing },
    { to: "profile", img: profile },
    { to: "login", img: login },
    { to: "components", img: components },
  ]

  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <h2 className={classes.title}>Page Examples</h2>
        <GridContainer justify="center">
          {examples.map((item, ind) => {
            return (
              <GridItem xs={12} sm={12} md={6} key={ind}
                className={classes.card}
              >
                <Link to={item.to} className={classes.link}>
                  <img
                    src={item.img}
                    alt="..."
                    className={
                      classes.imgRaised +
                      " " +
                      classes.imgRounded +
                      " " +
                      classes.imgFluid
                    }
                  />
                  <Button color="info" size="lg">
                    View {item.to} page
                  </Button>
                </Link>
              </GridItem>
            )
          })}
        </GridContainer>
      </div>
    </div>
  );
}
