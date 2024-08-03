import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import NavItem from "./NavItem";

const NavigationBar = () => {
  const location = useLocation();

  return (
    <>
      <nav className="fixed z-10 flex h-[68px] w-full items-center justify-between border-b border-gray-100 bg-white/95 px-6 backdrop-blur">
        <div className="flex divide-x">
          <span className="pr-6 font-semibold text-black">Acme Docs</span>
          <div className="space-x-4 pl-6">
            <NavItem path={location.pathname} target="/">
              Guides
            </NavItem>
            <NavItem path={location.pathname} target="/api-reference">
              API Reference
            </NavItem>
            <NavItem path={location.pathname} target="/changelog">
              Changelog
            </NavItem>
          </div>
        </div>
        <div>
          <button className="cursor-pointer rounded-md bg-gray-500 px-3 py-1 text-[14px] font-medium leading-[20px] text-white">
            Login
          </button>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default NavigationBar;
