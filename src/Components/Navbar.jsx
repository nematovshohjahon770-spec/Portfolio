import { NavLink } from "react-router-dom";
import { motion } from "framer-motion"
const MotionNavLink = motion(NavLink);


export default function Navbar() {
  return (
    <div>
      
          <nav className="flex gap-8 text-[#1A093E] text-xl">
        <MotionNavLink
        whileHover={{
          scale: 1.1, y: -5,
          transition: 300,
        }}
          to="/" 
          className={({ isActive }) =>
            isActive ? "text-white " : "text-white"
          }
        >
          Home
        </MotionNavLink>
        <MotionNavLink
        whileHover={{
          scale: 1.1, y: -5,
          transition: 300,
        }}
          to="/work"
          className={({ isActive }) =>
            isActive ? "text-white " : "text-white"
          }
        >
          Work
        </MotionNavLink>
       
        <MotionNavLink
        whileHover={{
          scale: 1.1, y: -5,
          transition: 300,
        }}
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-white " : "text-white"
          

          }
        >
          About
        </MotionNavLink>
        <MotionNavLink
        whileHover={{
          scale: 1.1, y: -5,
          transition: 300,
        }}
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-white " : "text-white"
          }
        >
          Contact
        </MotionNavLink>
      </nav>
    </div>
  )
}
