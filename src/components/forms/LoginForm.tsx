import _ from 'lodash';
import React from 'react';
import { ValidatorType, validators } from './constants';
import {
	Form,
	Button,
	FormField,
	Input,
	Card,
	Image,
	Grid,
} from 'semantic-ui-react';
import { Icon } from 'semantic-ui-react'
import applestore from '../landing/assets/appledownload.png'
import pic from '../landing/assets/googleplay.png';

import { LoginState } from './types';
import { FormFields } from './LoginFields';
import { Firebase } from '../../firebase';
import { compose } from 'recompose';
import { withFirebase } from '../../firebase/withFirebase';
import { connect } from 'react-redux';
import { loginAction, fetchUniversitiesAction, fetchLikes } from '../../redux';
import { Redirect, Link } from 'react-router-dom';
import './allforms.css';
import logo from '../landing/assets/logo2.png';
import axios from 'axios';
import loginside from '../landing/assets/loginside2.png'




const likesUrl =
	'https://us-central1-mpfirebaseproject-7ff28.cloudfunctions.net/api/likes';

const mapDispatchToProps = (dispatch: any) => ({
	login: (payload: any) => dispatch(loginAction(payload)),
	fetchUniversities: (universityIds: string[]) =>
		dispatch(fetchUniversitiesAction(universityIds)),
	fetchLikes: (likes: string[]) => dispatch(fetchLikes(likes)),
});

const mapStateToProps = (state: any) => {
	return {
		universities: state.universities,
	};
};

class LoginForm extends React.Component<
	{
		firebase: Firebase;
		login: typeof loginAction;
		fetchUniversities: typeof fetchUniversitiesAction;
		universities: any;
		fetchLikes: typeof fetchLikes;
	},
	LoginState
