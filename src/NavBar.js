import { NavLink, Link } from "react-router-dom";

function NavBar(){

  return (
    <nav className="NavBar">
      <div className="NavBar-container">
        <Link to="/">
          PIXLY
        </Link>
        <div className="NavBar-links">
          <NavLink to="/Add"> Add </NavLink>
        </div>
      </div>

    </nav>
  )

}

export default NavBar
