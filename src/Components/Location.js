import React from "react";
import '../CSS/location.css'
const Location = ({ location }) => {
  return (
    <div className="location">
      <p>{location.address.street}</p>
      <p>{location.address.suite}</p>
      <p>{location.address.city}</p>
      <p>{location.address.zipcode}</p>
      <p>{location.address.country}</p>
    </div>
  );
};

export default Location;
