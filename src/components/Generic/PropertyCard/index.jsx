import React from "react";
import { Container, Img, Title, Wrapper, Icon, Second } from "./styled";
import rasm from '../../../assets/images/properCarusel.png'
const PropertyCard = ({onClick,  title }) => {
  return (
    <Container onClick={onClick}>
      <Wrapper>
        <Img src={rasm} alt="homes" />
      </Wrapper>
      <Second>
        <Icon src={''} />
        <Title>{title}</Title>
      </Second>
    </Container>
  );
};

export default PropertyCard;
