import React from "react";
import Category from "../Category";
import Choose from "../Choose";
import Filter from "../Filter";
import CardCarusel from "./CardCarusel/index";
import Carusel from "./Carusel";
import { Container } from "./styled";

const Home = () => {
  return (
    <Container>
      <Filter />
      <Carusel />
      <CardCarusel />
      <Choose />
      <Category/> 
    </Container>
  );
};

export default Home;
