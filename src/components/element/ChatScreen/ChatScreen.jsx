import styles from './ChatScreen.module.scss'
import chat from '../../../img/chat.png'

const ChatScreen = () => {
  return (
    <div className={styles.chatSection}>
      <img src={chat} alt="chat" />
    </div>
  )
}

export { ChatScreen }