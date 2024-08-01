import { useState } from "react";
import Modal from "./Modal";

const ArticleBox = ({ imgsrc, articletit, modaltxt }) => {

    const [open, setOpen] = useState(false)

    return (
        <div className="article-box">

            <div className="art article-a w-[300px]" onClick={() => setOpen(true)}>
                <img src={imgsrc} alt="article-1 w-[300px]" />
                <h2 className="text-[1.3rem] relative text-white">
                    {articletit}
                </h2>
            </div>

            <Modal open={open} onClose={() => setOpen(false)} >
                <div className="text-center h-[500px] overflow-y-scroll w-[22rem] sm:w-[30rem] relative top-0">
                    <div className="mx-auto h-[500px] my-6 w-[20rem] sm:w-[25rem]">
                        <h2 className="text-[1.6rem] m-4 ">
                            {articletit}
                        </h2>
                        <p className="text-[1.2rem] text-gray-500 text-right leading-relaxed">
                            <ul>
                                {modaltxt.map((e, i) => (
                                    <li key={e.id}>
                                        {e.title}
                                        <br />
                                        <br />
                                    </li>
                                ))}
                                
                            </ul>
                        </p>
                    </div>

                </div>
            </Modal>
        </div>
    );
}

export default ArticleBox;