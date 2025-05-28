import { Routes, Route, useLocation } from "react-router";
import "./app.css";
import Footer from "./components/footer";
import Error404 from "./pages/error/error404";
import HomePage from "./pages/HomePage";
import MapTrain from "./pages/train/MapTrain";
import Project from "./pages/project/project";
import Header from "./components/header";

function App() {
  const location = useLocation();
  const showHeader = () => {
    if (location.pathname !== "/") {
      return <Header />;
    }
  };
  return (
    <>
      {showHeader()}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/train" element={<MapTrain />} />
        <Route path="/projet" element={<Project />} />
        <Route path="*" element={<Error404 />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
