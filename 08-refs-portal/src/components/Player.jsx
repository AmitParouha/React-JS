import { useRef } from "react";
import { useState } from "react";
 
export default function Player() {
  const playerName = useRef();
  const [enteredPlayerName, setEnteredPlayerName] = useState("");
 
  function handleOnSubmit() {
    setEnteredPlayerName(playerName.current.value.trim());
    playerName.current.value = "";
  }
 
  return (
    <section id="player">
      <h2>
        Welcome {enteredPlayerName ? enteredPlayerName : "unknown player"}
        {/* Welcome {enteredPlayerName ?? "unknown player"} */}
      </h2>
      <p>
        <input type="text" ref={playerName} />
        <button onClick={handleOnSubmit}>Set Name</button>
      </p>
    </section>
  );
}