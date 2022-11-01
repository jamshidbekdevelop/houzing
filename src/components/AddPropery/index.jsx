import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import React, { useState } from "react";
import { useMutation, useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { useHttp } from "../../hooks/useHttp";
import Input from "../Generic/Input";
import Button from "../Generic/Button";
import {
  Boxs,
  Card,
  CheckBox,
  Container,
  Text,
  Title,
  Wrapper,
} from "./styled";
import { useFormik } from "formik";
const { REACT_APP_GoogleApiKey: key } = process.env;

const Addpropery = () => {
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();
  const { request } = useHttp();
  const [map, setMap] = React.useState(null);

  useQuery(
    "getSinglesssds Items",
    () => {
      return id && request({ url: `/v1/houses/${id}`, token: true });
    },
    {
      onSuccess: (res) => {
        setData(res?.data);
      },
    }
  );
  const [center, setCenter] = useState({
    lat: 41.2995,
    lng: 69.2401,
  });
  const containerStyle = {
    width: "100%",
    height: "600px",
  };
  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);
  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);
  const { isLoaded } = useJsApiLoader({
    id: "edit-house",
    googleMapsApiKey: key,
  });
  const onMapClick = (e) => {
    setCenter({
      lat: e?.latLang?.lat(),
      lng: e?.latLang?.lng(),
    });
  };

  const { mutate } = useMutation((value) =>
    request({
      url: "/v1/houses",
      method: "POST",
      token: true,
      body: {
        ...value,
        attachments: [
          {
            imgPath:
              "https://pix10.agoda.net/hotelImages/7950132/-1/b31289e578b8a105950b2d4e7b170ffc.jpg",
          },
        ],
        city: "string",
        componentsDto: {
          additional: "zor",
          airCondition: true,
          courtyard: true,
          furniture: true,
          gasStove: true,
          internet: true,
          tv: true,
        },
        homeAmenitiesDto: {
          additional: "zor",
          busStop: true,
          garden: true,
          market: true,
          park: true,
          parking: true,
          school: true,
          stadium: true,
          subway: true,
          superMarket: true,
        },
        locations: {
          latitude: 41.2995,
          longitude: 69.2401,
        },
        name: "string",
        region: "string",
        status: true,
        zipCode: "string",
      },
    })
  );
  const { mutate: update } = useMutation(
    ({ id, value }) =>
      id &&
      request({
        url: `/v1/houses/${id}`,
        method: "PUT",
        token: true,
        body: value,
      })
  );
  const onSave = (value) => {
    if (id) {
      update(
        { id, value },
        {
          onSuccess: (res) => {
            if (res?.success) {
              navigate("/properties/profile");
            }
          },
        }
      );
    } else {
      mutate(value, {
        onSuccess: (res) => {
          if (res?.success) {
            navigate("/properties/profile");
          }
        },
      });
    }
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: { data },
    onSubmit: (item) => {},
  });
  return (
    <Container onSubmit={formik.handleSubmit}>
      <Card>
        <Title>Cantact Information</Title>
        <Wrapper>
          <Input
            id="data.address"
            name="data.address"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.data?.address || ""}
            height={44}
            placeholder="Property title"
          />
          <Input
            id="data.category.name"
            name="data.category.name"
            onChange={formik.handleChange}
            value={formik.values.data?.category?.name || ""}
            height={44}
            placeholder={"Category"}
          />
        </Wrapper>
        <Input
          id="data.description"
          name="data.description"
          onChange={formik.handleChange}
          value={formik.values.data?.description || ""}
          height={44}
          placeholder={"Property Description"}
        />
      </Card>
      <Card>
        <Title>Additional</Title>
        <Wrapper>
          <Input
            onChange={formik.handleChange}
            value={formik.values.data?.houseDetails?.bath || ""}
            id="data.houseDetails.bath"
            name="data.houseDetails.bath"
            height={44}
            placeholder={"bath"}
          />
          <Input
            onChange={formik.handleChange}
            value={formik.values.data?.houseDetails?.beds || ""}
            id="data.houseDetails.beds"
            name="data.houseDetails.beds"
            height={44}
            placeholder={"bad"}
          />
          <Input
            onChange={formik.handleChange}
            value={formik.values.data?.houseDetails?.garage || ""}
            id="data.houseDetails.garage"
            name="data.houseDetails.garage"
            height={44}
            placeholder={"garage"}
          />
        </Wrapper>
        <Wrapper>
          <Input
            onChange={formik.handleChange}
            value={formik.values.data?.houseDetails?.yearBuilt || ""}
            id="data.houseDetails.yearBuilt"
            name="data.houseDetails.yearBuilt"
            height={44}
            placeholder={"year build"}
          />
          <Input
            onChange={formik.handleChange}
            value={formik.values.data?.houseDetails?.area || ""}
            id="data.houseDetails.area"
            name="data.houseDetails.area"
            height={44}
            placeholder={"home area"}
          />
          <Input
            id="data.houseDetails.room"
            name="data.houseDetails.room"
            onChange={formik.handleChange}
            value={formik.values.data?.houseDetails?.room || ""}
            height={44}
            placeholder={"rooms"}
          />
        </Wrapper>
      </Card>
      <Card height={210}>
        <Title>Price</Title>
        <Wrapper>
          <Input
            id="data.price"
            name="data.price"
            onChange={formik.handleChange}
            value={formik.values.data?.price || ""}
            height={44}
            placeholder={"price"}
          />
          <Input
            id="data.salePrice"
            name="data.salePrice"
            height={44}
            onChange={formik.handleChange}
            value={formik.values.data?.salePrice || ""}
            placeholder={"sale price"}
          />
        </Wrapper>
      </Card>
      <Card height={810}>
        <Title>Location</Title>
        <Wrapper>
          <Input
            id="data.latitude"
            name="data.latitude"
            onChange={formik.handleChange}
            value={formik.values.data?.latitude || ""}
            height={44}
            placeholder={"Region"}
          />
          <Input
            onChange={formik.handleChange}
            value={formik.values.data?.longitude || ""}
            id="data.longitude"
            name="data.longitude"
            height={44}
            placeholder={"Address"}
          />
        </Wrapper>
        {isLoaded && (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={15}
            onLoad={onLoad}
            onUnmount={onUnmount}
            onClick={() => onMapClick()}
          >
            <>
              <Marker position={center} />
              <Marker position={center} />
            </>
          </GoogleMap>
        )}
      </Card>
      <Card height={340}>
        <Title>Amenities</Title>

        <Wrapper>
          <Boxs>
            <Text>
              <CheckBox />
              Air Conditions
            </Text>
            <Text>
              <CheckBox />
              Barbeque
            </Text>
            <Text>
              <CheckBox />
              Dryer
            </Text>
            <Text>
              <CheckBox />
              GYM
            </Text>
            <Text>
              <CheckBox />
              Laundry
            </Text>
          </Boxs>
          <Boxs>
            <Text>
              <CheckBox />
              Lawn
            </Text>
            <Text>
              <CheckBox />
              Microwave
            </Text>
            <Text>
              <CheckBox />
              Outdoor Shower
            </Text>
            <Text>
              <CheckBox />
              Refrigerator
            </Text>
            <Text>
              <CheckBox />
              Stunning views
            </Text>
          </Boxs>
          <Boxs>
            <Text>
              <CheckBox />
              Air Conditions
            </Text>
            <Text>
              <CheckBox />
              Barbeque
            </Text>
            <Text>
              <CheckBox />
              Dryer
            </Text>
            <Text>
              <CheckBox />
              GYM
            </Text>
            <Text>
              <CheckBox />
              Laundry
            </Text>
          </Boxs>
          <Boxs>
            <Text>
              <CheckBox />
              Air Conditions
            </Text>
            <Text>
              <CheckBox />
              Barbeque
            </Text>
            <Text>
              <CheckBox />
              Dryer
            </Text>
            <Text>
              <CheckBox />
              GYM
            </Text>
            <Text>
              <CheckBox />
              Laundry
            </Text>
          </Boxs>
        </Wrapper>
      </Card>
      <Button
        onClick={() => onSave(formik.values.data)}
        mt={10}
        type={"primary"}
        width={150}
        height={44}
      >
        Submit
      </Button>
    </Container>
  );
};

export default Addpropery;
