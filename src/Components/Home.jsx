import styles from '../css/Home.module.css'
import {Link} from 'react-router-dom'
import Logo from '../assets/logo_header.png'
import Cards from '../assets/cards.png'
import Hamburger from '../assets/menu_hamburger.svg'
import LogoHamburger from '../assets/logo_hamburger.png'
import LogoQuartz from '../assets/Quartzlogo.png'
import LogoBloomberg from '../assets/Bloomberglogo.png'
import LogoForbes from '../assets/Forbeslogo.png'
import LogoCnbc from '../assets/Cnbclogo.png'
import About from './About'
import Data from './Data'
import Team from './Team'
import Mac from './Mac'

function Home() {
    return(
        <div className={styles.container}>
            <section className={styles.Home}>

                <header className={styles.header}>
                    <div className={styles.logo}>
                        <Link to='/'><img src={Logo} alt='Logo da WorldWallet'/></Link>
                        <p className={styles.logo__texto}>World<span className={styles.logo__texto__destaque}>Wallet</span></p>
                    </div>
                    <div className={styles.headerR}>
                        <div className={styles.button}>
                            <Link to='/Login'style={{ textDecoration: 'none'}} className={styles.button__login}>ENTRAR</Link>
                            <Link to='/NewAccount' style={{ textDecoration: 'none'}} className={styles.button__NewAccount}>CADASTRE-SE</Link>
                        </div>
                        <input type='checkbox' id="menu" className={styles.container__botao} />
                        <label for="menu" className={styles.label_menu}>
                            <img src={Hamburger} alt='Menu Hamburger' />
                        </label>
                        <ul className={styles.lista__menu}>
                            <img src={LogoHamburger} alt='Logo WorldWallet' />
                            <hr />
                            <li className={styles.lista__menu__item}><Link to='/'style={{ textDecoration: 'none'}}>Home</Link></li>
                            <hr />
                            <li className={styles.lista__menu__item}><Link to='/'style={{ textDecoration: 'none'}}>Sobre</Link></li>
                            <hr />
                            <li className={styles.lista__menu__item}><Link to='/'style={{ textDecoration: 'none'}}>Serviços</Link></li>
                            <hr />
                            <li className={styles.lista__menu__item}><Link to='/'style={{ textDecoration: 'none'}}>Contatos</Link></li>
                        </ul>
                    </div>
                </header>
                
                <div className={styles.center}>
                    <div className={styles.center__left}>
                        <h1 className={styles.center__left__titulo}><span className={styles.titulo__destaque}>Transações Globais</span> Simples Transparantes e Acessíveis</h1>
                        <p className={styles.center__left__texto}>Chega de longas filas, burocracia e taxas caras. Com a WorldWallet, você pode enviar dinheiro para qualquer pessoa, pagar suas contas e fazer compras em qualquer lugar do mundo, de forma rápida, segura e acessível.</p>
                        <Link to='/NewAccount' style={{ textDecoration: 'none'}} className={styles.button__OpenAccount}>ABRA SUA CONTA</Link>
                    </div>
                    <img src={Cards} alt='Cartões WorldWallet' className={styles.center__left__cards} />
                </div>
                <div className={styles.partners}>
                    <a href='https://qz.com/' target='blank'>
                        <img src={LogoQuartz} alt='Logo Quartz' className={styles.partners__quartz} />
                    </a>
                    <a href='https://www.bloomberg.com/' target='blank'>
                        <img src={LogoBloomberg} alt='Logo Bloomberg' className={styles.partners__bloomberg} />
                    </a>
                    <a href='https://forbes.com.br/' target='blank'>
                        <img src={LogoForbes} alt='Logo Forbes' className={styles.partners__forbes} />
                    </a>
                    <a href='https://www.cnbc.com/world/?region=world' target='blank'>
                        <img src={LogoCnbc} alt='Logo CNBC' className={styles.partners__cnbc} />
                    </a>
                </div>
            </section>
            <About/>
            <Data/>
            <Team/>
            <Mac/>
        </div>
    )
}

export default Home