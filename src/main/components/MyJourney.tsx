import Header from "./Header";
import Footer from "./Footer";
import "../css/MyJourney.css";
import { useEffect, useState, useCallback } from "react";

interface headerStates {
  activePage: string;
  setActivePage: (page: string) => void;
}
interface HomeProps {
  headerStates: headerStates;
}

interface CSSPropertiesWithVars extends React.CSSProperties {
  [key: `--${string}`]: string | number;
}
interface LineProps {
  rotation: boolean;
  number: number;
  text: string;
  isVisible: boolean;
}

const LineComponent: React.FC<LineProps> = ({
  rotation,
  number,
  text,
  isVisible,
}) => {
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
        return "rgb(180, 180, 255)";
      case 2:
        return "rgb(255, 180, 180)";
      case 3:
        return "rgb(180, 255, 180)";
      case 4:
        return "rgb(255, 255, 180)";
      case 5:
        return "rgb(255, 180, 255)";
      default:
        return "rgb(180, 255, 255)";
    }
  };

  return (
    <div
      className="line"
      style={{
        opacity: isVisible ? 1 : 0,
        transition: "opacity 0.5s ease",
        rotate: rotation ? "-45deg" : "45deg",
        backgroundColor: findColor(),
        top: findTop(),
        ...lineStyle,
        left: rotation ? "56.12%" : "43.8%",
      }}
    ></div>
  );
};

const MyJourney: React.FC<HomeProps> = ({ headerStates }) => {
  const [lineHeight, setLineHeight] = useState(0);
  const [visibleLines, setVisibleLines] = useState<number[]>([]);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const addHeightToLine = () => {
    const mainLine = document.getElementById("mainLine");
    if (mainLine) {
      mainLine.style.animation = "lineAnimation 1s ease-in-out forwards";
    }
  };

  const checkLineVisibility = useCallback(
    (scrollY: number) => {
      const thresholds = [20, 300, 640, 960, 1320, 1620];
      const newVisibleLines = thresholds.reduce(
        (visible, threshold, index) => {
          if (scrollY >= threshold && !visibleLines.includes(index + 1))
            visible.push(index + 1);
          return visible;
        },
        [...visibleLines]
      );
      setVisibleLines(newVisibleLines);
    },
    [visibleLines]
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    let prevScrollY: number = window.scrollY;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > prevScrollY) {
        if (scrollY < 1778 && scrollY > lineHeight) {
          setLineHeight(scrollY);
        } else if (scrollY >= 1778) {
          addHeightToLine();
        }
        checkLineVisibility(scrollY);
      }
      prevScrollY = scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lineHeight, checkLineVisibility]);

  const lineText = [
    "I first started in a computer science class in the eighth grade and learned a small amount of HTML and CSS.",
    "I then took a refresher course in HTML and CSS and started working on practice websites.",
    "I watched a video on JavaScript and started to build projects with it to help create a foundation.",
    "I also started to work on my design skills and practice creating appealing designs.",
    "After that, I started to study the behind the scenes of a website and started to work on that.",
    "Finally, I focused on understanding the software used in programming so that I could make my own.",
  ];

  return (
    <>
      <Header headerStates={headerStates} />
      <div className="mainBody">
        <h1 className="journey-header">My Journey</h1>
        <br />
        <br />
        <br />
        <br />
        <div className="journey-section">
          <div className="start"></div>
          <div id="mainLine" style={{ height: lineHeight + 300 }}></div>
          {windowWidth >= 768 && [...Array(6).keys()].map((i) => (
            <LineComponent
              key={i}
              rotation={i % 2 === 0}
              number={i + 1}
              text={lineText[i]}
              isVisible={visibleLines.includes(i + 1)}
            />
          ))}
        </div>
        <br />
        <br />
        <br />
        <br />
        <div id="endJourney">
          <h1>Summary</h1>
          <p>
            Overall, I've come far in the time that I've spent learning how to
            program. From the very beginning, I knew that I wanted to learn how
            to program, I just didn't know where to start. After doing this
            project, I learned what topics are most important to learn
            programming and what software to actually use. I want to continue my
            journey and learn more about programming and software including
            building my own.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MyJourney;
