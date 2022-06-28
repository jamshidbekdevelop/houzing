import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { navbar } from "../../untils/navbar";
import { Button } from "../Generic";
import {
  activeStyle,
  CloseIcon,
  Container,
  Div,
  Icon,
  Logo,
  NavbarBody,
  SitebarWrapper,
} from "./styled";

const Sitebar = () => {
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
    <Container>
      <Icon onClick={() => navigate("/home")}>
        <CloseIcon />
      </Icon>
      <SitebarWrapper>
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
        {location?.pathname !== "/register" ? (
          <Logo>
            {location?.pathname !== "/signin" ? (
              <Logo width={"120px"}>
                {localStorage.getItem("token") ? (
                  <Div>
                    {location?.pathname !== "/properties/profile" ? (
                      <Button onClick={Profile} width={200} height={44}>
                        Profile
                      </Button>
                    ) : (
                      <Button width={200} height={44} onClick={logOut}>
                        LogOut
                      </Button>
                    )}
                  </Div>
                ) : (
                  <Div style={{ display: "flex", gap: "20px" }}>
                    <Button onClick={gotoSignIn} width={200} height={44}>
                      SigIn
                    </Button>
                    <Button onClick={gotoSignUp} width={200} height={44}>
                      SignUp
                    </Button>
                  </Div>
                )}
              </Logo>
            ) : (
              <Logo>
                <Button onClick={gotoSignUp} width={200} height={44}>
                  SignUp
                </Button>
              </Logo>
            )}
          </Logo>
        ) : (
          <Logo>
            <Button onClick={gotoSignIn} width={200} height={44}>
              SigIn
            </Button>
          </Logo>
        )}
      </SitebarWrapper>
    </Container>
  );
};

export default Sitebar;
