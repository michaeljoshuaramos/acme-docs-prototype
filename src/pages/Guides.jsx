import React from "react";
import SideBar from "../components/SideBar";
import { Link, Outlet } from "react-router-dom";

const Guides = () => {
  return (
    <>
      <SideBar />
      <div className="relative w-full pt-[68px] lg:pl-[310px] overflow-y-hidden">
        <div className="flex h-full justify-center text-gray-800">
          <div className="scrollbar-hide h-full max-w-[800px] grow overflow-y-scroll px-4 pt-4 md:px-16">
            <article className="max-w-4xl pb-20 pt-10">
              <div>
                <span
                  className="text-[28px] sm:text-[32px] font-bold leading-[30px] sm:leading-[36px] inline-block"
                  style={{ fontStretch: "normal" }}
                >
                  Documentation
                </span>
              </div>
              <div className="mt-6">
                <span className="text-[20px] font-normal leading-[26px] inline-block">
                  Anything that you can achieve with PDFs, presence, and
                  persistence in a bank branch you can do with our API. We’ve
                  always wanted a fully programmatic bank so we built one.
                </span>
              </div>
              <div className="my-8 border-t border-gray-100"></div>
              <div className="mt-6">
                <span className="text-[16px] font-normal leading-[24px] inline-block">
                  Our API faithfully exposes the data and capabilities of the
                  Federal Reserve, Visa, The Clearing House, depository
                  networks, and accounting tools. It’s lovingly boring and
                  exceptionally powerful.
                </span>
              </div>
              <div className="mt-6">
                <span className="text-[16px] font-normal leading-[24px] inline-block">
                  If you have any questions or want to get started, don’t
                  hesitate to ping us at{" "}
                  <a href="mailto:sales@increase.com">sales@increase.com</a>. We
                  can’t wait to see what you build!{" "}
                </span>
              </div>
            </article>
            <div className="grid grid-cols-2 gap-3 pb-20 sm:grid-cols-3">
              <Link to="/api-reference">
                <div className="bg-gray-0 cursor-pointer space-y-2 rounded-3xl border border-gray-200 px-4 py-6 shadow-sm transition hover:bg-whitesmoke">
                  <div className="bg-yellow relative flex h-8 w-8 grow-0 items-center justify-center rounded-full">
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
                        d="M11.333 11.333 14.667 8l-3.334-3.333m-6.666 0L1.333 8l3.334 3.333M9.333 2 6.667 14"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <div>
                      <span className="text-[16px] font-medium leading-[24px] inline-block tracking-tight">
                        API reference
                      </span>
                    </div>
                    <div>
                      <span className="text-[14px] font-normal leading-[20px] inline-block">
                        Get started with our APIs
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
              <div className="bg-gray-0 cursor-pointer space-y-2 rounded-3xl border border-gray-200 px-4 py-6 shadow-sm transition hover:bg-whitesmoke">
                <div className="bg-yellow relative flex h-8 w-8 grow-0 items-center justify-center rounded-full">
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
                      d="M7.333 2.667H5.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C2 4.187 2 4.747 2 5.867V10.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C3.52 14 4.08 14 5.2 14h4.933c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874c.218-.428.218-.988.218-2.108V8.667m-4.666 2.666h-4M10 8.667H4.667m8.747-6.081a2 2 0 1 1-2.828 2.828 2 2 0 0 1 2.828-2.828Z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <div>
                    <span className="text-[16px] font-medium leading-[24px] inline-block tracking-tight">
                      Changelog
                    </span>
                  </div>
                  <div>
                    <span className="text-[14px] font-normal leading-[20px] inline-block">
                      Track all changes
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-0 col-span-2 flex cursor-pointer items-center space-x-2 space-y-2 rounded-3xl border border-gray-200 px-4 py-6 shadow-sm transition hover:bg-whitesmoke sm:col-span-1 sm:block">
                <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-green-50/30">
                  <span className="absolute inline-flex h-3 w-3 animate-ping rounded-full bg-green-300 opacity-75"></span>
                  <span className="bg-green-400 relative inline-flex h-3 w-3 rounded-full"></span>
                </div>
                <div>
                  <div>
                    <div>
                      <span className="text-[16px] font-medium leading-[24px] inline-block tracking-tight">
                        Status
                      </span>
                    </div>
                    <div>
                      <span className="text-[14px] font-normal leading-[20px] inline-block">
                        All systems operational
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Guides;
