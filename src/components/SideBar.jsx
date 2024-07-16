import React from "react";

const Link = ({ children }) => {
  return (
    <a
      href=""
      className="block cursor-pointer rounded-md px-2 py-1 text-gray-600 hover:bg-gray-50 hover:text-gray-800"
    >
      {children}
    </a>
  );
};

const SideBar = () => {
  return (
    <div className="fixed left-0 top-[68px] h-[calc(100vh-68px)] w-[310px] z-10">
      {/* REFACTOR: Make this a resuable component*/}
      <div className="font-medium">
        <div>
          <span className="uppercase text-gray-400 text-[12px] leading-[16px]">
            Overview
          </span>
        </div>
        <div>
          <span className="text-[14px] leading-[20px]">Concepts</span>
        </div>

        {/* REFACTOR: Container for links*/}
        <div className="text-[14px] font-normal leading-[20px]">
          <Link>Transaction and Transfers</Link>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
