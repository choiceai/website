import { Button } from '../../UI/Button/Button'
import styles from './LastCallScreen.module.scss'

const LastCallScreen = () => {
  return (
    <div className={styles.lastCallScreen}>
        <h3 className={styles.left}>Улучшите своё <span className={styles.yellow}>физическое,</span></h3>
        <h3 className={styles.right}><span className={styles.yellow}>ментальное здоровье</span> </h3>
        <h3 className={styles.left}><span className={styles.yellow}>и самочувствие</span>  с помощью Choice</h3>
    </div>
  )
}

export { LastCallScreen }