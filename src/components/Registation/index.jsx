import React, { useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "../Generic";
import { Box, Container, Title } from "./styled";
const { REACT_APP_BASE_URL: url } = process.env;
const Register = () => {
  const [email, setEmail] = useState("");
  const [lastname, setLastName] = useState("");
  const [firstname, setFirstName] = useState("");
  // const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { mutate } = useMutation((res) => {
    return fetch(`${url}/public/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({
        email,
        firstname,
        lastname,
        password,
        roleIdSet: [1],
      }),
    }).then((res) => res.json());
  });
  const onSubmit = () => {
    console.log(email, password);
    mutate(
      {},
      {
        onSuccess: (res) => {
          if (res?.authenticationToken) {
            localStorage.setItem("token", res?.authenticationToken);
            navigate("/home");
          }
        },
      }
    );
  };
  return (
    <Container>
      <Box>
        <Title>Registration</Title>
        <Input mt={25} placeholder={"Login"} height={44} />
        <Input
          onChange={({ target: { value } }) => setFirstName(value)}
          value={firstname}
          mt={25}
          placeholder={"First name"}
          height={44}
        />
        <Input
          onChange={({ target: { value } }) => setLastName(value)}
          value={lastname}
          mt={25}
          placeholder={"Last name"}
          height={44}
        />
        <Input
          mt={25}
          onChange={({ target: { value } }) => setEmail(value)}
          placeholder={"Email"}
          height={44}
          value={email}
        />
        <Input mt={25} placeholder={"User role"} height={44} />
        <Input
          mt={25}
          onChange={({ target: { value } }) => setPassword(value)}
          value={password}
          placeholder={"Password"}
          height={44}
        />
        <Input
          onChange={({ target: { value } }) => setPassword(value)}
          value={password}
          mt={25}
          placeholder={"Re-enter password"}
          height={44}
        />
        <Button onClick={onSubmit} mt={32} height={44} type={"primary"}>
          Register
        </Button>
      </Box>
    </Container>
  );
};

export default Register;
