import React from 'react'
import Header from '../components/Header'
import BackGround from '../components/BackGround'
import Section from '../components/Section'
import About from '../components/About'
import Service from '../components/Service'
import Projects from '../components/Projects'
import WorkingProcess from '../components/WorkingProcess'
import PricingPlan from '../components/PricingPlan'
import SessionTwo from '../components/SessionTwo'
import Questions from '../components/Questions'
import Footer from '../components/Footer'

const LandingPage = () => {
  return (
    <div>
        <Header/>
        <BackGround/>
        <Section/>
        <About/>
        <Service/>
        <Projects/>
        <WorkingProcess/>
        <PricingPlan/>
        <SessionTwo/>
        <Questions/>
        <Footer/>
    </div>
  )
}

export default LandingPage