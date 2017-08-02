import React, { Component } from 'react';
import styled from 'styled-components';


const TopNavbar = styled.nav`
	
	width: auto:
	height:80px;
	background-color:#3498db;
`;

const NavLink = styled.nav`

	background-color:#8e44ad;
`;


class Header extends Component {
  render() {
    return (
      <TopNavbar>
      	<NavLink to="/"> Hello, World! </NavLink>
      </TopNavbar>
    );
  }
}

export default Header;