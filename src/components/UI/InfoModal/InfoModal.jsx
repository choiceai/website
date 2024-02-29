import styles from './InfoModal.module.scss'

import { NavButton } from '../../UI/NavButton/NavButton'

const InfoModal = ({ info, isInfoModalShow, toogleInfoModal }) => {

  return (
    <div className={isInfoModalShow ? styles.infoModal + " " + styles.open : styles.infoModal} onClick={toogleInfoModal}>
        <div className={styles.infoModalContent} onClick={e => e.stopPropagation()}>
            <img src={info} alt="member full info" />
            <NavButton className={styles.modalCloseBtn} onClick={toogleInfoModal}><i className="bx bx-x bx-md"></i></NavButton>
        </div>
    </div>
  )
}

export { InfoModal }