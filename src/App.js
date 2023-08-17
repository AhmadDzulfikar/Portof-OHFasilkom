import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Tentang from "./components/Tentang";



import AOS from "aos"
import "aos/dist/aos.css"

import { useEffect } from "react"
import SocialLinks from "./components/SocialLinks";

function App() {
  useEffect(() => {
    AOS.init()
}, []) 
  return (
    <div>
    <Navigation /> 
    <Home />
    <Tentang />

    <SocialLinks />
    </div>
  )
}

export default App;
