import styled from "styled-components";
import { ReactComponent as delate } from "../../assets/icons/trash.svg";
import { ReactComponent as edit } from "../../assets/icons/edit.svg";
import { ReactComponent as arrov } from "../../assets/icons/arrowpagination.svg";

export const Group = styled.div`
  display: flex;
  max-width: 1180px;
  width: 100%;
  margin: auto;
`;
export const Flex = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const Top = styled.div`
  width: 100%;
  height: 150px;
  padding: 60px;
  @media (max-width: 700px) {
    padding: 40px 10px;
  }
`;
export const Bottom = styled.div`
  max-width: 1120px;
  min-width: 360px;
  height: 700px;
  margin: 60px;
  @media (max-width: 700px) {
    margin: 40px 10px;
  }
  margin-top: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  /* Border / Color */

  border: 1px solid #e6e9ec;
  box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
  border-radius: 3px;
`;
export const Title = styled.h1`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  font-family: Cerebri Sans;
  font-style: normal;
  gap: 2px;
  font-weight: ${({ font }) => (font ? font : "normal")};
  font-size: ${({ size }) => `${size ? `${size}px` : "14px"}`};
  line-height: 18px;
  color: ${({ color }) => `${color ? color : "#0D263B"}`};
`;
export const Box = styled.div`
  display: flex;
  align-items: center;
  margin: 0px 30px;
  height: 200px;
  border-bottom: 1px solid #e6e9ec;
  @media (max-width: 700px) {
    margin: 0 10px;
  }
`;
export const Image = styled.div`
  box-sizing: border-box;
  width: 160px;
  height: 140px;
  background-color: red;
  border-radius: 3px;
  margin-right: 20px;
  @media (max-width: 700px) {
    width: 91px !important;
    height: 91px;
  }
`;
export const TitleDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
Title.Const = styled.div`
  font-family: Cerebri Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  text-decoration-line: line-through;
  color: #696969;
`;
export const Button = styled.div`
  @media (max-width: 700px) {
    display: none;
  }
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 30px;
  width: 71px;
  height: 23px;
  background: #0d263b;
  border-radius: 3px;
  font-weight: 600;
  font-size: 10px;
  flex-wrap: nowrap;
  color: white;
`;

export const But = styled.div`
  margin-left: auto;
  margin-right: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  gap: 10px;
  @media (max-width: 700px) {
    margin-top: 30px;
  }
`;

export const Buttons = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  background: #f6f8f9;
  border-radius: 60px;
  cursor: pointer;
  border-style: none;
`;
export const Edit = styled(edit)``;
export const Trash = styled(delate)``;

export const Pagination = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 27px;
`;
export const Btn = styled.button`
  cursor: pointer;
  border-style: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background-color: var(--colorWhite);
  :hover {
    background-color: #f6f8f9;
  }
  :focus {
    background-color: red;
  }
  .active {
    background-color: red;
  }
`;
export const LeftArrow = styled(arrov)``;
export const RightArrow = styled(arrov)`
  transform: rotate(-180deg);
`;
