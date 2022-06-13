import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 504px;
`;
export const Box = styled.div`
  width: 580px;
  height: 376px;
  background: #ffffff;
  /* Border / Color */

  border: 1px solid #e6e9ec;
  box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
  border-radius: 3px;
  padding: 24px 30px;
`;
export const Title = styled.div`
  margin-top: ${({ mt }) => `${mt}px`};
  margin-left: ${({ ml }) => `${ml}px`};
  margin-right: ${({ mr }) => `${mr}px`};
  margin-bottom: ${({ mb }) => `${mb}px`};
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: ${({ size }) => (size ? `${size}px` : "18px")};
  line-height: 28px;
  color: #0d263b;
`;

export const ChexDiv=styled.div`
margin-top: 16px;
display: flex;
gap: 11px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 20px;
/* identical to box height, or 143% */


/* Text / Color */

color: #696969;
`
export const A=styled.a`
margin-left: auto;
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
/* identical to box height, or 150% */

text-decoration-line: underline;

/* Color / 1 */

color: #0061DF;
`
