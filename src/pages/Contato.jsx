import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons"
import { faPhoneSquare, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons"
import { useState } from 'react';


import styles from '../styles/pages/contato.module.css'

export function Contato() {
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [mensagem, setMensagem] = useState("")

  const [modalAberto, setModalAberto] = useState(false)

  function submeterFormulario(e) {
    e.preventDefault();
    setModalAberto(true)
  }

  function fecharModal() {
    setModalAberto(false)
    }
  
  function confirmar() {
    fecharModal()
  }

  return(
    <div className={styles.contatoContainer}>
      <div className={styles.faleConoscoContainer}>
        <h3 className={styles.titulo}>Fale Conosco</h3>
        <FontAwesomeIcon icon={faPhone} size="lg" color="#ffabba"/> 
      </div>

      <form onSubmit={submeterFormulario}>
        <div className={styles.formulario}>
          <label htmlFor="nome">Nome:</label>
          <input type="text" className={styles.input} name="nome" value={nome} onChange={e => setNome(e.target.value)} />

          <label htmlFor="email">E-mail:</label>
          <input type="email" className={styles.input} name="email" value={email} onChange={e => setEmail(e.target.value)}/>
      
          <label htmlFor="texto">Mensagem:</label>
          <textarea className={styles.areaTexto} name="texto" rows="6" value={mensagem} onChange={e => setMensagem(e.target.value)}></textarea>
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
      <dialog open={modalAberto} className={styles.dialog}>
        <h4>Você confirma as informações abaixo?</h4>
        <p>Nome: {nome}</p>
        <p>Email: {email}</p>
        <p>Mensagem: {mensagem}</p>

        <div className={styles.containerBotoes}>
          <button type="button" className={styles.botaoFechar} onClick={fecharModal}>Fechar</button>
          <button type="button" className={styles.botaoConfirmar} onClick={confirmar}>Confirmar</button>
        </div>
      </dialog>
    </div>
  )
}