// import axios from "axios";
// import React, { useEffect, useState } from "react";

// import "./LeadList.css";

// export default function LeadList() {
//   const [leadList, setLeadList] = useState([]);

//   const fetchLeadList = async () => {
//     try {
//       const token =
//         "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mbyI6eyJlbWFpbCI6InBvcnRhbGFkbWluQGxtcy5jb20iLCJ1c2VySWQiOiI2NjY2Yjc3NjU3ZTM0YWIyYjAwZTRiN2UiLCJyb2xlIjoiUE9SVEFMX0FETUlOIn0sImV4cGlyZXNJbiI6IjFoIiwiaWF0IjoxNzI1ODcyMjE5fQ.mXTd3LTQi-n5kwVUUeoTaGS-O0jXEjxTITsSCSdpdRU";
//       if (token) {
//         const payload = {
//           limit: 10,
//           page: 1,
//         };
//         const response = await axios.post(
//           "https://lmsapi.propdoors.com:3000/lead/list",
//           payload,
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//               "Content-Type": "application/json",
//             },
//           }
//         );
//         const data = response.data.leads;
//         console.log("this is my lead data:", data);
//         setLeadList(data);
//       }
//     } catch (error) {
//       console.error("Something went wrong", error);
//     }
//   };

//   useEffect(() => {
//     fetchLeadList();
//   }, []);

//   return (
//     <div className="container-fluid mb-5">
//       <div className="row">
//         {leadList.map((item, index) => (
//           <div className="col-md-4 col-sm-12 mt-n2">
//             <div className="card mb-0 ribbon-box ribbon-fill ribbon-sm">
//               <div className="ribbon ribbon-info">0</div>
//               <div className="card-body">
//                 <a
//                   data-bs-toggle="collapse"
//                   role="button"
//                   aria-expanded="false"
//                   aria-controls={`contactInitiated${index}`}
//                   className="d-flex align-items-center"
//                   href={`#contactInitiated${index}`}
//                 >
//                   <div className="flex-grow-1 ms-5">
//                     <h6 className="fs-14 mb-1">
//                       {item.name}
//                       <div
//                         className="status"
//                         style={{ textAlign: "end", marginTop: "-18px" }}
//                       >
//                         <span className="badge badge-soft-success text-uppercase mt-3">
//                           Fresh
//                         </span>
//                       </div>
//                     </h6>
//                     <p className="text-muted mb-0">
//                       {item.contactNumber}
//                       <i className="ri-eye-off-line me-4 align-bottom text-muted eye"></i>
//                     </p>
//                   </div>
//                 </a>
//               </div>
//               {/* Collapse section closed by default */}
//               <div
//                 className="border-top border-top-dashed collapse"
//                 id={`contactInitiated${index}`}
//               >
//                 <div className="card-body">
//                   <form noValidate className="ng-valid ng-touched ng-dirty">
//                     <ul className="list-unstyled vstack gap-2 mb-0">
//                       <li>
//                         <div>
//                           <label
//                             htmlFor={`basiInput${index}`}
//                             className="form-label"
//                           >
//                             Change Status
//                           </label>
//                           <select
//                             formControlName="clientStatus"
//                             aria-label="Default select example"
//                             className="form-select mb-3 ng-valid ng-touched ng-dirty"
//                           >
//                             <option selected>Choose...</option>
//                             <option value="Verified">Verified</option>
//                             <option value="Accepted">Accepted</option>
//                             <option>Site Visit</option>
//                             <option value="Location Issue">
//                               Location Issue
//                             </option>
//                             <option value="Budget Issue">Budget Issue</option>
//                             <option value="Lost To Competitor">
//                               Lost To Competitor
//                             </option>
//                             <option value="Not Connected">Not Connected</option>
//                             <option value="Follow Up">Follow Up</option>
//                             <option value="Other">Other</option>
//                           </select>
//                         </div>
//                       </li>
//                       <li>
//                         <div>
//                           <label
//                             htmlFor={`exampleFormControlTextarea${index}`}
//                             className="form-label"
//                           >
//                             Remarks
//                           </label>
//                           <textarea
//                             formControlName="remark"
//                             id={`exampleFormControlTextarea${index}`}
//                             rows="3"
//                             className="form-control ng-untouched ng-pristine ng-valid"
//                           ></textarea>
//                         </div>
//                       </li>
//                     </ul>
//                   </form>
//                 </div>
//                 <div className="card-footer hstack gap-2">
//                   <button className="btn btn-info btn-sm w-100">Cancel</button>
//                   <button className="btn btn-success btn-sm w-100">Save</button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }







