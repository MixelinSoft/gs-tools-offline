import styles from './BurgerButton.module.css'
import { HiOutlineMenuAlt1 } from 'react-icons/hi'

const BurgerButton = () => {
  const burgerButtonHandler = () => {
    console.log('Burger button clicked')
  }

  return (
    <button className={styles.burgerButton} onClick={burgerButtonHandler}>
      <HiOutlineMenuAlt1 className={styles.burgerButtonIcon} />
    </button>
  )
}

export default BurgerButton
