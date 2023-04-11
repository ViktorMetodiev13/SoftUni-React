import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import { Header } from "./components/Header/Header";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { Home } from "./components/Home/Home";
import { CreateGame } from "./components/CreateGame/CreateGame";
import { Catalog } from "./components/Catalog/Catalog";

import * as gameService from "./services/gameService";

function App() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        gameService.getAll()
            .then(result => {
                setGames(result);
            })
    }, []);

    return (
        <div id="box">
            <Header />

            <main id="main-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/catalog" element={<Catalog games={games} />} />
                    <Route path="/create-game" element={<CreateGame />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;
