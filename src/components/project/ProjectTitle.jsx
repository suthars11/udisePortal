// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Ensure Bootstrap JavaScript bundle is imported
// import "./ProjectTitle.css";
// import Sidebar from "../Sidebar/Sidebar";

// function ProjectTitle() {
//   return (
//     <div
//       style={{
//         display: "flex",
//         minHeight: "100vh",
//         backgroundColor: "#f0f0f0",
//       }}
//     >
//       <Sidebar />
//       <div
//         className="page-content mt-4"
//         style={{ flexGrow: 1, paddingLeft: "20px" }}
//       >
//         <div className="container-fluid">
//           {/* Page Title */}
//           <div className="row mt-4 p-2">
//             <div className="col-12">
//               <div className="page-title-box d-sm-flex align-items-center justify-content-between">
//                 <h4 className="mb-sm-0">Projects</h4>
//                 <div className="page-title-right">
//                   <ol className="breadcrumb m-0">
//                     <li className="breadcrumb-item">
//                       <a href="javascript:void(0);">Projects</a>
//                     </li>
//                     <li className="breadcrumb-item">Project List</li>
//                     <li className="breadcrumb-item active">Project Details</li>
//                   </ol>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Project Overview Section */}
//           <div className="row">
//             <div className="col-lg-12">
//               <div className="card mt-n4 mx-n4">
//                 <div className="bg-soft-warning">
//                   <div className="card-body pb-0 px-4">
//                     <div className="row mb-3">
//                       <div className="col md-auto">
//                         <div className="avatar-md">
//                           <div className="avatar-title bg-white rounded-circle">
//                             SEL001{" "}
//                           </div>
//                         </div>
//                       </div>
//                       <div className="col-md">
//                         <h4 className="fw-bold">Trial-project</h4>
//                         <div className="hstack gap-3 flex-wrap">
//                           <div>
//                             Start Date:{" "}
//                             <span className="fw-medium">Sep 2, 2024</span>
//                           </div>
//                           <div className="vr"></div>
//                           <div>
//                             Due Date:{" "}
//                             <span className="fw-medium">Sep 23, 2024</span>
//                           </div>
//                           <div className="vr"></div>
//                           <div className="badge rounded-pill bg-danger fs-12">
//                             TAT: 12 hours
//                           </div>
//                         </div>
//                       </div>
//                       <div className="col-md-auto">
//                         <div className="hstack gap-1 flex-wrap">
//                           <button className="btn py-0 fs-16 favourite-btn active shadow-none">
//                             <i className="ri-star-fill"></i>
//                           </button>
//                           <button className="btn py-0 fs-16 text-body shadow-none">
//                             <i className="ri-share-line"></i>
//                           </button>
//                           <button className="btn py-0 fs-16 text-body shadow-none">
//                             <i className="ri-flag-line"></i>
//                           </button>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Navigation Tabs */}
//                     <ul className="nav nav-tabs border-bottom-0">
//                       <li className="nav-item">
//                         <a
//                           className="nav-link fw-semibold active"
//                           id="project-overview-tab"
//                           data-bs-toggle="tab"
//                           href="#project-overview"
//                           role="tab"
//                           aria-controls="project-overview"
//                           aria-selected="true"
//                         >
//                           Overview
//                         </a>
//                       </li>
//                       <li className="nav-item">
//                         <a
//                           className="nav-link fw-semibold"
//                           id="project-document-tab"
//                           data-bs-toggle="tab"
//                           href="#project-document"
//                           role="tab"
//                           aria-controls="project-document"
//                           aria-selected="false"
//                         >
//                           Leads
//                         </a>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Tab Content */}
//           <div className="row">
//             <div className="col-lg-12">
//               <div className="tab-content text-muted">
//                 {/* Overview Tab */}
//                 <div
//                   id="project-overview"
//                   className="tab-pane fade show active"
//                   role="tabpanel"
//                   aria-labelledby="project-overview-tab"
//                 >
//                   <div className="row">
//                     <div className="col-xl-12 col-lg-12">
//                       <div className="card">
//                         <div className="card-body">
//                           <h6 className="mb-3 fw-semibold text-uppercase">
//                             Summary
//                           </h6>
//                           <p>Project summary goes here.</p>
//                           <div className="pt-3 border-top border-top-dashed mt-4">
//                             <div className="row">
//                               <div className="col-lg-3 col-sm-6">
//                                 <p className="mb-2 text-uppercase fw-medium">
//                                   Price Start From:
//                                 </p>
//                                 <h5 className="fs-15 mb-0">₹0,020.00</h5>
//                               </div>
//                               <div className="col-lg-3 col-sm-6">
//                                 <p className="mb-2 text-uppercase fw-medium">
//                                   CPL:
//                                 </p>
//                                 <h5 className="fs-15 mb-0">₹0,020.00</h5>
//                               </div>
//                               <div className="col-lg-3 col-sm-6">
//                                 <p className="mb-2 text-uppercase fw-medium">
//                                   Accepted:
//                                 </p>
//                                 <div className="badge bg-success fs-12">0</div>
//                               </div>
//                               <div className="col-lg-3 col-sm-6">
//                                 <p className="mb-2 text-uppercase fw-medium">
//                                   Site Visit:
//                                 </p>
//                                 <div className="badge bg-success fs-12">0</div>
//                               </div>
//                             </div>
//                             <div className="row mt-2">
//                               <div className="col-lg-3 col-sm-6">
//                                 <p className="mb-2 text-uppercase fw-medium">
//                                   Landing Page:
//                                 </p>
//                                 <a
//                                   target="_blank"
//                                   className="fs-15 mb-0"
//                                   href=""
//                                 ></a>
//                               </div>
//                               <div className="col-lg-3 col-sm-6">
//                                 <p className="mb-2 text-uppercase fw-medium">
//                                   Total Leads To Be Delivered:
//                                 </p>
//                                 <h5 className="fs-15 mb-0">23</h5>
//                               </div>
//                               <div className="col-lg-3 col-sm-6">
//                                 <p className="mb-2 text-uppercase fw-medium">
//                                   Delivered Leads Till:
//                                 </p>
//                                 <h5 className="fs-15 mb-0">0</h5>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Leads Tab */}
//                 <div
//                   id="project-document"
//                   className="tab-pane fade"
//                   role="tabpanel"
//                   aria-labelledby="project-document-tab"
//                 >
//                   <div className="card">
//                     <div className="card-body">
//                       <h5 className="card-title">Leads</h5>
//                       <div className="table-responsive">
//                         <table className="table table-borderless align-middle mb-0">
//                           <thead className="table-light">
//                             <tr>
//                               <th>S. No.</th>
//                               <th>Name</th>
//                               <th>Email</th>
//                               <th>Contact Number</th>
//                               <th>Status</th>
//                               <th>Lead Verified Date</th>
//                               <th style={{ width: "120px" }}>Action</th>
//                             </tr>
//                           </thead>
//                           <tbody>
//                             <tr>
//                               <td colSpan="7">
//                                 <div className="noresult text-center">
//                                   <h5 className="mt-2">
//                                     Sorry! No Result Found
//                                   </h5>
//                                 </div>
//                               </td>
//                             </tr>
//                           </tbody>
//                         </table>
//                         <div className="d-flex justify-content-end mb-3">
//                           <div className="pagination-wrap hstack gap-2">
//                             <button className="page-item pagination-prev disabled">
//                               Previous
//                             </button>
//                             <ul className="pagination listjs-pagination mb-0"></ul>
//                             <button className="page-item pagination-next">
//                               Next
//                             </button>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProjectTitle;
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Ensure Bootstrap JavaScript bundle is imported
import "./ProjectTitle.css";
import Sidebar from "../Sidebar/Sidebar";

