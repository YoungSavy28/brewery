const Stats = ({ breweries }) => {
  const total = breweries.length;
  const micro = breweries.filter(b => b.brewery_type === 'micro').length;
  const states = [...new Set(breweries.map(b => b.state))].length;

  return (
    <div className="stats">
      <p>Total Breweries: {total}</p>
      <p>Microbreweries: {micro}</p>
      <p>Unique States: {states}</p>
    </div>
  );
};

export default Stats;