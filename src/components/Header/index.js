import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import flexboxgrid from 'flexboxgrid';


const Block = styled.div`
	padding: 0px;
	margin: 0px;
`;

const Wrapper = styled.header`
	background: #eee;
	border-bottom: 1px solid #e1e1e1;
	padding: 20px;
	width: auto;
	height: 95px;
`;

const Title = styled.h2`
	text-align: center;
	ont-family: Gibson,HelveticaNeue-Light,"Helvetica Neue Light","Helvetica Neue",Helvetica,Arial,"Lucida Grande",sans-serif;
	color: #34495e;
	font-size: 50px;
`;

const Slogan = styled.p`
	padding: 10px;
	text-align: center;
	color: #34495e;
`;

const Search = styled(Link) `
	input {
		outline: none;
		width:  100px;
		padding-left:5px;
	}

	input[type=search] {
		-webkit-appearance: textfield;
		-webkit-box-sizing: content-box;
		font-family: inherit;
		font-size: 100%;
	}

	input::-webkit-search-decoration,
	input::-webkit-search-cancel-button {
		display: none; 
	}

	input[type=search] {
		background: #ededed url(https://static.tumblr.com/ftv85bp/MIXmud4tx/search-icon.png) no-repeat 9px center;
		border: solid 1px #ccc;
		padding: 9px 10px 9px 32px;
		width: 150px;
		font-family: 'Anton', sans-serif;
		font-size: 12px;
		-webkit-border-radius: 10em;
		-moz-border-radius: 10em;
		border-radius: 10em;

		-webkit-transition: all .5s;
		-moz-transition: all .5s;
		transition: all .5s;
	}

	input[type=search]:focus {
		width: 180px;
		background-color: #fff;
		border-color: #b8b8b5;

		-webkit-box-shadow: 0 0 5px rgba(109,207,246,.5);
		-moz-box-shadow: 0 0 5px rgba(109,207,246,.5);
		box-shadow: 0 0 5px rgba(109,207,246,.5);
	}

	input:-moz-placeholder {
		color: #999;
	}
	input::-webkit-input-placeholder {
		color: #999;
	}
`;

const NavBar = styled.nav`
	padding: 10px 0;
	background: #34495e;
	border-bottom: 1px solid #2c3e50;
	height: 30px;
	display: flex;
	justify-content: center;
	position: relative;
	
	ul {
		padding:0px;
		margin:0px;
		list-style:none;
	}
	ul li { 
		display: inline;
	}
`;

const Navlink = styled(Link) `
	display: inline-block;
	text-decoration: none;
	font-size: 10px;
	padding: 0px 20px;
	font-size: 15px;
	text-decoration: none;
	color: #bdc3c7;

	&:hover {
		color: #ecf0f1;
	}
`;


class Header extends Component {
	render() {
		return (
			<Block>
				<Wrapper>
					<div className="row center-xs">
						<Title>DanzOu</Title>
					</div>
					<div className="row center-xs">
						<Slogan>Muito mais que uma central de Animes!</Slogan>
					</div>
				</Wrapper>
				<NavBar>
					<ul>
						<li><Navlink to="/">Inicio</Navlink></li>
						<li><Navlink to="/">Animes</Navlink></li>
						<li><Navlink to="/">Categorias</Navlink></li>
						<li><Search to="/"><input type="search" placeholder="Buscar.." /></Search></li>
					</ul>
				</NavBar>
			</Block>
		);
	}
}

export default Header;