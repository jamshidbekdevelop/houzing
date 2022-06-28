import React from "react";
import Generic from "../pages/Generic";
import HomePage from "../pages/Home";
import PropertiesPage from "../pages/Properties";
import SelectedHouse from "../components/SelectedHouse";
import SignIning from "../pages/SignIn";
import Profile from "../components/Profile";
import Register from "../pages/Register";
import AddProperties from "../pages/AddPropery";
import Sitebar from "../components/Sitebar";

export const navbar = [
  {
    id: 1,
    title: "Home",
    path: "/home",
    element: <HomePage />,
    search: "?",
    hidden: false,
    private: false,
  },
  {
    id: 2,
    title: "Properties",
    path: "/properties",
    element: <PropertiesPage />,
    search: "?",
    hidden: false,
    private: false,
  },
  {
    id: 3,
    title: "Contacts",
    path: "/contacts",
    element: <Generic />,
    search: "?",
    hidden: false,
    private: false,
  },
  {
    id: 4,
    title: "Sign in",
    path: "/signin",
    element: <SignIning />,
    search: "?",
    hidden: true,
    useParams: true,
    private: false,
  },
  {
    id: 5,
    title: "Register",
    path: "/register",
    element: <Register />,
    search: "?",
    hidden: true,
    useParams: true,
    private: false,
  },
  {
    id: 6,
    title: "Myproperties",
    path: "/properties/profile",
    element: <Profile />,
    search: "?",
    useParams: true,
    hidden: true,
    private: false,
  },
  {
    id: 7,
    title: "Selected House",
    path: "/properties/:id",
    element: <SelectedHouse />,
    search: "?",
    useParams: true,
    hidden: true,
    private: false,
  },
  {
    id: 8,
    title: "Add new House",
    path: "/profile/add",
    element: <AddProperties />,
    search: "?",
    useParams: true,
    hidden: true,
    private: false,
  },
  {
    id: 9,
    title: "Add new House",
    path: "/profile/add/:id",
    element: <AddProperties />,
    search: "?",
    useParams: true,
    hidden: true,
    private: false,
  },
  {
    id: 10,
    title: "Home",
    path: "/sidebar",
    element: <Sitebar />,
    search: "?",
    useParams: false,
    hidden: true,
    private: false,
  },
];
