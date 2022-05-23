import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css"

export const Navbar = () => {

    const navigate = useNavigate();
    
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
        <a className="navbar-brand" href="#!" onClick={() => navigate("/")}>
            Ilegra Currículos
        </a>

        <button 
        className="navbar-toggler btn btn-outline-secondary my-2 my-sm-0 ms-3 text-white" 
        onClick={() => navigate("/")}
        data-bs-toggle="collapse"
        data-bs-target="#navbarColor01"
        aria-controls="navbarColor01"
        aria-expanded="true"
        aria-label="Toggle navigation"
        >Início</button>

        <button 
        className="navbar-toggler btn btn-outline-secondary my-2 my-sm-0 text-white" 
        onClick={() => navigate("/formulario")}
        data-bs-toggle="collapse"
        data-bs-target="#navbarColor01"
        aria-controls="navbarColor01"
        aria-expanded="true"
        aria-label="Toggle navigation"
        >Cadastro</button>

        <button 
        className="navbar-toggler btn btn-outline-secondary my-2 my-sm-0 text-white" 
        onClick={() => navigate("/gerenciador")}
        data-bs-toggle="collapse"
        data-bs-target="#navbarColor01"
        aria-controls="navbarColor01"
        aria-expanded="true"
        aria-label="Toggle navigation"
        >Gerencie</button>

<div className="collapse navbar-collapse" id="navbarColor01">
<ul className="navbar-nav me-auto">
            </ul>
            <button 
            className="btn btn-outline-secondary my-2 my-sm-0 ms-3" 
            onClick={() => navigate("/")}
            >Início</button>

            
            <button 
            className="btn btn-outline-secondary my-2 my-sm-0" 
            onClick={() => navigate("/formulario")}
            >Cadastre</button>

            <button 
            className="btn btn-outline-secondary my-2 my-sm-0" 
            onClick={() => navigate("/gerenciador")}
            >Gerencie</button>
    
    </div>
    </div>
    </nav>
    )
}