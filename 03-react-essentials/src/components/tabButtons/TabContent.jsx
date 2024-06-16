import "./TabContent.css";
import { EXAMPLES } from "../data";
 
export default function TabContent({ selectedTopic }) {
  let tabContent = <p>Please select the topic</p>;
 
  if (selectedTopic) {
    tabContent = (
      <div className="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }
 
  return <>{tabContent}</>;
}