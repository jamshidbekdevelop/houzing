import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import React, { useState } from "react";
import { useMutation, useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { useHttp } from "../../hooks/useHttp";
// import Input from "../Generic/Input";
import { Card, Container, Title, Wrapper } from "./styled";
// import { Button } from "../Generic";
import { Form, Input, SubmitButton } from "formik-antd";
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
    "getSinglesssds Items",
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
  console.log(data, "datasssssss");
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
    console.log(value, "datasxls");

    if (id) {
      console.log(id, "id");
      update(id, {
        onSuccess: (res) => {
          // console.log(res, "upd res");
          // console.log(res?.success, "success");
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
  console.log(data, "datala");
  return (
    <Formik
      initialValues={data}
      // onSubmit={{data}}
      enableReinitialize
    >
      {({ handleChange }) => (
        <Form>
          <Container>
            <Card>
              <Title>Cantact Information</Title>
              <Wrapper>
                <Input
                  name="address"
                  // defaultValue={data}
                  // onChange={handleChange}
                  height={44}
                  placeholder="Property title"
                />
                <Input
                  name="category.name"
                  height={44}
                  placeholder={"Category"}
                />
              </Wrapper>
              <Input
                name="description"
                height={44}
                placeholder={"Property Description"}
              />
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
                <Input
                  name="houseDetails.yearBuilt"
                  height={44}
                  placeholder={"year build"}
                />
                <Input
                  name="houseDetails.area"
                  height={44}
                  placeholder={"home area"}
                />
                <Input
                  name="houseDetails.room"
                  height={44}
                  placeholder={"rooms"}
                />
              </Wrapper>
            </Card>
            <Card height={210}>
              <Title>Price</Title>
              <Wrapper>
                <Input name="price" height={44} placeholder={"price"} />
                <Input
                  name="salePrice"
                  height={44}
                  placeholder={"sale price"}
                />
              </Wrapper>
            </Card>
            <Card height={810}>
              <Title>Location</Title>
              <Wrapper>
                <Input
                  name="locations.latitude"
                  height={44}
                  placeholder={"Region"}
                />
                <Input
                  name="locations.longitude"
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
            <SubmitButton
              // onClick={onSubmit}
              onClick={() => onSave(data)}
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
    </Formik>
  );
};

export default Addpropery;
