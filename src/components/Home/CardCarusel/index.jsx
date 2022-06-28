import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
import { useQuery } from "react-query";
import Card from "../../Generic/Card";
import Item from "./Item";
import "./styles.css";
const { REACT_APP_BASE_URL: url } = process.env;

const CardCarusel = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 3 },
  ];

  const [items, setItems] = useState([]);
  console.log();
  useQuery(
    ["getHomeList"],
    () => {
      return fetch(`${url}/v1/houses/list`).then((res) => res.json());
    },
    {
      onSuccess: (res) => {
        console.log(res?.data, 'res?.data');
        setItems(res?.data || []);
      },
    }
  );
  console.log(items?.map((val)=>val), 'item');
  return (
    <div className="arr">
      <div className="title">Recommended</div>
      <div className="text">
        Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
      </div>
      <div className="controls-wrapper"></div>
      <div className="carousel-wrapper">
        <Carousel breakPoints={breakPoints}>
          {items?.map((value) => (
            <Item key={value?.id}>
              {console.log(value?.id, "value")}
              {/* <Card key={value.id} info={value} /> */}
            </Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default CardCarusel;
