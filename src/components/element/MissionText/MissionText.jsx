import styles from './MissionText.module.scss'

const MissionText = () => {
  return (
    <div className={styles.missionText}>
        <h3 className={styles.left}><span className={styles.yellow}>Наши ценности:</span> Разнообразие и иклбзивносиь.</h3>
        <h3 className={styles.right}>Простота. <span>Персональный подход.</span></h3>
        <h3 className={styles.left}>Внимание. <span className={styles.yellow}>Сообщество.</span></h3>
    </div>
  )
}

export { MissionText }