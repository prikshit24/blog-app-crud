import React from 'react'
import { useNavigate } from 'react-router';
import { HeaderContainer, HeaderText, ListContainer, NavigateList } from './components';

const Header = () => {

  const navigator = useNavigate();

  return (
    <HeaderContainer>
        <HeaderText>Blog App</HeaderText>
        <ListContainer>
        <NavigateList onClick={() => { navigator('/') }}>Home</NavigateList>
        <NavigateList onClick={() => { navigator('/Blog') }}>Blogs</NavigateList>
        </ListContainer>
    </HeaderContainer>
  )
}

export default Header;
