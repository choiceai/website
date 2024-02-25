import styles from './StarNavigation.module.scss'

import star from '../../../img/star.svg'

const StarNavigation = () => {
  return (
    <div className={styles.starNavigation}>
      <ul>
        <li><a href="#">Продукт</a></li>
      </ul>
      <ul>
        <li><img src={star} alt="star-choice" /></li>
      </ul>
      <ul>
        <li><a href="#">О нас</a></li>
      </ul>
      <ul>
        <li><img src={star} alt="star-choice" /></li>
      </ul>
      <ul>
        <li><a href="#">Блог и новости</a></li>
      </ul>
      <ul>
        <li><img src={star} alt="star-choice" /></li>
      </ul>
      <ul>
        <li><a href="#">Контакты</a></li>
      </ul>
      <ul>
        <li><img src={star} alt="star-choice" /></li>
      </ul>
      <ul>
        <li><a href="#">Магазин</a></li>
      </ul>
      <ul>
        <li><img src={star} alt="star-choice" /></li>
      </ul>
      <ul>
        <li><a href="#">Для бизнеса</a></li>
      </ul>
    </div>
  )
}

export { StarNavigation }