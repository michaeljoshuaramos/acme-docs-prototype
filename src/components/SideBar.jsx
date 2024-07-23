import React, { useState, useEffect } from "react";

const SideBar = () => {
  const [sidebarStructure, setSidebarStructure] = useState([]);

  useEffect(() => {
    fetch("../../data/sidebar.json")
      .then((response) => response.json())
      .then((data) => setSidebarStructure(data.sidebar))
      .catch((error) => console.error("Error fetching sidebar data:", error));
  }, []);

  return (
    <div className="fixed left-0 top-[68px] z-10 h-[calc(100vh-68px)] w-[320px] overflow-y-scroll border-r border-gray-100 bg-white px-4 py-4 font-medium">
      <div className="space-y-4 divide-y divide-gray-100">
        {sidebarStructure.map((section, sectionIndex) => (
          <Section key={sectionIndex} section={section} />
        ))}
      </div>
    </div>
  );
};

export default SideBar;

const rightCaret = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    className="transition-all"
    viewBox="0 0 14 14"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="m6 12 4-4-4-4"></path>
  </svg>
);

const downCaret = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    className="rotate-90 transition-all"
    viewBox="0 0 14 14"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="m6 12 4-4-4-4"></path>
  </svg>
);

const Link = ({ children }) => {
  return (
    <a className="block cursor-pointer rounded-md px-2 py-1 text-gray-600 hover:bg-gray-50 hover:text-gray-800">
      {children}
    </a>
  );
};

const Section = ({ section }) => {
  return (
    <div className="pt-4">
      <span className="block px-2 py-1 text-[12px] font-semibold uppercase leading-[16px] text-gray-400">
        {section.title}
      </span>

      {section.subsections.map((subsection, subsectionIndex) => (
        <SubSection key={subsectionIndex} subsection={subsection} />
      ))}
    </div>
  );
};

const SubSection = ({ subsection }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div
        className="flex items-center rounded-md px-2 py-1 hover:bg-gray-50"
        onClick={() => setIsOpen(!isOpen)}
        tabIndex="0"
        role="button"
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            setIsOpen(!isOpen);
          }
        }}
      >
        <span className="py-1 text-[14px] font-semibold leading-[20px] text-gray-600">
          {subsection.title}
        </span>
        <div className="flex grow" />

        {isOpen === false ? rightCaret : downCaret}
      </div>

      {isOpen && (
        <div className="text-[14px] font-normal leading-[20px]">
          {subsection.subsections.map((subsubSection, subsubSectionIndex) => (
            <Link key={subsubSectionIndex}>{subsubSection.title}</Link>
          ))}
        </div>
      )}
    </div>
  );
};
