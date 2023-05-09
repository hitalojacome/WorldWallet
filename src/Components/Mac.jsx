import styles from '../css/Mac.module.css'
import Macbook from '../assets/macbook.png'

function Mac(){
    return(
        <section className={styles.Mac}>
            <div className={styles.Mac__description}>
                <h2 className={styles.Mac__description__title}>Nosso compromisso com a excelência é o que nos diferencia e estamos orgulhosos dos resultados que alcançamos até agora.</h2>
            </div>
            <img src={Macbook} alt='Imagem de Macbook com dados da empresa WW' className={styles.img} />
        </section>
    )
}

export default Mac