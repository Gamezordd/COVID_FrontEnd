import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import Home from "./HomeComponent";
export default class Router extends React.Component{

    render(){
        console.log("recieved route: ", this.props.route)
        if(this.props.route === 0){
            return(
                <Home/>
            );
        }
        if(this.props.route === 1){
            return(
                <Guidelines/>
            );
        }
        if(this.props.route === 2){
            return(
                <Precautions/>
            );
        }
        if(this.props.route === 3){
            return(
                <SelfDiagnosis/>
            );
        }
        if(this.props.route === 4){
            return(
                <Members/>
            );
        }
    }
}

export function Guidelines() {
    return(
        <Grid container justify="center" xs={12}>
            <Grid container justify="center" xs={11} className="border" style={{marginTop:"5vh", textAlign:"center"}}>
                <Typography variant="h5" color="primary" style={{marginLeft:"1vw", marginRight:"1vw", marginTop:"10vh", marginBottom:"10vh"}}>
                    Guidelines will be added stat! Please visit later. :)
                </Typography>
            </Grid>
        </Grid>
    )
}
export function Precautions() {
    return(
        <Grid container justify="center" xs={12}>
            <Grid justify="center" container xs={11} className="border" style={{marginTop:"5vh", textAlign:"center"}}>
                <Typography variant="h5" color="primary" style={{marginLeft:"1vw", marginRight:"1vw", marginTop:"10vh", marginBottom:"10vh"}}>
                    Precautions will be added stat! Please visit later. :)
                </Typography>
            </Grid>
        </Grid>
    )
}
export function SelfDiagnosis() {
    return(
        <Grid container justify="center" xs={12}>
            <Grid justify="center" container xs={11} className="border" style={{marginTop:"5vh", textAlign:"center"}}>
                <Typography variant="h5" color="primary" style={{marginLeft:"1vw", marginRight:"1vw", marginTop:"10vh", marginBottom:"10vh"}}>
                    Self-Diagnosis will be added stat! Please visit later. :)
                </Typography>
            </Grid>
        </Grid>
    )
}
export function Members() {
    return(
        <Grid container justify="center" xs={12}>
            <Grid justify="center" container xs={11} className="border" style={{marginTop:"5vh", textAlign:"center"}}>
                <Typography variant="h5" color="primary" style={{marginLeft:"1vw", marginRight:"1vw", marginTop:"10vh", marginBottom:"10vh"}}>
                    Members will be added stat! Please visit later. :)
                </Typography>
            </Grid>
        </Grid>
    )
}