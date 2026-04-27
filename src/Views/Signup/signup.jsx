import { useState } from "react";
import { Eye, EyeOff, Mail, Lock, User, AlertCircle } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import "./signup.css";
import Navbar from "../../Components/Navbar/navbar.jsx";
import Footer from "../../Components/footer/footer.jsx";

const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePassword = (password) => {
  return password.length >= 6;
};

export default function SignupPage() {
  const navigate = useNavigate(); // 🔥 important

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSignup = (e) => {
    e.preventDefault(); // 🔥 refresh stop
    setError("");

    if (!name || !email || !password || !confirmPassword) {
      setError("All fields are required");
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

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      alert("Signup Successful 🎉");
      navigate("/login"); // 🔥 no refresh
      setLoading(false);
    }, 500);
  };

  return (
    <>
      <Navbar />

      <div className="login-page">
        <div className="login-card">

          <div className="login-header">
            <h1>Create Account</h1>
            <p>Signup to continue</p>
          </div>

          {error && (
            <div className="message-box error-message">
              <AlertCircle size={18} />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSignup} className="login-form">

            {/* Name */}
            <div className="form-group">
              <label>Full Name</label>
              <div className="input-wrapper">
                <span className="input-icon">
                  <User size={18} />
                </span>
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>

            {/* Email */}
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

            {/* Password */}
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

            {/* Confirm Password */}
            <div className="form-group">
              <label>Confirm Password</label>
              <div className="input-wrapper">
                <span className="input-icon">
                  <Lock size={18} />
                </span>
                <input
                  type="password"
                  placeholder="Confirm password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>

            <button className="primary-button" disabled={loading}>
              {loading ? "Creating..." : "Sign Up"}
            </button>
          </form>

          <div className="signup-line">
            Already have an account?{" "}
            <Link to="/login">Login</Link>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}