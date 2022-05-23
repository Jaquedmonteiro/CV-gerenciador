import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Curriculo = () => {

    const navigate = useNavigate();
    
    const { id, nome, email, vaga } = Curriculo;

    return (
        
            <tr className="table-primary">
            <th>{nome}</th>
            <td>{email}</td>
            <td>{vaga}</td>
            <td>
                <div className="d-flex gap-3">
                    <button className="badge bg-success">Ver</button>
                    <button className="badge bg-danger">Excluir</button>
                </div>
            </td>
        </tr>
    )
}