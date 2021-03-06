import styled from "styled-components";

export const Container = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1440px;
  padding: 100px 130px;
  gap: 32px;
`;
export const Card = styled.div`
  width: 1180px;
  height: ${({ height }) => (height ? `${height}px` : "301px")};
  background: #ffffff;
  border: 1px solid #e6e9ec;
  box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
  border-radius: 3px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;
export const Wrapper = styled.div`
  display: flex;
  gap: 20px;
`;
export const Title = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: #0d263b;
`;
export const CheckBox = styled.input.attrs({
  type: "checkbox",
})`
  width: 18px;
  height: 18px;
`;
export const Boxs = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 200px;
  gap: 20px;
`;
export const Text = styled.div`
  display: flex;
  gap: 15px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #696969;
`;
