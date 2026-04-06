import { NavLink } from "react-router-dom";
import  img  from "../assets/Logo.png";
export default function Logo() {
  return (
    <div>
      <div>
        <NavLink to={"/"}>
        <img src={img} alt="" className="" />
        </NavLink>
      </div>
    </div>
  )
}
