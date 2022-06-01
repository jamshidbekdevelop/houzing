import React, { useRef } from "react";
import img1 from "../../../assets/images/home-img.jpg";
import img2 from "../../../assets/images/popular-home-img.jpg";
import {
  Box,
  Button,
  CaruselWrapper,
  Div,
  Icon,
  Img,
  Main,
  MainCarusel,
  Title,
} from "./styled";
const Carusel = () => {
  const slider = useRef();
  return (
    <CaruselWrapper>
      <Icon.Left onClick={() => slider.current?.prev()} />
      <Icon.Right onClick={() => slider.current?.next()} />
      <MainCarusel ref={slider} dots autoplay>
        <Box>
          <Img src={img1} />
          <Box.Main>
            <Title>Skyper Pool Partment</Title>
            <Title size={16}>112 Glenwood Ave Hyde Park, Boston, MA</Title>
            <Main>
              <Div>
                <Icon.Bed />4 beds
              </Div>
              <Div>
                <Icon.Bath />5 Baths
              </Div>
              <Div>
                <Icon.Garge />1 Garage
              </Div>
              <Div>
                <Icon.SqFt />1200 Sq Ft
              </Div>
            </Main>
            <Title size={28}>$5,250/mo</Title>
            <Button>Read More</Button>
          </Box.Main>
        </Box>
        <Box>
          <Img src={img2} />
          <Box.Main>
            <Title>Skyper Pool Partment</Title>
            <Title size={16}>112 Glenwood Ave Hyde Park, Boston, MA</Title>
            <Main>
              <Div>
                <Icon.Bed />4 beds
              </Div>
              <Div>
                <Icon.Bath />5 Baths
              </Div>
              <Div>
                <Icon.Garge />1 Garage
              </Div>
              <Div>
                <Icon.SqFt />1200 Sq Ft
              </Div>
            </Main>
            <Title size={28}>$5,250/mo</Title>
            <Button>Read More</Button>
          </Box.Main>
        </Box>
        <Box>
          <Img src={img1} />
          <Box.Main>
            <Title>Skyper Pool Partment</Title>
            <Title size={16}>112 Glenwood Ave Hyde Park, Boston, MA</Title>
            <Main>
              <Div>
                <Icon.Bed />4 beds
              </Div>
              <Div>
                <Icon.Bath />5 Baths
              </Div>
              <Div>
                <Icon.Garge />1 Garage
              </Div>
              <Div>
                <Icon.SqFt />1200 Sq Ft
              </Div>
            </Main>
            <Title size={28}>$5,250/mo</Title>
            <Button>Read More</Button>
          </Box.Main>
        </Box>
        <Box>
          <Img src={img2} />
          <Box.Main>
            <Title>Skyper Pool Partment</Title>
            <Title size={16}>112 Glenwood Ave Hyde Park, Boston, MA</Title>
            <Main>
              <Div>
                <Icon.Bed />4 beds
              </Div>
              <Div>
                <Icon.Bath />5 Baths
              </Div>
              <Div>
                <Icon.Garge />1 Garage
              </Div>
              <Div>
                <Icon.SqFt />1200 Sq Ft
              </Div>
            </Main>
            <Title size={28}>$5,250/mo</Title>
            <Button>Read More</Button>
          </Box.Main>
        </Box>
        <Box>
          <Img src={img1} />
          <Box.Main>
            <Title>Skyper Pool Partment</Title>
            <Title size={16}>112 Glenwood Ave Hyde Park, Boston, MA</Title>
            <Main>
              <Div>
                <Icon.Bed />4 beds
              </Div>
              <Div>
                <Icon.Bath />5 Baths
              </Div>
              <Div>
                <Icon.Garge />1 Garage
              </Div>
              <Div>
                <Icon.SqFt />1200 Sq Ft
              </Div>
            </Main>
            <Title size={28}>$5,250/mo</Title>
            <Button>Read More</Button>
          </Box.Main>
        </Box>
        <Box>
          <Img src={img2} />
          <Box.Main>
            <Title>Skyper Pool Partment</Title>
            <Title size={16}>112 Glenwood Ave Hyde Park, Boston, MA</Title>
            <Main>
              <Div>
                <Icon.Bed />4 beds
              </Div>
              <Div>
                <Icon.Bath />5 Baths
              </Div>
              <Div>
                <Icon.Garge />1 Garage
              </Div>
              <Div>
                <Icon.SqFt />1200 Sq Ft
              </Div>
            </Main>
            <Title size={28}>$5,250/mo</Title>
            <Button>Read More</Button>
          </Box.Main>
        </Box>

      </MainCarusel>
    </CaruselWrapper>
  );
};

export default Carusel;
