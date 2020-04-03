import React, { useState } from 'react';
import { Grid, Box } from '@material-ui/core';
import AddCard from '../AddCard/AddCard';
import styled from 'styled-components';

const AddBlock = styled(Box)`
	cursor: ${props => props.btnactive==="opened" ? 'auto' : 'pointer'};
	box-sizing: border-box;
	background: linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%);
  border-radius: 3px;
  box-shadow: 0 3px 5px 2px rgba(255, 105, 135, .3);
  color: white;
	height: ${props => props.btnactive==="opened" ? '220px' : '60px'};
	width: 100%;
	padding: 5px 30px;
	font-size: 16px;
	text-transform: uppercase;
	font-weight: 500;
	font-family: Roboto, 'Open Sans', 'Helvetica Neue', sans-serif;
	transition: height .5s ease-out;
`

const Home = () => {
	const [addCard, setBtnActive] = useState("closed")

	const onClose = () => {
		if (addCard==="opened") setBtnActive("closed")
	}

	return(
		<Box mt={3}>
			<Grid container spacing={2}>
				<Grid item xs={12} sm={6} md={4} >
					<AddBlock btnactive={addCard} onClick={() => {if (addCard==="closed") setBtnActive("opened")}}>
						<AddCard form={addCard} action={onClose}/>
					</AddBlock>
        </Grid>
      </Grid>
		</Box>
		
	)
}

export default Home;