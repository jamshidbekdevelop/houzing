import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 1440px;
  margin: auto;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 70px 0px;
`;
export const Text = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: ${({ size }) => (size ? `${size}px` : "28px")};
  line-height: 36px;
  /* identical to box height, or 129% */

  text-align: center;
  letter-spacing: -0.02em;

  /* text/1 */

  color: ${({ color }) => (color ? color : "#0d263b")};
`;
export const Body = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 130px;
`;
