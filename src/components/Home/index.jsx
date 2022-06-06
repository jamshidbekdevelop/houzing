import React from "react";
import Category from "../Category";
import Filter from "../Filter";
import Card from "../Generic/Card";
import CardCarusel from "./CardCarusel/index";
import Carusel from "./Carusel";
import { Container } from "./styled";

const Home = () => {
  return (
    <Container>
      <Filter />
      <Carusel />
      <CardCarusel/>
      <Category/>
    </Container>
  );
};

export default Home;
