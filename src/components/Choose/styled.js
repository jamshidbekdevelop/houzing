import styled from "styled-components";
import { ReactComponent as message } from "../../assets/icons/message.svg";
import { ReactComponent as home } from "../../assets/icons/home.svg";
import { ReactComponent as ring } from "../../assets/icons/financing.svg";
import { ReactComponent as map } from "../../assets/icons/map.svg";
export const Body = styled.div`
  background-color: #f5f7fc;
  width: 100%;
  height: auto;
  margin-top: 48px;
`;
export const Container = styled.div`
margin: auto;
  display: flex;
  flex-direction: column;
  width: 1440px;
  align-items: center;
  height: 343px;
  padding: 48px 0px;
  box-sizing: border-box;
`;
export const Title = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: ${({ size }) => (size ? `${size}px` : "28px")};
  line-height: 36px;
  /* identical to box height, or 129% */

  text-align: center;
  letter-spacing: -0.02em;

  /* text/1 */

  color: #0d263b;
`;
export const Text = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  /* or 150% */

  text-align: center;

  /* Text / Color */

  color: #696969;
`;
export const Icons = styled.img`
  width: 50px;
  height: 50px;
`;
export const Box = styled.div`
  height: 230px;
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`;
export const BoxContainer = styled.div`
  display: flex;
  width: 1200px;
  justify-content: space-between;
`;

export const Massege=styled(message)``
export const Home=styled(home)``
export const Ring=styled(ring)``
export const Map=styled(map)``