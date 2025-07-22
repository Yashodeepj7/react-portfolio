import { useState, useEffect } from "react";
import Sidebar from "./component/Sidebar";
import Nav from "./component/Nav";
import Foot from "./component/Foot";
import Dashboard from "./component/Dashboard";
// import { TableCompo } from "./component/TableCompo";
import { ContactCompo } from "./component/ContactCompo";
import { FormCompo } from "./component/FormCompo";
import { LoginForm } from "./component/LoginCompo";
import { RegisterForm } from "./component/RegisterCompo";
import { LogoutForm } from "./component/LogoutCompo";
import "./App.css";

function App() {
  const [activeComponent, setActiveComponent] = useState("Dashboard");
  const [showDashboard, setShowDashboard] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn === "true") {
      setShowDashboard(true);
    }
  }, []);

  const handleLogin = () => {
    setShowDashboard(true);
    localStorage.setItem("isLoggedIn", "true");
  };

  const handleLogout = (confirmLogout) => {
    if (confirmLogout) {
      localStorage.removeItem("isLoggedIn");
      setShowDashboard(false);
      setShowLogout(false);
      setShowRegister(false); // ✅ Reset Register page state to false
    } else {
      setShowLogout(false);
    }
  };

  const handleNavigateToRegister = () => {
    setShowRegister(true);
  };

  const handleNavigateToLogin = () => {
    setShowRegister(false);
  };

  return (
    <div className="main d-flex container-md-fluid">
      {/* {showLogout ? (
        <LogoutForm onLogout={handleLogout} />
      ) : !showDashboard ? (
        showRegister ? (
          <RegisterForm onRegister={handleNavigateToLogin} onNavigateToLogin={handleNavigateToLogin} />
        ) : (
          <LoginForm onLogin={handleLogin} onNavigateToRegister={handleNavigateToRegister} />
        )
      ) : ( */}
        <>
          <div className="left w-25 bg-primary">
            <Sidebar setActiveComponent={setActiveComponent} setShowLogout={setShowLogout} />
          </div>
          <div className="right d-flex flex-column w-100 justify-content-between">
            <div className="nav">
              <Nav setShowLogout={setShowLogout} />
            </div>
            <div className="content mx-3 my-5 py-4">
              {activeComponent === "Dashboard" && <Dashboard />}
              {activeComponent === "Table" && <h2>Table Component</h2>}
              {activeComponent === "Home" && <h2>Home Page</h2>}
              {activeComponent === "Contact" && <ContactCompo />}
              {activeComponent === "Form" && <FormCompo />}
              {activeComponent === "Logout" && <LogoutForm />}
            </div>
            <div className="footer">
              <Foot />
            </div>
          </div>
        </>
      {/* )} */}
    </div>
  );
}

export default App;
