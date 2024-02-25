import { Button } from '../../UI/Button/Button'
import marker from '../../../img/marker.svg'
import styles from './Offer.module.scss'

const Offer = ({ offerName, description, items}) => {
  return (
    <div className={styles.offer}>
        <div className={styles.offerName}>
            {offerName}
        </div>
        <div className={styles.offerDescription}>
            {description}
        </div>
        <div className={styles.offerItems}>
            {
                Object.keys(items).map((key, index) => ( 
                    <div className={styles.offerItem} key={index}> 
                        <img src={marker} alt="marker" />
                        <p className={styles.paragraph}><span className={styles.yellow}>{key}</span> {items[key]} </p>
                    </div> 
                ))
            }
        </div>
        <Button>Зарегистрироваться</Button>
    </div>
  )
}

export default Offer