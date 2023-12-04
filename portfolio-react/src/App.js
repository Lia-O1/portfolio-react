import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./views/Home";
import About from "./views/About";
import Contact from "./views/Contact";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<About />} />
          <Route path="/reservations" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
