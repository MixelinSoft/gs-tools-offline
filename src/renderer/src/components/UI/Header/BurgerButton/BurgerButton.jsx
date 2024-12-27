import styles from './BurgerButton.module.css'
import { HiOutlineMenuAlt1 } from 'react-icons/hi'
import { uiActions } from '../../../../../store/slices/uiSlice'
import { useDispatch } from 'react-redux'

const BurgerButton = () => {
  // Create Dispatch Function
  const dispatch = useDispatch()
  const showMenuHandler = () => {
    dispatch(uiActions.asideMenuToggle(true))
  }

  return (
    <button className={styles.burgerButton} onClick={showMenuHandler}>
      <HiOutlineMenuAlt1 className={styles.burgerButtonIcon} />
    </button>
  )
}

export default BurgerButton
