import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/small_logo.png';

import { Container, HeaderContainer, Menu, Login } from './styles';

export default function Header() {
  return (
    <Container>
      <HeaderContainer>
        <div>
          <img src={logo} alt="FastFeet" />

          <Menu>
            <li to="/delivey">ENCOMENDAS</li>
            <li to="teste">ENTRAGADORES</li>
            <li to="teste">DESTINATÁRIOS</li>
            <li to="teste">PROBLEMAS</li>
          </Menu>
        </div>

        <Login>
          <strong>Admin FastFeet</strong>
          <Link to="teste">Sair do Sistema</Link>
        </Login>
      </HeaderContainer>
    </Container>
  );
}
