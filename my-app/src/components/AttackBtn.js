import React from "react";

export default function AttackBtn(props) {
  function Attack(event) {
    event.preventDefault();
  }

  return <button onClick={Attack}>Attack!</button>;
}
