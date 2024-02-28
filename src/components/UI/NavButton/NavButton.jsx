import styles from './NavButton.module.scss'

const NavButton = ({ children, onClick, style, className }) => {
  console.log(onClick)
  return (
    <button style={style} onClick={onClick} className={className}>
        { children }
    </button>
  )
}

export { NavButton }