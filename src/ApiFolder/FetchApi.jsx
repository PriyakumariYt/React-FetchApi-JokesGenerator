

import React, { useEffect, useState } from "react";

const FetchApi = () => {
  const [data, setData] = useState([]);
  const [currentQuote, setCurrentQuote] = useState("");
  const [currentAuthor, setCurrentAuthor] = useState("");

  const fetchQuotes = async () => {
    try {
      const response = await fetch("https://type.fit/api/quotes");
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.log("Error fetching quotes:", error);
    }
  };

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * data.length);
    const quote = data[randomIndex];
    setCurrentQuote(quote.text);
    setCurrentAuthor(quote.author || "Unknown");
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  useEffect(() => {
    if (data.length > 0)
    {
      getRandomQuote();
    }
  }, [data]);

  return (
    <div>
    
      <div className="container1">
        <div className="box1">
          <h1>
            <i className="fa-solid fa-quote-left"></i>
            <span className="quotes" id="quotes">
              {currentQuote}
            </span>
            <i className="fa-solid fa-quote-right"></i>
          </h1>
          <hr />
          <p className="author" id="author">
            ~ {currentAuthor}
          </p>

          <button className="nextbtn" onClick={getRandomQuote}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default FetchApi;
