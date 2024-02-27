import styles from './MenuNavButton.module.scss'

const MenuNavButton = ({ children }) => {
  return (
    <div className={styles.menuNavButton}>
        <a href="#">{children}</a>
    </div>
  )
}

export { MenuNavButton }