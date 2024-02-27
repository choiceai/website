import { Button } from '../../UI/Button/Button'
import styles from './Invest.module.scss'

const Invest = () => {
  return (
    <div className={styles.invest}>
        <div className={styles.investRounds}>
            <div className={styles.investRound}>
                <p><span className={styles.yellow}>1.</span> Pre-seed раунд - 500 тыс. рублей</p>
            </div>
            <div className={styles.investRound}>
                <p><span className={styles.yellow}>2.</span> Seed раунд 13 млн. рублей</p>
            </div>
        </div>
        <div className={styles.investBtns}>
            <Button>Скачать</Button>
            <Button>Узнать больше</Button>
        </div>
    </div>
  )
}

export { Invest }