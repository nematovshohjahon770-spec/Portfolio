import Navbar from './Navbar'
import Logo from './Logo'
import { FaDownload } from 'react-icons/fa'

export default function Nav() {
  return (
    <div className=' relative z-10 flex justify-between container mt-10! items-center'>
        <Logo/>
        <Navbar/>
        <div className='flex items-center  gap-1.5 text-amber-50 glow-text'>
            <p className='text-2xl'>Resume</p>
            <FaDownload/>
        </div>
    </div>
  )
}
