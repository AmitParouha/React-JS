import { useState } from "react";
 
export default function NewTask({ onAdd }) {
  const [enteredTask, setEnteredTask] = useState("");
 
  function handleOnChange(e) {
    setEnteredTask(e.target.value);
  }
 
  function handleOnSubmit() {
    if (enteredTask.trim().length === 0) {
      alert("Please enter the task...");
      return;
    }
    onAdd(enteredTask);
    setEnteredTask("");
  }
 
  return (
    <div className="flex items-center gap-4">
      <input
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        type="text"
        onChange={(e) => handleOnChange(e)}
        value={enteredTask}
      />
 
      <button
        className="text-stone-700 hover:text-stone-950"
        onClick={handleOnSubmit}
      >
        Add Task
      </button>
    </div>
  );
}
 