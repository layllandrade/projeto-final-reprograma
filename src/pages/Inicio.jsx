import { Header } from "../components/Header";
import styles from "../styles/components/inicio.module.css"
import transImg from '../assets/trans.png'

export function Inicio() {
    return(
      <div className={styles.inicioContainer}>
        <Header titulo="TRANSforma Campina" descricao="O projeto Transforma Campina é um trabalho voluntário, que foi criado no intuito de ajudar pessoas que estão no inicio da transição de gênero e em situação de vulnerabilidade econômica. O projeto tem como proposito arrecadar doações de peças de roupas, calçados e acessórios. Fazendo com que os beneficiados consigam se vestir da forma como o qual se identificam, trazendo assim mais auto estima, apoio e auto confiança para essas pessoas nesse período." imagem={transImg}/>
      </div>
    )
}