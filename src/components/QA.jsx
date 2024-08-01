import React, { useState } from "react";

import { navLinks, defaultTxt, QAHeaders, QAText } from "../constants";

const faq = navLinks[1].title;
const lorem = defaultTxt[0].title;

const QAHeaders1 = QAHeaders[0].title;
const QAHeaders2 = QAHeaders[1].title;
const QAHeaders3 = QAHeaders[2].title;
const QAHeaders4 = QAHeaders[3].title;
const QAHeaders5 = QAHeaders[4].title;
const QAHeaders6 = QAHeaders[5].title;

const QATxt1 = QAText[0].title;
const QATxt2 = QAText[1].title;
const QATxt3 = QAText[2].title;
const QATxt4 = QAText[3].title;
const QATxt5 = QAText[4].title;
const QATxt6 = QAText[5].title;


const QA = () => {
  return (
    <section className="relative z-20 pb-12 pt-20 lg:pb-[90px] lg:pt-[120px]" id="faq">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto text-center mb-20">
              <p className="text-6xl sm:text-8xl cursor-pointer headfaq">
                {faq}
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap ">
          <div className="w-full px-4 lg:w-1/2 ">
            <QAItem
              header={QAHeaders1}
              text={QATxt1}
            />
            <QAItem
              header={QAHeaders2}
              text={QATxt2}
            />
            <QAItem
              header={QAHeaders3}
              text={QATxt3}
            />
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <QAItem
              header={QAHeaders4}
              text={QATxt4}
            />
            <QAItem
              header={QAHeaders5}
              text={QATxt5}
            />
            <QAItem
              header={QAHeaders6}
              text={QATxt6}
            />

          </div>
        </div>
      </div>
    </section>
  );
};

export default QA;

const QAItem = ({ header, text }) => {
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    event.preventDefault();
    setActive(!active);
  };
  return (
    <div className="mb-8 w-full rounded-lg bg-white p-4 shadow-[0px_20px_95px_0px_rgba(201,203,204,0.30)] sm:p-8 lg:px-6 xl:px-8" >
      <button
        className={`faq-btn flex w-full text-right`}
        onClick={() => handleToggle()}
      >
        <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary/5 text-primary dark:bg-white/5">
          <svg
            className={`fill-primary stroke-primary duration-200 ease-in-out ${active ? "rotate-180" : ""
              }`}
            width="17"
            height="10"
            viewBox="0 0 17 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
              fill=""
              stroke=""
            />
          </svg>
        </div>

        <div className="w-full">
          <h4 className="mt-1 text-lg">
            {header}
          </h4>
        </div>
      </button>

      <div
        className={`pl-[62px] duration-200 ease-in-out ${active ? "block" : "hidden"
          }`}
      >
        <p className="py-3 text-base leading-relaxed text-body-color text-right" dir="rtl">
          {text}
        </p>
      </div>
    </div>
  );
};