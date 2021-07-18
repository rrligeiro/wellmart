import React, { useState } from 'react';
import * as S from './styled';

export default function SignUpField(){
  const [ userEmail, setUserEmail ] = useState('');
  const [ responseMenssage, setResponseMenssage ] = useState('');

  function getEmail(){
    if(validateEmail(userEmail) === false){
      setResponseMenssage(false);
    } else {
      localStorage.setItem('userEmail', userEmail);
      setResponseMenssage(true);
    }
  }
  
  function validateEmail(userEmail){
    let regex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return regex.test(userEmail);
  }

  return(
    <S.SignUpFieldContainer>
      <S.InputButtonContainer>
        <S.Input placeholder= "usuario@email.com.br" value={userEmail} onChange={e => setUserEmail(e.target.value)}/>
        <S.Button type="button" onClick={getEmail} >Cadastre-se</S.Button>
      </S.InputButtonContainer>
      {(() => {
        if (responseMenssage === false) {
          return (
            <S.ReponseMensageContainer>E-mail inválido, tente novamente!</S.ReponseMensageContainer>
          )
        } else if (responseMenssage === true) {
          return (
            <S.ReponseMensageContainer>E-mail cadastrado com sucesso!</S.ReponseMensageContainer>
          )
        } else {
          return (
            <></>
          )
        }
      })()}
    </S.SignUpFieldContainer>
  )
}