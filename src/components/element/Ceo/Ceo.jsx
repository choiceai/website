import styles from './Ceo.module.scss'
import ceoFace from '../../../img/ceoFace.png'

const Ceo = () => {
  return (
    <div className={styles.ceo}>
        <div className={styles.ceoFace} style={ {backgroundImage: `url(${ceoFace})`} }></div>
        <div className={styles.ceoText}>
            <p>
                <span className={styles.yellow}>"</span>Наша цель - сделать здоровый образ жизни доступным для каждого, а так же вдохновлять на изменения и результат.<span className={styles.yellow}>"</span>
            </p>
            <p>
                Жиляков Иван <br />
                <span className={styles.yellow}>CEO, Co-founder</span>
            </p>
        </div>
    </div>
  )
}

export { Ceo }