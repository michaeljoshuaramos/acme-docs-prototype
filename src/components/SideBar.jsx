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

// Dummy data for sidebar navigation
const sidebarStructure = [
  {
    title: "Overview",
    subsections: [
      {
        title: "API Reference",
        subsections: [
          { title: "Overview" },
          { title: "Authorization and Testing" },
          { title: "OpenAPI" },
          { title: "SDKs" },
          { title: "OAuth" },
          { title: "Requests and Responses" },
          { title: "Object Lists" },
          { title: "Errors" },
          { title: "Idempotency" },
        ],
      },
    ],
  },
  {
    title: "Accounts",
    subsections: [
      {
        title: "Accounts",
        subsections: [
          { title: "Overview" },
          { title: "The Account object" },
          { title: "List Accounts" },
          { title: "Create an Account" },
          { title: "Retrieve an Account" },
          { title: "Update an Account" },
          { title: "Retrieve an Account Balance" },
          { title: "Close an Account" },
        ],
      },
      {
        title: "Account Numbers",
        subsections: [
          { title: "Overview" },
          { title: "The Account Number object" },
          { title: "List Account Numbers" },
          { title: "Create an Account Number" },
          { title: "Retrieve an Account Number" },
          { title: "Update an Account Number" },
        ],
      },
    ],
  },
  {
    title: "Accounts",
    subsections: [
      {
        title: "Accounts",
        subsections: [
          { title: "Overview" },
          { title: "The Account object" },
          { title: "List Accounts" },
          { title: "Create an Account" },
          { title: "Retrieve an Account" },
          { title: "Update an Account" },
          { title: "Retrieve an Account Balance" },
          { title: "Close an Account" },
        ],
      },
      {
        title: "Account Numbers",
        subsections: [
          { title: "Overview" },
          { title: "The Account Number object" },
          { title: "List Account Numbers" },
          { title: "Create an Account Number" },
          { title: "Retrieve an Account Number" },
          { title: "Update an Account Number" },
        ],
      },
    ],
  },
];

const SideBar = () => {
  return (
    <div className="fixed left-0 top-[68px] h-[calc(100vh-68px)] w-[310px] z-10 bg-white font-medium px-4 py-4 overflow-y-auto">
      <div className="space-y-4 divide-y divide-gray-100">
        {sidebarStructure.map((section, sectionIndex) => (
          <div key={sectionIndex} className="pt-4">
            <span className="block uppercase text-gray-400 text-[12px] leading-[16px] px-2 py-1">
              {section.title}
            </span>

            {section.subsections.map((subsection, subsectionIndex) => (
              <>
                <span className="block text-[14px] leading-[20px] px-2 py-1">
                  {subsection.title}
                </span>
                <div className="text-[14px] font-normal leading-[20px]">
                  {subsection.subsections.map(
                    (subsubSection, subsubSectionIndex) => (
                      <Link key={subsubSectionIndex}>
                        {subsubSection.title}
                      </Link>
                    )
                  )}
                </div>
              </>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
