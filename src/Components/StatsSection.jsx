export default function StatsSection() {
  const data = [
    { num: "5+", text: "Years of Design Experience" },
    { num: "30+", text: "Overal Global Customers" },
    { num: "90+", text: "Projects I Have Worked on" },
  ];

  return (
    <div className="relative w-full h-75   overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/70 to-black/90 "></div>

      <div className="absolute inset-0 flex items-center justify-around text-center font-mono">
        {data.map((item, i) => (
          <div key={i} className="relative px-6">
            
            {i !== 0 && (
              <div className="absolute -left-32 top-1/2 -translate-y-1/2 h-50 w-0.5 bg-white/30"></div>
            )}

            <h1 className="text-5xl md:text-7xl font-bold 
              bg-linear-to-r from-pink-500 to-orange-400 
              bg-clip-text text-transparent
              drop-shadow-[0_0_20px_rgba(255,100,100,0.6)]">
              {item.num}
            </h1>

            <p className="text-white/70 mt-2 text-2xl max-w-70 tracking-wider">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}