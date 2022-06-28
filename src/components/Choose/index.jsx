import React from "react";
import {
  Body,
  Box,
  BoxContainer,
  Container,
  Div,
  Home,
  Icons,
  Map,
  Massege,
  Ring,
  Text,
  Title,
} from "./styled";

const Choose = () => {
  return (
    <Body>
      <Container>
        <Title>Why Choose Us?</Title>
        <Text>
          Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
        </Text>
        <BoxContainer>
          <Div>
            <Box>
              <Massege />
              <Title size={18}>Trusted By Thousands</Title>
              <Text>
                With over 1 million+ homes for sale available on the website,
                Trulia can match you with a house you will want to call home.
              </Text>
            </Box>
            <Box>
              <Home />
              <Title size={18}>Wide Renge Of Properties</Title>
              <Text>
                With over 1 million+ homes for sale available on the website,
                Trulia can match you with a house you will want to call home.
              </Text>
            </Box>
          </Div>
          <Div>
            <Box>
              <Ring />
              <Title size={18}>Financing Made Easy</Title>
              <Text>
                With over 1 million+ homes for sale available on the website,
                Trulia can match you with a house you will want to call home.
              </Text>
            </Box>
            <Box>
              <Map />
              <Title size={18}>See Neighborhoods</Title>
              <Text>
                With over 1 million+ homes for sale available on the website,
                Trulia can match you with a house you will want to call home.
              </Text>
            </Box>
          </Div>
        </BoxContainer>
      </Container>
    </Body>
  );
};

export default Choose;
