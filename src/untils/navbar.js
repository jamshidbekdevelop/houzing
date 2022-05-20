import React from "react";
import Generic from "../components/Generic";

export const navbar = [
  {
    id: 1,
    title: "Home",
    path: "/home",
    Element: Generic,
    search: "?",
    hidden: false,
    private: false,
  },
  {
    id: 2,
    title: "Properties",
    path: "/properties",
    Element: Generic,
    search: "?",
    hidden: false,
    private: false,
  },
  {
    id: 3,
    title: "Contacts",
    path: "/contacts",
    Element: Generic,
    search: "?",
    hidden: false,
    private: false,
  },
  {
    id: 4,
    title: "SignIn",
    path: "/signin",
    Element: Generic,
    search: "?",
    hidden: true,
    private: false,
  },
  {
    id: 5,
    title: "SignUn",
    path: "/signun",
    Element: Generic,
    search: "?",
    hidden: true,
    private: false,
  },
];
