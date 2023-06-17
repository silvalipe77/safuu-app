import React, { useState, useEffect } from 'react'
import { Container } from './styles'
import logo from '../../assets/images/logo.png';

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const handleOpenMenu = () => {
    setIsOpenMenu(!isOpenMenu)
  }
  const [color, setColor] = useState("trasparent")
  const navRef = React.useRef()
  useEffect(() => {
      const handleScroll = () => {
          const show = window.scrollY > 310
          if (show) {
            setColor('black')
            navRef.current.classList.add("bg-black")
          } else {
            navRef.current.classList.remove("bg-black")
            setColor('transparent')
            console.log('black')
          }
      }
      document.addEventListener('scroll', handleScroll)
      return () => {
          document.removeEventListener('scroll', handleScroll)
      }
  }, [])

  return (
    <Container bgColor={color} ref={navRef}>
      <div className='header'>
        <img className="logo" src={logo} alt="logo" />
        <nav className='navbar__desktop'>
          <ul>
            <li><a href="#">AI TECH</a></li>
            <li><a href="#">ROADMAP</a></li>
            <li><a href="#">SPP</a></li>
            <li><a href="#">WHITE PAPER</a></li>
            <li><a href="#">DAPP</a></li>
          </ul>
        </nav>
        <button className="mobile-button" onClick={handleOpenMenu}>x</button>
      </div>
      <nav className='navbar__mobile'>
        <ul>
          <li><a href="#">AI TECH</a></li>
          <li><a href="#">ROADMAP</a></li>
          <li><a href="#">SPP</a></li>
          <li><a href="#">WHITE PAPER</a></li>
          <li><a href="#">DAPP</a></li>
        </ul>
      </nav>
    </Container>
  )
}

export default Header