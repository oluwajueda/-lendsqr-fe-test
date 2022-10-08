import React from "react";
import organizeicon from "../photos/sidebar_icons/organizationicon.png";
import organizeicon2 from "../photos/sidebar_icons/organizationicon2.png";
import home from "../photos/sidebar_icons/home.png";
import homeroof from "../photos/sidebar_icons/home.png";
import organizationdropdown from "../photos/sidebar_icons/organizationdropdown.png";
const Sidebar = () => {
  return (
    <aside>
      <div className="aside_div">
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
              <img src={homeroof} alt="" className="home_roof" />
              <img src={home} alt="" className="home_roof home" />
            </div>
            <p>Users</p>
          </div>
          <div className="dashboard">
            <div className="home_icon">
              <img src={homeroof} alt="" className="home_roof" />
              <img src={home} alt="" className="home_roof home" />
            </div>
            <p>Guarantors</p>
          </div>
          <div className="dashboard">
            <div className="home_icon">
              <img src={homeroof} alt="" className="home_roof" />
              <img src={home} alt="" className="home_roof home" />
            </div>
            <p>Loans</p>
          </div>
          <div className="dashboard">
            <div className="home_icon">
              <img src={homeroof} alt="" className="home_roof" />
              <img src={home} alt="" className="home_roof home" />
            </div>
            <p>Decision Models</p>
          </div>
          <div className="dashboard">
            <div className="home_icon">
              <img src={homeroof} alt="" className="home_roof" />
              <img src={home} alt="" className="home_roof home" />
            </div>
            <p>Savings</p>
          </div>
          <div className="dashboard">
            <div className="home_icon">
              <img src={homeroof} alt="" className="home_roof" />
              <img src={home} alt="" className="home_roof home" />
            </div>
            <p>Loan Requests</p>
          </div>
          <div className="dashboard">
            <div className="home_icon">
              <img src={homeroof} alt="" className="home_roof" />
              <img src={home} alt="" className="home_roof home" />
            </div>
            <p>Whitelist</p>
          </div>
          <div className="dashboard">
            <div className="home_icon">
              <img src={homeroof} alt="" className="home_roof" />
              <img src={home} alt="" className="home_roof home" />
            </div>
            <p>Karma</p>
          </div>
          <div className="business_div">
            <h5>Business</h5>
            <div className="dashboard">
              <div className="home_icon">
                <img src={homeroof} alt="" className="home_roof" />
                <img src={home} alt="" className="home_roof home" />
              </div>
              <p>Organization</p>
            </div>
            <div className="dashboard">
              <div className="home_icon">
                <img src={homeroof} alt="" className="home_roof" />
                <img src={home} alt="" className="home_roof home" />
              </div>
              <p>Loan Products</p>
            </div>
            <div className="dashboard">
              <div className="home_icon">
                <img src={homeroof} alt="" className="home_roof" />
                <img src={home} alt="" className="home_roof home" />
              </div>
              <p>Savings Products</p>
            </div>
            <div className="dashboard">
              <div className="home_icon">
                <img src={homeroof} alt="" className="home_roof" />
                <img src={home} alt="" className="home_roof home" />
              </div>
              <p>Fees and Charges</p>
            </div>
            <div className="dashboard">
              <div className="home_icon">
                <img src={homeroof} alt="" className="home_roof" />
                <img src={home} alt="" className="home_roof home" />
              </div>
              <p>Transactions</p>
            </div>
            <div className="dashboard">
              <div className="home_icon">
                <img src={homeroof} alt="" className="home_roof" />
                <img src={home} alt="" className="home_roof home" />
              </div>
              <p>Services</p>
            </div>
            <div className="dashboard">
              <div className="home_icon">
                <img src={homeroof} alt="" className="home_roof" />
                <img src={home} alt="" className="home_roof home" />
              </div>
              <p>Serice Account</p>
            </div>
            <div className="dashboard">
              <div className="home_icon">
                <img src={homeroof} alt="" className="home_roof" />
                <img src={home} alt="" className="home_roof home" />
              </div>
              <p>Settlements</p>
            </div>
            <div className="dashboard">
              <div className="home_icon">
                <img src={homeroof} alt="" className="home_roof" />
                <img src={home} alt="" className="home_roof home" />
              </div>
              <p>Reports</p>
            </div>
          </div>
          <div className="Settings_div">
            <h5>SETTINGS</h5>
            <div className="dashboard">
              <div className="home_icon">
                <img src={homeroof} alt="" className="home_roof" />
                <img src={home} alt="" className="home_roof home" />
              </div>
              <p>Preferences</p>
            </div>
            <div className="dashboard">
              <div className="home_icon">
                <img src={homeroof} alt="" className="home_roof" />
                <img src={home} alt="" className="home_roof home" />
              </div>
              <p>Fees and Pricing</p>
            </div>
            <div className="dashboard">
              <div className="home_icon">
                <img src={homeroof} alt="" className="home_roof" />
                <img src={home} alt="" className="home_roof home" />
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
