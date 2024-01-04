import { TbSettingsHeart } from "react-icons/tb";
import { MdDeviceHub, MdEco, MdOutlineAutoStories, MdOutlinePrivacyTip} from "react-icons/md";
import styles from './cardTiposInvestigaciones.module.css'

interface cardType  {
  icon: string,
  name: string,
  url: string 
  colorbackground: string
}

export const cardData = [
  {
    icon: <TbSettingsHeart className={styles.icon} />,
    name: 'Frijol',
    url: 'Para el manejo integrado de plagas en diversos cultivos.',
    colorBackground: <span className={styles['background--01']}></span>
  },
  {
    icon: <MdDeviceHub className={styles.icon}/>,
    name: 'Maíz',
    url: 'Para el control de plagas y enfermedades.',
    colorBackground: <span className={styles['background--02']}></span>,
  },
  {
    icon: <MdEco className={styles.icon} />,
    name: 'Papa',
    url: 'Sobre la diversidad patogénica en diferentes regiones de Guatemala.',
    colorBackground: <span className={styles['background--01']}></span>,
  },
  {
    icon: <MdOutlineAutoStories className={styles.icon}/>,
    name: 'Yuca',
    url: 'Para el manejo integrado de plagas en diversos cultivos.',
    colorBackground: <span className={styles['background--02']}></span>,
  },
  {
    icon: <MdOutlinePrivacyTip className={styles.icon}/>,
    name: 'Aguacate',
    url: 'De razas patogénicas caracterizadas para diferentes cultivos.',
    colorBackground: <span className={styles['background--01']}></span>,
  },
]


export const CardTiposInvestigaciones = ({...cardData}) => {
  
  return (
    <div className={styles.card}>
      <div className={styles.icon}>
        {cardData.colorBackground}
        {cardData.icon}
      </div>
      <h4 className={styles.nameCard}><b>{cardData.name}</b></h4>
    </div>
  )
}
