import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 64px 0;
  /* height: 504px; */
  /* margin: auto; */
`;
export const Box = styled.div`
  width: 580px;
  height: 666px;
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
