import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import React, { useState } from "react";
import { useMutation, useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { useHttp } from "../../hooks/useHttp";
// import Input from "../Generic/Input";
import { Card, Container, Title, Wrapper } from "./styled";
import { Button } from "../Generic";
import { Form, Input, InputNumber, Checkbox, SubmitButton } from "formik-antd";
import { Formik } from "formik";
const { REACT_APP_GoogleApiKey: key } = process.env;
// const { REACT_APP_BASE_URL: url } = process.env;

const Addpropery = () => {
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();
  const { request } = useHttp();
  const [map, setMap] = React.useState(null);
  useQuery(
    "getSingle Items",
    () => {
      return id && request({ url: `/v1/houses/${id}`, token: true });
    },
    {
      onSuccess: (res) => {
        console.log(res, "res");
        setData(res?.data);
      },
    }
  );

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

  const { mutate } = useMutation((body) =>
    request({
      url: "/v1/houses",
      method: "POST",
      token: true,
      body,
      // body: {
      //   address: "yangiyer",
      //   attachments: [
      //     {
      //       imgPath:
      //         "https://storage.kun.uz/source/6/VNjBGsNUcx4DOBe98cXku_lLKShmLYZV.jpg",
      //     },
      //   ],
      //   categoryId: 1,
      //   city: "uchqorgan",
      //   componentsDto: {
      //     additional: "string",
      //     airCondition: true,
      //     courtyard: true,
      //     furniture: true,
      //     gasStove: true,
      //     internet: true,
      //     tv: true,
      //   },
      //   country: "uzb",
      //   description: "string",
      //   favorite: true,
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
      //     area: 10,
      //     bath: 10,
      //     beds: 10,
      //     garage: 10,
      //     room: 10,
      //     yearBuilt: 10,
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
    })
  );

  const { mutate: update } = useMutation(
    (id) =>
      // return (
      id &&
      request({
        url: `/v1/houses/${id}`,
        method: "PUT",
        token: true,
        body: data,
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
    console.log(value, "data");
    if (id) {
      console.log(id, "id");
      update(id, {
        onSuccess: (res) => {
          console.log(res, "upd res");
          console.log(res?.success, "success");
          if (res?.success) {
            navigate("/properties/profile");
          }
        },
      });
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

  return (
    <Formik
      initialValues={ data }
      // onSubmit={{data}}
      enableReinitialize
      render={() => (
        <Form>
          <Container>
            <Card>  
              <Title>Cantact Information</Title>
              <Wrapper>
                <Input
                  name="address"
                  height={44}
                  placeholder={"Property title"}
                />
                <Input name="category.name" height={44} placeholder={"Category"} />
              </Wrapper>
              <Input name="description" height={44} placeholder={"Property Description"} />
            </Card>
            <Card>
              <Title>Additional</Title>
              <Wrapper>
                <Input
                  // value={data?.houseDetails?.bath}
                  name="houseDetails.bath"
                  height={44}
                  placeholder={"bath"}
                />
                <Input
                  // value={data?.houseDetails?.bad}
                  name={"houseDetails.beds"}
                  height={44}
                  placeholder={"bad"}
                />
                <Input
                  // value={data?.houseDetails?.garage}
                  name={"houseDetails.garage"}
                  height={44}
                  placeholder={"garage"}
                />
              </Wrapper>
              <Wrapper>
                <Input name="houseDetails.yearBuilt" height={44} placeholder={"year build"} />
                <Input name="houseDetails.area" height={44} placeholder={"home area"} />
                <Input name="houseDetails.room" height={44} placeholder={"rooms"} />
              </Wrapper>
            </Card>
            <Card height={210}>
              <Title>Price</Title>
              <Wrapper>
                <Input name="price" height={44} placeholder={"price"} />
                <Input name="salePrice" height={44} placeholder={"sale price"} />
              </Wrapper>
            </Card>
            <Card height={810}>
              <Title>Location</Title>
              <Wrapper>
                <Input height={44} placeholder={"Region"} />
                <Input height={44} placeholder={"Address"} />
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
            <SubmitButton
              // onClick={onSubmit}
              onClick={() => onSave( data )}
              mt={10}
              type={"primary"}
              width={150}
              height={44}
            >
              Submit
            </SubmitButton>
          </Container>
        </Form>
      )}
    />
  );
};

export default Addpropery;
