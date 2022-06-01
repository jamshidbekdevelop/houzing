import React from "react";
import { useState } from "react";
import { useQuery } from "react-query";
import Filter from "../Filter";
import { Body, Container, Text, Wrapper } from "./styled";
import Card from "../Generic/Card";
import { useLocation } from "react-router-dom";
const { REACT_APP_BASE_URL: url } = process.env;

const Properties = () => {
  const [data, setData] = useState([]);
  const {search}=useLocation()
  useQuery(
    ["getHomeList", [search]],
    () => {
      return fetch(  `${url}/v1/houses/list${search || "? "}` ).then((res) =>
        res.json()
      );
    },
    {
      onSuccess: (res) => {
        console.log(res.data, "res");
        setData(res?.data || []);
      },
    }
  );
  return (
    <Container>
      <Filter />
      <Wrapper>
        <Text>Recommended</Text>
        <Text size={16} color={"#696969"}>
          Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
        </Text>
      </Wrapper>
      <Body>
        {data.map((value) => {
          return <Card key={value.id} info={value} />;
        })}
      </Body>
    </Container>
  );
};

export default Properties;
