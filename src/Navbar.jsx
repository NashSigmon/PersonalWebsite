import { Link } from "react-router-dom"
import "./Navbar.css"

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/games">Games</Link>
      <Link to="/books">Books</Link>
      <Link to="/portfolio">Portfolio</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  )
}

export default Navbar