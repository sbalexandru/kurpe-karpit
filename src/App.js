import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainPage from "./page/MainPage";
import WheelPage from "./page/WheelPage";
import KarpitPage from "./page/KarpitPage";
import SofaPage from "./page/SofaPage";

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
            <Footer />
          </>
        }
      ></Route>
    </Routes>
  );
}

export default App;
