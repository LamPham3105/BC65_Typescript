//tsrafce
import React from "react";
import { Outlet } from "react-router-dom";
import HeaderHomeAdmin from "../admin/componentsAdmin/HeaderHomeAdmin";
import FooterHomeAdmin from "../admin/componentsAdmin/FooterHomeAdmin";
import SideBarAdmin from "../admin/componentsAdmin/SideBarAdmin";
import DashboardAdmin from "../admin/pagesAdmin/DashboardAdmin";
import AvatarPage from "../admin/pagesAdmin/base/AvatarPage";

type Props = {};

const AdminTemplate = (props: Props) => {
  return (
    <div className="wrapper">
      <SideBarAdmin />
      <div className="main-panel">
        <HeaderHomeAdmin />
        <Outlet />
        <FooterHomeAdmin />
      </div>
    </div>
  );
};

export default AdminTemplate;
