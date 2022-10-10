import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";

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

const App = () => {
  return (
    <div>
      <Accordion items={items} />
      <Search />
    </div>
  );
};

export default App;
