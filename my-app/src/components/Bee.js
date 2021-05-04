import React, { useState } from "react";
import "../sass/Bee.scss";

export default function Bee(props) {
  return (
    <div className='worker'>
      <img src={props.image} alt='little bee' className='logo' />
      <h1>health %</h1>
      <h2>Attack power: </h2>
      <ul>
        <li>
          {props.name} need their health to stay above {props.minHealth}%!
        </li>
        <li>Alive status: {}</li>
      </ul>
    </div>
  );
}
