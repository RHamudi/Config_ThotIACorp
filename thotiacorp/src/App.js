import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/pages/Navbar/Navbar";
import Home from "./components/pages/Home/Home";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    </Router>
    
  );
}

export default App;
