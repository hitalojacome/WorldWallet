import styles from '../css/Login.module.css'
import LoginIcon from '../assets/login__icon.png'
import Google from '../assets/google_icon.png'
import Facebook from '../assets/facebook_icon.png'
import { Link } from 'react-router-dom' 
import { TiArrowBackOutline as Back } from 'react-icons/ti'
 
function Login(){
    return(
        <section className={styles.Account}>
                <Link to='/'>
                    <div className={styles.AccountBack}>
                        <Back />
                    </div>
                </Link>
                <div className={styles.Login}>
                    <img src={LoginIcon} alt='Logo de login' className={styles.Login__Icon} />
                    <h1 className={styles.Login__title}>Login</h1>
                    <h3 className={styles.Login__text}>Não tem uma conta? <Link to='/NewAccount' className={styles.button_span}>Cadastre-se</Link></h3>
                    <input type='email' className={styles.input_email} placeholder='E-mail' />
                    <br />
                    <input type='password' className={styles.input_pass} placeholder='Senha' />
                    <p className={styles.forgot}>Esqueceu sua senha?</p>
                    <Link to='/' className={styles.button_login}>Entrar</Link>
                    <h2 className={styles.ou}>OU</h2>
                    <div className={styles.button_social}>
                        <a href='https://accounts.google.com/' target='_blank' rel='noreferrer'>
                            <button className={styles.button_google}>
                                <img src={Google} alt='Logo da Google' className={styles.button_google_icon} />
                                Sign in with Google
                        </button>
                        </a>
                        <br />
                        <a href='https://www.facebook.com/' target='_blank' rel='noreferrer'>
                            <button className={styles.button_facebook}>
                                <img src={Facebook} alt='Logo do Facebook' className={styles.button_facebook_icon} />
                                Sign in with Facebook
                            </button>
                        </a>
                    </div>
                </div>
        </section>
    )
}

export default Login