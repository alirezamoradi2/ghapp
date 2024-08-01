import { externalLinks } from '../constants/index';
import tel from "../assets/icons8-telegram.svg";
import wa from "../assets/icons8-whatsapp.svg";
import ea from "../assets/icons8-eitaa.png"


const phoneNumber1 = externalLinks[4].title;
const phoneNumber2 = externalLinks[5].title;
const waLink = externalLinks[6].title;
const waLink2 = externalLinks[7].title;
const telpv = externalLinks[8].title;
const eitaa = externalLinks[9].title;


const Main = () => {
  return (
    <section className="main w-full h-[79.4vh] ">
      <div className="flex flex-col justify-center items-center h-screen ">
        <div className="w-full flex justify-center items-center head1-con">
          <h1 className="head1 text-5xl sm:text-8xl">مبل شویی ققنوس</h1>
        </div>
        <div className="w-full flex justify-center items-center head2-con">
          <h2 className="head2 sm:max-w-full sm:text-2xl text-white mt-2 sm:mt-5">
            خدمات مبل شویی و موکت شویی در محل ققنوس با بهترین کیفیت در سراسر
            تهران
          </h2>
        </div>
        <div className="flex justify-center items-center line sm:w-[500px] sm:my-10"></div>
        <div className="w-full flex flex-col justify-center items-center numbers">
          <div className="flex justify-center items-center number-1 num">
            <a href={"tel:" + phoneNumber1} className="flex flex-row">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-white"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-white">{phoneNumber1}</span>
            </a>
          </div>
          <div className="flex justify-center items-center number-2 num">
            <a href={"tel:" + phoneNumber2} className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-white"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-white">{phoneNumber2}</span>
            </a>
          </div>

          <div className="flex flex-row justify-center items-center">
           
            <div className="flex justify-center items-center num sc">
              <a href={eitaa} className="flex">
                <img src={ea} alt="eitaa" />
              </a>
            </div>

            <div className="flex justify-center items-center num sc">
              <a href={telpv} className="flex">
                <img src={tel} alt="Telegram" />
              </a>
            </div>

            <div className="flex justify-center items-center num sc">
              <a href={waLink2} className="flex">
                <img src={wa} alt="Whatsapp2" />
              </a>
            </div>

            <div className="flex justify-center items-center num sc">
              <a href={waLink} className="flex">
                <img src={wa} alt="Whatsapp1" />
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;