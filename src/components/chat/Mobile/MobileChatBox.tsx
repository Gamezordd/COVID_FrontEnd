import React, { useState, useEffect, useRef } from 'react';
import { Loader, Grid, Icon, Divider, Button, Input, InputOnChangeData, GridColumn } from 'semantic-ui-react';
import {ChatMessage} from '../ChatMessage';
import _ from 'lodash';
import { LoadingContainer } from '../../maps';

interface IProps{
    messages: any[];
    loading: boolean;
    user: any;
    toggleContacts: () => void;
    contacts: any[];
    onSend: (message: messageType) => void;
}

type messageType ={
    content: string;
    chatId: string;
    recieverName: string;
    receiver: string;
}

export const MobileChatBox = (props: IProps) => {
    const [message, setMessage] = useState('');
    const [scrollPosition, setScrollPosition] = useState(0);
    const debounceScroll =  useRef(_.debounce(() => handleScroll(), 500)).current;
    const [ready, setReady] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value)
    }

    const handleScroll = () => {
        const chatWindow = document.getElementById('chatWindow');
        if(chatWindow){
            setScrollPosition(chatWindow.scrollHeight - chatWindow.scrollTop - 390);
        }
    }

    useEffect(() => {
        if(scrollPosition < 600){
            const chatWindow = document.getElementById('chatWindow');
            const windowHeight = chatWindow?.scrollHeight;
            chatWindow?.scrollTo(0, windowHeight ? windowHeight : 0);
        }
    }, [props.messages, scrollPosition]);

    useEffect(() => {
        document.getElementById('chatWindow')?.addEventListener('scroll', () => debounceScroll());
    }, [debounceScroll])

    const handleSubmit = () =>{
        props.onSend({content: message, chatId: props.user.chat, receiver: props.user.userId, recieverName: props.user.name});
        setMessage('');
    }

    return(
        <Grid>
            <Grid.Row style={{padding:"8px"}} onClick={() => props.toggleContacts()} verticalAlign="top" columns="16">
                <Grid.Column verticalAlign="middle" floated="left" width="1">
                    <Icon size="large" name="chevron circle left"/>
                </Grid.Column>
                <Grid.Column width="3">
                    {props.user.imageURL ? <img style={{height: "40px", width: "40px"}} alt="pic" src={props.user.imageURL} /> : 
                        <img style={{height: "40px", width: "40px"}} src="https://workhound.com/wp-content/uploads/2017/05/placeholder-profile-pic.png" alt="placeholder" />
                    }
                </Grid.Column>
                <Grid.Column verticalAlign="middle" width="11">
                    {props.user ? <strong style={{textAlign: "center"}}>{props.user.name}</strong> : null}
                </Grid.Column>
                <Divider style={{padding: 0, margin: 0}}/>
            </Grid.Row>
            <Grid.Row columns="16" style={{padding: "0", paddingBottom:"3px"}} >
                <Grid.Column width="16">
                    <div id="chatWindow" style={{height:"69vh", overflowY:"auto"}}>
                        { !props.loading ? props.messages.map(message => {
                            return(
                                <ChatMessage
                                    id={message.id}
                                    recieved={message.sender === props.user.userId}
                                    content={message.content}
                                />
                            )
                        }): <LoadingContainer/>}
                    </div>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row verticalAlign="bottom" columns="16" style={{padding:"3px"}}>
                <Grid.Column width="3" verticalAlign="middle">
                    <Button primary size="mini" onClick={() => handleSubmit()}>Send</Button>
                </Grid.Column>
                <Grid.Column width="10">
                    <input style={{width: "100%"}} onChange={(e) => handleChange(e)} value={message} />
                </Grid.Column>
                <Grid.Column verticalAlign="middle" width="2">
                    <Button size="mini" icon={<Icon name="paperclip"/>}></Button>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
}