import { useState } from "react";
import QUESTIONS from "../questions";
import { useCallback } from "react";
import Question from "./Question";
import Summary from "./Summary";
 
export default function Quiz() {
  const [userAnswer, setUserAnswer] = useState([]);
  const activeQuestionIndex = userAnswer.length;
  let quizIsComplete = activeQuestionIndex === QUESTIONS.length;
 
  const handleSelectedAnswer = useCallback((selectedAnswer) => {
    setUserAnswer((prevAnswer) => {
      return [...prevAnswer, selectedAnswer];
    });
  }, []);
 
  const handleSkipAnswer = useCallback(
    () => handleSelectedAnswer(null),
    [handleSelectedAnswer]
  );
  console.log(userAnswer);
  if (quizIsComplete) {
    return <Summary userAnswer={userAnswer} />;
  }
 
  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelectAnswer={handleSelectedAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}