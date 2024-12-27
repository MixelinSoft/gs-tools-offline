import { useDispatch, useSelector } from 'react-redux'
import styles from './AsideMenu.module.css'
import { Link } from 'react-router-dom'
import { Offcanvas } from 'react-bootstrap'
import { uiActions } from '../../../../store/slices/uiSlice'
import AsideMenuItem from './AsideMenuItem/AsideMenuItem'

const AsideMenu = () => {
  // Create Dispatch Function
  const dispatch = useDispatch()
  // Create Close Menu Handler
  const closeMenuHandler = () => {
    dispatch(uiActions.asideMenuToggle(false))
  }
  // Get Show Menu State
  const showMenu = useSelector((state) => state.ui.asideMenuShow)
  // Create Menu
  const menu = [{ name: 'Главная', slug: '/', icon: 'asd' }]

  return (
    <Offcanvas show={showMenu} onHide={closeMenuHandler}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Меню</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {menu.map((menuItem) => (
          <AsideMenuItem
            key={menuItem.slug}
            closeHandler={closeMenuHandler}
            slug={menuItem.slug}
            name={menuItem.name}
          />
        ))}
      </Offcanvas.Body>
    </Offcanvas>
  )
}

export default AsideMenu
