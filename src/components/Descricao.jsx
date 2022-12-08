import styles from '../styles/components/descricao.module.css'

export function Descricao(props) {
    return(
      <p className={styles.descricao}>{props.descricao}</p>
    )
}