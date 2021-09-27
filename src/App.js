import React, { useEffect, useRef } from 'react';
import Home from './Home'
import Cover from './components/cover'
import './App.css'
import { gsap } from "gsap";

function App() {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.to('.bar', 2, { display: 'none', ease: 'expo.InOut' })
    tl.to('.cover', 2.4, { width: 0, ease: 'expo.InOut' })
    tl.to('.logo', { x: 530, ease: "ease.in" })
    tl.to('.flag', { x:-150, ease: "ease.in" })
    tl.to('.leftSection', { x: 450, ease: 'expo.InOut' })
    tl.to('.App-header', { opacity: 1 })
  }, []);



  return (
    <>
      <Cover />
      <Home />
    </>
  )
}


export default App
