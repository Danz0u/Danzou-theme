import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
//import FontAwesome from 'react-fontawesome';


const Wrapper = styled.header`
  width: auto;
  height: 80px;
  background-color: #202B3B;
`;

const Nav = styled.nav `
  display: flex;
  justify-content: center;

  ul {
    padding:0px;
    margin:0px;
    list-style:none;
  }

  ul li { 
    display: inline;
  }
`;

const Navlink = styled(Link)`
  padding: 20px 30px;
  display: inline-block;
  color: #9B9690;
  margin: 0.5em 0;
  font-family: 'Anton', sans-serif;
  text-decoration: none;
  font-size: 20px;

  &:hover {
    color: #A52C3B;
  }
`;

const NavLinkSearch = styled(Link)`
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

class Header extends Component {
  render() {
    return (
      <Wrapper>
        <Nav>
          <ul>
            <li><Navlink to="/">Danzou</Navlink></li>
            <li><Navlink to="/">Animes</Navlink></li>
            <li><Navlink to="/">Categorias</Navlink></li>
            <li>
              <NavLinkSearch to="/">
                <input type="search" placeholder="Buscar.."/>
              </NavLinkSearch>
            </li>
          </ul>
        </Nav>
      </Wrapper>
    );
  }
} 

export default Header;