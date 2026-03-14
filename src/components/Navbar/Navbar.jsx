import { useEffect, useState } from "react"
import "./Navbar.css"

export default function Navbar() {

  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)

  }, [])

  return (

    <nav
      className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}
    >

      <div className="nav-container">

        <div className="nav-logo">
          Akshat
        </div>

        <div className="nav-links">

          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#lab">Lab</a>
         <a href="#contact">Contact</a>


        </div>

        <div className="nav-right">

          <a
            href="https://github.com/akshat2508"
            target="_blank"
            className="nav-btn"
          >
            Github →
          </a>
           <a
            href="https://drive.google.com/file/d/1G5hX3A5rFrXOmQbWe8jCqtJITaE6UuS2/view?usp=sharing" 
            target="_blank"
            className="nav-btn-cv"
          >
            Resume →
          </a>

        </div>

      </div>

    </nav>

  )
}