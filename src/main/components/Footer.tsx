import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer>
      <p>
        <b>MYP Project</b>
        <br />
        Asher Leffler
      </p>
      <div className="quickLinks">
        <Link to="/">Home</Link>
        <div className="divider-circle"></div>
        <Link to="/myJourney">My Journey</Link>
        <Link to="/myFuture">My Future</Link>
      </div>
    </footer>
  );
};

export default Footer;
