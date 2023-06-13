import React, { useContext } from "react";
import { HomeContext } from "./HomeContext";
import { Link, useParams } from "react-router-dom";

const ViewHome = () => {
  const { homes } = useContext(HomeContext);
  const { index } = useParams();
  const homedata = homes[index];

  return (
    <>
      <div>
        <div className="m-5">
          <h2>Homes</h2>
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
              {/* {homedata.map((home, i) => ( */}
              <tr>
                <td>{homedata.title}</td>
                <td>{homedata.street}</td>
                <td>{homedata.city}</td>
                <td>{homedata.state}</td>
                <td>{homedata.country}</td>
                <td>
                  <Link
                    className="btn btn-dark text-light me-2"
                    to={`/edit/${index}`}
                  >
                    Edit
                  </Link>
                </td>
              </tr>
              {/* ))} */}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ViewHome;
