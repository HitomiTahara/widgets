import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";


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

const showAccordion = () => {
  if (window.location.pathname === "/") {
    return <Accordion items={items} />;
  }
};

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Selected a color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
          pText="You selected a "
          valueText={selected.value}
        />
      </Route>
    </div>
  );
};

export default App;
