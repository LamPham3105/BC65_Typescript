//tsrafce
import React from "react";
import { Outlet } from "react-router-dom";
import HeaderHomeAdmin from "../admin/componentsAdmin/HeaderHomeAdmin";
import "../admin/assetsAdmin/cssAdmin/demoAdmin.css";
import "../admin/assetsAdmin/cssAdmin/bootstrap.min.css";
import "../admin/assetsAdmin/cssAdmin/kaiadmin.min.css";
import "../admin/assetsAdmin/cssAdmin/plugins.min.css";

type Props = {};

const AdminTemplate = (props: Props) => {
  return (
    <div className="wrapper">
      <HeaderHomeAdmin />

      <Outlet />

      <footer className="p-2 bg-dark text-white text-center">Footer</footer>
    </div>
  );
};

export default AdminTemplate;
