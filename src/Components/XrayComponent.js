import React, {Component} from "react";
import { Typography, Container, Modal, Fade, Backdrop, TextField, Button ,Grid, Box} from "@material-ui/core";
import { Publish } from "@material-ui/icons";

export default class XrayModal extends Component{
    render(){
        console.log("modal: ", this.props.route)
        return(
            <Modal
            style={{padding:"15vh"}}
            BackdropComponent={Backdrop}
            closeAfterTransition
            open={this.props.route}
            onClose={() => {
                this.props.toggleModal();
            }}>
                <Fade in={this.props.route}>
                <Container style={{backgroundColor: "#2e2e2e", width:"fit-content"}}>
                    <Typography variant="h5" gutterBottom style={{color:"#fff", paddingTop:10}}>
                        X-Ray Upload
                    </Typography>
                    <Grid direction="column" container>
                        <Grid container direction="row">
                            <TextField variant="outlined" style={{marginTop:5, color:"#fff"}} label="temperature"/>
                            <TextField variant="outlined" style={{margin:5, marginLeft:20}} label="Something else"/>
                            <TextField variant="outlined" style={{margin:5, marginLeft:20}} label="Yet Something Else"/>
                        </Grid>
                        <Grid direction="row" container>
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
                        <label style={{paddingTop:20, paddingBottom:20}} htmlFor="contained-button-file">
                            <Button  variant="contained" color="primary" component="span">
                            Select Picture
                            </Button>
                        </label>
                        </Box>
                        </Grid>

                    </Grid>
                </Container>
                </Fade>
            </Modal>
        )
    }
}