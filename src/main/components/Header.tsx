import { Link } from "react-router-dom";
import { ArrowLeft, Menu } from "lucide-react";
import selfieImg from "/selfie.webp";
import { useEffect } from "react";

interface HeaderStates {
  activePage: string;
  setActivePage: (page: string) => void;
}

interface HomeProps {
  headerStates: HeaderStates;
}

const Header: React.FC<HomeProps> = ({ headerStates }) => {
  const { activePage, setActivePage } = headerStates;

  useEffect(() => {
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

    const currentLocation = window.location.pathname;
    setActivePage(findPage(currentLocation));
  }, [setActivePage]);

  const openMenu = () => {
    const dropDown = document.getElementById("drop-down") as HTMLElement;
    dropDown.classList.toggle("open");
    const menuIcon = document.getElementById("menuIcon") as HTMLElement;
    menuIcon.classList.toggle("open");
  };
  
  return (
    <>
      <header>
        <Link
          to={"/"}
          onClick={() => {
            setActivePage("Home");
          }}
        >
          <div className="logo-wrapper">
            <img src={selfieImg} alt="Picture of me" id="imgOfMe" />
            <div id="expandBtn">
              <p>Asher Leffler</p> <ArrowLeft size={28} color="white" />
            </div>
          </div>
        </Link>
        <nav className="desktop-nav">
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
            className={activePage === "My Future" ? "active" : ""}
            onClick={() => setActivePage("My Future")}
          >
            My Future
          </Link>
        </nav>
        <nav className="mobile-nav">
          <button className="mobile-nav-button">
            <Menu
              onClick={openMenu}
              id="menuIcon"
              size={32}
              color="white"
              strokeWidth={1.5}
            />
          </button>
        </nav>
      </header>
      <div id="drop-down">
      <nav className="dropdown-nav">
          <Link
            to={"/"}
            className={activePage === "Home" ? "active" : ""}
            onClick={() => {
              setActivePage("Home");
            }}
          >
            Home
          </Link>
          <Link
            to={"/myJourney"}
            className={activePage === "My Journey" ? "active" : ""}
            onClick={() => {
              setActivePage("My Journey");
            }}
          >
            My Journey
          </Link>
          <Link
            to={"/myFuture"}
            className={activePage === "My Future" ? "active" : ""}
            onClick={() => {
              setActivePage("My Future");
            }}
          >
            My Future
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Header;
