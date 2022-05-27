import React from "react";
import Card from "../../Generic/Card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box, Container, responsive } from "./styled";
const CardCarusel = () => {
  return (
    <Container>
      <Carousel
        additionalTransfrom={10}
        autoPlay
        autoPlaySpeed={3500}
        centerMode={false}
        containerClass="carousel-container"
        // containerClass="container-with-dots"
        draggable
        focusOnSelect={false}
        infinite
        itemClass="carousel-item-padding-40-px"
        customTransition="all 3s"
        keyBoardControl
        minimumTouchDrag={100}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={responsive}
      >
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        {/* <Box>
          <Card />
        </Box>
        <Box>
          <Card />
        </Box>
        <Box>
          <Card />
        </Box>
        <Box>
          <Card />
        </Box>
        <Box>
          <Card />
        </Box>
        <Box>
          <Card />
        </Box>
        <Box>
          <Card />
        </Box> */}
      </Carousel>
    </Container>
  );
};

export default CardCarusel;
