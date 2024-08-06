import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import PossibleValuesButton from "../components/Common/PossibleValuesButton";
import Markdown from "react-markdown";
import ChevronIcon from "../components/Icons/ChevronIcon";

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
  code: ({ children }) => (
    <code className="rounded-md bg-gray-100 px-1.5 py-0.5 font-mono text-[14px] text-gray-500">
      {children}
    </code>
  ),
};

const Main = () => {
  const [sections, setSections] = useState(null);

  useEffect(() => {
    fetch("/data/documentation.json")
      .then((response) => response.json())
      .then((data) => setSections(data.props.pageProps.schema.namespaces))
      .catch((error) => console.error("Error fetching documentation: ", error));
  }, []);

  return (
    <div className="pl-[320px] pt-[68px]">
      <div className="mx-auto max-w-[1500px] divide-y divide-gray-100 text-gray-800">
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
    </div>
  );
};

const Example = ({ section }) => {
  const tab = "    ";

  return (
    <div className="h-full">
      <div className="sticky top-32 text-white">
        <div className="relative rounded-2xl bg-gray-800 shadow-xl">
          <div className="scrollbar-hide relative overflow-x-hidden py-5 pl-4 font-mono text-[14px] leading-[16px]">
            <div className="flex">
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
                    <span className="hljs-attr">{tab}detail</span>
                    <span className="hljs-punctuation">:</span>{" "}
                    <span className="hljs-string">
                      "There's an insufficient balance in the account."
                    </span>
                    <span className="hljs-punctuation">,</span>
                  </div>
                  <div>
                    <span className="hljs-attr">{tab}status</span>
                    <span className="hljs-punctuation">:</span>{" "}
                    <span className="hljs-string">"400"</span>
                    <span className="hljs-punctuation">,</span>
                  </div>
                  <div>
                    <span className="hljs-attr">{tab}title</span>
                    <span className="hljs-punctuation">:</span>{" "}
                    <span className="hljs-string">
                      "The action you specified can't be performed on the object
                      in its current state."
                    </span>
                    <span className="hljs-punctuation">,</span>
                  </div>
                  <div>
                    <span className="hljs-attr">{tab}type</span>
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
          <div className="absolute inset-y-0 right-0 w-10 rounded-r-2xl bg-gradient-to-l from-gray-800"></div>
          <div className="absolute inset-x-0 bottom-0 h-6 rounded-b-2xl bg-gradient-to-t from-gray-800"></div>
        </div>
      </div>
    </div>
  );
};

