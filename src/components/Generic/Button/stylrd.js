import styled from "styled-components";

const Gettype = (type) => {
  switch (type) {
    case "secondary":
      return {
        border: "1px solid #e6e9ec",
        color: "#0D263B",
      };
    case "primary":
      return {
        background: "#0061DF",
        color: "#FFFFFF",
        border: "none",
      };

    default:
      return {
        border: "1px solid #E6E9Ec",
        color: "#FFFFFF",
      };
  }
};

export const Container = styled.div`
  display: flex;
  font-family: "Montserrat";
  font-style: normal;
  font-size: 14px;
  font-weight: 400;
  line-height: 12px;

  justify-content: center;
  align-items: center;
  border-radius: 2px;
  height: ${({ height }) => `${height}px` || "44px"};
  width: ${({ width }) => (width ? `${width}px` : "100%")};
  max-width: ${({ width }) => (width ? `${width}px` : "100%")};
  margin-top: ${({ mt }) => `${mt}px`};
  margin-left: ${({ ml }) => `${ml}px`};
  margin-right: ${({ mr }) => `${mr}px`};
  margin-bottom: ${({ mb }) => `${mb}px`};
  cursor: pointer;
  ${({type})=> Gettype(type)}
  :active{
      transform: scale(0.98);
      opacity: 0.7;
  }
  gap: 8px;
`;
