import React from 'react';
import { NavLink,Link } from 'react-router-dom';

const NavBar = ({user}) => {
    return ( 
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" to="/">Vidly</Link>
  <div className="collapse navbar-collapse" id="navbarNav">
    <div className="navbar-nav ms-auto">
        <NavLink className="nav-item nav-link" to="/movies">Movies</NavLink>     
        <NavLink className="nav-item nav-link" to="/customers">Customers</NavLink>
        <NavLink className="nav-item nav-link" to="/rentals">Reantals</NavLink>
        {!user &&(
          <React.Fragment>
        <NavLink className="nav-item nav-link" to="/login">login</NavLink>
        <NavLink className="nav-item nav-link" to="/register">Register</NavLink>
        </React.Fragment>
        )}
        {user &&(
          <React.Fragment>
        <NavLink className="nav-item nav-link" to="/profile">{user.name}</NavLink>
        <NavLink className="nav-item nav-link" to="/logout">Logout</NavLink>
        </React.Fragment>
        )}
    </div>
  </div>
</nav>
     );
}
 
export default NavBar;