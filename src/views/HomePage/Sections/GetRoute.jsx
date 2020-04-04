/* eslint-disable */

import React, { useEffect, useState }  from "react";
import { connect } from "react-redux";
import { addUser } from "store/actions/index";
import axios from 'axios';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

const styles = {
  section: {
    color: 'black',
  }
};

const useStyles = makeStyles(styles);

function WorkSection(props) {
  const classes = useStyles();
  const { addUser, users } = props;

  const [showLoading, setLoading] = useState(false);

  useEffect(() => {
    if (!props.users.length) {
      axios.get('/api/users/all')
        .then((response) => {
          console.log(response);
          addUser(response.data);
          // this.setState({ loaded: true });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  });
  console.log(users);
  return (
    <div className={classes.section}>
      <ul>
        {users && users.map((item, ind) => {
          return (
            <li key={ind}>{item.name}</li>
          )
        })}
      </ul>
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
