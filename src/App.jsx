import React from "react";
import styles from "./style";

import { Navbar, Main, Intro, Service, Resume, Article, QA, Footer } from './components/Channel';

const App = () => (
  <div className=" w-full overflow-hidden ">
    <div className={`${styles.paddingX} ${styles.flexCenter} line-break`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
    <div className={` ${styles.flexStart} line-break`}>
      <div className={`${styles.boxWidth}`}>
        <Main />
      </div>
    </div>
    <div className={`${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Intro />
        <Service />
        <Resume />
        <Article />
        <QA />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;