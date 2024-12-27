import styles from './BurgerButton.module.css'
import { HiOutlineMenuAlt1 } from 'react-icons/hi'
import { uiActions } from '../../../../../store/slices/uiSlice'
import { useDispatch } from 'react-redux'

const BurgerButton = () => {
  // Create Dispatch Function
  const dispatch = useDispatch()
  const burgerButtonHandler = () => {
    dispatch(uiActions.asideMenuToggle())
  }

  return (
    <button className={styles.burgerButton} onClick={burgerButtonHandler}>
      <HiOutlineMenuAlt1 className={styles.burgerButtonIcon} />
    </button>
  )
}

export default BurgerButton
