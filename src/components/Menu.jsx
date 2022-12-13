import { Link } from 'react-router-dom'
import styles from '../styles/components/menu.module.css'
import logoImg from '../assets/logo.jpeg'

export function Menu() {
  return(
    <div className={styles.menuContainer}>
    <img className={styles.logo} src={logoImg} />
    <ul className={styles.menuContainer}>
      <li className={styles.menuItem}>
        <Link className={styles.menuLink} to="/">Inicio</Link>
      </li >
      <li className={styles.menuItem}>
        <Link className={styles.menuLink} to="/sobre">Sobre nós</Link>
      </li>
      <li className={styles.menuItem}>
        <Link className={styles.menuLink} to="/doe">Faça sua doação</Link>
      </li>
      <li className={styles.menuItem}>
        <Link className={styles.menuLink} to="/receberdoacao">Quero receber</Link>
      </li>
      <li className={styles.menuItem}>
        <Link className={styles.menuLink} to="/contato">Contato</Link>
      </li>
    </ul>
    </div>
  )
}