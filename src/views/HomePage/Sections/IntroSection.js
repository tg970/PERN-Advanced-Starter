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
              description="In order to create helpful apps we need a way to store information and data. When it comes to implementing the tried and true SQL resources it’s hard to compete with Postgres when it comes to robust solutions that provide reliability without being overly complicated. Or for that matter, expensive. With pre-formatted schema files we demonstrate the ability of static formatting parameters to verify new data. The same can be done with dynamically formatted search strings to ease search and retrieval. "
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
              description={"Breathing life into the stack, an Express Server is built on top of Node.js to interact with the both the database and frontend client. Utilizing ‘pg-promise’ we integrate the database by connecting it with the incoming network requests from frontend clients. Javascript API’s have scalable potential by utilizing asynchronous, non-blocking I/O operations. Debugging database operations while in development can be challenging so diagnostic reports are also implemented to catch helpful information for creating and maintaining endpoints."}
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
              description="Is it just me, or is there a lot to get excited about when it comes to beautiful, dynamic, and reactive user interfaces? The powerful React framework enabled with React Router and Redux creates the unparalleled snappines only a client side, single page application (SPA) can offer. Once mounted in a visitor’s browser, the client only needs to send and receive JSON from the API to dynamically render content. This means UI operations are sped up by freeing up resources both in the client and API. Adding in a fully capable UI Kit from Creative Tim built on top of React Material UI puts the icing on the cake!"
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
