import { useState } from "react";
import Header from "./components/Header";
import Result from "./components/Result";
import UserInput from "./components/UserInput";
 
function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
 
  let deta = ""; // Amit
 
  const inputValid = userInput.duration >= 1;
 
  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevValues) => {
      return {
        ...prevValues,
        [inputIdentifier]: +newValue, // using + symbol we are converting string to number
      };
    });
 
    console.log(userInput);
  }
 
  return (
    <>
      <Header />
      <UserInput userInput={userInput} handleChange={handleChange} />
      {!inputValid && (
        <p className="center">Please enter a duration greater than zero</p>
      )}
      {inputValid && <Result userInput={userInput} />}
    </>
  );
}
 
export default App;
