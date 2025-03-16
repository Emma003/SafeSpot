import { useEffect } from "react";
import "./dashboardPage.css";

const DashboardPage = () => {
  useEffect(() => {
    console.log("DashboardPage");

    navigator.geolocation.getCurrentPosition((position) => {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
    });
  }, []);

  return <div className="dashboardPage">DashboardPage</div>;
};

export default DashboardPage;
