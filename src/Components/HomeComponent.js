import React,{Component} from "react";
import {Grid, Button, Box, Typography} from '@material-ui/core';
import { Publish } from "@material-ui/icons";
import Autocomplete from 'react-google-autocomplete';
import MapContainer from './MapComponent';
import Text from "./TextComponent";

export default class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            lat: 70,
            lng: 45,
            loadMap: false,
            image:''
        }

    }

    onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
          let reader = new FileReader();
          reader.onload = (e) => {
            this.setState({image: e.target.result});
          };
          reader.readAsDataURL(event.target.files[0]);
        }
      }

    renderImage(){
        if (this.state.image !== ''){
            return(
                <Grid container justify="center" xs={12}>
                    <img src={this.state.image} height="400" alt="SelectedImage"/>
                </Grid>
            )
        }
        else{
            return(
                <Grid container xs={4} alignItems="center" style={{flex:7}}>
                    <Typography variant="h5" style={{color:"#fff"}}>
                        Selected Image Appears Here
                    </Typography>
                </Grid>
            )
        }
    }
    renderMap(){
        if(this.state.loadMap){
            console.log("loadmap: ", this.state.loadMap);
            return(
                <MapContainer 
                    lat={this.state.lat} 
                    lng={this.state.lng}
                />
            )
        }
        else{
            return(
                <Grid item xs={4}>
                <Typography variant="h5" style={{color: "white"}}>
                    Select location to begin
                </Typography>
                </Grid>
            )
        }
    }

    render(){
        return(
                <Grid container justify="space-evenly" direction="row">
                    <Grid item direction="column" alignItems="flex-start" justify="center" xs={4} style={{ height:"100%", paddingRight:"2vw", paddingLeft:"2vw"}}>
                        <Typography variant="h5" style={{color:"#fff", paddingTop:"6vh", margin:5}}>
                            Check Symptoms
                        </Typography>

                        <Autocomplete
                            style={{width: '98%', height:"9vh", marginTop:"5vh", backgroundColor:"rgba(18,18,18,0.6)", borderColor:"rgba(0,0,0,0)", borderBottom:"black", color:"white"}}
                            onPlaceSelected={(place) => {
                                try{
                                console.log("location: ", place);
                                const coordinates = JSON.parse(JSON.stringify(place.geometry.location));
                                this.setState({
                                    lat: JSON.stringify(coordinates.lat),
                                    lng: JSON.stringify(coordinates.lng),
                                    loadMap: true
                                })                                
                                }
                                catch{
                                    alert('Error in text field. Possibly Daily quota exceeded.')                                }
                            }}
                            types={['(regions)']}
                        />
                        <Text/>
                        <Grid container direction="row" alignItems="flex-start" style={{marginTop:"4vh"}}>
                            <Box my={3} mr={2}>
                                <Button startIcon={<Publish/>} variant="contained" color="primary">
                                    Upload
                                </Button>
                            </Box>
                            <Box my={3}>
                                <input
                                    accept="image/*"
                                    id="contained-button-file"
                                    onChange= {(e) => this.onImageChange(e)}
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
                    <Grid container direction="column" justify="center" xs={4} style={{padding:"2%"}}>
                        {this.renderMap()}
                    </Grid>

                    <Grid container direction="column" xs={4} style={{padding:"2%"}}>
                        {this.renderImage()}
                    </Grid>
                </Grid>
        );
    }   
}

    