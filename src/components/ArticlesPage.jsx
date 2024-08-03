import styles from "../style";

import NavbarArticles from "../components/NavbarArticles";


const ArticlePage = () => {
    return (
        <div>
            <div className={`${styles.paddingX} ${styles.flexCenter} line-break`}>
                <NavbarArticles />
            </div>
        </div>
    );
}

export default ArticlePage;