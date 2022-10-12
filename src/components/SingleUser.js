import React from "react";
import { Link } from "react-router-dom";
import back from "../photos/backbutton.png";
import star1 from "../photos/star1.png";
import star2 from "../photos/star2.png";
const SingleUser = (data) => {
  // const {
  //   profile: { firstName, lastName, phoneNumber, avatar, bvn, gender },
  //   email,
  //   accountNumber,
  //   accountBalance,
  //   education: {
  //     level,
  //     employmentStatus,
  //     sector,
  //     duration,
  //     officeEmail,
  //     monthlyIncome,
  //   },
  //   loanRepayment,
  //   socials: { facebook, instagram, twitter },
  //   guarantor: {
  //     firstName: guarantorFirstName,
  //     lastName: guarantorLastName,
  //     gender: guarantorGender,
  //     phoneNumber: { guarantorPhoneNumber },
  //   },
  // } = data;

  // console.log(firstName);

  return (
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
          <button className="single_blacklist_button">BLACKLIST USER</button>
          <button className="single_activate_button">ACTIVATE USER</button>
        </div>
      </div>
      <div className="single_first_div">
        <div className="single_first_group">
          {/* <img src={avatar} alt="" className="avatar" /> */}
          <div>
            <h4>
              {/* <span className="single_profile_name">{profile.firstName}</span>
              <span>{data.profile.lastName}</span> */}
            </h4>
            {/* <p>{accountNumber}</p> */}
            {/* <p>{accountNumber}</p> */}
          </div>
          <div className="vertical_line"></div>
          <div>
            <p>User's Tier</p>
            <div className="star">
              <img src={star1} alt="" />
              <img src={star2} alt="" />
              <img src={star2} alt="" />
            </div>
          </div>
          <div className="vertical_line"></div>
          <div>
            {/* <h4>{accountBalance}</h4> */}
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
                {/* <span className="single_profile_name">{firstName}</span>
                <span>{lastName}</span> */}
              </p>
            </div>
            <div>
              <p>PHONE NUMBER</p>
              {/* <p>{phoneNumber}</p> */}
            </div>
            <div>
              <p>EMAIL ADDRESS</p>
              {/* <p>{email}</p> */}
            </div>
            <div>
              <p>BVN</p>
              {/* <p>{bvn}</p> */}
            </div>
            <div>
              <p>GENDER</p>
              {/* <p>{gender}</p> */}
            </div>
          </div>
          <div className="single_second_group1">
            <div>
              <p>MARITAL STATUS</p>
              <p>Single</p>
            </div>
            <div>
              <p>CHILDREN</p>
              <p>None</p>
            </div>
            <div>
              <p>TYPE OF RESIDENCE</p>
              <p>Parent's Apartment</p>
            </div>
          </div>
          <div className="single_horizontal_line"></div>
        </div>
        <div>
          <p className="headings">Education and Employment</p>
          <div className="single_second_group1">
            <div>
              <p>LEVEL OF EDUCATION</p>
              {/* <p>{level}</p> */}
            </div>
            <div>
              <p>EMPLOYMENT STATUS</p>
              {/* <p>{employmentStatus}</p> */}
            </div>
            <div>
              <p>SECTOR OF EMPLOYMENT</p>
              {/* <p>{sector}</p> */}
            </div>
            <div>
              <p>DURATION OF EMPLOMENT</p>
              {/* <p>{duration}</p> */}
            </div>
          </div>
          <div className="single_second_group1">
            <div>
              <p>OFFICE EMAIL</p>
              {/* <p>{officeEmail}</p> */}
            </div>
            <div>
              <p>MONHLY INCOME</p>
              <p>{/* {monthlyIncome[0]}- {monthlyIncome[1]} */}</p>
            </div>
            <div>
              <p>LOAN REPAYMENT</p>
              {/* <p>{loanRepayment}</p> */}
            </div>
          </div>
          <div className="single_horizontal_line"></div>
        </div>
        <div>
          <p className="headings">Socials</p>
          <div className="single_second_group1">
            <div>
              <p>TWITTER</p>
              {/* <p>{twitter}</p> */}
            </div>
            <div>
              <p>FACEBOOK</p>
              {/* <p>{facebook}</p> */}
            </div>
            <div>
              <p>INSTAGRAM</p>
              {/* <p>{instagram}</p> */}
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
                {/* <span className="single_profile_name">
                  {guarantorFirstName}
                </span>
                <span>{guarantorLastName}</span> */}
              </p>
            </div>
            <div>
              <p>PHONE NUMBER</p>
              {/* <p>{guarantorPhoneNumber}</p> */}
            </div>
            <div>
              <p>GENDER</p>
              {/* <p>{guarantorGender}</p> */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SingleUser;
