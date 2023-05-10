import styles from '../css/NewAccount.module.css'
import { Link } from 'react-router-dom' 
import { TiArrowBackOutline as Back } from 'react-icons/ti'

function NewAccount() {
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
                        <input type='text' className={styles.input_name} placeholder='Nome:' />
                        <input type='text' className={styles.input_LastName} placeholder='Sobrenome:' />
                    </div>
                    <input type='email' className={styles.input_NewEmail} placeholder='E-mail:' />
                    <br />
                    <input type='number' className={styles.input_NewCpf} placeholder='CPF:' maxLength={11} />
                    <br />
                    <input type='date' className={styles.input_NewDate} placeholder='Data de Nascimento:' />
                    <br />
                    <input type='password' className={styles.input_NewPass} placeholder='Digite sua Senha:' />
                    <br />
                    <input type="password" className={styles.input_NewPass} placeholder='Confirme sua Senha:' />
                    <p className={styles.New_Term}>Eu concordo com os <span>Termos de Serviço</span> e <span>Política de Privacidade</span></p>
                    <Link to='/Login' className={styles.button_New}>Cadastre-se</Link>
                </div>
            </div>
        </section>
    )
}

export default NewAccount