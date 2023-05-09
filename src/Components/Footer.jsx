import styles from '../css/Footer.module.css'
import Logo from '../assets/logo_footer.png'

function Footer() {
    return(
        <footer>
            <div className={styles.logo}>
                <img src={Logo} alt='Logo da WorldWallet' className={styles.logo} />
                <h2 className={styles.logo__text}>World<span>Wallet</span></h2>
            </div>
            <div className={styles.info}>
                <ul className={styles.info__services}>
                    <li className={styles.info__item__titulo}>Serviços</li>
                    <li className={styles.info__item}>Crédito</li>
                    <li className={styles.info__item}>Seguros</li>
                    <li className={styles.info__item}>Investimentos</li>
                    <li className={styles.info__item}>Poupança</li>
                </ul>
                <ul className={styles.info__legal}>
                    <li className={styles.info__item__titulo}>Legal</li>
                    <li className={styles.info__item}>Reclamações</li>
                    <li className={styles.info__item}>Privacidade</li>
                    <li className={styles.info__item}>Termos</li>
                </ul>
                <ul className={styles.info__contact}>
                    <li className={styles.info__item__titulo}>Atendimento 24h</li>
                    <li className={styles.info__item}>SAC: 0800 555 5252 (das 08h às 20h)</li>
                    <li className={styles.info__item}>Central de Relacionamentos: 3003-5250</li>
                    <li className={styles.info__item}>Chat (das 08h as 18h)</li>
                    <li className={styles.info__item}>Atendimento ao deficiente auditivo: 0800 990 6699</li>
                    <li className={styles.info__item}>Atendimento no exterior: +55 31 3078-8152</li>
                </ul>
            </div>
            <div className={styles.footer__down}>Design with love © Hitalo Jacome 2023. All right reserved</div>
        </footer>
    )
}

export default Footer