
export default function H1({children}) {
  return (
    <div>
         <div className='mt-34! container'>
         <h1 className="text-white text-5xl md:text-7xl font-bold relative inline-block">
        {children}
        <span className="absolute left-0 -bottom-2 w-202     h-0.5 bg-white top-21"></span>
        <span className="absolute right-0 -bottom-2 w-80 h-0.5 border-b-2 top-21 border-white border-dashed"></span>
      </h1>
       </div>
    </div>
  )
}
