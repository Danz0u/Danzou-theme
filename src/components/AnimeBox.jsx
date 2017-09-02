import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';


const AnimeBox = styled.div`
  padding: 6px !important;
  min-height: 300px;
  border: 1px solid #e3e3e3;
  border-radius: 4px;
  -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.05);
  box-shadow: inset 0 1px 1px rgba(0,0,0,.05);
  padding: 19px;
  margin-bottom: 20px;
  width:300px;
  margin-top: 40px;
`;

const Image = styled.img`
  max-height: 150px;
  max-width: 200px;
  position:relative;
  top:50%;
  left:50%;
  margin-left:-50px;
`;

const Info = styled.div`
  display: block;
  text-align: center;
 
  > h1 {
    padding: 0;
    margin: 0;
    margin-top: .5rem;
    font-size: 3.5rem;
    line-height 3.5rem;
    font-weight: 200;
    font-size: 28px;
    color: #757C8F;
  }
  > p {
    color: #9E9E9E;
    font-size: 1rem;
    margin-bottom: 0;
    color: ##757C8F;
  }
`;

const Button = styled(Link) `
  display: inline-block;
  padding: 8px 20px;
  margin-top: 10px;
  margin-bottom: 0;
  font-size: 14px;
  font-weight: normal;
  line-height: 1.42857143;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: 1px solid transparent;
  border-radius: 4px;
  background-color: #E74C3C;
  color: #EEEEEE;
  text-decoration: none;
 
  &:hover {
    color: #ecf0f1;
	}

`;

export default (props) => (
  <AnimeBox>
    <Image src={props.anime.image} />
    <Info>
      <h1>{props.anime.title}</h1>
      <p>{props.anime.description}</p>
      <p>Episodios {props.anime.epCount}</p>
      <Button to="{props.anime.linkDonwload}">Donwload</Button>
    </Info>
  </AnimeBox>
)