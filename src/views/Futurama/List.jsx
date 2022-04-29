import React from 'react';
import { useState, useEffect } from 'react';
import styles from '../../App.css';
import CharacterCard from '../../components/Card';
import { futuramaFetch } from '../../services/futuramaApi-fetch';

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
    const searchResults = quotes.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase().trim())
    );
    setResults(searchResults);
  };

  //useEffect to fetch futurama API, create an object with the info I want to access to
  useEffect(() => {
    const getQuotes = async () => {
      const futuramaData = await futuramaFetch();
      console.log(futuramaData);
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
          <div className={styles.list}>
            {/* <label htmlFor="character-quote">Search quotes by character:</label> */}
            <input
              id="search"
              type="text"
              value={search}
              placeholder="Search quotes by character"
              onChange={handleSearch}
            />
          </div>
          <div>
            {quoteList.map((quote) => {
              return (
                <>
                  <div>
                    <CharacterCard
                      name={quote.name}
                      image={quote.image}
                      quote={quote.quote}
                    />
                  </div>
                </>
              );
            })}
          </div>
          {isSearching && !results.length && <p>No results</p>}
        </>
      )}
    </>
  );
}
