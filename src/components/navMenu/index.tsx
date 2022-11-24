import { Fragment, useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import styled from "styled-components";

import Burger from "./burger";

const NavMenu = () => {
  const [sticky, setSticky] = useState(false);

  const [open, setOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 768;
  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    // subscribe to window resize event "onComponentDidMount"
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, [window.innerWidth]);
  console.log(width, "myu with");

  const navBarSticky = () => {
    if (window.scrollY >= 232) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  window.addEventListener("scroll", navBarSticky);

  const Container = styled.div`
    display: flex;

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
    width: 50%;
    color: darkblue;
    margin: 0px;
    margin-left: 20px;

    font-weight: 300;
  `;
  const List = styled.ul`
    margin: 0;
   
    margin-right: 20px;
    padding: 0;

    list-style-type: none;
    display: flex;
    column-gap: 20px;
    font-size: 25px;

    a {
      text-decoration: none;
      color: gold;
    }

    @media (max-width: 768px) {
      display: block;
    }
  `;

  console.log(open, "open it");

  return (
    <>
      <Container>
        <TitleNav>Expore The Beautiful Antioquia</TitleNav>
        {open || width > breakpoint ? (
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
        ) : null}
        <Burger setOpen={setOpen} open={open} />
      </Container>
      <Outlet />
    </>
  );
};

export default NavMenu;
