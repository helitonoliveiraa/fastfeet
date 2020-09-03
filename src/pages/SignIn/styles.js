import styled from 'styled-components';
import { darken } from 'polished';

import color from '~/styles/color';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${color.primary};

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;

  width: 360px;
  height: 425px;
  padding: 60px 30px;
  border-radius: 4px;
  box-shadow: 0px 0px 10px ${color.middleGrey};
  background: ${color.white};

  div {
    img {
      width: 254px;
    }

    form {
      margin-top: 40px;

      label {
        font-size: 14px;
        font-weight: bold;
        line-height: 19px;
        color: ${color.darkGrey};
      }

      input {
        width: 100%;
        border-radius: 4px;
        margin: 9px 0 15px;
        padding: 12px 15px;
        border: solid 1px ${color.middleGrey};
      }

      button {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 100%;
        border: none;
        border-radius: 4px;
        padding: 12px 0;
        background: ${color.primary};

        font-size: 16px;
        font-weight: bold;
        color: ${color.white};

        &:hover {
          background: ${darken(0.04, color.primary)};
        }
      }
    }
  }
`;
