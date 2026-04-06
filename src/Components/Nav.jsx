import Navbar from './Navbar'
import Logo from './Logo'
import { FaDownload } from 'react-icons/fa'
import { motion } from "framer-motion";

export default function Nav() {
  return (
    <div className=' relative z-10 flex justify-between container mt-10! items-center'>
        <Logo/>
        <Navbar/>
        <motion.div className='flex items-center cursor-pointer gap-1.5 text-amber-50 glow-text' 
         whileHover={{
          scale: 1.1,
          textShadow: "0px 0px 8px rgb(255, 255, 255)",
          boxShadow: "0px 0px 0px rgb(255, 255, 255)"
         }}
        >
            <p className='text-2xl'>Resume</p>
            <FaDownload/>
        </motion.div>
    </div>
  )
}