// new pagination
// import axios from "axios";
// import React, { useEffect, useState } from "react";

// import "./LeadList.css";

// export default function LeadList() {
//   const [leadList, setLeadList] = useState([]);
//   const [currentPage, setCureentpage] = useState(1);
//   const [rowsPerPage, setRowsPerPage] = useState(10);
//   const indexOflastItem = currentPage * rowsPerPage;
//   const indexOfFirstItem = indexOflastItem - rowsPerPage;
//   const currentItems =leadList?users?slice(indexOfFirstItem,indexOflastItem);
//   const totalPages =Math.ceil(leadList?.total/rowsPerPage);
//   const fetchLeadList = async () => {
//     try {
//       const token =
//         "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mbyI6eyJlbWFpbCI6InBvcnRhbGFkbWluQGxtcy5jb20iLCJ1c2VySWQiOiI2NjY2Yjc3NjU3ZTM0YWIyYjAwZTRiN2UiLCJyb2xlIjoiUE9SVEFMX0FETUlOIn0sImV4cGlyZXNJbiI6IjFoIiwiaWF0IjoxNzI1ODcyMjE5fQ.mXTd3LTQi-n5kwVUUeoTaGS-O0jXEjxTITsSCSdpdRU";
//       if (token) {
//         const payload = {
//           limit: 10,
//           page: 1,
//         };
//         const response = await axios.post(
//           "https://lmsapi.propdoors.com:3000/lead/list",
//           payload,
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//               "Content-Type": "application/json",
//             },
//           }
//         );
//         const data = response.data.leads;
//         console.log("this is my lead data:", data);
//         setLeadList(data);
//       }
//     } catch (error) {
//       console.error("Something went wrong", error);
//     }
//   };

//   useEffect(() => {
//     fetchLeadList();
//   }, []);

