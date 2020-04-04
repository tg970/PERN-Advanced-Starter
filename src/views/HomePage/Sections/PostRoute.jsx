/* eslint-disable */

import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

const styles = {
  textCenter: {
    textAlign: 'center',
  }
};

const useStyles = makeStyles(styles);

export default function WorkSection() {
  const classes = useStyles();

  const defultForm = {
    name: "",
    message: "",
    tacos: false
  }

  const [data, setData] = useState(defultForm);
  const [showLoading, setLoading] = useState(false);

  function onSubmit() {
    setLoading(true);
    console.log(data);
    // network.post("sections", data, (newData) => {
    //   setLoading(false);
    //   if (newData) setData(defultForm);
    //   if (newData.project) swapProject(newData.project); //Need to get something from the server here
    // }, true)
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
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} className={classes.textCenter}>
          <Button onClick={onSubmit} color="primary">Send Message</Button>
        </GridItem>
      </GridContainer>
    </form>
  );
}
