import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Games from "./pages/Games"
import Books from "./pages/Books"
import Portfolio from "./pages/Portfolio"
import Contact from "./pages/Contact"
import Navbar from "./Navbar"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/books" element={<Books />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App