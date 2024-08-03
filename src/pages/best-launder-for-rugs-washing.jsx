import Footer from "../components/Footer";
import ArticlePage from "../components/ArticlesPage";

import { articleTitles, articleTxt2 } from "../constants";

const articleTitles2 = articleTitles[1].title;
const txt2 = articleTxt2[1].title;


export default function Article1() {
    return (
        <>
            <ArticlePage />
            <div className="article-bg">
                <div className="article-inside flex flex-col items-center " dir="rtl">
                    <p className="article-head text-center text-[2rem] sm:text-[3rem] py-7">
                        {articleTitles2}
                    </p>
                </div>


                <div className="article-inside  flex flex-col items-center pb-20">
                    <ul className="article-txt text-right w-[22rem] sm:w-[50rem] text-[1.2rem] leading-9 tracking-[.05rem]" dir="rtl">
                        {articleTxt2.map((e, i) => (
                            <li key={e.id}>
                                {e.title}
                                <br />
                            </li>
                        ))}

                    </ul>
                </div>
                <Footer />
            </div>
        </>
    );
}