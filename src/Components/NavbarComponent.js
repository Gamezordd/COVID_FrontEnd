import React, {Component} from "react";
import {Grid, Box, Button, ButtonGroup, Typography} from "@material-ui/core";
import { Info } from "@material-ui/icons";


export default class Navbar extends Component {
    constructor(props){
        super(props);
    }
    handleClick = (route) => {
        this.props.navigate(route);
    }
    render(){
        return(
            <Grid container className="navbar">
                <Grid container alignItems="center" xs={3} onClick={() => this.handleClick(0)}>
                    <Typography variant="h5" style={{marginLeft:"3%"}} >
                        COVID-19 AI
                    </Typography>
                </Grid>

                <Grid container xs={9} justify="flex-end" style={{padding:3}}>
                <Button 
                    startIcon={<Info/>}
                    variant="outlined" 
                    size="small" 
                    color="primary"  
                    onClick={() => this.props.toggleModal()} 
                    style={{marginRight:"2%"}}
                    >
                    Submit X-Ray
                </Button>
                <ButtonGroup variant="text" color="inherit" className="buttons" style={{marginRight:"1%"}}>
                    <Button onClick={() => this.handleClick(0)}>Home</Button>
                    <Button onClick={() => this.handleClick(1)}>Guidelines</Button>
                    <Button onClick={() => this.handleClick(2)}>Precautions</Button>
                    <Button onClick={() => this.handleClick(3)}>Self-Diagnosis</Button>
                    <Button onClick={() => this.handleClick(4)}>Team Members</Button>
                </ButtonGroup>
                </Grid>
            </Grid>

        )
    }
}