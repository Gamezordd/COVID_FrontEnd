import React,{Component} from "react";
import {Container, Grid, Button, Box, TextField, Typography} from '@material-ui/core';
import { Publish } from "@material-ui/icons";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = {
    root: {
      background: "black"
    },
    input: {
      color: "white"
    }
  };
  

function Home(props){
const { classes } = props;
    return(
        <Container maxWidth='lg'>
            <Grid container direction="row">
                <Grid container direction="column" alignItems="flex-start" justify="center" xs={4} style={{paddingRight:"2vw", paddingLeft:"2vw"}}>
                    <Typography variant="h5" style={{color:"#fff", paddingTop:"6vh", margin:5}}>
                        Check Symptoms
                    </Typography>
                    
                    <TextField 
                        inputProps={{className: classes.input}} 
                        variant="filled" 
                        fullWidth 
                        style={{marginTop:"6vh"}} 
                        className="textar" 
                        label="temperature"/>
                    <TextField inputProps={{className: classes.input}} variant="filled" fullWidth style={{marginTop:"5vh"}} label="Something else"/>
                    <TextField inputProps={{className: classes.input}} variant="filled" fullWidth style={{marginTop:"5vh"}} label="Yet Something Else"/>
                    <Grid direction="row" container alignItems="flex-start" style={{marginTop:"6vh"}}>
                        <Box my={3} mr={2}>
                            <Button startIcon={<Publish/>} variant="contained" color="primary">
                                Upload
                            </Button>
                        </Box>
                        <Box my={3}>
                            <input
                                accept="image/*"
                                id="contained-button-file"
                                multiple
                                style={{display:"none"}}
                                type="file"
                            />
                            <label style={{paddingTop:20, margin:5, marginTop:"8vh"}} htmlFor="contained-button-file">
                                <Button  variant="contained" color="primary" component="span">
                                Select Picture
                                </Button>
                            </label>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container direction="column" xs={4}>

                </Grid>
                <Grid container direction="column" xs={4}>

                </Grid>
            </Grid>
        </Container>
    )
}

Home.propTypes = {
    classes: PropTypes.object.isRequired
    };
    

export default withStyles(styles)(Home);