import styled from "styled-components";

export const Icon = styled.img`
  width: 60px;
  height: 60px;
`;
export const Img = styled.img`
  opacity: 1;
  filter: brightness(70%);
  transform: translate();
  :hover {
    transition: 0.3s ease-in-out;
    cursor: pointer;
    opacity: 0.7;
  }
  width: 100%;
`;
export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  :hover ${Img} {
    transition: 0.3s ease-in-out;
    cursor: pointer;
    opacity: 0.7;
  }
  width: 280px;
  height: 350px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)),
    url(.jpg);
  border-radius: 3px;
  box-sizing: border-box;
`;
export const Wrapper = styled.div`
  position: relative;
  width: 280px;
  height: 350px;
`;

export const Title = styled.div`
  line-height: 23px;
  font-weight: 600;
  font-style: normal;
  color: #fff;
  font-size: 16px;
  text-transform: uppercase;
`;

export const Second = styled.div`
  bottom: 93px;
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: center;
  align-items: center;
`;
