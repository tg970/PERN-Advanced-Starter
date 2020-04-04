/* eslint-disable */
import React, { useEffect, useState } from "react";
import ReactMarkdown from 'react-markdown';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import axios from 'axios';
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

import defaultStyles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";
import { infoColor } from "assets/jss/material-kit-react.js";

import markdownDefault from "../../../../README.md"

const styles = {
  ...defaultStyles,
  markdown: {
    background: "#2E2E2E",
    fontWeight: '400',
    borderRadius: '8px',
    paddingTop: '16px',
    paddingRight: '32px',
    paddingLeft: '32px',
    '& a': {
      color: infoColor
    },
    '& img': {
      maxWidth: '100%',
      maxWidth: '-webkit-fill-available',
    }
  },
  readMore: {
    paddingTop: '35px',
    minHeight: '250px',
    display: 'flex',
    flexDirection: 'Row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  socialIcons: {
    marginRight: '16px',
  }
}


const useStyles = makeStyles(styles);

export default function Readme() {
  const classes = useStyles();

  return (
    <div className={classes.section} style={{ paddingTop: '0' }}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title} style={{ marginBottom: '24px' }}>Setup Instructions</h2>
          <h4 className={classes.description} style={{ paddingBottom: '24px' }}>
            Checkout the setup instructions below to get the starter app up and running.
          </h4>
        </GridItem>
        <GridItem cs={12} sm={12} md={10} className={classes.markdown}>
          <ReactMarkdown source={markdownDefault} />
        </GridItem>
        <div className={classes.readMore}>
          <Button
            color="github"
            size="lg"
            href="https://github.com/tg970/PERN-Advanced-Starter"
            target="_blank"
          >
            <i className={classes.socialIcons + " fab fa-github"} />
            Setup Instructions on GitHub
          </Button>
        </div>
      </GridContainer>
    </div>
  );
}
