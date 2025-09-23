import { useState, useEffect } from "react";
import Sidebar from "./component/Sidebar";
import Nav from "./component/Nav";
import Foot from "./component/Foot";
import Dashboard from "./component/Dashboard";
import { ContactCompo } from "./component/ContactCompo";
import { FormCompo } from "./component/FormCompo";
import { LoginForm } from "./component/LoginForm";
import { RegisterForm } from "./component/RegisterCompo";
import { LogoutForm } from "./component/LogoutCompo";
import AdminCertifications from "./component/AdminCertifications";
import "./App.css";

function App() {
  const [activeComponent, setActiveComponent] = useState("Dashboard");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  // Check login status on first load
  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    if (loggedIn === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  };

  const handleNavigateToRegister = () => {
    setShowRegister(true);
  };

  const handleNavigateToLogin = () => {
    setShowRegister(false);
  };

  return (
    <div className="main d-flex container-md-fluid">
      {/* If not logged in => show login/register page */}
      {!isLoggedIn ? (
        showRegister ? (
          <RegisterForm
            onRegister={handleNavigateToLogin}
            onNavigateToLogin={handleNavigateToLogin}
          />
        ) : (
          <LoginForm
            onLogin={handleLogin}
            onNavigateToRegister={handleNavigateToRegister}
          />
        )
      ) : (
        // If logged in => show dashboard & website
        <>
          <div className="left w-25 bg-primary">
            <Sidebar
              setActiveComponent={setActiveComponent}
              setShowLogout={handleLogout}
            />
          </div>
          <div className="right d-flex flex-column w-100 justify-content-between">
            <div className="nav">
              <Nav setShowLogout={handleLogout} />
            </div>
            <div className="content mx-3 my-5 py-4">
              {activeComponent === "Dashboard" && <Dashboard />}
              {activeComponent === "Certification" && <AdminCertifications />}
              {activeComponent === "Home" && <h2>Home Page</h2>}
              {activeComponent === "Contact" && <ContactCompo />}
              {activeComponent === "Form" && <FormCompo />}
              {activeComponent === "Logout" && <LogoutForm onLogout={handleLogout} />}
            </div>
            <div className="footer">
              <Foot />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
