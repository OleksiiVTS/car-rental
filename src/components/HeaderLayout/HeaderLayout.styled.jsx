import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
`;

export const DivMainHeader = styled.div`
  background: rgba(127, 196, 252, 0.616);
  transition: all 0.4s ease;
  position: fixed;
  width: 100%;
  height: 50px;
  z-index: 9;

  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
  border-radius: 0px 0px 4px 4px;
`;

export const DivSecondHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  width: 1440px;
`;

export const SpanLogoHeader = styled.span`
  transition-property: background-image;
  transition-duration: 200ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  background-image: inherit;
  cursor: pointer;

  &:hover {
    background-image: linear-gradient(
      to top,
      rgba(122, 186, 202, 0.7),
      rgba(255, 255, 255, 0)
    );
  }
`;

export const UlNavHeader = styled.ul`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const NavLinkStyled = styled(NavLink)`
  transition-property: color;
  transition-duration: 200ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  color: black;
  text-decoration: none;
  list-style: none;
  margin: 0;
  padding: 0;

  font-weight: 500;
  font-size: 18px;
  line-height: 1.2;

  &:hover {
    color: rgba(52, 112, 255, 1);
  }

  &.active {
    color: rgba(52, 112, 255, 1);
  }
`;
