import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Navbar = styled.nav`
  background: #bf2c00ff;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
`
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 2px;
  padding-left: 2px;
`
export const NavbarItem = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
`
export const NavbarUl = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  text-align: center;
  justify-content: end;
`
export const NavbarLi = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;
`

export const LinkNavbarLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
`

export const NavbarLinks = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
`
export const NavbarLogo = styled.img`
  width: auto;
  height: auto;
  margin: 0;
  padding: 0;
`