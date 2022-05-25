import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import { navbar } from "../untils/navbar";
import { Container } from "./styled";
const Root = () => {
  return (
    <Routes>
      <Route element={<Navbar />}>
        {navbar.map(({ id, hidden, path, Element }) => {
          return <Route key={id} path={path} element={Element} />;
        })}
      <Route path="/" element={<Navigate to={'/home'}/>}/>
      </Route>
      <Route path="*" element={<div>Not Found</div>}/>
    </Routes>
  );
};

export default Root;
