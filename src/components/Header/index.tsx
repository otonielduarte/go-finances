import React from 'react';

import { Link, useHistory } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => {
  const { location } = useHistory();
  return (
    <Container size={size}>
      <header>
        <img src={Logo} alt="GoFinances" />
        <nav>
          <Link className={location.pathname === '/' ? 'active' : ''} to="/">
            Listagem
          </Link>
          <Link
            className={location.pathname === '/import' ? 'active' : ''}
            to="/import"
          >
            Importar
          </Link>
        </nav>
      </header>
    </Container>
  );
};

export default Header;
