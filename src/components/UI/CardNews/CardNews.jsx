import { Button } from '../Button/Button'
import styles from './CardNews.module.scss'

const CardNews = ({ children, name, bg }) => {
  return (
    <div style={{backgroundImage: `url(${bg})`}} className={styles.card}>
        <div className={styles.cardName}>{name}</div>
        {children}
        <Button>Перейти</Button>
    </div>
  )
}

export { CardNews }