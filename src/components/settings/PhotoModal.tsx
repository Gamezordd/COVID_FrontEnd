import React from 'react'
import { compose } from 'recompose'
import { withFirebase } from '../../firebase/withFirebase'
import { connect } from 'react-redux'
import { Modal, Grid, Button, Icon, Progress } from 'semantic-ui-react'
import { LoadingContainer } from '../maps'
import { readFile } from 'fs'
import Cropper from "react-easy-crop";
import { Area } from 'react-easy-crop/types'
import getCroppedImg from './cropImage'
import { Firebase } from '../../firebase'
import { noPicturePlaceholder } from './constants'

interface IProps{
    buttonText: string
    uid?: string;
    firebase: Firebase;
}

interface IState{
    imageLoading: boolean;
    uploadedImage?: any;
    page: number;
    cropConfig: {
        crop: {x: number, y: number},
        zoom: number,
        aspect: number
    };
    showModal: boolean;
    croppedAreaPixels: any,
    isCropping: boolean,
    croppedImage: any;
    currentImage: string | undefined;
    isUploading: boolean;
    uploadProgress: number | undefined;
}

const initialState = {
    currentImage: undefined,
    showModal: false,
    uploadedImage: undefined,
    page: 1,
    imageLoading: true,
    cropConfig:{
        crop: {x: 0, y: 0},
        zoom: 1,
        aspect: 1/1
    },
    croppedAreaPixels: null,
    isCropping: false,
    croppedImage: null,
    isUploading: false,
    uploadProgress: undefined
}

class PhotoModal extends React.Component<IProps, IState>{
    constructor(props: IProps){
        super(props)
        this.state = initialState
    }

    renderImage(uid: string){
        if(!this.state.currentImage){
            this.props.firebase.getProfileImageUrl(uid).then(async url => {
                console.log("url: ", url);
                if(url === ""){
                    this.setState({currentImage: noPicturePlaceholder})
                }else{
                    this.setState({currentImage: url})
                }
                
            })
        }
        
        const loader = (<React.Fragment><LoadingContainer/><img style={{visibility: "hidden"}} src={this.state.currentImage} onLoad={() => {this.setState({imageLoading: false})}}/></React.Fragment>)
        const image = (<img src={this.state.currentImage} alt="current Image"/>)
        const profileImage = (<React.Fragment>{!this.state.imageLoading && this.state.currentImage ? image : loader}</React.Fragment>)
        return(
            <React.Fragment>
                {this.state.uploadedImage ? <img style={{display: "flex", justifyContent: "center", alignItems:"center"}} src={this.state.uploadedImage} /> : profileImage}
            </React.Fragment>
        )
    }

    handleCropComplete = async () => {
        try{
            this.setState({isCropping: true})

            const croppedImage = await getCroppedImg(
                this.state.uploadedImage,
                this.state.croppedAreaPixels
            )
            console.log("cropped: ", croppedImage);
            
            this.setState({
                croppedImage,
                isCropping: false,
                page: this.state.page + 1
            })
        }
        catch (e){
            console.error(e);
            this.setState({
                isCropping: false
            })
        }
    }

    showContent(page: number, uid?: string){
        if(page === 1){
            return(
                <Grid.Row centered columns={1}>
                    <Grid.Column width={8}>
                        {uid ? 
                            this.renderImage(uid) : 
                            "No image found"
                        }
                    </Grid.Column>
                </Grid.Row>
            )
        }
        else if(page === 2){
            if(this.state.uploadedImage)
            return(
                <Grid.Column width={15}>
                    <div style={{height:"60vh"}}>
                        <Cropper 
                            image = {this.state.uploadedImage}
                            crop = {this.state.cropConfig.crop}
                            aspect = {this.state.cropConfig.aspect}
                            zoom = {this.state.cropConfig.zoom}
                            onCropChange = {(crop) => this.setState({cropConfig: {...this.state.cropConfig, crop : crop}})}
                            onZoomChange = {(zoom) => this.setState({cropConfig: {...this.state.cropConfig, zoom: zoom}})}
                            onCropComplete = {(area, croppedAreaPixels) => this.setState({croppedAreaPixels})}
                            />
                    </div>
                </Grid.Column>
            )
        }
        else if(page === 3){
            if(this.state.croppedImage !== null)
            return(
                <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <img src={this.state.croppedImage} alt="new"/>
                </div>
            )
        }
    }

