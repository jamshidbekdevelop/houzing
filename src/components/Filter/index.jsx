import React from "react";
import { Button, Input } from "../Generic";
import { Advenced, Container, Icon, Section } from "./styled";
import { Popover } from "antd";
const Filter = () => {
  const advancedSearch = (
    <Advenced>
      <Advenced.Title>Address</Advenced.Title>
      <Section>
        <Input height={40} placeholder="Countery" />
        <Input height={40} placeholder="Region" />
        <Input height={40} placeholder="City" />
        <Input height={40} placeholder="Zip Code" />
      </Section>
      <Advenced.Title>Appartment info</Advenced.Title>
      <Section>
        <Input height={40} placeholder="Address" />
        <Input height={40} placeholder="House Name" />
        <Input height={40} placeholder="Rooms" />
      </Section>
      <Advenced.Title>Price</Advenced.Title>
      <Section>
        <Input height={40} placeholder="Min price" />
        <Input height={40} placeholder="Max price" />
      </Section>
      <Section>
        <Button width={131} height={40} ml={20} type={"primary"}>
          Search
        </Button>
      </Section>
    </Advenced>
  );
  return (
    <Container>
      <Input
        pl={16}
        placeholder={"Enter an address, neighborhood, city, or ZIP code"}
        height={40}
      >
        <Icon />
      </Input>
      <Popover placement="bottomRight" content={advancedSearch} trigger='click'>
        <Button height={40} width={131} type={"secondary"}>
          <Icon.Setting />
          Advanced
        </Button>
      </Popover>
      <Button height={40} width={180} type={"primary"}>
        <Icon.Searchs />
        Search
      </Button>
    </Container>
  );
};

export default Filter;
