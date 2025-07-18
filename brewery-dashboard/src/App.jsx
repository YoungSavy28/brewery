// src/App.jsx
import React, { useState, useEffect } from "react";
import Header from "./Header";
import Stats from "./Stats";
import SearchBar from "./SearchBar";
import Filter from "./Filter";
import BreweryList from "./BreweryList";

const App = () => {
  const [breweries, setBreweries] = useState([]);
  const [query, setQuery] = useState("");
  const [filterType, setFilterType] = useState("All");

  useEffect(() => {
    const fetchBreweries = async () => {
      const res = await fetch(
        "https://api.openbrewerydb.org/v1/breweries?per_page=100"
      );
      const data = await res.json();
      setBreweries(data);
    };
    fetchBreweries();
  }, []);

  const filtered = breweries.filter(
    (b) =>
      b.name.toLowerCase().includes(query.toLowerCase()) &&
      (filterType === "All" || b.brewery_type === filterType)
  );

  return (
    <div className="container">
      <Header />
      <Stats breweries={breweries} />
      <SearchBar query={query} setQuery={setQuery} />
      <Filter filterType={filterType} setFilterType={setFilterType} />
      <BreweryList breweries={filtered} />
    </div>
  );
};

export default App;
