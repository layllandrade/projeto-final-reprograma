import { Link } from 'react-router-dom'

export function Menu() {
  return(
    <ul>
      <li>
        <Link to="/">Inicio</Link>
      </li>
      <li>
        <Link to="/sobre">Sobre nós</Link>
      </li>
      <li>
        <Link to="/doe">Faça sua doação</Link>
      </li>
      <li>
        <Link to="/queroreceber">Quero receber</Link>
      </li>
      <li>
        <Link to="/contato">Contato</Link>
      </li>
    </ul>
  )
}