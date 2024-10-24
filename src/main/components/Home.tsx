import Header from "./Header";
import "../css/Home.css";

interface headerStates {
  activePage: string;
  setActivePage: (page: string) => void;
}
interface HomeProps {
  headerStates: headerStates; // Replace 'any' with the appropriate type if known
}

const Home: React.FC<HomeProps> = ({ headerStates }) => {
  const { activePage, setActivePage } = headerStates;

  return (
    <>
      <Header headerStates={{ activePage, setActivePage }} />
      <main className="homePage">
        <article className="home-wrapper">
          <div className="title-section">
            <h1>Hey! I'm Asher Leffler!</h1>
            <p>Student at Millbrook Magnet High School</p>
            <h2 id="chartTitle">How Does Everything Relate?</h2>
            <div className="codeChart">
              <div className="circle">HTML</div>
              <div className="circle">JS</div>
              <div className="circle">CSS</div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </div>
          <div className="middle-divider"></div>
          <div className="information-section">
            <div className="about">
              <h2>About Me</h2>
              <p>
                I am a student at Millbrook Magnet High School in Raleigh, North
                Carolina. I am currently a sophomore for the 2024-2025 school
                year. I have been interested in programming for about 3 years
                now. I have learned HTML, CSS, and JavaScript. I what to keep
                learning the other languages such as React.js and TypeScript.
              </p>
            </div>
            <div className="why">
              <h2>Why I Wanted to Learn How to Code</h2>
              <p>
                I wanted to learn programming because I wanted to make things
                that I could use. I've always been interested in creating things
                that could show up digitally. Not only that, but I also wanted
                to learn how to make websites and apps. In the future, I want to
                be a software engineer so I knew this would be a good start.
              </p>
            </div>
            <div className="overview">
              <h2>Overview of My Journey</h2>
              <p>
                I started learning programming when I was in 8th grade. I
                learned simple HTML and CSS but I really didn't learn much.
                During the first month of working on the personal project, I
                gained a more advanced understanding of those first two
                languages. I then learned JavaScript and started to make this
                project.
              </p>
            </div>
          </div>
        </article>
      </main>
    </>
  );
};

export default Home;
