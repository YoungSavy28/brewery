import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const DetailView = () => {
  const { id } = useParams();
  const [brewery, setBrewery] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      const res = await fetch(`https://api.openbrewerydb.org/v1/breweries/${id}`);
      const data = await res.json();
      setBrewery(data);
    };
    fetchDetails();
  }, [id]);

  if (!brewery) return <p>Loading...</p>;

  return (
    <div className="brewery-detail">
      <h2>{brewery.name}</h2>
      <p>Type: {brewery.brewery_type}</p>
      <p>Address: {brewery.street}, {brewery.city}, {brewery.state}, {brewery.postal_code}</p>
      <p>Phone: {brewery.phone}</p>
      <p>Country: {brewery.country}</p>
      {brewery.website_url && (
        <a href={brewery.website_url} target="_blank" rel="noopener noreferrer">
          Visit Website
        </a>
      )}
    </div>
  );
};

export default DetailView;
