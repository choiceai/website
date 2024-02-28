import { Button } from '../Button/Button'
import { Link } from 'react-router-dom'
import styles from './CardNews.module.scss'

const CardNews = ({ children, name, bg, src }) => {
  return (
    <div style={{backgroundImage: `url(${bg})`}} className={styles.card}>
        <div className={styles.cardName}>{name}</div>
        {children}
        <Link to={src} style={ {width: "90%", textAlign: "center", marginBottom: "20px"} }>
          <Button style={ {width: "100%"} }>Перейти</Button>
        </Link>
    </div>
  )
}

export { CardNews }