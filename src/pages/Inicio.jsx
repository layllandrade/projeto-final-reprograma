import { Descricao } from "../components/Descricao";
import { Header } from "../components/Header";
import styles from "../styles/components/inicio.module.css"

export function Inicio() {
    return(
      <div className={styles.inicioContainer}>
        <Header titulo="TRANSforma Campina" descricao="O projeto tranforma"/>
      
        
      </div>
    )
}