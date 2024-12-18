import { Link, NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <nav className="flex nav-bar">
      <Link to={"/"}>
        <h3 className="logo">My Life</h3>
      </Link>
      <ul className="flex link-box">
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          {" "}
          <NavLink to={"/blog"}>Blog</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
