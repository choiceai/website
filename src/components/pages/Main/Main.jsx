import { Header } from "../../element/Header/Header"
import { MainOffer } from "../../element/MainOffer/MainOffer"
import styles from "./Main.module.scss"
import { SecondScreen } from "../../element/SecondScreen/SecondScreen"
import { DevicesScreen } from "../../element/DevicesScreen/DevicesScreen"
import { MetricScreen } from "../../element/MetricScreen/MetricScreen"
import { TrainerScreen } from "../../element/TrainerScreen/TrainerScreen"
import { ChatScreen } from "../../element/ChatScreen/ChatScreen"
import { ProblemScreen } from "../../element/ProblemScreen/ProblemScreen"
import { useState } from "react"
import { PersonalScreen } from "../../element/PersonalScreen/PersonalScreen"
import { HabbitsScreen } from "../../element/HabbitsScreen/HabbitsScreen"
import { LastCallScreen } from "../../element/LastCallScreen/LastCallScreen"
import { Button } from "../../UI/Button/Button"
import { Footer } from "../../element/Footer/Footer"


const Main = () => {
  const [activeProblem, setActiveProblem] = useState(1);

  return (
    <div className={styles.main}>
        <section className={styles.welcomeSection}>
            <div className={styles.container}>
                <Header />
                <MainOffer />
            </div>
        </section>
        <section className={styles.secondSection}>
            <div className={styles.container}>
                <div className={styles.second}>
                  <SecondScreen />
                </div>
            </div>
        </section>
        <section className={styles.devicesSection}>
            <div className={styles.container}>
                <div className={styles.devices}>
                  <DevicesScreen />
                </div>
            </div>
        </section>
        <section className={styles.metricSection}>
            <div className={styles.container}>
                <div className={styles.metric}>
                  <MetricScreen />
                </div>
            </div>
        </section>
        <section className={styles.trainerSection}>
            <div className={styles.container}>
                <div className={styles.trainer}>
                  <TrainerScreen />
                </div>
            </div>
        </section>
        <section className={styles.problemSection}>
            <div className={styles.container}>
                <div className={styles.problem}>
                  <ProblemScreen activeProblem={activeProblem} setActiveProblem={setActiveProblem}/>
                </div>
            </div>
        </section>
        <section className={styles.chatSection}>
            <div className={styles.container}>
                <div className={styles.chat}>
                  <ChatScreen />
                </div>
            </div>
        </section>
        <section className={styles.personalSection}>
            <div className={styles.container}>
                <div className={styles.personal}>
                  <PersonalScreen />
                </div>
            </div>
        </section>
        <section className={styles.habbitsSection}>
            <div className={styles.container}>
                <div className={styles.habbits}>
                  <HabbitsScreen />
                </div>
            </div>
        </section>
        <section className={styles.lastCallSection}>
            <div className={styles.container}>
                <div className={styles.lastCall}>
                  <LastCallScreen />
                  <Button style={ {width: "600px"} }>Зарегистрироваться</Button>
                </div>
            </div>
        </section>
        <section className={styles.footerSection}>
            <div className={styles.container}>
              <div className={styles.footerInMain}>
                  <Footer />
              </div>
            </div>
        </section>
    </div>
  )
}

export { Main }