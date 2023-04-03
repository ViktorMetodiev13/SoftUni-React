import './App.css';
import { Routes, Route } from "react-router-dom";
import { Home } from './components/Home';
import { About } from './components/About';
import { Catalog } from './components/Catalog';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/catalog' element={<Catalog />} />
                    <Route path='*' element={<h1>404 Page Not Found</h1>} />
                </Routes>
            </header>
        </div>
    );
}

export default App;
