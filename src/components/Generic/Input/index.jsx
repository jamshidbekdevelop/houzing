import React from "react";
import { Container, Input, Logo } from "./stylrd";

const Inputt = ({
  children,
  onClick,
  height,
  width,
  mr,
  mt,
  ml,
  mb,
  placeholder,
  onChange,
  pl,
}) => {
  return (
    <Container
      pl={pl}
      height={height}
      width={width}
      mr={mr}
      mt={mt}
      ml={ml}
      mb={mb}
    >
      <Logo>{children}</Logo>
      <Input placeholder={placeholder} onChange={onChange} onClick={onClick} />
    </Container>
  );
};

export default Inputt;