//   return (
//     <div className="container-fluid mb-5">
//       <div className="row">
//         {leadList.map((item, index) => (
//           <div className="col-md-4 col-sm-12 mt-n2">
//             <div className="card mb-0 ribbon-box ribbon-fill ribbon-sm">
//               <div className="ribbon ribbon-info">0</div>
//               <div className="card-body">
//                 <a
//                   data-bs-toggle="collapse"
//                   role="button"
//                   aria-expanded="false"
//                   aria-controls={`contactInitiated${index}`}
//                   className="d-flex align-items-center"
//                   href={`#contactInitiated${index}`}
//                 >
//                   <div className="flex-grow-1 ms-5">
//                     <h6 className="fs-14 mb-1">
//                       {item.name}
//                       <div
//                         className="status"
//                         style={{ textAlign: "end", marginTop: "-18px" }}
//                       >
//                         <span className="badge badge-soft-success text-uppercase mt-3">
//                           Fresh
//                         </span>
//                       </div>
//                     </h6>
//                     <p className="text-muted mb-0">
//                       {item.contactNumber}
//                       <i className="ri-eye-off-line me-4 align-bottom text-muted eye"></i>
//                     </p>
//                   </div>

                  
//                 </a>
//                 <div className="col-sm-6">
//                 <ul className="pagination pagination-separated justify-content-center justify-content-sm-end mb-sm-0">
//                   <li className="page-item disabled">
//                     <button
//                       onClick={() => getPageData(currentPage - 1)}
//                       disabled={currentPage === 1}
//                       className="page-link"
//                     >
//                       Previous
//                     </button>
//                   </li>
//                   {[...Array(Math.ceil(totalDocuments / 10))].map(
//                     (_, index) => (
//                       <li
//                         key={index}
//                         className={`page-item ${
//                           index + 1 === currentPage ? "active" : ""
//                         }`}
//                       >
//                         <button
//                           className="page-link"
//                           onClick={() => getPageData(index + 1)}
//                         >
//                           {index + 1}
//                         </button>
//                       </li>
//                     )
//                   )}
//                   <li className="page-item">
//                     <button
//                       onClick={() => getPageData(currentPage + 1)}
//                       disabled={currentPage >= Math.ceil(totalDocuments / 10)}
//                       className="page-link"
//                     >
//                       Next
//                     </button>
//                   </li>
//                 </ul>
//               </div>
//               </div>
//               {/* Collapse section closed by default */}
//               <div
//                 className="border-top border-top-dashed collapse"
//                 id={`contactInitiated${index}`}
//               >
//                 <div className="card-body">
//                   <form noValidate className="ng-valid ng-touched ng-dirty">
//                     <ul className="list-unstyled vstack gap-2 mb-0">
//                       <li>
//                         <div>
//                           <label
//                             htmlFor={`basiInput${index}`}
//                             className="form-label"
//                           >
//                             Change Status
//                           </label>
//                           <select
//                             formControlName="clientStatus"
//                             aria-label="Default select example"
//                             className="form-select mb-3 ng-valid ng-touched ng-dirty"
//                           >
//                             <option selected>Choose...</option>
//                             <option value="Verified">Verified</option>
//                             <option value="Accepted">Accepted</option>
//                             <option>Site Visit</option>
//                             <option value="Location Issue">
//                               Location Issue
//                             </option>
//                             <option value="Budget Issue">Budget Issue</option>
//                             <option value="Lost To Competitor">
//                               Lost To Competitor
//                             </option>
//                             <option value="Not Connected">Not Connected</option>
//                             <option value="Follow Up">Follow Up</option>
//                             <option value="Other">Other</option>
//                           </select>
//                         </div>
//                       </li>
//                       <li>
//                         <div>
//                           <label
//                             htmlFor={`exampleFormControlTextarea${index}`}
//                             className="form-label"
//                           >
//                             Remarks
//                           </label>
//                           <textarea
//                             formControlName="remark"
//                             id={`exampleFormControlTextarea${index}`}
//                             rows="3"
//                             className="form-control ng-untouched ng-pristine ng-valid"
//                           ></textarea>
//                         </div>
//                       </li>
//                     </ul>
//                   </form>
//                 </div>
//                 <div className="card-footer hstack gap-2">
//                   <button className="btn btn-info btn-sm w-100">Cancel</button>
//                   <button className="btn btn-success btn-sm w-100">Save</button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./LeadList.css";

