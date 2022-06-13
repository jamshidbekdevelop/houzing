import React, { useEffect } from "react";
import { useState } from "react";
import { useQuery } from "react-query";
import Filter from "../Filter";
import { Body, Container, Text, Wrapper } from "./styled";
import Card from "../Generic/Card";
import { useLocation, useNavigate } from "react-router-dom";
import useSearch from "../../hooks/useSearch";

const { REACT_APP_BASE_URL: url } = process.env;

const Properties = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("Properties");
  const [data, setData] = useState([]);
  const { search } = useLocation();
  const query = useSearch();
  // console.log(query.get("category_id"));

  useEffect(() => {
    if (!query.get("category_id")) {
      setTitle("Properties");
    }
  },[query.get("category_id")]);
  useQuery(
    "getHomeListdd",
    () => {
      return (
        query.get("category_id") &&
        fetch(`${url}/v1/categories/${query.get("category_id")}`, {
          // fetch(`${url}/v1/categories/1`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }).then((res) => res.json())
      );
    },
    {
      onSuccess: (res) => {
        console.log(res?.data?.name, "resfd");
        query.get("category_id")&& setTitle(res?.data?.name || "Properties");
      },
    }
  );
  useQuery(
    ["getHomeList", [search]],
    () => {
      return fetch(`${url}/v1/houses/list${search || "?"}`).then((res) =>
        res.json()
      );
    },
    {
      onSuccess: (res) => {
        // console.log(res?.data.map((val)=>val.category.name), "reslist");
        setData(res?.data || []);
      },
    }
  );
  const onSelect = (id) => {
    console.log(id, "id");
    navigate(`/properties/:${id}`);
  };
  return (
    <Container>
      <Filter />
      <Wrapper>
        <Text>{title}</Text>
        <Text size={16} color={"#696969"}>
          Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
        </Text>
      </Wrapper>
      <Body>
        {data?.map((value) => {
          return (
            <Card
              onClick={() => onSelect(value?.id)}
              key={value.id}
              info={value}
            />
          );
        })}
      </Body>
    </Container>
  );
};

export default Properties;
