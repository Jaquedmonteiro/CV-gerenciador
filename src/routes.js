import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Gerenciador } from "./components/gerenciador";
import { Inicio } from "./components/inicio";
import { Navbar } from "./components/Navbar";


export default function AppRouter(){
    return(
        <Router>
            <Navbar />
            <Routes>
                <Route path='/gerenciador' element={<Gerenciador />} />
                <Route path='/' element={<Inicio />} />
            </Routes>
        </Router>
    )
}
