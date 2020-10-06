import React from 'react';
import PropTypes from 'prop-types';

import SingIn from '../../SignIn';

import { Wrapper } from './styles';

export default function DefualtLayout({ children }) {
  return (
    <Wrapper>
      <SingIn>{children}</SingIn>
    </Wrapper>
  );
}

DefualtLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
