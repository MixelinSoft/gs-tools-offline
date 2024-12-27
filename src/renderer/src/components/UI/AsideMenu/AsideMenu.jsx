import { useDispatch, useSelector } from 'react-redux'
import styles from './AsideMenu.module.css'
import { Link } from 'react-router-dom'
import { Offcanvas } from 'react-bootstrap'
import { uiActions } from '../../../../store/slices/uiSlice'

const AsideMenu = () => {
  // Create Dispatch Function
  const dispatch = useDispatch()
  const closeMenuHandler = () => {
    dispatch(uiActions.asideMenuToggle(false))
  }
  const showMenu = useSelector((state) => state.ui.asideMenuShow)

  return (
    <Offcanvas show={showMenu} onHide={closeMenuHandler}>
      <Link to="/" className={styles.link} onClick={closeMenuHandler}>
        Home
      </Link>
    </Offcanvas>
  )
}

export default AsideMenu
