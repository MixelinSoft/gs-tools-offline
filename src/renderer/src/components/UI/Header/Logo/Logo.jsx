import styles from './Logo.module.css'
import logoImage from '../../../../assets/images/logo_mobile30px.png'

const Logo = (props) => {
  return (
    <div className={styles.logoContainer}>
      <img className={styles.logoImage} src={logoImage} alt="" />
    </div>
  )
}

export default Logo
