import styles from './ProblemScreen.module.scss'

const problems = [
    {
        _id: 1,
        img: 'data:image/jpeg;base64,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',
        problemName: 'Переедание',  
    },

    {
        _id: 2,
        img: 'data:image/jpeg;base64,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',
        problemName: 'Стресс',  
    },

    {
        _id: 3,
        img: 'https://lidanews.by/upload/iblock/c99/c99dc21d43183bc9e6877e26f2ce80a8.jpg',
        problemName: 'Отсутствие мотивации',  
    },

    {
        _id: 4,
        img: 'https://cdnn21.img.ria.ru/images/155180/06/1551800689_0:284:3072:2012_600x0_80_0_0_4341543a33db05df6602162b754a7edf.jpg',
        problemName: 'Плохой сон',  
    },

    {
        _id: 5,
        img: 'https://cdnn21.img.ria.ru/images/155180/06/1551800689_0:284:3072:2012_600x0_80_0_0_4341543a33db05df6602162b754a7edf.jpg',
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