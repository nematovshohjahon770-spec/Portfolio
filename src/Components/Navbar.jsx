import { NavLink } from "react-router-dom";


export default function Navbar() {
  return (
    <div>
      
          <nav className="flex gap-8 text-[#1A093E] text-xl">
        <NavLink
          to="/" 
          className={({ isActive }) =>
            isActive ? "text-white " : "text-white"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/work"
          className={({ isActive }) =>
            isActive ? "text-white " : "text-white"
          }
        >
          Work
        </NavLink>
       
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-white " : "text-white"
          

          }
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-white " : "text-white"
          }
        >
          Contact
        </NavLink>
      </nav>
    </div>
  )
}