    showActions(page: number){
        if(page === 1 ){
            return(
                <div>
                    <Button onClick={() => {document.getElementById("imageUploader")?.click()}}>Select Image</Button>
                    <Button primary disabled={this.state.uploadedImage ? false : true} onClick={() => this.setState({page: page + 1})}>Next <Icon name="chevron right" /></Button>
                </div>
            )
        }
        else if(page === 2){
            return(
                <React.Fragment>
                    <Button onClick = {() => this.setState({page: page - 1})}>Back</Button>
                    <Button primary onClick = {this.handleCropComplete}>Crop</Button>
                </React.Fragment>
            )
        }
        else if( page === 3){
            return(
                <div>
                    <Button floated="left" color="red" onClick={() => this.setState({...initialState, showModal: true})}>Start Over</Button>
                    <Button onClick = {() => this.setState({page: page - 1, croppedImage: null})}>Back</Button>
                    <Button primary disabled={this.state.croppedImage ? false : true} onClick={() => this.handleUpload(this.props.uid)}>Upload</Button>
                </div>
            )
        }
    }

    async handleSelection(e: React.ChangeEvent<HTMLInputElement>){
        if(e.target.files && e.target.files.length > 0){
            const file: any = e.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () =>{
                this.setState({uploadedImage: reader.result});
            }           
        }
    }

    async handleUpload(uid?: string){        
        if (!uid) return null
        console.log("uid: ", uid);
        const storage = this.props.firebase.storage;
        const uploadAction = storage.ref(`profileImages/${uid}.jpg`).putString(this.state.croppedImage, "data_url");
        this.setState({
            isUploading : true
        })
        console.log("start upload");
        
        uploadAction.on(
			'state_changed',
			snapshot => {
				// updates progress
				const progress = snapshot.bytesTransferred / snapshot.totalBytes;
                console.log("progress: ", progress);
                
				this.setState({uploadProgress: progress});
			},
			error => {
				//on error
				console.log(error);
			},
			() => {
				this.setState({isUploading: false})
			}
		);
    }

    renderProgress(){

        if(this.state.isUploading && this.state.uploadProgress){
            const percentProgress = this.state.uploadProgress * 100;
            if(percentProgress < 100){
                console.log("return");
                return(
                    <div style={{width: "100%"}}>
                        <Progress percent={percentProgress} active > Uploading </Progress>
                    </div>
                )
            }
            else{
                return(
                    <div style={{width: "100%"}}>
                        <Progress percent={percentProgress} success > Uploaded </Progress>
                    </div>
                )
            }
        }
    }

    render(){
        const {uid} = this.props;
        const {page, showModal} = this.state;

        return(
            <React.Fragment>
                <Button onClick={() => {this.setState({showModal: true, imageLoading: true})}}>{this.props.buttonText}</Button>
                <Modal size="tiny" open = {showModal} onClose={() => this.setState({...initialState})}>
                    <Modal.Header onClick={() =>  this.setState({...initialState})}><Icon name="chevron left"/> Change Image</Modal.Header>
                    <Modal.Content> 
                        <Grid centered columns={1}>
                            {this.showContent(page, uid)}
                            {this.renderProgress()}
                        </Grid>
                    </Modal.Content>
                    <Modal.Actions style={{paddingBottom: 0}}> {this.showActions(page)} </Modal.Actions>
                    <input id="imageUploader" style={{visibility: "hidden"}} type="file" accept="image/*" onChange={(e) => {this.handleSelection(e)}}/>
                </Modal>
            </React.Fragment>
            
        )
    }
}

export const PhotoModalComposed = compose<any, any>(
    withFirebase,
    connect(null, null)
)(PhotoModal)