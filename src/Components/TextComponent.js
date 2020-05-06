import React from "react";
import { TextField } from "@material-ui/core";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";


const styles = {
    root: {
      background: "black"
    },
    input: {
      color: "white"
    },
    placeholder: {
      color: "#696969"
    }
  };

function Text(props){
    const { classes } = props;
    return(
        <div>
        <TextField InputLabelProps={{className: classes.placeholder}} inputProps={{className: classes.input}} variant="filled" fullWidth style={{marginTop:"5vh"}} label="Something else"/>
        <TextField InputLabelProps={{className: classes.placeholder}} inputProps={{className: classes.input}} variant="filled" fullWidth style={{marginTop:"5vh"}} label="Yet Something Else"/>
        </div>
    );
}

Text.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Text);