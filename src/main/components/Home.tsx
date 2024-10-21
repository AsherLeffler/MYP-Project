import Header from "./Header";
import "../css/Home.css";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <main className="homePage">
        <article className="home-wrapper">
          <div className="title-section">
            <h1>Hey! I'm Asher Leffler</h1>
            <p>Student at Millbrook Magnet High School</p>
          </div>
          <div className="information-section">
            <h2>About Me</h2>
            <p>
              I am a student at Millbrook Magnet High School in Raleigh, North
              Carolina. I am currently a sophomore for the 2024-2025 school
              year. I have been interested in programming for about 3 years now.
              I have learned HTML, CSS, and JavaScript. I what to keep learning
              the other languages such as React.js and TypeScript.
            </p>
          </div>
        </article>
      </main>
    </>
  );
};

export default Home;
