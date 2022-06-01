import React from "react";
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
      <Card/>
    </Container>
  );
};

export default Home;
