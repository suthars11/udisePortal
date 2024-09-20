// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useNavigate } from 'react-router-dom';
// import "./ProjectList.css";
// export default function ProjectList() {
//   const [projectList, setProjectList] = useState([]);
//   const navigate = useNavigate();
//   const fetchProjectList = async () => {
//     try {
//       const token =
//         "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mbyI6eyJlbWFpbCI6InBvcnRhbGFkbWluQGxtcy5jb20iLCJ1c2VySWQiOiI2NjY2Yjc3NjU3ZTM0YWIyYjAwZTRiN2UiLCJyb2xlIjoiUE9SVEFMX0FETUlOIn0sImV4cGlyZXNJbiI6IjFoIiwiaWF0IjoxNzI2MDY5NjE4fQ.CbagjESOqVTEQy5Ey7S0_QoLenGA-PLiPCkk1gNmUfM";
//       console.log(token);
//       if (token) {
//         const payload = {
//           limit: 10,
//           page: 1,
//         };
//         const response = await axios.post(
//           "https://lmsapi.propdoors.com:3000/project/list",
//           payload,
//           {
//             headers: {
//               Authorization: ` Bearer ${token}`,
//               "Content-Type": "application/json",
//             },
//           }
//         );
//         const data = response.data.projects;
//         console.log(data.projects);

//         data.forEach((projects) => {
//           console.log("My projects name", projects.projectName);
//         });
//         setProjectList(data);
//       }
//     } catch (error) {
//       console.log("Something went wrong", error);
//     }
//   };
//   useEffect(() => {
//     fetchProjectList();
//     console.log("this my projects", projectList);
//   }, []);
//   return (
//     <div className="row mb-5">
//       {projectList.map((item, index) => (
//         <div key={index} className="col-xxl-3 col-sm-6 project-card ">
//           <div
//             className="card"
//             style={{ cursor: "pointer" }}
//             tabIndex="0"
//             onClick={() => navigate(`/ProjectTitle/${item.id}`)}
//           >
//             <div className="card-body ">
//               <div className="p-3  bg-soft-project rounded-top">
//                 <div className="d-flex align-items-center">
//                   <div className="flex-grow-1">
//                     <h5 className="mb-0 fs-14">
//                       <a
//                         href="apps-projects-overview.html"
//                         className="text-white"
//                       >
//                         {item.projectName}
//                       </a>
//                     </h5>
//                   </div>
//                   <div className="flex-shrink-0">
//                     <div className="d-flex gap-1 align-items-center my-n2">
//                       <button
//                         type="button"
//                         className="btn avatar-xs p-0 favourite-btn shadow-none active"
//                       >
//                         <span className="avatar-title bg-transparent fs-15">
//                           <i className="ri-star-fill"></i>
//                         </span>
//                       </button>
//                       <div className="dropdown">
//                         <button
//                           data-bs-toggle="dropdown"
//                           aria-haspopup="true"
//                           aria-expanded="true"
//                           className="btn btn-link text-muted p-1 mt-n1 py-0 text-decoration-none fs-15 shadow-none"
//                         >
//                           <i
//                             data-feather="more-horizontal"
//                             className="icon-sm ri-list-check"
//                             style={{ color: "white" }}
//                           ></i>
//                         </button>
//                         <div className="dropdown-menu dropdown-menu-end">
//                           <a
//                             className="dropdown-item"
//                             href={`/app/projects/detail/${item.id}`}
//                           >
//                             <i className="ri-eye-fill align-bottom me-2 text-muted"></i>
//                             View
//                           </a>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="py-3">
//                 <div className="row gy-3">
//                   <div className="col-6">
//                     <div>
//                       <p className="text-muted mb-2  p-2">Status</p>
//                       <div className="badge badge-soft-warning fs-12">
//                         {item.status}
//                         <div className="badge badge-soft-warning fs-6 p-1">
//                           Inprogess
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-6">
//                     <div>
//                       <p className="text-muted mb-1">Deadline</p>
//                       <h5 className="fs-14">
//                         {new Date(item.endDate).toLocaleDateString()}
//                       </h5>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="row gy-3">
//                   <div className="col-6">
//                     <div>
//                       <p className="text-muted mb-1 p-2">
//                         Lead Need to Be Delivered
//                       </p>
//                       <div className="badge badge-soft-warning fs-12 p-2">
//                         {item.totalLeadsToBeDeliverd}
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-6">
//                     <div>
//                       <p className="text-muted mb-1">Start Date</p>
//                       <h5 className="fs-14">
//                         {new Date(item.startDate).toLocaleDateString()}
//                       </h5>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ProjectList.css";

