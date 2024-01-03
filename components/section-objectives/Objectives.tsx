import styles from './objectives.module.css';
import Image from 'next/image';
import { IoCheckmarkCircleOutline } from "react-icons/io5";

export const Objectives = () => {
  return (
    <section className={styles.objetivesContainer}>
      <div className={styles.objetivesColOne}>
        <div className={styles.wrapperArticle}>
          <article className={styles.articleColOne}>
            <div className={styles.titleContainer}>
              <IoCheckmarkCircleOutline className={styles.icons} />
              <h2 className={styles.title}>Objetivos del Programa</h2>
            </div>
            <p className={styles.text}>
              Generar conocimiento sobre las principales plagas y enfermedades que    afectan los cultivos y poner a disposición de los sectores productivos  las   tecnologías que les permitan obtener una mayor producción y una  mejor    calidad de los productos.
            </p>  
          </article>
          <article className={styles.articleColOne}>
            <div className={styles.titleContainer}>
            <IoCheckmarkCircleOutline className={styles.icons} />
             <h3 className={styles.subTitle}>Objectivos Específicos</h3>
            </div>
            <ul>
              <li className={styles.text}>
                Generar y validar tecnología para el manejo integrado de plagas y     enfermedades de granos básicos, hortalizas y frutales.  
              </li>
              <li className={styles.text}>
                Contribuir a generar información sobre plagas y enfermedades para     entender sus mecanismos y población.
              </li>
            </ul>   
          </article>
        </div>
      </div>
      <div className={styles.objetivesColTwo}>
        <picture className={styles.wrapperPicture}>
          <Image src={'https://picsum.photos/id/77/1080/480'} alt="Icono" width={514} height={448}
            style={
              {
                flexGrow: '1',
                objectFit: 'cover',
                borderRadius: '2rem',
              }
            }
          />
        </picture>
        
      </div>
    </section>
  )
}
