import React from "react";
import styles from "./style";
import { Routes, Route } from "react-router-dom";

import MainLayout from "./Layout/MainLayout";
import Article1 from "./pages/benefits-of-washing-rugs-in-location";
import Article2 from "./pages/best-launder-for-rugs-washing";
import Article3 from "./pages/why-we-should-washing-our-sofas";
import Article4 from "./pages/best-rug-washing-in-tehran";


const App = () => (
  <>
    <Routes>
      <Route path="/" element={<MainLayout />} />
      <Route path="/article1" element={<Article1 />} />
      <Route path="/article2" element={<Article2 />} />
      <Route path="/article3" element={<Article3 />} />
      <Route path="/article4" element={<Article4 />} />
    </Routes>
  </>
);





export default App;


