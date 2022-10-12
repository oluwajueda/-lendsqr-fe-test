import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../components/useFetch.js";
import Sidebar from "../components/Sidebar";
import DashboardArea from "../components/DashboardArea";
import Navbar from "../components/Navbar";
import SingleUser from "../components/SingleUser.js";

const SingleDashboard = () => {
  const { singleDashboard } = useParams();

  const [data, setData] = useState([]);

  const url = `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${singleDashboard}`;

  const getUsers = async () => {
    const response = await fetch(url);

    const data = await response.json();
    setData(data);
    console.log(data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="dashboard_page">
      <div>
        <Navbar />
        <div className="sidebar_dashboard">
          <Sidebar />
          <SingleUser {...data} />
        </div>
      </div>
    </div>
  );
};

export default SingleDashboard;
