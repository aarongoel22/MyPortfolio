import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Projects from './components/sections/Projects'
import Pricing from './components/sections/Pricing'
import Contact from './components/sections/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <Hero />
      <About />
      <Projects />
      <Pricing />
      <Contact />
    </>
  )
}

export default App
