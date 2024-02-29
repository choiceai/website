import styles from './StarNavigation.module.scss'

import { Link } from 'react-router-dom'

import star from '../../../img/star.svg'

const toStart = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

const StarNavigation = () => {
  return (
    <div className={styles.starNavigation}>
      <ul>
        <li><Link onClick={toStart} to="/">Продукт</Link></li>
      </ul>
      <ul>
        <li><img src={star} alt="star-choice" /></li>
      </ul>
      <ul>
        <li><Link onClick={toStart} to="/about">О нас</Link></li>
      </ul>
      <ul>
        <li><img src={star} alt="star-choice" /></li>
      </ul>
      <ul>
        <li><Link onClick={toStart} to="/blog">Блог и новости</Link></li>
      </ul>
      <ul>
        <li><img src={star} alt="star-choice" /></li>
      </ul>
      <ul>
        <li><Link onClick={toStart} to="/contact">Контакты</Link></li>
      </ul>
      <ul>
        <li><img src={star} alt="star-choice" /></li>
      </ul>
      <ul>
        <li><Link onClick={toStart} to="/market">Магазин</Link></li>
      </ul>
      <ul>
        <li><img src={star} alt="star-choice" /></li>
      </ul>
      <ul>
        <li><Link onClick={toStart} to="/business">Для бизнеса</Link></li>
      </ul>
    </div>
  )
}

export { StarNavigation }