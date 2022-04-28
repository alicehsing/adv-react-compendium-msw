import React from 'react';
import { useState, useEffect } from 'react';

export default function FuturamaList() {
  // set state
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);

  //useEffect to fetch futurama API, create an object with the info I want to access to
  useEffect(() => {
    const getQuotes = async () => {
      const res = await fetch('https://futuramaapi.herokuapp.com/api/quotes');
      const data = await res.json();
      console.log('***QUOTES***', data);
      const futuramaData = data.map((item) => ({
        name: item.character,
        image: item.image,
        quote: item.quote,
      }));
      setQuotes(futuramaData);
      setLoading(false);
    };
    getQuotes();
  }, []);

  return (
    <>
      <h2>Futurma Characters & Quotes</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {quotes.map((quote) => {
            return (
              <div>
                <h3>
                  {quote.name}: "{quote.quote}"
                </h3>

                <img alt="character" src={quote.image} />
              </div>
            );
          })}
        </>
      )}
    </>
  );
}
