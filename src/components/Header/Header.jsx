import UserMenu from 'components/UserMenu';
import { useAuth } from 'hooks';

import React from 'react';
import { HeaderDiv } from './Header.styled';

const Header = () => {
  const { isLoggedIn } = useAuth();
  return (
    <HeaderDiv>
      <header>{isLoggedIn && <UserMenu />}</header>
    </HeaderDiv>
  );
};

export default Header;
