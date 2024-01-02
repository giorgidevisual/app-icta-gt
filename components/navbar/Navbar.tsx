import styles from './navbar.module.css'

export const Navbar = () => {
  return (
    <nav className={styles['wrapper-navbar']}>
        <picture className={styles.navbar__logo} >
          <img className={styles['navbar__logo-embed']} src="/images/Logo.svg" alt="Logo" />
        </picture>
        <div className={styles.navbar__container}>
          <span className={styles['navbar__container--title']}>Instituto de Ciencia y Tecnología Agrícolas</span>
          <span className={styles['navbar__container--subtitle']}>&quot;Investigación para el desarrollo agrícola&quot;</span>
        </div>
      <button className={styles.navbar__button}>Contáctanos</button>
    </nav>
  )
}
