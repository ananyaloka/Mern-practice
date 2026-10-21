import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>{" | "}
      <Link to="/about">About Us</Link>{" | "}
      <Link to="/services">Services</Link>{" | "}
      <Link to="/contact">Contact Us</Link>{" | "}
      <Link to="/privacy">Privacy Policy</Link>
    </nav>
  );
}

export default Navbar;