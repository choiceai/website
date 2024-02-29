import styles from './Navigation.module.scss'

import { Link } from 'react-router-dom'

const toStart = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

const Navigation = () => {
  return (
    <div className={styles.navigation}>
        <ul>
            <li><Link onClick={toStart} to="/">Продукт</Link></li>
            <li><Link onClick={toStart} to="/business">Для бизнеса</Link></li>
            <li><Link onClick={toStart} to="/about">О нас</Link></li>
        </ul>
    </div>
  )
}

export { Navigation }