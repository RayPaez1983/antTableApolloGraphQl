import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

interface BurgerProps{
  setOpen: any;
 open: boolean
}

const Burger = ({setOpen, open}: BurgerProps) => {
  

  const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    
  }
  div {
    width: 2rem;
    height: 0.25rem;
    
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    background: red;
    
     
    
    &:nth-child(1) {
      
      transform: ${(props) =>
        // @ts-ignore
        props.open ? "rotate(45deg)" : "rotate(0)"};
      background: red;
    }
    &:nth-child(2) {
      transform: ${(props) =>
        // @ts-ignore
        props.open ? "translateX(-90%)" : "translateX(0)"};
         background: red;
      opacity: ${(props) =>
        // @ts-ignore
        props.open ? 0 : 1};
   
    }
    &:nth-child(3) {
      transform: ${(props) =>
        // @ts-ignore
        props.open ? "rotate(-45deg)" : "rotate(0)"};
      background: red;
    }
 
   
  }
`;
  const List = styled.ul`
   position:relative;
    list-style-type: none;
    a {
      text-decoration: none;
      color: gold;
    }
  `;

  return (
    <>
      <StyledBurger
        //@ts-ignore
        open={open}
        onClick={() => setOpen(!open)}
      >
        <div />
        <div />
        <div />
      </StyledBurger>
     
    </>
  );
};

export default Burger;
