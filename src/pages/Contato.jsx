import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons"
import { faPhoneSquare, faEnvelope } from "@fortawesome/free-solid-svg-icons"

import styles from '../styles/pages/contato.module.css'

export function Contato() {
  function submeterFormulario(e) {
    e.preventDefault();

    alert(`formulario submetido`);    
  }

  return(
    <div className={styles.contatoContainer}>
      <h3 className={styles.titulo}>Fale Conosco</h3>

      <form onSubmit={submeterFormulario}>
        <div className={styles.formulario}>
          <label htmlFor="nome">Nome:</label>
          <input type="text" className={styles.input} name="nome" />

          <label htmlFor="email">E-mail:</label>
          <input type="email" className={styles.input} name="email" />
      
          <label htmlFor="texto">Mensagem:</label>
          <textarea className={styles.areaTexto} name="texto" rows="6"></textarea>
        </div>
        
        <button type="submit" className={styles.botao}>Enviar</button>
      </form>

      <div className={styles.contatoLinksContainer}>
          <div className={styles.contatos}>
            <FontAwesomeIcon icon={faPhoneSquare} size="2x" color="#a39a9ab8" />
            <p className={styles.contatoTelefone}>(83)00000-0000</p>
          </div>
          <div className={styles.contatos}>
            <FontAwesomeIcon icon={faInstagramSquare} size="2x" color="#a39a9ab8"/>
            <a className={styles.contatoInstagram} href="https://www.instagram.com/trans.formacampina/"> /trans-formacampina</a>
          </div>
          <div className={styles.contatos}>
            <FontAwesomeIcon icon={faEnvelope} size="2x" color=" #a39a9ab8"/>
            <p className={styles.contatoEmail}>transformacampina@hotmail.com</p>
          </div>   
      </div>
    </div>
  )
}