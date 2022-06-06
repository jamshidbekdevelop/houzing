import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./styles.css";
import { useQuery } from "react-query";
import PropertyCard from "../Generic/PropertyCard";
import { useNavigate } from "react-router-dom";
import UseReplace from '../../hooks/useReplace'
const { REACT_APP_BASE_URL: url } = process.env;
const Category = () => {
  const [state, setState] = useState([]);
  const navigate= useNavigate()
  // useRepl
  useQuery(
    "",
    () => {
      return fetch(`${url}/v1/categories/list`).then((res) => res.json());
    },
    {
      onSuccess: (res) => {
        let list = res?.data?.map((value) => {
          return value;
          // return <PropertyCard  title={value} />;
        });
        setState(list);
      },
      // refetchOnWindowFocus: false,
    }
  );
  const onSelect = (value) => {
    console.log(value, "on select");
    navigate(`/properties?category_id=${value}`)
  };
  // console.log(state, "state"); 

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 520, itemsToShow: 2, itemsToScroll: 2 },
    { width: 770, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  return (
    <div className="arr">
      <div className="title">Category</div>
      <div className="text">
        Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
      </div>
      <div className="controls-wrapper"></div>
      <div className="carousel-wrapper">
        <Carousel breakPoints={breakPoints}>
          {state.map((val) => (
            <Item key={val?.id}>
              <PropertyCard onClick={()=>onSelect(val?.id)} title={val?.name} />
            </Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Category;
