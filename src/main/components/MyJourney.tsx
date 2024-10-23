import Header from "./Header";

interface headerStates {
  activePage: string;
  setActivePage: (page: string) => void;
}
interface HomeProps {
  headerStates: headerStates; // Replace 'any' with the appropriate type if known
}

const MyJourney: React.FC<HomeProps> = ({ headerStates }) => {
  return (
    <>
      <Header headerStates={headerStates} />
      <div>
        <h1>About</h1>
        <p>This is the about page.</p>
      </div>
    </>
  );
};

export default MyJourney;
