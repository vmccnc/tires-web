import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { filterTires } from '../../../dbRequests/tiresRequests';
import { ITire } from '../../../interfaces/ITire';

export function FilterTiresList() {
  const { width, profile, diametr } = useParams();
  const [tires, setTires] = useState<ITire[]>([]);
  console.log(width, profile, diametr);

  useEffect(() => {
    const fetchfilterTires = async () => {
      try {
        const data = await filterTires({ width, profile, diametr });
        console.log('Fetched tires data:', data);
        setTires(data);
      } catch (error) {
        console.error('Error fetching tires:', error);
      }
    };

    fetchfilterTires();
  }, []);

  return (
    <div>
      <h1>Filter Tires</h1>
      <div className="tire-list">
        {tires.length === 0 && <p>Loading tires...</p>}
        {tires.map(tire => (
          <div key={tire.id} className="tire-item">
            <h2>{tire.typeOfTire}</h2>
            <p>IcVC: {tire.icVc}</p>
            <p>Diameter: {tire.diameter}</p>
            <p>Dimension: {tire.manufacturer}</p>
            <Link to={`/tire/${tire.url}`}>View Details</Link>
            <p>Urls: {tire.urls}</p>
            <p>Info: {tire.inf}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
