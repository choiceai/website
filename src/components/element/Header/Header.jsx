import { NavButton } from '../../UI/NavButton/NavButton'
import styles from './Header.module.scss'

const Header = ({ toogleMenu }) => {
  return (
    <div className={styles.header}>
        <div className={styles.breadcrumbs}>
            <p>Продукты - Меню - Эта страница</p>
        </div>
        <div className={styles.headerBtns}>
            <NavButton style={ {backgroundColor: "#2C2C2E"} }>Скачать</NavButton>
            <NavButton
                style={ {backgroundColor: "#2C2C2E"} }
                onClick={toogleMenu} 
                className={styles.headerButtonsItems}>
                    <i className="bx bx-menu bx-xs"></i>
            </NavButton>
        </div>
    </div>
  )
}

export { Header }