import styles from './About.module.scss'

import { Header } from '../../element/Header/Header'
import { Footer } from "../../element/Footer/Footer"
import { AboutUs } from '../../element/AboutUs/AboutUs'
import { Mission } from '../../element/Mission/Mission'
import { MissionText } from '../../element/MissionText/MissionText'
import { Product } from '../../element/Product/Product'
import { Ceo } from '../../element/Ceo/Ceo'
import { Invest } from '../../element/Invest/Invest'
import { News } from '../../element/News/News'
import { Team } from '../../element/Team/Team'


const About = ({ toogleMenu }) => {
  return (
    
    <div className={styles.about}>
      <div className={styles.container}>
        <Header toogleMenu={toogleMenu}/>
        <h3 className={styles.screenHeader}>О нас</h3>
      </div>
      <section className={styles.aboutUsSection}>
        <AboutUs />
      </section>

      <section className={styles.missionSection}>
        <div className={styles.container}>
          <h3 className={styles.screenHeader}>Миссия и Видение</h3>
          <div className={styles.missionCards}>
            <Mission />
          </div>
        </div>
        <div className={styles.missionText}>
          <div className={styles.container}>
            <MissionText />
          </div>
        </div>
      </section>

      <div className={styles.container}>
        <h3 className={styles.screenHeader}>Продукт Choice</h3>
      </div>
      <section className={styles.productSection}>
        <div className={styles.container}>
          <div className={styles.product}>
            <Product />
          </div>
        </div>
      </section>

      <section className={styles.ceoSection}>
        <div className={styles.container}>
          <div className={styles.ceo}>
            <Ceo />
          </div>
        </div>
      </section>

      <div className={styles.container}>
        <h3 className={styles.screenHeader}>План развития</h3>
      </div>
      <section className={styles.roadmapSection}>
      </section>

      <section className={styles.investSection}>
        <div className={styles.container}>
          <div className={styles.invest}>
            <h3 className={styles.screenHeader}>Требуемые инвестиции</h3>
            <Invest />
          </div>
        </div>
      </section>

      <section className={styles.teamSection}>
        <div className={styles.container}>
          <div className={styles.team}>
            <h3 className={styles.screenHeader}>Команда и мотивация</h3>
            <Team />
          </div>
        </div>
      </section>

      <section className={styles.newsSection}>
        <div className={styles.container}>
          <div className={styles.news}>
            <h3 className={styles.screenHeader}>Новости и партнёрства</h3>
            <News />
          </div>
        </div>
      </section>

      <section className={styles.footerSection}>
        <div className={styles.container}>
          <div className={styles.footerInMain}>
            <Footer />
          </div>
        </div>
      </section>

    </div>
  )
}

export { About }