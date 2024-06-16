import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";
 
export default function NewProject({ onAddNewProject, onCloseAddProject }) {
  const modal = useRef();
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
 
  function validation(enteredTitle, enteredDescription, enteredDueDate) {
    return (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    );
  }
 
  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;
 
    // validation
    const validationResult = validation(
      enteredTitle,
      enteredDescription,
      enteredDueDate
    );
    if (validationResult) {
      modal.current.open();
      return;
    }
 
    onAddNewProject({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }
 
  return (
    <>
      <Modal ref={modal} buttonCaption="Okay">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-700 mb-4">
          Oops... looks like you forgot to enter a value
        </p>
        <p className="text-stone-700 mb-4">
          Please make sure you provide a valid value for every input field
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              className="text-stone-800 hover:text-stone-950"
              onClick={() => onCloseAddProject(undefined)}
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          {/* here react will auto set the value of textarea false for 1st and 3rd input tag and for 2nd one it will set the "true" value because we write "textArea" there  */}
          <Input type="text" ref={title} label="Title" />
          <Input ref={description} label="Description" textArea />
          <Input type="date" ref={dueDate} label="Due Date" />
        </div>
      </div>
    </>
  );
}