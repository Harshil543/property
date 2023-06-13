import { createContext } from "react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const HomeContext = createContext();

export const HomeProvider = ({ children }) => {
  const [homes, setHomes] = useState(
    JSON.parse(localStorage.getItem("homes")) || []
  );

  const navigate = useNavigate();

  const addHome = (homeData) => {
    const updatedHomes = [...homes, homeData];
    setHomes(updatedHomes);
    localStorage.setItem("homes", JSON.stringify(updatedHomes));
  };

  const editHome = (index, homeData) => {
    const updatedHomes = [...homes];
    updatedHomes[index] = homeData;
    setHomes(updatedHomes);
    localStorage.setItem("homes", JSON.stringify(updatedHomes));
  };

  const deleteHome = (index) => {
    const updatedHomes = homes.filter((_, i) => i !== index);
    setHomes(updatedHomes);
    localStorage.setItem("homes", JSON.stringify(updatedHomes));
    navigate("/");
  };

  return (
    <HomeContext.Provider value={{ homes, addHome, editHome, deleteHome }}>
      {children}
    </HomeContext.Provider>
  );
};
