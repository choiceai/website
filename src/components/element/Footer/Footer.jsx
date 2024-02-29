import { Button } from '../../UI/Button/Button'
import { StarNavigation } from '../../UI/StarNavigation/StarNavigation'

import logo from '../../../img/Choice.svg'

import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <StarNavigation />
      <div className={styles.footerAdditional}>
        <div className={styles.footerLogo}>
          <img src={logo} alt="choice-logo" />
          <Button>Скачать</Button>
        </div>

        <div className={styles.footerInfo}>
          <div className={styles.footerInfoText}>
            <p>©️Choice 2024<br /> Все права защищены</p>
          </div>
          <div className={styles.footerInfoText}>
            <p>Политика<br /> конфиденциальности</p>
          </div>
        </div>

        <Button style={ {
          borderRadius: "50px",
          width: "30px",
          height: "30px",
          textAlign: "center",
          padding: 0,
        }}
          onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}>
          <i class='bx bx-up-arrow-alt bx-xs'></i>
        </Button>
      </div>
    </div>
  )
}

export { Footer }