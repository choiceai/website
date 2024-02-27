import styles from './MenuNavButton.module.scss'

import { Link } from 'react-router-dom'

const MenuNavButton = ({ children, to, onClick }) => {
  return (
    <div className={styles.menuNavButton}>
        <Link onClick={onClick} to={to} className={styles.link}>{children}</Link>
    </div>
  )
}

export { MenuNavButton }