import React from 'react'
import styled from 'styled-components'
import flexboxgrid from 'flexboxgrid';


const Wrapper = styled.div` 
  margin-top: 120px;
  width: auto;
  height: 180px;
  background-color: #EEEEEE;
`;

const Container = styled.div`
  padding: 25px;
  margin-top: 20px;

  h2 {
    text-align: center;
    @import url('https://fonts.googleapis.com/css?family=Varela+Round');
    font-family: 'Varela Round', sans-serif;
    color: #e74c3c;
    font-size: 22px;
  }

  p {
    padding: 5px;
    color: #9E9E9E;
    font-size: 1rem;
    margin-bottom: 0;
    color: ##757C8F;
  }
`;

const Copy = styled.div`
  margin-top: 35px ;

  p {
    display: flex;
    justify-content: center;
    color: #e74c3c;
  }
`;


const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <div className="row around-xs">
          <div class="col-xs-2">
            <div class="box-nested">
              <h2>Quem somos?</h2>
              <p>Apenas uma Central de Animes</p>
            </div>
          </div>
          <div class="col-xs-2">
            <div class="box-nested">
              <h2>Contato</h2>
              <p>danzou@hotmail.com</p>
            </div>
          </div>
          <div class="col-xs-2">
            <div class="box-nested">
              <h2>Projeto</h2>
              <p>https://github.com/Danz0u/</p>
            </div>
          </div>
        </div>
        <Copy>
          <p>DanzOu © 2017. Todos os direitos reservados.</p>
        </Copy>
      </Container>
    </Wrapper>
  )
}

export default Footer