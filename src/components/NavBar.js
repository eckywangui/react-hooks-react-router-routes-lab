import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

function NavBar() {
  return <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
      <li className="nav-item">
          <Link className="active" aria-current="page" to="/ Home"> Home</Link>
        </li>
        <li className="nav-item">
        <Link className="active"  to="/Movies">Movies</Link>
        </li>
        <li className="nav-item">
          <Link className="active" to="/Directors"> Directors</Link>
        </li>
        <li className="nav-item">
          <Link className="active" to="/Actors"> Actors</Link>
        </li>
      
      </ul>
    </div>
  </div>
</nav>
  </div>;
}

export default NavBar;
