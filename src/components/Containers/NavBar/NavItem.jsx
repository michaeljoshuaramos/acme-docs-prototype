import React from "react";
import { Link, Outlet } from "react-router-dom";

const NavItem = ({ path, target, children }) => {
  const applyStyle = () => {
    return `cursor-pointer rounded-md px-2 py-1 transition text-[14px] font-medium leading-[16px]
          ${
            path === target
              ? "text-gray-800 bg-gray-100"
              : "text-gray-600 hover:bg-gray-100"
          }
        `;
  };

  return (
    <Link to={target} className={applyStyle()}>
      {children}
    </Link>
  );
};

export default NavItem;
