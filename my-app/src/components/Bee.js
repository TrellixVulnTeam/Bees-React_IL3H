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

  console.log(attackValue);

  function handleAttack(event) {
    event.preventDefault();
    setScore(score - attackValue);
  }

  function getRandomNumber(event) {
    event.preventDefault();
    setAttackValue(Math.trunc(Math.random() * 100) + 1);
    console.log(attackValue);
  }

  if (score < 0) {
    setScore(0);
  }

  function Lost(score) {
    setHealthIcon("💔");
    setScore();
    return setMessage(`DEAD 😵 YOU SCORED ${score}%`);
  }

  if (props.name === "Workers" && score <= 70) {
    Lost(score);
  } else if (props.name === "Drones" && score <= 50) {
    Lost(score);
  } else if (props.name === "The Queen" && score <= 20) {
    Lost(score);
  }
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
      <ul>
        <li>Stay Above {props.minHealth}%!</li>
        <li>{message}</li>
      </ul>
      <button onClick={getRandomNumber}>Roll Dice 🎲</button>
      <button onClick={handleAttack}>Attack 💥</button>
      <button onClick={Reset}>Reset ✅</button>
    </div>
  );
}
