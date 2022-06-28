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
  max-width: 1280px;
  align-items: center;
  padding: 48px 0px;
  box-sizing: border-box;
`;
export const Title = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: ${({ size }) => (size ? `${size}px` : "28px")};
  line-height: 36px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #0d263b;
`;
export const Text = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #696969;
`;
export const Icons = styled.img`
  width: 50px;
  height: 50px;
`;
export const Box = styled.div`
  height: 230px;
  max-width: 250px;
  min-width: 230px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Div = styled.div`
  display: flex;
  max-width: 770px;
  width: 100%;
  justify-content: space-around;
  @media (max-width: 770px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const BoxContainer = styled.div`
  display: flex;
  max-width: 1280px;
  width: 100%;
  justify-content: space-between;
  box-sizing: border-box;
  @media (max-width: 1280px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Massege = styled(message)``;
export const Home = styled(home)``;
export const Ring = styled(ring)``;
export const Map = styled(map)``;
