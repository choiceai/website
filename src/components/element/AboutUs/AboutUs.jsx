import styles from './AboutUs.module.scss'

const AboutUs = () => {
  return (
    <div className={styles.aboutUs}>
        <div className={styles.container}>
            <h3>Индивидуальное целостное <br /> оздоровительное решение</h3>
            <p>
                С самого начала наша миссия - создать более здоровый мир для всех, независимо от возраста, пола, физических особенностей или происхождения.
            </p>
        </div>
    </div>
  )
}

export { AboutUs }