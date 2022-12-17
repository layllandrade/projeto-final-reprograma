import { useState } from 'react';

import styles from '../styles/pages/receberDoacao.module.css'


export function ReceberDoacao() {
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [telefone, setTelefone] = useState("")
  const [idade, setIdade] = useState("")
  const [profissao, setProfissao] = useState("")
  const [endereco, setEndereco] = useState("")
  const [genero, setGenero] = useState("")

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
    <div className={styles.receberContainer}>
      <form onSubmit={submeterFormulario}>
        <h3 className={styles.titulo}>Preencha os campos com seus dados:</h3>
        <div className={styles.formulario}>          
          <label htmlFor="nome">Nome:</label>
          <input type="text" className={styles.input} name="nome" value={nome} onChange={e => setNome(e.target.value)}/>
          
          <label htmlFor="email">E-mail:</label>
          <input type="email" className={styles.input} name="email" value={email} onChange={e => setEmail(e.target.value)}/>          
          
          <label htmlFor="endereco">Endereço:</label>
          <input type="endereco" className={styles.input} name="endereco" value={endereco} onChange={e => setEndereco(e.target.value)}/>
        
          <label htmlFor="profissao">Profissão:</label>
          <input type="profissao" className={styles.profissao} name="profissao" value={profissao} onChange={e => setProfissao(e.target.value)}/>

          <label htmlFor="telefone">Telefone:</label>
          <input type="telefone" className={styles.telefone} name="telefone" value={telefone} onChange={e => setTelefone(e.target.value)}/>

          <label htmlFor="idade">Idade:</label>
          <input type="idade" className={styles.idade} name="idade" value={idade} onChange={e => setIdade(e.target.value)}/>
          
          <label htmlFor="genero">Tenho interesse em peças do gênero:</label>
          <select name="genero" value={genero} onChange={e => setGenero(e.target.value)}>
            <option value="">Selecione o gênero</option>
            <option value="Feminino">Feminino</option>
            <option value="Masculino">Masculino</option>
            <option value="Fluido">Gênero fluido</option>   
          </select>
        </div>

        <button type="submit" className={styles.botao}>Enviar</button>
      </form>
      <dialog open={modalAberto} className={styles.dialog}>
        <h4>Você confirma as informações abaixo?</h4>
        <p>Nome: {nome}</p>
        <p>Email: {email}</p>
        <p>Endereço: {endereco}</p>
        <p>Profissão: {profissao}</p>
        <p>Telefone: {telefone}</p>
        <p>Idade: {idade}</p>
        <p>Gênero: {genero}</p>

        <div className={styles.containerBotoes}>
          <button type="button" className={styles.botaoFechar} onClick={fecharModal}>Fechar</button>
          <button type="button" className={styles.botaoConfirmar} onClick={confirmar}>Confirmar</button>
        </div>
      </dialog>
    </div>
  )
}