const Overview = ({ children, section }) => {
  if (!section) return null;

  const id = String(section.title).toLowerCase().replace(/ /g, "-");
  const title = section.title;
  const description = section.documentation;

  return (
    <>
      <div className="xxl:py-12 grid grid-cols-2 gap-8 py-8 xl:gap-12">
        <div>
          <span
            id={id}
            className="scroll-mt-[100px] text-[32px] font-bold sm:text-[40px]"
          >
            {title}
          </span>
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
  const id = String(`the ${title} object`).toLowerCase().replace(/ /g, "-");

  return (
    <div>
      <div>
        <span
          id={id}
          className="scroll-mt-[100px] text-[22px] font-medium leading-[26px] sm:text-[24px] sm:leading-[28px]"
        >
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

const Tag = ({ type, children, className }) => {
  // Define default style and tag options
  const defaults = {
    style:
      "rounded-[5px] bg-gray-100 px-1.5 py-0.5 text-[12px] font-normal text-gray-700",
  };

  const tags = {
    nullable: {
      text: "Nullable",
      style: `${defaults.style} bg-sky-100 text-sky-700`,
    },
    required: {
      text: "Required",
      style: `${defaults.style} bg-green-100 text-green-700`,
    },
  };

  // Determine which style and text to use
  const { text, style } = type
    ? tags[type]
    : { text: children, style: `${defaults.style} ${className}` };

  return (
    <div className="px-2">
      <span className={style}>{text}</span>
    </div>
  );
};

const Attribute = ({ attribute }) => {
  return (
    <div className="flex flex-col gap-2 py-3">
      <AttributeHeader attribute={attribute} />
      <AttributeBody attribute={attribute} />
      <AttributeList attribute={attribute} />
    </div>
  );
};

const AttributeHeader = ({ attribute }) => {
  return (
    <div className="flex items-baseline">
      <div>
        <span className="text-[16px] font-semibold">{attribute.name}</span>
        <span> </span>
        <span className="text-[14px] font-semibold text-gray-300">
          {attribute.kind}
        </span>
      </div>
      <div className="grow"></div>

      {attribute.optional && <Tag type="nullable" />}

      <div>
        <p className="cursor-pointer text-[14px] font-semibold text-gray-300 hover:text-gray-500 md:text-gray-200">
          Copy
        </p>
      </div>
    </div>
  );
};

const AttributeBody = ({ attribute }) => {
  return (
    <div>
      <Markdown components={markdownComponents}>
        {attribute.documentation}
      </Markdown>
    </div>
  );
};

const AttributeList = ({ attribute }) => {
  const [displayCases, setDisplayCases] = useState(false);
  const cases = attribute.cases;

  return (
    <>
      {cases ? (
        <div className="py-1">
          {!displayCases ? (
            <PossibleValuesButton onClick={() => setDisplayCases(true)} />
          ) : (
            <PossibleValues
              values={cases}
              onClick={() => setDisplayCases(false)}
            />
          )}
        </div>
      ) : null}
    </>
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

const Method = ({ method }) => {
  if (!method) return null;

  const title = method.title;
  const parameters = method.parameters;
  const id = String(title).toLowerCase().replace(/ /g, "-");

  return (
    <div>
      <div>
        <span
          id={id}
          className="scroll-mt-[100px] text-[22px] font-medium leading-[26px] sm:text-[24px] sm:leading-[28px]"
        >
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
  return (
    <div className="flex flex-col gap-2 py-3">
      <ParameterHeader parameter={parameter} />
      <ParameterBody parameter={parameter} />
      <ParameterList parameter={parameter} />
    </div>
  );
};

const ParameterList = ({ parameter }) => {
  const [displayCases, setDisplayCases] = useState(false);
  const cases = parameter.cases;

  return (
    <>
      {cases ? (
        <div className="py-1">
          {!displayCases ? (
            <PossibleValuesButton onClick={() => setDisplayCases(true)} />
          ) : (
            <PossibleValues
              values={cases}
              onClick={() => setDisplayCases(false)}
            />
          )}
        </div>
      ) : null}
    </>
  );
};

const ParameterBody = ({ parameter }) => {
  return (
    <div>
      <Markdown components={markdownComponents}>
        {parameter.documentation}
      </Markdown>
    </div>
  );
};

const ParameterHeader = ({ parameter }) => {
  return (
    <div className="flex items-baseline">
      <div>
        <span className="text-[16px] font-semibold">{parameter.name}</span>
        <span> </span>
        <span className="text-[14px] font-semibold text-gray-300">
          {parameter.kind}
        </span>
      </div>
      <div className="grow"></div>
      {!parameter.optional && <Tag type="required" />}
      <div>
        <span className="cursor-pointer text-[14px] font-semibold text-gray-300 hover:text-gray-500 md:text-gray-200">
          Copy
        </span>
      </div>
    </div>
  );
};

const PossibleValues = ({ values, onClick }) => {
  return (
    <div className="rounded-lg border border-gray-200">
      <button
        className="flex w-full cursor-pointer items-baseline gap-1.5 rounded-t-lg bg-gray-100 px-2.5"
        onClick={onClick}
      >
        <ChevronIcon orientation="down" />

        <div className="grow text-left">
          <span className="text-[14px] font-semibold leading-7">
            Possible Values
          </span>
        </div>
      </button>
      <div className="divide-y divide-gray-100">
        {values &&
          values.map((value, index) => <Value key={index} value={value} />)}
      </div>
    </div>
  );
};

const Value = ({ value }) => {
  return (
    <div className="p-2">
      <div className="flex items-center justify-between">
        <span className="bg-gray-50 px-1 font-mono text-[14px] leading-5 text-gray-600">
          {value.name}
        </span>
        <div>
          <span className="cursor-pointer text-[14px] font-semibold text-gray-300 hover:text-gray-500 md:text-gray-200">
            Copy
          </span>
        </div>
      </div>
      <div>
        <Markdown components={markdownComponents}>
          {value.documentation}
        </Markdown>
      </div>
    </div>
  );
};
