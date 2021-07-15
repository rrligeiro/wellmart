import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Navbar = styled.nav`
  background: #bf2c00ff;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 3px 20px;
  margin: 3px;
`
export const NavbarItem = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
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

export const NavbarLinks = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  font-family: Courier New;
  font-size: 18px;
`

export const LinkNavbarLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  font-family: Courier New;
`

export const NavbarLogo = styled.img`
  width: auto;
  height: auto;
  padding: 4px;
`