import { Header } from "../components/Header";
import styles from "../styles/components/inicio.module.css"
import transImg from '../assets/trans.png'

export function Inicio() {
    return(
      <div className={styles.inicioContainer}>
        <Header titulo="TRANSforma Campina" descricao="O projeto tranforma" imagem={transImg}/>
      </div>
    )
}