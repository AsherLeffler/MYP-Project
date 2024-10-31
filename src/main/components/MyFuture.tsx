import Header from "./Header";
import Footer from "./Footer";
import "../css/MyFuture.css";
import { useEffect, useState } from "react";

interface headerStates {
  activePage: string;
  setActivePage: (page: string) => void;
}
interface HomeProps {
  headerStates: headerStates;
}

const MyFuture: React.FC<HomeProps> = ({ headerStates }) => {
  const { activePage, setActivePage } = headerStates;
  const [animationActive, setAnimationActive] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimationActive(true);
    }, 400);
  }, []);

  return (
    <>
      <Header headerStates={{ activePage, setActivePage }} />
      <div className="mainBody dark">
        <div className={`slide-in one ${animationActive ? "slide" : ""}`}></div>
        <div className={`slide-in two ${animationActive ? "slide" : ""}`}></div>
      </div>
      <Footer />
    </>
  );
};

export default MyFuture;
