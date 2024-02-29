import styles from './ProblemScreen.module.scss'

import overeating from '../../../img/overeating.png'
import stress from '../../../img/stress.png'
import unmotivation from '../../../img/unmotivation.png'
import badDream from '../../../img/badDream.png'
import disperson from '../../../img/disperson.png'


const problems = [
    {
        _id: 1,
        img: overeating,
        problemName: 'Переедание',  
    },

    {
        _id: 2,
        img: stress,
        problemName: 'Стресс',  
    },

    {
        _id: 3,
        img: unmotivation,
        problemName: 'Отсутствие мотивации',  
    },

    {
        _id: 4,
        img: badDream,
        problemName: 'Плохой сон',  
    },

    {
        _id: 5,
        img: disperson,
        problemName: 'Ограничения по здровью',  
    }

]

const ProblemScreen = ( {activeProblem, setActiveProblem }) => {
  return (
    <div className={styles.problemScreen}>
        <div className={styles.problemImage}>
            <img src={problems[activeProblem - 1].img} alt={problems[activeProblem - 1].problemName} />
        </div>
        <div className={styles.problemTabs}>
            <h1><span className={styles.yellow}>Решение проблемы</span> с помощью заботы и комплексного внимания к здоровью каждого пользователя</h1>
            { problems.map(problem => (
                <button 
                    key={problem._id} 
                    onClick={() => setActiveProblem(problem._id)} 
                    className={activeProblem === problem._id ? styles.activeProblem : ''}
                    >
                    {problem.problemName}
                </button>
            ))};
        </div>

    </div>
  )
}

export { ProblemScreen }