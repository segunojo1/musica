import React from 'react'
import Hero from '../components/Hero'
import NewReleases from '../components/NewReleases'
import Popular from '../components/Popular'
import SideBar from '../components/SideBar'

const Home = () => {
  return (
    <div className='grid nn'>
        <SideBar />
        <div className=''>
            <Hero />
            <NewReleases />
            <Popular />
        </div>
        
    </div>
  )
}

export default Home