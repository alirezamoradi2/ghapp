import Footer from "../components/Footer";
import ArticlePage from "../components/ArticlesPage";

import { articleTitles, articleTxt1 } from "../constants";

const articleTitles1 = articleTitles[0].title;
const txt1 = articleTxt1[0].title;

console.log(typeof txt1)

export default function Article1() {
    return (
        <>
            <ArticlePage />
            <div className="article-bg">
                <div className="article-inside  flex flex-col items-center " dir="rtl">
                    <p className="article-head text-center text-[2rem] sm:text-[3rem] py-7">
                        {articleTitles1}
                    </p>
                </div>


                <div className="article-inside  flex flex-col items-center pb-20">
                    <ul className="article-txt text-right w-[22rem] sm:w-[50rem] text-[1.2rem] leading-9 tracking-[.05rem]" dir="rtl">
                        {articleTxt1.map((e, i) => (
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