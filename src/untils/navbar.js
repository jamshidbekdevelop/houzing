import React from "react";
import Generic from "../pages/Generic";
import HomePage from "../pages/Home";
import PropertiesPage from "../pages/Properties";
import SelectedHouse from '../components/SelectedHouse'
import SignIning from "../pages/SignIn";

export const navbar = [
  {
      id: 1,
      title: 'Home',
      path: '/home',
      element: <HomePage />,
      search: '?',
      hidden: false,
      private: false,
  },
  {
      id: 2,
      title: 'Properties',
      path: '/properties',
      element: <PropertiesPage />,
      search: '?',
      hidden: false,
      private: false,
  },
  {
      id: 3,
      title: 'Contacts',
      path: '/contacts',
      element: <Generic />,
      search: '?',
      hidden: false,
      private: false,
  },
  {
      id: 4,
      title: 'Sign in',
      path: '/signin',
      element: <SignIning/>,
      search: '?',
      hidden: true,
      useParams: true,
      private: false,
  },
  {
      id: 5,
      title: 'Register',
      path: '/register',
      element: <Generic />,
      search: '?',
      hidden: true,
      useParams: true,
      private: false,
  },
  {
      id: 6,
      title: 'Favourite',
      path: '/favourite',
      element: <Generic />,
      search: '?',
      hidden: true,
      private: false,
  },
  {
      id: 7,
      title: 'Selected House',
      path: '/properties/:id',
      element: <SelectedHouse />,
      search: '?',
      useParams: true,
      hidden: true,
      private: false,
  },
];
