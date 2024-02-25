import styles from './MetricScreen.module.scss'
import card1 from '../../../img/stepCard.png'
import card2 from '../../../img/pulseCard.png'
import card3 from '../../../img/dreamCard.png'


const MetricScreen = () => {
  return (
    <div className={styles.metricScreen}>
      <h3 className={styles.left}>Используйте <span className={styles.yellow}>данные о теле</span> для</h3>
      <h3 className={styles.right}>выработки долгосрочных привычек </h3>
      <h3 className={styles.left}>и получите <span className={styles.yellow}>максимум поддержки</span> и внимания на ходу</h3>
      
      <div className={styles.metricsCard}>
        <img src={card1} alt="" />
        <img src={card2} alt="" />
        <img src={card3} alt="" />
        
      </div>
    </div>
  )
}

export { MetricScreen }