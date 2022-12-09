import styles from '../styles/pages/sobre.module.css'
import layllaImg from '../assets/laylla.jpeg'

export function Sobre() {
  return(
    <div className={styles.sobreContainer}>
      <p className={styles.sobreParagrafo}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit ex delectus expedita, eligendi repellendus sunt deserunt adipisci laboriosam et dolorem inventore nam qui distinctio magni amet quaerat voluptatum nihil officia.</p>
      <h2 className={styles.titulo}>Um pouco mais sobre nós</h2>
      <div className={styles.sobreContainerVoluntarios}>
        <img className={styles.imgVoluntarios} src={layllaImg}/>
        <p className={styles.descricaoVoluntarios}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis quisquam maiores nihil, odio excepturi labore officiis eius. Possimus quae ea cupiditate! Hic molestias illum doloribus unde cupiditate eos dolores officiis!</p>
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