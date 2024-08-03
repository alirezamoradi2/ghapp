import { useState } from "react";

import ArticleBox from "./sub-components/ArticleBox";
import Modal from "./sub-components/Modal";
import img1 from "../assets/article-img/1.jpg";
import img2 from "../assets/article-img/2.jpeg";
import img3 from "../assets/article-img/3.jpeg";
import img4 from "../assets/article-img/4.jpg";

import { navLinks, articleTitles, articleTxt1, articleTxt2, articleTxt3, articleTxt4 } from "../constants";

const link1 = '/article1';
const link2 = '/article2';
const link3 = '/article3';
const link4 = '/article4';

const article = navLinks[2].title;
const articleTitles1 = articleTitles[0].title;
const articleTitles2 = articleTitles[1].title;
const articleTitles3 = articleTitles[2].title;
const articleTitles4 = articleTitles[3].title;

const Article = () => {


    return (
        <div className="article" id="article" dir="rtl">
            <div className="article-title py-9 flex justify-center">
                <p className="article-title-txt text-6xl sm:text-8xl cursor-pointer">{article}</p>
            </div>

            <div className="article-container flex flex-col items-center sm:flex-row sm:justify-around">

                <ArticleBox imgsrc={img1} articletit={articleTitles1} link={link1} />
                <ArticleBox imgsrc={img2} articletit={articleTitles2} link={link2} />
                <ArticleBox imgsrc={img3} articletit={articleTitles3} link={link3} />
                <ArticleBox imgsrc={img4} articletit={articleTitles4} link={link4} />

            </div>
        </div>
    );
}

export default Article;