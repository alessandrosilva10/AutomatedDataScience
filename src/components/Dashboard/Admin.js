import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { API } from '../../config';
import axios from 'axios';
import Example from './Modal';

const Admin = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        role: ''
    });
    const [error, setError] = React.useState('');
    useEffect(() => {
        let token =  0;
        let id = 0;
        let isSubscribed = true;
        if(localStorage.getItem('token_jwt')){
            token =  JSON.parse(localStorage.getItem('token_jwt')).token;
            id = JSON.parse(localStorage.getItem('token_jwt')).user._id;
        }
        axios.get(`${API}/user/${id}`,{
            headers: {
              'Authorization': `Bearer ${token}`
            },
          })
        .then(res => (isSubscribed ? setUser({name: res.data.name, email: res.data.email, role: res.data.role}) : null))
        .catch(error => (isSubscribed ? setError(error.toString()) : null));
        console.log(`${API}/user/${id}`);
        return () => (isSubscribed = false);
    }, []);

    return(
        <>
        {!error && user &&
        <div style={{paddingTop: '50px', backgroundColor: 'deepskyblue', paddingBottom: '20%'}} className="container">
        <div className="row" id="dashboard">
            <div className="col-3">
                <div className="card">
                    <h4 className="card-header"><center>Análise de Negócios</center></h4>
                    <ul className="list-group">
                        <li className="list-group-item">
                            <Link className="nav-link" to="/card">
                            <i className="fas fa-search"/> Consultar
                            </Link>
                        </li>                 
                    </ul>
                </div>
            </div>
            <div className="col-3">
                <div className="card">
                    <h4 className="card-header"><center>Cadastro</center></h4>
                    <ul className="list-group">
                        <Example category="Criar Categoria" icon="fas fa-plus-circle" save="Categoria" title="Cadastro de Categoria" label="Nome da Categoria" placeholder="Qual o nome da Categoria?"/>
                        <Example category="Criar Produto" product="Nome do Produto" quantity="Quantidade disponível" description="Descrição do Produto" price="Preço do Produto" icon="fas fa-plus" save="Produto" title="Cadastro de Produto" label="Nome do Produto"/>
                    </ul>
                </div>
            </div>
                <div className="col-4">
                    <div className="card mb-5">
                    <h3 className="card-header"><center>Informações do {user.role === 1 ? "Administrador" : "Cliente"}</center></h3>
                        <ul className="list-group">
                            <li className="list-group-item">
                                <i className="fas fa-key"/> {user.role === 1 ? "Administrador" : "Cliente"}
                            </li>
                            <li className="list-group-item"><i className="fas fa-address-card"/> {user.name}</li>
                            <li className="list-group-item"><i className="fas fa-at"/> {user.email}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>}
        </>
    );
}

export default Admin;