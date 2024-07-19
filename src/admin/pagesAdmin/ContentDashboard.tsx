import React from "react";
import { NavLink } from "react-router-dom";

const ContentDashboard = () => {
  return (
    <div className="container">
      <div className="page-inner">
        <div className="d-flex align-items-left align-items-md-center flex-column flex-md-row pt-2 pb-4">
          <div>
            <h3 className="fw-bold mb-3">Dashboard</h3>
            <h6 className="op-7 mb-2">Free Bootstrap 5 Admin Dashboard</h6>
          </div>
          <div className="ms-md-auto py-2 py-md-0">
            <NavLink to="#" className="btn btn-label-info btn-round me-2">
              Manage
            </NavLink>
            <NavLink to="#" className="btn btn-primary btn-round">
              Add Customer
            </NavLink>
          </div>
        </div>

        {/* số lượng người dùng */}
        <div className="row">
          <div className="col-sm-6 col-md-3">
            <div className="card card-stats card-round">
              <div className="card-body">
                <div className="row align-items-center">
                  <div className="col-icon">
                    <div className="icon-big text-center icon-primary bubble-shadow-small">
                      <i className="fas fa-users"></i>
                    </div>
                  </div>
                  <div className="col col-stats ms-3 ms-sm-0">
                    <div className="numbers">
                      <p className="card-category">Visitors</p>
                      <h4 className="card-title">1,294</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="card card-stats card-round">
              <div className="card-body">
                <div className="row align-items-center">
                  <div className="col-icon">
                    <div className="icon-big text-center icon-info bubble-shadow-small">
                      <i className="fas fa-user-check"></i>
                    </div>
                  </div>
                  <div className="col col-stats ms-3 ms-sm-0">
                    <div className="numbers">
                      <p className="card-category">Subscribers</p>
                      <h4 className="card-title">1303</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="card card-stats card-round">
              <div className="card-body">
                <div className="row align-items-center">
                  <div className="col-icon">
                    <div className="icon-big text-center icon-success bubble-shadow-small">
                      <i className="fas fa-luggage-cart"></i>
                    </div>
                  </div>
                  <div className="col col-stats ms-3 ms-sm-0">
                    <div className="numbers">
                      <p className="card-category">Sales</p>
                      <h4 className="card-title">$ 1,345</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="card card-stats card-round">
              <div className="card-body">
                <div className="row align-items-center">
                  <div className="col-icon">
                    <div className="icon-big text-center icon-secondary bubble-shadow-small">
                      <i className="far fa-check-circle"></i>
                    </div>
                  </div>
                  <div className="col col-stats ms-3 ms-sm-0">
                    <div className="numbers">
                      <p className="card-category">Order</p>
                      <h4 className="card-title">576</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* đồ thị */}
        <div className="row">
          <div className="col-md-8">
            <div className="card card-round">
              <div className="card-header">
                <div className="card-head-row">
                  <div className="card-title">User Statistics</div>
                  <div className="card-tools">
                    <NavLink
                      to="#"
                      className="btn btn-label-success btn-round btn-sm me-2"
                    >
                      <span className="btn-label">
                        <i className="fa fa-pencil"></i>
                      </span>
                      Export
                    </NavLink>
                    <NavLink
                      to="#"
                      className="btn btn-label-info btn-round btn-sm"
                    >
                      <span className="btn-label">
                        <i className="fa fa-print"></i>
                      </span>
                      Print
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="chart-container" style={{ minHeight: "375px" }}>
                  <canvas id="statisticsChart"></canvas>
                </div>
                <div id="myChartLegend"></div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card card-primary card-round">
              <div className="card-header">
                <div className="card-head-row">
                  <div className="card-title">Daily Sales</div>
                  <div className="card-tools">
                    <div className="dropdown">
                      <button
                        className="btn btn-sm btn-label-light dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Export
                      </button>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <NavLink className="dropdown-item" to="#">
                          Action
                        </NavLink>
                        <NavLink className="dropdown-item" to="#">
                          Another action
                        </NavLink>
                        <NavLink className="dropdown-item" to="#">
                          Something else here
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-category">March 25 - April 02</div>
              </div>
              <div className="card-body pb-0">
                <div className="mb-4 mt-2">
                  <h1>$4,578.58</h1>
                </div>
                <div className="pull-in">
                  <canvas id="dailySalesChart"></canvas>
                </div>
              </div>
            </div>
            <div className="card card-round">
              <div className="card-body pb-0">
                <div className="h1 fw-bold float-end text-primary">+5%</div>
                <h2 className="mb-2">17</h2>
                <p className="text-muted">Users online</p>
                <div className="pull-in sparkline-fix">
                  <div id="lineChart"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* bảng */}
        <div className="row">
          <div className="col-md-12">
            <div className="card card-round">
              <div className="card-header">
                <div className="card-head-row card-tools-still-right">
                  <h4 className="card-title">Users Geolocation</h4>
                  <div className="card-tools">
                    <button className="btn btn-icon btn-link btn-primary btn-xs">
                      <span className="fa fa-angle-down"></span>
                    </button>
                    <button className="btn btn-icon btn-link btn-primary btn-xs btn-refresh-card">
                      <span className="fa fa-sync-alt"></span>
                    </button>
                    <button className="btn btn-icon btn-link btn-primary btn-xs">
                      <span className="fa fa-times"></span>
                    </button>
                  </div>
                </div>
                <p className="card-category">
                  Map of the distribution of users around the world
                </p>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6">
                    <div className="table-responsive table-hover table-sales">
                      <table className="table">
                        <tbody>
                          <tr>
                            <td>
                              <div className="flag">
                                <img
                                  src="assets/img/flags/id.png"
                                  alt="indonesia"
                                />
                              </div>
                            </td>
                            <td>Indonesia</td>
                            <td className="text-end">2.320</td>
                            <td className="text-end">42.18%</td>
                          </tr>
                          <tr>
                            <td>
                              <div className="flag">
                                <img
                                  src="assets/img/flags/us.png"
                                  alt="united states"
                                />
                              </div>
                            </td>
                            <td>USA</td>
                            <td className="text-end">240</td>
                            <td className="text-end">4.36%</td>
                          </tr>
                          <tr>
                            <td>
                              <div className="flag">
                                <img
                                  src="assets/img/flags/au.png"
                                  alt="australia"
                                />
                              </div>
                            </td>
                            <td>Australia</td>
                            <td className="text-end">119</td>
                            <td className="text-end">2.16%</td>
                          </tr>
                          <tr>
                            <td>
                              <div className="flag">
                                <img
                                  src="assets/img/flags/br.png"
                                  alt="brazil"
                                />
                              </div>
                            </td>
                            <td>Brasil</td>
                            <td className="text-end">640</td>
                            <td className="text-end">11.63%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mapcontainer">
                      <div
                        id="world-map"
                        className="w-100"
                        style={{ height: "300px" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentDashboard;
