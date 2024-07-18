import React, { useState } from "react";

const SideBar = () => {
  return (
    <div className="fixed left-0 top-[68px] h-[calc(100vh-68px)] w-[310px] z-10 bg-white font-medium px-4 py-4 border-r border-gray-100 overflow-y-scroll">
      <div className="space-y-4 divide-y divide-gray-100">
        {sidebarStructure.map((section, sectionIndex) => (
          <Section key={sectionIndex} section={section} />
        ))}
      </div>
    </div>
  );
};

export default SideBar;

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
    title: "Transactions",
    subsections: [
      {
        title: "Transactions",
        subsections: [
          { title: "Overview" },
          { title: "The Transaction object" },
          { title: "List Transactions" },
          { title: "Retrieve a Transaction" },
        ],
      },
      {
        title: "Pending Transactions",
        subsections: [
          { title: "Overview" },
          { title: "The Pending Transaction object" },
          { title: "List Pending Transactions" },
          { title: "Retrieve a Pending Transaction" },
        ],
      },
      {
        title: "Declined Transactions",
        subsections: [
          { title: "Overview" },
          { title: "The Declined Transaction object" },
          { title: "List Declined Transactions" },
          { title: "Retrieve a Declined Transaction" },
        ],
      },
    ],
  },
  {
    title: "Transfers",
    subsections: [
      {
        title: "Account Transfers",
        subsections: [
          { title: "Overview" },
          { title: "The Account Transfer object" },
          { title: "List Account Transfers" },
          { title: "Create an Account Transfer" },
          { title: "Retrieve an Account Transfer" },
          { title: "Approve an Account Transfer" },
          { title: "Cancel an Account Transfer" },
        ],
      },
      {
        title: "ACH Transfers",
        subsections: [
          { title: "Overview" },
          { title: "The ACH Transfer object" },
          { title: "List ACH Transfers" },
          { title: "Create an ACH Transfer" },
          { title: "Retrieve an ACH Transfer" },
          { title: "Approve an ACH Transfer" },
          { title: "Cancel a pending ACH Transfer" },
        ],
      },
      {
        title: "ACH Prenotifications",
        subsections: [
          { title: "Overview" },
          { title: "The ACH Prenotification object" },
          { title: "List ACH Prenotifications" },
          { title: "Create an ACH Prenotification" },
          { title: "Retrieve an ACH Prenotification" },
        ],
      },
      {
        title: "Inbound ACH Transfers",
        subsections: [
          { title: "Overview" },
          { title: "The Inbound ACH Transfer object" },
          { title: "List Inbound ACH Transfers" },
          { title: "Retrieve an Inbound ACH Transfer" },
          {
            title:
              "Create a notification of change for an Inbound ACH Transfer",
          },
          { title: "Decline an Inbound ACH Transfer" },
          { title: "Return an Inbound ACH Transfer" },
        ],
      },
      {
        title: "Wire Transfers",
        subsections: [
          { title: "Overview" },
          { title: "The Wire Transfer object" },
          { title: "List Wire Transfers" },
          { title: "Create a Wire Transfer" },
          { title: "Retrieve a Wire Transfer" },
          { title: "Approve a Wire Transfer" },
          { title: "Cancel a pending Wire Transfer" },
        ],
      },
      {
        title: "Inbound Wire Transfers",
        subsections: [
          { title: "Overview" },
          { title: "The Inbound Wire Transfer object" },
          { title: "List Inbound Wire Transfers" },
          { title: "Retrieve an Inbound Wire Transfer" },
        ],
      },
      {
        title: "Wire Drawdown Requests",
        subsections: [
          { title: "Overview" },
          { title: "The Wire Drawdown Request object" },
          { title: "List Wire Drawdown Requests" },
          { title: "Create a Wire Drawdown Request" },
          { title: "Retrieve a Wire Drawdown Request" },
        ],
      },
      {
        title: "Inbound Wire Drawdown Requests",
        subsections: [
          { title: "Overview" },
          { title: "The Inbound Wire Drawdown Request object" },
          { title: "List Inbound Wire Drawdown Requests" },
          { title: "Retrieve an Inbound Wire Drawdown Request" },
        ],
      },
      {
        title: "Check Transfers",
        subsections: [
          { title: "Overview" },
          { title: "The Check Transfer object" },
          { title: "List Check Transfers" },
          { title: "Create a Check Transfer" },
          { title: "Retrieve a Check Transfer" },
          { title: "Approve a Check Transfer" },
          { title: "Cancel a pending Check Transfer" },
          { title: "Request a stop payment on a Check Transfer" },
        ],
      },
      {
        title: "Inbound Check Deposits",
        subsections: [
          { title: "Overview" },
          { title: "The Inbound Check Deposit object" },
          { title: "List Inbound Check Deposits" },
          { title: "Retrieve an Inbound Check Deposit" },
          { title: "Decline an Inbound Check Deposit" },
          { title: "Return an Inbound Check Deposit" },
        ],
      },
      {
        title: "Real-Time Payments Transfers",
        subsections: [
          { title: "Overview" },
          { title: "The Real-Time Payments Transfer object" },
          { title: "List Real-Time Payments Transfers" },
          { title: "Create a Real-Time Payments Transfer" },
          { title: "Retrieve a Real-Time Payments Transfer" },
        ],
      },
      {
        title: "Check Desposits",
        subsections: [
          { title: "Overview" },
          { title: "The Check Deposit object" },
          { title: "List Check Deposits" },
          { title: "Create a Check Deposit" },
          { title: "Retrieve a Check Deposit" },
        ],
      },
      {
        title: "Lockboxes",
        subsections: [
          { title: "Overview" },
          { title: "The Lockbox object" },
          { title: "List Lockboxes" },
          { title: "Create a Lockbox" },
          { title: "Retrieve a Lockbox" },
          { title: "Update a Lockbox" },
        ],
      },
      {
        title: "Inbound Mail Items",
        subsections: [
          { title: "Overview" },
          { title: "The Inbound Mail Item object" },
          { title: "List Inbound Mail Items" },
          { title: "Retrieve an Inbound Mail Item" },
        ],
      },
    ],
  },
];

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
    className="transition-all rotate-90"
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
      <span className="block uppercase font-semibold text-gray-400 text-[12px] leading-[16px] px-2 py-1">
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
        className="flex items-center px-2 py-1 rounded-md hover:bg-gray-50"
        onClick={() => setIsOpen(!isOpen)}
        tabIndex="0"
        role="button"
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            setIsOpen(!isOpen);
          }
        }}
      >
        <span className="font-semibold text-gray-600 text-[14px] leading-[20px] py-1">
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
