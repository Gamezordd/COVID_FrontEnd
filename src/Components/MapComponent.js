import React, {Component} from "react";
import GoogleMapReact from 'google-map-react';
import { Typography } from "@material-ui/core";

const AnyReactComponent = ({ text }) => (
    <div style={{
      color: 'white', 
      background: '#4949fc',
      padding: '15px 10px',
      display: 'inline-flex',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '1%',
      transform: 'translate(-50%, -50%)'
    }}>
      {text}
    </div>
  );
export default class MapContainer extends Component{
   constructor(props){
       super(props);
       this.state={
           trigger:true
       }
   }
   
    render(){
        console.log("Loadmap: lat:", parseFloat(this.props.lat), "lng: ", parseFloat(this.props.lng));
            return(
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyCJVtn4hvD9W7WVyTc7XH16jMZ24ZQTnoo'}}
                    defaultCenter={{lat: parseFloat(this.props.lat), lng: parseFloat(this.props.lng)}}
                    defaultZoom={11}
                >
                        <AnyReactComponent
                            lat={parseFloat(this.props.lat)}
                            lng={parseFloat(this.props.lng)}
                            text="o"
                        />
                </GoogleMapReact>
            )
            
    }
}
