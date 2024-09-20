import axios from "axios";
import React, { useEffect, useState } from "react";
import "remixicon/fonts/remixicon.css";
import "./UserList.css";

export default function UserList() {
  const [userList, setUserList] = useState([]);

  const fetchUserList = async () => {
    try {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mbyI6eyJlbWFpbCI6InBvcnRhbGFkbWluQGxtcy5jb20iLCJ1c2VySWQiOiI2NjY2Yjc3NjU3ZTM0YWIyYjAwZTRiN2UiLCJyb2xlIjoiUE9SVEFMX0FETUlOIn0sImV4cGlyZXNJbiI6IjFoIiwiaWF0IjoxNzI2MTU3MjA3fQ.tJvtSI3D_jBLzFk_Aw9wP3-69F0p9ujjtwA6OgbOgo4";
      if (token) {
        const payload = {
          limit: 1000,
          page: 1,
        };
        const response = await axios.post(
          "https://lmsapi.propdoors.com:3000/user/list",
          payload,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        const data = response.data.users;
        console.log("this is my User data:", data);
        setUserList(data);
      }
    } catch (error) {
      console.error("Something went wrong", error);
    }
  };

  useEffect(() => {
    fetchUserList();
  }, []);

  const deleteUser = (id) => {
    console.log("Delete user with ID:", id);
  };

  const editUser = (user) => {
    console.log("Edit user:", user);
  };

  return (
    <div className="row mb-5">
      {userList.map((user) => (
        <div key={user._id} className="col-lg-6 col-md-6 col-sm-12 mb-4">
          <div className="card ribbon-box right overflow-hidden">
            <div className="card-body text-center p-4">
              <div
                className={`ribbon ${
                  user.active ? "ribbon-success" : "ribbon-danger"
                } ribbon-shape trending-ribbon`}
              >
                <i className="ri-flashlight-fill text-white align-bottom"></i>
                <span className="trending-ribbon-text">
                  {user.active ? "Active" : "Inactive"}
                </span>
              </div>
              <h5 className="mb-1 mt-4">
                <a className="link-primary">
                  {user.firstName} {user.lastName || ""}
                </a>
              </h5>
              <p className="text-muted">{user.email}</p>
              <p className="text-muted">{user.contactNumber}</p>
              <div className="row mt-4">
                <div className="col">
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteUser(user._id)}
                  >
                    <i className="ri-delete-bin-2-line"></i>
                  </button>
                </div>
                <div className="col">
                  <button
                    className="btn btn-success btn-sm"
                    data-bs-toggle="modal"
                    data-bs-target="#addSeller"
                    onClick={() => editUser(user)}
                  >
                    <i className="ri-edit-line"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