export default function ProjectList() {
  const [projectList, setProjectList] = useState([]);
  const navigate = useNavigate();

  const fetchProjectList = async () => {
    try {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mbyI6eyJlbWFpbCI6InBvcnRhbGFkbWluQGxtcy5jb20iLCJ1c2VySWQiOiI2NjY2Yjc3NjU3ZTM0YWIyYjAwZTRiN2UiLCJyb2xlIjoiUE9SVEFMX0FETUlOIn0sImV4cGlyZXNJbiI6IjFoIiwiaWF0IjoxNzI2MDY5NjE4fQ.CbagjESOqVTEQy5Ey7S0_QoLenGA-PLiPCkk1gNmUfM";
      if (token) {
        const payload = { limit: 10, page: 1 };
        const response = await axios.post(
          "https://lmsapi.propdoors.com:3000/project/list",
          payload,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        const data = response.data.projects;
        setProjectList(data);
      }
    } catch (error) {
      console.log("Something went wrong", error);
    }
  };

  useEffect(() => {
    fetchProjectList();
  }, []);

  return (
    <div className="row mb-5">
      {projectList.map((item, index) => (
        <div key={index} className="col-xxl-3 col-sm-6 project-card">
          <div
            className="card"
            style={{ cursor: "pointer" }}
            tabIndex="0"
            onClick={() => navigate(`/ProjectTitle/${item.id}`)}
          >
            <div className="card-body">
              <div className="p-3 bg-soft-project rounded-top">
                <div className="d-flex align-items-center">
                  <div className="flex-grow-1">
                    <h5 className="mb-0 fs-14">
                      <a href="#" className="text-white">
                        {item.projectName}
                      </a>
                    </h5>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="d-flex gap-1 align-items-center my-n2">
                      <button
                        type="button"
                        className="btn avatar-xs p-0 favourite-btn shadow-none active"
                      >
                        <span className="avatar-title bg-transparent fs-15">
                          <i className="ri-star-fill"></i>
                        </span>
                      </button>
                      <div className="dropdown">
                        <button
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="true"
                          className="btn btn-link text-muted p-1 mt-n1 py-0 text-decoration-none fs-15 shadow-none"
                        >
                          <i
                            data-feather="more-horizontal"
                            className="icon-sm ri-list-check"
                            style={{ color: "white" }}
                          ></i>
                        </button>
                        <div className="dropdown-menu dropdown-menu-end">
                          <a
                            className="dropdown-item"
                            href={`/Projects/${item.id}`}
                          >
                            <i className="ri-eye-fill align-bottom me-2 text-muted"></i>
                            View
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-3">
                <div className="row gy-3">
                  <div className="col-6">
                    <div>
                      <p className="text-muted mb-2 p-2">Status</p>
                      <div className="badge badge-soft-warning fs-12">
                        {item.status}
                        <div className="badge badge-soft-warning fs-6 p-1">
                          Inprogress
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div>
                      <p className="text-muted mb-1">Deadline</p>
                      <h5 className="fs-14">
                        {new Date(item.endDate).toLocaleDateString()}
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="row gy-3">
                  <div className="col-6">
                    <div>
                      <p className="text-muted mb-1 p-2">
                        Lead Need to Be Delivered
                      </p>
                      <div className="badge badge-soft-warning fs-12 p-2">
                        {item.totalLeadsToBeDeliverd}
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div>
                      <p className="text-muted mb-1">Start Date</p>
                      <h5 className="fs-14">
                        {new Date(item.startDate).toLocaleDateString()}
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
