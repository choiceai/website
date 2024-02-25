import styles from './Navigation.module.scss'

const Navigation = () => {
  return (
    <div className={styles.navigation}>
        <ul>
            <li><a href="#">Продукты</a></li>
            <li><a href="#">Для бизнеса</a></li>
            <li><a href="#">О нас</a></li>
        </ul>
    </div>
  )
}

export { Navigation }