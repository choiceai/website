import styles from './TeamMemberCard.module.scss'
import { InfoModal } from '../InfoModal/InfoModal';
import { useState } from 'react'



const TeamMemberCard = ( {name, post, face, info} ) => {
  const [isInfoModalShow, setInfoModalShow] = useState(false);

  const toogleInfoModal = () => {
    setInfoModalShow(!isInfoModalShow)
  }

  return (
    <div className={styles.temMember}>
      <InfoModal info={info} isInfoModalShow={isInfoModalShow} toogleInfoModal={toogleInfoModal}/>
      <div className={styles.teamMemberCard} onClick={toogleInfoModal}>
          <div className={styles.memberFace}>
              <img src={face} alt={name} />
          </div>
          <div className={styles.someInfo}>
              <p className={styles.memberName}>{name}</p>
              <p className={styles.memberPost}>{post}</p>
          </div>
      </div>
    </div>
  )
}

export { TeamMemberCard }