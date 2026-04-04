import star from "../assets/Star.png";

export default function RotatingWords() {
  const words = [
    "Visual Design",
    "Rapid Prototyping",
    "User Testing",
    "Design Systems",
    "Graphic Design",
  ];

  return (
    <div className="overflow-hidden w-full mt-25  bg-black ">
      <div
        className="flex gap-20 whitespace-nowrap "
        style={{
          animation: "scrollX 15s linear infinite",
          transform: "rotate(100deg)",
          transformOrigin: "left center",
        }}
      >
        {words.map((word, i) => (
          <div
            key={i}
            className="text-2xl font-bold flex items-center gap-3 text-white font-poppins"
          >
            {word}
            <img src={star} alt="" className="w-6 h-6" />
          </div>
        ))}

        {words.map((word, i) => (
          <div
            key={"copy-" + i}
            className="text-2xl font-bold flex items-center gap-3 text-white font-poppins"
          >
            {word}
            <img src={star} alt="" className="w-6 h-6" />
          </div>
        ))}
      </div>

      <style>
        {`
          @keyframes scrollX {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </div> 
  );
}