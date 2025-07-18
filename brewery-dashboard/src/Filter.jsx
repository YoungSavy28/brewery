const Filter = ({ filterType, setFilterType }) => (
  <select value={filterType} onChange={e => setFilterType(e.target.value)}>
    <option value="All">All Types</option>
    <option value="micro">Micro</option>
    <option value="brewpub">Brewpub</option>
    <option value="regional">Regional</option>
    <option value="planning">Planning</option>
    <option value="contract">Contract</option>
    <option value="proprietor">Proprietor</option>
    <option value="closed">Closed</option>
  </select>
);

export default Filter;