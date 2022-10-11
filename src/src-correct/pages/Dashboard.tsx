import Sidebar from "../components/Sidebar";
import DashboardArea from "../components/DashboardArea";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  return (
    <div className="dashboard_page">
      <Navbar />
      <div className="sidebar_dashboard">
        <Sidebar />
        <DashboardArea />
      </div>
    </div>
  );
};

export default Dashboard;
