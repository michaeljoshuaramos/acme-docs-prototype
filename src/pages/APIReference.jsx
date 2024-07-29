import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import PossibleValuesButton from "../components/PossibleValuesButton";
import Markdown from "react-markdown";

const APIReference = ({ navigation }) => {
  return (
    <>
      {navigation}

      <Main />

      <Outlet />
    </>
  );
};

export default APIReference;

const markdownComponents = {
  a: ({ href, children }) => (
    <a
      href={href}
      className="border-b border-gray-400 transition-all hover:bg-yellow"
    >
      {children}
    </a>
  ),
  p: ({ children }) => (
    <p className="text-[14px] font-light text-gray-700">{children}</p>
  ),
};

const Main = () => {
  const [sections, setSections] = useState(null);

  useEffect(() => {
    fetch("../../public/data/documentation.json")
      .then((response) => response.json())
      .then((data) => setSections(data.props.pageProps.schema.namespaces))
      .catch((error) => console.error("Error fetching documentation: ", error));
  }, []);

  return (
    <div className="divide-y divide-gray-100 pl-[320px] pt-[68px] text-gray-800">
      {sections &&
        sections.map((section, index) => (
          <div key={index} className="px-8 sm:px-16">
            <Overview section={section}>
              <Resource section={section} />
              <Example section={section} />
            </Overview>

            <Methods methods={section.methods} />
          </div>
        ))}
    </div>
  );
};

const Example = ({ section }) => {
  return (
    <div className="h-full">
      <div className="sticky top-32 text-white">
        <div className="relative rounded-2xl bg-gray-800 shadow-xl">
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
                    <span className="hljs-string">
                      "invalid_operation_error"
                    </span>
                  </div>
                  <div>
                    <span className="hljs-punctuation">z</span>
                  </div>
                </div>
              </pre>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 w-10 rounded-r-2xl bg-gradient-to-l from-gray-800"></div>
          <div className="absolute inset-x-0 bottom-0 h-6 rounded-b-2xl bg-gradient-to-t from-gray-800"></div>
        </div>
      </div>
    </div>
  );
};

const Overview = ({ children, section }) => {
  if (!section) return null;

  const title = section.title;
  const description = section.documentation;

  return (
    <>
      <div className="xxl:py-12 grid grid-cols-2 gap-8 py-8 xl:gap-12">
        <div>
          <span className="text-[32px] font-bold sm:text-[40px]">{title}</span>
          <p className="font-light tracking-wide">{description}</p>
        </div>
      </div>

      <div className="xxl:py-12 grid grid-cols-2 gap-8 py-8 xl:gap-12">
        {children}
      </div>
    </>
  );
};

const Resource = ({ section }) => {
  if (!section || !section.resource || !section.resource.title) return null;

  const resource = section.resource;
  const title = resource.title;

  return (
    <div>
      <div>
        <span className="text-[22px] font-medium leading-[26px] sm:text-[24px] sm:leading-[28px]">
          {"The "}
          {title}
          {" object"}
        </span>
      </div>

      <Attributes resource={resource} />
    </div>
  );
};

const Attributes = ({ resource }) => {
  return (
    <div className="divide-y divide-gray-100">
      <div className="py-3">
        <span className="text-[20px] font-medium leading-[24px] text-gray-400">
          Attributes
        </span>
      </div>

      <div className="divide-y divide-gray-100">
        {resource.attributes &&
          resource.attributes.map((attribute, index) => (
            <Attribute key={index} attribute={attribute} />
          ))}
      </div>
    </div>
  );
};

const Tag = ({ type }) => {
  let tag;

  switch (type) {
    case "nullable":
      tag = (
        <div className="px-2">
          <span className="rounded-[4px] bg-blue-100 px-1.5 py-0.5 text-[12px] font-normal text-blue-700">
            Nullable
          </span>
        </div>
      );
      break;

    case "required":
      tag = (
        <div className="px-2">
          <span className="rounded-[4px] bg-green-100 px-1.5 py-0.5 text-[12px] font-normal text-green-700">
            Required
          </span>
        </div>
      );
      break;

    default:
      tag = null;
  }

  return tag;
};

const Attribute = ({ attribute }) => {
  const [areCasesDisplayed, setAreCasesDisplayed] = useState(false);
  const hasCases = attribute.cases !== undefined;

  return (
    <div className="flex flex-col gap-2 py-3">
      <div className="flex items-baseline">
        <div>
          <span className="text-[16px] font-semibold">{attribute.name}</span>
          <span> </span>
          <span className="text-[14px] font-semibold text-gray-300">
            {attribute.kind}
          </span>
        </div>
        <div className="grow"></div>

        {attribute.optional && <Tag type={"nullable"} />}

        <div>
          <p className="cursor-pointer text-[14px] font-semibold text-gray-300 hover:text-gray-500 md:text-gray-200">
            Copy
          </p>
        </div>
      </div>
      <div>
        <Markdown components={markdownComponents}>
          {attribute.documentation}
        </Markdown>
      </div>
      <div>
        {hasCases ? (
          !areCasesDisplayed ? (
            <PossibleValuesButton
              showValues={() => setAreCasesDisplayed(true)}
            />
          ) : (
            <button onClick={() => setAreCasesDisplayed(false)}>
              Hide Cases
            </button>
          )
        ) : null}
      </div>
    </div>
  );
};

const Method = ({ method }) => {
  if (!method) return null;

  const title = method.title;
  const parameters = method.parameters;

  return (
    <div>
      <div>
        <span className="text-[22px] font-medium leading-[26px] sm:text-[24px] sm:leading-[28px]">
          {title}
        </span>
      </div>

      <Parameters parameters={parameters} />
    </div>
  );
};

const Parameters = ({ parameters }) => {
  return (
    <div className="divide-y divide-gray-100">
      <div className="py-3">
        <span className="text-[20px] font-medium leading-[24px] text-gray-400">
          Parameters
        </span>
      </div>
      <div className="divide-y divide-gray-100">
        {parameters &&
          parameters.map((parameter, index) => (
            <Parameter key={index} parameter={parameter} />
          ))}
      </div>
    </div>
  );
};

const Parameter = ({ parameter }) => {
  const [areCasesDisplayed, setAreCasesDisplayed] = useState(false);
  const hasCases = parameter.cases !== undefined;

  return (
    <div className="flex flex-col gap-2 py-3">
      <div className="flex items-baseline">
        <div>
          <span className="text-[16px] font-semibold">{parameter.name}</span>
          <span> </span>
          <span className="text-[14px] font-semibold text-gray-300">
            {parameter.kind}
          </span>
        </div>
        <div className="grow"></div>
        {!parameter.optional && <Tag type={"required"} />}
        <div>
          <p className="cursor-pointer text-[14px] font-semibold text-gray-300 hover:text-gray-500 md:text-gray-200">
            Copy
          </p>
        </div>
      </div>
      <div>
        <Markdown components={markdownComponents}>
          {parameter.documentation}
        </Markdown>
      </div>
      <div>
        {hasCases ? (
          !areCasesDisplayed ? (
            <PossibleValuesButton
              showValues={() => setAreCasesDisplayed(true)}
            />
          ) : (
            <button onClick={() => setAreCasesDisplayed(false)}>
              Hide Cases
            </button>
          )
        ) : null}
      </div>
    </div>
  );
};

const Methods = ({ methods }) => {
  return (
    <>
      {methods &&
        methods.map((method, index) => (
          <div
            key={index}
            className="xxl:py-12 grid grid-cols-2 gap-8 py-8 xl:gap-12"
          >
            <Method method={method} />
          </div>
        ))}
    </>
  );
};
