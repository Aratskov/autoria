import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  border-bottom: 1px solid #ececec;
`;

export const LogoSite = styled(NavLink)`
  text-decoration: none;
  font-weight: 700;
  font-size: 26px;
  line-height: 1.19;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 30px;
  margin-left: 100px;
  margin-right: auto;
`;

export const LinkStyled = styled(NavLink)`
  display: block;

  text-decoration: none;
  color: #212121;
  padding: 15px 10px;

  font-size: 18px;
  line-height: 1.14;
  letter-spacing: 0.02em;
  font-weight: 500;

  text-align: center;

  &.active {
    color: orange;
    border-bottom: 2px solid orange;
  }

  &:hover:not(.active) {
    color: orange;
  }
`;
