import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Portfolio from "./components/Portfolio";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route index path="/resume" element={<Portfolio />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
