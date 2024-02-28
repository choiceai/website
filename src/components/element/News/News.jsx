import { CardNews } from '../../UI/CardNews/CardNews'
import styles from './News.module.scss'

const News = () => {
  return (
    <div className={styles.news}>
        <CardNews name={"Руководство"} src={"https://t.me/Choice_Startupp"}>Как работает AI в нашем приложении?</CardNews>
        <CardNews name={"Амбасадоры"} src={"https://t.me/Choice_Startupp"}>Мнение известных  медиа личностей о Choice</CardNews>
        <CardNews name={"Партнёрства"} src={"https://t.me/Choice_Startupp"}>CEO Choice побывал на ВФМ 2024, результаты</CardNews>
    </div>
  )
}

export { News }