import { CardNews } from '../../UI/CardNews/CardNews'
import styles from './News.module.scss'

import news1 from '../../../img/news1.png'
import news2 from '../../../img/news2.png'
import news3 from '../../../img/news3.png'


const News = () => {
  return (
    <div className={styles.news}>
        <CardNews name={"Руководство"} src={"https://t.me/Choice_Startupp"} bg={news1} >Как работает AI в нашем приложении?</CardNews>
        <CardNews name={"Амбасадоры"} src={"https://t.me/Choice_Startupp"} bg={news2} >Мнение известных  медиа личностей о Choice</CardNews>
        <CardNews name={"Партнёрства"} src={"https://t.me/Choice_Startupp"} bg={news3} >CEO Choice побывал на ВФМ 2024, результаты</CardNews>
    </div>
  )
}

export { News }