import React, { useState, useEffect, useRef } from "react";
import userimage from "../photos/userimage.png";
import User from "./User";
// import axios from "axios";
import { useFetch } from "./useFetch";

import userdropdown from "../photos/userdropdown.png";

import forward from "../photos/forward.png";
import backward from "../photos/backward.png";
import { useGlobalContext } from "../context";
import Modal from "./Modal";

// const defaultData: IData[] = [];

const DashboardArea = () => {
  // const [data, setData]: [IData[], (data: IData[]) => void] =
  //   React.useState(defaultData);

  // const [loading, setLoading]: [boolean, (loading: boolean) => void] =
  //   React.useState<boolean>(true);

  // const [error, setError]: [string, (error: string) => void] =
  //   React.useState("");
  // const [page, setPage]: [number, (page: number) => void] = useState<number>(0);
  // const [users, setUsers]: any[] = useState([]);

  // React.useEffect(() => {
  //   axios
  //     .get<IData[]>(url, {
  //       headers: {
  //         "Content-type": "application/json",
  //       },
  //     })
  //     .then((response) => {
  //       const newData = response.data;
  //       setData(paginate(newData));
  //       console.log(newData);

  //       setLoading(false);
  //     })
  //     .catch((ex) => {
  //       const error =
  //         ex.response.status === 404
  //           ? "Resource Not found"
  //           : "An unexpected error has occured";
  //       setError(error);
  //       setLoading(false);
  //     });
  // }, []);

  // useEffect(() => {
  //   setUsers(data[page]);
  // }, [page]);

  const { loading, data } = useFetch();
  const [page, setPage] = useState(0);
  const [users, setUsers] = useState([]);

  const [isModalOpenController, setIsModalOpenController] = useState(false);

  // const { modalController, setModalController } = useGlobalContext();

  useEffect(() => {
    if (loading) return;
    setUsers(data[page]);
    console.log(users);
  }, [loading, data]);

  const handlePage = (index) => {
    setPage(index);
  };

  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1;
      if (nextPage > data.length - 1) {
        nextPage = 0;
      }
      return nextPage;
    });
  };
  const prevPage = () => {
    console.log("hello");
    setPage((oldPage) => {
      let prevPage = oldPage - 1;
      if (prevPage > data.length - 1) {
        prevPage = data.length - 1;
      }
      return prevPage;
    });
  };

  let menuRef = useRef();

  useEffect(() => {
    let handler = (event) => {
      if (!menuRef.current.contains(event.target)) {
        setIsModalOpenController(true);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div ref={menuRef} className="dashboard_area">
      <div className="dashboard_child">
        <h2 className="dashboard_h2">Users</h2>
        <div className="box">
          <div className="box_child">
            <img src={userimage} alt="" className="box_child_image" />
            <p>USERS</p>
            <h4>2,453</h4>
          </div>
          <div className="box_child">
            <img src={userimage} alt="" className="box_child_image" />
            <p>ACTIVE USERS</p>
            <h4>2,453</h4>
          </div>
          <div className="box_child">
            <img src={userimage} alt="" className="box_child_image" />
            <p>USERS WITH LOANS</p>
            <h4>2,453</h4>
          </div>
          <div className="box_child">
            <img src={userimage} alt="" className="box_child_image" />
            <p>USERS WITH SAVINGS</p>
            <h6>2,453</h6>
          </div>
        </div>
        <div className="user_whole">
          <div className="user_children">
            <div className="user_details">
              <div className="grid_table">
                <div className="user_single">
                  <p>ORGANIZATION</p>
                  <img src={userdropdown} alt="" />
                </div>
                <div className="user_single">
                  <p>USERNAME</p>
                  <img src={userdropdown} alt="" />
                </div>
                <div className="user_single">
                  <p>EMAIL</p>
                  <img src={userdropdown} alt="" />
                </div>
                <div className="user_single">
                  <p>PHONE NUMBER</p>
                  <img src={userdropdown} alt="" />
                </div>
                <div className="user_single">
                  <p>DATE JOINED</p>
                  <img src={userdropdown} alt="" />
                </div>
                <div className="user_single">
                  <p>STATUS</p>
                  <img src={userdropdown} alt="" />
                </div>
              </div>
            </div>
            <div>
              {users.map((user) => {
                return (
                  <User
                    key={user.id}
                    {...user}
                    isModalOpenController={isModalOpenController}
                  />
                );
              })}
            </div>
          </div>
        </div>

        {!loading && (
          <div>
            <button onClick={prevPage} className="arrow-btn">
              <img src={backward} alt="" />
            </button>
            {data.map((item, index) => {
              return (
                <button
                  key={index}
                  onClick={() => handlePage(index)}
                  className={`page-btn ${index === page ? "active-btn" : null}`}
                >
                  {index + 1}
                </button>
              );
            })}
            <button onClick={nextPage} className="arrow-btn">
              <img src={forward} alt="" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardArea;
