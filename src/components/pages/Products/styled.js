import styled from "styled-components";
import { Link } from 'react-router-dom';

export const ProductsBody = styled.div`
  background-image: url(images/background.webp);
  height: 100%;
`

export const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  padding: 50px;
`

export const ProductItem = styled(Link)`
  background-color: #fff;
  border: 4px solid black;
  border-radius: 14px;
  width: 250px;
  height: 300px;
  margin: 5px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: column;
  padding: 4px;
  text-decoration: none;
  color: #000;
`

export const ProductsImg = styled.img`
  width: 100px;
  height: 100px;
  margin: 30px;
`
export const ProductsPriceLined = styled.a`
  margin: 10px;
  font-family: Georgia, serif;
  font-size: 20px;
  letter-spacing: 2px;
  word-spacing: 2px;
  color: #FF0000;
  font-weight: 700;
  text-decoration: line-through solid rgb(68, 68, 68);
  font-style: italic;
  font-variant: normal;
  text-transform: none;
`

export const ProductsPrice = styled.a`
  margin: 10px;
  font-size: 30px;
`