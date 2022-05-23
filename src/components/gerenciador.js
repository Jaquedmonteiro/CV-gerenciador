import React from "react";
import { Curriculo } from "../components/curriculo";
import "./gerenciador.css"

export const Gerenciador = () => {
    return (
        <div>

        <h1 className="my-5 text-center">Lista de Currículos</h1>

        <div className="card bg-light p-3">
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>Nome: </th>
                    <th>E-mail: </th>
                    <th>Vaga </th>
                </tr>

            </thead>
                <tbody>
                    <Curriculo />
                </tbody>
        </table>
        </div>
        </div>
    )
}