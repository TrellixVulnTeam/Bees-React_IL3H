import React, { useState } from "react";
import beeIcon from "../images/bee.png";
import "../sass/Bee.scss";

export default function Bee(props) {
  let [score, setScore] = useState(props.initialValues.initialScore);
  let [attackValue, setAttackValue] = useState(
    props.initialValues.attackNumber
  );
  let [message, setMessage] = useState();
  let [healthIcon, setHealthIcon] = useState("❤️");

  //THIS UPDATES THE VALUE OF SCORE WITH EACH HIT
  function handleAttack(event) {
    event.preventDefault();
    if (score) {
      setScore(score - attackValue);
      score <= 0 ? setScore(0) : setScore(score - attackValue);
      console.log(score);
      return score;
    } else {
      setScore(0);
      return score;
    }
  }

  //GENERATES RANDOM
  function getRandomNumber(event) {
    event.preventDefault();
    setAttackValue(Math.trunc(Math.random() * 100) + 1);
  }

  //RETURNS RESPONSE WHEN LOOSING
  function Lost(score) {
    setHealthIcon("💔");
    setScore();
    return setMessage(`DEAD 😵❗️ YOU SCORED ${score}%`);
  }

  //EACH CONDITIONAL SCENARIO
  if (props.name === "Workers" && score <= 70) {
    Lost(score);
  } else if (props.name === "Drones" && score <= 50) {
    Lost(score);
  } else if (props.name === "The Queen" && score <= 20) {
    Lost(score);
  }

  //FUNCTION RESTORES INITIAL VALUES
  function Reset(event) {
    event.preventDefault();
    setScore(props.initialValues.initialScore);
    setAttackValue(props.initialValues.attackNumber);
    setMessage("");
    setHealthIcon("❤️");
  }
  return (
    <div className='Bee'>
      <h1 className='Bee__title'>{props.name}</h1>
      <div className='Bee__img-wrapper'>
        <img src={beeIcon} alt='little bee' className='Bee__img-logo' />
      </div>
      <h1 className='Bee__header'>
        {healthIcon} {score}%
      </h1>
      <h2 className='Bee__subheader'>Stay Above {props.minHealth}%</h2>
      <button className='Bee__btn' onClick={getRandomNumber}>
        Roll Dice 🎲
      </button>
      <button className='Bee__btn' onClick={handleAttack}>
        Attack 💥
      </button>
      <button className='Bee__btn' onClick={Reset}>
        Reset ✅
      </button>
      <p className='Bee__message'>{message}</p>
    </div>
  );
}
