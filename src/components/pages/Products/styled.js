import styled from "styled-components";

export const ProductsBody = styled.div`
  background-color: #fff;
  height: 100%;
`

export const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  padding: 50px;
`

export const ProductItem = styled.div`
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
`

export const ProductsImg = styled.img`
  width: 100px;
  height: 100px;
  margin: 10px;
`
export const ProductsPrice = styled.a`
  margin: 10 px;
  font-size: 20px;
`