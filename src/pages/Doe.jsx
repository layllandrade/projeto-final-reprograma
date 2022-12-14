import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWhatsappSquare } from "@fortawesome/free-brands-svg-icons"

import styles from '../styles/pages/doe.module.css'

export function Doe() {
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [telefone, setTelefone] = useState("")
  const [enderecoColeta, setEnderecoColeta] = useState("")

  const enderecos = [
    { 
      id: 1, 
      endereco: "Deputado Raimundo Asfora", 
      numero: "14", 
      bairro: "Serrotão", 
      cep: "58420000", 
      email: "crasmutiraocg@hotmail.com", 
      telefone: "8333332800" 
    },
    { 
      id: 2, 
      endereco: "Manoel Leite Cavalcante", 
      numero: "88", 
      bairro: "Palmeira", 
      cep: "58401000", 
      email: "craspalmeiracg@gmail.com", 
      telefone: "8333106668" 
    },
    { 
      id: 3, 
      endereco:	"Oscar Guedes De Moura",
      numero:	"35",
      bairro:	"Universitário",
      cep:	"58429073",
      email:	"craspedregalcg@gmail.com",
      telefone:	"8333107014"
    },
    { 
      id: 4, 
      endereco:	"Rua das Quixabeiras",
      numero:	"S/N",
      bairro:	"Malvinas",
      cep:	"58432593",
      email:	"crasramadinhacg@gmail.com",
      telefone:	"8333107060"
    },
    { 
      id: 5, 
      endereco:	"Minas Gerais",
      numero:	"430",
      bairro:	"Liberdade",
      cep:	"58414010",
      email:	"crasliberdadecg@gmail.com",
      telefone:	"8333316673"
    },
    {
      id: 6, 
      endereco:	"Francisco Antônio do Nascimento",
      numero:	"750",
      bairro:	"Nova Brasília",
      cep:	"58406590",
      email:	"crasgloriacg@gmail.com",
      telefone:	"8333433059"
    },
    {
      id: 7, 
      endereco:	"Manoel De Freitas Ramos",
      numero:	"218",
      bairro:	"Cruzeiro",
      cep:	"58414315",
      email:	"crasborboremacg@gmail.com",
      telefone:	"8333359792"
    },
    {
      id: 8, 
      endereco:	"Gaston de Oliveira Gonzaga",
      numero:	"335",
      bairro:	"Três Irmãs",
      cep:	"58423533",
      email:	"crastresirmascg@gmail.com",
      telefone:	"8333107086"
    },
  ]

  
  function submeterFormulario(e) {
    e.preventDefault();

    console.log("Valores dos formulários")
    console.log("nome = " + nome)
    console.log("email = " + email)
    console.log("telefone = " + telefone)
    console.log("endereço = " + enderecoColeta)

    // Pega a coleção de endereços e faz um filtro a partir do endereço de coleta selecionado
    const enderecoSelecionado = enderecos.filter((elemento) => elemento.id == enderecoColeta)[0]
  }

  return(
    <div className={styles.doeContainer}> 
      <form onSubmit={submeterFormulario}>
      <h3 className={styles.tituloFormulario}> Preencha os campos com seus dados: </h3>  
        <div className={styles.formulario}>        
          <label htmlFor="nome">Nome:</label>
          <input type="text" className={styles.input} name="nome" value={nome} onChange={e => setNome(e.target.value)}/>

          <label htmlFor="email">E-mail:</label>
          <input type="email" className={styles.input} name="email" value={email} onChange={e => setEmail(e.target.value)}/>
          
          <label htmlFor="telefone">Telefone:</label>
          <input type="text" className={styles.input} name="telefone" value={telefone} onChange={e => setTelefone(e.target.value)}/>

          <label htmlFor="enderecoColeta">Endereço da coleta:</label>
          <select name="enderecoColeta" value={enderecoColeta} onChange={e => setEnderecoColeta(e.target.value)}>
            <option value="">Selecione o endereço da coleta</option>
            { enderecos.map((endereco) => 
              <option key={endereco.id} value={endereco.id}>
                {endereco.endereco + ", " + endereco.numero + " - " + endereco.bairro}
              </option>) 
            }
          </select>
        </div>
        <h3>Escolha a quantidade de peças de acordo com a quantidade:</h3>
        <div className={styles.formulario}>
          <label htmlFor="nome">Roupas</label>
          <input type="number" className={styles.inputNumber} min="0" name="nome"/>
          <label htmlFor="nome">Calçados</label>
          <input type="number" className={styles.inputNumber} min="0" name="nome"/>
          <label htmlFor="nome">Acessórios</label>
          <input type="number" className={styles.inputNumber} min="0" name="nome"/>
        </div>
        
        <button type="submit" className={styles.botao}>Enviar</button>
      </form>
      <div className={styles.retiradaContainer}>
        <h3 className={styles.titulo}>Não pode realizar o envio da doação? Entre em contato com um de nossos voluntários e combine a retirada.</h3>
        <div className={styles.contatoContainer}>
          <div className={styles.contato}>
            <FontAwesomeIcon icon={faWhatsappSquare} size="2x" color="#25d366"/>
            <a className={styles.contatoWhatsapp} href="https://api.whatsapp.com/send/?phone=5583986259203&text=Ol%C3%A1%2C+vim+do+transforma+campina&type=phone_number&app_absent=0"> Voluntário 1</a>
          </div>
          <div className={styles.contato}>
            <FontAwesomeIcon icon={faWhatsappSquare} size="2x" color="#25d366"/>
            <a className={styles.contatoWhatsapp} href="https://api.whatsapp.com/send/?phone=5583986259203&text=Ol%C3%A1%2C+vim+do+transforma+campina&type=phone_number&app_absent=0"> Voluntário 2</a>
          </div>
          <div className={styles.contato}>
            <FontAwesomeIcon icon={faWhatsappSquare} size="2x" color="#25d366"/>
            <a className={styles.contatoWhatsapp} href="https://api.whatsapp.com/send/?phone=5583986259203&text=Ol%C3%A1%2C+vim+do+transforma+campina&type=phone_number&app_absent=0"> Voluntário 3</a>
          </div>
        </div>
      </div>
    </div>
  )
}