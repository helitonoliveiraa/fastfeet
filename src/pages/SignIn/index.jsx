import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.png';
import { Container, Content } from './styles';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório!'),
  password: Yup.string().required('A senha é obrigatória!'),
});

export default function SignIn() {
  return (
    <Container>
      <Content>
        <div>
          <img src={logo} alt="FastFeet" />

          <Form schema={schema}>
            <label htmlFor="email">SEU E-MAIL</label>
            <Input
              name="email"
              id="email"
              type="text"
              placeholder="exemplo@email.com"
            />

            <label htmlFor="password">SUA SENHA</label>
            <Input
              name="password"
              id="password"
              type="text"
              placeholder="*******"
            />

            <button type="submit">Entrar no sistema</button>
          </Form>
        </div>
      </Content>
    </Container>
  );
}
