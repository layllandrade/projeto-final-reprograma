import styles from "../styles/components/titulo.module.css"

export function Titulo(props) {
    return(
      <h1 className={styles.titulo}>{props.titulo}</h1>
    )
}