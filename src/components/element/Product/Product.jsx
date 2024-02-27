import { Button } from '../../UI/Button/Button'
import styles from './Product.module.scss'


const Product = () => {
  return (
    <div className={styles.product}>
        <p className={styles.productHead}>Choice:</p>
        <p className={styles.productUnderHead}>Приложение для коучинга в области здоровья</p>
        <div className={styles.productContent}>
            <div className={styles.productDesc}>
                Универсальное приложение для здоровья с AI тренером, планами питания, счетчиками воды и калорий, программой изменения образа жизни и задачами по уходу за собой.
            </div>
            <Button>Скачать</Button>
        </div>
    </div>
  )
}

export { Product } 