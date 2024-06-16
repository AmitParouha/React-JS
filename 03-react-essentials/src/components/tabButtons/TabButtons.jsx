import TabButton from "./TabButton";
import { useState } from "react";
import "./TabButtons.css";
import TabContent from "./TabContent";
 
export default function TabButtons({ DynamicContainer }) {
  const topics = ["components", "jsx", "props", "state"];
  const [selectedTopic, setSelectedTopic] = useState("");
 
  return (
    <>
      <section className="example">
        <h2>Example</h2>
        <DynamicContainer>
          {topics.map((topic, key) => (
            <TabButton
              onClick={() => setSelectedTopic(topic)}
              isSelected={selectedTopic === topic}
              key={key}
              dynamicContainer="div"
            >
              {topic.toUpperCase()}
            </TabButton>
          ))}
        </DynamicContainer>
        <TabContent selectedTopic={selectedTopic} />
      </section>
    </>
  );
}