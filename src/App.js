import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
const items = [
  {
    title: "What is React",
    content: "React is a front end javascript framework",
  },
  {
    title: "why use react?",
    content: "React is a favorite JS library",
  },
  {
    title: "how do you use react?",
    content: "You use React by creating component",
  },
];

const options = [
  {
    label: "The Color Red",
    value: "Red",
  },
  {
    label: "The Color Green",
    value: "Green",
  },
  {
    label: "A Shade of Blue",
    value: "Blue",
  },
];

const App = () => {
  return (
    <div>
      {/* <Accordion items={items} />
      <Search /> */}
      <Dropdown options={options} />
    </div>
  );
};

export default App;
