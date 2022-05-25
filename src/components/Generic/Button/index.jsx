import React from "react";
import { Container } from "./stylrd";

const Button = ({ children, onClick, height, width, type, mr, mt, ml, mb }) => {
  return (
    <Container
      mr={mr}
      mt={mt}
      ml={ml}
      mb={mb}
      type={type}
      onClick={onClick}
      height={height}
      width={width}
    >
      {children}
    </Container>
  );
};

export default Button;
