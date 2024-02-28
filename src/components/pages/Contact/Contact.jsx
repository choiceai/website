import styles from './Contact.module.scss'

import { Header } from '../../element/Header/Header'
import { Footer } from "../../element/Footer/Footer"
import { OneContact } from '../../element/OneContact/OneContact'


const Contact = ({ toogleMenu }) => {
  return (
    <div className={styles.contact}>
        <section className={styles.contactSection}>
            <div className={styles.container}>
                <Header toogleMenu={toogleMenu}/>
                <h3 className={styles.screenHeader}>Контакты</h3>
                <div className={styles.contacts}>
                    <OneContact head={"Написать CEO"}>ceoceo@choice</OneContact>
                    <OneContact head={"Контактная почта"}>pochtacompany@choice</OneContact>
                    <OneContact head={"Почта компании"}>pochtacompany@choice</OneContact>
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

export { Contact }