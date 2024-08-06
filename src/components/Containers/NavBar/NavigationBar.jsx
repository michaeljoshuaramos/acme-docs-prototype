import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import NavItem from "./NavItem";
import Acme from "../../Icons/Logos/Acme";
import Button from "../../Common/Button";

const NavigationBar = () => {
  const navigate = useNavigate();

  return (
    <>
      <nav className="fixed z-10 flex h-[68px] w-full items-center justify-between border-b border-gray-100 bg-white/95 px-6 backdrop-blur">
        <div className="flex divide-x">
          <div className="flex items-center pr-6">
            <Acme />
            <span className="font-semibold text-black">Acme Docs</span>
          </div>
          <div className="space-x-4 pl-6">
            <NavItem path="/">Guides</NavItem>
            <NavItem path="/api-reference">API Reference</NavItem>
            <NavItem path="/changelog">Changelog</NavItem>
          </div>
        </div>
        <div>
          <Button onClick={() => navigate("/login")}>Login</Button>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default NavigationBar;
