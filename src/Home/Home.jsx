import React from 'react'
import { Hero } from '../Components/Hero/Hero'
import './Home.css'
import { About } from '../Components/About/About'
import { Skills } from '../Components/Skills/Skills'
import { Portafolio } from '../Components/Portafolio/Portafolio'
import { ContactForm } from '../Components/ContactForm/ContactForm'

export const Home = () => {
  return (
    <div className='home' >
    <Hero/>
    <About/>
    <Skills/>
    <Portafolio/>
    <ContactForm/>
    </div>
  )
}
