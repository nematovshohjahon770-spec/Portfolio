import { Link } from "react-router-dom";
import  img  from "../assets/Image.png";
import  img1  from "../Icons/bag.png";
import  img2  from "../Icons/microfone.png";

export default function Header() {
  return (
    <div className="flex container justify-around mt-30!">
      <div className="absolute w-170 h-170 bg-[#F4EB97] rounded-full blur-3xl opacity-40 top-0 right-82"></div>
       <div className="absolute w-170 h-170 bg-[#FF5D20] rounded-full blur-3xl opacity-40 bottom-10 right-0"></div>
      <div className="absolute w-170 h-170 bg-[#5B6CFF] rounded-full blur-3xl opacity-40 -top-20 right-0"></div>
        <div className="a-side text-white">

            <h1 className="text-6xl font-bold leading-tight max-w-15">Nematiy</h1>
           <p className="text-white text-5xl leading-13 tracking-wider max-w-210 mt-10 ">
  An aspiring UI/UX Designer. Who breathes life into pixels, crafting
  interfaces that not only engage but enchant.
</p>
           <div className=" flex gap-10 mt-15">
             
             <div className="relative">
              <Link to="hireMe" className="py-4 px-11 rounded-xl bg-linear-to-b from-[#FFFFFF] to-[#3A3A3A] text-3xl">Hire Me</Link >
              <span className="absolute h-10 w-10 -top-10 -right-5"><img src={img1} alt="" /></span>
             </div>
             <div className="relative">
            <Link to="myStory" className="py-4 px-11 rounded-xl bg-linear-to-b from-[#FFFFFF] to-[#3A3A3A] text-3xl">My Story</Link >
            <span className="absolute h-10 w-10 -bottom-5 -right-4 top-6"><img src={img2} alt="" /></span>
             </div>
            
           </div>
        </div>

        <div className="b-side relative z-10 -mt-12">
            <img src={img} alt="" />
        </div>
    </div>
  )
}
