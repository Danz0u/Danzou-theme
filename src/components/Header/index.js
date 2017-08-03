import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';


const Wrapper = styled.header`
  width: auto;
  height: 80px;
	background-color: #202B3B;
`;

const Nav = styled.nav `
  ul {
    padding:0px;
    margin:0px;
    margin-left: 100px;
    list-style:none;
  }

  ul li { 
    display: inline;
  }
`;

const Navlink = styled(Link)`
  padding: 20px 20px;
  display: inline-block;
  color: #9B9690;
  margin: 0.5em 0;
  font-family: Helvetica, Arial, sans-serif;
  text-decoration: none;

  &:hover {
    color: #A52C3B;
  }
`;

class Header extends Component {
  render() {
    return (
      <Wrapper>
        <Nav>
          <ul>
            <li><Navlink to="/">Lorem</Navlink></li>
            <li><Navlink to="/">Lorem</Navlink></li>
            <li><Navlink to="/">Lorem</Navlink></li>
            <li><Navlink to="/">Lorem</Navlink></li>
          </ul>
        </Nav>
      </Wrapper>
    );
  }
}

export default Header;