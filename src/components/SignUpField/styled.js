import styled from "styled-components";

export const SignUpFieldContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
`

export const InputButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
`

export const Input = styled.input`
	border: 1px solid #ddd;
	height: 1.5rem;
	padding: 0 .5rem;
	border-radius: .25rem 0 0 .25rem;

	&:focus,
	&active {
		outline: none;
		box-shadow: none;
	}
`

export const Button = styled.button`
	border: 1px solid #fff;
	height: 1.5rem;
	background: #fff;
	color: #000;
	border-radius: 0 .25rem .25rem 0;

	&:focus,
	&active {
		outline: none;
		box-shadow: none;
	}
`

export const ReponseMensageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
`