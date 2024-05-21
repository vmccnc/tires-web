import React, { useEffect, useState, } from 'react';
import { Link } from 'react-router-dom';
import { ITire } from '../interfaces/ITire';
import { loadAllTires } from '../dbRequests/tiresRequests';

const AllTires: React.FC = () => {
  const [tires, setTires] = useState<ITire[]>([]);

  console.log('AllTires component rendered');
  console.log('Tires state:', tires);

  useEffect(() => {
    const fetchTires = async () => {
      try {
        const data = await loadAllTires();
        console.log('Fetched tires data:', data);
        setTires(data);
      } catch (error) {
        console.error('Error fetching tires:', error);
      }
    };

    fetchTires();
  }, []);

  return (
    <div>
      <h1>All Tires</h1>
      <div className="tire-list">
        {tires.length === 0 && <p>Loading tires...</p>}
        {tires.map((tire) => (
          <div key={tire.id} className="tire-item">
            <h2>{tire.typeOfTire}</h2>
            <p>IcVC: {tire.icVc}</p>
            <p>Diameter: {tire.diameter}</p>
            <p>Dimension: {tire.dimension}</p>
            <Link to={`/tire/${tire.url}`}>View Details</Link>
            <p>Urls: {tire.urls}</p>
            <p>Info: {tire.inf}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllTires;
