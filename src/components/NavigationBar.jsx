import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const Spacer = () => {
  return <div className="grow" />;
};

export const NavigationBar = () => {
  const [activeLink, setActiveLink] = useState("/");
  const location = useLocation();

  const applyLinkStyle = (path) => {
    return `cursor-pointer rounded-md px-2 py-1 transition text-[14px] font-medium leading-[16px]
      ${
        activeLink === path
          ? "text-gray-800 bg-gray-100"
          : "text-gray-600 hover:bg-gray-100"
      }
    `;
  };

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  return (
    <>
      <nav className="fixed z-10 w-full bg-white/95 backdrop-blur border-b border-gray-100 flex items-center px-6 h-[68px]">
        <div className="flex divide-x">
          <span className="pr-6 font-semibold text-black">Acme Docs</span>
          <div className="pl-6 space-x-4">
            <Link to="/" className={applyLinkStyle("/")}>
              Guides
            </Link>
            <Link
              to="/api-reference"
              className={applyLinkStyle("/api-reference")}
            >
              API Reference
            </Link>
            <Link to="/changelog" className={applyLinkStyle("/changelog")}>
              Changelog
            </Link>
          </div>
        </div>
        <Spacer />
        <div>
          <button className="cursor-pointer bg-gray-500 px-3 py-1 rounded-md text-white text-[14px] font-medium leading-[20px]">
            Login
          </button>
        </div>
      </nav>

      <Outlet />
    </>
  );
};