export default function LeadList() {
  const [leadList, setLeadList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(10); // Fixed number of rows per page

  // Calculate the start and end indexes of the items to display on the current page
  const indexOfLastItem = currentPage * rowsPerPage;
  const indexOfFirstItem = indexOfLastItem - rowsPerPage;
  const currentItems = leadList?.slice(indexOfFirstItem, indexOfLastItem); // Get the items for the current page
  const totalPages = Math.ceil(leadList?.length / rowsPerPage); // Total pages calculation

  // Fetch leads from the API
  const fetchLeadList = async () => {
    try {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mbyI6eyJlbWFpbCI6InBvcnRhbGFkbWluQGxtcy5jb20iLCJ1c2VySWQiOiI2NjY2Yjc3NjU3ZTM0YWIyYjAwZTRiN2UiLCJyb2xlIjoiUE9SVEFMX0FETUlOIn0sImV4cGlyZXNJbiI6IjFoIiwiaWF0IjoxNzI1ODcyMjE5fQ.mXTd3LTQi-n5kwVUUeoTaGS-O0jXEjxTITsSCSdpdRU";
      if (token) {
        const payload = {
          limit: 10,
          page: currentPage, // Send current page in the payload
        };
        const response = await axios.post(
          "https://lmsapi.propdoors.com:3000/lead/list",
          payload,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        const data = response.data.leads;
        setLeadList(data);
      }
    } catch (error) {
      console.error("Something went wrong", error);
    }
  };

  useEffect(() => {
    fetchLeadList();
  }, [currentPage]); // Re-fetch data when page changes

  // Handle page change
  const getPageData = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div className="container-fluid mb-5">
      <div className="row">
        {currentItems?.map((item, index) => (
          <div className="col-md-4 col-sm-12 mt-n2" key={index}>
            <div className="card mb-0 ribbon-box ribbon-fill ribbon-sm">
              <div className="ribbon ribbon-info">0</div>
              <div className="card-body">
                <a
                  data-bs-toggle="collapse"
                  role="button"
                  aria-expanded="false"
                  aria-controls={`contactInitiated${index}`}
                  className="d-flex align-items-center"
                  href={`#contactInitiated${index}`}
                >
                  <div className="flex-grow-1 ms-5">
                    <h6 className="fs-14 mb-1">
                      {item.name}
                      <div
                        className="status"
                        style={{ textAlign: "end", marginTop: "-18px" }}
                      >
                        <span className="badge badge-soft-success text-uppercase mt-3">
                          Fresh
                        </span>
                      </div>
                    </h6>
                    <p className="text-muted mb-0">
                      {item.contactNumber}
                      <i className="ri-eye-off-line me-4 align-bottom text-muted eye"></i>
                    </p>
                  </div>
                </a>
              </div>
              <div
                className="border-top border-top-dashed collapse"
                id={`contactInitiated${index}`}
              >
                <div className="card-body">
                  <form noValidate className="ng-valid ng-touched ng-dirty">
                    <ul className="list-unstyled vstack gap-2 mb-0">
                      <li>
                        <div>
                          <label htmlFor={`basiInput${index}`} className="form-label">
                            Change Status
                          </label>
                          <select className="form-select mb-3">
                            <option selected>Choose...</option>
                            <option value="Verified">Verified</option>
                            <option value="Accepted">Accepted</option>
                            <option value="Site Visit">Site Visit</option>
                            <option value="Location Issue">Location Issue</option>
                            <option value="Budget Issue">Budget Issue</option>
                            <option value="Lost To Competitor">Lost To Competitor</option>
                            <option value="Not Connected">Not Connected</option>
                            <option value="Follow Up">Follow Up</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                      </li>
                      <li>
                        <div>
                          <label
                            htmlFor={`exampleFormControlTextarea${index}`}
                            className="form-label"
                          >
                            Remarks
                          </label>
                          <textarea
                            id={`exampleFormControlTextarea${index}`}
                            rows="3"
                            className="form-control"
                          ></textarea>
                        </div>
                      </li>
                    </ul>
                  </form>
                </div>
                <div className="card-footer hstack gap-2">
                  <button className="btn btn-info btn-sm w-100">Cancel</button>
                  <button className="btn btn-success btn-sm w-100">Save</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Pagination Component */}
      <div className="col-sm-6">
        <ul className="pagination pagination-separated justify-content-center justify-content-sm-end mb-sm-0">
          <li className="page-item">
            <button
              onClick={() => getPageData(currentPage - 1)}
              disabled={currentPage === 1}
              className="page-link"
            >
              Previous
            </button>
          </li>
          {[...Array(totalPages)].map((_, index) => (
            <li key={index} className={`page-item ${index + 1 === currentPage ? "active" : ""}`}>
              <button
                className="page-link"
                onClick={() => getPageData(index + 1)}
              >
                {index + 1}
              </button>
            </li>
          ))}
          <li className="page-item">
            <button
              onClick={() => getPageData(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="page-link"
            >
              Next
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
