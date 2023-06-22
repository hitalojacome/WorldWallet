import styles from '../css/NewAccount.module.css'

import axios from "axios";
import React, { useState, useEffect } from 'react';

import { Link, Navigate } from 'react-router-dom' 
import { TiArrowBackOutline as Back } from 'react-icons/ti'

function NewAccount() {
    useEffect(() => {
        axios
        .get('http://localhost:8080/usuarios')
        .then(response => {
            // Manipule a resposta da API aqui
                console.log(response.data);
            })
            .catch(error => {
            // Trate os erros da requisição aqui
                console.error(error);
            });
    }, []); // O array de dependências vazio [] garante que a chamada seja feita apenas uma vez no carregamento do componente

    const [nome, setNome] = useState("");
    const [sobrenome, setSobreNome] = useState("");
    const [email, setEmail] = useState("");
    const [cpf, setCpf] = useState("");
    const [nascimento, setNascimento] = useState("");
    const [senha, setSenha] = useState("");

    const sendData = () => {
        const newUser = {
          nome: nome,
          sobrenome: sobrenome,
          email: email,
          cpf: cpf,
          nascimento: nascimento,
          senha: senha
        };
    
        axios.post('http://localhost:8080/usuarios', newUser)
          .then(response => {
            setCpf("");
            setNome("");
            setSobreNome("");
            setEmail("");
            setNascimento("");
            setSenha("");
            <Navigate to = '/Login' />;
          })
          .catch(error => {
            console.error(error);
            // Trate os erros da requisição aqui, se necessário
          });
      };

    return(
        <section className={styles.NewAccount}>
                <Link to='/'>
                    <div className={styles.AccountBack}>
                        <Back />
                    </div>
                </Link>
            <div className={styles.New}>
                <h1 className={styles.New__title}>Cadastro</h1>
                <h3 className={styles.New__text}>Já tem uma conta? <Link to='/Login' className={styles.button_span}>Faça Login</Link></h3>
                <div className={styles.Forms}>
                    <div className={styles.New__name}>
                        <input type='text' className={styles.input_name} value={nome} onChange={(texto)=>setNome(texto.target.value)} placeholder='Nome:' />
                        <input type='text' className={styles.input_LastName} value={sobrenome} onChange={(texto)=>setSobreNome(texto.target.value)} placeholder='Sobrenome:' />
                    </div>
                    <input type='email' className={styles.input_NewEmail} value={email} onChange={(texto)=>setEmail(texto.target.value)} placeholder='E-mail:' />
                    <br />
                    <input type='text' className={styles.input_NewCpf} value={cpf} onChange={(texto)=>setCpf(texto.target.value)} placeholder='CPF:' maxLength={11} />
                    <br />
                    <input type='date' className={styles.input_NewDate} value={nascimento} onChange={(texto)=>setNascimento(texto.target.value)} placeholder='Data de Nascimento:' />
                    <br />
                    <input type='password' className={styles.input_NewPass} value={senha} onChange={(texto)=>setSenha(texto.target.value)} placeholder='Digite sua Senha:' />
                    <br />
                    <input type="password" className={styles.input_NewPass} placeholder='Confirme sua Senha:' />
                    <p className={styles.New_Term}>Eu concordo com os <span>Termos de Serviço</span> e <span>Política de Privacidade</span></p>
                    <button className={styles.button_New} onClick={sendData}>Cadastre-se</button>
                </div>
            </div>
        </section>
    )
}

export default NewAccount