import React, { useState, useEffect } from "react";
import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";

const APIReference = () => {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch("../../public/data/api-reference.md")
      .then((response) => response.text())
      .then((data) => setMarkdown(data));
  }, []);

  return (
    <>
      {/* <SideBar /> */}

      <Outlet />
    </>
  );
};

export default APIReference;
