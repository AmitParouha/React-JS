import { createPortal } from "react-dom";
 
export default function Temp() {
  return createPortal(
    <>
      <h2>Welcome to the react course</h2>
      <p>React is used for building a single page application</p>
    </>,
    document.getElementById("temp")
  );
}