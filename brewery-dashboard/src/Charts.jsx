import { Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend);

const Charts = ({ breweries }) => {
  const typeCounts = breweries.reduce((acc, curr) => {
    acc[curr.brewery_type] = (acc[curr.brewery_type] || 0) + 1;
    return acc;
  }, {});

  const stateCounts = breweries.reduce((acc, curr) => {
    acc[curr.state] = (acc[curr.state] || 0) + 1;
    return acc;
  }, {});

  const typeChart = {
    labels: Object.keys(typeCounts),
    datasets: [
      {
        label: 'Brewery Types',
        data: Object.values(typeCounts),
        backgroundColor: 'rgba(75, 192, 192, 0.6)'
      }
    ]
  };

  const stateChart = {
    labels: Object.keys(stateCounts).slice(0, 10),
    datasets: [
      {
        label: 'Top 10 States by Brewery Count',
        data: Object.values(stateCounts).slice(0, 10),
        backgroundColor: 'rgba(153, 102, 255, 0.6)'
      }
    ]
  };

  return (
    <div className="charts">
      <div style={{ maxWidth: '600px', margin: '2rem auto' }}>
        <h3>Brewery Types Distribution</h3>
        <Pie data={typeChart} />
      </div>
      <div style={{ maxWidth: '600px', margin: '2rem auto' }}>
        <h3>Top 10 States with Most Breweries</h3>
        <Bar data={stateChart} />
      </div>
    </div>
  );
};

export default Charts;
