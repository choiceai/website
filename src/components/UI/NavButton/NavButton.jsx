import styles from './NavButton.module.scss'

const NavButton = ({ children }) => {
  return (
    <button>
        { children }
    </button>
  )
}

export { NavButton }