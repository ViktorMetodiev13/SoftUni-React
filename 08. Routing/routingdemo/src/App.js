import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Catalog from './Components/Catalog';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/catalog' element={<Catalog />} />
                </Routes>
            </header>
        </div>
    );
}

export default App;
