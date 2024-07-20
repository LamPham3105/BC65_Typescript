import React from "react";
import { NavLink } from "react-router-dom";

const FormAdmin: React.FC = () => {
  return (
    <div className="container">
      <div className="page-inner">
        <div className="page-header">
          <h3 className="fw-bold mb-3">Forms</h3>
          <ul className="breadcrumbs mb-3">
            <li className="nav-home">
              <NavLink to="#">
                <i className="icon-home"></i>
              </NavLink>
            </li>
            <li className="separator">
              <i className="icon-arrow-right"></i>
            </li>
            <li className="nav-item">
              <NavLink to="#">Forms</NavLink>
            </li>
            <li className="separator">
              <i className="icon-arrow-right"></i>
            </li>
            <li className="nav-item">
              <NavLink to="#">Basic Form</NavLink>
            </li>
          </ul>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <div className="card-title">Form Elements</div>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6 col-lg-4">
                    <div className="form-group">
                      <label htmlFor="email2">Email Address</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email2"
                        placeholder="Enter Email"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Password"
                      />
                    </div>
                    <div className="form-group form-inline">
                      <label
                        htmlFor="inlineinput"
                        className="col-md-3 col-form-label"
                      >
                        Inline Input
                      </label>
                      <div className="col-md-9 p-0">
                        <input
                          type="text"
                          className="form-control input-full"
                          id="inlineinput"
                          placeholder="Enter Input"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="disableinput">Disable Input</label>
                      <input
                        type="text"
                        className="form-control"
                        id="disableinput"
                        placeholder="Enter Input"
                        disabled
                      />
                    </div>
                    <div className="form-group">
                      <label>Gender</label>
                      <br />
                      <div className="d-flex">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault1"
                          >
                            Male
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault2"
                            defaultChecked
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault2"
                          >
                            Female
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="exampleFormControlSelect1">
                        Example select
                      </label>
                      <select
                        className="form-select"
                        id="exampleFormControlSelect1"
                      >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="exampleFormControlFile1">
                        Example file input
                      </label>
                      <input
                        type="file"
                        className="form-control-file"
                        id="exampleFormControlFile1"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="comment">Comment</label>
                      <textarea
                        className="form-control"
                        id="comment"
                        rows={5}
                      ></textarea>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      >
                        Agree with terms and conditions
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div className="form-group">
                      <div className="input-group mb-3">
                        <span className="input-group-text">$</span>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Amount (to the nearest dollar)"
                        />
                        <span className="input-group-text">.00</span>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="input-group">
                        <span className="input-group-text">With textarea</span>
                        <textarea
                          className="form-control"
                          aria-label="With textarea"
                        ></textarea>
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="input-icon">
                        <span className="input-icon-addon">
                          <i className="fa fa-user"></i>
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Username"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="form-label">People</label>
                      <div className="selectgroup w-100">
                        <label className="selectgroup-item">
                          <input
                            type="radio"
                            name="value"
                            value="50"
                            className="selectgroup-input"
                            defaultChecked
                          />
                          <span className="selectgroup-button">1</span>
                        </label>
                        <label className="selectgroup-item">
                          <input
                            type="radio"
                            name="value"
                            value="100"
                            className="selectgroup-input"
                          />
                          <span className="selectgroup-button">2</span>
                        </label>
                        <label className="selectgroup-item">
                          <input
                            type="radio"
                            name="value"
                            value="150"
                            className="selectgroup-input"
                          />
                          <span className="selectgroup-button">3-4</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-action">
                <button className="btn btn-success">Submit</button>
                <button className="btn btn-danger">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormAdmin;
