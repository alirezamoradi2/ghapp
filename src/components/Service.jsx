import { navLinks, defaultTxt, serviceTxt, serviceTitle, price, tht } from "../constants";
import Servicebox from "./sub-components/Servicebox";

const service = navLinks[4].title;

const serviceTxt1 = serviceTxt[0].title;
const serviceTxt2 = serviceTxt[1].title;
const serviceTxt3 = serviceTxt[2].title;
const serviceTxt4 = serviceTxt[3].title;

const serviceTitle1 = serviceTitle[0].title;
const serviceTitle2 = serviceTitle[1].title;
const serviceTitle3 = serviceTitle[2].title;
const serviceTitle4 = serviceTitle[3].title;

const tht1 = tht[0].title;
const tht2 = tht[1].title;

let arr1 = [];
let arr2 = [];
for (let i = 0; i < price.length; i++) {
  const element = price[i].title;
  const element2 = price[i].price;
  arr1.push(element);
  arr2.push(element2);
}



const Service = () => {
  return (
    <div className="w-full sbg flex flex-col service" id="service">

      <div className="service-title pt-14 flex justify-center">
        <p className="service-title-txt text-6xl sm:text-8xl cursor-pointer">
          {service}
        </p>
      </div>
      <div dir="rtl" className="flex flex-col justify-center items-center mb-12 md:flex-row md:justify-around mt-12">
        <Servicebox name={serviceTitle1} desc={serviceTxt1} tht={tht1} td1={arr1[0]} td2={arr2[0]} td3={arr1[1]} td4={arr2[1]} td5={arr1[2]} td6={arr2[2]} />
        <Servicebox name={serviceTitle2} desc={serviceTxt2} tht={tht2} td1={arr1[3]} td2={arr2[3]} td3={arr1[4]} td4={arr2[4]} td5={arr1[5]} td6={arr2[5]} />
        <Servicebox name={serviceTitle3} desc={serviceTxt3} tht={tht2} td1={arr1[6]} td2={arr2[6]} td3={arr1[7]} td4={arr2[7]} td5={arr1[8]} td6={arr2[8]} />
        <Servicebox name={serviceTitle4} desc={serviceTxt4} tht={tht1} td1={arr1[9]} td2={arr2[9]} td3={arr1[10]} td4={arr2[10]} td5={arr1[11]} td6={arr2[11]} />
      </div>
    </div>
  );
};

export default Service;