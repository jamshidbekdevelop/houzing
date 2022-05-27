import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 100px 0;
  padding: 0 140px;
`;
export const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
