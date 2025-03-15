// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import "./homepage.css";

const homepage = () => {
  return (
    <div className="homepage">
      <div className="main">
        <video autoPlay loop muted className="background-video">
          <source src="/background.mov" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <h1>SafeSpot</h1>
        <h2>your app to find help nearby</h2>
        <h3>Find nearby help</h3>
        <Link to="/dashboard">Get Started</Link>
      </div>
      <div className="terms">
        <img src="/vite.svg" alt="" />
        <div className="links">
          <Link to="/">Terms of Service</Link>
          <span>|</span>
          <Link to="/">Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
};

export default homepage;