function ProjectTitle() {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        backgroundColor: "#f0f0f0",
      }}
    >
      <Sidebar />
      <div
        className="page-content mt-4"
        style={{ flexGrow: 1, paddingLeft: "20px" }}
      >
        <div className="container-fluid">
          {/* Page Title */}
          <div className="row mt-4 p-2">
            <div className="col-12">
              <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                <h4 className="mb-sm-0">Projects</h4>
                <div className="page-title-right">
                  <ol className="breadcrumb m-0">
                    <li className="breadcrumb-item">
                      <a href="javascript:void(0);">Projects</a>
                    </li>
                    <li className="breadcrumb-item">Project List</li>
                    <li className="breadcrumb-item active">Project Details</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          {/* Project Overview Section */}
          <div className="row">
            <div className="col-lg-12">
              <div className="card mt-n4 mx-n4">
                <div className="bg-soft-warning">
                  <div className="card-body pb-0 px-4">
                    <div className="row mb-3">
                      <div className="col-md-12">
                        <div className="d-flex align-items-center">
                          {/* Avatar Section */}
                          <div className="avatar-md">
                            <div className="avatar-title bg-white rounded-circle">
                              SEL001
                            </div>
                          </div>

                          {/* Project Details Section */}
                          <div className="ms-3">
                            <h4 className="fw-bold">Trial-project</h4>
                            <div className="hstack gap-3 flex-wrap">
                              <div>
                                Start Date:{" "}
                                <span className="fw-medium">Sep 2, 2024</span>
                              </div>
                              <div className="vr"></div>
                              <div>
                                Due Date:{" "}
                                <span className="fw-medium">Sep 23, 2024</span>
                              </div>
                              <div className="vr"></div>
                              <div className="badge rounded-pill bg-danger fs-12">
                                TAT: 12 hours
                              </div>
                            </div>
                          </div>

                          {/* Button Group for Star, Share, and Flag */}
                          <div className="ms-auto">
                            <div className="hstack gap-1 flex-wrap">
                              <button className="btn py-0 fs-16 favourite-btn active shadow-none">
                                <i className="ri-star-fill"></i>
                              </button>
                              <button className="btn py-0 fs-16 text-body shadow-none">
                                <i className="ri-share-line"></i>
                              </button>
                              <button className="btn py-0 fs-16 text-body shadow-none">
                                <i className="ri-flag-line"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Navigation Tabs */}
                    <ul className="nav nav-tabs border-bottom-0">
                      <li className="nav-item">
                        <a
                          className="nav-link fw-semibold active"
                          id="project-overview-tab"
                          data-bs-toggle="tab"
                          href="#project-overview"
                          role="tab"
                          aria-controls="project-overview"
                          aria-selected="true"
                        >
                          Overview
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link fw-semibold"
                          id="project-document-tab"
                          data-bs-toggle="tab"
                          href="#project-document"
                          role="tab"
                          aria-controls="project-document"
                          aria-selected="false"
                        >
                          Leads
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tab Content */}
          <div className="row">
            <div className="col-lg-12">
              <div className="tab-content text-muted">
                {/* Overview Tab */}
                <div
                  id="project-overview"
                  className="tab-pane fade show active"
                  role="tabpanel"
                  aria-labelledby="project-overview-tab"
                >
                  <div className="row">
                    <div className="col-xl-12 col-lg-12">
                      <div className="card">
                        <div className="card-body">
                          <h6 className="mb-3 fw-semibold text-uppercase">
                            Summary
                          </h6>
                          {/* <p>Project summary goes here.</p> */}
                          <div className="pt-3 border-top border-top-dashed mt-4">
                            <div className="row">
                              <div className="col-lg-3 col-sm-6">
                                <p className="mb-2 text-uppercase fw-medium textdata">
                                  Price Start From:
                                </p>
                                <h5 className="fs-15 mb-0"></h5>
                              </div>
                              <div className="col-lg-3 col-sm-6">
                                <p className="mb-2 text-uppercase fw-medium textdata">
                                  CPL:
                                </p>
                                <h5 className="fs-15 mb-0">₹0,020.00</h5>
                              </div>
                              <div className="col-lg-3 col-sm-6">
                                <p className="mb-2 text-uppercase fw-medium textdata">
                                  Accepted:
                                </p>
                                <div className="badge bg-success fs-12">0</div>
                              </div>
                              <div className="col-lg-3 col-sm-6">
                                <p className="mb-2 text-uppercase fw-medium textdata">
                                  Site Visit:
                                </p>
                                <div className="badge bg-success fs-12">0</div>
                              </div>
                            </div>
                            <div className="row mt-2">
                              <div className="col-lg-3 col-sm-6">
                                <p className="mb-2 text-uppercase fw-medium textdata">
                                  Landing Page:
                                </p>
                                <a
                                  target="_blank"
                                  className="fs-15 mb-0"
                                  href=""
                                ></a>
                              </div>
                              <div className="col-lg-3 col-sm-6">
                                <p className="mb-2 text-uppercase fw-medium textdata">
                                  Total Leads To Be Delivered:
                                </p>
                                <h5 className="fs-15 mb-0">23</h5>
                              </div>
                              <div className="col-lg-3 col-sm-6">
                                <p className="mb-2 text-uppercase fw-medium textdata">
                                  Delivered Leads Till:
                                </p>
                                <h5 className="fs-15 mb-0">0</h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Leads Tab */}
                <div
                  id="project-document"
                  className="tab-pane fade"
                  role="tabpanel"
                  aria-labelledby="project-document-tab"
                >
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Leads</h5>
                      <div className="table-responsive">
                        <table className="table table-borderless align-middle mb-0">
                          <thead className="table-light">
                            <tr>
                              <th>S. No.</th>
                              <th>Name</th>
                              <th>Email</th>
                              <th>Contact Number</th>
                              <th>Status</th>
                              <th>Lead Verified Date</th>
                              <th style={{ width: "120px" }}>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td colSpan="7">
                                <div className="noresult text-center">
                                  <h5 className="mt-2">
                                    Sorry! No Result Found
                                  </h5>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <div className="d-flex justify-content-end mb-3">
                          <div className="pagination-wrap hstack gap-2">
                            <button className="page-item pagination-prev disabled">
                              Previous
                            </button>
                            <ul className="pagination listjs-pagination mb-0"></ul>
                            <button className="page-item pagination-next">
                              Next
                            </button>
                          </div>
                        </div>
                      </div>
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
}

export default ProjectTitle;
