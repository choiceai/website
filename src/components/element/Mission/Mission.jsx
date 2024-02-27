import styles from './Mission.module.scss'

import missionCard1 from '../../../img/missionCard1.png'
import missionCard2 from '../../../img/missionCard2.png'

const Mission = () => {
  return (
    <div className={styles.mission}>
        <div className={styles.missionCards}>
            <div className={styles.missionCard} style={ {backgroundImage: `url(${missionCard1})`} }>
                <div className={styles.missionCardContent}>
                    Создание счастья внутри
                </div>
            </div>
            <div className={styles.missionCard} style={ {backgroundImage: `url(${missionCard2})`} }>
                <div className={styles.missionCardContent}>
                    Простое и доступное оздоровление в домашних условиях
                </div>
            </div>
        </div>
       </div>
  )
}

export { Mission }