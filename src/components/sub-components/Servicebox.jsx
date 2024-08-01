/* eslint-disable react/prop-types */
import { useState } from "react";
import Modal from "./Modal";

import img from "../../assets/pic.jpg";

const Servicebox = ({ name, desc, tht, td1, td2, td3, td4, td5, td6 }) => {

  const [open, setOpen] = useState(false)

  return (
    <div className="service-box">
      <div className="content-box flex flex-col justify-around items-center ">
        <p className="service-title  basis-1/5 text-[1.7rem] pt-4">{name}</p>
        <p className="service-txt basis-2/5 text-[1.2rem] px-6 pt-2">{desc}</p>
        <div className="basis-2/5 flex justify-center items-center">
          <button className="" onClick={() => setOpen(true)}>
            لیست هزینه
          </button>
          <Modal open={open} onClose={() => setOpen(false)}  >
            <div className="pt-8 text-[1.4rem] w-[14rem] h-[15rem] flex flex-col items-center justify-center">
              <table className="border-collapse border w-[15rem]">
                <thead>
                  <tr>
                    <th className="border border-slate-200 text-slate-800">{tht}</th>
                    <th className="border border-slate-200 text-slate-800">هزار تومان</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-100 text-slate-500">{td1}</td>
                    <td className="border border-slate-100 text-slate-500">{td2}</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-100 text-slate-500">{td3}</td>
                    <td className="border border-slate-100 text-slate-500">{td4}</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-100 text-slate-500">{td5}</td>
                    <td className="border border-slate-100 text-slate-500">{td6}</td>
                  </tr>
                </tbody>
              </table>

            </div>
          </Modal>
        </div>

      </div>

    </div>
  );
}

export default Servicebox;






