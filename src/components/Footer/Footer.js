import React from 'react';
import * as S from './styled';

export default function Footer(){
  return(
    <S.Footer>
      <S.FooterSubscription>
        Site desenvolvido no desafio Hiring Coders por 
      </S.FooterSubscription>
      <S.FooterLink to={{ pathname: "https://github.com/rrligeiro" }} target="_blank" >
        rrligeiro
      </S.FooterLink>
    </S.Footer>
  )
}