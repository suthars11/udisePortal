import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import ProjectAdd from "../components/project/ProjectAdd";

import "remixicon/fonts/remixicon.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Project.css";
import ProjectList from "../components/project/ProjectList";
const Projects = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const role = "portal_admin";

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <div
        className="d-flex mb-4"
        style={{ backgroundColor: "#f3f6f9", minHeight: "100vh" }}
      >
        <Sidebar />
        <div className="flex-grow-1 p-4 mt-4">
          <div className="page-content">
            <div className="container-fluid">
              {/* Start page title */}
              <div className="row mt-2 ml-0">
                <div className="col-12">
                  <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                    <h4 className="mb-sm-0">Projects</h4>

                    <div className="page-title-right">
                      <ol className="breadcrumb m-0">
                        <li className="breadcrumb-item">
                          <Link to="#">Projects</Link>
                        </li>
                        <li className="breadcrumb-item">
                          <Link to="/app/projects">Project List</Link>
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
              {/* End page title */}
              <div className=" ">
                <div className="card mt-3">
                  <div
                    className="card-body"
                    style={{ backgroundColor: "white" }}
                  >
                    <div className="row g-3">
                      <div className="col-md-3">
                        <div className="search-box">
                          <input
                            type="text"
                            className="form-control search"
                            placeholder="Search for project..."
                            value={searchTerm}
                            onChange={handleSearchChange}
                          />
                          <i className="ri-search-line search-icon"></i>
                        </div>
                      </div>
                      <div className="col-md-auto ms-auto">
                        <div className="d-flex hastck gap-2 flex-wra mb-2 me-4">
                          <Link to="/ProjectAdd" className="btn btn-success">
                            <i className="ri-add-fill align-bottom me-1"></i>{" "}
                            Add Project
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div>
                  <span>Sorry ! result is not found</span>
                </div> */}
              </div>
              <ProjectList />
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Projects;
