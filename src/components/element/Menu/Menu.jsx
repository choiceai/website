import styles from './Menu.module.scss'

import { MenuHeader } from '../../element/MenuHeader/MenuHeader'
import { MenuNavButton } from '../../UI/MenuNavButton/MenuNavButton'
import { MenuFooter } from '../MenuFooter/MenuFooter'

const Menu = ({ isMenuShow, toogleMenu }) => {
  return (
    <div className={isMenuShow ? styles.menu + " " + styles.open : styles.menu}>
      <div className={styles.menuContent}>
          <div className={isMenuShow ? styles.menuPicture + " " + styles.open : styles.menuPicture}></div>
          <div className={isMenuShow ? styles.menuNav + " " + styles.open : styles.menuNav}>
                <div className={styles.aboveElements}>
                  <MenuHeader toogleMenu={toogleMenu}/>
                  <div className={styles.menuLinks}>
                    <MenuNavButton>Блог</MenuNavButton>
                    <MenuNavButton onClick={toogleMenu} to={"/contact"}>Контакты</MenuNavButton>
                    <MenuNavButton onClick={toogleMenu} to={"/"}>Продукты</MenuNavButton>
                    <MenuNavButton onClick={toogleMenu} to={"/about"}>О нас</MenuNavButton>
                    <MenuNavButton>Для бизнеса</MenuNavButton>
                  </div>
                </div>
                <MenuFooter />
          </div>
      </div>
    </div>
  )
}

export { Menu }