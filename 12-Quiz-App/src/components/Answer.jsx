import { useRef } from "react";
import QUESTIONS from "../questions";
 
export default function Answer({
  answers,
  selectedAnswer,
  answerState,
  onSelect,
}) {
  const shuffledAnswer = useRef();
  if (!shuffledAnswer.current) {
    shuffledAnswer.current = [...answers];
    shuffledAnswer.current.sort(() => Math.random() - 0.5);
  }
 
  return (
    <ul id="answers">
      {shuffledAnswer.current.map((answer) => {
        const isSelected = selectedAnswer === answer;
        let cssClass = "";
        if (isSelected) {
          console.log(isSelected);
          cssClass = "selected";
        }
 
        if (
          (answerState === "correct" || answerState === "wrong") &&
          isSelected
        ) {
          cssClass = answerState; // here class name is 'correct' or 'wrong'
        }
        return (
          <li key={answer} className="answer">
            <button
              className={cssClass}
              onClick={() => onSelect(answer)}
              disabled={answerState !== ""}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}