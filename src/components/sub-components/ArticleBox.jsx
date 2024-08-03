import { useState } from "react";

const ArticleBox = ({ imgsrc, articletit, link }) => {
    return (
        <div className="article-box">
            <a href={link}>
                <div className="art article-a w-[300px]" >
                    <img src={imgsrc} alt="article-1 w-[300px]" />
                    <h2 className="text-[1.3rem] relative text-white">
                        {articletit}
                    </h2>
                </div>
            </a>
        </div>
    );
}

export default ArticleBox;