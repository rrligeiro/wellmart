import React from 'react';
import * as S from './styled';
import SignUpField from '../../SignUpField/SignUpField';
import * as P from '../Products/styled';

export default function Home(){
  return(
    <S.HomeBody>
      <S.HomeContent>
        <S.PromotionContainer>
          <S.BlackFridayImg src='images/blackfriday.png'></S.BlackFridayImg>
        </S.PromotionContainer>
        <S.SignUpContainer>
          <S.SignUpPromotionText>
            PROMOÇÃO
          </S.SignUpPromotionText>
          <P.ProductItem to='/signup'>
            <P.ProductsImg src="images/product1.jpg"></P.ProductsImg>
            <P.ProductsPriceLined>R$: 1200,00</P.ProductsPriceLined>
            <P.ProductsPrice>R$: 399,00</P.ProductsPrice>
          </P.ProductItem>
          <S.SignUpPromotionDescription>
            Cadastre-se AGORA e receba as melhores ofertas de nosso site na maior promoção de todos os tempos!
          </S.SignUpPromotionDescription>
          <SignUpField/>
        </S.SignUpContainer>
      </S.HomeContent>
    </S.HomeBody>
  )
}