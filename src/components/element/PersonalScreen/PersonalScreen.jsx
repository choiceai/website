import styles from './PersonalScreen.module.scss'

import card3 from '../../../img/card3.png'
import progress from '../../../img/progress.png'

import { ScreenTittle } from '../ScreenTittle/ScreenTittle'
import Offer from '../Offer/Offer'

const desc = "Персонализированное целостное руководство, учитывающее ваши потребности в физической форме, питании, психологическом здоровье"

const digitalToolOfferDict = {
    'Отслеживание прогресса стало простым': ' благодаря встроенным датчикам и персональному тренеру, который постоянно фокусирует вас на важном',
    'Бесплатный доступ к более чем 100 тренировкам и персональному тренеру,': ' который поможет вам подобрать вам свой стиль фитнеса',
    'Ежедневный персонализированный': ' план питания с учётом вашего здоровья, образа жизни, целей. Против диет и ограничений.',
}

const PersonalScreen = () => {
  return (
    <div className={styles.personalScreen}>
      <ScreenTittle card={card3}>
        <h1><span className={styles.yellow}>Choice:</span> Персональный подход</h1>
      </ScreenTittle>
      <div className={styles.digitalTool}>
        <img src={progress} alt="progress screenshot" />
        <Offer offerName={"Цифровой инструмент"} description={desc} items={digitalToolOfferDict}/>
      </div>
    </div>
  )
}

export { PersonalScreen }