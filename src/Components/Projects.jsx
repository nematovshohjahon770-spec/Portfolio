import img1 from "../Components/ProjectImg/img1.svg";
import img2 from "../Components/ProjectImg/img2.svg";
import img3 from "../Components/ProjectImg/img3.svg";
import img4 from "../Components/ProjectImg/img4.svg";
import img5 from "../Components/ProjectImg/img5.svg";
export default function Projects() {
  const images = [img1, img2, img3, img4, img5];
  return (
    <div className="container mt-50! relative">
      <div>
        <h1 className="text-white text-5xl md:text-7xl font-bold relative inline-block">
          Projects
          <span className="absolute left-0 -bottom-2 w-62 h-0.5 bg-white top-21"></span>
          <span className="absolute right-0 -bottom-2 w-16 h-0.5 border-b-2 top-21 border-white border-dashed"></span>
        </h1>
      </div>

      <div className="wrapper mt-20 grid grid-cols-2 gap-10 w-340   mx-auto">
        {images.map((img, index) => {
          if (index === 2) {
            return (
              <div key={index} className="col-span-2 flex justify-center">
                <img
                  src={img}
                  alt="img"
                  className=" grow  object-cover rounded-xl "
                />
              </div>
            );
          }

          return (
            <img
              key={index}
              src={img}
              alt="img"
              className="w-full h-125 object-cover rounded-xl"
            />
          );
        })}
      </div>
      <div className="absolute w-300 h-300 bg-[#F4EB97] rounded-full blur-3xl opacity-30 top-0 -z-10 right-10"></div>
      <div className="absolute w-250 h-250 bg-[#FF5D20] rounded-full blur-3xl opacity-30 -z-10 bottom-10 right-0"></div>
      <div className="absolute w-250 h-250 bg-[#5B6CFF] rounded-full blur-3xl opacity-30 -z-10 -bottom-50 -left-10"></div>
    </div>
  );
}
