import React, { Suspense, lazy } from 'react'

// Lazy import components
const Header = lazy(() => import('../components/Header'))
const BackGround = lazy(() => import('../components/BackGround'))
const Section = lazy(() => import('../components/Section'))
const About = lazy(() => import('../components/About'))
const Service = lazy(() => import('../components/Service'))
const Projects = lazy(() => import('../components/Projects'))
const WorkingProcess = lazy(() => import('../components/WorkingProcess'))
const PricingPlan = lazy(() => import('../components/PricingPlan'))
const SessionTwo = lazy(() => import('../components/SessionTwo'))
const Questions = lazy(() => import('../components/Questions'))
const Footer = lazy(() => import('../components/Footer'))

const LandingPage = () => {
  return (
    <Suspense fallback={<div className="text-center p-10">Loading...</div>}>
      <div>
        <Header />
        <BackGround />
        <Section />
        <About />
        <Service />
        <Projects />
        <WorkingProcess />
        <PricingPlan />
        <SessionTwo />
        <Questions />
        <Footer />
      </div>
    </Suspense>
  )
}

export default LandingPage
