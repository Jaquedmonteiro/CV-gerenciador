import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';

export const Formulario = () => {
    const navigate = useNavigate();

    return(

        <div>

            <div className="d-flex my-5 justify-content-center text-center">
                
                <h1 className="text-center">Cadastre abaixo seu currículo</h1>
            <div />
        </div>

        <div className="card border-primary p-5 m-5">
        <div className="form-group">
        <label htmlFor="nome" className='form-label mt-4'>Nome</label>
        <input type='text'
        name='nome'
        id='nome'
        placeholder='Nome completo'
        className='form-control' />
    </div>

    <div className="form-group">
        <label htmlFor="cpf" className='form-label mt-4'>CPF</label>
        <input type='number'
        name='cpf'
        id='cpf'
        placeholder='Digite seu CPF'
        className='form-control' />
    </div>

    <div className="form-group">
        <label htmlFor="genero" className="form-label mt-4">Genero?</label>
        <select className="form-select" id="pcd">
            <option>Selecione</option>
            <option>Masculino</option>
            <option>Femninino</option>
            <option>Não-binário</option>
            <option>Outros</option>
        </select>
    </div>

    <div className="form-group">
        <label htmlFor="endereco" className='form-label mt-4'>Endereço</label>
        <input type='text'
        name='endereco'
        id='endereco'
        placeholder='Digite seu endereço'
        className='form-control' />
    </div>

    <div className="form-group">
        <label htmlFor="foto" className='form-label mt-4'>Foto</label>
        <input type='url' 
        name='foto' 
        id='foto'
        placeholder='Link da sua foto' 
        className='form-control' />
    </div>

    <div className="form-group">
        <label htmlFor="email" className='form-label mt-4'>E-mail</label>
        <input type='email' 
        className='form-control' 
        name='email' 
        placeholder='email@email.com' />
    </div>

    <div className="form-group">
        <label htmlFor="telefone" className="form-label mt-4">Telefone</label>
        <input type="text" 
        className="form-control" 
        name="telefone" 
        placeholder="(00) 00000-0000" /> 
    </div>

    <div className="form-group">
        <label htmlFor="vaga" className="form-label mt-4">Vaga a se candidatar</label>
        <select className="form-select" id="vaga">
            <option>Selecione</option>
            <option>Desenvolvedor Back-end Júnior</option>
            <option>Desenvolvedor Front-end Júnior</option>
            <option>Desenvolvedor Full Stack Júnior</option>
        </select>
    </div>

    <div className="form-group">
        <label htmlFor="pcd" className="form-label mt-4">PCD?</label>
        <select className="form-select" id="pcd">
            <option>Selecione</option>
            <option>Sim</option>
            <option>Não</option>
        </select>
    </div>

    <div className="form-group">
        <label htmlFor="linkedin" className='form-label mt-4'>Linkedin</label>
        <input type='url' 
        name='linkedin' 
        id='linkedin'
        placeholder='Link do seu Linkedin' 
        className='form-control' />
    </div>

    <div className="form-group">
        <label htmlFor="anexo" className="form-label mt-4">Anexe seu currículo:</label>
        <input  type="file" 
        name="anexo"
        id='anexo'
        className="form-control" />
    </div>

    <h3 className='mt-2 text-center'>Formação </h3>
        <div className="form-group">
            <label htmlFor="curso" className='form-label mt-4'>Curso</label>
            <input type='text' 
            name='curso' 
            id='curso'
            placeholder='Curso' 
            className='form-control' />
        </div>

        <div className="form-group">
            <label htmlFor="instituicao" className='form-label mt-2'>Instituição de Ensino</label>
            <input type='text' 
            name='instituicao' 
            id='instituicao'
            className='form-control' />
        </div>

        <div className="form-group">
            <label htmlFor="inicio1" className='form-label mt-2'>Início</label>
            <input type='date' 
            name='inicio1' 
            id='inicio1'
            placeholder='Data de início' 
            className='form-control' />
        </div>

        <div className="form-group">
            <label htmlFor="fim1" className='form-label mt-2'>Final</label>
            <input type='date' 
            name='fim1' 
            placeholder='Data de conclusão' 
            className='form-control' />
        </div>

        <div className="form-group">
            <label htmlFor="tipoCurso1" className="form-label mt-2">Nível</label>
            <select className="form-select" id="tipoCurso1">
                <option>Técnico</option>
                <option>Superior</option>
                <option>Pós-graduação</option>
                <option>Especialização</option>
            </select>
        </div>

        <div className="form-group">
            <label htmlFor="ingles" className="form-label mt-4">Inglês</label>
                <select className="form-select" id="ingles">
                    <option>Não</option>
                    <option>Básico</option>
                    <option>Intermediário</option>
                    <option>Avançado</option>
                    <option>Fluente ou nativo</option>
                </select>
        </div>

    <h2 className='text-center mt-2'>Experiência</h2>

<div className="form-group">
    <label htmlFor="trab" className="form-label mt-4">Cargo</label>
    <input
    type="text"
    name="trab"
    id='trab'
    placeholder="Cargo"
    className="form-control" />
</div>

<div className="form-group">
    <label htmlFor="empresa1" className="form-label mt-2">Empresa</label>
    <input type="text" 
    name="empresa" 
    id='empresa'
    className="form-control" />
</div>

<div className="form-group">
    <label htmlFor="descricao1" className="form-label mt-2">Descrição</label>
    <input
    type="text"
    name="descricao"
    id='descricao'
    placeholder="Descreve suas tarefas"
    className="form-control" />
</div>

<div className="form-group">
    <label htmlFor="inicioTrab1" className="form-label mt-2">Início</label>
    <input
    type="date"
    name="inicioTrab"
    id='inicioTrab'
    placeholder="Data de início"
    className="form-control" />
</div>

<div className="form-group">
    <label htmlFor="fimTrab1" className="form-label mt-2">Final</label>
    <input
    type="date"
    name="fimTrab"
    id="fimTrab"
    placeholder="Data final"
    className="form-control" />
</div>
    <div className="d-grid gap-2 mt-3">
                    
                    <button className="btn btn-success" >Salvar</button>
                </div>
            </div>
            </div>
        
    )
    
}