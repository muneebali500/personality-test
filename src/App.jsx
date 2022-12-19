import { Routes, Route } from "react-router-dom";

import "./App.css";

import Layout from "./components/Layout";
import ExtrovertResult from "./pages/ExtrovertResult";
import Home from "./pages/Home";
import IntrovertResult from "./pages/IntrovertResult";
import Page404 from "./pages/Page404";
import Questions from "./pages/Questions";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/question" element={<Questions />} />
          <Route path="/introvert" element={<IntrovertResult />} />
          <Route path="/extrovert" element={<ExtrovertResult />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
