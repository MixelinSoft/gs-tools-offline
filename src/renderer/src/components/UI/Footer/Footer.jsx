import styles from './Footer.module.css'

const Footer = () => {
  const date = new Date()
  const year = date.getFullYear()

  return <div className={styles.footerContainer}> ©MixelinSoft 2023-{year}</div>
}

export default Footer
