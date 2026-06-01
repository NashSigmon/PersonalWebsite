
import "../styles/Navbar.css"

function Navbar() {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth"
    })
  }

  return (
    <nav>
      <button className="navlink" onClick={() => scrollToSection("home")}>
        Home
      </button>
      <button className="navlink" onClick={() => scrollToSection("portfolio")}>
        Portfolio
      </button>
      <button className="navlink" onClick={() => scrollToSection("contact")}>
        Contact
      </button>

    </nav>
  )
}

export default Navbar