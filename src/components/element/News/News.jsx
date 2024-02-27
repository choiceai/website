import { CardNews } from '../../UI/CardNews/CardNews'
import styles from './News.module.scss'

const News = () => {
  return (
    <div className={styles.news}>
        <CardNews name={"Руководство"}>Как работает AI в нашем приложении?</CardNews>
        <CardNews name={"Амбасадоры"}>Мнение известных  медиа личностей о Choice</CardNews>
        <CardNews name={"Партнёрства"}>CEO Choice побывал на ВФМ 2024, результаты</CardNews>
    </div>
  )
}

export { News }