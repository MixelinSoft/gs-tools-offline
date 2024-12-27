import { Link } from 'react-router-dom'
import styles from './AsideMenuItem.module.css'

const AsideMenuItem = ({ closeHandler, slug, name, icon }) => {
  return (
    <Link
      to={slug ? slug : '/'}
      className={styles.link}
      onClick={closeHandler ? closeHandler : null}
    >
      <div className={styles.icon}>{icon ? icon : ''}</div>
      <div className={styles.icon}>{name ? name : ''}</div>
    </Link>
  )
}

export default AsideMenuItem
