import React, { useState } from "react";
import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";

const ErrorSection = () => {
  const [isPossibleValuesOpen, setIsPossibleValuesOpen] = useState(false);

  const handlePossibleValuesOpen = () => {
    setIsPossibleValuesOpen((flag) => !flag);
  };

  return (
    <div className="grid grid-cols-1 items-start gap-8 py-8 lg:grid-cols-2 lg:gap-x-12 lg:py-12">
      <div className="space-y-5">
        <div>
          <span
            id="errors"
            className="article-scrollspy-child inline-block scroll-mt-[100px] text-[22px] font-medium leading-[26px] sm:text-[24px] sm:leading-[28px]"
          >
            Errors
          </span>
        </div>
        <div>
          <div className="style_styledmarkdown__1iaDD font-light">
            <p>
              The API uses standard HTTP response codes to indicate the success
              or failure of requests. Codes in the 2xx range indicate success;
              codes in the 4xx and 5xx range indicate errors. Error objects
              conform to
              <a href="https://datatracker.ietf.org/doc/html/rfc7807">
                RFC 7807
              </a>
              and can be distinguished by their
              <code node="[object Object]">type</code> attribute. Errors will
              always have the same shape.
            </p>
          </div>
        </div>
        <div className="space-y-2 divide-y divide-gray-100 pt-4 md:pt-0">
          <div>
            <span className="inline-block text-[20px] font-medium leading-[24px] tracking-tighter text-gray-500">
              Attributes
            </span>
          </div>
          <div className="divide-y divide-gray-100">
            <div className="py-3">
              <div
                className="group flex scroll-mt-[100px] flex-wrap items-center space-x-1"
                id="error.detail"
              >
                <div className="max-w-full">
                  <span className="inline-block w-full break-words text-[16px] font-medium leading-[24px] tracking-tight">
                    detail
                  </span>
                </div>
                <div>
                  <span className="inline-block text-[14px] font-medium leading-[20px] text-gray-400">
                    string
                  </span>
                </div>
                <div className="grow"></div>
                <div className="rounded-[4px] bg-blue-100 px-1 py-0 text-[12px] font-normal leading-[20px] text-blue-700">
                  Nullable
                </div>
                <div className="relative flex w-min">
                  <div className="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="cursor-pointer text-gray-300 group-hover:text-gray-600 md:text-gray-200"
                      viewBox="0 0 16 16"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.667 2.667c.62 0 .93 0 1.184.068a2 2 0 0 1 1.414 1.414c.068.254.068.564.068 1.184v6.134c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874c-.427.218-.987.218-2.108.218H5.867c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874c-.218-.428-.218-.988-.218-2.108V5.333c0-.62 0-.93.068-1.184a2 2 0 0 1 1.414-1.414c.254-.068.564-.068 1.184-.068M8 11.333v-4m-2 2h4M6.4 4h3.2c.373 0 .56 0 .703-.073a.666.666 0 0 0 .291-.291c.073-.143.073-.33.073-.703V2.4c0-.373 0-.56-.073-.703a.666.666 0 0 0-.291-.291c-.143-.073-.33-.073-.703-.073H6.4c-.373 0-.56 0-.703.073a.667.667 0 0 0-.29.291c-.074.143-.074.33-.074.703v.533c0 .374 0 .56.073.703a.667.667 0 0 0 .291.291C5.84 4 6.027 4 6.4 4Z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div>
                <span className="inline-block max-w-[550px] text-[14px] font-normal leading-[20px] text-gray-700">
                  <div className="style_styledmarkdown__1iaDD">
                    <p>Additional information about this particular error.</p>
                  </div>
                </span>
              </div>
            </div>
            <div className="py-3">
              <div
                className="group flex scroll-mt-[100px] flex-wrap items-center space-x-1"
                id="error.status"
              >
                <div className="max-w-full">
                  <span className="inline-block w-full break-words text-[16px] font-medium leading-[24px] tracking-tight">
                    status
                  </span>
                </div>
                <div>
                  <span className="inline-block text-[14px] font-medium leading-[20px] text-gray-400">
                    string
                  </span>
                </div>
                <div className="grow"></div>
                <div className="relative flex w-min">
                  <div className="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="cursor-pointer text-gray-300 group-hover:text-gray-600 md:text-gray-200"
                      viewBox="0 0 16 16"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.667 2.667c.62 0 .93 0 1.184.068a2 2 0 0 1 1.414 1.414c.068.254.068.564.068 1.184v6.134c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874c-.427.218-.987.218-2.108.218H5.867c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874c-.218-.428-.218-.988-.218-2.108V5.333c0-.62 0-.93.068-1.184a2 2 0 0 1 1.414-1.414c.254-.068.564-.068 1.184-.068M8 11.333v-4m-2 2h4M6.4 4h3.2c.373 0 .56 0 .703-.073a.666.666 0 0 0 .291-.291c.073-.143.073-.33.073-.703V2.4c0-.373 0-.56-.073-.703a.666.666 0 0 0-.291-.291c-.143-.073-.33-.073-.703-.073H6.4c-.373 0-.56 0-.703.073a.667.667 0 0 0-.29.291c-.074.143-.074.33-.074.703v.533c0 .374 0 .56.073.703a.667.667 0 0 0 .291.291C5.84 4 6.027 4 6.4 4Z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div>
                <span className="inline-block max-w-[550px] text-[14px] font-normal leading-[20px] text-gray-700">
                  <div className="style_styledmarkdown__1iaDD">
                    <p>
                      The HTTP status code of the error is also included in the
                      response body for easier debugging.
                    </p>
                  </div>
                </span>
              </div>
            </div>
            <div className="py-3">
              <div
                className="group flex scroll-mt-[100px] flex-wrap items-center space-x-1"
                id="error.title"
              >
                <div className="max-w-full">
                  <span className="inline-block w-full break-words text-[16px] font-medium leading-[24px] tracking-tight">
                    title
                  </span>
                </div>
                <div>
                  <span className="inline-block text-[14px] font-medium leading-[20px] text-gray-400">
                    string
                  </span>
                </div>
                <div className="grow"></div>
                <div className="relative flex w-min">
                  <div className="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="cursor-pointer text-gray-300 group-hover:text-gray-600 md:text-gray-200"
                      viewBox="0 0 16 16"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.667 2.667c.62 0 .93 0 1.184.068a2 2 0 0 1 1.414 1.414c.068.254.068.564.068 1.184v6.134c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874c-.427.218-.987.218-2.108.218H5.867c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874c-.218-.428-.218-.988-.218-2.108V5.333c0-.62 0-.93.068-1.184a2 2 0 0 1 1.414-1.414c.254-.068.564-.068 1.184-.068M8 11.333v-4m-2 2h4M6.4 4h3.2c.373 0 .56 0 .703-.073a.666.666 0 0 0 .291-.291c.073-.143.073-.33.073-.703V2.4c0-.373 0-.56-.073-.703a.666.666 0 0 0-.291-.291c-.143-.073-.33-.073-.703-.073H6.4c-.373 0-.56 0-.703.073a.667.667 0 0 0-.29.291c-.074.143-.074.33-.074.703v.533c0 .374 0 .56.073.703a.667.667 0 0 0 .291.291C5.84 4 6.027 4 6.4 4Z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div>
                <span className="inline-block max-w-[550px] text-[14px] font-normal leading-[20px] text-gray-700">
                  <div className="style_styledmarkdown__1iaDD">
                    <p>A human-readable string explaining the type of error.</p>
                  </div>
                </span>
              </div>
            </div>
            <div className="py-3">
              <div
                className="group flex scroll-mt-[100px] flex-wrap items-center space-x-1"
                id="error.type"
              >
                <div className="max-w-full">
                  <span className="inline-block w-full break-words text-[16px] font-medium leading-[24px] tracking-tight">
                    type
                  </span>
                </div>
                <div>
                  <span className="inline-block text-[14px] font-medium leading-[20px] text-gray-400">
                    enum
                  </span>
                </div>
                <div className="grow"></div>
                <div className="relative flex w-min">
                  <div className="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="cursor-pointer text-gray-300 group-hover:text-gray-600 md:text-gray-200"
                      viewBox="0 0 16 16"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.667 2.667c.62 0 .93 0 1.184.068a2 2 0 0 1 1.414 1.414c.068.254.068.564.068 1.184v6.134c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874c-.427.218-.987.218-2.108.218H5.867c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874c-.218-.428-.218-.988-.218-2.108V5.333c0-.62 0-.93.068-1.184a2 2 0 0 1 1.414-1.414c.254-.068.564-.068 1.184-.068M8 11.333v-4m-2 2h4M6.4 4h3.2c.373 0 .56 0 .703-.073a.666.666 0 0 0 .291-.291c.073-.143.073-.33.073-.703V2.4c0-.373 0-.56-.073-.703a.666.666 0 0 0-.291-.291c-.143-.073-.33-.073-.703-.073H6.4c-.373 0-.56 0-.703.073a.667.667 0 0 0-.29.291c-.074.143-.074.33-.074.703v.533c0 .374 0 .56.073.703a.667.667 0 0 0 .291.291C5.84 4 6.027 4 6.4 4Z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div>
                <span className="inline-block max-w-[550px] text-[14px] font-normal leading-[20px] text-gray-700">
                  <div className="style_styledmarkdown__1iaDD">
                    <p>
                      The type of error that occurred. This is a
                      machine-readable enum.
                    </p>
                  </div>
                </span>
              </div>
              <div className="pt-3">
                <div>
                  {isPossibleValuesOpen ? (
                    <PossibleValuesPanel
                      handlePossibleValuesOpen={handlePossibleValuesOpen}
                    />
                  ) : (
                    <PossibleValuesButton
                      handlePossibleValuesOpen={handlePossibleValuesOpen}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sticky top-24 w-full text-white">
        <div className="relative rounded-xl bg-gray-800 shadow-xl">
          <div className="scrollbar-hide relative overflow-hidden py-5 pl-4 font-mono text-[13px] leading-[20px]">
            <div className="relative flex">
              <div
                aria-hidden="true"
                className="mr-4 hidden w-[20px] flex-none select-none text-right text-gray-600 sm:block"
              >
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
              </div>
              <pre className="pr-6">
                <div className="language-json style_code__vt0Fy">
                  <div>
                    <span className="hljs-punctuation">&#123;</span>
                  </div>
                  <div>
                    <span className="hljs-attr">"detail"</span>
                    <span className="hljs-punctuation">:</span>{" "}
                    <span className="hljs-string">
                      "There's an insufficient balance in the account."
                    </span>
                    <span className="hljs-punctuation">,</span>
                  </div>
                  <div>
                    <span className="hljs-attr">"status"</span>
                    <span className="hljs-punctuation">:</span>{" "}
                    <span className="hljs-string">"400"</span>
                    <span className="hljs-punctuation">,</span>
                  </div>
                  <div>
                    <span className="hljs-attr">"title"</span>
                    <span className="hljs-punctuation">:</span>{" "}
                    <span className="hljs-string">
                      "The action you specified can't be performed on the object
                      in its current state."
                    </span>
                    <span className="hljs-punctuation">,</span>
                  </div>
                  <div>
                    <span className="hljs-attr">"type"</span>
                    <span className="hljs-punctuation">:</span>{" "}
                    <span className="hljs-string">
                      "invalid_operation_error"
                    </span>
                  </div>
                  <div>
                    <span className="hljs-punctuation">&#125;</span>
                  </div>
                </div>
              </pre>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 w-10 rounded-r-xl bg-gradient-to-l from-gray-800"></div>
          <div className="absolute inset-x-0 bottom-0 h-6 rounded-b-xl bg-gradient-to-t from-gray-800"></div>
        </div>
      </div>
    </div>
  );
};

const PossibleValuesPanel = ({ handlePossibleValuesOpen }) => {
  return (
    <div className="bg-gray-0 block rounded-[8px] border border-gray-200">
      <button
        className="group flex w-full items-center space-x-1 rounded-t-[8px] bg-gray-100 px-2 py-0.5 transition-colors hover:bg-gray-100"
        onClick={handlePossibleValuesOpen}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="rotate-90"
          viewBox="0 0 16 16"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m6 12 4-4-4-4"
          ></path>
        </svg>
        <div className="grow text-left">
          <span className="inline-block text-[14px] font-medium leading-[20px]">
            Possible values
          </span>
        </div>
      </button>
      <div className="divide-y divide-gray-100">
        <div className="p-2">
          <div
            className="group flex justify-between space-x-2 break-all"
            id="error.type.api_method_not_found_error"
          >
            <div className="rounded-[8px] border border-gray-100 bg-gray-100 px-1 font-mono text-[13px] leading-[16px]">
              api_method_not_found_error
            </div>
            <div className="relative flex w-min">
              <div className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="cursor-pointer text-gray-300 group-hover:text-gray-600 md:text-gray-200"
                  viewBox="0 0 16 16"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.667 2.667c.62 0 .93 0 1.184.068a2 2 0 0 1 1.414 1.414c.068.254.068.564.068 1.184v6.134c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874c-.427.218-.987.218-2.108.218H5.867c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874c-.218-.428-.218-.988-.218-2.108V5.333c0-.62 0-.93.068-1.184a2 2 0 0 1 1.414-1.414c.254-.068.564-.068 1.184-.068M8 11.333v-4m-2 2h4M6.4 4h3.2c.373 0 .56 0 .703-.073a.666.666 0 0 0 .291-.291c.073-.143.073-.33.073-.703V2.4c0-.373 0-.56-.073-.703a.666.666 0 0 0-.291-.291c-.143-.073-.33-.073-.703-.073H6.4c-.373 0-.56 0-.703.073a.667.667 0 0 0-.29.291c-.074.143-.074.33-.074.703v.533c0 .374 0 .56.073.703a.667.667 0 0 0 .291.291C5.84 4 6.027 4 6.4 4Z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div>
            <span className="inline-block text-[14px] font-normal leading-[20px] text-gray-600">
              <div className="style_styledmarkdown__1iaDD">
                <p>HTTP status 404.</p>
              </div>
            </span>
          </div>
        </div>
        <div className="p-2">
          <div
            className="group flex justify-between space-x-2 break-all"
            id="error.type.environment_mismatch_error"
          >
            <div className="rounded-[8px] border border-gray-100 bg-gray-100 px-1 font-mono text-[13px] leading-[16px]">
              environment_mismatch_error
            </div>
            <div className="relative flex w-min">
              <div className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="cursor-pointer text-gray-300 group-hover:text-gray-600 md:text-gray-200"
                  viewBox="0 0 16 16"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.667 2.667c.62 0 .93 0 1.184.068a2 2 0 0 1 1.414 1.414c.068.254.068.564.068 1.184v6.134c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874c-.427.218-.987.218-2.108.218H5.867c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874c-.218-.428-.218-.988-.218-2.108V5.333c0-.62 0-.93.068-1.184a2 2 0 0 1 1.414-1.414c.254-.068.564-.068 1.184-.068M8 11.333v-4m-2 2h4M6.4 4h3.2c.373 0 .56 0 .703-.073a.666.666 0 0 0 .291-.291c.073-.143.073-.33.073-.703V2.4c0-.373 0-.56-.073-.703a.666.666 0 0 0-.291-.291c-.143-.073-.33-.073-.703-.073H6.4c-.373 0-.56 0-.703.073a.667.667 0 0 0-.29.291c-.074.143-.074.33-.074.703v.533c0 .374 0 .56.073.703a.667.667 0 0 0 .291.291C5.84 4 6.027 4 6.4 4Z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div>
            <span className="inline-block text-[14px] font-normal leading-[20px] text-gray-600">
              <div className="style_styledmarkdown__1iaDD">
                <p>HTTP status 403.</p>
              </div>
            </span>
          </div>
        </div>
        <div className="p-2">
          <div
            className="group flex justify-between space-x-2 break-all"
            id="error.type.idempotency_key_already_used_error"
          >
            <div className="rounded-[8px] border border-gray-100 bg-gray-100 px-1 font-mono text-[13px] leading-[16px]">
              idempotency_key_already_used_error
            </div>
            <div className="relative flex w-min">
              <div className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="cursor-pointer text-gray-300 group-hover:text-gray-600 md:text-gray-200"
                  viewBox="0 0 16 16"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.667 2.667c.62 0 .93 0 1.184.068a2 2 0 0 1 1.414 1.414c.068.254.068.564.068 1.184v6.134c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874c-.427.218-.987.218-2.108.218H5.867c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874c-.218-.428-.218-.988-.218-2.108V5.333c0-.62 0-.93.068-1.184a2 2 0 0 1 1.414-1.414c.254-.068.564-.068 1.184-.068M8 11.333v-4m-2 2h4M6.4 4h3.2c.373 0 .56 0 .703-.073a.666.666 0 0 0 .291-.291c.073-.143.073-.33.073-.703V2.4c0-.373 0-.56-.073-.703a.666.666 0 0 0-.291-.291c-.143-.073-.33-.073-.703-.073H6.4c-.373 0-.56 0-.703.073a.667.667 0 0 0-.29.291c-.074.143-.074.33-.074.703v.533c0 .374 0 .56.073.703a.667.667 0 0 0 .291.291C5.84 4 6.027 4 6.4 4Z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div>
            <span className="inline-block text-[14px] font-normal leading-[20px] text-gray-600">
              <div className="style_styledmarkdown__1iaDD">
                <p>HTTP status 409.</p>
              </div>
            </span>
          </div>
        </div>
        <div className="p-2">
          <div
            className="group flex justify-between space-x-2 break-all"
            id="error.type.insufficient_permissions_error"
          >
            <div className="rounded-[8px] border border-gray-100 bg-gray-100 px-1 font-mono text-[13px] leading-[16px]">
              insufficient_permissions_error
            </div>
            <div className="relative flex w-min">
              <div className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="cursor-pointer text-gray-300 group-hover:text-gray-600 md:text-gray-200"
                  viewBox="0 0 16 16"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.667 2.667c.62 0 .93 0 1.184.068a2 2 0 0 1 1.414 1.414c.068.254.068.564.068 1.184v6.134c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874c-.427.218-.987.218-2.108.218H5.867c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874c-.218-.428-.218-.988-.218-2.108V5.333c0-.62 0-.93.068-1.184a2 2 0 0 1 1.414-1.414c.254-.068.564-.068 1.184-.068M8 11.333v-4m-2 2h4M6.4 4h3.2c.373 0 .56 0 .703-.073a.666.666 0 0 0 .291-.291c.073-.143.073-.33.073-.703V2.4c0-.373 0-.56-.073-.703a.666.666 0 0 0-.291-.291c-.143-.073-.33-.073-.703-.073H6.4c-.373 0-.56 0-.703.073a.667.667 0 0 0-.29.291c-.074.143-.074.33-.074.703v.533c0 .374 0 .56.073.703a.667.667 0 0 0 .291.291C5.84 4 6.027 4 6.4 4Z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div>
            <span className="inline-block text-[14px] font-normal leading-[20px] text-gray-600">
              <div className="style_styledmarkdown__1iaDD">
                <p>HTTP status 403.</p>
              </div>
            </span>
          </div>
        </div>
        <div className="p-2">
          <div
            className="group flex justify-between space-x-2 break-all"
            id="error.type.internal_server_error"
          >
            <div className="rounded-[8px] border border-gray-100 bg-gray-100 px-1 font-mono text-[13px] leading-[16px]">
              internal_server_error
            </div>
            <div className="relative flex w-min">
              <div className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="cursor-pointer text-gray-300 group-hover:text-gray-600 md:text-gray-200"
                  viewBox="0 0 16 16"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.667 2.667c.62 0 .93 0 1.184.068a2 2 0 0 1 1.414 1.414c.068.254.068.564.068 1.184v6.134c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874c-.427.218-.987.218-2.108.218H5.867c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874c-.218-.428-.218-.988-.218-2.108V5.333c0-.62 0-.93.068-1.184a2 2 0 0 1 1.414-1.414c.254-.068.564-.068 1.184-.068M8 11.333v-4m-2 2h4M6.4 4h3.2c.373 0 .56 0 .703-.073a.666.666 0 0 0 .291-.291c.073-.143.073-.33.073-.703V2.4c0-.373 0-.56-.073-.703a.666.666 0 0 0-.291-.291c-.143-.073-.33-.073-.703-.073H6.4c-.373 0-.56 0-.703.073a.667.667 0 0 0-.29.291c-.074.143-.074.33-.074.703v.533c0 .374 0 .56.073.703a.667.667 0 0 0 .291.291C5.84 4 6.027 4 6.4 4Z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div>
            <span className="inline-block text-[14px] font-normal leading-[20px] text-gray-600">
              <div className="style_styledmarkdown__1iaDD">
                <p>HTTP status 500.</p>
              </div>
            </span>
          </div>
        </div>
        <div className="p-2">
          <div
            className="group flex justify-between space-x-2 break-all"
            id="error.type.invalid_api_key_error"
          >
            <div className="rounded-[8px] border border-gray-100 bg-gray-100 px-1 font-mono text-[13px] leading-[16px]">
              invalid_api_key_error
            </div>
            <div className="relative flex w-min">
              <div className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="cursor-pointer text-gray-300 group-hover:text-gray-600 md:text-gray-200"
                  viewBox="0 0 16 16"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.667 2.667c.62 0 .93 0 1.184.068a2 2 0 0 1 1.414 1.414c.068.254.068.564.068 1.184v6.134c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874c-.427.218-.987.218-2.108.218H5.867c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874c-.218-.428-.218-.988-.218-2.108V5.333c0-.62 0-.93.068-1.184a2 2 0 0 1 1.414-1.414c.254-.068.564-.068 1.184-.068M8 11.333v-4m-2 2h4M6.4 4h3.2c.373 0 .56 0 .703-.073a.666.666 0 0 0 .291-.291c.073-.143.073-.33.073-.703V2.4c0-.373 0-.56-.073-.703a.666.666 0 0 0-.291-.291c-.143-.073-.33-.073-.703-.073H6.4c-.373 0-.56 0-.703.073a.667.667 0 0 0-.29.291c-.074.143-.074.33-.074.703v.533c0 .374 0 .56.073.703a.667.667 0 0 0 .291.291C5.84 4 6.027 4 6.4 4Z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div>
            <span className="inline-block text-[14px] font-normal leading-[20px] text-gray-600">
              <div className="style_styledmarkdown__1iaDD">
                <p>HTTP status 401.</p>
              </div>
            </span>
          </div>
        </div>
        <div className="p-2">
          <div
            className="group flex justify-between space-x-2 break-all"
            id="error.type.invalid_operation_error"
          >
            <div className="rounded-[8px] border border-gray-100 bg-gray-100 px-1 font-mono text-[13px] leading-[16px]">
              invalid_operation_error
            </div>
            <div className="relative flex w-min">
              <div className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="cursor-pointer text-gray-300 group-hover:text-gray-600 md:text-gray-200"
                  viewBox="0 0 16 16"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.667 2.667c.62 0 .93 0 1.184.068a2 2 0 0 1 1.414 1.414c.068.254.068.564.068 1.184v6.134c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874c-.427.218-.987.218-2.108.218H5.867c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874c-.218-.428-.218-.988-.218-2.108V5.333c0-.62 0-.93.068-1.184a2 2 0 0 1 1.414-1.414c.254-.068.564-.068 1.184-.068M8 11.333v-4m-2 2h4M6.4 4h3.2c.373 0 .56 0 .703-.073a.666.666 0 0 0 .291-.291c.073-.143.073-.33.073-.703V2.4c0-.373 0-.56-.073-.703a.666.666 0 0 0-.291-.291c-.143-.073-.33-.073-.703-.073H6.4c-.373 0-.56 0-.703.073a.667.667 0 0 0-.29.291c-.074.143-.074.33-.074.703v.533c0 .374 0 .56.073.703a.667.667 0 0 0 .291.291C5.84 4 6.027 4 6.4 4Z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div>
            <span className="inline-block text-[14px] font-normal leading-[20px] text-gray-600">
              <div className="style_styledmarkdown__1iaDD">
                <p>HTTP status 409.</p>
              </div>
            </span>
          </div>
        </div>
        <div className="p-2">
          <div
            className="group flex justify-between space-x-2 break-all"
            id="error.type.invalid_parameters_error"
          >
            <div className="rounded-[8px] border border-gray-100 bg-gray-100 px-1 font-mono text-[13px] leading-[16px]">
              invalid_parameters_error
            </div>
            <div className="relative flex w-min">
              <div className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="cursor-pointer text-gray-300 group-hover:text-gray-600 md:text-gray-200"
                  viewBox="0 0 16 16"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.667 2.667c.62 0 .93 0 1.184.068a2 2 0 0 1 1.414 1.414c.068.254.068.564.068 1.184v6.134c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874c-.427.218-.987.218-2.108.218H5.867c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874c-.218-.428-.218-.988-.218-2.108V5.333c0-.62 0-.93.068-1.184a2 2 0 0 1 1.414-1.414c.254-.068.564-.068 1.184-.068M8 11.333v-4m-2 2h4M6.4 4h3.2c.373 0 .56 0 .703-.073a.666.666 0 0 0 .291-.291c.073-.143.073-.33.073-.703V2.4c0-.373 0-.56-.073-.703a.666.666 0 0 0-.291-.291c-.143-.073-.33-.073-.703-.073H6.4c-.373 0-.56 0-.703.073a.667.667 0 0 0-.29.291c-.074.143-.074.33-.074.703v.533c0 .374 0 .56.073.703a.667.667 0 0 0 .291.291C5.84 4 6.027 4 6.4 4Z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div>
            <span className="inline-block text-[14px] font-normal leading-[20px] text-gray-600">
              <div className="style_styledmarkdown__1iaDD">
                <p>HTTP status 400.</p>
              </div>
            </span>
          </div>
        </div>
        <div className="p-2">
          <div
            className="group flex justify-between space-x-2 break-all"
            id="error.type.malformed_request_error"
          >
            <div className="rounded-[8px] border border-gray-100 bg-gray-100 px-1 font-mono text-[13px] leading-[16px]">
              malformed_request_error
            </div>
            <div className="relative flex w-min">
              <div className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="cursor-pointer text-gray-300 group-hover:text-gray-600 md:text-gray-200"
                  viewBox="0 0 16 16"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.667 2.667c.62 0 .93 0 1.184.068a2 2 0 0 1 1.414 1.414c.068.254.068.564.068 1.184v6.134c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874c-.427.218-.987.218-2.108.218H5.867c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874c-.218-.428-.218-.988-.218-2.108V5.333c0-.62 0-.93.068-1.184a2 2 0 0 1 1.414-1.414c.254-.068.564-.068 1.184-.068M8 11.333v-4m-2 2h4M6.4 4h3.2c.373 0 .56 0 .703-.073a.666.666 0 0 0 .291-.291c.073-.143.073-.33.073-.703V2.4c0-.373 0-.56-.073-.703a.666.666 0 0 0-.291-.291c-.143-.073-.33-.073-.703-.073H6.4c-.373 0-.56 0-.703.073a.667.667 0 0 0-.29.291c-.074.143-.074.33-.074.703v.533c0 .374 0 .56.073.703a.667.667 0 0 0 .291.291C5.84 4 6.027 4 6.4 4Z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div>
            <span className="inline-block text-[14px] font-normal leading-[20px] text-gray-600">
              <div className="style_styledmarkdown__1iaDD">
                <p>HTTP status 400.</p>
              </div>
            </span>
          </div>
        </div>
        <div className="p-2">
          <div
            className="group flex justify-between space-x-2 break-all"
            id="error.type.object_not_found_error"
          >
            <div className="rounded-[8px] border border-gray-100 bg-gray-100 px-1 font-mono text-[13px] leading-[16px]">
              object_not_found_error
            </div>
            <div className="relative flex w-min">
              <div className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="cursor-pointer text-gray-300 group-hover:text-gray-600 md:text-gray-200"
                  viewBox="0 0 16 16"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.667 2.667c.62 0 .93 0 1.184.068a2 2 0 0 1 1.414 1.414c.068.254.068.564.068 1.184v6.134c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874c-.427.218-.987.218-2.108.218H5.867c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874c-.218-.428-.218-.988-.218-2.108V5.333c0-.62 0-.93.068-1.184a2 2 0 0 1 1.414-1.414c.254-.068.564-.068 1.184-.068M8 11.333v-4m-2 2h4M6.4 4h3.2c.373 0 .56 0 .703-.073a.666.666 0 0 0 .291-.291c.073-.143.073-.33.073-.703V2.4c0-.373 0-.56-.073-.703a.666.666 0 0 0-.291-.291c-.143-.073-.33-.073-.703-.073H6.4c-.373 0-.56 0-.703.073a.667.667 0 0 0-.29.291c-.074.143-.074.33-.074.703v.533c0 .374 0 .56.073.703a.667.667 0 0 0 .291.291C5.84 4 6.027 4 6.4 4Z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div>
            <span className="inline-block text-[14px] font-normal leading-[20px] text-gray-600">
              <div className="style_styledmarkdown__1iaDD">
                <p>HTTP status 404.</p>
              </div>
            </span>
          </div>
        </div>
        <div className="p-2">
          <div
            className="group flex justify-between space-x-2 break-all"
            id="error.type.private_feature_error"
          >
            <div className="rounded-[8px] border border-gray-100 bg-gray-100 px-1 font-mono text-[13px] leading-[16px]">
              private_feature_error
            </div>
            <div className="relative flex w-min">
              <div className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="cursor-pointer text-gray-300 group-hover:text-gray-600 md:text-gray-200"
                  viewBox="0 0 16 16"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.667 2.667c.62 0 .93 0 1.184.068a2 2 0 0 1 1.414 1.414c.068.254.068.564.068 1.184v6.134c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874c-.427.218-.987.218-2.108.218H5.867c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874c-.218-.428-.218-.988-.218-2.108V5.333c0-.62 0-.93.068-1.184a2 2 0 0 1 1.414-1.414c.254-.068.564-.068 1.184-.068M8 11.333v-4m-2 2h4M6.4 4h3.2c.373 0 .56 0 .703-.073a.666.666 0 0 0 .291-.291c.073-.143.073-.33.073-.703V2.4c0-.373 0-.56-.073-.703a.666.666 0 0 0-.291-.291c-.143-.073-.33-.073-.703-.073H6.4c-.373 0-.56 0-.703.073a.667.667 0 0 0-.29.291c-.074.143-.074.33-.074.703v.533c0 .374 0 .56.073.703a.667.667 0 0 0 .291.291C5.84 4 6.027 4 6.4 4Z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div>
            <span className="inline-block text-[14px] font-normal leading-[20px] text-gray-600">
              <div className="style_styledmarkdown__1iaDD">
                <p>HTTP status 403.</p>
              </div>
            </span>
          </div>
        </div>
        <div className="p-2">
          <div
            className="group flex justify-between space-x-2 break-all"
            id="error.type.rate_limited_error"
          >
            <div className="rounded-[8px] border border-gray-100 bg-gray-100 px-1 font-mono text-[13px] leading-[16px]">
              rate_limited_error
            </div>
            <div className="relative flex w-min">
              <div className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="cursor-pointer text-gray-300 group-hover:text-gray-600 md:text-gray-200"
                  viewBox="0 0 16 16"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.667 2.667c.62 0 .93 0 1.184.068a2 2 0 0 1 1.414 1.414c.068.254.068.564.068 1.184v6.134c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874c-.427.218-.987.218-2.108.218H5.867c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874c-.218-.428-.218-.988-.218-2.108V5.333c0-.62 0-.93.068-1.184a2 2 0 0 1 1.414-1.414c.254-.068.564-.068 1.184-.068M8 11.333v-4m-2 2h4M6.4 4h3.2c.373 0 .56 0 .703-.073a.666.666 0 0 0 .291-.291c.073-.143.073-.33.073-.703V2.4c0-.373 0-.56-.073-.703a.666.666 0 0 0-.291-.291c-.143-.073-.33-.073-.703-.073H6.4c-.373 0-.56 0-.703.073a.667.667 0 0 0-.29.291c-.074.143-.074.33-.074.703v.533c0 .374 0 .56.073.703a.667.667 0 0 0 .291.291C5.84 4 6.027 4 6.4 4Z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div>
            <span className="inline-block text-[14px] font-normal leading-[20px] text-gray-600">
              <div className="style_styledmarkdown__1iaDD">
                <p>HTTP status 429.</p>
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const PossibleValuesButton = ({ handlePossibleValuesOpen }) => {
  return (
    <div className="bg-gray-0 inline-block overflow-hidden rounded-[8px] border border-gray-200">
      <button
        className="bg-gray-0 group flex items-center space-x-1 rounded-t-[8px] px-2 py-0.5 transition-colors hover:bg-gray-100"
        onClick={handlePossibleValuesOpen}
      >
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
            d="m6 12 4-4-4-4"
          ></path>
        </svg>
        <span className="text-[14px] leading-6">Possible values</span>
      </button>
    </div>
  );
};

const APIReference = () => {
  return (
    <>
      <SideBar />
      <div className="pt-[68px] lg:pl-[310px]">
        <div className="px-4 lg:px-12">
          <div className="divide-y">
            <div className="grid grid-cols-1 gap-8 py-8 lg:grid-cols-2">
              <div className="space-y-5">
                <div>
                  <span className="text-[32px] font-bold sm:text-[40px]">
                    API Reference
                  </span>
                </div>
                <div className="font-light">
                  <p>
                    The Increase API is organized around{" "}
                    <a href="http://en.wikipedia.org/wiki/Representational_State_Transfer">
                      REST
                    </a>
                    . It has predictable resource-oriented URLs, accepts and
                    returns JSON-encoded payloads, and uses standard HTTP
                    response codes, authentication, and verbs.
                  </p>
                  <p>&nbsp;</p>
                  <p>
                    While we're continually adding new features to the API,
                    we're committed to doing so in a way that doesn't break
                    existing integrations. You can read more in our{" "}
                    <a href="/documentation/backwards-compatibility">
                      versioning and backwards compatibility guide
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8 py-8 lg:grid-cols-2">
              <div className="space-y-5">
                <div>
                  <span
                    id="authorization-and-testing"
                    className="article-scrollspy-child scroll-mt-[100px] text-[22px] font-medium leading-[26px] sm:text-[24px] sm:leading-[28px]"
                  >
                    Authorization and Testing
                  </span>
                </div>
                <div>
                  <div className="font-light">
                    <p>
                      The API accepts{" "}
                      <a href="https://datatracker.ietf.org/doc/html/rfc6750">
                        Bearer Authentication
                      </a>
                      . When you sign up for an Increase account, we make you a
                      pair of{" "}
                      <a href="https://dashboard.increase.com/developers/api_keys">
                        API keys
                      </a>
                      : one for production and one for our sandbox environment
                      in which no real money moves. You can create and revoke
                      API keys from the{" "}
                      <a href="https://dashboard.increase.com/developers/api_keys">
                        dashboard
                      </a>{" "}
                      and should securely store them using a secret management
                      system.
                    </p>
                  </div>
                </div>
                <div>
                  <div className="font-light">
                    <p>
                      Production API requests should be to{" "}
                      <code className="font-mono text-[16px]">
                        https://api.increase.com
                      </code>{" "}
                      and sandbox requests should be to{" "}
                      <code node="[object Object]">
                        https://sandbox.increase.com
                      </code>
                      . We'll put these into environment variables to make our
                      code examples easier to follow.
                    </p>
                  </div>
                </div>
              </div>

              <div className="top-8 w-full text-white md:sticky">
                <div className="pb-2">
                  <span className="inline-block text-[14px] font-light leading-[20px] text-black">
                    In the sandbox:
                  </span>
                </div>

                <div className="pb-6">
                  <div className="relative rounded-xl bg-gray-800 shadow-xl">
                    <div className="scrollbar-hide relative overflow-auto py-5 pl-4 font-mono text-[13px] leading-[20px]">
                      <div className="relative flex">
                        <div
                          aria-hidden="true"
                          className="mr-4 hidden w-[20px] flex-none select-none text-right text-gray-600 sm:block"
                        >
                          <div>1</div>
                          <div>2</div>
                        </div>
                        <pre className="pr-6">
                          <div>
                            <div>
                              INCREASE_API_KEY=
                              <span className="hljs-string">
                                "sandbox_key_1234567890"
                              </span>
                            </div>
                            <div>
                              INCREASE_URL=
                              <span className="hljs-string">
                                "https://sandbox.increase.com"
                              </span>
                            </div>
                          </div>
                        </pre>
                      </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 w-10 rounded-r-xl bg-gradient-to-l from-gray-800"></div>
                    <div className="absolute inset-x-0 bottom-0 h-6 rounded-b-xl bg-gradient-to-t from-gray-800"></div>
                  </div>
                </div>

                <div className="pb-2">
                  <span className="inline-block text-[14px] font-light leading-[20px] text-black">
                    In production (you'll need to retrieve your API key from the
                    dashboard):
                  </span>
                </div>

                <div className="pb-6">
                  <div className="relative rounded-xl bg-gray-800 shadow-xl">
                    <div className="scrollbar-hide relative overflow-auto py-5 pl-4 font-mono text-[13px] leading-[20px]">
                      <div className="relative flex">
                        <div
                          aria-hidden="true"
                          className="mr-4 hidden w-[20px] flex-none select-none text-right text-gray-600 sm:block"
                        >
                          <div>1</div>
                          <div>2</div>
                        </div>
                        <pre className="pr-6">
                          <div className="language-curl style_code__vt0Fy">
                            <div>
                              INCREASE_API_KEY=
                              <span className="hljs-string">
                                "sandbox_key_1234567890"
                              </span>
                            </div>
                            <div>
                              INCREASE_URL=
                              <span className="hljs-string">
                                "https://api.increase.com"
                              </span>
                            </div>
                          </div>
                        </pre>
                      </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 w-10 rounded-r-xl bg-gradient-to-l from-gray-800"></div>
                    <div className="absolute inset-x-0 bottom-0 h-6 rounded-b-xl bg-gradient-to-t from-gray-800"></div>
                  </div>
                </div>

                <div className="pb-2">
                  <span className="inline-block text-[14px] font-light leading-[20px] text-black">
                    You can then make an API request like this using cURL:
                  </span>
                </div>

                <div className="pb-6">
                  <div className="relative rounded-xl bg-gray-800 shadow-xl">
                    <div className="scrollbar-hide relative overflow-auto py-5 pl-4 font-mono text-[13px] leading-[20px]">
                      <div className="relative flex">
                        <div
                          aria-hidden="true"
                          className="mr-4 hidden w-[20px] flex-none select-none text-right text-gray-600 sm:block"
                        >
                          <div>1</div>
                          <div>2</div>
                        </div>
                        <pre className="pr-6">
                          <div className="language-curl style_code__vt0Fy">
                            <span className="hljs-keyword">curl</span>
                            <span className="hljs-literal">--url</span>
                            <span className="hljs-string"></span> \
                            <span className="hljs-literal">-H</span>{" "}
                            <span className="hljs-string">
                              "Authorization: Bearer"
                            </span>
                          </div>
                        </pre>
                      </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 w-10 rounded-r-xl bg-gradient-to-l from-gray-800"></div>
                    <div className="absolute inset-x-0 bottom-0 h-6 rounded-b-xl bg-gradient-to-t from-gray-800"></div>
                  </div>
                </div>
              </div>
            </div>
            <ErrorSection />
          </div>
        </div>
      </div>

      <Outlet />
    </>
  );
};

export default APIReference;
