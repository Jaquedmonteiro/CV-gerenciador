import React from "react";
import { useNavigate } from "react-router-dom";

export const Inicio = () => {

    const navigate = useNavigate();

    return(
        <div>
            <h1 className="text-center my-5">Seja Bem-vindo a Ilegra!</h1>
            <h2 className="text-center my-5">Adicione o seu currículo ao nosso banco de talentos!</h2>
                <div class="d-grid gap-2">
                <button class="btn btn-primary" type="button" onClick={() => navigate("/gerenciador")}>Vamos começar?</button>

                </div>
        </div>
    )
}