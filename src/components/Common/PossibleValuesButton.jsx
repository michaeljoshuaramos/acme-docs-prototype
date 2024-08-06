import React from "react";
import ChevronIcon from "../Icons/ChevronIcon";

const PossibleValuesButton = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      <div className="flex items-baseline space-x-1 rounded-md border border-gray-200 bg-gray-50 px-2 py-0.5">
        <ChevronIcon />
        <p className="text-[14px] font-light text-gray-700">Possible Values</p>
      </div>
    </button>
  );
};

export default PossibleValuesButton;