> {
	constructor(props: any) {
		super(props);
		this.state = {
			email: { value: '', error: false },
			password: { value: '', error: false },
			redirect: { value: false },
			errorMessage: { value: '' },
			showError: { value: false },
		};
	}

	handleSubmit = async () => {
		try {
			console.log(this.state);

			await this.props.firebase
				.doSignInWithEmailAndPassword(
					this.state.email.value.toString(),
					this.state.password.value.toString()
				)
				.then(async authUser => {
					if (
						authUser.user?.email === undefined ||
						authUser.user.email === null
					) {
						return;
					}
					console.log(authUser.user.email);
					const user = await this.props.firebase.getUser(authUser.user.email);
					return user;
				})
				.then(async user => {
					if (user !== undefined) {
						const payload = user.docs[0].data();
						payload.uid = user.docs[0].id;
						this.props.login(payload);
					}
					const unis = await this.props.firebase.getUniversities();
					const likes = await axios.get(likesUrl, {
						headers: { Authorization: await this.props.firebase.getVerifyId() },
					});
					return { unis, likes };
				})
				.then(async (details: any) => {
					console.log('Likes in login:', details.likes.data);
					this.props.fetchUniversities(details.unis);
					this.props.fetchLikes(details.likes.data.data);
				})
				.then(async () => {
					this.setState({ redirect: { value: true } });
				});
		} catch (err) {
			console.log(err);
			this.setState({
				...this.state,
				...{ showError: { value: true }, errorMessage: { value: err.message } },
			});
		}
	};

	validate = (
		key: keyof ValidatorType,
		stateKey: keyof LoginState,
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		if (RegExp(validators[key].regex).test(e.target.value)) {
			this.setState({
				...this.state,
				...{ [stateKey]: { value: e.target.value, error: false } },
			});
		} else {
			this.setState({
				...this.state,
				...{
					[stateKey]: {
						value: '',
						error: { pointing: 'below', content: validators[key].message },
					},
				},
			});
		}
	};

	getError = (key: keyof LoginState) => this.state[key].error;

	render() {
		if (this.state.redirect.value) {
			return <Redirect to='/home' />;
		}

		return (

          <div className="background">

			<Grid 
				textAlign='center'
				style={{ height: '100vh' }}
				verticalAlign='middle'
			>   
			<Grid.Row style={{
							visibility: 'hidden',}}>..</Grid.Row>
						
							
			<Grid.Row only="computer">
				<Grid.Column width={6}>  <Image src={loginside}/> 
				<p><b>Get the app now</b></p>
				
						<img src={pic} className='playstore' /> <img src={applestore} className='appstore' />{' '}
				
				</Grid.Column>
				<Grid.Column width={1}>OR</Grid.Column>
				<Grid.Column width={1}></Grid.Column>
				<Grid.Column width={6}>
					<Form
						style={{
							backgroundColor: 'white',
							border: '3px solid #f3f3f3',
							borderRadius: '25px',
							textAlign: 'left',
							padding: '5%',
						}}
					>
						<Image size='medium' src={logo} centered />
						<h2>Log in</h2>
						{_.map(FormFields, field => (
							<FormField
								{...field.properties}
								control={Input}
								error={this.getError(field.key)}
								onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
									this.validate(field.validate, field.key, e)
								}
							/>
						))}
						<Button
							content='Submit'
							onClick={() => this.handleSubmit()}
							className='btn'
							color='orange'
							style={{ width: '100%' }}
						/>
						{this.state.showError.value && (
							<Card fluid style={{ padding: '10px' }}>
								<p style={{ color: 'red' }}>{this.state.errorMessage.value}</p>
							</Card>
						)}
						<Link to={'/forgotPassword'}>Forgot Password?</Link>{' '}
					</Form>
				</Grid.Column>
				</Grid.Row>

				<Grid.Row only="tablet">
				<Grid.Column width={6}>  <Image src={loginside}/> 
				<p><b>Get the app now</b></p>
				
						<img src={pic} className='playstore' /> <img src={applestore} className='appstore' />{' '}
				
				</Grid.Column>
				<Grid.Column width={1}>OR</Grid.Column>
				<Grid.Column width={1}></Grid.Column>
				<Grid.Column width={6}>
					<Form
						style={{
							backgroundColor: 'white',
							border: '3px solid #f3f3f3',
							borderRadius: '25px',
							textAlign: 'left',
							padding: '5%',
						}}
					>
						<Image size='medium' src={logo} centered />
						<h2>Log in</h2>
						{_.map(FormFields, field => (
							<FormField
								{...field.properties}
								control={Input}
								error={this.getError(field.key)}
								onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
									this.validate(field.validate, field.key, e)
								}
							/>
						))}
						<Button
							content='Submit'
							onClick={() => this.handleSubmit()}
							className='btn'
							color='orange'
							style={{ width: '100%' }}
						/>
						{this.state.showError.value && (
							<Card fluid style={{ padding: '10px' }}>
								<p style={{ color: 'red' }}>{this.state.errorMessage.value}</p>
							</Card>
						)}
						<Link to={'/forgotPassword'}>Forgot Password?</Link>{' '}
					</Form>
				</Grid.Column>
				</Grid.Row>

               

				<Grid.Row only="mobile" style={{
							visibility: 'hidden',}}>..</Grid.Row>


				<Grid.Row only="mobile">
				<Grid.Column width={12}>
					<Form
						style={{
							backgroundColor: 'white',
							border: '3px solid #f3f3f3',
							borderRadius: '25px',
							textAlign: 'left',
							padding: '5%',
						}}
					>
						<Image size='medium' src={logo} centered />
						<h2>Log in</h2>
						{_.map(FormFields, field => (
							<FormField
								{...field.properties}
								control={Input}
								error={this.getError(field.key)}
								onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
									this.validate(field.validate, field.key, e)
								}
							/>
						))}
						<Button
							content='Submit'
							onClick={() => this.handleSubmit()}
							className='btn'
							color='orange'
							style={{ width: '100%' }}
						/>
						{this.state.showError.value && (
							<Card fluid style={{ padding: '10px' }}>
								<p style={{ color: 'red' }}>{this.state.errorMessage.value}</p>
							</Card>
						)}
						<Link to={'/forgotPassword'}>Forgot Password?</Link>{' '}
					</Form>
				</Grid.Column>



				</Grid.Row>
				<Grid.Row only="mobile">
					OR
				</Grid.Row>

				<Grid.Row only="mobile">
				<p><b>Get the app now</b></p> </Grid.Row>

					<Grid.Row only="mobile">	
				<img src={pic} className='playstore' /> <img src={applestore} className='appstore' />{' '}


				</Grid.Row>

				

				





                        





				
				
				
								<Grid.Row style={{
							visibility: 'hidden',}}>..</Grid.Row>
							<Grid.Row style={{
							visibility: 'hidden',}}>..</Grid.Row>
							<Grid.Row style={{
							visibility: 'hidden',}}>..</Grid.Row>
							<Grid.Row style={{
							visibility: 'hidden',}}>..</Grid.Row>
			</Grid>

			

			</div>
		);
	}
}




export const LoginFormComposed = compose(
	withFirebase,
	connect(mapStateToProps, mapDispatchToProps)
)(LoginForm);
