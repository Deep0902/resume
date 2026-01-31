import Lenis from "lenis";
import { useEffect } from "react";
import "./App.css";
import Portfolio from "./components/Portfolio";

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
    // <Router>
    //   <Routes>
    //     <Route index path="/" element={<Portfolio />} />
    //   </Routes>
    // </Router>
    <Portfolio />
  );
}

export default App;
