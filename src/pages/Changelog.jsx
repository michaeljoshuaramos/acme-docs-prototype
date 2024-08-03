import React from "react";
import { Outlet } from "react-router-dom";
import NavigationBar from "../components/Containers/NavBar/NavigationBar";

const Changelog = () => {
  return (
    <>
      <NavigationBar />
      <Outlet />
    </>
  );
};

export default Changelog;
