import React,{useState} from 'react'
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Card from '../../Generic/Card';
import Item from "./Item";
import "./styles.css";
const CardCarusel = () => {
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 520, itemsToShow: 2, itemsToScroll: 2 },
        { width: 770, itemsToShow: 3 },
        // { width: 1200, itemsToShow: 4 }
      ];
      const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
      // const addItem = () => {
      //   const nextItem = Math.max(1, items.length + 1);
      //   setItems([...items, nextItem]);
      // };
    
      // const removeItem = () => {
      //   const endRange = Math.max(0, items.length - 1);
      //   setItems(items.slice(0, endRange));
      // };
  return (
    <div className="arr">
      <div className="title">Recommended</div>
      <div className="text">Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</div>
      <div className="controls-wrapper">

        {/* <button onClick={removeItem}>Remove Item</button>
        <button onClick={addItem}>Add Item</button> */}
      </div>
      {/* <hr className="seperator" /> */}
      <div className="carousel-wrapper">
        <Carousel breakPoints={breakPoints}>
          {items.map((item) => (
            <Item key={item}><Card/></Item>
          ))}
        </Carousel>
      </div>
    </div>
  )
}

export default CardCarusel