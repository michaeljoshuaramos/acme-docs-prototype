import React from "react";

const Acme = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mr-2 h-6 w-6"
    >
      <defs>
        <linearGradient id="gradient-logo" gradientTransform="rotate(0)">
          <stop
            offset="0%"
            style={{ stopColor: "rgb(203,56,91)", stopOpacity: 1 }}
          />
          <stop
            offset="50%"
            style={{ stopColor: "rgb(234,61,61)", stopOpacity: 1 }}
          />
          <stop
            offset="100%"
            style={{ stopColor: "rgb(239,110,46)", stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>
      <path
        d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"
        stroke="url(#gradient-logo)"
      />
    </svg>
  );
};

export default Acme;
