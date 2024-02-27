import styles from './NavButton.module.scss'

const NavButton = ({ children, onClick }) => {
  console.log(onClick)
  return (
    <button onClick={onClick}>
        { children }
    </button>
  )
}

export { NavButton }