import React, { useRef } from 'react'
import './../styles/main.css'

export default function Navbar() {
    const navRef = useRef()

    const mostrarBarra = () => { 
        navRef.current.classList.toggle("responsive_nav")
     }

  return (

  <>
  <header>
    <h3>logo</h3>
    <nav ref={navRef}>
        <a href="/#">Home</a>
        <a href="/#">my work</a>
        <a href="/#">blog</a>
        <a href="/#">about</a>
        <a href="/#">Home</a>

        <button className='nav-btn nav-close-btn' onClick={mostrarBarra}>
            X
        </button>

    </nav>
    <button className='nav-btn' onClick={mostrarBarra}>
        [=]
    </button>
  </header>
  </>
  )
}
