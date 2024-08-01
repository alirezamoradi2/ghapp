import { navLinks, defaultTxt, introTxt, introItem } from "../constants";
import couchPic from "../assets/couch-pic.png";

const intro = navLinks[5].title;
const introSubTitle = introTxt[1].title;
const introtxt = introTxt[2].title;
const introtxt2 = introTxt[3].title;
const lorem = defaultTxt[0].title;

const Intro = () => {
    return (
        <div className="intro flex flex-col h-[1050px] sm:h-[650px]" dir="rtl" id="intro">

            <div className="intro-title w-full flex flex-col items-center justify-center basis-1/5">
                <h4>{intro} <span>ققنوس</span></h4>
                <p>{introSubTitle}</p>
            </div>

            <div className="intro-contain w-full flex flex-col sm:flex-row justify-around items-center basis-4/5">
                <div className="intro-txt flex flex-col mt-6 sm:mt-0 ps-[40px] pe-[40px] sm:p-[0px] w-[26rem] text-[1.4rem] sm:text-[1.4rem] sm:w-[40rem]">
                    <p className="pb-5">{introtxt}</p>

                    <p>{introtxt2}</p>

                    <ul>
                        {introItem.map((e, i) => (
                            <li key={e.id}>
                                - {e.title}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="intro-img flex mt-10 sm:mt-0 ">
                    <img src={couchPic} alt="couch" className="w-[15rem] sm:w-[25rem]" />
                </div>

            </div>

        </div>
    );
}

export default Intro;