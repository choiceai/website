import { Button } from '../../UI/Button/Button'
import styles from './OneContact.module.scss'

const OneContact = ({ children, head}) => {
  return (
    <div className={styles.oneContact}>
        <div className={styles.contactHead}>
            {head}
        </div>
        
        <div className={styles.contactContent}>
            <div className={styles.email}>
                <a className={styles.emailLink} href={ "mailto:" + children }>
                    {children}
                </a>
            </div>
            <a className={styles.emailLink} href={ "mailto:" + children }>
                <Button style={ {
                    width: "50px",
                    height: "50px",
                    borderRadius: "50px",
                    padding: "0",
                } }>
                    <i className="bx bx-right-arrow-alt bx-md"></i>
                </Button>
            </a>
        </div>
    </div>
  )
}

export { OneContact }