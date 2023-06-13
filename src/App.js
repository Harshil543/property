import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import { HomeProvider } from "./components/HomeContext";
import HomeList from "./components/HomeList";
import AddHome from "./components/AddHome";
import EditHome from "./components/EditHome";
import ViewHome from "./components/ViewHome";

const App = () => {
  return (
    <>
      <HomeProvider>
        <nav>
          <NavLink
            className="text-reset text-decoration-none btn btn-light m-2"
            to="/"
          >
            Homes
          </NavLink>
          <NavLink
            className="text-reset text-decoration-none btn btn-light"
            to="/add"
          >
            Add Home
          </NavLink>
        </nav>

        <Routes>
          <Route path="/" element={<HomeList />} />
          <Route path="/add" element={<AddHome />} />
          <Route path="/edit/:index" element={<EditHome />} />
          <Route path="/View/:index" element={<ViewHome />} />
        </Routes>
      </HomeProvider>
    </>
  );
};

export default App;
