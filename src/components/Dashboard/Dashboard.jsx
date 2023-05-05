import React from "react";
import Scroll from "../Home/ScrolltoTop/Scroll";
import "./Dashboard.css";
import Sidebar from "./Sidebar/Sidebar";

const Dashboard = () => {
  const isLoggedIn = window.localStorage.getItem("loggedIn");

  return (
    <div>
      <Sidebar />
      <Scroll />
    </div>
  );
};

export default Dashboard;
