import React, { Component } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const baseUrl = 'http://localhost:3000/gerenciador';

const initialState = {
curriculo: { nome: '', email: '', telefone: '', vaga: '', formacao: '', experiencia: ''},
list: []
};

export const Gerenciador = () => {
    const state = { ... initialState };

    const navigate = useNavigate();

    function componentWillMount() {
        axios(baseUrl).then(resp => {
            this.setState({ list: resp.data });
        });
    }

    function clear() {
        this.setState({ curriculo: initialState.curriculo });
    }

    function save() {
        const curriculo = this.state.curriculo;
        const method = curriculo.id ? 'put' : 'post';
        const url = curriculo.id ? `${baseUrl}/${curriculo.id}` : baseUrl;
        axios[method](url, curriculo).then(resp => {
            const list = this.getUpdateList(resp.data);
            this.setState({ curriculo: initialState.curriculo, list});
        });
    }

    function getUpdateList(curriculo, add = true) {
        const list = this.state.list.filter(cv => cv.id != curriculo.id)
        if(add) list.unshift(curriculo); 
        return list
    }

    function updateField(event) {
        const curriculo = { ... this.state.curriculo }
        curriculo[event.target.name] = event.target.value
        this.setState({ curriculo });
    }

    function renderForm() {
        return (
        <div className='form'>
            <div className='row'>
                <div className='col-12 col-md-6'>
                    <div className='form-group'>
                        <label>Nome:</label>
                        <input
                        type='text'
                        className='form-control'
                        name='nome'
                        value='this.state.curriculo.nome'
                        onChange={e => this.updateField(e)}
                        placeholder='Digite o seu nome' />
                    </div>
                </div>
            
                <div className='col-12 col-md-6'>
                    <div className='form-group'>
                        <label>E-mail:</label>
                        <input
                        type='text'
                        className='form-control'
                        name='email'
                        value='this.state.curriculo.email'
                        onChange={e => this.updateField(e)}
                        placeholder='Digite o seu e-mail' />
                    </div>
                </div>

                <div className='col-12 col-md-6'>
                    <div className='form-group'>
                        <label>Telefone:</label>
                        <input
                        type='text'
                        className='form-control'
                        name='email'
                        value='this.state.curriculo.telefone'
                        onChange={e => this.updateField(e)}
                        placeholder='Digite o seu telefone' />
                    </div>
                </div>

                <div className='col-12 col-md-6'>
                    <div className='form-group'>
                        <label>Vaga:</label>
                        <input
                        type='text'
                        className='form-control'
                        name='vaga'
                        value='this.state.curriculo.vaga'
                        onChange={e => this.updateField(e)}
                        placeholder='Digite a vaga a se candidatar' />
                    </div>
                </div>

                <div className='col-12 col-md-6'>
                    <div className='form-group'>
                        <label>Formação:</label>
                        <input
                        type='text'
                        className='form-control'
                        name='email'
                        value='this.state.curriculo.formacao'
                        onChange={e => this.updateField(e)}
                        placeholder='Digite sua formação' />
                    </div>
                </div>

                <div className='col-12 col-md-6'>
                    <div className='form-group'>
                        <label>Experiências</label>
                        <input
                        type='text'
                        className='form-control'
                        name='email'
                        value='this.state.curriculo.experiencia'
                        onChange={e => this.updateField(e)}
                        placeholder='Digite suas experiências' />
                    </div>
                </div>
            </div>

            <hr />
            <div className='row'>
                    <div className='col-12 d-flex justify-content-end'>
                        <button className="btn btn-primary" onClick={e => this.save(e)}>Salvar</button>
                        <button className="btn btn-secondary" onClick={e => this.clear(e)}>Cancelar</button>
                    </div>
            </div>
        </div>

        );
    }

    function load(curriculo) {
        this.setState({ curriculo });
    }

    function remove(curriculo) {
        axios.delete(`${baseUrl}/&{curriculo.id}`).then(() => {
            const list = this.getUpdateList(curriculo, false)
            this.setState({ list })
        });
    }

    function renderTable() {
        return(
            <table className='table mt-4'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Vaga</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        );
    }

    function renderRows() {
        return this.state.list.map(curriculo => {
            return (
                <tr key={curriculo.id}>
                    <td>{curriculo.nome}</td>
                    <td>{curriculo.vaga}</td>
                    <td> 
                    <button className='btn btn-warning' onClick={() => this.load(curriculo)}>
                        <i className="fa fa-pencil"></i></button> 
                    
                    <button className='btn btn-danger mt-2' onClick={() => this.remove(curriculo)}>
                        <i className="fa fa-trash"></i></button>
                    </td>
                </tr>
            );
        });
    }

    function render() {
        return(
            <inicio >
            {this.renderForm()}
            {this.renderTable()}
            </inicio>
        );
    }
}
