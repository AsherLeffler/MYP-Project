import Header from "./Header";
import Footer from "./Footer";
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
            <br />
            <br />
            <br />
            <br />
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
        <hr className="diagonal-divider" />
        <div className="right-end-section">
          <div className="learned-wrapper">
            <h2>What I've Learned</h2>
            <ul>
              <li>HTML - I've learned how to structure a web page.</li>
              <li>
                CSS - I've learned how to style a web page to look appealing.
              </li>
              <li>
                JavaScript - I've learned how to move and manipulate elements.
              </li>
              <li>
                Software - I've learned how to write and edit code and maintain
                it.
              </li>
              <li>
                Production - I've learned how to publish my web page to the
                internet.
              </li>
            </ul>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
        <h1 id="projectsTitle">Projects I've Built</h1>
        <div className="image-card-container">
          <div className="image-card">
            <img src="https://picsum.photos/200/110" alt="Image 1" />
            <div className="card-content">
              <h3>Digital Clock</h3>
                <p>
                When learning JavaScript, I learned how to use time in
                applications so I made a digital clock to help practice it.
                This project helped me understand how to work with the Date object,
                manipulate DOM elements, and update the UI in real-time.
                </p>
            </div>
          </div>
          <div className="image-card">
            <img src="https://picsum.photos/200/111" alt="Image 2" />
            <div className="card-content">
              <h3>Calculator</h3>
                <p>
                This project was created to practice basic arithmetic operations
                using JavaScript. It helped me understand event handling, 
                managing state, and performing calculations in a web application.
                </p>
            </div>
          </div>
          <div className="image-card">
            <img src="https://picsum.photos/200/109" alt="Image 3" />
            <div className="card-content">
              <h3>Weather App</h3>
                <p>
                This project was created to fetch and display weather data from an API.
                It helped me understand how to work with asynchronous operations, 
                handle API requests, and dynamically update the UI based on the data received.
                </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
