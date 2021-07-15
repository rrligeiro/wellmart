import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Footer = styled.footer`
  background-color: #818180;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  bottom: 0;
  position: fixed;
  width: 100%;
`
export const FooterSubscription = styled.section`
  margin-bottom: 2px;
  padding: 2px;
  color: #fff;
`
export const FooterLink = styled(Link)`
  margin-bottom: 2px;
  padding: 2px;
  color: #fff;
  font-size: 22px;
`