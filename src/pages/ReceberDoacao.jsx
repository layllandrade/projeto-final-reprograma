import { useState } from 'react';

import styles from '../styles/pages/receberDoacao.module.css'


export function ReceberDoacao() {
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [telefone, setTelefone] = useState("")
  const [idade, setIdade] = useState("")
  const [profissao, setProfissao] = useState("")
  const [endereco, setEndereco] = useState("")

  function submeterFormulario(e) {
    e.preventDefault();

    console.log("Valores dos formulários")
    console.log("nome = " + nome)
    console.log("email = " + email)
    console.log("telefone = " + telefone)
    console.log("idade = " + idade)
    console.log("profissao = " + profissao)
    console.log("endereco = " + endereco)

  }
    return(
      <div className={styles.receberContainer}>
        <form onSubmit={submeterFormulario}>
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
          </div>

          <button type="submit" className={styles.botao}>Enviar</button>
        </form>
      </div>
    
    )
}