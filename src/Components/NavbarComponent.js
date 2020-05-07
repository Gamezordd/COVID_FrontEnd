import React, {Component} from "react";
import {Grid, Button, ButtonGroup, Typography, Menu, MenuItem} from "@material-ui/core";
import { Info } from "@material-ui/icons";
import MenuIcon from "@material-ui/icons/Menu";
import {isMobile} from "react-device-detect";

export default class Navbar extends Component {
    constructor(props){
        super(props);
        this.state={
            isOpen:false,
            anchorEl:null
        }
        this.handleToggle=this.handleToggle.bind(this);
    }
    handleClick = (route) => {
        this.props.navigate(route);
    }
    handleToggle(){
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    handleMenu = event => {
        this.setState({ anchorEl: event.currentTarget });
      };
    
      handleClose = () => {
        this.setState({ anchorEl: null });
      };
    navButtons(){
        

        if(isMobile){
            return(
                <div>
                    <Button variant="contained" size="small" color="primary" onClick={this.handleMenu} style={{margin: "3%"}}>
                        <MenuIcon/>
                    </Button>
                    <Menu
                        keepMounted
                        anchorEl={this.state.anchorEl}
                        open={Boolean(this.state.anchorEl)}
                        onClose={this.handleClose}
                        >
                        <MenuItem onClick={() => this.handleClick(0)}>Home</MenuItem>
                        <MenuItem onClick={() => this.handleClick(1)}>Guidelines</MenuItem>
                        <MenuItem onClick={() => this.handleClick(2)}>Precautions</MenuItem>
                        <MenuItem onClick={() => this.handleClick(3)}>Self-Diagnosis</MenuItem>
                        <MenuItem onClick={() => this.handleClick(4)}>Team Members</MenuItem>
                    </Menu>
                </div>
            )
        }
        else{
            return(
                <div>
                    <Button 
                        startIcon={<Info/>}
                        variant="outlined" 
                        size="small" 
                        color="primary"  
                        onClick={() => this.props.toggleModal()} 
                        style={{marginRight:"2%", display:"none"}}
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
                </div>
            )
        }
    }
    render(){
        return(
            <Grid container className="navbar">
                <Grid container alignItems="center" xs={6} md={3} onClick={() => this.handleClick(0)}>
                    <Typography variant="h5" style={{marginLeft:"3%"}} >
                        Flatpex
                    </Typography>
                </Grid>

                <Grid container xs={6} md={9} justify="flex-end" style={{padding:2}}>
                    {this.navButtons()}
                </Grid>
            </Grid>

        )
    }
}