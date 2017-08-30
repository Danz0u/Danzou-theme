import React from 'react'
import styled from 'styled-components'
import flexboxgrid from 'flexboxgrid';


const Wrapper = styled.div` 
  padding: 0px;
  margin: 0px;
  background: #FFFFFF;
  border-bottom: 1px solid #e1e1e1;
  padding: 20px;
  width: auto;
  height: 160px;
`;

const Logo = styled.div`
text-align: center;
margin-top: 10px;

> h2 {
  text-align: center;
  @import url('https://fonts.googleapis.com/css?family=Varela+Round');
  font-family: 'Varela Round', sans-serif;
  color: #e74c3c;
  font-size: 82px;
}

> p {
  text-align: center;
  @import url('https://fonts.googleapis.com/css?family=Varela+Round');
  font-family: 'Varela Round', sans-serif;
  color: #e74c3c;
  font-size: 14px;
}
`;

const Search = styled.div`
text-align: center;
margin-top: 10px;

> input {
  background: #eee;
  padding:10px;
  border-radius:5px 0 0 5px;
  -moz-border-radius:5px 0 0 5px;
  -webkit-border-radius:5px 0 0 5px;
  -o-border-radius:5px 0 0 5px;
  border:0 none;
  width:320px; 
}

> button {
  background:#e74c3c;
  color:white;
  font: 'trebuchet ms', trebuchet;
  padding:10px 20px;
  border-radius:0 5px 5px 0;
  -moz-border-radius:0 5px 5px 0;
  -webkit-border-radius:0 5px 5px 0;
  -o-border-radius:0 5px 5px 0;
  border:0 none;
  font-weight:bold;
  width: 80px;
}
`;

const Header = () => {
  return (
    <Wrapper>
      <div className="row center-xs">
        <Logo>
          <h2>DanzOu</h2>
          <p>Mais que uma central de Animes!</p>
        </Logo>
      </div>
      <div className="row center-xs">
        <Search>
          <input type="search" placeholder="Buscar.." />
          <button>Go!</button>
        </Search>
      </div>
    </Wrapper>
  )
}

export default Header