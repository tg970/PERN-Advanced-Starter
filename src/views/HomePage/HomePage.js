/* eslint-disable */
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Paint from "@material-ui/icons/FormatPaint";
// core components

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import IntroSection from "./Sections/IntroSection.js";
import WorkSection from "./Sections/WorkSection.js";
import Examples from "./Sections/Examples.js";
import Readme from "./Sections/Readme.js";

import homeBg from "assets/img/sign.jpg";

const useStyles = makeStyles(styles);

export default function HomePage(props) {
  const classes = useStyles();

  const sectionScroll = (id) => {
    let top = document.getElementById(id).getBoundingClientRect().top;
    window.scroll({
      top: top,
      behavior: 'smooth'
    });
  }

  return (
    <div>
      <Parallax filter image={homeBg}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={8}>
              <h1 className={classes.title}>Every App Starts<br />With a Foundation</h1>
              <h4>
                This app is designed as a launching point for future production
                applications. Using the latest and greatest of web development
                technologies including a full suite UI kit this platform
                provides a powerful spring board for rapid prototyping and
                development.
              </h4>
              <br />
              <Button
                color="info"
                onClick={() => sectionScroll('section-scroll')}
              >
                <Paint />
                Find out more
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container} id="section-scroll">
          <IntroSection />
          <WorkSection />
          <Examples />
          <Readme />
        </div>
      </div>

    </div>
  );
}
