import React from "react";
import { NavLink } from "react-router-dom";

const SearchDashboard: React.FC = () => {
  return (
    <div className="main-header">
      <nav className="navbar navbar-header navbar-header-transparent navbar-expand-lg border-bottom">
        <div className="container-fluid">
          <nav className="navbar navbar-header-left navbar-expand-lg navbar-form nav-search p-0 d-none d-lg-flex">
            <div className="input-group">
              <div className="input-group-prepend">
                <button type="submit" className="btn btn-search pe-1">
                  <i className="fa fa-search search-icon"></i>
                </button>
              </div>
              <input
                type="text"
                placeholder="Search ..."
                className="form-control"
              />
            </div>
          </nav>

          <ul className="navbar-nav topbar-nav ms-md-auto align-items-center">
            <li className="nav-item topbar-icon dropdown hidden-caret d-flex d-lg-none">
              <NavLink
                className="nav-link dropdown-toggle"
                to="#"
                role="button"
                aria-expanded="false"
                aria-haspopup="true"
              >
                <i className="fa fa-search"></i>
              </NavLink>
              <ul className="dropdown-menu dropdown-search animated fadeIn">
                <form className="navbar-left navbar-form nav-search">
                  <div className="input-group">
                    <input
                      type="text"
                      placeholder="Search ..."
                      className="form-control"
                    />
                  </div>
                </form>
              </ul>
            </li>
            <li className="nav-item topbar-icon dropdown hidden-caret">
              <NavLink
                className="nav-link dropdown-toggle"
                to="#"
                id="notifDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fa fa-bell"></i>
                <span className="notification">4</span>
              </NavLink>
              <ul
                className="dropdown-menu notif-box animated fadeIn"
                aria-labelledby="notifDropdown"
              >
                <li>
                  <div className="dropdown-title">
                    You have 4 new notification
                  </div>
                </li>
                <li>
                  <div className="notif-scroll scrollbar-outer">
                    <div className="notif-center">
                      <NavLink to="#">
                        <div className="notif-icon notif-primary">
                          <i className="fa fa-user-plus"></i>
                        </div>
                        <div className="notif-content">
                          <span className="block"> New user registered </span>
                          <span className="time">5 minutes ago</span>
                        </div>
                      </NavLink>
                      <NavLink to="#">
                        <div className="notif-icon notif-success">
                          <i className="fa fa-comment"></i>
                        </div>
                        <div className="notif-content">
                          <span className="block">
                            Rahmad commented on Admin
                          </span>
                          <span className="time">12 minutes ago</span>
                        </div>
                      </NavLink>
                      <NavLink to="#">
                        <div className="notif-img">
                          <img
                            src="assets/img/profile2.jpg"
                            alt="Img Profile"
                          />
                        </div>
                        <div className="notif-content">
                          <span className="block">
                            Reza send messages to you
                          </span>
                          <span className="time">12 minutes ago</span>
                        </div>
                      </NavLink>
                      <NavLink to="#">
                        <div className="notif-icon notif-danger">
                          <i className="fa fa-heart"></i>
                        </div>
                        <div className="notif-content">
                          <span className="block"> Farrah liked Admin </span>
                          <span className="time">17 minutes ago</span>
                        </div>
                      </NavLink>
                    </div>
                  </div>
                </li>
                <li>
                  <NavLink className="see-all" to="javascript:void(0);">
                    See all notifications<i className="fa fa-angle-right"></i>
                  </NavLink>
                </li>
              </ul>
            </li>

            <li className="nav-item topbar-user dropdown hidden-caret">
              <NavLink
                className="dropdown-toggle profile-pic"
                to="#"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className="profile-username">
                  <span className="op-7">Hi,</span>
                  <span className="fw-bold">Hizrian</span>
                </span>
              </NavLink>
              <ul className="dropdown-menu dropdown-user animated fadeIn">
                <div className="dropdown-user-scroll scrollbar-outer">
                  <li>
                    <div className="user-box">
                      <div className="u-text">
                        <h4>Hizrian</h4>
                        <p className="text-muted">hello@example.com</p>
                        <NavLink
                          to="#"
                          className="btn btn-xs btn-secondary btn-sm"
                        >
                          View Profile
                        </NavLink>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="dropdown-divider"></div>
                    <NavLink className="dropdown-item" to="#">
                      My Profile
                    </NavLink>
                    <NavLink className="dropdown-item" to="#">
                      My Balance
                    </NavLink>
                    <NavLink className="dropdown-item" to="#">
                      Inbox
                    </NavLink>
                    <div className="dropdown-divider"></div>
                    <NavLink className="dropdown-item" to="#">
                      Account Setting
                    </NavLink>
                    <div className="dropdown-divider"></div>
                    <NavLink className="dropdown-item" to="#">
                      Logout
                    </NavLink>
                  </li>
                </div>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default SearchDashboard;
