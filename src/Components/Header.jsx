import { Link } from "react-router-dom";
import  img  from "../assets/Image.png";
import  img1  from "../Icons/bag.png";
import  img2  from "../Icons/microfone.png";
import {motion} from "framer-motion"
import { useRef } from "react";

export default function Header() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);

  const handleMove = (e, ref) => {
    const rect = ref.current.getBoundingClientRect();

    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);

    ref.current.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  };

  const handleLeave = (ref) => {
    ref.current.style.transform = `translate(0px, 0px)`;
  };
  return (
    <div className="flex container justify-around mt-30!">
      <div className="absolute w-170 h-170 bg-[#F4EB97] rounded-full blur-3xl opacity-40 top-0 right-82"></div>
       <div className="absolute w-170 h-170 bg-[#FF5D20] rounded-full blur-3xl opacity-40 bottom-10 right-0"></div>
      <div className="absolute w-170 h-170 bg-[#5B6CFF] rounded-full blur-3xl opacity-40 -top-20 right-0"></div>
        <div className="a-side text-white">

            <h1 className="text-6xl font-bold leading-tight max-w-15">Nematiy</h1>
           <motion.p 
            initial={{x: -100, opacity: 0}}
            animate={{x: 0, opacity: 1}}
            transition={{ duration: 1}}
           className="text-white  text-5xl leading-13 tracking-wider max-w-210 mt-10 ">
  An aspiring UI/UX Designer. Who breathes life into pixels, crafting
  interfaces that not only engage but enchant.
</motion.p>
           {/* <div className=" flex gap-10 mt-15">
             
             <motion.div
              whileHover={{scale: 1.05, y: -2}}
              whileTap={{scale: 0.8, y: 1}}
              transition={{type: "spring", stiffness: 500}}
             className="relative">
              <Link to="hireMe" className="py-4 px-11 rounded-xl bg-linear-to-b from-[#FFFFFF] to-[#3A3A3A] text-3xl">Hire Me</Link >
              <span className="absolute h-10 w-10 -top-10 -right-5"><img src={img1} alt="" /></span>
             </motion.div>
             <motion.div
              whileHover={{scale: 1.05, y: -2}}
              whileTap={{scale: 0.9, y: 1}}
              transition={{type: "spring", stiffness: 500}}
             className="relative">
            <Link to="myStory" className="py-4 px-11 rounded-xl bg-linear-to-b from-[#FFFFFF] to-[#3A3A3A] text-3xl">My Story</Link >
            <span className="absolute h-10 w-10 -bottom-5 -right-4 top-6"><img src={img2} alt="" /></span>
             </motion.div>
            
           </div> */}
            <div className="flex gap-10 mt-15">
      
      <motion.div
        ref={ref1}
        onMouseMove={(e) => handleMove(e, ref1)}
        onMouseLeave={() => handleLeave(ref1)}
        // whileHover={{ scale: 1.05, y: -2 }}
        // whileTap={{ scale: 0.8, y: 1 }}
        // transition={{ type: "spring", stiffness: 500 }}
        className="relative inline-block"
      >
        <Link
          to="hireMe"
          className="py-4 px-11 rounded-xl bg-linear-to-b from-[#FFFFFF] to-[#3A3A3A] text-3xl"
        >
          Hire Me
        </Link>
        <span className="absolute h-10 w-10 -top-10 -right-5">
          <img src={img1} alt="" />
        </span>
      </motion.div>

      <motion.div
        ref={ref2}
        onMouseMove={(e) => handleMove(e, ref2)}
        onMouseLeave={() => handleLeave(ref2)}
        // whileHover={{ scale: 1.05, y: -2 }}
        // whileTap={{ scale: 0.9, y: 1 }}
        // transition={{ type: "spring", stiffness: 500 }}
        className="relative inline-block"
      >
        <Link
          to="myStory"
          className="py-4 px-11 rounded-xl bg-linear-to-b from-[#FFFFFF] to-[#3A3A3A] text-3xl"
        >
          My Story
        </Link>
        <span className="absolute h-10 w-10 top-6 -right-4">
          <img src={img2} alt="" />
        </span>
      </motion.div>

    </div>
        </div>

        <div className="b-side relative z-10 -mt-12">
            <img src={img} alt="" />
        </div>
    </div>
  )
}
