//////// import 3rd party libraries
import { Routes, Route } from "react-router-dom";

/////////// import custom styling
import "./App.css";

///////////// import custom components
import Layout from "./components/Layout";
import ExtrovertResult from "./pages/ExtrovertResult";
import Home from "./pages/Home";
import IntrovertResult from "./pages/IntrovertResult";
import Page404 from "./pages/Page404";
import Questions from "./pages/Questions";

/////////// start of main functional component
function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route index element={<Home />} />
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
