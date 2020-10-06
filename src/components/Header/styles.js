import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin: 0 auto;
  height: 64px;
  width: 100%;
  border: 1px solid #ddd;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 1440px;
  padding: 0 30px;
  background: #fff;

  div {
    display: flex;
    align-items: center;

    img {
      padding: 5px 0;
      width: 135px;
      height: 32px;
      margin-right: 30px;
      padding-right: 30px;
      border-right: 1px solid #ddd;
    }
  }
`;

export const Menu = styled.nav`
  display: flex;

  li {
    list-style: none;
    color: #999;
    font-weight: bold;
    font-size: 15px;
    cursor: pointer;

    & + li {
      margin-left: 21px;
    }

    &:hover {
      color: #444;
    }
  }
`;

export const Login = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;

  strong {
    display: block;
    color: #666;
    font-size: 14;
    align-self: flex-end;
    margin-bottom: 5px;
  }

  a {
    display: block;
    color: #de3b3b;
    font-size: 14px;
    align-self: flex-end;
    text-decoration: none;
  }
`;
