import React from 'react';
import * as S from './styled';

export default function Navbar(){
  return(
    <S.Navbar>
      <S.NavbarContainer>
        <S.LinkNavbarLogo to='/'>
          <S.NavbarLogo src='logo.png'></S.NavbarLogo>
           Wellmart
        </S.LinkNavbarLogo>
        <S.NavbarUl>
          <S.NavbarLi>
            <S.NavbarItem>
              <S.NavbarLinks to='/'>
                Home
              </S.NavbarLinks>
            </S.NavbarItem>
          </S.NavbarLi>
          <S.NavbarLi>
            <S.NavbarItem>
              <S.NavbarLinks to='/products'>
                Produtos
              </S.NavbarLinks>
            </S.NavbarItem>
          </S.NavbarLi>
          <S.NavbarLi>
            <S.NavbarItem>
              <S.NavbarLinks to='/signup'>
                Cadastre-se
              </S.NavbarLinks>
            </S.NavbarItem>
          </S.NavbarLi>
        </S.NavbarUl>
      </S.NavbarContainer>
    </S.Navbar>
  )
}