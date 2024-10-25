import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import MyJourney from "./components/MyJourney";
import MyFuture from "./components/MyFuture";

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
      path="/myFuture"
      element={<MyFuture headerStates={{ activePage, setActivePage }} />}
      />
      <Route
      path="*"
      element={<Navigate to="/" replace />}
      />
    </Routes>
  );
};

export default AppRouter;
