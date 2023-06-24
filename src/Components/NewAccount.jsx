import styles from '../css/NewAccount.module.css'
import axios from "axios"; // bib de requisições HTTP.
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom' 
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
    const [confirmarSenha, setConfirmarSenha] = useState("");

    const navigate = useNavigate();

    const sendData = () => {
        if (senha !== confirmarSenha) {
            alert("A senha e a confirmação de senha não correspondem.")
            return; 
        }

        const newUser = {
          nome: nome,
          sobrenome: sobrenome,
          email: email,
          cpf: cpf,
          nascimento: nascimento,
          senha: senha
        };
        
        axios
            .post('http://localhost:8080/usuarios', newUser)
            .then(response => {
                setCpf("");
                setNome("");
                setSobreNome("");
                setEmail("");
                setNascimento("");
                setSenha("");
                setConfirmarSenha("");

                alert("Conta criada com sucesso!");
                navigate('/Login'); // Redirecionar para a página de login
            })
            .catch(error => {
                console.error(error);
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
                        <input 
                        className={styles.input_name}
                        type='text' 
                        value={nome} 
                        onChange={(texto)=>setNome(texto.target.value)} 
                        placeholder='Nome:' 
                        />
                        <input 
                        className={styles.input_LastName}
                        type='text'
                        value={sobrenome} 
                        onChange={(texto)=>setSobreNome(texto.target.value)} 
                        placeholder='Sobrenome:' 
                        />
                    </div>
                    <input
                    className={styles.input_NewEmail} 
                    type='email' 
                    value={email} 
                    onChange={(texto)=>setEmail(texto.target.value)} 
                    placeholder='E-mail:' 
                    />
                    <br />
                    <input 
                    className={styles.input_NewCpf} 
                    type='text' 
                    value={cpf} 
                    onChange={(texto)=>setCpf(texto.target.value)} 
                    placeholder='CPF:' 
                    maxLength={11} 
                    />
                    <br />
                    <input 
                    className={styles.input_NewDate}
                    type='date' 
                    value={nascimento} 
                    onChange={(texto)=>setNascimento(texto.target.value)} 
                    placeholder='Data de Nascimento:' 
                    />
                    <br />
                    <input 
                    className={styles.input_NewPass}
                    type='password'
                    value={senha} 
                    onChange={(texto)=>setSenha(texto.target.value)} 
                    placeholder='Digite sua Senha:' 
                    />
                    <br />
                    <input
                    className={styles.input_NewPass} 
                    type="password" 
                    value={confirmarSenha} 
                    onChange={texto => setConfirmarSenha(texto.target.value)} 
                    placeholder='Confirme sua Senha:' 
                    />

                    <p className={styles.New_Term}>Eu concordo com os <span>Termos de Serviço</span> e <span>Política de Privacidade</span></p>
                    <button 
                    className={styles.button_New} 
                    onClick={sendData}>
                        Cadastre-se
                    </button>
                </div>
            </div>
        </section>
    )
}

export default NewAccount