import { externalLinks, footer } from '../constants/index';

const phoneNumber1 = externalLinks[4].title;
const phoneNumber2 = externalLinks[5].title;

const address = footer[0].title;
const workwithus = footer[1].title;
const contactus = footer[2].title;
const copyright = footer[3].title;
const designteam = footer[4].title;

const telLink = externalLinks[1].title;
const instaLink = externalLinks[2].title;
const waLink = externalLinks[6].title;

const Footer = () => {
    return (
        <div className="footer flex flex-col" id="footer" >
            <div className="upper-box w-full h-[auto] sm:pb-10 flex flex-col sm:flex-row items-center sm:items-stretch justify-evenly" dir="rtl">
                <div className="basis-1/7"></div>
                <div className="workwithus h-auto sm:basis-2/7  pb-6 sm:pb-0">
                    <p className="workwithus-head px-4 py-2">
                        همکاری با ما
                    </p>
                    <p className="workwithus-details px-4 py-2 w-[350px]">
                        {workwithus}
                    </p>
                    <div className="flex flex-row">
                        <a href={"tel:" + phoneNumber1} className="tracking-[.18em] t1 px-4 py-2">
                            09102767867
                        </a>
                        <a href={"tel:" + phoneNumber2} className="tracking-[.18em] t2 px-4 py-2">
                            09381078022
                        </a>
                    </div>
                </div>
                <div className="address flex flex-col h-auto sm:basis-2/7 pb-6 sm:pb-0">
                    <p className="address-head px-4 py-2">
                        آدرس ما
                    </p>
                    <p className="address-details px-4 py-2 w-[350px]">
                        {address}
                    </p>
                    <div class="google-map px-4 py-2">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12947.671883577355!2d51.412164238037136!3d35.77739128512113!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e07cc57dc3ced%3A0x446412893ad39510!2z2YXYqNmEINi02YjbjNuMINmC2YLZhtmI2LM!5e0!3m2!1sen!2s!4v1722361757283!5m2!1sen!2s"
                            width="250"
                            height="150"
                            frameBorder="0"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            aria-hidden="false"
                            tabIndex="0"
                        />
                    </div>
                </div>
                <div className="contactus h-auto sm:basis-2/7 pb-6 sm:pb-0">
                    <p className="contactus-head px-4 py-2 ">
                        تماس با ما
                    </p>
                    <p className="contactus-details px-4 py-2 w-[350px]">
                        {contactus}
                    </p>
                    <div className="flex flex-row">
                        <a href={"tel:" + phoneNumber1} className="tracking-[.18em] t1 px-4 py-2">
                            09102767867
                        </a>
                        <a href={"tel:" + phoneNumber2} className="tracking-[.18em] t2 px-4 py-2">
                            09381078022
                        </a>
                    </div>
                    <div className="flex flex-row">
                        <a href={instaLink} className="tracking-[.1em] px-4 py-2 t3">
                            <p>
                                Instagram
                            </p>
                        </a>
                        <a href={telLink} className="tracking-[.1em] px-4 py-2 t3">
                            <p>
                                Telegram
                            </p>
                        </a>
                        <a href={waLink} className="tracking-[.1em] px-4 py-2 t3">
                            <p>
                                Whatsapp
                            </p>
                        </a>
                    </div>
                </div>
            </div>
            <div className="lower-box w-full h-[100px] sm:h-[150px] flex justify-center items-center">
                <a href="#">
                    <p className="text-[3.5rem] tracking-[0em] sm:tracking-[3rem]">
                        GHOGHNOS
                    </p>
                </a>
            </div>
            <div className="lowest-box pb-5 sm:pb-0 h-[100px] sm:h-[80px] flex flex-col-reverse sm:flex-row justify-around sm:justify-between items-center">
                <p className="design-team sm:p-6">
                    {designteam}
                </p>
                <p className="copyright sm:p-6">
                    {copyright}
                </p>
            </div>
        </div>
    );
}

export default Footer;
