import React, { useState } from 'react';
import { Card, Image, Icon, Grid } from 'semantic-ui-react';
import { ButtonProps } from './interfaces'
import { descriptionLength, uniImagePlaceholder } from "./constants";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const DiscoverCard = (props: ButtonProps) => {
	var { image, name, description, id, location } = props.content;
	const { show, favourite, onFavouriteButtonClick, onCardClick } = props;
	const [isLoaded, setLoaded] = useState(false);
	
	function handleClick() {
		onCardClick([
			{
				lat: location.latitude,
				lng: location.longitude,
				details: { name: name, description: description, image: image },
			},
		]);
	}

	function formatDescription(description: string) {
		if(description.length > descriptionLength){
			return(description.substring(0, descriptionLength) + "...")
		}
		else{
			return(description)
		}
	}
	const notFavourite = (<Icon
							name='star'
							color='grey'
							size='big'
							onClick={() => onFavouriteButtonClick([id], true)}
						/>)

	const isfavourite = (<Icon
							name='star'
							color='red'
							size='big'
							onClick={() => onFavouriteButtonClick([id], false)}
						/>)

	if (show) {
		return (
			<Grid.Column>
					<Card centered style={{maxWidth: "254px"}}>
						<div style={{maxWidth:"254px", height: "254px", position: "relative"}}>
							<img onClick={() => handleClick()} style={{objectFit:"cover", maxHeight:"254px", width:"254px"}} src={isLoaded && image!=='' && image !== undefined ? image : uniImagePlaceholder} onLoad={() => setLoaded(true)} alt={name}/>
							{isLoaded ? 
								<div style={{position:"absolute", bottom:"2%", left:"2%", opacity:"0.8"}}>
									{favourite ? isfavourite : notFavourite}
								</div> : null}
						</div>
					<Card.Content>
						<Card.Header onClick={() => handleClick()}> {name} </Card.Header>
						<Card.Description
							onClick={() => handleClick()}
							style={{ marginBottom: '5px' }}
						>
							<div style={{maxWidth: "254px" ,overflowY:"auto"}}>
								{formatDescription(description)}
							</div>
						</Card.Description>
					</Card.Content>
				</Card>
			</Grid.Column>
		);
	} else {
		return null;
	}
};
