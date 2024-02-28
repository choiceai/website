import styles from './Team.module.scss'

import ivanFace from '../../../img/ivan.png'
import bulatFace from '../../../img/bulat.png'
import ilyasFace from '../../../img/ilyas.png'
import grishaFace from '../../../img/grisha.png'
import kirillFace from '../../../img/kirill.png'
import amirFace from '../../../img/amir.png'
import alikhanFace from '../../../img/alikhan.png'
import daniilFace from '../../../img/daniil.png'

import ivanInfo from '../../../img/ivanInfo.png'
import bulatInfo from '../../../img/bulatInfo.png'
import grishaInfo from '../../../img/grishaInfo.png'
import kirillInfo from '../../../img/kirillInfo.png'
import amirInfo from '../../../img/amirInfo.png'
import alikhanInfo from '../../../img/alikhanInfo.png'
import daniilInfo from '../../../img/daniilInfo.png'

import { TeamMemberCard } from '../../UI/TeamMemberCard/TeamMemberCard'


const Team = () => {
  return (
    <div className={styles.team}>
        <div>
            <TeamMemberCard name={"Амир Полатбеков"} post={"AI разработчик"} face={amirFace} info={amirInfo} />
            <TeamMemberCard name={"Григорий Пислегин"} post={"3D аниматор, co-founder"} face={grishaFace} info={grishaInfo} />
        </div>
        <div>
            <TeamMemberCard name={"Алихан Жарболов"} post={"AI разработчик"} face={alikhanFace} info={alikhanInfo} />
            <TeamMemberCard name={"Иван Жиляков"} post={"CEO, маркетолог, co-founder"} face={ivanFace} info={ivanInfo} />
            <TeamMemberCard name={"Кирилл Суменков"} post={"UI/UX дизайнер"} face={kirillFace} info={kirillInfo} />
        </div>
        <div>
            <TeamMemberCard name={"Булат Татлыбаев"} post={"Android разработчик"} face={bulatFace} info={bulatInfo} />
            <TeamMemberCard name={"Даниил Вишницкий"} post={"Аналитик"} face={daniilFace} info={daniilInfo} />
        </div>
    </div>
  )
}

export { Team }