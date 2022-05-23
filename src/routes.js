import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Curriculo } from "./components/curriculo";
import { Formulario } from "./components/formulario";
import { Gerenciador } from "./components/gerenciador";
import { Inicio } from "./components/inicio";
import { Navbar } from "./components/Navbar";


export default function AppRouter(){
    return(
        <Router>
            <Navbar />
            <Routes>
                <Route path='/gerenciador' element={<Gerenciador />} />
                <Route path='/formulario' element={<Formulario />} />
                <Route path='/curriculo' element={<Curriculo />} />
                <Route path='/' element={<Inicio />} />
            </Routes>
        </Router>
    )
}
