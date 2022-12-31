import React from 'react'
import Hero from '../components/Hero'
import SideBar from '../components/SideBar'

const Home = () => {
  return (
    <div className='grid nn'>
        <SideBar />
        <div className=''>
            <Hero />
        </div>
        
    </div>
  )
}

export default Home