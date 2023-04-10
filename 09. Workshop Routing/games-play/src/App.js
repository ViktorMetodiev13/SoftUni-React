import { Route, Routes } from "react-router-dom";

import { Header } from "./components/Header/Header";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { Home } from "./components/Home/Home";
import { CreateGame } from "./components/CreateGame/CreateGame";
import { Catalog } from "./components/Catalog/Catalog";

function App() {
    return (
        <div id="box">
            <Header />

            <main id="main-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/catalog" element={<Catalog />} />
                    <Route path="/create-game" element={<CreateGame />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;
