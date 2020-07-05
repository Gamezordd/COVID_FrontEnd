import React from 'react';
import { Item, Grid, Divider, Loader } from 'semantic-ui-react';

interface IProps{
    onChatSelect: (d: any) => void;
    chats: any[];
    loading: boolean
}

type chatType = {
    chat: string;
    lastActive: number;
    latest: string;
    name: string;
    userId: string;
    imageURL: string | null;
}

export const MobileChatContacts = (props: IProps) => {
    console.log("props: ", props);
    
    return(
        <React.Fragment>
                <div style={{fontSize: "17px", textAlign:"center"}}><strong>Chats</strong></div>
                <Divider/>
            {props.loading ? <Loader/> : props.chats.map((chat: chatType) => {
                console.log("chat: ");
                return (
                    <div onClick={() => props.onChatSelect(chat)}>
                        <Grid centered columns="2">
                            <Grid.Column width="4" verticalAlign="middle">
                                <div style={{display: "flex", justifyContent: "center", alignItems:"center"}}>
                                    {chat.imageURL ? 
                                        <img src={chat.imageURL ? chat.imageURL : undefined} alt="contactPicture" style={{height: "50px", width: "50px"}} /> 
                                        :
                                        <img style={{height: "50px", width: "50px"}} src="https://workhound.com/wp-content/uploads/2017/05/placeholder-profile-pic.png" alt="placeholder" />
                                    }
                                </div>
                            </Grid.Column>
                            <Grid.Column floated="right" width="11">
                                <div style={{display: "flex", flexDirection: "column"}}>
                                    <strong style={{ fontSize: "16px", margin:"0px", textAlign:"start"}}> {chat.name} </strong>
                                    <em style={{fontSize: "14px",color:"grey"}}> Last seen: {chat.lastActive} </em>
                                    <div style={{fontSize: "14px", paddingTop: "5px", color: "grey"}}> {chat.latest} </div>
                                </div>
                            </Grid.Column>
                        </Grid>
                        <Divider style={{margin: "5px"}}/>
                    </div>
                );
            })}
        </React.Fragment>
    )
}