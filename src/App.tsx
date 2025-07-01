import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Portfolio from "./components/Portfolio";
import Lenis from "lenis";
import { useEffect } from "react";

function App() {
  useEffect(() => {
  const lenis = new Lenis();
  function raf(time: any) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
}, []);
  return (
    <Router>
      <Routes>
        <Route index path="/Resume" element={<Portfolio />} />
      </Routes>
    </Router>
  );
}

export default App;
