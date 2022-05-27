import styled from "styled-components";


export const Input = styled.input`
  display: flex;
  font-family: "Montserrat";
  font-style: normal;
  font-size: 14px;
  font-weight: 400;
  line-height: 12px;
  justify-content: center;
  align-items: center;
 width: 100%;
  outline: none;
  border: none;
`;
export const Logo = styled.div``;
export const Container = styled.div`
  display: flex;
  height: ${({ height }) => `${height}px` || "44px"};
  width: ${({ width }) => (width ? `${width}px` : "100%")};
  max-width: ${({ width }) => (width ? `${width}px` : "100%")};
  margin-top: ${({ mt }) => `${mt}px`};
  margin-left: ${({ ml }) => `${ml}px`};
  margin-right: ${({ mr }) => `${mr}px`};
  margin-bottom: ${({ mb }) => `${mb}px`};
  cursor: pointer;
  border-radius: 2px;
  border: 1px solid #E6E9EC;
  padding-left: ${({ pl }) => `${pl}px`};
  align-items: center;
  gap: 8px;
`;
