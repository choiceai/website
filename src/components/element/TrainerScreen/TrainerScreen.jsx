import styles from './TrainerScreen.module.scss'

import Offer from '../Offer/Offer'
import { ScreenTittle } from '../ScreenTittle/ScreenTittle'


import coach from '../../../img/coach.png'
import coach2 from '../../../img/coach2.png'
import card2 from '../../../img/card2.png'

const descFirst = "Регулярные проверки и оценка прогресса у вашего AI тренера, который доработать ваш план тренировки и изменит курс в соответствии с вашими потребностями. Никакого стресса и никаких лишних хлопот."

const devicesOfferDictFirst = {
    'Личное внимание:': ' если вы чувствуете дискомфорт в какой-либо части тела, у вас есть слабость или что тому подобное сообщите об этом тренеру и он подстроит под вас тренировку с учётом нынешнего самочувствия',
    'Доступность:': ' Тренер доступен в любое время в любом месте и может провести тренировку, когда и где вам это удобно ',
    'Помощь:': ' Корректировка выполнений упражнений, мотивация по ходу выполнения программы тренировок и личные советы, помогут вам выроюаботать нужные привычки.',
    'Общение:': ' Обсудите любые темы и интересные новости по ходу тренировки вне зависимости от сферы, расскажите о ваших спортивных проблемах и получите консультацию и совет.',
}

const descSecond = "Мониторинг вашего состояния и обратная связь по вашим тренировкам, здоровью вот что поможет вам лучше подобрать тот самый вектор развития."

const devicesOfferDictSecond = {
    'Получайте персонализированные рекомендации,': ' основанные на ваших данных о состоянии здоровья в Choice',
    'Получайте отзывы экспертов и поддержку ': ' 24 часа в сутки',
    'Получайте рекомендации, поддержку и напоминания': ' без давления',
}

const TrainerScreen = () => {
  return (
    <div className={styles.trainerScreen}>
      <ScreenTittle card={card2}>
        <h1>Choice: <span className={styles.white}>Персональный</span> Тренер по <br /> здоровью</h1>
      </ScreenTittle>
      <div className={styles.firstHalfTrainer}>
        <img src={coach} alt="coach-trainer" />
        <Offer offerName={"Экспертное руководство"} description={descFirst} items={devicesOfferDictFirst}/>
      </div>
      
      <div className={styles.secondHalfTrainer}>
        <Offer offerName={"Экспертное руководство"} description={descSecond} items={devicesOfferDictSecond}/>
        <img src={coach2} alt="coach-trainer" />
      </div>
      
    </div>
  )
}

export { TrainerScreen }