import React from "react";

import "./Dashboard.css";
import Sidebar from "./Sidebar/Sidebar";

const Dashboard = () => {
  const isLoggedIn = window.localStorage.getItem("loggedIn");

  return (
    <div>
      <Sidebar />
    
    </div>
  );
};

export default Dashboard;
