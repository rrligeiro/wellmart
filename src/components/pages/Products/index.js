import React from 'react';
import * as S from './styled';

export default function Products(){
  return(
    <S.ProductsBody>
      <S.ProductsContainer>
        <S.ProductItem>
          <S.ProductsImg src="images/product1.jpg"></S.ProductsImg>
          <S.ProductsPrice>R$: 300,00</S.ProductsPrice>
        </S.ProductItem>
        <S.ProductItem>
          Produto 1
        </S.ProductItem>
        <S.ProductItem>
          Produto 1
        </S.ProductItem>
        <S.ProductItem>
          Produto 1
        </S.ProductItem>
        <S.ProductItem>
          Produto 1
        </S.ProductItem>
        <S.ProductItem>
          Produto 1
        </S.ProductItem>
        <S.ProductItem>
          Produto 1
        </S.ProductItem>
        <S.ProductItem>
          Produto 1
        </S.ProductItem>
      </S.ProductsContainer>
    </S.ProductsBody>
  )
}