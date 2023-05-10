import styles from '../css/Team.module.css'
import Coworking from '../assets/devteam.png'
import { AiOutlineArrowRight as Arrow } from 'react-icons/ai'

function Team() {
    return(
        <section className={styles.team}>
            <div className={styles.team__description}>
                <h2 className={styles.team__description__title}>Nosso Time</h2>
                <p className={styles.team__description__text}>Com uma equipe de mais de 5.000 pessoas de 34 nacionalidades diferentes, divididas em seis escritórios no Brasil, México, Chile, Holanda, Estados Unidos e Reino Unido, construímos times fortes e diversos.</p>
                <a href='https://programathor.com.br/jobs' target='_blank' rel="noreferrer">
                    <p className={styles.team__description__more}>Saiba mais sobre vagas na WW <Arrow/></p>
                </a>
            </div>
            <img src={Coworking} alt='Arte de dois colaboradores' className={styles.img}></img>
        </section>
    )
}

export default Team