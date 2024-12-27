import BurgerButton from './BurgerButton/BurgerButton'
import styles from './Header.module.css'
import Logo from './Logo/Logo'

const Header = (props) => {
  return (
    <div className={styles.headerContainer}>
      <Logo />
      <BurgerButton />
    </div>
  )
}

export default Header
