import styles from './NotFound.module.scss'

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <div className={styles.notFoundMessage}>
        К сожалению пока данная страница в разработке<br /> или вы ввели неправильный адрес страницы(...<br /> Вернитесь назад!
      </div>
    </div>
  )
}

export { NotFound }