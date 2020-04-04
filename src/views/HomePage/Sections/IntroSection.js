/* eslint-disable */
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Postgres from "assets/img/tech/postgres.png";
import Express from "assets/img/tech/expressFull.svg";
import Node from "assets/img/tech/nodejs-simple.svg";
import ReactIcon from "assets/img/tech/react.svg";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import "./intro.css"

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function IntroSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>All Loaded Up</h2>
          <h5 className={classes.description}>
            That’s right, a whole stack all put together - ready to use for
            your next idea. Whether you’re an experienced developer, or you are
            still working on mastering the whole stack, this project provides a
            powerful resource of working examples to explore and adapt to your
            individual needs.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Database"
              description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              icon={() => <img style={{
                maxHeight: '300px',
                paddingLeft: '15px',
              }} src={Postgres} />}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="API"
              description={"Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."}
              icon={() => {
                return (
                  <div className="intro-info-section">
                    <img className="intro-img intro-express" src={Express} />
                    <img className="intro-img intro-node" src={Node} />
                  </div>
                )
              }}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Front End"
              description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              icon={() => <img style={{
                maxHeight: '300px',
                paddingRight: '15px',
              }} src={ReactIcon} />}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
