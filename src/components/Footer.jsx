import styles from '../styles/components/footer.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons"

export function Footer() {
    return (
      <footer className={styles.footerContainer}>
        <div className={styles.footerTextContainer}>
          <p className={styles.footerText}>
            Feito com ♡ por Laylla Andrade
          </p>
        </div>
        <div className={styles.footerIconsContainer}>
          <div className={styles.footerIcons}>
            <FontAwesomeIcon className={styles.fa} icon={faLinkedin} size="3x" color="white" />
            <a className={styles.footerIconsLink} href="https://www.linkedin.com/in/laylla-farias/">/laylla-farias</a>
          </div>
          <div className={styles.footerIcons}>
            <FontAwesomeIcon className={styles.fa} icon={faGithubSquare} size="3x" color="white"/>
            <a className={styles.footerIconsLink} href="https://github.com/layllandrade">/layllandrade</a>
          </div>
        </div>
      </footer>
    )
  }