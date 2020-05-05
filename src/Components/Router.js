import React from 'react';
import { Container, Typography } from '@material-ui/core';

export default class Router extends React.Component{
    constructor(props){
        super(props)
    }
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

export function Home() {
    return(
        <Container>
            <Typography variant="h5" color="primary">
                Content goes here
            </Typography>
        </Container>
    )
}
export function Guidelines() {
    return(
        <Container>
            <Typography variant="h5" color="primary">
                Home goes here
            </Typography>
        </Container>
    )
}
export function Precautions() {
    return(
        <Container>
            <Typography variant="h5" color="primary">
                Precautions Content goes here
            </Typography>
        </Container>
    )
}
export function SelfDiagnosis() {
    return(
        <Container>
            <Typography variant="h5" color="primary">
                Self-Diagnosis Content goes here
            </Typography>
        </Container>
    )
}
export function Members() {
    return(
        <Container>
            <Typography variant="h5" color="primary">
                Members Content goes here
            </Typography>
        </Container>
    )
}