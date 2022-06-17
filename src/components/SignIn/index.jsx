import { Checkbox } from "antd";
import React, { useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "../Generic";
import { A, Box, ChexDiv, Container, Error, Title } from "./styled";
const { REACT_APP_BASE_URL: url } = process.env;
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const { mutate } = useMutation((res) => {
    return fetch(`${url}/public/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({
        email,
        password,
        // roleIdSet: [0],
      }),
    }).then((res) => res.json());
  });
  const onSubmit = () => {
    if (email?.length && password?.length) {
      console.log(email, password);
      mutate(
        {},
        {
          onSuccess: (res) => {
            if (res?.authenticationToken) {
              localStorage.setItem("token", res?.authenticationToken);
              setError(false);
              navigate("/home");
            } else {
              setError("Email yoki pw hatolik");
            }
          },
        }
      );
    } else {
      setError("Email yoki pw bosh bomasligi kerak");
    }
  };
  return (
    <Container>
      <Box>
        <Title size={28}>Sign In</Title>
        <Title mt={44}>LogIn</Title>
        <Input
          onChange={({ target: { value } }) => setEmail(value)}
          placeholder={"Email"}
          height={40}
          value={email}
        />
        <Input
          onChange={({ target: { value } }) => setPassword(value)}
          placeholder={"Pasdword"}
          mt={40}
          height={40}
          value={password}
        />
        {error?.length ? <Error>{error}</Error> : null}
        <ChexDiv>
          <Checkbox />
          Remember Me
          <A>Forgot</A>
        </ChexDiv>
        <Button mt={32} height={44} type={"primary"} onClick={onSubmit}>
          Login
        </Button>
      </Box>
    </Container>
  );
};

export default SignIn;
