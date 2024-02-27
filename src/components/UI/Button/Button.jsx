import styles from './Button.module.scss'

const Button = ({ children, style, toogleMenu }) => {
  return (
    <button onClick={toogleMenu} style={style} className={styles.mainBtn}>
        { children }
    </button>
  )
}

export { Button }