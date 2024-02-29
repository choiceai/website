import styles from './MenuFooter.module.scss'

const MenuFooter = () => {
  return (
    <div className={styles.menuFooter}>
        <p>©️Choice 2024 <br /> Все права защищены</p>
        <p>Политика <br /> конфиденциальности</p>
    </div>
  )
}

export { MenuFooter }