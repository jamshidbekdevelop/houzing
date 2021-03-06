import styled from "styled-components";
import { ReactComponent as icon } from "../../assets/icons/logo.svg";
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0d263b;
`;
export const activeStyle = ({ isActive }) => {
  return {
    color: isActive ? "#00fff5" : "white",
    textDecoration: "none",
    margin: "0 32px",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "18px",
    lineHeight: "24px",
  };
};
export const NavbarWrapper = styled.div`
  display: flex;
  height: 64px;
  max-width: 1280px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  width: 100%;
  color: #ffffff;
`;
export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 770px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;
export const LogoTitle=styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  @media screen and (max-width: 770px) {
    margin-left: 30px;
  }
`
export const Logo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  

  @media screen and (max-width: 770px) {
    display: none;
  }
`;
Logo.Title = styled("div")`
  margin-left: 11px;
  font-size: 20px;
  font-weight: 500;
`;
Logo.Icon = styled(icon)`
  width: 31px;
  height: 36px;
`;
export const NavbarBody = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  color: white;
  @media screen and (max-width: 770px) {
    display: none;
  }
`;
