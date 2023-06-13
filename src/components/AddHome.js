import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { HomeContext } from "./HomeContext";
import { useFormik } from "formik";

const AddHome = () => {
  const { addHome } = useContext(HomeContext);
  const [homeData, setHomeData] = useState({
    title: "",
    street: "",
    city: "",
    state: "",
    country: "",
  });
  const navigate = useNavigate();

  const validation = (values) => {
    let errors = {};

    if (!values.title) {
      errors.title = "Required";
    }

    if (!values.street) {
      errors.street = "Required";
    }

    if (!values.city) {
      errors.city = "Required";
    }

    if (!values.state) {
      errors.state = "Required";
    }

    if (!values.country) {
      errors.country = "Required";
    }

    return errors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setHomeData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddHome = () => {
    addHome(homeData);
    navigate("/");
  };

  const handleChange = (e) => {
    handleInputChange(e);
    formik.handleChange(e);
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      street: "",
      city: "",
      state: "",
      country: "",
    },
    validate: validation,
    onSubmit: handleAddHome,
  });

  return (
    <div className="p-5 d-flex justify-content-center">
      <form onSubmit={formik.handleSubmit}>
        <div className="row m-3">
          <h2>Add Home</h2>
        </div>
        <div className="row m-3">
          <div className="col-sm-10 w-100">
            <input
              className="form-control"
              type="text"
              name="title"
              placeholder="Title"
              value={formik.values.title}
              onChange={handleChange}
              onBlur={formik.handleBlur}
            />
            <div style={{ width: "30px", height: "20px" }}>
              {formik.errors.title && formik.touched.title && (
                <div className="text-danger">{formik.errors.title}</div>
              )}
            </div>
          </div>
        </div>
        <div className="row m-3">
          <div className="col-sm-10 w-100">
            <input
              className="form-control"
              type="text"
              name="street"
              placeholder="Street"
              value={formik.values.street}
              onChange={handleChange}
              onBlur={formik.handleBlur}
            />
            <div style={{ width: "30px", height: "20px" }}>
              {formik.errors.street && formik.touched.street && (
                <div className="text-danger">{formik.errors.street}</div>
              )}
            </div>
          </div>
        </div>

        <div className="row m-3">
          <div className="col-sm-10 w-100">
            <input
              className="form-control"
              type="text"
              name="city"
              placeholder="City"
              value={formik.values.city}
              onChange={handleChange}
              onBlur={formik.handleBlur}
            />

            <div style={{ width: "30px", height: "20px" }}>
              {formik.errors.city && formik.touched.city && (
                <div className="text-danger">{formik.errors.city}</div>
              )}
            </div>
          </div>
        </div>
        <div className="row m-3">
          <div className="col-sm-10 w-100">
            <input
              className="form-control"
              type="text"
              name="state"
              placeholder="State"
              value={formik.values.state}
              onChange={handleChange}
              onBlur={formik.handleBlur}
            />
            <div style={{ width: "30px", height: "20px" }}>
              {formik.errors.state && formik.touched.state && (
                <div className="text-danger">{formik.errors.state}</div>
              )}
            </div>
          </div>
        </div>
        <div className="row m-3">
          <div className="col-sm-10 w-100">
            <input
              className="form-control"
              type="text"
              name="country"
              placeholder="Country"
              value={formik.values.country}
              onChange={handleChange}
              onBlur={formik.handleBlur}
            />
            <div style={{ width: "30px", height: "20px" }}>
              {formik.errors.country && formik.touched.country && (
                <div className="text-danger">{formik.errors.country}</div>
              )}
            </div>
          </div>
        </div>
        <div className="row m-3">
          <div className="row m-3">
            <div className="col-sm-10 w-100 d-flex justify-content-center">
              <button type="submit" className="btn btn-dark">
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddHome;
