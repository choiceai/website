import styles from './HabbitsScreen.module.scss'

import card4 from '../../../img/card4.png'
import screenshot1 from '../../../img/screenshot1.png'
import screenshot2 from '../../../img/screenshot2.png'
import screenshot3 from '../../../img/screenshot3.png'
import screenshot4 from '../../../img/screenshot4.png'

import { ScreenTittle } from '../ScreenTittle/ScreenTittle'

const HabbitsScreen = () => {
  return (
    <div className={styles.habbitsScreen}>
      <ScreenTittle card={card4}>
        <h1>
          <span className={styles.yellow}>Создайте привычки,</span> которые <br />останутся на всю жизнь
        </h1>
      </ScreenTittle>
      <div className={styles.screenshots}>
        <img src={screenshot1} alt="screenshot_from_app" />
        <img src={screenshot2} alt="screenshot_from_app" />
        <img src={screenshot3} alt="screenshot_from_app" />
        <img src={screenshot4} alt="screenshot_from_app" />

      </div>
    </div>
  )
}

export { HabbitsScreen }