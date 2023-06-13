import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { HomeContext } from "./HomeContext";

const HomeList = () => {
  const { homes, deleteHome } = useContext(HomeContext);
  return (
    <div className="m-5">
      <h2>Homes</h2>
      {homes.length === 0 ? (
        <h2>No data available.</h2>
      ) : (
        <table className="table align-middle">
          <thead>
            <tr>
              <th>Title</th>
              <th>Street</th>
              <th>City</th>
              <th>State</th>
              <th>Country</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {homes.map((home, index) => (
              <tr key={index}>
                <td>{home.title}</td>
                <td>{home.street}</td>
                <td>{home.city}</td>
                <td>{home.state}</td>
                <td>{home.country}</td>
                <td>
                  <button
                    className="btn btn-dark text-light"
                    onClick={() => deleteHome(index)}
                  >
                    Delete
                  </button>
                  <Link
                    className="btn btn-dark text-light mx-2"
                    to={`/view/${index}`}
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default HomeList;
