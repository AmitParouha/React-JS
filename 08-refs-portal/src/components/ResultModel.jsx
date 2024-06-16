import { useImperativeHandle } from "react";
import { useRef } from "react";
import { forwardRef } from "react";
import { createPortal } from "react-dom";
const ResultModel = forwardRef(function ResultModel(
  { targetTime, timeRemaining, handleReset },
  ref
) {
  let dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
 
  const resultMsg = targetTime * 1000 > timeRemaining && timeRemaining > 0;
 
  return createPortal(
    <dialog ref={dialog} className="result-modal" onClose={handleReset}>
      <h2>You {resultMsg ? "Won" : "Lost"}</h2>
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You {!resultMsg && "didn't"} stopped time timer with{" "}
        <strong>{timeRemaining / 1000} seconds left</strong>
      </p>
      <form method="dialog" onSubmit={handleReset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});
 
export default ResultModel;