import React from "react";

const SideBar = () => {
  return (
    <div className="fixed left-0 top-[76px] z-10 h-[calc(100vh-76px)] w-full bg-white shadow-lg transition-transform lg:bg-gradient-to-r lg:from-gray-50 lg:to-white lg:top-[73px] lg:h-[calc(100vh-68px)] -translate-x-full lg:shrink-0 lg:translate-x-0 lg:shadow-none lg:w-[310px] space-y-2 overflow-x-hidden overflow-y-scroll border-r border-gray-100">
      <div className="relative">
        <div>
          <div className="px-4 py-6 pt-4">
            <div className="px-2 pb-6 lg:hidden">
              <div className="flex items-center space-x-2 pt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className=""
                  viewBox="0 0 16 16"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.333 8H2.667m0 0 4 4m-4-4 4-4"
                  ></path>
                </svg>
                <div>
                  <span className="text-[20px] tracking-tight font-medium leading-[24px] inline-block">
                    Guides
                  </span>
                </div>
              </div>
            </div>
            <div className="space-y-4 divide-y divide-gray-100">
              <div>
                <div className="px-2 pb-1 pt-3 text-left">
                  <span className="uppercase text-gray-400 text-[12px] font-medium leading-[16px] inline-block">
                    Getting Started
                  </span>
                </div>
                <span href="/documentation/payments-company">
                  <div className="cursor-pointer rounded-md px-2 py-1 text-left transition bg-gray-100 text-gray-800">
                    <span className="text-[14px] font-medium leading-[20px] inline-block">
                      What is Acme?
                    </span>
                  </div>
                </span>
                <span href="/documentation/payments-company">
                  <div className="cursor-pointer rounded-md px-2 py-1 text-left transition text-gray-800 hover:bg-gray-100">
                    <span className="text-[14px] font-medium leading-[20px] inline-block">
                      Creating and viewing documents
                    </span>
                  </div>
                </span>
                <span href="/documentation/platform-implementation">
                  <div className="cursor-pointer rounded-md px-2 py-1 text-left transition text-gray-800 hover:bg-gray-100">
                    <span className="text-[14px] font-medium leading-[20px] inline-block">
                      Saving and managing documents
                    </span>
                  </div>
                </span>
                <span href="/documentation/platform-implementation">
                  <div className="cursor-pointer rounded-md px-2 py-1 text-left transition text-gray-800 hover:bg-gray-100">
                    <span className="text-[14px] font-medium leading-[20px] inline-block">
                      Projects and collections
                    </span>
                  </div>
                </span>
                <span href="/documentation/platform-implementation">
                  <div className="cursor-pointer rounded-md px-2 py-1 text-left transition text-gray-800 hover:bg-gray-100">
                    <span className="text-[14px] font-medium leading-[20px] inline-block">
                      Single Sign-On (SSO)
                    </span>
                  </div>
                </span>
              </div>
              <div>
                <div className="px-2 pb-1 pt-3 text-left">
                  <span className="uppercase text-gray-400 text-[12px] font-medium leading-[16px] inline-block">
                    Products
                  </span>
                </div>
                <span href="/documentation/roles">
                  <div className="cursor-pointer rounded-md px-2 py-1 text-left transition text-gray-800 hover:bg-gray-100">
                    <span className="text-[14px] font-medium leading-[20px] inline-block">
                      Shift Manager
                    </span>
                  </div>
                </span>
                <span href="/documentation/transactions-transfers">
                  <div className="cursor-pointer rounded-md px-2 py-1 text-left transition text-gray-800 hover:bg-gray-100">
                    <span className="text-[14px] font-medium leading-[20px] inline-block">
                      Issue Tracker
                    </span>
                  </div>
                </span>
                <span href="/documentation/transfer-approvals">
                  <div className="cursor-pointer rounded-md px-2 py-1 text-left transition text-gray-800 hover:bg-gray-100">
                    <span className="text-[14px] font-medium leading-[20px] inline-block">
                      Project Gallery
                    </span>
                  </div>
                </span>
              </div>
              <div>
                <div className="px-2 pb-1 pt-3 text-left">
                  <span className="uppercase text-gray-400 text-[12px] font-medium leading-[16px] inline-block">
                    Collaboration
                  </span>
                </div>
                <span href="/documentation/ach">
                  <div className="cursor-pointer rounded-md px-2 py-1 text-left transition text-gray-800 hover:bg-gray-100">
                    <span className="text-[14px] font-medium leading-[20px] inline-block">
                      Real-time collaboration
                    </span>
                  </div>
                </span>
                <span href="/documentation/check-21">
                  <div className="cursor-pointer rounded-md px-2 py-1 text-left transition text-gray-800 hover:bg-gray-100">
                    <span className="text-[14px] font-medium leading-[20px] inline-block">
                      Sharing and viewing documents
                    </span>
                  </div>
                </span>
                <span href="/documentation/fedwire">
                  <div className="cursor-pointer rounded-md px-2 py-1 text-left transition text-gray-800 hover:bg-gray-100">
                    <span className="text-[14px] font-medium leading-[20px] inline-block">
                      Document permissions
                    </span>
                  </div>
                </span>
                <span href="/documentation/real-time-payments">
                  <div className="cursor-pointer rounded-md px-2 py-1 text-left transition text-gray-800 hover:bg-gray-100">
                    <span className="text-[14px] font-medium leading-[20px] inline-block">
                      Commenting in documents
                    </span>
                  </div>
                </span>
                <span href="/documentation/visa">
                  <div className="cursor-pointer rounded-md px-2 py-1 text-left transition text-gray-800 hover:bg-gray-100">
                    <span className="text-[14px] font-medium leading-[20px] inline-block">
                      Using your Workspace
                    </span>
                  </div>
                </span>
              </div>
              <div>
                <div className="px-2 pb-1 pt-3 text-left">
                  <span className="uppercase text-gray-400 text-[12px] font-medium leading-[16px] inline-block">
                    Developers
                  </span>
                </div>
                <span href="/documentation/ach-debit-funds-holds">
                  <div className="cursor-pointer rounded-md px-2 py-1 text-left transition text-gray-800 hover:bg-gray-100">
                    <span className="text-[14px] font-medium leading-[20px] inline-block">
                      ACH debit funds holds
                    </span>
                  </div>
                </span>
                <span href="/documentation/backwards-compatibility">
                  <div className="cursor-pointer rounded-md px-2 py-1 text-left transition text-gray-800 hover:bg-gray-100">
                    <span className="text-[14px] font-medium leading-[20px] inline-block">
                      Backwards compatibility
                    </span>
                  </div>
                </span>
                <span href="/documentation/data-dictionary">
                  <div className="cursor-pointer rounded-md px-2 py-1 text-left transition text-gray-800 hover:bg-gray-100">
                    <span className="text-[14px] font-medium leading-[20px] inline-block">
                      Data dictionary
                    </span>
                  </div>
                </span>
                <span href="/documentation/exports">
                  <div className="cursor-pointer rounded-md px-2 py-1 text-left transition text-gray-800 hover:bg-gray-100">
                    <span className="text-[14px] font-medium leading-[20px] inline-block">
                      Exports
                    </span>
                  </div>
                </span>
                <span href="/documentation/idempotency-keys">
                  <div className="cursor-pointer rounded-md px-2 py-1 text-left transition text-gray-800 hover:bg-gray-100">
                    <span className="text-[14px] font-medium leading-[20px] inline-block">
                      Idempotency keys
                    </span>
                  </div>
                </span>
                <span href="/documentation/oauth">
                  <div className="cursor-pointer rounded-md px-2 py-1 text-left transition text-gray-800 hover:bg-gray-100">
                    <span className="text-[14px] font-medium leading-[20px] inline-block">
                      OAuth
                    </span>
                  </div>
                </span>
                <span href="/documentation/programmatic-card-processing">
                  <div className="cursor-pointer rounded-md px-2 py-1 text-left transition text-gray-800 hover:bg-gray-100">
                    <span className="text-[14px] font-medium leading-[20px] inline-block">
                      Programmatic card processing
                    </span>
                  </div>
                </span>
                <span href="/documentation/real-time-decisions">
                  <div className="cursor-pointer rounded-md px-2 py-1 text-left transition text-gray-800 hover:bg-gray-100">
                    <span className="text-[14px] font-medium leading-[20px] inline-block">
                      Real-Time Decisions
                    </span>
                  </div>
                </span>
                <span href="/documentation/reliability">
                  <div className="cursor-pointer rounded-md px-2 py-1 text-left transition text-gray-800 hover:bg-gray-100">
                    <span className="text-[14px] font-medium leading-[20px] inline-block">
                      Reliability
                    </span>
                  </div>
                </span>
                <span href="/documentation/software-development-kits">
                  <div className="cursor-pointer rounded-md px-2 py-1 text-left transition text-gray-800 hover:bg-gray-100">
                    <span className="text-[14px] font-medium leading-[20px] inline-block">
                      Software Development Kits
                    </span>
                  </div>
                </span>
                <span href="/documentation/webhooks">
                  <div className="cursor-pointer rounded-md px-2 py-1 text-left transition text-gray-800 hover:bg-gray-100">
                    <span className="text-[14px] font-medium leading-[20px] inline-block">
                      Events and webhooks
                    </span>
                  </div>
                </span>
              </div>
              <div>
                <div className="px-2 pb-1 pt-3 text-left">
                  <span className="uppercase text-gray-400 text-[12px] font-medium leading-[16px] inline-block">
                    Custom Card Artwork
                  </span>
                </div>
                <span href="/documentation/card-art-physical-cards">
                  <div className="cursor-pointer rounded-md px-2 py-1 text-left transition text-gray-800 hover:bg-gray-100">
                    <span className="text-[14px] font-medium leading-[20px] inline-block">
                      Physical cards
                    </span>
                  </div>
                </span>
                <span href="/documentation/card-art">
                  <div className="cursor-pointer rounded-md px-2 py-1 text-left transition text-gray-800 hover:bg-gray-100">
                    <span className="text-[14px] font-medium leading-[20px] inline-block">
                      Digital wallets
                    </span>
                  </div>
                </span>
              </div>
              <div>
                <div className="px-2 pb-1 pt-3 text-left">
                  <span className="uppercase text-gray-400 text-[12px] font-medium leading-[16px] inline-block">
                    Transfer Lifecycle
                  </span>
                </div>
                <span href="/documentation/inbound-ach-transfers">
                  <div className="cursor-pointer rounded-md px-2 py-1 text-left transition text-gray-800 hover:bg-gray-100">
                    <span className="text-[14px] font-medium leading-[20px] inline-block">
                      Inbound ACH Transfers
                    </span>
                  </div>
                </span>
                <span href="/documentation/outbound-ach-transfers">
                  <div className="cursor-pointer rounded-md px-2 py-1 text-left transition text-gray-800 hover:bg-gray-100">
                    <span className="text-[14px] font-medium leading-[20px] inline-block">
                      Outbound ACH Transfers
                    </span>
                  </div>
                </span>
              </div>
              <div>
                <div className="px-2 pb-1 pt-3 text-left">
                  <span className="uppercase text-gray-400 text-[12px] font-medium leading-[16px] inline-block">
                    Protection
                  </span>
                </div>
                <span href="/documentation/extended-deposit-insurance">
                  <div className="cursor-pointer rounded-md px-2 py-1 text-left transition text-gray-800 hover:bg-gray-100">
                    <span className="text-[14px] font-medium leading-[20px] inline-block">
                      Extended deposit insurance
                    </span>
                  </div>
                </span>
              </div>
              <div>
                <div className="px-2 pb-1 pt-3 text-left">
                  <span className="uppercase text-gray-400 text-[12px] font-medium leading-[16px] inline-block">
                    Compliance
                  </span>
                </div>
                <span href="/documentation/bookkeeping">
                  <div className="cursor-pointer rounded-md px-2 py-1 text-left transition text-gray-800 hover:bg-gray-100">
                    <span className="text-[14px] font-medium leading-[20px] inline-block">
                      Bookkeeping
                    </span>
                  </div>
                </span>
                <span href="/documentation/information-security">
                  <div className="cursor-pointer rounded-md px-2 py-1 text-left transition text-gray-800 hover:bg-gray-100">
                    <span className="text-[14px] font-medium leading-[20px] inline-block">
                      Information security
                    </span>
                  </div>
                </span>
                <span href="/documentation/onboarding">
                  <div className="cursor-pointer rounded-md px-2 py-1 text-left transition text-gray-800 hover:bg-gray-100">
                    <span className="text-[14px] font-medium leading-[20px] inline-block">
                      Platform onboarding
                    </span>
                  </div>
                </span>
                <span href="/documentation/ongoing">
                  <div className="cursor-pointer rounded-md px-2 py-1 text-left transition text-gray-800 hover:bg-gray-100">
                    <span className="text-[14px] font-medium leading-[20px] inline-block">
                      Ongoing oversight
                    </span>
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
