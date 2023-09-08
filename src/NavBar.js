import { NavLink, Link } from "react-router-dom";
import "./NavBar.css";

/** Navigation component renders link to Pixly home and add image form*/

function NavBar(){

  return (
    <nav className="NavBar">
        <Link to="/">
          <div className="NavBar-home">
            PIXLY
          </div>
        </Link>
        <div className="NavBar-links">
          <NavLink to="/Add"> Add </NavLink>
      </div>

    </nav>
  )

}

export default NavBar
