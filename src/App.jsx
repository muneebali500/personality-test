import "./App.css";

import Layout from "./components/Layout";
import ExtrovertResult from "./pages/ExtrovertResult";
import Home from "./pages/Home";
import IntrovertResult from "./pages/IntrovertResult";
import Questions from "./pages/Questions";

function App() {
  return (
    <>
      <Layout>
        <Home />
        {/* <Questions /> */}
        {/* <IntrovertResult /> */}
        {/* <ExtrovertResult /> */}
      </Layout>
    </>
  );
}

export default App;
