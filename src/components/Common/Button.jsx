import React from "react";

const Button = ({ onClick, children }) => {
  return (
    <button
      className="rounded-md border border-slate-300 px-3 py-1 text-[14px] font-semibold leading-[16px] text-black hover:border-slate-800 hover:bg-slate-800 hover:text-white"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
