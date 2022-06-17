import React from "react";
import Category from "../Category";
import Choose from "../Choose";
import Filter from "../Filter";
import CardCarusel from "./CardCarusel/index";
import Carusel from "./Carusel";
import { Container } from "./styled";

const Home = () => {
  let url = new URL(window?.location?.href)

  console.log(url?.searchParams);
  return (
    <Container>
      <Filter />
      <Carusel />
      <CardCarusel/>
      <Choose/>
      <Category/>
    </Container>
  );
};

export default Home;
