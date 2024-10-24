import Header from "./Header";

interface headerStates {
  activePage: string;
  setActivePage: (page: string) => void;
}
interface HomeProps {
  headerStates: headerStates; // Replace 'any' with the appropriate type if known
}

const Location: React.FC<HomeProps> = ({ headerStates }) => {
  const { activePage, setActivePage } = headerStates;
  return (
    <>
      <Header headerStates={{ activePage, setActivePage }} />
      <div>
        <h1>Location</h1>
      </div>
    </>
  );
};

export default Location;
