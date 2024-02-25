import styles from './SecondScreen.module.scss'
import card1 from "../../../img/card1.png"
import { ScreenTittle } from "../ScreenTittle/ScreenTittle"
import { Card } from '../../UI/Card/Card'
import bgCard1 from '../../../img/cardBG1.png'
import bgCard2 from '../../../img/cardBG2.png'
import bgCard3 from '../../../img/cardBG3.png'


const SecondScreen = () => {
  return (
    <div className={styles.secondScreen}>
        <ScreenTittle card={card1}>
            <h1>Открой для себя <span className={styles.yellow}>индивидуальный<br /> подход</span> к оздоровлению с <span className={styles.yellow}>Choice</span></h1>
        </ScreenTittle>
        <div className={styles.cards}>
            <Card name={"Отслеживание"} bg={bgCard1}>
                Сhoice коучинг по здоровью
            </Card>
            <Card name={"Наставничество"} bg={bgCard2}>
                Сhoice личное внимание к здоровью
            </Card>
            <Card name={"Персонализация"} bg={bgCard3}>
                Сhoice анализ данных о теле
            </Card>
        </div>
    </div>
  )
}

export { SecondScreen }