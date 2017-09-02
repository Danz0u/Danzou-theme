import React from 'react'
import styled from 'styled-components'

import { Link } from 'react-router-dom';

const NavBlock = styled.div` 
  padding: 10px 0px;
  background: #e74c3c;
  border-bottom: 1px solid #c0392b;
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
  padding: 8px 20px;
  font-size: 15px;
  text-decoration: none;
  color: #FFFFFF;

  &:hover {
    color: #ecf0f1;
  }
`;


const NavBar = () => {
  return (
    <NavBlock>
      <ul>
        <li><Navlink to="/">Inicio</Navlink></li>
        <li><Navlink to="/">Animes</Navlink></li>
        <li><Navlink to="/">Categorias</Navlink></li>
      </ul>
    </NavBlock>
  )
}

export default NavBar