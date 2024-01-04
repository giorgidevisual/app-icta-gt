import { TbSettingsHeart } from "react-icons/tb";
import { MdDeviceHub, MdEco, MdOutlineAutoStories, MdOutlinePrivacyTip, MdBiotech, MdOutlineAgriculture } from "react-icons/md";
import { IoFileTrayStackedSharp } from "react-icons/io5";
import styles from './cardsProgramFeatures.module.css'

interface cardType  {
  icon: string,
  title: string,
  description: string  
}

export const cardData = [
  {
    icon: <TbSettingsHeart className={styles.icon} />,
    title: 'Generar y validar tecnología',
    description: 'Para el manejo integrado de plagas en diversos cultivos.'
  },
  {
    icon: <MdDeviceHub className={styles.icon}/>,
    title: 'Generar recomendaciones técnicas',
    description: 'Para el control de plagas y enfermedades.'
  },
  {
    icon: <MdEco className={styles.icon} />,
    title: 'Para el control de plagas y enfermedades.',
    description: 'Sobre la diversidad patogénica en diferentes regiones de Guatemala.'
  },
  {
    icon: <MdOutlineAutoStories className={styles.icon}/>,
    title: 'Aislar y estudiar',
    description: 'Para el manejo integrado de plagas en diversos cultivos.'
  },
  {
    icon: <MdOutlinePrivacyTip className={styles.icon}/>,
    title: 'Determinar la virulencia',
    description: 'De razas patogénicas caracterizadas para diferentes cultivos.'
  },
  {
    icon: <IoFileTrayStackedSharp className={styles.icon}/>,
    title: 'Generar información',
    description: 'Sobre los posibles genes confirieron resistencia a las distintas razas caracterizadas de patógenos.'
  },
  {
    icon: <MdBiotech className={styles.icon}/>,
    title: 'Diagnosticar la presencia de virus',
    description: 'En diversos cultivos mediante el uso de ELISA y PCR u otros métodos moleculares.'
  },
  {
    icon: <MdOutlineAgriculture className={styles.icon}/>,
    title: 'Estudiar la dinámica poblacional',
    description: 'De las principales plagas y determinar los cambios de las mismas a través del tiempo.'
  },
]


export const CardsProgramFeatures = ({...cardData}) => {
  
  return (
    <div className={styles.card}>
      <div className={styles.icon}>{cardData.icon}</div>
      <h4 className={styles.titleCard}><b>{cardData.title}</b></h4>
      <p className={styles.description}>{cardData.description}</p>
    </div>
  )
}
