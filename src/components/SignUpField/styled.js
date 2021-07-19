import styled from "styled-components";

export const SignUpFieldContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
	margin: 10px;
`

export const InputButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
`

export const Input = styled.input`
	padding: 7px;
	font-size: 19px;
	border-width: 6px;
	border-color: #bf2c00ff;
	background-color: #FFFFFF;
	color: #000000;
	border-style: ridge;
	border-radius: 23px;
	text-align: center;

	&:focus,
	&active {
		outline: none;
		box-shadow: none;
	}
`

export const Button = styled.button`
	box-shadow: 0px 1px 0px 0px #1c1b18;
	background:linear-gradient(to bottom, #eae0c2 5%, #ccc2a6 100%);
	background-color:#eae0c2;
	border-radius:15px;
	border:2px solid #333029;
	display:inline-block;
	cursor:pointer;
	color:#505739;
	font-family:Arial;
	font-size:18px;
	font-weight:bold;
	padding:12px 16px;
	text-decoration:none;
	text-shadow:0px 1px 0px #ffffff;
	margin: 0px 10px;
	
	&:hover {
		background:linear-gradient(to bottom, #e9e9e9 5%, #f9f9f9 100%);
		background-color:#e9e9e9;
	}

	&:focus,
	&active {
		position:relative;
		top:1px;
	}
`

export const ReponseMensageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
	margin-top: 10px;
	font-size: 20px;
`