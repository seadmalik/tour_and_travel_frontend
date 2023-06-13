import React, { useState,  } from 'react';
import axios from 'axios';
import './VeiwData.css';

const VeiwData = () => {
  const [destination, setDestination] = useState([]);
  const [showTable, setShowTable] = useState(false);

  // This function fetches the data from the server
  const loadDestination = async () => {
    try {
      const response = await axios.get('http://localhost:7000/api/get');
      setDestination(response.data);  // set state here
    } catch (error) {
      console.error(error);
    }
  };
  
  loadDestination();  

  const handleClick = () => {
    loadDestination();
    setShowTable(true);
  };

  return (
    <div>
      <button onClick={handleClick}>show data</button>
      {showTable && (
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>Destination ID</th>
                <th>Place</th>
                <th>Location</th>
                <th>Image</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {destination.map(destination => (
                <tr key={destination.id}>
                 <td>{destination.Destination_id}</td>
                 <td>{destination.Destination_place}</td>
                 <td>{destination.Destination_location || '-'}</td>
                 <td>
                     {destination.Destination_image ? (
                      <img
                      src={`data:image/png;base64,${destination.Destination_image.data}`}
                     
                       className="destination-image" /> ) : ( '-' )}</td> 
                  <td>{destination.Destination_desc || '-'}</td> 
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default VeiwData;