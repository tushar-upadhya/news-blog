import { BookTemplate } from "lucide-react";
import userImg from "../../assets/user.jpg";
import "./navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="user">
        <img src={userImg} alt="User" />
        <p>User Name</p>
      </div>
      <nav className="nav-categories">
        <h1 className="nav-heading">Cat</h1>
        <div className="nav-links">
          <a href="#" className="nav-link">
            General
          </a>
          <a href="#" className="nav-link">
            World
          </a>
          <a href="#" className="nav-link">
            Business
          </a>
          <a href="#" className="nav-link">
            Technology
          </a>
          <a href="#" className="nav-link">
            Entertainment
          </a>
          <a href="#" className="nav-link">
            Sports
          </a>
          <a href="#" className="nav-link">
            Science
          </a>
          <a href="#" className="nav-link">
            Health
          </a>
          <a href="#" className="nav-link">
            Nation
          </a>
          <a href="#" className="nav-link">
            BookMark
            <BookTemplate size={"14"} />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
