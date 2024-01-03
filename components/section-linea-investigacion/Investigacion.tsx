import styles from './investigacion.module.css';

export const Investigacion = () => {
  return (
    <section className={styles.investigacionContainer}>
      <div className={styles.containers}>
        <h2 className={styles.title}>Línea de <span className={styles['title--color']}>investigación</span></h2>
      </div>
      <div className={styles.containers}>
        <p className={styles.text}>
          El Programa de Protección Vegetal provee tecnologías agrícolas generadas y validadas para incrementar la productividad en las agrocadenas.
        </p>
        <p className={styles.text}>
          Las áreas de investigación que se abordan incluyen metodologías de diagnóstico, interacciones planta-organismo, taxonomía, diversidad y estructura de poblaciones, dinámica de poblaciones, evaluación de situaciones de plagas.
        </p>  
        <p className={styles.text}>
          Se desarrollan estrategias para el manejo de las plagas que afectan a los diferentes cultivos, de los programas que constituyen al ICTA.
        </p>
      </div>
      <div className={styles.containers}>
        <p className={styles.text}>
          Dado a que la disciplina trabaja con diferentes programas del ICTA, existen diferentes actividades y objetivos a alcanzar.
        </p>  
        <p className={styles.text}>
          Según los requerimientos de los programas, se detallan a continuación las investigaciones que se están realizando y están por desarrollarse al año 2025.
        </p>
      </div>
    </section>
  )
}
