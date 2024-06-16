import { useState } from "react";
import ConfigureComponent from "./components/Counter/ConfigureComponent.jsx";
 
import Counter from "./components/Counter/Counter.jsx";
import Header from "./components/Header.jsx";
import { log } from "./log.js";
 
function App() {
  log("<App /> rendered");
 
  const [chosenCount, setChosenCount] = useState(0);
 
  function handleSetClick(enteredNumber) {
    setChosenCount(enteredNumber);
    setChosenCount(() => enteredNumber);
    // here we are updating state twice but App component will re-render only once because of batching and scheduling mechanism.
    console.log(chosenCount);
  }
 
  return (
    <>
      <Header />
      <main>
        <ConfigureComponent onSet={handleSetClick} />
        <Counter key={chosenCount} initialCount={chosenCount} />
        <Counter initialCount={0} />
      </main>
    </>
  );
}
 
export default App;