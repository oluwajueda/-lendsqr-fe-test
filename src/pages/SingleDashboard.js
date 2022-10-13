import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import back from "../photos/backbutton.png";
import star1 from "../photos/star1.png";
import star2 from "../photos/star2.png";

const infoFromLocalStorage = JSON.parse(localStorage.getItem("info") || null);

const SingleDashboard = () => {
  const { singleDashboard } = useParams();

  const [info, setInfo] = useState(infoFromLocalStorage);

  const url = `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${singleDashboard}`;

  useEffect(() => {
    axios.get(url).then((response) => {
      setInfo(response.data);
      localStorage.setItem("user", JSON.stringify(info));
    });
  }, []);

  // useEffect(() => {

  // })

  if (!info) return null;

  return (
    <div className="dashboard_page">
      <div>
        <Navbar />
        <div className="sidebar_dashboard">
          <Sidebar />
          <div className="dashboard_area">
            <div className="back_to_users">
              <Link to="/dashboard">
                <img src={back} alt="" className="back" />
              </Link>
              <p>Back to User</p>
            </div>
            <div className="single_heading_div">
              <h4>User Details</h4>
              <div className="single_button_div">
                <button className="single_blacklist_button">
                  BLACKLIST USER
                </button>
                <button className="single_activate_button">
                  ACTIVATE USER
                </button>
              </div>
            </div>
            <div className="single_first_div">
              <div className="single_first_group">
                <img src={info.profile.avatar} alt="" className="avatar" />
                <div>
                  <h4>
                    <span className="single_profile_name bold">
                      {info.profile.firstName}
                    </span>
                    <span className="bold">{info.profile.lastName}</span>
                  </h4>

                  <p className="bold">{info.accountNumber}</p>
                </div>
                <div className="vertical_line first_line"></div>
                <div className="user_tier">
                  <p>User's Tier</p>
                  <div className="star">
                    <img src={star1} alt="" />
                    <img src={star2} alt="" />
                    <img src={star2} alt="" />
                  </div>
                </div>
                <div className="vertical_line"></div>
                <div>
                  <h4 className="bold">{info.accountBalance}</h4>
                  <p>9912345678/Providus Bank</p>
                </div>
              </div>
              <div className="single_second_group">
                <h5>General Details</h5>
                <h5>Document</h5>
                <h5>Bank Details</h5>
                <h5>Loans</h5>
                <h5>Savings</h5>
                <h5>App and System</h5>
              </div>
            </div>
            <main className="single_second_div">
              <div>
                <p className="headings">Personal Information</p>
                <div className="single_second_group1">
                  <div>
                    <p>FULL NAME</p>
                    <p>
                      <span className="single_profile_name bold">
                        {info.profile.firstName}
                      </span>
                      <span className="bold">{info.profile.lastName}</span>
                    </p>
                  </div>
                  <div>
                    <p>PHONE NUMBER</p>
                    <p className="bold">{info.phoneNumber}</p>
                  </div>
                  <div>
                    <p>EMAIL ADDRESS</p>
                    <p className="bold">{info.email}</p>
                  </div>
                  <div>
                    <p>BVN</p>
                    <p className="bold">{info.profile.bvn}</p>
                  </div>
                  <div>
                    <p>GENDER</p>
                    <p className="bold">{info.profile.gender}</p>
                  </div>
                  <div>
                    <p>MARITAL STATUS</p>
                    <p className="bold">Single</p>
                  </div>
                  <div>
                    <p>CHILDREN</p>
                    <p className="bold">None</p>
                  </div>
                  <div>
                    <p>TYPE OF RESIDENCE</p>
                    <p className="bold">Parent's Apartment</p>
                  </div>
                </div>
                <div className="single_horizontal_line"></div>
              </div>
              <div>
                <p className="headings">Education and Employment</p>
                <div className="single_second_group1">
                  <div>
                    <p>LEVEL OF EDUCATION</p>
                    <p className="bold">{info.education.level}</p>
                  </div>
                  <div>
                    <p>EMPLOYMENT STATUS</p>
                    <p className="bold">{info.education.employmentStatus}</p>
                  </div>
                  <div>
                    <p>SECTOR OF EMPLOYMENT</p>
                    <p className="bold">{info.education.sector}</p>
                  </div>
                  <div>
                    <p>DURATION OF EMPLOMENT</p>
                    <p className="bold">{info.education.duration}</p>
                  </div>

                  <div>
                    <p>OFFICE EMAIL</p>
                    <p className="bold">{info.education.officeEmail}</p>
                  </div>
                  <div>
                    <p>MONHLY INCOME</p>
                    <p className="bold">
                      {info.education.monthlyIncome[0]}-{" "}
                      {info.education.monthlyIncome[1]}
                    </p>
                  </div>
                  <div>
                    <p>LOAN REPAYMENT</p>
                    <p className="bold">{info.education.loanRepayment}</p>
                  </div>
                </div>
                <div className="single_horizontal_line"></div>
              </div>
              <div>
                <p className="headings">Socials</p>
                <div className="single_second_group1">
                  <div>
                    <p>TWITTER</p>
                    <p className="bold">{info.socials.twitter}</p>
                  </div>
                  <div>
                    <p>FACEBOOK</p>
                    <p className="bold">{info.socials.facebook}</p>
                  </div>
                  <div>
                    <p>INSTAGRAM</p>
                    <p className="bold">{info.socials.instagram}</p>
                  </div>
                </div>
                <div className="single_horizontal_line"></div>
              </div>
              <div>
                <p className="headings">Guarantor</p>
                <div className="single_second_group1">
                  <div>
                    <p>FULL NAME</p>
                    <p>
                      <span className="single_profile_name bold">
                        {info.guarantor.firstName}
                      </span>
                      <span className="bold">{info.guarantor.lasttName}</span>
                    </p>
                  </div>
                  <div>
                    <p>PHONE NUMBER</p>
                    <p className="bold">{info.guarantor.phoneNumber}</p>
                  </div>
                  <div>
                    <p>GENDER</p>
                    <p className="bold">{info.guarantor.gender}</p>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleDashboard;
