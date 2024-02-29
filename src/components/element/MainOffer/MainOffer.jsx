import styles from './MainOffer.module.scss'
import logo from '../../../img/ChoiceL.svg'
import { Button } from '../../UI/Button/Button'
import star from '../../../img/star.svg'


const MainOffer = () => {
  return (
    <div className={styles.mainOffer}>

      <div className={styles.logo}>
        <img src={logo} alt="" />
      </div>

      <div className={styles.mainText}>
        <h1>Персональный тренер по здоровью</h1>
      </div>

      <div className={styles.secondText}>
        <p>Эффетивные тренировки</p>
        <img src={star} alt="star_choice" />
        <p>Сбалансированное питание</p>
        <img src={star} alt="star_choice" />
        <p>Мотивирующие задачи</p>
      </div>

      <div className={styles.btnGroup}>
        <Button>Скачать</Button>
        <Button>Узнать больше</Button>
      </div>
    </div>
  )
}

export { MainOffer }