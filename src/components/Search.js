import React, { useState, useEffect } from "react";

const Search = () => {
  const [term, setTerm] = useState("");

  console.log("I run every");
  useEffect(() => {
    console.log("I run after every initial");
  }, []);

  const onInputChange = (e) => {
    setTerm(e.target.value);
  };

  // const onSubmitForm = (e) => {
  //   console.log(e);
  // };

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>hello:{term}</label>
          <input
            className="input"
            type="text"
            value={term}
            onChange={onInputChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
