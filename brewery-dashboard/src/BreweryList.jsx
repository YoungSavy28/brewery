import BreweryCard from './BreweryCard';

const BreweryList = ({ breweries }) => (
  <div className="brewery-list">
    {breweries.map(b => <BreweryCard key={b.id} brewery={b} />)}
  </div>
);

export default BreweryList;