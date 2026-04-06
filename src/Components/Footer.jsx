import { FaInstagram, FaTelegram, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import img from "../assets/persn2.png";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
  <div className="mb-15">
      <div className="border border-white bg-white/10 backdrop-blur-md text-white  rounded-xl container mt-35! flex justify-around px-2">
      <div>
        <img src={img} alt="" className="-top-37 relative" />
      </div>

      <div className="flex flex-col text-2xl gap-5  mt-16.5">
        <h2 className="text-3xl font-bold">Quick Menu</h2>
       <Link to="linkedin">Linkedin</Link>
       <Link to="behance">Behance</Link>
       <Link to="dribble">Dribble</Link>
       <Link to="figma">Figma</Link>
      </div>


      <div className="flex flex-col align-right text-2xl gap-5 font-mono mt-16.5">
        <h2 className="text-3xl font-bold">Professional Links</h2>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/work">Work</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <span className="absolute  w-380 h-0.5  bg-white top-105"></span>

      <div className="absolute flex gap-250 top-130 items-center">
        <div>
          <p>@ 2026 Nematjanov Shoxjahon All Rights Reserved</p>
        </div>
        <div className="icons flex gap-2.5">
          <motion.a href="https://t.me/nematjaanov" className="border py-2 px-2 rounded-full flex items-center"
          whileHover={{ scale: 1.1}}
          ><FaTelegram size={30}/></motion.a>
          <motion.a href="nematjanovv" className="border py-2 px-2 rounded-full flex items-center"
           whileHover={{scale: 1.1}}
          ><FaInstagram size={30}/></motion.a>
          <motion.a href="" to="https://instagram.com/nematjanovv.001" className="border py-2 px-2 rounded-full"
           whileHover={{scale: 1.1}}
          ><FaTwitter size={30}/></motion.a>
        </div>
      </div>

    </div>
  </div>
  );
}
