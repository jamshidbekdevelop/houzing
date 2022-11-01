import React from "react";
import {
  activeStyle,
  Container,
  Logo,
  LogoTitle,
  MobileIcon,
  NavbarBody,
  NavbarWrapper,
  Wrapper,
} from "./styled";
import { FaBars } from "react-icons/fa";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { navbar } from "../../untils/navbar";
import Button from "../Generic/Button";
import { useLocation } from "react-router-dom";
import Footer from "../Footer";
const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const gotoSignIn = () => {
    navigate("/signin");
  };
  const gotoSignUp = () => {
    navigate("/register");
  };
  const Profile = () => {
    navigate("/properties/profile");
  };
  const logOut = () => {
    localStorage.removeItem("token");
    if (location?.pathname?.includes("profile")) {
      navigate("/home");
    } else {
      navigate(location.navigate);
    }
  };
  return (
    <Wrapper>
      <Container>
        <NavbarWrapper>
          <LogoTitle onClick={() => navigate("/home")}>
            <Logo.Icon />
            <Logo.Title>Houzing</Logo.Title>
          </LogoTitle>
          <MobileIcon onClick={()=>navigate('/sidebar')}>
            <FaBars />
          </MobileIcon>
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
            {/* <button onClick={loc}></button> */}
          </NavbarBody>
          {location?.pathname !== "/register" ? (
            <Logo>
              {location?.pathname !== "/signin" ? (
                <Logo width={"120px"}>
                  {localStorage.getItem("token") ? (
                    <div>
                      {location?.pathname !== "/properties/profile" ? (
                        <Button onClick={Profile} width={138} height={44}>
                          Profile
                        </Button>
                      ) : (
                        <Button width={138} height={44} onClick={logOut}>
                          LogOut
                        </Button>
                      )}
                    </div>
                  ) : (
                    <div style={{ display: "flex", gap: "20px" }}>
                      <Button onClick={gotoSignIn} width={133} height={44}>
                        SigIn
                      </Button>
                      <Button onClick={gotoSignUp} width={133} height={44}>
                        SignUp
                      </Button>
                    </div>
                  )}
                </Logo>
              ) : (
                <Logo>
                  <Button onClick={gotoSignUp} width={133} height={44}>
                    SignUp
                  </Button>
                </Logo>
              )}
            </Logo>
          ) : (
            <Logo>
              <Button onClick={gotoSignIn} width={133} height={44}>
                SigIn
              </Button>
            </Logo>
          )}
        </NavbarWrapper>
      </Container>
      <Outlet />
      <Footer/>
    </Wrapper>
  );
};

export default Navbar;
