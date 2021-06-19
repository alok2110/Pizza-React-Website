import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElement";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon>
          <CloseIcon />
        </Icon>
        <SidebarMenu>
          <SidebarLink to="/pizzas">Pizzas</SidebarLink>
          <SidebarLink to="/deserts">Desserts</SidebarLink>
          <SidebarLink to="/full-menu">Full Menu</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/">Order Now</SidebarRoute>
        </SideBtnWrap>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
