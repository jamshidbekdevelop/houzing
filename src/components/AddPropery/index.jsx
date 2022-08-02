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
// import { Button } from "../Generic";
// import { Form, SubmitButton } from "formik-antd";
import { useFormik } from "formik";
const { REACT_APP_GoogleApiKey: key } = process.env;
// const { REACT_APP_BASE_URL: url } = process.env;

const Addpropery = () => {
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();
  const { request } = useHttp();
  const [map, setMap] = React.useState(null);
  // const [checked, setChecked] = useState(false);

  useQuery(
    "getSinglesssds Items",
    () => {
      return id && request({ url: `/v1/houses/${id}`, token: true });
    },
    {
      onSuccess: (res) => {
        setData(res?.data);
        console.log(res, "res");
      },
    }
  );

  // console.log(data, "datasssssss");

  // google map
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
    console.log(e?.latLang?.lat(), "lat");
    console.log(e?.latLang?.lng(), "lng");
    setCenter({
      lat: e?.latLang?.lat(),
      lng: e?.latLang?.lng(),
    });
  };
  // google map

  const { mutate } = useMutation(
    (value) =>
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
    // console.log(body, 'body')

  const { mutate: update } = useMutation(
    ({ id, value }) =>
      // return (
      id &&
      request({
        url: `/v1/houses/${id}`,
        method: "PUT",
        token: true,
        body: value,
      })
    // );
  );

  // const onSubmit = () => {
  //   if (id) {
  //     console.log(id, "id");
  //     update(id, {
  //       onSuccess: (res) => {
  //         console.log(res, "upd res");
  //         console.log(res?.success, "success");
  //         if (res?.success) {
  //           navigate("/properties/profile");
  //         }
  //       },
  //     });
  //   } else {
  //     mutate("", {
  //       onSuccess: (res) => {
  //         console.log(res?.success, "success");
  //         if (res?.success) {
  //           navigate("/properties/profile");
  //         }
  //       },
  //     });
  //   }
  // };

  // const onChange = ({ target: { name, value } }) => {
  //   setData({
  //     ...data,
  //     [name]: value,
  //   });
  // };

  const onSave = (value) => {
    // console.log(value, "datasxls");

    if (id) {
      // console.log(id, "id");
      update(
        { id, value },
        {
          onSuccess: (res) => {
            // console.log(res, "upd res");
            // console.log(res?.success, "success");
            if (res?.success) {
              navigate("/properties/profile");
            }
          },
        }
      );
    } else {
      mutate(value, {
        onSuccess: (res) => {
          console.log(res?.success, "success");
          if (res?.success) {
            navigate("/properties/profile");
          }
        },
      });
    }
  };

  // console.log(setDatas, "datala");
  // if (!data === null) {
  //   var gg = data;
  //   console.log(gg, "kerak");
  // }
  // console.log(data, "data");
  // console.log(gg, "ghfhgjhgjkdsbfkj");

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: { data },
    // initialValues: {
    //   address: "string",
    //   attachments: [
    //     {
    //       imgPath: "string",
    //     },
    //   ],
    //   categoryId: 0,
    //   city: "string",
    //   componentsDto: {
    //     additional: "string",
    //     airCondition: true,
    //     courtyard: true,
    //     furniture: true,
    //     gasStove: true,
    //     internet: true,
    //     tv: true,
    //   },
    //   country: "string",
    //   description: "string",
    //   homeAmenitiesDto: {
    //     additional: "string",
    //     busStop: true,
    //     garden: true,
    //     market: true,
    //     park: true,
    //     parking: true,
    //     school: true,
    //     stadium: true,
    //     subway: true,
    //     superMarket: true,
    //   },
    //   houseDetails: {
    //     area: 0,
    //     bath: 0,
    //     beds: 0,
    //     garage: 0,
    //     room: 0,
    //     yearBuilt: "string",
    //   },
    //   locations: {
    //     latitude: 0,
    //     longitude: 0,
    //   },
    //   name: "string",
    //   price: 0,
    //   region: "string",
    //   salePrice: 0,
    //   status: true,
    //   zipCode: "string",
    // },
    onSubmit: (item) => {
      console.log(item, "item");
    },
  });
  console.log(formik.values.data, "formik");
  // console.log(formik.values.componentsDto.airCondition, "sefds");
  // setChecked(formik.values.componentsDto.airCondition)
  return (
    // <Formik
    //   initialValues={data}
    //   // onSubmit={{data}}
    //   enableReinitialize
    // >
    // {/* {({ handleChange }) => ( */}
    //   {/* <Form> */}
    <Container onSubmit={formik.handleSubmit}>
      <Card>
        <Title>Cantact Information</Title>
        <Wrapper>
          <Input
            id="data.address"
            name="data.address"
            type="text"
            // defaultValue={data}
            // onChange={handleChange}
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
              <CheckBox
              // setChecked={formik.values.componentsDto.airCondition}
              // checked={formik.values.data.componentsDto.airCondition}
              // onChange={formik.handleChange}
              // value={formik.values.componentsDto.airCondition}
              />
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
      {/* <button type="submit">Submit</button> */}
      <Button
        // onClick={onSubmit}
        // onClick={onSubmit}
        onClick={() => onSave(formik.values.data)}
        mt={10}
        type={"primary"}
        width={150}
        height={44}
      >
        Submit
      </Button>
    </Container>
    //     </Form>
    //   )}
    // </Formik>
  );
};

export default Addpropery;
