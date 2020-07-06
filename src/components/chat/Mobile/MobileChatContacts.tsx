import React from 'react';
import { Grid, Divider, Loader } from 'semantic-ui-react';
import { SearchBar } from './SearchBar';
import { EmptyContainer } from '../../discover/EmptyContainer';

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

    const formatLastActive = (data: number) => {
        const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
        const today = new Date().getTime();
        const day = 1000*60*60*24
        const week = day*7;  
        const year = day*365;  
        if(today - data < day){
            let lastActiveHour: number | string = new Date(data).getHours();
            if(lastActiveHour < 10){
                lastActiveHour = `0${lastActiveHour}`
            }
            let lastActiveMinutes: number | string = new Date(data).getMinutes();
            if(lastActiveMinutes < 10){
                lastActiveMinutes = `0${lastActiveMinutes}`
            }
        
            return `${lastActiveHour}:${lastActiveMinutes}`;
        }
        else if(today - data < week && today - data > day){
            const lastActive = new Date(data).getDay();

            return daysOfWeek[lastActive];
        }
        else if( today - data > week && today - data < year){
            let lastActiveDate: number | string = new Date(data).getDate();
            if(lastActiveDate < 10){
                lastActiveDate = `0${lastActiveDate}`
            }
            let lastActiveMonth: number | string = new Date(data).getMonth();
            if(lastActiveMonth < 10){
                lastActiveMonth = `0${lastActiveMonth}`
            }

            return `${lastActiveDate}/${lastActiveMonth}`;
        }
        else{
            let lastActiveYear: number | string = new Date(data).getFullYear();
            if(lastActiveYear < 10){
                lastActiveYear = `0${lastActiveYear}`
            }
            
            return lastActiveYear;
        }
        
    }
    if(props.loading && !(props.chats[0] === "null")){
        return(
            <Loader active/>
        )
    }
    else if(props.loading && props.chats.length === 1 && props.chats[0] === "null"){
        return(
            <div style={{textAlign: "center"}}> Please Reload Chat!</div>
        )
    }
    else{
        return(
            <React.Fragment>
                 <div style={{fontSize: "17px", textAlign:"center"}}><strong>Chats</strong></div>
                    <Divider style={{margin: "8px", padding: 0}}/>
                    <SearchBar onSelect={props.onChatSelect} chats={props.chats}/>
                {props.chats.length === 0 ? <EmptyContainer/> : props.chats.map((chat: chatType) => {
                    return (
                        <div onClick={() => props.onChatSelect(chat)}>
                            <Grid centered columns="16">
                                <Grid.Column width="4" verticalAlign="middle">
                                    <div style={{display: "flex", justifyContent: "center", alignItems:"center"}}>
                                        {chat.imageURL ? 
                                            <img src={chat.imageURL ? chat.imageURL : undefined} alt="contactPicture" style={{height: "50px", width: "50px"}} /> 
                                            :
                                            <img style={{height: "50px", width: "50px"}} src="https://workhound.com/wp-content/uploads/2017/05/placeholder-profile-pic.png" alt="placeholder" />
                                        }
                                    </div>
                                </Grid.Column>
                                <Grid.Column floated="right" width="12">
                                    <Grid columns="16">
                                        <Grid.Column verticalAlign="middle" floated="left" width="12">
                                            <strong style={{fontSize: "16px", margin:"0px"}}> {chat.name} </strong>
                                        </Grid.Column>
                                        <Grid.Column verticalAlign="middle" floated="right" width="4">
                                            <em style={{fontSize: "14px",color:"grey", paddingRight:"10px"}}> {formatLastActive(chat.lastActive)} </em>
                                        </Grid.Column>
                                    </Grid>
                                    <Grid.Row>
                                        <div style={{fontSize: "14px", paddingTop: "10px", color: "grey"}}> {chat.latest} </div>
                                    </Grid.Row>
                                </Grid.Column>
                            </Grid>
                            <Divider style={{margin: "5px"}}/>
                        </div>
                    );
                })}
            </React.Fragment>
        )
    
    }
}