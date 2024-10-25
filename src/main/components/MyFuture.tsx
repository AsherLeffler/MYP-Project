import Header from "./Header";

interface headerStates {
  activePage: string;
  setActivePage: (page: string) => void;
}
interface HomeProps {
  headerStates: headerStates;
}

const MyFuture: React.FC<HomeProps> = ({ headerStates }) => {
  const { activePage, setActivePage } = headerStates;

  return (
    <>
      <Header headerStates={{ activePage, setActivePage }} />
      <div>
        <h2>My Coding Future</h2>
        <p>
          In the future, I plan to enhance my coding skills by learning new
          programming languages, exploring advanced frameworks, and contributing
          to open-source projects. I aim to stay updated with the latest trends
          in technology and continuously improve my problem-solving abilities.
        </p>
      </div>
    </>
  );
};

export default MyFuture;
