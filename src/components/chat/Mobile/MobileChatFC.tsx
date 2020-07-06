import React from 'react';
import { compose } from 'recompose';
import { withFirebase } from '../../../firebase/withFirebase';
import { connect } from 'react-redux';
import { MobileChatContacts } from './MobileChatContacts';
import { LoadingContainer } from '../../maps';
import { Firebase } from '../../../firebase';
import _ from 'lodash';
import { MobileChatBox } from './MobileChatBox';
import { Loader } from 'semantic-ui-react';

interface IProps {
	firebase?: Firebase;
	name?: string;
	windowHeight: number;
}
interface IState {
	selectedChat: any;
	isContactsOpen: boolean;
	isLoading: boolean;
	chats: any[];
	messages: any[];
	isFetching: boolean;
}

type message = {
	content: string;
	chatId: string;
	recieverName: string;
	receiver: string;
};

const mapStateToProps = (state: any) => ({
	name: state.user.details.name,
	isLoggedIn: state.user.isLoggedIn,
});

class MobileChatFCBasic extends React.Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);
		this.state = {
			selectedChat: undefined,
			isContactsOpen: true,
			isLoading: false,
			isFetching: false,
			chats: [],
			messages: [],
		};
	}

	async componentDidMount() {
		console.log("chats: ", this.state.chats);
		
		if (this.state.chats.length === 0) {
			this.setState({ isLoading: true });
			await this.props.firebase
				?.getUserChatsRef()
				.on('value', async snapshot => {
					if (!snapshot.val()) return this.setState({ chats: ['null'] });
					for (const [key, value] of Object.entries(snapshot.val())) {

						const val: any = value;
						await this.props.firebase?.getProfileImageUrl(key).then(url => {
							this.setState({
								chats: this.state.chats.concat({
									userId: key,
									...val,
									imageURL:
										url === ''
											? 'https://workhound.com/wp-content/uploads/2017/05/placeholder-profile-pic.png'
											: url,
								}),
							});
						});
					}
					this.setState({ isLoading: false });
					this.props.firebase?.getUserChatsRef().off('value')
					//this.setState({isLoading: false, chats: this.state.chats.concat({userId: snapshot.key, ...snapshot.val(), imageURL: imgUrl})})
				});
		} else {
			await this.props.firebase
				?.getUserChatsRef()
				.on('child_added', async snapshot => {
					if (!snapshot.key) return;
					var imgUrl = null;
					await this.props.firebase
						?.getProfileImageUrl(snapshot.key)
						.then(url => {
							imgUrl = url;
						});
					this.setState({
						chats: this.state.chats.concat({
							userId: snapshot.key,
							...snapshot.val(),
							imageURL: imgUrl,
						}),
					});
				});
		}
		this.props.firebase?.getUserChatsRef().on('child_removed', snapshot => {
			const indexToRemove = this.state.chats.findIndex(
				element => element.userId === snapshot.key
			);
			this.setState({ chats: this.state.chats.splice(indexToRemove, 1) });
		});
	}

	fetchProfileImageURL = async (uid: string | null) => {
		if (uid === null) return null;
		return;
	};

	fetchMessages = (d: any) => {
		this.setState({ isFetching: true });

		this.props.firebase?.getChat(d.chat).then(messages => {
			this.setState({ messages: messages, isFetching: false });
		});
		this.props.firebase
			?.getChatRef(d.chat)
			.limitToLast(1)
			.on('child_added', snapshot => {
				this.setState({
					messages: this.state.messages.concat({
						id: snapshot.key,
						...snapshot.val(),
					}),
				});
			});
	};

	handleChatSelect = (d: any) => {
		if (this.state.selectedChat) {
			this.props.firebase
				?.getChatRef(this.state.selectedChat.chat)
				.off('child_added');
		}
		this.setState({ selectedChat: d, isContactsOpen: false });
		this.fetchMessages(d);
	};

	handleToggleContacts = () => {
		this.setState({ isContactsOpen: !this.state.isContactsOpen });
	};

	handleMessageSubmit = (message: message) => {
		if (!this.props.name) return;
		this.props.firebase?.sendMessage({
			content: message.content,
			name: this.props.name,
			chatId: message.chatId,
			recieverName: message.recieverName,
			reciever: message.receiver,
		});
	};

	render() {
		if (this.state.isContactsOpen) {
			return (
				<div style={{ paddingTop: '80px' }}>
					<MobileChatContacts
						onChatSelect={this.handleChatSelect}
						chats={this.state.chats}
						loading={this.state.isLoading}
					/>
				</div>
			);
		} else if (!this.state.isContactsOpen) {
			return (
				<div style={{ paddingTop: '80px' }}>
					<MobileChatBox
						windowHeight={this.props.windowHeight}
						onSend={this.handleMessageSubmit}
						messages={this.state.messages}
						loading={this.state.isFetching}
						user={this.state.selectedChat}
						toggleContacts={this.handleToggleContacts}
						contacts={this.state.chats}
					/>
				</div>
			);
		} else {
			return (
				<div style={{ marginTop: '20%' }}>
					<Loader active />
				</div>
			);
		}
	}
}

export const MobileChatFC: React.ComponentClass<IProps, IState> = compose<
	any,
	any
>(
	withFirebase,
	connect(mapStateToProps, null)
)(MobileChatFCBasic);
