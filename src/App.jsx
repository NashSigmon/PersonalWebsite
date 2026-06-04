import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Footer from "./pages/Footer"
import Navbar from "./pages/Navbar"
import "./styles/App.css"

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    
    </>
    

  )
}

export default App