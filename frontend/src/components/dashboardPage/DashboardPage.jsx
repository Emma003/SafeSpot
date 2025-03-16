import { useEffect, useState } from "react";
import "./dashboardPage.css";
import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100vh",
};

const DashboardPage = () => {
  const [lat, setLat] = useState(73);
  const [lng, setLng] = useState(45);

  useEffect(() => {
    console.log("DashboardPage");

    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLng(position.coords.longitude);
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
    });
  }, []);

  const center = {
    lat, // current
    lng,
  };

  return (
    <div className="dashboardPage">
      <div className="map-container">
        <LoadScript googleMapsApiKey="AIzaSyDCVJOIjiAQQsl6c8nB5gxvLLk3gcWwDGQ">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={12}
          >
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
      </div>
      <div className="info">
        <div className="filters">
          <label>
            <input type="checkbox" name="food" />
            Food
          </label>
          <label>
            <input type="checkbox" name="shelter" />
            Shelter
          </label>
          <label>
            <input type="checkbox" name="restrooms" />
            Restrooms
          </label>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
