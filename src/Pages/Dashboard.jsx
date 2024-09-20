import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./Dashboard.css";
import axios from "axios";

import DounghuntChart from "../components/Chart/DounghuntChart";
import Sidebar from "../components/Sidebar/Sidebar";

const Dashboard = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState("All");

  const handleButtonClick = (timeframe) => {
    setSelectedTimeframe(timeframe);
  };

  const currenthour = new Date().getHours();
  let hour = "";
  if (currenthour >= 3 && currenthour < 12) {
    hour = "  Good Morning,!";
  } else if (currenthour >= 11 && currenthour < 15) {
    hour = " Good Aternoon,!";
  } else if (currenthour >= 15 && currenthour < 22) {
    hour = " Good Evening,!";
  } else {
    hour = " Good Night,!";
  }
  const [dashboardData, setDashboardData] = useState([]);
  const [leadSatus, setleadSataus] = useState([]);
  const [recentLeads, setRecentLeads] = useState([]);
  const fetchData = async () => {
    try {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mbyI6eyJlbWFpbCI6InBvcnRhbGFkbWluQGxtcy5jb20iLCJ1c2VySWQiOiI2NjY2Yjc3NjU3ZTM0YWIyYjAwZTRiN2UiLCJyb2xlIjoiUE9SVEFMX0FETUlOIn0sImV4cGlyZXNJbiI6IjFoIiwiaWF0IjoxNzI2MzIzNDIwfQ.2RXRFtZBjLNMSvG2hbpmybaTzhn4jB_JwHblBaTVFcI";
      console.log(token);
      if (token) {
        const payload = {
          parameter1: "value1",
          parameter2: "value2",
        };
        const response = await axios.post(
          `https://lmsapi.propdoors.com:3000/dashboard/admin`,
          payload,
          {
            headers: {
              Authorization: ` Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        const data = response.data;
        console.log(data);
        console.log(data.leadsStatus);
        console.log(data.recentLeads[0].name);
        const recentLeadsData = data.recentLeads.map((lead) => ({
          name: lead.name,
          contactNumber: lead.contactNumber,
          verifiedOn: lead.verifiedOn,
        }));
        console.log(recentLeadsData);
        setDashboardData(data);
        setleadSataus(data.leadsStatus[0]);
        setRecentLeads(recentLeadsData);
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div
      className="mt-4"
      style={{
        display: "flex",
        minHeight: "100vh",
        backgroundColor: "#f3f6f9",
      }}
    >
      <Sidebar />
      <div className="page-content mt-5 flex-grow-1 p-3 ">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div className="h-100">
                <div className="row mb-3 pb-1">
                  <div className="col-12">
                    <div className="d-flex align-items-lg-center flex-lg-row flex-column">
                      <div className="flex-grow-1">
                        <h4>{hour} Surendra! </h4>
                        <h4 className="fs-16 mb-1"></h4>
                        <p className="text-muted mb-0">
                          Here's what's happening with your {selectedTimeframe}{" "}
                          leads
                        </p>
                      </div>
                      <div className="mt-3 mt-lg-0">
                        <form action="javascript:void(0);">
                          <div className="row g-4 mb-0 align-items-center">
                            <div
                              className="btn-group"
                              role="group"
                              aria-label="Basic radio toggle button group"
                            >
                              <label
                                className="btn btn-outline-secondary shadow-none"
                                for="btnradio1"
                                style={{
                                  backgroundColor:
                                    selectedTimeframe === "All"
                                      ? "#865ce2"
                                      : "",
                                  color:
                                    selectedTimeframe === "All" ? "white" : "",
                                }}
                                onClick={() => handleButtonClick("All")}
                              >
                                All
                              </label>

                              <label
                                className="btn btn-outline-secondary shadow-none"
                                for="btnradio0"
                                style={{
                                  backgroundColor:
                                    selectedTimeframe === "Today"
                                      ? "#865ce2"
                                      : "",
                                  color:
                                    selectedTimeframe === "Today"
                                      ? "white"
                                      : "",
                                }}
                                onClick={() => handleButtonClick("Today")}
                              >
                                Today
                              </label>

                              <label
                                className="btn btn-outline-secondary shadow-none"
                                for="btnradio2"
                                style={{
                                  backgroundColor:
                                    selectedTimeframe === "This Week"
                                      ? "#865ce2"
                                      : "",
                                  color:
                                    selectedTimeframe === "This Week"
                                      ? "white"
                                      : "#865ce2",
                                }}
                                onClick={() => handleButtonClick("This Week")}
                              >
                                This Week
                              </label>

                              <label
                                className="btn btn-outline-secondary shadow-none"
                                for="btnradio3"
                                style={{
                                  backgroundColor:
                                    selectedTimeframe === "This Month"
                                      ? "#865ce2"
                                      : "",
                                  color:
                                    selectedTimeframe === "This Month"
                                      ? "white"
                                      : "#865ce2",
                                }}
                                onClick={() => handleButtonClick("This Month")}
                              >
                                This Month
                              </label>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-xl-12">
                    <div className="card crm-widget">
                      <div className="card-body p-0">
                        <div className="row row-cols-md-3 row-cols-1">
                          <div className="col col-lg border-end cursor">
                            <Link
                              to="/Projects"
                              className="text-decoration-none text-dark"
                            >
                              <div className="py-4 px-3">
                                <h5 className="text-muted text-uppercase fs-13">
                                  Projects
                                </h5>
                                <div className="d-flex align-items-center">
                                  <div className="flex-shrink-0">
                                    <i className="ri-building-4-line display-6 icon-color"></i>
                                  </div>
                                  <div className="flex-grow-1 ms-3">
                                    <h2 className="mb-0">
                                      <span
                                        className="counter-value"
                                        data-target="197"
                                      ></span>
                                    </h2>

                                    <h2>
                                      <span
                                        className="counter-value"
                                        data-target="489.4"
                                      >
                                        {dashboardData.totalProjects}
                                      </span>
                                    </h2>
                                  </div>
                                </div>
                              </div>
                            </Link>
                          </div>

                          <div className="col col-lg border-end">
                            <Link
                              to="/leads"
                              className="text-decoration-none text-dark"
                            >
                              <div
                                routerLink="/leads"
                                className="mt-3 mt-md-0 py-4 px-3 cursor"
                              >
                                <h5 className="text-muted text-uppercase fs-13">
                                  Pending Leads{" "}
                                </h5>
                                <div className="d-flex align-items-center">
                                  <div className="flex-shrink-0">
                                    <i className="ri-pulse-line display-6  icon-color"></i>
                                  </div>
                                  <div className="flex-grow-1 ms-3">
                                    <h2>
                                      {" "}
                                      <span
                                        className="counter-value"
                                        data-target="489.4"
                                      ></span>
                                    </h2>

                                    <h2>
                                      <span
                                        className="counter-value"
                                        data-target="489.4"
                                      >
                                        {leadSatus.pendingLeads}
                                      </span>
                                    </h2>
                                  </div>
                                </div>
                              </div>
                            </Link>
                          </div>

                          <div className="col col-lg border-end">
                            {/* <Link to="/leads/filter/Accepted"></Link> */}
                            <div
                              routerLink="/app/leads/filter/Accepted"
                              className="mt-3 mt-md-0 py-4 px-3 cursor"
                            >
                              <h5 className="text-muted text-uppercase fs-13">
                                Lead Accepted{" "}
                              </h5>
                              <div className="d-flex align-items-center">
                                <div className="flex-shrink-0">
                                  <i className="ri-pulse-line display-6 icons"></i>
                                </div>
                                <div className="flex-grow-1 ms-3">
                                  <h2 className="mb-0">
                                    <span
                                      className="counter-value"
                                      data-target="32.89"
                                    ></span>
                                  </h2>

                                  <h2>
                                    <span
                                      className="counter-value"
                                      data-target="489.4"
                                    >
                                      {dashboardData.accepted}
                                    </span>
                                  </h2>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col col-lg border-end">
                            <div
                              routerLink="/app/leads/filter/Site Vist"
                              className="mt-3 mt-lg-0 py-4 px-3 cursor"
                            >
                              <h5 className="text-muted text-uppercase fs-13">
                                Site Visit
                              </h5>
                              <div className="d-flex align-items-center">
                                <div className="flex-shrink-0">
                                  <i className="ri-trophy-line display-6 icon-color"></i>
                                </div>
                                <div className="flex-grow-1 ms-3">
                                  <h2 className="mb-0">
                                    <span
                                      className="counter-value"
                                      data-target="1596.5"
                                    ></span>
                                  </h2>

                                  <h2>
                                    <span
                                      className="counter-value"
                                      data-target="489.4"
                                    >
                                      {dashboardData.siteVist}
                                    </span>
                                  </h2>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col col-lg border-end">
                            <div
                              routerLink="/app/leads/filter/Location Issue"
                              className="mt-3 mt-lg-0 py-4 px-3 cursor"
                            >
                              <h5 className="text-muted text-uppercase fs-13 ">
                                Location Issue
                              </h5>
                              <div className="d-flex align-items-center">
                                <div className="flex-shrink-0">
                                  <i
                                    className=" ri-user-location-line
                                    display-6  icon-color"
                                  ></i>
                                </div>
                                <div className="flex-grow-1 ms-3">
                                  <h2 className="mb-0">
                                    <span
                                      className="counter-value"
                                      data-target="1596.5"
                                    ></span>
                                  </h2>

                                  <h2>
                                    <span
                                      className="counter-value"
                                      data-target="489.4"
                                    >
                                      {dashboardData.locationIssue}
                                    </span>
                                  </h2>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row row-cols-md-3 row-cols-1">
                          <div className="col col-lg border-end">
                            <div
                              routerLink="/app/leads/filter/Lost To Competitor"
                              className="mt-3 mt-lg-0 py-4 px-3 cursor"
                            >
                              <h5 className="text-muted text-uppercase fs-13">
                                Lost to Competitor
                              </h5>
                              <div className="d-flex align-items-center">
                                <div className="flex-shrink-0">
                                  <i className=" ri-funds-box-line  display-6 icon-color"></i>
                                </div>
                                <div className="flex-grow-1 ms-3">
                                  <h2 className="mb-0">
                                    <span
                                      className="counter-value"
                                      data-target="1596.5"
                                    ></span>
                                  </h2>

                                  <h2>
                                    <span
                                      className="counter-value"
                                      data-target="489.4"
                                    >
                                      {dashboardData.lostToCompetitor}
                                    </span>
                                  </h2>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col col-lg border-end">
                            <div
                              routerLink="/app/leads/filter/Follow Up"
                              className="mt-3 mt-lg-0 py-4 px-3 cursor"
                            >
                              <h5 className="text-muted text-uppercase fs-13">
                                Follow Up
                              </h5>
                              <div className="d-flex align-items-center">
                                <div className="flex-shrink-0">
                                  <i className=" ri-customer-service-2-line display-6  icon-color"></i>
                                </div>
                                <div className="flex-grow-1 ms-3">
                                  <h2 className="mb-0">
                                    <span
                                      className="counter-value"
                                      data-target="2659"
                                    ></span>
                                  </h2>

                                  <h2>
                                    <span
                                      className="counter-value"
                                      data-target="489.4"
                                    >
                                      {dashboardData.followUp}
                                    </span>
                                  </h2>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col col-lg border-end">
                            <div
                              routerLink="/app/leads/filter/Not Connected"
                              className="mt-3 mt-lg-0 py-4 px-3 cursor"
                            >
                              <h5 className="text-muted text-uppercase fs-13">
                                Not Connected
                              </h5>
                              <div className="d-flex align-items-center">
                                <div className="flex-shrink-0">
                                  <i
                                    className=" ri-notification-off-line
                                                            display-6 icon-color"
                                  ></i>
                                </div>
                                <div className="flex-grow-1 ms-3">
                                  <h2 className="mb-0">
                                    <span
                                      className="counter-value"
                                      data-target="2659"
                                    ></span>
                                  </h2>

                                  <h2>
                                    <span
                                      className="counter-value"
                                      data-target="489.4"
                                    >
                                      {dashboardData.notConnected}
                                    </span>
                                  </h2>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col col-lg border-end">
                            <div
                              routerLink="/app/leads/filter/Budget Issue"
                              className="mt-3 mt-lg-0 py-4 px-3"
                            >
                              <h5 className="text-muted text-uppercase fs-13">
                                Budget Issue
                              </h5>
                              <div className="d-flex align-items-center">
                                <div className="flex-shrink-0">
                                  <i
                                    className=" ri-money-dollar-box-fill
                                                            display-6 icon-color"
                                  ></i>
                                </div>
                                <div className="flex-grow-1 ms-3">
                                  <h2 className="mb-0">
                                    <span
                                      className="counter-value"
                                      data-target="2659"
                                    ></span>
                                  </h2>

                                  <h2>
                                    <span
                                      className="counter-value"
                                      data-target="489.4"
                                    >
                                      {dashboardData.budgetIssue}
                                    </span>
                                  </h2>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col col-lg border-end">
                            <div
                              routerLink="/app/leads/filter/Other"
                              className="mt-3 mt-lg-0 py-4 px-3"
                            >
                              <h5 className="text-muted text-uppercase fs-13">
                                Other
                              </h5>
                              <div className="d-flex align-items-center">
                                <div className="flex-shrink-0">
                                  <i
                                    className=" ri-file-unknow-line
                                                            display-6 icon-color"
                                  ></i>
                                </div>
                                <div className="flex-grow-1 ms-3">
                                  <h2 className="mb-0">
                                    <span
                                      className="counter-value"
                                      data-target="2659"
                                    ></span>
                                  </h2>

                                  <h2>
                                    <span
                                      className="counter-value"
                                      data-target="489.4"
                                    >
                                      {dashboardData.other}
                                    </span>
                                  </h2>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-12">
                    <div className="card">
                      <div className="card-header align-items-center d-flex">
                        <h4 className="card-title mb-0 flex-grow-1">
                          Summary Of Leads By Status
                        </h4>
                        <div className="flex-shrink-0">
                          <div className="dropdown card-header-dropdown">
                            <a
                              className="text-reset dropdown-btn"
                              href="#"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <span className="fw-semibold text-uppercase fs-12">
                                Sort by:
                              </span>
                              <span className="text-muted">
                                Today
                                <i className="mdi mdi-chevron-down ms-1"></i>
                              </span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-end">
                              <a className="dropdown-item" href="#">
                                Today
                              </a>
                              <a className="dropdown-item" href="#">
                                Yesterday
                              </a>
                              <a className="dropdown-item" href="#">
                                Last 7 Days
                              </a>
                              <a className="dropdown-item" href="#">
                                Last 30 Days
                              </a>
                              <a className="dropdown-item" href="#">
                                This Month
                              </a>
                              <a className="dropdown-item" href="#">
                                Last Month
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="card-body">
                        <div className="table-responsive table-card d-flex justify-content-center align-items-center">
                          <DounghuntChart props={dashboardData} />
                        </div>

                        <div className="align-items-center mt-4 pt-2 justify-content-between row text-center text-sm-start"></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-12">
                    <div className="card">
                      <div className="card-header align-items-center d-flex">
                        <h4 className="card-title mb-0 flex-grow-1">
                          {" "}
                          Recent Top 5 Leads{" "}
                        </h4>
                        <div className="flex-shrink-0">
                          <div className="dropdown card-header-dropdown">
                            <a
                              className="text-reset dropdown-btn"
                              href="#"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <span className="fw-semibold text-uppercase fs-12">
                                Sort by:
                              </span>
                              <span className="text-muted">
                                Today
                                <i className="mdi mdi-chevron-down ms-1"></i>
                              </span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-end">
                              <a className="dropdown-item" href="#">
                                Today
                              </a>
                              <a className="dropdown-item" href="#">
                                Yesterday
                              </a>
                              <a className="dropdown-item" href="#">
                                Last 7 Days
                              </a>
                              <a className="dropdown-item" href="#">
                                Last 30 Days
                              </a>
                              <a className="dropdown-item" href="#">
                                This Month
                              </a>
                              <a className="dropdown-item" href="#">
                                Last Month
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      {recentLeads.map((lead, index) => (
                        <div className="card-body">
                          <div className="table-responsive table-card">
                            <ul className="list-group list-group-flush border-dashed">
                              <li
                                className="list-group-item ps-0>
                                                <div className="
                                row
                                align-items-center
                              >
                                <div className="col-auto">
                                  <div className="avatar-sm p-1 py-2 h-auto bg-light rounded-3 shadow">
                                    <div
                                      className="text-center"
                                      style={{ width: "270px" }}
                                    >
                                      <h5 className="mb-0">
                                        {lead.verifiedOn}
                                      </h5>
                                      <div className="text-muted">
                                        {lead.verifiedOn}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col">
                                  <h5 className="text-muted mt-0 mb-1 fs-13">
                                    {lead.name}
                                    <a
                                      className="call-button"
                                      href="tel:'9711818218 '"
                                    >
                                      {" "}
                                      {lead.contactNumber}
                                    </a>
                                  </h5>

                                  <a className="text-reset fs-14 mb-0"></a>
                                </div>
                              </li>
                              <li className="list-group-item ps-0">
                                <div className="row align-items-center g-3">
                                  <div className="col text-center">
                                    <h5 className="text-muted mt-0 mb-1 fs-13">
                                      No Results Found
                                    </h5>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>

                          <div className="align-items-center mt-4 pt-2 justify-content-between row text-center text-sm-start"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
