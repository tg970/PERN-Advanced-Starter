/* eslint-disable */

import React, { useEffect, useState }  from "react";
import { connect } from "react-redux";
import { addUser } from "store/actions/index";
import axios from 'axios';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from '@material-ui/core/CircularProgress';

import { title, primaryColor, grayColor } from "assets/jss/material-kit-react.js"

const styles = {
  title,
  section: {
    color: grayColor,
    paddingLeft: "50px",
  },
  loadingWrap: {
    paddingTop: '75px',
    paddingLeft: '25px',
    color: primaryColor,
  },
  listWrap: {
    paddingTop: '10px',
  }
};

const useStyles = makeStyles(styles);

function WorkSection(props) {
  const classes = useStyles();
  const { addUser, users } = props;

  const [showLoading, setLoading] = useState(false);

  useEffect(() => {
    if (!props.users.length) {
      setLoading(true);
      axios.get('/api/users/all')
        .then((response) => {
          setLoading(false);
          addUser(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  });
  
  return (
    <div className={classes.section}>
      <h4 className={classes.title}><u>Get Data</u></h4>
      {showLoading ?
        <div className={classes.loadingWrap}>
          <CircularProgress color={"inherit"} />
        </div>
        :
        <ul className={classes.listWrap}>
          {users && users.map((item, ind) => {
            return (
              <li key={ind}>
                ID: {item.id}, {item.name}, {item.tacos ? ` 🌮` : null}
              </li>
            )
          })}
        </ul>
      }

    </div>
  );
}



const mapDispatchToProps = (dispatch) => {
  return {
    addUser: user => dispatch(addUser(user))
  };
};

const mapStateToProps = (state) => {
  return { users: state.users };
};

const WorkSectionConn = connect(mapStateToProps, mapDispatchToProps)(WorkSection);

export default WorkSectionConn
