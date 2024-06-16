import reactJS from "../../assets/react-core-concepts.png";
import "./Header.css";
 
const reactDescription = ["Fundamental", "Crucial", "Core"];
function genRandomNumber(max) {
  return Math.floor(Math.random() * (max + 1));
}
 
export default function Header() {
  const description = reactDescription[genRandomNumber(2)];
  return (
      <header>
        <img src={reactJS} />
        <h1>Welcome to REACT JS Learning</h1>
        <p style={{ color: "bisque", marginTop: "10px" }}>
          {description} React component you will need for almost any app you are
          going to build!
        </p>
      </header>
  );
}
 