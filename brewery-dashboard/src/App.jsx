import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Stats from './Stats';
import SearchBar from './SearchBar';
import Filter from './Filter';
import BreweryList from './BreweryList';
import DetailView from './DetailView';
import Charts from './Charts';

const App = () => {
  const [breweries, setBreweries] = useState([]);
  const [query, setQuery] = useState('');
  const [filterType, setFilterType] = useState('All');

  useEffect(() => {
    const fetchBreweries = async () => {
      const res = await fetch('https://api.openbrewerydb.org/v1/breweries?per_page=100');
      const data = await res.json();
      setBreweries(data);
    };
    fetchBreweries();
  }, []);

  const filtered = breweries.filter(b =>
    b.name.toLowerCase().includes(query.toLowerCase()) &&
    (filterType === 'All' || b.brewery_type === filterType)
  );

  return (
    <div className="container">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Stats breweries={breweries} />
              <Charts breweries={breweries} />
              <SearchBar query={query} setQuery={setQuery} />
              <Filter filterType={filterType} setFilterType={setFilterType} />
              <BreweryList breweries={filtered} />
            </>
          }
        />
        <Route path="/brewery/:id" element={<DetailView />} />
      </Routes>
    </div>
  );
};

export default App;
