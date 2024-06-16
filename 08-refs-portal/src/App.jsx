import { useState } from "react";
import Player from "./components/Player.jsx";
import Temp from "./components/Temp.jsx";
import TimerChallenges from "./components/TimerChallenges.jsx";
 
function App() {


  return (
    <>
      <Player/>
      {/* <Temp /> */}
      <div id="challenges">
        <TimerChallenges title={"Easy"} targetTime={1} />
        <TimerChallenges title={"Not Easy"} targetTime={5} />
        <TimerChallenges title={"Getting tough"} targetTime={10} />
        <TimerChallenges title={"Props only"} targetTime={15} />
      </div>
    </>
  );
}
 
export default App;