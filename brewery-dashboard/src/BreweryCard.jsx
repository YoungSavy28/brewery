import { Link } from 'react-router-dom';

const BreweryCard = ({ brewery }) => (
  <div className="brewery-card">
    <h3>
      <Link to={`/brewery/${brewery.id}`}>{brewery.name}</Link>
    </h3>
    <p>Type: {brewery.brewery_type}</p>
    <p>Location: {brewery.city}, {brewery.state}</p>
    {brewery.website_url && (
      <a href={brewery.website_url} target="_blank" rel="noopener noreferrer">
        Visit Website
      </a>
    )}
  </div>
);

export default BreweryCard;
