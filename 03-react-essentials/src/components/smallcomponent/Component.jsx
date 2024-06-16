import CoreComponent from "./CoreComponent";
import "./Component.css";
import { coreConcepts } from "../data";
 
export default function Component() {
  return (
    <>
      <section className="core-concepts">
        <h2>Core Concepts</h2>
        <div>
          {coreConcepts.map((data, key) => (
            <CoreComponent
              key={key}
              {...data}
              className="card"
              id="forwarded-props"
            />
          ))}
        </div>
      </section>
    </>
  );
}
 