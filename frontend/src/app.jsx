import { Routes, Route } from "react-router";
import "./app.css";
import Footer from "./components/footer";
import Error404 from "./pages/error/error404";
import HomePage from "./pages/HomePage";
import MapTrain from "./pages/train/MapTrain";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/train" element={<MapTrain />} />
        <Route path="*" element={<Error404 />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
