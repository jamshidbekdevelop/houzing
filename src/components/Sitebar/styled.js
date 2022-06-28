import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
export const Container = styled.div`
  position: fixed;
  z-index: 999;
  height: 100%;
  width: 100%;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  /* opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")}; */
  /* top: ${({ isOpen }) => (isOpen ? "0" : "-100%")}; */
`;
export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;
export const Icon = styled.div`
  top: 1.2rem;
  position: absolute;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;
export const SitebarWrapper = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  /* margin: auto; */
`;
export const Logo = styled.div`
  display: flex;
  cursor: pointer;
`;
export const Div = styled.div`
  display: flex;
  flex-direction: column;
`;
export const NavbarBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
`;
export const activeStyle = ({ isActive }) => {
  return {
    color: isActive ? "#00fff5" : "white",
    textDecoration: "none",
    height: "48px",
    fontStyle: "23px",
    fontWeight: 400,
    fontSize: "18px",
    lineHeight: "24px",
  };
};
