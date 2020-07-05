import React from 'react';
import { Grid, Loader} from 'semantic-ui-react';
import './allstyle.css';
import { ChatList } from './ChatList';
import { Chat } from './Chat';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import _ from 'lodash';
import { LoadingContainer } from '../maps';
import { MobileChatFC } from './Mobile';

const mapStateToProps = (state: any) => ({
	currentChat: state.chat.current,
});

export interface ChatBoxProps {
	currentChat: any;
}

export interface ChatBoxState {
	selectedChat: any | undefined;
	windowWidth: number | undefined;
	windowHeight: number | undefined;
	onResize: () => void;
}


export class ChatBoxUncomposed extends React.Component<
	ChatBoxProps,
	ChatBoxState
> {
	constructor(props: ChatBoxProps) {
		super(props);
		this.state = {
			selectedChat: this.props.currentChat,
			windowWidth: undefined,
			windowHeight: undefined,
			onResize: _.debounce(this.handleResize, 1000)
		};
	}

	componentDidMount(){
		window.addEventListener('resize', this.state.onResize)
		this.state.onResize();
	}

	handleResize = () => {
		this.setState({windowWidth: window.innerWidth, windowHeight: window.innerHeight})
	}

	formatMessage = (message: string) => {
		if (message.length > 100) {
			return message.substring(0, 25) + '...';
		} else {
			return message;
		}
	};

	handleChatSelect = (chat: any) => {
		console.log('Selecting', chat);
		this.setState({ selectedChat: chat });
	};

	render() {
		if(this.state.windowWidth && this.state.windowWidth > 800){
			return (
				<Grid>
					<Grid.Row>
						<ChatList selectChat={this.handleChatSelect} />
						<Chat selectedChat={this.state.selectedChat} />
					</Grid.Row>
				</Grid>
			);
		}
		else if(this.state.windowWidth && this.state.windowHeight){
			return(
				<MobileChatFC windowHeight={this.state.windowHeight} />
			);
		}
		else{
			return(
				<div style={{paddingTop: "200px"}}>
					<Loader active />
				</div>
			)
		}
	}
}

export const ChatBox = compose<ChatBoxProps, any>(connect(mapStateToProps))(
	ChatBoxUncomposed
);
