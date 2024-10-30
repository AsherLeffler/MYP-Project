import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer>
      <p>
        <b>MYP Project</b>
        <br />
        Asher Leffler
      </p>
      <div className="center-wrapper">
        <div className="center-footer" style={{ bottom: "28px" }}></div>
        <div className="center-footer" style={{ top: "28px" }}></div>
      </div>
      <div className="quickLinks">
        <Link to="/">Home</Link>
        <div
          className="divider-circle"
          style={{ backgroundColor: "rgb(218, 218, 255)" }}
        ></div>
        <Link to="/myJourney">My Journey</Link>
        <Link to="/myFuture">My Future</Link>
      </div>
    </footer>
  );
};

export default Footer;
