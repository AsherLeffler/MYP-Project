import { Link } from "react-router-dom";
import selfieImg from "/selfie.webp";

const Header: React.FC = () => {
  return (
    <header>
        <Link to={"/"} onClick={() => window.location.reload()}>
            <img src={selfieImg} alt="Picture of me" id="imgOfMe" />
        </Link>
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/location"}>Location</Link>
      </nav>
    </header>
  );
};

export default Header;
