import { NavButton } from '../../UI/NavButton/NavButton'
import styles from './MenuHeader.module.scss'

const MenuHeader = ({ toogleMenu }) => {
  console.log(toogleMenu)

  return (
    <div className={styles.menuHeader}>
        <NavButton>Скачать</NavButton>
        <div className={styles.headerButtons}>
            <NavButton className={styles.headerButtonsItem}>Войти</NavButton>
            <NavButton className={styles.headerButtonsItem}>Нужна помощь?</NavButton>
            <NavButton onClick={toogleMenu} className={styles.headerButtonsItems}><i className="bx bx-x bx-md"></i></NavButton>
        </div>
    </div>
  )
}

export { MenuHeader }