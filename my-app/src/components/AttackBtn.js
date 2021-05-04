import React, { useState } from "react";

export default function AttackBtn() {
  const [attackInfo, setAttackInfo] = useState({});
  let secretNumber = Math.trunc(Math.random() * 100) + 1;

  function Attack(event) {
    event.preventDefault();
    console.log(secretNumber);
  }
  return (
    <div className='attack-btn'>
      <button onClick={Attack}>Attack!</button>
    </div>
  );
}
