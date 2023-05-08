import styles from '../css/About.module.css'

function About() {
    return(
        <section className={styles.about}>
            <div className={styles.about__text}>
                <h1 className={styles.about__text__title}>A WorldWallet</h1>
                <p className={styles.about__text__paragraph}>Com nossa interface direta e intuitiva, você pode começar sua transferência com apenas alguns cliques. Nosso sistema usa a mais recente tecnologia de criptografia para garantir que suas informações pessoais e financeiras sejam mantidas seguras e protegidas.</p>
            </div>
            <div className={styles.about__cards}>
                <div className={styles.cards__item}>
                    <h2 className={styles.cards__item__title}>Transfêrencia Internacional</h2>
                    <p className={styles.cards__item__text}>Estamos empenhados em tornar os pagamentos internacionais rápidos, acessíveis e sem complicações para todos.</p>
                </div>
                <div className={styles.cards__item}>
                    <h2 className={styles.cards__item__title}>Seguro e Protegido</h2>
                    <p className={styles.cards__item__text}>Plataforma segura e fácil de usar que permite que indivíduos e organizações enviem e recebam pagamentos globalmente com facilidade.</p>
                </div>
                <div className={styles.cards__item}>
                    <h2 className={styles.cards__item__title}>Transparência e Simplicidade</h2>
                    <p className={styles.cards__item__text}>Priorizamos a segurança das informações e transações de nossos usuários, utilizando a tecnologia mais recente e as melhores práticas para manter seus dados seguros.</p>
                </div>
            </div>
        </section>
    )
}

export default About