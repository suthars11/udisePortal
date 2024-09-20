// import React from "react";
// import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

// import Dashboard from "./Pages/Dashboard";
// import Projects from "./Pages/Projects";
// import Leads from "./Pages/Leads";
// import Users from "./Pages/Users";
// import Client from "./Pages/Client";

// import Navbar from "./components/Navbar/Navbar";
// import Login from "./components/Login/Login";
// import ProjectAdd from "./components/project/ProjectAdd";
// import CreateLeads from "./components/create/CreateLeads";
// import ClientAdd from "./components/client/ClientAdd";
// import Footer from "./components/footer/Footer";

// const App = () => {
//   const location = useLocation();

//   return (
//     <div>
//       {location.pathname !== "/" && <Navbar />}

//       <Routes>
//         <Route path="/" element={<Login />} />

//         <Route path="/Dashboard" element={<Dashboard />} />
//         <Route path="/Projects" element={<Projects />} />
//         <Route path="/Leads" element={<Leads />} />
//         <Route path="Client" element={<Client />} />
//         <Route path="/Users" element={<Users />} />
//         <Route path="/ProjectAdd" element={<ProjectAdd />} />
//         <Route path="/CreateLeads" element={<CreateLeads />} />
//         <Route path="/ClientAdd" element={<ClientAdd />} />
//       </Routes>
//     </div>
//   );
// };

// const AppWrapper = () => (
//   <BrowserRouter>
// <Footer/>
//     <App />
//   </BrowserRouter>
// );

// export default AppWrapper;

import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Dashboard from "./Pages/Dashboard";
import Projects from "./Pages/Projects";
import Leads from "./Pages/Leads";
import Users from "./Pages/Users";
import Client from "./Pages/Client";

import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import ProjectAdd from "./components/project/ProjectAdd";
import CreateLeads from "./components/create/CreateLeads";
import ClientAdd from "./components/client/ClientAdd";
import Footer from "./components/footer/Footer";

import ProjectTitle from "./components/project/ProjectTitle";

const App = () => {
  const location = useLocation();

  return (
    <div>
      {location.pathname !== "/" && <Navbar />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Leads" element={<Leads />} />
        <Route path="/Client" element={<Client />} />
        <Route path="/Users" element={<Users />} />
        <Route path="/ProjectAdd" element={<ProjectAdd />} />
        <Route path="/CreateLeads" element={<CreateLeads />} />
        <Route path="/ClientAdd" element={<ClientAdd />} />
        <Route path="/ProjectTitle/:id" element={<ProjectTitle />} />
      </Routes>
      {location.pathname !== "/" && <Footer />}{" "}
      {/* Hide footer on login page */}
    </div>
  );
};

const AppWrapper = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default AppWrapper;
