import React from "react";
import {
  activeStyle,
  Container,
  Logo,
  NavbarBody,
  NavbarWrapper,
  Wrapper,
} from "./styled";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { navbar } from "../../untils/navbar";
import Button from "../Generic/Button";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Container>
        <NavbarWrapper>
          <Logo onClick={() => navigate("/home")}>
            <Logo.Icon />
            <Logo.Title>Houzing</Logo.Title>
          </Logo>
          <NavbarBody>
            {navbar.map((value) => {
              return (
                !value.hidden && (
                  <NavLink style={activeStyle} key={value.id} to={value.path}>
                    {value.title}
                  </NavLink>
                )
              );
            })}
          </NavbarBody>
          <Logo width={"120px"}>
            <Button width={120} height={44}>
              Signin
            </Button>
          </Logo>
        </NavbarWrapper>
      </Container>
        <Outlet />
    </Wrapper>
  );
};

export default Navbar;