import Offer from '../Offer/Offer'
import { ScreenTittle } from '../ScreenTittle/ScreenTittle'

import styles from './DevicesScreen.module.scss'
import statistic from '../../../img/statistic.png'

const desc = "Знания - сила, вот почему мы помешаны на цифрах и данных. От того, насколько хорошо вы спите, до количества шагов в день, которые вы делаете, наше приложение с помощью вашего фитнес браслета будет отслеживать всё это."

const devicesOfferDict = {
    'Ваш фитнес браслет': ' - универсальный трекер здоровья и фитнеса: шаги, активность, качество сна, частота сердечных сокращений, сожжённые калории и многое другое у вас перед глазами.',
    'Выводит персонализацию': ' на совершенно новый уровень благодаря синхронизации данных о вашем теле с приложением.',
    'Обеспечивает точные рекомендации': ' в соответствии с вашим личным профилем здоровья и фитнеса.',
}

const DevicesScreen = () => {
  return (
    <div className={styles.devicesScreen}>
        <ScreenTittle><h1>Choice - носимые устройства:</h1></ScreenTittle>
        <h3>Анализ данных о теле</h3>
        <div className={styles.devicesContent}>
            <img src={statistic} alt="statisic" />
            <Offer offerName={"Носимые устройства"} description={desc} items={devicesOfferDict}/>
        </div>
    </div>
  )
}

export { DevicesScreen }