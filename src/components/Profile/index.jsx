import React, { useState } from "react";
import { useMutation, useQuery } from "react-query";

import {
  Bottom,
  Box,
  Btn,
  Button,
  Container,
  Delate,
  Group,
  Image,
  LeftArrow,
  Pagination,
  RightArrow,
  Title,
  TitleDiv,
  Top,
  Trash,
} from "./styled";
const { REACT_APP_BASE_URL: url } = process.env;

const Favorites = () => {
  let pattern = null;
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  console.log(data, "data");
  useQuery(
    "getHomeList",
    () =>
      fetch(`${url}/v1/houses/me`, {
        method: "get",
        headers: {
          "Content-Type": "Application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }).then((res) => res.json()),

    {
      onSuccess: (res) => {
        console.log(res?.data, "me");
        setData(res?.data);
      },
    }
  );
  const [countriesPerPage] = useState(3);
  const value = page;
  const range = Math.ceil(data.length / countriesPerPage);
  switch (true) {
    case range < 7:
      pattern = [...new Array(range)].map((_, i) => i + 1);
      break;
    case value < 4:
      pattern = [1, 2, 3, 4, 5, "...", range];
      break;
    case value > range - 4:
      pattern = [1, "...", range - 4, range - 3, range - 2, range - 1, range];
      break;
    default:
      pattern = [1, "...", value - 1, value, value + 1, "...", range];
  }
  const lastPageIndex = page * countriesPerPage;
  const firstPageIndex = lastPageIndex - countriesPerPage;
  const currentPageIndex = data.slice(firstPageIndex, lastPageIndex);
  const changeNumber = (n) => {
    if (typeof n === "number" && n > 0 && n <= range) {
      setPage(n);
    }
  };
  console.log(currentPageIndex, "currentPageIndex");
  console.log(
    currentPageIndex.map((val) => val?.attachments[0]),
    "dsds"
  );
  const { mutate } = useMutation(({ id }) => {
    return fetch(`${url}/v1/houses/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "Application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((res) => res.json());
  });

  const onDelete = (id) => {
    mutate(
      { id },
      {
        onSuccess: (res) => {
          console.log(res, "deleted");
        },
      }
    );
  };
  return (
    <Group>
      <Container>
        <Top>
          <Title size={30}>Favorites</Title>
          <Title color={"#696969"}>Ready to jump back in?</Title>
        </Top>
        <Bottom>
          <div>
            {currentPageIndex.map(
              ({
                id,
                attachments,
                name,
                description,
                city,
                country,
                price,
                salePrice,
              }) => (
                <Box key={id}>
                  <Image>
                    <img
                      width={"100%"}
                      height={"100%"}
                      src={attachments[0].imgPath}
                      alt=""
                    />
                  </Image>
                  <TitleDiv>
                    <Title font={600} size={16}>
                      {name} {description}
                      <Button>FOR SALE</Button>
                    </Title>
                    <Title color={"#696969"}>
                      {city} {country}
                    </Title>
                    <Title.Const>{price}</Title.Const>
                    <Title font={600} size={16}>
                      {salePrice}
                    </Title>
                  </TitleDiv>
                  <Delate>
                    <Trash onClick={() => onDelete('')} /> {/* id berib yuborish kk */}
                  </Delate>
                </Box>
              )
            )}
          </div>
          <Pagination>
            <Btn disabled={value <= 1} onClick={() => changeNumber(value - 1)}>
              <LeftArrow />
            </Btn>
            {pattern.map((label) => (
              <Btn key={label} onClick={() => changeNumber(label)}>
                {label}
              </Btn>
            ))}
            <Btn
              disabled={value >= range}
              onClick={() => changeNumber(value + 1)}
            >
              <RightArrow />
            </Btn>
          </Pagination>
        </Bottom>
      </Container>
    </Group>
  );
};

export default Favorites;
