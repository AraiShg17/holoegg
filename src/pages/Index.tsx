import React, { useState, useEffect } from "react";

import styles from "../scss/page/Index.module.scss";

import image from "../assets/chara-egg.svg";

import Hungry from "../components/hungry/Hungry";
import Life from "../components/life/Life";
import Menu from "../components/menu/Menu";

import { saveTime } from "../ts/saveTime";
import { getFormattedTime } from "../ts/getFormattedTime";
import { getTimeDifference } from "../ts/getTimeDifference";

function Index() {
  const [hhmm, setHhmm] = useState("");
  const [full, setFull] = useState("");
  const [countMinutes, setCountMinutes] = useState(getTimeDifference() || 0);
  const initialHungryPoint = (() => {
    const item = localStorage.getItem("hungryPoint");
    return item !== null ? JSON.parse(item) : 10;
  })();
  const [hungryPoint, setHungryPoint] = useState(Number(initialHungryPoint));
  const initialLifePoint = (() => {
    const item = localStorage.getItem("lifePoint");
    return item !== null ? JSON.parse(item) : 30;
  })();
  const [lifePoint, setLifePoint] = useState(Number(initialLifePoint));
  useEffect(() => {
    const updateTimeAndState = () => {
      saveTime();
      const { hhmm, full } = getFormattedTime();
      setHhmm(hhmm);
      setFull(full);
      let currentCountMinutes = 0;
      setCountMinutes((prevCount) => {
        currentCountMinutes = prevCount + 1;
        return currentCountMinutes;
      });

      // TODO 減った数字(prevLifePoint)からトータルした数字(currentCountMinutes)を減らしてるから減りが早すぎる
      setLifePoint((prevLifePoint) => {
        const newLifePoint = prevLifePoint - currentCountMinutes * 0.007; // 3日で0になる
        return newLifePoint < 0 ? 0 : newLifePoint;
      });
      setHungryPoint((prevHungryPoint) => {
        console.log(currentCountMinutes);
        const newHungryPoint = prevHungryPoint - currentCountMinutes * 0.007; // 1日で0になる
        return newHungryPoint < 0 ? 0 : newHungryPoint;
      });
    };

    updateTimeAndState();

    const intervalId = setInterval(() => {
      updateTimeAndState();
    }, 60 * 10); // 60 * 1000 ms = 1 minute
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    // This code will run every time `lifePoint` changes.
    localStorage.setItem("lifePoint", JSON.stringify(lifePoint));
  }, [lifePoint]); // Dependency array
  useEffect(() => {
    // This code will run every time `hungryPoint` changes.
    localStorage.setItem("hungryPoint", JSON.stringify(hungryPoint));
  }, [hungryPoint]); // Dependency array

  return (
    <div className={styles.index}>
      <button
        onClick={() => {
          localStorage.removeItem("hungryPoint"); //ご飯食べたらリセット
          localStorage.removeItem("lifePoint"); //寝たらリセット
          location.reload();
        }}
      >
        LocalStorageをリセットする
      </button>
      最終ログインから{countMinutes}分経過 {hungryPoint} - {lifePoint}
      <div className={styles.index__header}>
        <time className={styles.index__header__time} dateTime={full}>
          {hhmm}
        </time>
        <div className={styles.index__header__bar}>
          <div className={styles.index__header__bar__hungry}>
            <Hungry value={hungryPoint} />
          </div>
          <div className={styles.index__header__bar__life}>
            <Life value={lifePoint} />
          </div>
        </div>
      </div>
      <div className={styles.index__main}>
        <img src={image} alt="" />
      </div>
      <Menu />
    </div>
  );
}

export default Index;
