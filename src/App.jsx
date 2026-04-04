import { Route, Routes } from 'react-router-dom'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import Work from './Pages/Work'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Nav from './Components/Nav'
import Header from './Components/Header'
import AboutMe from './Components/AboutMe'
import StatsSection from './Components/StatsSection'
import Projects from './Components/Projects'
import Ads from './Components/Ads'
import RotatingWords from './Components/Rotate'


export default function App() {
  return (
    <div className=''>
      <Nav/>
      <Header/>
      <RotatingWords/>
      <AboutMe/>
      <StatsSection/>
      <Projects/>
      <Ads/>
      <Routes>
  <Route path="/home" element={<Home />} />
  <Route path="/work" element={<Work />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
</Routes>
      <Footer/>
    </div>
  )
}