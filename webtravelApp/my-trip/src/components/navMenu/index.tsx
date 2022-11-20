import { Fragment, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import styled from "styled-components";
import flag from "../../images/flag.jpg";

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
  const List = styled.ul`
    display: flex;
    justify-content: space-evenly;
    list-style-type: none;
    a {
      text-decoration: none;
      color: gold;
    }
    ${({ ...sticky }) => !sticky && "position: fixed"}
  `;

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 150px;
    width: 100%;

    img {
      width: 100%;
      height: 150px;
      position: relative;
      bottom: 160px;
      z-index: -1;
    }
  `;
  const TitleNav = styled.h1`
    text-align: center;
    color: darkblue;
  `;
  return (
    <>
      <Container>

          <TitleNav>Toro Travel and Entertaiment</TitleNav>
          <nav className="tres">
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
          </nav>
     
        <img src={flag} alt="" />
      </Container>
      <Outlet />
    </>
  );
};

export default NavMenu;
