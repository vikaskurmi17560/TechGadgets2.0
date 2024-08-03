import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom' 
import Image from "../Images/logo.png"
import Nav from "./Nav"

const Header = () => {
  return (
   <MainHeader>
     <NavLink to='/'>
        <img src={Image} className="logo" alt="logo image" />
    </NavLink> 
    <Nav />
   </MainHeader>
  )
}
const MainHeader = styled.header`
padding: 0 4.8rem;
height: 10rem;
background-color: ${({theme}) => theme.colors.bg};
display: flex;
justify-content: space-between;
align-items: center;
position: relative;

.logo{
height: 5rem;
}
@media(max-width: ${({theme}) => theme.media.mobile}){
}

`;

export default Header
