import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import flexboxgrid from 'flexboxgrid';


const Block = styled.div`
	padding: 25px;
	padding-right: 15px;
	padding-left: 15px;
	margin-right: auto;
	margin-left: auto;
`;

const BoxContainer = styled.div`
	padding: 25px;
	margin-top: 10px;
	margin-left: -30px;
`;

const BoxAnime = styled.div`
	padding: 6px !important;
	min-height: 300px;
	border: 1px solid #e3e3e3;
	border-radius: 4px;
	-webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.05);
	box-shadow: inset 0 1px 1px rgba(0,0,0,.05);
	padding: 19px;
	margin-bottom: 20px;
	width:220px;
`;

const Image = styled.img`
	max-widt: 200px;
	max-height: 280px;

	&:hover {
		opacity: 0.8;
	}
`;
 

class MainContent extends Component {
	render() {
		return (
			<Block>
				<BoxContainer>
					<div className="row around-xs">
						<div className="col-xs-2">
							<div className="box">
								<BoxAnime>
									<Image></Image>
								</BoxAnime>
							</div>
						</div>
						<div className="col-xs-2">
							<div className="box">
								<BoxAnime>
									<Image></Image>
								</BoxAnime>
							</div>
						</div>
						<div className="col-xs-2">
							<div className="box">
								<BoxAnime>
									<Image></Image>
								</BoxAnime>
							</div>
						</div>
					</div>
				</BoxContainer>
			</Block>
		);
	}
}

export default MainContent;