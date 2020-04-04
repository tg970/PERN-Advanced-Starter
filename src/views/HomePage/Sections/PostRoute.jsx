/* eslint-disable */

import React, { useState } from "react";
import { connect } from "react-redux";
import { addUser } from "store/actions/index";
import axios from 'axios';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";


import { title } from "assets/jss/material-kit-react.js";
import customCheckboxRadioSwitch from "assets/jss/material-kit-react/customCheckboxRadioSwitch.js";

const styles = {
  textCenter: {
    textAlign: 'center',
  },
  title: {
    ...title,
    // color: grayColor,
  },
  tacoSwitch: {
    display: 'flex',
  },
  ...customCheckboxRadioSwitch,
};

const useStyles = makeStyles(styles);

function PostRoute(props) {
  const classes = useStyles();

  const { addUser } = props;

  const defultForm = {
    name: "",
    message: "",
    tacos: false
  }

  const [data, setData] = useState(defultForm);
  const [showLoading, setLoading] = useState(false);

  function onSubmit() {
    setLoading(true);
    axios.post('/api/users/add', data)
      .then((response) => {
        props.addUser(response.data);
        setData(defultForm)
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function onChange(event) {
    event.persist();
    let { id, value } = event.target
    setData((data) => ({ ...data, [id]: value }));
  }

  function onChangeSwitch(field) {
    setData((data) => ({ ...data, [field]: !data[field] }));
  }

  return (
    <form>
      <h4 className={classes.title}><u>Post New Data</u></h4>
      <GridContainer >
        <GridItem xs={12} sm={9}>
          <CustomInput
            labelText="User Name"
            id="name"
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              onChange,
              value: data.name,
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={3} className={classes.tacoSwitch}>
          <FormControlLabel
            control={
              <Switch
                checked={data.tacos}
                onChange={() => onChangeSwitch('tacos')}
                value={data.tacos}
                classes={{
                  switchBase: classes.switchBase,
                  checked: classes.switchChecked,
                  thumb: classes.switchIcon,
                  track: classes.switchBar
                }}
              />
            }
            classes={{
              label: classes.label
            }}
            label="Tacos"
          />
        </GridItem>
        <GridItem xs={12} sm={12} >
        <CustomInput
          labelText="Message"
          id="message"
          formControlProps={{
            fullWidth: true,
            className: classes.textArea,

          }}
          inputProps={{
            multiline: true,
            rows: 3,
            onChange,
            value: data.message,
          }}
          />
        </GridItem>
      </GridContainer>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} className={classes.textCenter}>
          <Button onClick={onSubmit} color="primary">Add User</Button>
        </GridItem>
      </GridContainer>
    </form>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addUser: user => dispatch(addUser(user))
  };
};

const PostRouteConn = connect(null, mapDispatchToProps)(PostRoute);

export default PostRouteConn
