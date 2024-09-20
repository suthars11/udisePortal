import axios from "axios";
import React, { useEffect, useState } from "react";

const ClientList = () => {
  const [client, setClient] = useState([]);

  const fetchClientList = async () => {
    try {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mbyI6eyJlbWFpbCI6InBvcnRhbGFkbWluQGxtcy5jb20iLCJ1c2VySWQiOiI2NjY2Yjc3NjU3ZTM0YWIyYjAwZTRiN2UiLCJyb2xlIjoiUE9SVEFMX0FETUlOIn0sImV4cGlyZXNJbiI6IjFoIiwiaWF0IjoxNzI2MDM5MjU1fQ.J_S9Nl2Cyq2_Ql7kke53ZqfAHFUSEwKUF3F2sLbr7xQ";

        // const token = sessionStorage.getItem("token");
      if (token) {
        const payload = {
          limit: 10,
          page: 1,
        };
        const response = await axios.post(
          "https://lmsapi.propdoors.com:3000/client/list",
          payload,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        const data = response.data.clients;
        console.log("this is my Client data:", data);
        data.forEach((client) => {
          console.log("my projects data", client.projects.projectName);
        });
        setClient(data);
      }
    } catch (error) {
      console.error("Something went wrong", error);
    }
  };
  useEffect(() => {
    fetchClientList();
  }, []);

  return (
    <>
      <div className="card-body mb-5">
        <div className="table-responsive table-card mb-1">
          <table id="ClientTable" class="table align-middle">
            <thead className="table-light text-muted">
              <tr>
                <th>S.No</th>
                <th>Client</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Projects</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="list form-check-all">
              {client.map((item, i) => {
                return (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.alternativeEmail}</td>
                    <td>{item.contactNumber}</td>
                    <td>
                      {item.projects.map((project, index) => (
                        <span key={index} className="badge badge-soft-primary">
                          {project.projectName}
                        </span>
                      ))}
                    </td>
                    {/* <td>{item.staus}</td>
                    <td>{item.action}</td> */}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ClientList;
