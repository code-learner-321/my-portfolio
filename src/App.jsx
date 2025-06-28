import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Sections/Home";
import Project from "./components/Sections/Project";
import ScrollToElement from "./ScrollToElement";
import ScrollToTop from "./components/ScrollToTop";

function App() {

  return (
    <>
      <Router basename={import.meta.env.VITE_BASE_URL || '/'}>
        <ScrollToTop/>
        <ScrollToElement/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
