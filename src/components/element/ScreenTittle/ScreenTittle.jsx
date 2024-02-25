import styles from './ScreenTittle.module.scss'

const ScreenTittle = ({ children, card }) => {
  return (
    <div className={styles.screenTittle}>
        {children}
        <img src={card} alt="" />
    </div>
  )
}

export { ScreenTittle }