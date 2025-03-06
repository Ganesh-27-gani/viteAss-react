import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div> 
       <nav className="navbar   navbar-light bg-light">
  <div className="container-ms "style={{display:"flex", listStyleType:"none"}}>
    <a className="navbar-brand fw-bold" href="#">Navbar</a>
    <li className="nav-item">
    <Link to='/' className="navbar-brand nav-link " href="#">Home</Link>
     </li>
     <li className="nav-item">
    <Link to='/Product/:id' className="navbar-brand nav-link " href="#">Detail</Link>
     </li>
     <li className="nav-item">
    <Link to='/Pagination' className="navbar-brand nav-link " href="#">pagination</Link>
     </li>
    <li className="nav-item">
          <Link to="/Cartpage" className="nav-link navbar-brand" href="#">Cart</Link>
     </li>
  </div>
</nav>
    </div>
  )
}

export default Navbar