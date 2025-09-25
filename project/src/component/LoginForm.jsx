import { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";

export const LoginForm = ({ onLogin, onNavigateToRegister }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // For demo: static login credentials
    if (email === "admin777@gmail.com" && password === "123") {
      onLogin(); // call parent function
    } else {
      alert("Invalid email or password!");
    }
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center vh-100 vw-100"
      style={{
        background: "linear-gradient(135deg, #6a11cb, #2575fc)",
      }}
    >
      <div
        className="card shadow-lg p-4"
        style={{
          width: "400px",
          borderRadius: "20px",
          border: "none",
          backdropFilter: "blur(10px)",
          background: "rgba(255, 255, 255, 0.9)",
        }}
      >
        <h2 className="text-center mb-4 fw-bold text-primary">Welcome Back 👋</h2>
        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Email</label>
            <div className="input-group">
              <span className="input-group-text bg-white">
                <FaEnvelope className="text-secondary" />
              </span>
              <input
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                style={{ borderRadius: "10px", padding: "12px" }}
                required
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Password</label>
            <div className="input-group">
              <span className="input-group-text bg-white">
                <FaLock className="text-secondary" />
              </span>
              <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                style={{ borderRadius: "10px", padding: "12px" }}
                required
              />
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="btn w-100 fw-semibold"
            style={{
              borderRadius: "10px",
              padding: "12px",
              fontSize: "16px",
              background: "linear-gradient(135deg, #6a11cb, #2575fc)",
              color: "white",
              border: "none",
              transition: "0.3s",
            }}
            onMouseOver={(e) =>
              (e.target.style.background =
                "linear-gradient(135deg, #2575fc, #6a11cb)")
            }
            onMouseOut={(e) =>
              (e.target.style.background =
                "linear-gradient(135deg, #6a11cb, #2575fc)")
            }
          >
            Login
          </button>
        </form>

        <p className="text-center mt-4 mb-0">
          Don’t have an account?{" "}
          <button
            className="btn btn-link p-0 fw-semibold"
            style={{ textDecoration: "none" }}
            onClick={onNavigateToRegister}
          >
            Register
          </button>
        </p>
      </div>
    </div>
  );
};
