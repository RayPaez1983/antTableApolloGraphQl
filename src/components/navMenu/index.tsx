import { Fragment, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import styled from "styled-components";
import flag from "../../images/flag.jpg";
import Burger from './burger'

const NavMenu = () => {
  const [sticky, setSticky] = useState(false);

  const navBarSticky = () => {
    if (window.scrollY >= 232) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  console.log(window.scrollY, "que vaina ala");

  window.addEventListener("scroll", navBarSticky);
 

  const Container = styled.div`
    display: flex;
    flex-direction: column;
  justify-content: space-between;
    position: relative;
    height: 150px;
    width: 100%;

    img {
      width: 100%;
      height: 150px;
      position: absolute;
      bottom: 0px;
      z-index: -1;
    }
  `;
  const TitleNav = styled.h1`
    width:50%;
    color: darkblue;
    margin: 0px;
    margin-left: 20px;
    
    font-weight:300;
  `;
  const List = styled.ul`
  display: flex;
  justify-content: space-evenly;
  list-style-type: none;
  a {
    text-decoration: none;
    color: gold;
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`;
  return (
    <>
      <Container>

         
        
          {/* <nav className="tres">
          <List>
            <li>
              <Link to="/guatape">Guatape</Link>
            </li>
            <li>
              <Link to="/graffity-tour">Garffity Tour</Link>
            </li>
            <li>
              <Link to="/san-felix">San Felix</Link>
            </li>
            <li>
              <Link to="/sabaneta">Sabaneta</Link>
            </li>
          </List>
        </nav> */}
        <TitleNav>Expore The Beautiful Antioquia</TitleNav>
        <Burger/>

  
     
      
      </Container>
      <Outlet />
     
   
    </>
  );
};

export default NavMenu;
