import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';


const Wrapper = styled.section`
  margin-top:80px;
  width: 100%;
  height: 100px;
`;

const ConatinnerRelated = styled.div `
	padding-left: 15px;
  padding-right: 15px;
`; 

const ConatinnerFluid = styled.div `
	margin-right: auto;
  margin-left: auto;
  padding-left: 15px;
	padding-right: 15px;
	padding: 35px;
`;

const Title = styled.div `
	text-align: center;
	padding-bottom: 70px;
	
	h2 {
		margin-bottom: 10px;
		color: #9B9690;
	}
	hr {
		margin-top: 21px;
    margin-bottom: 21px;
    border: 0;
		border-top: 1px solid #eee;
		border-color: rgba(255,255,255,0.1)
	}
`;

const Row = styled.div `
	  margin-left: -15px;
    margin-right: -15px;
`;

const Freebie = styled.div `
	  position: relative;
    background: #1B2431;
    overflow: hidden;
    display: block;
    margin-bottom: 50px;
    text-align: center;
`;

const Image = styled.image `
		display: block;
    max-width: 100%;
    height: auto;
`;

const TitleLink = styled(Link)`
		display: inline-block;
    margin-bottom: 20px;
    font-size: 20px;
    color: #b9bcc3;
`;


class MainContent extends Component {
  render() {
    return (
			<Wrapper>
				<ConatinnerRelated>
					<ConatinnerFluid>
						<Title><h2>A</h2><hr/></Title>						
					</ConatinnerFluid>
					<Row>
						<Freebie>
							<Image src=""/>
							<TitleLink to="/">Title</TitleLink>
						</Freebie>
					</Row>
				</ConatinnerRelated>
			</Wrapper>
    );
  }
} 

export default MainContent;