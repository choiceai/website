import styles from './Header.module.scss'

import logo from '../../../img/Choice.svg'
import { Navigation } from '../../UI/Navigation/Navigation'
import { Button } from '../../UI/Button/Button'
const Header = () => {
  return (
    <div className={styles.header}>
        <img src={logo} alt="choice-logo" />
        <div className={styles.nav}>
          <Navigation/>
        </div>
        <div className={styles.btns}>
            <Button style={ {height: "40px"} }>Войти</Button>
            <Button style={ {height: "40px"} }><i class='bx bx-menu bx-xs'></i></Button>
        </div>
    </div>
  )
}

export { Header }