import { navLinks } from "../constants";

import resumePic1 from "../assets/resume-pictures/1.jpg";
import resumePic2 from "../assets/resume-pictures/2.jpg";
import resumePic3 from "../assets/resume-pictures/3.jpg";
import resumePic4 from "../assets/resume-pictures/4.jpg";
import resumePic5 from "../assets/resume-pictures/5.jpg";
import resumePic6 from "../assets/resume-pictures/6.jpg";
import resumePic7 from "../assets/resume-pictures/7.jpg";
import resumePic8 from "../assets/resume-pictures/8.jpg";
import resumePic9 from "../assets/resume-pictures/9.jpg";
import resumePic10 from "../assets/resume-pictures/10.jpg";
import resumePic11 from "../assets/resume-pictures/11.jpg";
import resumePic12 from "../assets/resume-pictures/12.jpg";
import resumePic13 from "../assets/resume-pictures/13.jpg";
import resumePic14 from "../assets/resume-pictures/14.jpg";
import resumePic15 from "../assets/resume-pictures/15.jpg";
import resumePic16 from "../assets/resume-pictures/16.jpg";
import resumePic17 from "../assets/resume-pictures/17.jpg";

const resume = navLinks[3].title;

const Resume = () => {
  return (
    <div className="resume " id="resume">
      <div className="resume-title py-9 flex justify-center">
        <p className="resume-title-txt text-6xl sm:text-8xl cursor-pointer">{resume}</p>
      </div>

      <div className="slider">
        <div className="slide-track">
          <div className="slide">
            <img src={resumePic1} />
          </div>
          <div className="slide">
            <img src={resumePic2} />
          </div>
          <div className="slide">
            <img src={resumePic3} />
          </div>
          <div className="slide">
            <img src={resumePic4} />
          </div>
          <div className="slide">
            <img src={resumePic5} />
          </div>
          <div className="slide">
            <img src={resumePic6} />
          </div>
          <div className="slide">
            <img src={resumePic7} />
          </div>
          <div className="slide">
            <img src={resumePic8} />
          </div>
          <div className="slide">
            <img src={resumePic9} />
          </div>

          <div className="slide">
            <img src={resumePic10} />
          </div>
          <div className="slide">
            <img src={resumePic11} />
          </div>
          <div className="slide">
            <img src={resumePic12} />
          </div>
          <div className="slide">
            <img src={resumePic13} />
          </div>
          <div className="slide">
            <img src={resumePic14} />
          </div>
          <div className="slide">
            <img src={resumePic15} />
          </div>
          <div className="slide">
            <img src={resumePic16} />
          </div>
          <div className="slide">
            <img src={resumePic17} />
          </div>
          <div className="slide">
            <img src={resumePic1} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
