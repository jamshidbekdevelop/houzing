import { Carousel } from "antd";
import styled from "styled-components";
import { ReactComponent as arrow } from "../../../assets/icons/left-arrow.svg";
import { ReactComponent as bed } from "../../../assets/icons/beds.svg";
import { ReactComponent as bath } from "../../../assets/icons/bath.svg";
import { ReactComponent as garge } from "../../../assets/icons/car.svg";
import { ReactComponent as fq } from "../../../assets/icons/ruler.svg";
export const CaruselWrapper = styled.div`
  position: relative;
`;

export const MainCarusel = styled(Carousel)`
  height: fit-content;
`;
export const Img = styled.img`
  background: black;
  position: absolute;
  width: 100%;
  opacity: 0.5;
`;
export const Icon = styled.div``;

Icon.Left = styled(arrow)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 0px;
  transform: translate(100%, 50%);
  width: 45px;
  height: 45px;
  padding: 12px;
  color: white;
  background: white;
  opacity: 0.5;
  border-radius: 50%;
  cursor: pointer;
  z-index: 999;
  :hover {
    opacity: 0.97;
  }
  & path {
    fill: #0d263b;
  }
`;
Icon.Right = styled(arrow)`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50%;
  right: 0;
  transform: translate(-100%, -40%) rotate(180deg);
  width: 45px;
  height: 45px;
  padding: 12px;
  color: black;
  background: white;
  opacity: 0.5;
  border-radius: 50%;
  cursor: pointer;
  z-index: 999;
  :hover {
    opacity: 0.97;
  }
  & path {
    fill: #0d263b;
  }
`;

export const Box = styled.div`
  background: black;
  width: 100%;
  height: 571px;
  position: relative;
`;
Box.Main = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: ${({ size }) => (size ? `${size}px` : "40px")};
  line-height: 48px;
  letter-spacing: ${({ big }) => big && "-0.02em"};
  color: #ffffff;
`;
export const Main = styled.div`
  margin: 24px 0;
  display: flex;
  gap: 24px;
  height: 47px;
  width: 337;
  justify-content: space-between;
`;
export const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 47px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
`;

Icon.Bed = styled(bed)`
  width: 19px;
  height: 13.6px;
`;
Icon.Bath = styled(bath)``;
Icon.Garge = styled(garge)``;
Icon.SqFt = styled(fq)``;

export const Button = styled.button`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 2px;
  width: 180px;
  height: 44px;
  background: none;
  cursor: pointer;
  margin-top: 48px;
`;
