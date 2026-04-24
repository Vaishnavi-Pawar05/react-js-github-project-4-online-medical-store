import { useState, useEffect } from "react";
import { Eye, EyeOff, Mail, Lock, AlertCircle } from "lucide-react";
import "./Login.css";
import Navbar from "../../Components/Navbar/navbar";

const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePassword = (password) => {
  return password.length >= 6;
};

const getStorageKey = () => "loginUser_v1";

const saveUserToStorage = (email, rememberMe = false) => {
  const userData = {
    email,
    loginTime: new Date().toISOString(),
    rememberMe,
  };
  localStorage.setItem(getStorageKey(), JSON.stringify(userData));
};

const getUserFromStorage = () => {
  try {
    const data = localStorage.getItem(getStorageKey());
    return data ? JSON.parse(data) : null;
  } catch {
    return null;
  }
};

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const savedUser = getUserFromStorage();
    if (savedUser && savedUser.rememberMe) {
      setEmail(savedUser.email);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Email and password are required");
      return;
    }

    if (!validateEmail(email)) {
      setError("Invalid email");
      return;
    }

    if (!validatePassword(password)) {
      setError("Password must be 6+ characters");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      saveUserToStorage(email, rememberMe);
      alert("Login Successful 🎉");
      window.location.href = "/";
  setLoading(false);
    }, 500);
  };

  return (
    <>
      <Navbar />

      <div className="login-page">
        <div className="login-card">

          <div className="login-header">
            <h1>Welcome Back!</h1>
            <p>Please login to your account</p>
          </div>

          {error && (
            <div className="message-box error-message">
              <AlertCircle size={18} />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="login-form">
            <div className="form-group">
              <label>Email</label>
              <div className="input-wrapper">
                <span className="input-icon">
                  <Mail size={18} />
                </span>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="form-group">
              <label>Password</label>
              <div className="input-wrapper">
                <span className="input-icon">
                  <Lock size={18} />
                </span>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="icon-button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div className="checkbox-group">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label>Remember me</label>
            </div>

            <button className="primary-button" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          <div className="signup-line">
            Don't have an account?{" "}
            <a href="/signup">Sign Up</a>
          </div>

        </div>
      </div>
    </>
  );
}