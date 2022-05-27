import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 100px 0;
  padding: 0 140px;
`;
export const Box = styled.div`
  margin: 0 10px;
  max-width: 382px;
  /* width: 100%; */
`;
const titLe = css`
  line-height: 200px;
  font-style: normal;
  font-weight: 600;
  color: #0d263b;
  font-size: 30px;
`;
const ma=css`
max-width: 382px;
width: 100%;
`
const Desc = css`
  line-height: 200px;
  font-style: normal;
  font-weight: normal;
  color: #696969;
  font-size: 16px;
  margin: 10px 0 32px 0;
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
