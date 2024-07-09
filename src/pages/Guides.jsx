import React from "react";
import { NavigationBar } from "../components/NavigationBar";
import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";

export const Guides = () => {
  return (
    <>
      <SideBar />

      <Outlet />
    </>
  );
};
