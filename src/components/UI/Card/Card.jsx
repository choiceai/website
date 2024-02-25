import { Button } from '../Button/Button'
import styles from './Card.module.scss'

const Card = ({ children, name, bg }) => {
  return (
    <div style={{backgroundImage: `url(${bg})`}} className={styles.card}>
        <div className={styles.cardName}>{name}</div>
        {children}
        <Button>Узнать больше</Button>
    </div>
  )
}

export { Card }