import React from 'react'
import Navbar from '../components/Layout/Navbar'
import Hero from '../components/Layout/Hero'
import Features from '../components/Layout/Features'
import GptInsight from '../components/Layout/GptInsight'
import Login from './auth/Login'
import Signup from './auth/Signup'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Features/>
        <GptInsight/>
      

    </div>
  )
}

export default Home