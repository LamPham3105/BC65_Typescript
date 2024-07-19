import React from "react";
import SearchDashboard from "./SearchDashboard";
import ContentDashboard from "./ContentDashboard";

const DashboardAdmin = () => {
  return (
    <div className="main-panel">
      <SearchDashboard />
      <ContentDashboard />
    </div>
  );
};

export default DashboardAdmin;
