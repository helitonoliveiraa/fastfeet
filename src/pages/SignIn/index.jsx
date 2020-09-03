import React from 'react';

import logo from '../../assets/logo.png';
import { Container, Content } from './styles';

export default function SignIn() {
  return (
    <Container>
      <Content>
        <div>
          <img src={logo} alt="FastFeet" />

          <form>
            <label htmlFor="email">
              SEU E-MAIL
              <input id="email" type="text" placeholder="exemplo@email.com" />
            </label>

            <label htmlFor="password">
              SUA SENHA
              <input id="password" type="text" placeholder="*******" />
            </label>

            <button type="submit">Entrar no sistema</button>
          </form>
        </div>
      </Content>
    </Container>
  );
}
