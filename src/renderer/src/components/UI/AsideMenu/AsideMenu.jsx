import { useSelector } from 'react-redux'
import styles from './AsideMenu.module.css'

const AsideMenu = () => {
  const showMenu = useSelector((state) => state.ui.asideMenuShow)

  return (
    <div className={`${styles.asideMenuContainer} ${showMenu ? styles.show : ''}`}>AsideMenu</div>
  )
}

export default AsideMenu
