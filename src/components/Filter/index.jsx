import React from "react";
import { Button, Input } from "../Generic";
import { Advenced, Container, Icon, Section } from "./styled";
import { Popover } from "antd";
import UseReplace from "../../hooks/useReplace";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
const { REACT_APP_BASE_URL: url } = process.env;

const Filter = () => {
  const navigate = useNavigate();
  const onChange = ({ target }) => {
    const { value, name } = target;
    navigate(`${UseReplace(name, value)}`);
  };
  const box = useQuery(
    "getHomeList",
    () =>
      fetch(`${url}/v1/categories/list`, {
        method: "get",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }).then((res) => res.json()),

    {
      onSuccess: (res) => {
        console.log(res.data, "res");
      },
    }
  );
  // console.log(box?.data?.data?.map((val)=>val?.name), "data");
  const advancedSearch = (
    <Advenced>
      <Advenced.Title>Address</Advenced.Title>
      <Section>
        <Input
          height={40}
          onChange={onChange}
          name="countery"
          placeholder="Countery"
        />
        <Input
          height={40}
          onChange={onChange}
          name="region"
          placeholder="Region"
        />
        <Input height={40} onChange={onChange} name="city" placeholder="City" />
        <Input
          height={40}
          onChange={onChange}
          name="zip_code"
          placeholder="Zip Code"
        />
      </Section>
      <Advenced.Title>Appartment info</Advenced.Title>
      <Section>
        <Input
          height={40}
          onChange={onChange}
          name="address"
          placeholder="Address"
        />
        <Input
          height={40}
          onChange={onChange}
          name="house_name"
          placeholder="House Name"
        />
        <Input
          height={40}
          onChange={onChange}
          name="rooms"
          placeholder="Rooms"
        />
      </Section>
      <Advenced.Title>Price</Advenced.Title>
      <Section>
        <Input
          height={40}
          onChange={onChange}
          placeholder="Min price"
          name="min_price"
        />
        <Input
          height={40}
          onChange={onChange}
          placeholder="Max price"
          name="max_price"
        />
        <select name="" id="">
          {box?.data?.data?.map((val) => (
            <option key={val?.id} value={val?.name}>{val?.name}</option>
          ))}
        </select>
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
      <Popover placement="bottomRight" content={advancedSearch} trigger="click">
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
