const SearchBar = ({ query, setQuery }) => (
  <input
    type="text"
    placeholder="Search breweries by name..."
    value={query}
    onChange={e => setQuery(e.target.value)}
  />
);

export default SearchBar;