
import "../styles/Navbar.css"


function highlightActiveSection(id) {
  console.log('Hey')
  
}

function Navbar() {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth"
    })
  }



  return (
    <nav>
      <button className="navlink" onClick={() => {
        scrollToSection("home");
        highlightActiveSection("home");
      }}>
        Home
      </button>
      <button className="navlink" onClick={() => {
        scrollToSection("portfolio");
        highlightActiveSection("portfolio");
      }}>
        Portfolio
      </button>
      <button className="navlink" onClick={() => {
        scrollToSection("contact");
        highlightActiveSection("contact");
      }}>
        Contact
      </button>

    </nav>
  )
}

export default Navbar