import styled from "styled-components";

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
  max-width: 1440px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  width: 100%;
  color: #ffffff;
`;
export const Logo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
Logo.Title = styled("div")`
  margin-left: 11px;
  font-size: 20px;
  font-weight: 500;
`;
export const NavbarBody = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  color: white;
`;
