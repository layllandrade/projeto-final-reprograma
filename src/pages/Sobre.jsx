import styles from '../styles/pages/sobre.module.css'
import layllaImg from '../assets/laylla.jpeg'

export function Sobre() {
  return(
    <div className={styles.sobreContainer}>
      <p className={styles.sobreParagrafo}>Somos um grupo de amigos de Campina Grande, na Paraiba, que se juntou para criar esse trabalho voluntário. Sabemos que se trata de um grupo minoritário que tem bastante dificuldade pra renovar o guarda roupa quando inicia a transição, seja por falta de dinheiro, apoio ou preconceito. Devido a esses fatores, resolvemos mudar um pouco da realidade das pessoas em inicio de transição e sem muitas condicões financeiras.</p>
      <h2 className={styles.titulo}>Um pouco mais sobre nós</h2>
      <div className={styles.sobreContainerVoluntarios}>
        <img className={styles.imgVoluntarios} src={layllaImg}/>
        <p className={styles.descricaoVoluntarios}>Me chamo Laylla Andrade, tenhos 26 anos e sou a idealizadora do projeto TRANSforma Campina.</p>
      </div>
      <div className={styles.sobreContainerVoluntarios}>
        <p className={styles.descricaoVoluntarios}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis quisquam maiores nihil, odio excepturi labore officiis eius. Possimus quae ea cupiditate! Hic molestias illum doloribus unde cupiditate eos dolores officiis!</p>
        <img className={styles.imgVoluntarios} src={layllaImg}/>
      </div>
      <div className={styles.sobreContainerVoluntarios}>
        <img className={styles.imgVoluntarios} src={layllaImg}/>
        <p className={styles.descricaoVoluntarios}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis quisquam maiores nihil, odio excepturi labore officiis eius. Possimus quae ea cupiditate! Hic molestias illum doloribus unde cupiditate eos dolores officiis!</p>
      </div>
      <div className={styles.sobreContainerVoluntarios}>
        <p className={styles.descricaoVoluntarios}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis quisquam maiores nihil, odio excepturi labore officiis eius. Possimus quae ea cupiditate! Hic molestias illum doloribus unde cupiditate eos dolores officiis!</p>
        <img className={styles.imgVoluntarios} src={layllaImg}/>
      </div>
    </div>
  )
}