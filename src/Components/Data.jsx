import styles from '../css/Data.module.css'
import Dashboard from '../assets/dashboard.png'

function Data() {
    return(
        <section className={styles.Data}>
            <div className={styles.Data__description}>
                <h2 className={styles.Data__description__title}>
                Nossos Resultados em Transações Internacionais nos Últimos Meses
                </h2>
                <p className={styles.Data__description__text}>
                disponibilizamos esse dashboard para que nossos clientes e investidores possam acompanhar o desempenho da nossa empresa em tempo real.
                </p>
            </div>
            <img src={Dashboard} alt='Gráfico de valores de transações da WorldWallet do último ano' className={styles.Data__dashboard} />
        </section>
    )
}

export default Data;