import { Outlet } from 'react-router-dom';
import {
  Container,
  LinkStyled,
  Header,
  LogoSite,
  Nav,
} from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <LogoSite to="/" style={{ textDecoration: 'none', fontSize: '30px' }}>
          <span style={{ color: 'orange' }}>Car</span>
          <span style={{ color: '#212121' }}>Rent</span>
        </LogoSite>
        <Nav>
          <LinkStyled to="/catalog">Catalog</LinkStyled>
          <LinkStyled to="/favorites">Favorites</LinkStyled>
        </Nav>
        <div>+380730000000</div>
      </Header>
      <Outlet />
    </Container>
  );
};
