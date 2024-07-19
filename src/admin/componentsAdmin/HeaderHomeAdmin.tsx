import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

const HeaderHomeAdmin: React.FC = () => {
  return (
    <div className="sidebar" data-background-color="dark">
      <div className="sidebar-logo">
        {/* Logo Header */}
        <div className="logo-header" data-background-color="dark">
          <NavLink to="#" className="logo">
            <img
              src="assets/img/kaiadmin/logo_light.svg"
              alt="navbar brand"
              className="navbar-brand"
              height="20"
            />
          </NavLink>
          <div className="nav-toggle">
            <button className="btn btn-toggle toggle-sidebar">
              <i className="gg-menu-right"></i>
            </button>
            <button className="btn btn-toggle sidenav-toggler">
              <i className="gg-menu-left"></i>
            </button>
          </div>
          <button className="topbar-toggler more">
            <i className="gg-more-vertical-alt"></i>
          </button>
        </div>
        {/* End Logo Header */}
      </div>
      <div className="sidebar-wrapper scrollbar scrollbar-inner">
        <div className="sidebar-content">
          <ul className="nav nav-secondary">
            <li className="nav-section">
              <span className="sidebar-mini-icon">
                <i className="fa fa-ellipsis-h"></i>
              </span>
              <h4 className="text-section">Components</h4>
            </li>
            <li className="nav-item">
              <NavLink to="#" data-bs-toggle="collapse">
                <i className="fas fa-pen-square"></i>
                <p>Forms</p>
                <span className="caret"></span>
              </NavLink>
              <div className="collapse" id="forms">
                <ul className="nav nav-collapse">
                  <li>
                    <NavLink to="#">
                      <span className="sub-item">Basic Form</span>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <NavLink to="#" data-bs-toggle="collapse">
                <i className="fas fa-map-marker-alt"></i>
                <p>Maps</p>
                <span className="caret"></span>
              </NavLink>
              <div className="collapse" id="maps">
                <ul className="nav nav-collapse">
                  <li>
                    <NavLink to="/maps/googlemaps.html">
                      <span className="sub-item">Google Maps</span>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <NavLink to="/widgets.html">
                <i className="fas fa-desktop"></i>
                <p>Widgets</p>
                <span className="badge badge-success">4</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="#" data-bs-toggle="collapse">
                <i className="fas fa-bars"></i>
                <p>Menu Levels</p>
                <span className="caret"></span>
              </NavLink>
              <div className="collapse" id="submenu">
                <ul className="nav nav-collapse">
                  <li>
                    <NavLink to="#" data-bs-toggle="collapse">
                      <span className="sub-item">Level 1</span>
                      <span className="caret"></span>
                    </NavLink>
                    <div className="collapse" id="subnav1">
                      <ul className="nav nav-collapse subnav">
                        <li>
                          <NavLink to="#">
                            <span className="sub-item">Level 2</span>
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="#">
                            <span className="sub-item">Level 2</span>
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <NavLink to="#" data-bs-toggle="collapse">
                      <span className="sub-item">Level 1</span>
                      <span className="caret"></span>
                    </NavLink>
                    <div className="collapse" id="subnav2">
                      <ul className="nav nav-collapse subnav">
                        <li>
                          <NavLink to="#">
                            <span className="sub-item">Level 2</span>
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <NavLink to="#">
                      <span className="sub-item">Level 1</span>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeaderHomeAdmin;
