import Header from "./Header";
import "../css/MyJourney.css";
import { useEffect, useState } from "react";
interface headerStates {
  activePage: string;
  setActivePage: (page: string) => void;
}
interface HomeProps {
  headerStates: headerStates;
}

interface CSSPropertiesWithVars extends React.CSSProperties {
  [key: `--${string}`]: string | number; // Allows any custom CSS variable
}
interface LineProps {
  rotation: boolean;
  number: number;
  text: string;
}

const LineComponent: React.FC<LineProps> = ({ rotation, number, text }) => {
  const lineStyle: CSSPropertiesWithVars = {
    "--before-content": `"${text}"`,
    "--rotation": rotation ? "45deg" : "-45deg",
    "--bottomValue": rotation ? "-150px" : "-150px",
    "--leftValue": rotation ? "-112px" : "-120px",
  };

  const findTop = () => {
    switch (number) {
      case 1:
        return "50%";
      case 2:
        return "100%";
      case 3:
        return "150%";
      case 4:
        return "200%";
      case 5:
        return "250%";
      default:
        return "300%";
    }
  };

  const findColor = () => {
    switch (number) {
      case 1:
        return "rgb(150, 150, 255)";
      case 2:
        return "rgb(255, 150, 150)";
      case 3:
        return "rgb(150, 255, 150)";
      case 4:
        return "rgb(255, 255, 150)";
      case 5:
        return "rgb(255, 150, 255)";
      default:
        return "rgb(150, 255, 255)";
    }
  };

  return (
    <>
      <div
        className="line"
        style={{
          rotate: rotation ? "-45deg" : "45deg",
          backgroundColor: findColor(),
          top: findTop(),
          ...lineStyle,
          left: rotation ? "56.12%" : "43.8%",
        }}
      ></div>
    </>
  );
};

const MyJourney: React.FC<HomeProps> = ({ headerStates }) => {
  const [lineHeight, setLineHeight] = useState(0);

  const addHeightToLine = () => {
    const mainLine = document.getElementById("mainLine");
    if (mainLine) {
      mainLine.style.animation = "lineAnimation 1s ease-in-out forwards";
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 1778 && window.scrollY > lineHeight) {
        setLineHeight(window.scrollY);
      } else {
        addHeightToLine();
      }
    };

    window.addEventListener("scroll", () => {
      handleScroll();
    });

    return window.removeEventListener("scroll", () => {
      handleScroll();
    });
  }, [lineHeight]);

  return (
    <>
      <Header headerStates={headerStates} />
      <div>
        <br />
        <br />
        <br />
        <br />
        <div className="journey-section">
          <div className="start"></div>
          <div id="mainLine" style={{ height: lineHeight + 300 }}></div>
          <LineComponent
            rotation={true}
            number={1}
            text="I first started in a computer science class in the eighth grade and learned a small amount of HTML and CSS."
          />
          <LineComponent
            rotation={false}
            number={2}
            text="I then took a refresher course in HTML and CSS and started working on practice websites."
          />
          <LineComponent
            rotation={true}
            number={3}
            text="I watched a video on JavaScript and started to build projects with it to help create a foundation."
          />
          <LineComponent
            rotation={false}
            number={4}
            text="I also started to work on my design skills and practice creating appealing designs."
          />
          <LineComponent
            rotation={true}
            number={5}
            text="After that, I started to study the behind the scenes of a website and started to work on that."
          />
          <LineComponent
            rotation={false}
            number={6}
            text="Finally, I focused on understanding the software used in programming so that I could make my own."
          />
        </div>
      </div>
    </>
  );
};

export default MyJourney;
