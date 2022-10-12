import React from "react";
import organizeicon from "../photos/sidebar_icons/organizationicon.png";
import organizeicon2 from "../photos/sidebar_icons/organizationicon2.png";
import home from "../photos/sidebar_icons/home.png";
import user from "../photos/user.png";
import homeroof from "../photos/sidebar_icons/home.png";
import organizationdropdown from "../photos/sidebar_icons/organizationdropdown.png";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../context";
import guarantor from "../photos/guarantor.png";
import loans from "../photos/loans.png";
import decision from "../photos/decision.png";
import savings from "../photos/savings.png";
import savings2 from "../photos/savings2.png";
import fees from "../photos/fees.png";
import transaction from "../photos/transaction.png";
import services from "../photos/services.png";
import settlement from "../photos/settlement.png";
import report from "../photos/report.png";
import preference from "../photos/preferences.png";
import audit from "../photos/audit.png";
const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <aside className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}>
      <div className="aside_div">
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
        <div className="first_aside_option">
          <div className="brief_icon">
            <img src={organizeicon} alt="" />
            <img src={organizeicon2} alt="" />
          </div>
          <h5>switch organization</h5>
          <img
            src={organizationdropdown}
            alt=""
            className="organizationdropdown_icon"
          />
        </div>
        <div className="dashboard_main">
          <div className="home_icon">
            <img src={homeroof} alt="" className="home_roof" />
            <img src={home} alt="" className="home_roof home" />
          </div>
          <p>Dashboard</p>
        </div>
        <div className="customers_dashboard">
          <h5>CUSTOMERS</h5>
          <div className="dashboard">
            <div className="home_icon">
              <img src={user} alt="" className="sidebar_icon" />
            </div>
            <p>Users</p>
          </div>
          <div className="dashboard">
            <div className="home_icon">
              <img src={guarantor} alt="" className="sidebar_icon" />
            </div>
            <p>Guarantors</p>
          </div>
          <div className="dashboard">
            <div className="home_icon">
              <img src={loans} alt="" className="sidebar_icon" />
            </div>
            <p>Loans</p>
          </div>
          <div className="dashboard">
            <div className="home_icon">
              <img src={decision} alt="" className="sidebar_icon" />
            </div>
            <p>Decision Models</p>
          </div>
          <div className="dashboard">
            <div className="home_icon">
              <img src={savings} alt="" className="sidebar_icon" />
            </div>
            <p>Savings</p>
          </div>
          <div className="dashboard">
            <div className="home_icon">
              <img src={loans} alt="" className="sidebar_icon" />
            </div>
            <p>Loan Requests</p>
          </div>
          <div className="dashboard">
            <div className="home_icon">
              <img src={user} alt="" className="sidebar_icon" />
            </div>
            <p>Whitelist</p>
          </div>
          <div className="dashboard">
            <div className="home_icon">
              <img src={user} alt="" className="sidebar_icon" />
            </div>
            <p>Karma</p>
          </div>
          <div className="business_div">
            <h5>Business</h5>
            <div className="dashboard">
              <div className="home_icon">
                <img src={organizeicon} alt="" />
                <img src={organizeicon2} alt="" />
              </div>
              <p>Organization</p>
            </div>
            <div className="dashboard">
              <div className="home_icon">
                <img src={loans} alt="" className="sidebar_icon" />
              </div>
              <p>Loan Products</p>
            </div>
            <div className="dashboard">
              <div className="home_icon">
                <img src={savings} alt="" className="sidebar_icon" />
              </div>
              <p>Savings Products</p>
            </div>
            <div className="dashboard">
              <div className="home_icon">
                <img src={fees} alt="" className="sidebar_icon" />
              </div>
              <p>Fees and Charges</p>
            </div>
            <div className="dashboard">
              <div className="home_icon">
                <img src={transaction} alt="" className="sidebar_icon" />
              </div>
              <p>Transactions</p>
            </div>
            <div className="dashboard">
              <div className="home_icon">
                <img src={services} alt="" className="sidebar_icon" />
              </div>
              <p>Services</p>
            </div>
            <div className="dashboard">
              <div className="home_icon">
                <img src={user} alt="" className="sidebar_icon" />
              </div>
              <p>Service Account</p>
            </div>
            <div className="dashboard">
              <div className="home_icon">
                <img src={settlement} alt="" className="sidebar_icon" />
              </div>
              <p>Settlements</p>
            </div>
            <div className="dashboard">
              <div className="home_icon">
                <img src={report} alt="" className="sidebar_icon" />
              </div>
              <p>Reports</p>
            </div>
          </div>
          <div className="Settings_div">
            <h5>SETTINGS</h5>
            <div className="dashboard">
              <div className="home_icon">
                <img src={preference} alt="" className="sidebar_icon" />
              </div>
              <p>Preferences</p>
            </div>
            <div className="dashboard">
              <div className="home_icon">
                <img src={fees} alt="" className="sidebar_icon" />
              </div>
              <p>Fees and Pricing</p>
            </div>
            <div className="dashboard">
              <div className="home_icon">
                <img src={audit} alt="" className="sidebar_icon" />
              </div>
              <p>Audit Logs</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
