import React from 'react';
import { useState, useEffect } from 'react';
import styles from '../../App.css';

export default function FuturamaList() {
  // set state
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const quoteList = isSearching ? results : quotes;

  const handleSearch = (event) => {
    setIsSearching(!!search.length);
    setSearch(event.target.value);
    const searchResults = quotes.filter(
      (item) => item.name.includes(search.toLowerCase().trim())
      // item.name.includes(event.target.value.toLowerCase().trim())
    );
    setResults(searchResults);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(results);
  };
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
          {/* <search onSearch={handleSearch} /> */}
          <div>
            <form onSubmit={handleSubmit}>
              <label htmlFor="character-quote">
                Search quotes by character:
              </label>
              <input
                id="search"
                type="text"
                value={search}
                onChange={handleSearch}
              />
              <button disabled={!search}>Search</button>
            </form>
          </div>
          {quoteList.map((quote) => {
            return (
              <>
                <div className={styles.item}>
                  <h3>
                    {quote.name}: "{quote.quote}"
                  </h3>

                  <img alt="character" src={quote.image} />
                </div>
              </>
            );
          })}
          {isSearching && !results.length && <p>No results</p>}
        </>
      )}
    </>
  );
}
