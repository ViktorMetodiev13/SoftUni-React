import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Navigation } from "./components/Navigation";

function App() {
  return (
    <> 
        <Navigation />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<h1>Page Not Found 404</h1>} />
        </Routes>
    </>
  );
}

export default App;
