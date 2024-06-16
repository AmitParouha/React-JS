import { useState } from "react";
import QUESTIONS from "../questions";
import Answer from "./Answer";
import QuestionTimer from "./QuestionTimer";
 
export default function Question({ onSelectAnswer, onSkipAnswer, index }) {
  const [userAnswer, setUserAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });
 
  let timer = 25000;
  if (userAnswer.selectedAnswer) {
    timer = 2000;
  }
 
  function handleSelectedAnswer(answer) {
    setUserAnswer({
      selectedAnswer: answer,
      isCorrect: null,
    });
    setTimeout(() => {
      setUserAnswer({
        selectedAnswer: answer,
        isCorrect: answer === QUESTIONS[index].answers[0],
      });
      setTimeout(() => {
        onSelectAnswer(answer);
      }, 1000);
    }, 1000);
  }
  let answerState = "";
  if (userAnswer.selectedAnswer && userAnswer.isCorrect !== null) {
    answerState = userAnswer.isCorrect ? "correct" : "wrong";
  } else if (userAnswer.selectedAnswer) {
    answerState = "answered";
  }
 
  return (
    <div id="question">
      <QuestionTimer
        key={timer}
        timeout={timer}
        onTimeout={answerState === "" ? onSkipAnswer : null}
        mode={answerState !== "" ? "answered" : ""}
      />
      <h2>{QUESTIONS[index].text}</h2>
 
      <Answer
        answers={QUESTIONS[index].answers}
        selectedAnswer={userAnswer.selectedAnswer}
        answerState={answerState}
        onSelect={handleSelectedAnswer}
      />
    </div>
  );
}