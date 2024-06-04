import React, { useEffect, useState } from 'react';
import { loadAllTires } from '../../dbRequests/tiresRequests';
import { ITire } from '../../interfaces/ITire';
import './AllTires.css';

const AllTires: React.FC = () => {
  const [tires, setTires] = useState<ITire[]>([]);
  const imageUrl = "https://firebasestorage.googleapis.com/v0/b/tires-dm.appspot.com/o/Tires%2Fmichelin-primacy-4-23385-f-f-l130x175-sk6.webp?alt=media&token=e34a0787-2e67-40bb-a138-74dbd271c365";

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
        {tires.map(tire => (
          <div key={tire.id} className="tire-item">
            <div>
              <h2>{tire.typeOfTire}</h2>
              <p><img src={imageUrl} alt="tire" /></p>
            </div>
            <div style={{marginLeft: "5px"}}>
              <p>IcVC: {tire.icVc}</p>
              <p>Diameter: {tire.diameter}</p>
              <p>Width: {tire.width}</p>
              <p>Profile: {tire.profile}</p>
              <p>Manufacturer: {tire.manufacturer}</p>
              <p>Season: {tire.season}</p>
              <p>Info: {tire.inf}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTires;