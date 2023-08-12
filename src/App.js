import Navigation from "./components/Navigation";
import Home from "./components/Home";


import AOS from "aos"
import "aos/dist/aos.css"

import { useEffect } from "react"

function App() {
  useEffect(() => {
    AOS.init()
}, []) 
  return (
    <div>
    <Navigation /> 
    <Home />
    </div>
  )
}

export default App;
