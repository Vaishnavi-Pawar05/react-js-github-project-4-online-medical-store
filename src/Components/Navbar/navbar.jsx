import "./navbar.css";
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.png";

function Navbar() {
  return (
    <div className='navbar-container'>

      <Link to="/" className='project-main-title' style={{ textDecoration: "none" }}>
        <img src={logo} alt="logo" />
        <span className='main-title'>MedicalStore</span>
      </Link>

      {/* <div className='project-main-title'>
              <img src={logo} alt="logo" />
              <span className='main-title'>MedicalStore</span>
            </div> */}

      <div className='navbar-menu-container'>
        <Link to="/" className='nav-menu'>Home</Link>
        <Link to="/products" className='nav-menu'>Products</Link>
        <Link to="/order" className='nav-menu'>Order</Link>
        <Link to="/login" className='nav-menu'>Login</Link>
        <Link to="/signup" className='nav-menu'>Sign Up</Link>
      </div>

    </div>
  );
}
export default Navbar;