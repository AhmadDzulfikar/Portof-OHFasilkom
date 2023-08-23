import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Tentang from "./components/Tentang";
import Portfolio1 from './components/Portfolio1'



import AOS from "aos"
import "aos/dist/aos.css"

import { useEffect } from "react"
import SocialLinks from "./components/SocialLinks";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  useEffect(() => {
    AOS.init()
}, []) 
  return (
    <div>
    <Navigation /> 
    <Home />
    <Tentang />
    <Portfolio1 />
    <Experience />
    <Contact />
    
    <SocialLinks />
    </div>
  )
}

export default App;
