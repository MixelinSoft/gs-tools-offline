import { useSelector } from 'react-redux'
import styles from './AsideMenu.module.css'
import { Link } from 'react-router-dom'

const AsideMenu = () => {
  const showMenu = useSelector((state) => state.ui.asideMenuShow)

  return (
    <div className={`${styles.asideMenuContainer} ${showMenu ? styles.show : ''}`}>
      <Link to="/" className={styles.menuItem}>
        Home
      </Link>
    </div>
  )
}

export default AsideMenu
