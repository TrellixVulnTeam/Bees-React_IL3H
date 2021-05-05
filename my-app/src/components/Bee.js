import React, { useState } from "react";
import "../sass/Bee.scss";

export default function Bee(props) {
  const [health, setHealth] = useState(100);
  const [healthIcon, setHealthIcon] = useState("❤️");
  const [attackNumber, setAttackNumber] = useState("");

  function handleResponse(attackNumber) {
    if (health && props.name === "Workers") {
      let score = health - attackNumber;
      score >= 70 ? setHealth(score) : setHealth(health);
    }

    // if (health <= 0) {
    //   console.log("you won!");
    // if (newScore <= 0) {
    //   setHealth(0);
    //   setHealthIcon("💔");
    // }
    // newScore <= 0 ? setHealth(0) : setHealth(newScore);
  }

  function Reset(event) {
    event.preventDefault();
    setHealth("");
    setAttackNumber("");
    setHealthIcon("❤️");
  }

  function Attack(event) {
    event.preventDefault();
    setAttackNumber(Math.trunc(Math.random() * 100) + 1);
    handleResponse(attackNumber);
  }
  return (
    <div className='Bee'>
      <h1 className='Bee__title'>{props.name}</h1>
      <div className='Bee__img-wrapper'>
        <img src={props.image} alt='little bee' className='Bee__img-logo' />
      </div>
      <h1 className='Bee__header'>
        {healthIcon} {health} %
      </h1>
      <h2 className='Bee__subheader'>💥 {attackNumber}% </h2>
      <ul>
        <li>
          {props.name} need their health to stay above {props.minHealth}%!
        </li>
        <li>Alive status: {}</li>
      </ul>
      <button onClick={Attack}>Attack!</button>
      <button onClick={Reset}>Reset</button>
    </div>
  );
}
