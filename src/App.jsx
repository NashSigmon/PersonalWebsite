import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Portfolio from "./pages/Portfolio"
import Footer from "./pages/Footer"
import Navbar from "./pages/Navbar"
import "./styles/App.css"

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Portfolio />
      <Footer />
    
    </>
    

  )
}

export default App