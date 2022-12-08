import { Titulo } from "../components/Titulo";
import { Descricao } from '../components/Descricao'

import styles from '../styles/components/header.module.css'

export function Header(props) {
    return(
      <div className={styles.headerContainer}>
        <img className={styles.headerImage} src={props.imagem} />
        <div className={styles.descricaoContainer}>
          <Titulo titulo={props.titulo} />
          <Descricao descricao={props.descricao}/>
        </div>
      </div>
    )
}