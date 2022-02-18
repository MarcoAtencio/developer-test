import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  min-height: 70vh;
  padding-left: 1rem;
  padding-right: 1rem;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 20vh;
  padding: 1rem 2rem;
`;
export const Burger = styled.img`
  width: 1.5rem;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  min-height: 10vh;
  padding: 1rem 2rem;
`;
