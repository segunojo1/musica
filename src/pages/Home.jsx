import React from 'react'
import Hero from '../components/Hero'
import NewReleases from '../components/NewReleases'
import Popular from '../components/Popular'
import SideBar from '../components/SideBar'
import { useState } from 'react'
import { Context } from '../Context'
import Album from '../components/Album'

const Home = () => {
 
  return (
    <div className=''>
      
        <div className='ml-[3rem] md:ml-[7rem]'>
            {/* <Hero/>
            <NewReleases />
            <Popular /> */}
            <Album />
            
        </div>
        
    </div>
  )
}

export default Home