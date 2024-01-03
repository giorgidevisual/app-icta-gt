import styles from './gridSituacionCultivo.module.css'
import Image from 'next/image'

export const GridSituacionCultivo = () => {
  return (
    <section className={styles.grid_layout}>
      <div className={styles.containerGrid}>
        <h1 className={styles.title}>Situación del <span className={styles['title--color']}>cultivo</span></h1>
        <p className={styles.description}>El programa de Protección Vegetal, a través de la investigación científica y tecnológica innovadora, se enfoca en el estudio y control de plagas como: insectos, malezas, hongos, bacterias, virus y nemátodos que causan pérdidas en la productividad de los cultivos de importancia económica del país.</p>
      </div>
      <div className={styles['containerGrid--card']}>
        <p className={styles['description--card']}><b> Diversos factores bióticos y abióticos</b><br/>Generan una productividad limitada y pérdidas económicas a los productores del país. Además de la escasa transferencia de tecnología, el limitado acceso a semillas mejoradas y la alta presión de plagas y enfermedades sobre los cultivares.</p>
      </div>
      <div className={styles['containerGrid--card']}>
        <p className={styles['description--card']}><b>El propósito del Programa de Protección Vegetal</b><br/>Es generar conocimiento sobre las principales plagas y enfermedades, y poner a disposición de los sectores productivos información, que les permitan obtener una mayor producción y una mejor calidad de los productos.</p>
      </div>
      <div className={styles.containerGrid}>
        <Image  src='https://picsum.photos/id/66/1080/480' width={405} height={273} alt='foto' style={{objectFit: "cover"}} />
      </div>
      <div className={styles['containerGrid--card']}>
        <p className={styles['description--card']}><b>Las áreas de investigación que se abordan incluyen:</b><br/>Metodologías de diagnóstico, interacciones planta-organismo, diversidad y estructura de poblaciones, dinámica de poblaciones, diagnóstico y desarrollo de estrategias para el manejo de las plagas que afectan a los diferentes cultivos. Las investigaciones se realizan tanto a nivel de campo como en condiciones controladas.</p>
      </div>
      <div className={styles.containerGrid}>
        <p className={styles.description}>Se trabaja en conjunto con los diferentes programas y disciplinas del ICTA. Lo cual permite impactar a diferentes sectores productivos con la información generada, de forma positiva.</p>
      </div>
    </section>
  )
}
