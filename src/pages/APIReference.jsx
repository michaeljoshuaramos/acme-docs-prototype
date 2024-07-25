import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

const APIReference = () => {
  const [sections, setSections] = useState(null);

  useEffect(() => {
    fetch("../../public/data/documentation.json")
      .then((response) => response.json())
      .then((data) => setSections(data.props.pageProps.schema.namespaces))
      .catch((error) => console.error("Error fetching documentation: ", error));
  }, []);

  return (
    <>
      <div className="pl-[96px] pr-[96px] pt-[68px] text-gray-800">
        {sections &&
          sections.map((section, index) => (
            <div key={index}>
              <Header section={section} />
              <div className="grid grid-cols-2 gap-8">
                <Main section={section} />
                <CodeSnippet section={section} />
              </div>
            </div>
          ))}
      </div>

      <Outlet />
    </>
  );
};

export default APIReference;

const CodeSnippet = ({ section }) => {
  return (
    <div className="sticky w-full text-white">
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
                  <span className="hljs-punctuation">z</span>
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
                  <span className="hljs-string">"invalid_operation_error"</span>
                </div>
                <div>
                  <span className="hljs-punctuation">z</span>
                </div>
              </div>
            </pre>
          </div>
        </div>
        <div className="absolute inset-y-0 right-0 w-10 rounded-r-xl bg-gradient-to-l from-gray-800"></div>
        <div className="absolute inset-x-0 bottom-0 h-6 rounded-b-xl bg-gradient-to-t from-gray-800"></div>
      </div>
    </div>
  );
};

const Header = ({ section }) => {
  if (!section) return null;

  const title = section.title;
  const description = section.documentation;

  return (
    <div className="grid grid-cols-2">
      <div>
        <span className="text-[32px] font-bold sm:text-[40px]">{title}</span>
        <p className="font-light tracking-wide">{description}</p>
      </div>
    </div>
  );
};

const Main = ({ section }) => {
  if (!section || !section.resource || !section.resource.title) return null;

  const title = section.resource.title;

  return (
    <div>
      <div>
        <span className="text-[22px] font-medium leading-[26px] sm:text-[24px] sm:leading-[28px]">
          {"The "}
          {title}
          {" object"}
        </span>
      </div>

      <div className="divide-y divide-gray-100">
        <div className="py-3">
          <span className="text-[20px] font-medium leading-[24px] text-gray-400">
            Attributes
          </span>
        </div>

        <div className="divide-y divide-gray-100">
          {section.resource.attributes &&
            section.resource.attributes.map((attribute, index) => (
              <div className="flex flex-col gap-2 py-3">
                <div className="flex">
                  <div>
                    <span className="text-[16px] font-semibold">
                      {attribute.name}
                    </span>
                    <span> </span>
                    <span className="text-[14px] font-semibold text-gray-300">
                      {attribute.kind}
                    </span>
                  </div>
                  <div className="grow"></div>
                  <div>
                    <p className="text-[14px] font-medium text-gray-300">
                      Copy
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-[14px] font-light text-gray-700">
                    {attribute.documentation}
                  </p>
                </div>
                <div>
                  <p className="text-[14px] font-light text-gray-700">
                    Possible Values
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
