import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import MyJourney from "./components/MyJourney";
import Location from "./components/Location";

const AppRouter: React.FC = () => {
  const [activePage, setActivePage] = useState("Home");

  return (
    <Routes>
      <Route
        path="/"
        element={<Home headerStates={{ activePage, setActivePage }} />}
      />
      <Route
        path="/myJourney"
        element={<MyJourney headerStates={{ activePage, setActivePage }} />}
      />
      <Route
        path="/location"
        element={<Location headerStates={{ activePage, setActivePage }} />}
      />
    </Routes>
  );
};

export default AppRouter;
