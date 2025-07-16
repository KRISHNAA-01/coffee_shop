import React from 'react'
import Header from '../Components/Header'
import Hero from '../Components/Hero/Hero'
import HighlightsAndReviews from '../Components/HighlightsAndReviews'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div>
        <Header/>
        <Hero/>
        <HighlightsAndReviews/>
        <Footer/>
    </div>
  )
}

export default Home