import React from "react";
import Generic from "../pages/Generic";
import HomePage from "../pages/Home";
import PropertiesPage from "../pages/Properties";


export const navbar = [
  {
    id: 1,
    title: "Home",
    path: "/home",
    Element: <HomePage/>,
    search: "?",
    hidden: false,
    private: false,
  },
  {
    id: 2,
    title: "Properties",
    path: "/properties",
    Element: <PropertiesPage/>,
    search: "?",
    hidden: false,
    private: false,
  },
  {
    id: 3,
    title: "Contacts",
    path: "/contacts",
    Element: <Generic/>,
    search: "?",
    hidden: false,
    private: false,
  },
  {
    id: 4,
    title: "SignIn",
    path: "/signin",
    Element: <Generic/>,
    search: "?",
    hidden: true,
    private: false,
  },
  {
    id: 5,
    title: "SignUn",
    path: "/signun",
    Element: <Generic/>,
    search: "?",
    hidden: true,
    private: false,
  },
];
