import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("programing");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });
      setResults(data.query.search);
    };

    search();
  }, [term]);

  const renderedResults = results.map((result) => {
    return (
      <div className="item" key={result.pageid}>
        <div className="content">
          <div className="header">{result.title}</div>
          {result.snippet}
        </div>
      </div>
    );
  });

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
      <div className="ui celled list">
        {renderedResults}
      </div>
    </div>
  );
};

export default Search;
