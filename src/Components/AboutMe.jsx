import img from "../assets/person.png";
import img1 from "../assets/rectangle.png";
import img2 from "../assets/Star1.png";
export default function AboutMe() {
  return (
    <div className="container mt-25!">
        <div className="bg-black py-10 px-6">
      <h1 className="text-white text-5xl md:text-7xl font-bold relative inline-block">
        About Me
        <span className="absolute left-0 -bottom-2 w-72 h-0.5 bg-white"></span>
        <span className="absolute right-0 -bottom-2 w-16 h-0.5 border-b-2 border-white border-dashed"></span>
      </h1>
    </div>
        <div>
            <div className="a-side flex justify-evenly mt-15 relative">
                <img src={img} alt="" className="z-10"/>
                <img src={img1} alt="" className="absolute top-20 left-20 " />
                <img src={img1} alt="" className="absolute top-37 left-22 " />
                <img src={img1} alt="" className="absolute top-53 left-25 " />
                <img src={img2} alt="" className="absolute -top-5 left-100 size-15" />
                <img src={img2} alt="" className="absolute -top-7 left-112  size-5" />
                <p className="text-white text-5xl font-poppins max-w-250 leading-13 relative z-10 tracking-tight">Hey there! I'm Shoxjahon, a passionate UI/UX designer armed with creativity and a love for problem-solving. With a blend of design thinking and user-centric approach, I'm on a mission to create digital experiences that leave a lasting impression. So let's collaborate and bring your vision to life!</p>
            </div>
            
        </div>
    </div>
  )
}
