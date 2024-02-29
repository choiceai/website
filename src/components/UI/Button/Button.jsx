import styles from './Button.module.scss'

const Button = ({ children, style, onClick }) => {
  return (
    <button onClick={onClick} style={style} className={styles.mainBtn}>
        { children }
    </button>
  )
}

export { Button }