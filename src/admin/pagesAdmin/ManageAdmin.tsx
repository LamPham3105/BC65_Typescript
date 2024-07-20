import React from "react";
import { NavLink } from "react-router-dom";

const ManageAdmin = () => {
  return (
    <div className="container">
      <div className="page-inner">
        {/* card */}
        <h3 className="fw-bold mb-3">Card</h3>
        <div className="row">
          <div className="col-sm-6 col-md-3">
            <div className="card card-stats card-primary card-round">
              <div className="card-body">
                <div className="row">
                  <div className="col-5">
                    <div className="icon-big text-center">
                      <i className="fas fa-users"></i>
                    </div>
                  </div>
                  <div className="col-7 col-stats">
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
            <div className="card card-stats card-info card-round">
              <div className="card-body">
                <div className="row">
                  <div className="col-5">
                    <div className="icon-big text-center">
                      <i className="fas fa-user-check"></i>
                    </div>
                  </div>
                  <div className="col-7 col-stats">
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
            <div className="card card-stats card-success card-round">
              <div className="card-body">
                <div className="row">
                  <div className="col-5">
                    <div className="icon-big text-center">
                      <i className="fas fa-chart-pie"></i>
                    </div>
                  </div>
                  <div className="col-7 col-stats">
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
            <div className="card card-stats card-secondary card-round">
              <div className="card-body">
                <div className="row">
                  <div className="col-5">
                    <div className="icon-big text-center">
                      <i className="far fa-check-circle"></i>
                    </div>
                  </div>
                  <div className="col-7 col-stats">
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
        <div className="row">
          <div className="col-md-4">
            <div className="card card-secondary">
              <div className="card-body skew-shadow">
                <h1>3,072</h1>
                <h5 className="op-8">Total conversations</h5>
                <div className="pull-right">
                  <h3 className="fw-bold op-8">88%</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card card-secondary bg-secondary-gradient">
              <div className="card-body bubble-shadow">
                <h1>188</h1>
                <h5 className="op-8">Total Sales</h5>
                <div className="pull-right">
                  <h3 className="fw-bold op-8">25%</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card card-secondary bg-secondary-gradient">
              <div className="card-body curves-shadow">
                <h1>12</h1>
                <h5 className="op-8">New Users</h5>
                <div className="pull-right">
                  <h3 className="fw-bold op-8">70%</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
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
          <div className="col-md-4">
            <div className="card">
              <div className="card-body pb-0">
                <div className="h1 fw-bold float-end text-danger">-3%</div>
                <h2 className="mb-2">27</h2>
                <p className="text-muted">New Users</p>
                <div className="pull-in sparkline-fix">
                  <div id="lineChart2"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body pb-0">
                <div className="h1 fw-bold float-end text-warning">+7%</div>
                <h2 className="mb-2">213</h2>
                <p className="text-muted">Transactions</p>
                <div className="pull-in sparkline-fix">
                  <div id="lineChart3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6 col-sm-4 col-lg-2">
            <div className="card">
              <div className="card-body p-3 text-center">
                <div className="text-end text-success">
                  6%
                  <i className="fa fa-chevron-up"></i>
                </div>
                <div className="h1 m-0">43</div>
                <div className="text-muted mb-3">New Tickets</div>
              </div>
            </div>
          </div>
          <div className="col-6 col-sm-4 col-lg-2">
            <div className="card">
              <div className="card-body p-3 text-center">
                <div className="text-end text-danger">
                  -3%
                  <i className="fa fa-chevron-down"></i>
                </div>
                <div className="h1 m-0">17</div>
                <div className="text-muted mb-3">Closed Today</div>
              </div>
            </div>
          </div>
          <div className="col-6 col-sm-4 col-lg-2">
            <div className="card">
              <div className="card-body p-3 text-center">
                <div className="text-end text-success">
                  9%
                  <i className="fa fa-chevron-up"></i>
                </div>
                <div className="h1 m-0">7</div>
                <div className="text-muted mb-3">New Replies</div>
              </div>
            </div>
          </div>
          <div className="col-6 col-sm-4 col-lg-2">
            <div className="card">
              <div className="card-body p-3 text-center">
                <div className="text-end text-success">
                  3%
                  <i className="fa fa-chevron-up"></i>
                </div>
                <div className="h1 m-0">27.3K</div>
                <div className="text-muted mb-3">Followers</div>
              </div>
            </div>
          </div>
          <div className="col-6 col-sm-4 col-lg-2">
            <div className="card">
              <div className="card-body p-3 text-center">
                <div className="text-end text-danger">
                  -2%
                  <i className="fa fa-chevron-down"></i>
                </div>
                <div className="h1 m-0">$95</div>
                <div className="text-muted mb-3">Daily Earnings</div>
              </div>
            </div>
          </div>
          <div className="col-6 col-sm-4 col-lg-2">
            <div className="card">
              <div className="card-body p-3 text-center">
                <div className="text-end text-danger">
                  -1%
                  <i className="fa fa-chevron-down"></i>
                </div>
                <div className="h1 m-0">621</div>
                <div className="text-muted mb-3">Products</div>
              </div>
            </div>
          </div>
        </div>
        {/* end card */}

        {/* timeline */}
        <h3 className="fw-bold mb-3">Timeline</h3>
        <div className="row">
          <div className="col-md-12">
            <ul className="timeline">
              <li>
                <div className="timeline-badge">
                  <i className="far fa-paper-plane"></i>
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4 className="timeline-title">Mussum ipsum cacilds</h4>
                    <p>
                      <small className="text-muted">
                        <i className="far fa-paper-plane"></i> 11 hours ago via
                        Twitter
                      </small>
                    </p>
                  </div>
                  <div className="timeline-body">
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                  </div>
                </div>
              </li>
              <li className="timeline-inverted">
                <div className="timeline-badge warning">
                  <i className="far fa-bell"></i>
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4 className="timeline-title">Mussum ipsum cacilds</h4>
                  </div>
                  <div className="timeline-body">
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="timeline-badge danger">
                  <i className="icon-close"></i>
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4 className="timeline-title">Mussum ipsum cacilds</h4>
                  </div>
                  <div className="timeline-body">
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                  </div>
                </div>
              </li>
              <li className="timeline-inverted">
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4 className="timeline-title">Mussum ipsum cacilds</h4>
                  </div>
                  <div className="timeline-body">
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="timeline-badge info">
                  <i className="icon-tag"></i>
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4 className="timeline-title">Mussum ipsum cacilds</h4>
                  </div>
                  <div className="timeline-body">
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                    <hr />
                    <div className="btn-group dropdown">
                      <button
                        type="button"
                        className="btn btn-primary btn-sm dropdown-toggle"
                        data-bs-toggle="dropdown"
                      >
                        <span className="btn-label">
                          <i className="fa fa-cog"></i>
                        </span>
                      </button>
                      <ul className="dropdown-menu" role="menu">
                        <li>
                          <NavLink className="dropdown-item" to="#">
                            Action
                          </NavLink>
                          <NavLink className="dropdown-item" to="#">
                            Another action
                          </NavLink>
                          <div className="dropdown-divider"></div>
                          <NavLink className="dropdown-item" to="#">
                            Something else here
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4 className="timeline-title">Mussum ipsum cacilds</h4>
                  </div>
                  <div className="timeline-body">
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                  </div>
                </div>
              </li>
              <li className="timeline-inverted">
                <div className="timeline-badge success">
                  <i className="icon-credit-card"></i>
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4 className="timeline-title">Mussum ipsum cacilds</h4>
                  </div>
                  <div className="timeline-body">
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* end timeline */}

        {/* pricing */}
        <h3 className="fw-bold mb-3">Pricing</h3>
        <div className="row justify-content-center align-items-center mb-5">
          <div className="col-md-3 ps-md-0">
            <div className="card-pricing2 card-success">
              <div className="pricing-header">
                <h3 className="fw-bold mb-3">Standard</h3>
                <span className="sub-title">Lorem ipsum</span>
              </div>
              <div className="price-value">
                <div className="value">
                  <span className="currency">$</span>
                  <span className="amount">
                    10.<span>99</span>
                  </span>
                  <span className="month">/month</span>
                </div>
              </div>
              <ul className="pricing-content">
                <li>50GB Disk Space</li>
                <li>50 Email Accounts</li>
                <li>50GB Monthly Bandwidth</li>
                <li className="disable">10 Subdomains</li>
                <li className="disable">15 Domains</li>
              </ul>
              <NavLink
                to="#"
                className="btn btn-success btn-border btn-lg w-75 fw-bold mb-3"
              >
                Sign up
              </NavLink>
            </div>
          </div>
          <div className="col-md-3 ps-md-0 pe-md-0">
            <div className="card-pricing2 card-primary">
              <div className="pricing-header">
                <h3 className="fw-bold mb-3">Business</h3>
                <span className="sub-title">Lorem ipsum</span>
              </div>
              <div className="price-value">
                <div className="value">
                  <span className="currency">$</span>
                  <span className="amount">
                    20.<span>99</span>
                  </span>
                  <span className="month">/month</span>
                </div>
              </div>
              <ul className="pricing-content">
                <li>60GB Disk Space</li>
                <li>60 Email Accounts</li>
                <li>60GB Monthly Bandwidth</li>
                <li>15 Subdomains</li>
                <li className="disable">20 Domains</li>
              </ul>
              <NavLink
                to="#"
                className="btn btn-primary btn-border btn-lg w-75 fw-bold mb-3"
              >
                Sign up
              </NavLink>
            </div>
          </div>
          <div className="col-md-3 pe-md-0">
            <div className="card-pricing2 card-secondary">
              <div className="pricing-header">
                <h3 className="fw-bold mb-3">Premium</h3>
                <span className="sub-title">Lorem ipsum</span>
              </div>
              <div className="price-value">
                <div className="value">
                  <span className="currency">$</span>
                  <span className="amount">
                    30.<span>99</span>
                  </span>
                  <span className="month">/month</span>
                </div>
              </div>
              <ul className="pricing-content">
                <li>70GB Disk Space</li>
                <li>70 Email Accounts</li>
                <li>70GB Monthly Bandwidth</li>
                <li>20 Subdomains</li>
                <li>25 Domains</li>
              </ul>
              <NavLink
                to="#"
                className="btn btn-secondary btn-border btn-lg w-75 fw-bold mb-3"
              >
                Sign up
              </NavLink>
            </div>
          </div>
        </div>
        {/* end pricing */}

        {/* customize card */}
        <h3 className="fw-bold mb-3">Customized Card</h3>
        <div className="row">
          <div className="d-flex justify-content-center align-items-center">
            <div className="col-md-4">
              <div className="card card-profile">
                <div
                  className="card-header"
                  style={{ backgroundImage: "url(assets/img/blogpost.jpg)" }}
                >
                  <div className="profile-picture">
                    <div className="avatar avatar-xl">
                      <img
                        src="assets/img/profile.jpg"
                        alt="Profile"
                        className="avatar-img rounded-circle"
                      />
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="user-profile text-center">
                    <div className="name">Hizrian, 19</div>
                    <div className="job">Frontend Developer</div>
                    <div className="desc">A man who hates loneliness</div>
                    <div className="social-media">
                      <NavLink
                        to="#"
                        className="btn btn-info btn-twitter btn-sm btn-link"
                      >
                        <span className="btn-label just-icon">
                          <i className="icon-social-twitter"></i>
                        </span>
                      </NavLink>
                      <NavLink
                        to="#"
                        className="btn btn-primary btn-sm btn-link"
                        rel="publisher"
                      >
                        <span className="btn-label just-icon">
                          <i className="icon-social-facebook"></i>
                        </span>
                      </NavLink>
                      <NavLink
                        to="#"
                        className="btn btn-danger btn-sm btn-link"
                        rel="publisher"
                      >
                        <span className="btn-label just-icon">
                          <i className="icon-social-instagram"></i>
                        </span>
                      </NavLink>
                    </div>
                    <div className="view-profile">
                      <NavLink to="#" className="btn btn-secondary w-100">
                        View Full Profile
                      </NavLink>
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  <div className="row user-stats text-center">
                    <div className="col">
                      <div className="number">125</div>
                      <div className="title">Post</div>
                    </div>
                    <div className="col">
                      <div className="number">25K</div>
                      <div className="title">Followers</div>
                    </div>
                    <div className="col">
                      <div className="number">134</div>
                      <div className="title">Following</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end customize card */}
      </div>
    </div>
  );
};

export default ManageAdmin;
