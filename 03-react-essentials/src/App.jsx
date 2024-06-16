import "./App.css";
 
import Header from "./components/header/Header";
import Component from "./components/smallComponent/Component";
import TabButtons from "./components/tabButtons/TabButtons";
 
export default function App() {
  return (
    <>
      <Header/>
      <Component />
      <TabButtons DynamicContainer="menu" />
    </>
  );
}