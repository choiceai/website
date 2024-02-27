import styles from './NavButton.module.scss'

const NavButton = ({ children, onClick, style }) => {
  console.log(onClick)
  return (
    <button style={style} onClick={onClick}>
        { children }
    </button>
  )
}

export { NavButton }