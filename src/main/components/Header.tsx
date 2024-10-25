import { Link } from "react-router-dom";
import selfieImg from "/selfie.webp";

interface HeaderStates {
  activePage: string;
  setActivePage: (page: string) => void;
}

interface HomeProps {
  headerStates: HeaderStates;
}

const Header: React.FC<HomeProps> = ({ headerStates }) => {
  const { activePage, setActivePage } = headerStates;

  const findPage = (currentLocation: string) => {
    switch (currentLocation) {
      case "/":
        return "Home";
      case "/myJourney":
        return "My Journey";
      case "/myFuture":
        return "My Future";
      default:
        return "Home";
    }
  };

  window.onload = () => {
    const currentLocation = window.location.pathname;
    setActivePage(findPage(currentLocation));
  };

  return (
    <header>
      <Link
        to={"/"}
        onClick={() => {
          window.location.reload();
          setActivePage("Home");
        }}
      >
        <div className="logo-wrapper">
          <img src={selfieImg} alt="Picture of me" id="imgOfMe" />
          <div id="expandBtn">
            <p>Asher Leffler</p>
          </div>
        </div>
      </Link>
      <nav>
        <Link
          to={"/"}
          className={activePage === "Home" ? "active" : ""}
          onClick={() => setActivePage("Home")}
        >
          Home
        </Link>
        <div className="divider-circle"></div>
        <Link
          to={"/myJourney"}
          className={activePage === "My Journey" ? "active" : ""}
          onClick={() => setActivePage("My Journey")}
        >
          My Journey
        </Link>
        <div className="divider-circle"></div>
        <Link
          to={"/myFuture"}
          className={activePage === "Location" ? "active" : ""}
          onClick={() => setActivePage("Location")}
        >
          My Future
        </Link>
      </nav>
    </header>
  );
};

export default Header;
