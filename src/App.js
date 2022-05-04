import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainPage from "./page/MainPage";
import { WheelPage, SofaPage, KarpitPage } from "./page/Pages";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        exact
        element={
          <>
            <Header />
            <MainPage />
            <ScrollToTop />
            <Footer />
          </>
        }
      ></Route>
      <Route
        path="/WheelPage"
        element={
          <>
            <Header />
            <WheelPage />
            <ScrollToTop />
            <Footer />
          </>
        }
      ></Route>
      <Route
        path="/KarpitPage"
        element={
          <>
            <Header />
            <KarpitPage />
            <ScrollToTop />
            <Footer />
          </>
        }
      ></Route>
      <Route
        path="/SofaPage"
        element={
          <>
            <Header />
            <SofaPage />
            <ScrollToTop />
            <Footer />
          </>
        }
      ></Route>
    </Routes>
  );
}

export default App;
