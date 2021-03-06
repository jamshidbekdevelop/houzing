import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import { navbar } from "../untils/navbar";
import { Container } from "./styled";
const Root = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Navigate to={"/home"} />} />
        <Route>
          {navbar.map(({ path, element, id, hidden, useParams }) => {
            return (
              !useParams &&
              hidden && <Route key={id} path={path} element={element} />
            );
          })}
        </Route>

        <Route element={<Navbar />}>
          {navbar.map(({ id, hidden, path, element, useParams }) => {
            return (
              (useParams || !hidden) && (
                <Route key={id} path={path} element={element} />
              )
            );
          })}
        </Route>
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </Container>
  );
};

export default Root;
